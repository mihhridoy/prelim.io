(function () {
  const palettes = [
    { a: [0.02, 0.70, 0.90], b: [0.10, 0.28, 0.58], c: [0.05, 0.40, 0.46] },
    { a: [0.20, 0.72, 0.48], b: [0.04, 0.42, 0.55], c: [0.08, 0.20, 0.38] },
    { a: [0.42, 0.68, 0.95], b: [0.02, 0.42, 0.62], c: [0.04, 0.14, 0.30] },
    { a: [0.70, 0.48, 0.25], b: [0.04, 0.56, 0.62], c: [0.06, 0.17, 0.32] },
    { a: [0.55, 0.72, 0.30], b: [0.02, 0.52, 0.62], c: [0.04, 0.18, 0.32] }
  ];

  function paletteForPath(path) {
    let hash = 0;
    for (let i = 0; i < path.length; i += 1) hash = (hash * 31 + path.charCodeAt(i)) >>> 0;
    return palettes[hash % palettes.length];
  }

  function injectBaseStyles() {
    if (document.getElementById("prelim-neural-vortex-style")) return;
    const style = document.createElement("style");
    style.id = "prelim-neural-vortex-style";
    style.textContent = `
      .prelim-neural-host { position: relative; isolation: isolate; }
      .prelim-neural-host > :not(.prelim-neural-canvas) { position: relative; z-index: 3; }
      .prelim-neural-canvas {
        position: absolute;
        inset: 8% 6%;
        width: 88%;
        height: 84%;
        z-index: 0;
        pointer-events: none;
        opacity: .34;
        mix-blend-mode: screen;
      }
      .prelim-neural-host::before { opacity: .56; }
      @media (prefers-reduced-motion: reduce) {
        .prelim-neural-canvas { display: none; }
      }
    `;
    document.head.appendChild(style);
  }

  function initNeuralVortex(host) {
    const canvas = document.createElement("canvas");
    canvas.className = "prelim-neural-canvas";
    canvas.setAttribute("aria-hidden", "true");
    host.insertBefore(canvas, host.firstChild);
    host.classList.add("prelim-neural-host");

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false }) ||
      canvas.getContext("experimental-webgl", { alpha: true, antialias: false });
    if (!gl) {
      canvas.remove();
      return;
    }

    const palette = paletteForPath(window.location.pathname);
    const pointer = { x: 0, y: 0, tx: window.innerWidth * 0.5, ty: window.innerHeight * 0.45 };

    const vertexSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;
      uniform vec3 u_color_a;
      uniform vec3 u_color_b;
      uniform vec3 u_color_c;

      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }

      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.);
          sine_acc = rotate(sine_acc, 1.);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (.5 + .5 * cos(layer)) / scale;
          scale *= 1.2;
        }
        return res.x + res.y;
      }

      void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);
        float t = .00032 * u_time;
        float noise = neuro_shape(uv, t, p);
        noise = .78 * pow(noise, 3.);
        noise += .42 * pow(noise, 8.);
        noise = max(.0, noise - .58);
        noise *= .82 * (1. - length(vUv - .5));
        vec3 color = mix(u_color_c, u_color_a, .45 + .18 * sin(2.0 * u_scroll_progress + 1.2));
        color = mix(color, u_color_b, .32 + .2 * sin(t * .7));
        gl_FragColor = vec4(color * noise, noise);
      }
    `;

    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn("Neural vortex shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compile(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("Neural vortex program error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      time: gl.getUniformLocation(program, "u_time"),
      ratio: gl.getUniformLocation(program, "u_ratio"),
      pointer: gl.getUniformLocation(program, "u_pointer_position"),
      scroll: gl.getUniformLocation(program, "u_scroll_progress"),
      colorA: gl.getUniformLocation(program, "u_color_a"),
      colorB: gl.getUniformLocation(program, "u_color_b"),
      colorC: gl.getUniformLocation(program, "u_color_c")
    };

    gl.uniform3fv(uniforms.colorA, palette.a);
    gl.uniform3fv(uniforms.colorB, palette.b);
    gl.uniform3fv(uniforms.colorC, palette.c);

    function resize() {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width * dpr));
      const height = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform1f(uniforms.ratio, width / height);
      }
    }

    function render(time) {
      resize();
      pointer.x += (pointer.tx - pointer.x) * 0.07;
      pointer.y += (pointer.ty - pointer.y) * 0.07;
      const rect = host.getBoundingClientRect();
      gl.uniform1f(uniforms.time, time);
      gl.uniform2f(
        uniforms.pointer,
        (pointer.x - rect.left) / Math.max(rect.width, 1),
        1 - ((pointer.y - rect.top) / Math.max(rect.height, 1))
      );
      gl.uniform1f(uniforms.scroll, window.pageYOffset / Math.max(window.innerHeight * 2, 1));
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }

    window.addEventListener("pointermove", (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
    }, { passive: true });

    window.addEventListener("touchmove", (event) => {
      if (!event.touches || !event.touches[0]) return;
      pointer.tx = event.touches[0].clientX;
      pointer.ty = event.touches[0].clientY;
    }, { passive: true });

    requestAnimationFrame(render);
  }

  function init() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    injectBaseStyles();
    document.querySelectorAll(".hero-slide, header.hero").forEach(initNeuralVortex);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
