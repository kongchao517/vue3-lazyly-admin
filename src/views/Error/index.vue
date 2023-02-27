<!--
 * @Descripttion:404页面
 * @Author: lazyly
 * @Date: 2022-12-20 09:55:26
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-21 14:46:14
-->
<template>
  <div class="ve_404">
    <!-- partial:index.partial.html -->
    <div class="moon"></div>
    <div class="moon__crater moon__crater1"></div>
    <div class="moon__crater moon__crater2"></div>
    <div class="moon__crater moon__crater3"></div>
    <div class="star star1">⭐</div>
    <div class="star star2">⭐</div>
    <div class="star star3">⭐</div>
    <div class="star star4">⭐</div>
    <div class="star star5">⭐</div>
    <slot>
      <div class="error">
        <div class="error__title">404</div>
        <div class="error__subtitle">🐱🐱🐱(⓿_⓿)🐱🐱🐱</div>
        <div class="error__description">看来你是迷路了......</div>
        <router-link to="/">
          <button class="error__button error__button--active">回到首页</button>
        </router-link>
        <!-- <button class="error__button">CONTACT</button> -->
      </div>
    </slot>
    <div v-resize="{ resize: draw3dAstronaut }" class="astronaut">
      <canvas ref="cav"></canvas>
    </div>
  </div>
</template>

<script setup>
import Zdog from 'zdog';
import { ref, onUnmounted, onMounted } from 'vue';

const cav = ref(null);
let timer = null;
onMounted(() => {
  draw3dAstronaut();
});
/**
 * @description: 画3d太空人
 * @param {*}
 * @return {*}
 */
const draw3dAstronaut = () => {
  cav.value.width = cav.value.parentNode.clientWidth;
  cav.value.height = cav.value.parentNode.clientHeight;

  // colours
  const dark_navy = '#131e38';
  const orange = '#fe9642';
  const cream = '#FFF8E7';
  const light_purple = '#7f3f98';
  const dark_purple = '#563795';
  const cheese = '#fbc715';

  // create illo
  const illo = new Zdog.Illustration({
    // set canvas with selector
    element: cav.value,
    dragRotate: true,
    zoom: 0.65,
  });

  /** Body * */
  // Body
  const body = new Zdog.RoundedRect({
    addTo: illo,
    width: 200,
    height: 220,
    color: 'white',
    fill: true,
    cornerRadius: 16,
    stroke: 60,
  });

  // Backpack
  new Zdog.RoundedRect({
    addTo: body,
    width: 180,
    height: 310,
    color: orange,
    fill: true,
    cornerRadius: 24,
    stroke: 120,
    translate: { z: -85, y: -60 },
  });

  /** arm * */
  const arm = new Zdog.RoundedRect({
    addTo: body,
    height: 30,
    width: 28,
    stroke: 60,
    fill: true,
    color: dark_purple,
    translate: { x: -140, y: -64 },
    cornerRadius: 0.05,
  });

  new Zdog.RoundedRect({
    addTo: arm,
    height: 120,
    width: 12,
    stroke: 60,
    fill: true,
    color: cream,
    translate: { y: 120 },
    cornerRadius: 0.05,
  });

  // bubble_arm
  const bubble_arm = new Zdog.Shape({
    addTo: arm,
    path: [{ x: -20 }, { x: 20 }],
    stroke: 32,
    color: light_purple,
    translate: { y: 210 },
  });

  bubble_arm.copy({
    color: dark_purple,
    translate: { y: 230 },
  });

  // hand
  new Zdog.RoundedRect({
    addTo: bubble_arm,
    height: 32,
    width: 22,
    translate: { x: -8, y: 60 },
    fill: true,
    color: cheese,
    stroke: 30,
  });

  new Zdog.RoundedRect({
    addTo: bubble_arm,
    height: 24,
    width: 0,
    translate: { x: 24, y: 50 },
    fill: true,
    color: orange,
    stroke: 20,
  });

  arm.copyGraph({
    translate: { x: 140, y: -64 },
    rotate: { y: Zdog.TAU / 2 },
  });

  /** Leg * */
  const leg = new Zdog.RoundedRect({
    addTo: body,
    height: 160,
    width: 28,
    stroke: 60,
    fill: true,
    color: cream,
    translate: { x: -56, y: 230 },
    cornerRadius: 0.05,
  });

  // bubble_leg
  const bubble_leg = new Zdog.Shape({
    addTo: leg,
    path: [{ x: -28 }, { x: 28 }],
    stroke: 32,
    color: light_purple,
    translate: { y: 100 },
  });

  bubble_leg.copy({
    color: dark_purple,
    translate: { y: 124 },
  });

  // foot
  new Zdog.RoundedRect({
    addTo: leg,
    width: 96,
    height: 24,
    stroke: 40,
    fill: true,
    color: cheese,
    translate: { x: -24, y: 170 },
    cornerRadius: 24,
  });

  leg.copyGraph({
    translate: { x: 56, y: 230 },
    rotate: { y: Zdog.TAU / 2 },
  });

  /** Head * */
  // Head
  const head = new Zdog.RoundedRect({
    addTo: body,
    width: 216,
    height: 180,
    depth: 40,
    cornerRadius: 80,
    stroke: 60,
    color: cream,
    fill: true,
    translate: { y: -300 },
  });

  // add helmet
  const helmet = new Zdog.RoundedRect({
    addTo: head,
    width: 210,
    height: 165,
    cornerRadius: 64,
    color: dark_navy,
    fill: true,
    backface: false,
    translate: { z: 20 },
  });

  // add refletion
  new Zdog.Rect({
    addTo: helmet,
    width: 48,
    height: 2,
    stroke: 10,
    translate: { x: 24, y: -24, z: 10 },
    color: 'white',
    backface: false,
  });

  // add ear
  const ear = new Zdog.RoundedRect({
    addTo: head,
    width: 36,
    height: 72,
    cornerRadius: 80,
    stroke: 20,
    color: orange,
    fill: true,
    translate: { x: -140 },
  });

  ear.copy({
    translate: { x: 140 },
  });

  // neck
  const neck = new Zdog.Shape({
    addTo: head,
    path: [{ x: -110 }, { x: 110 }],
    translate: { y: 120 },
    stroke: 40,
    color: light_purple,
  });

  neck.copy({
    translate: { y: 160 },
    color: dark_purple,
  });

  /** extra * */
  const stripe_1 = new Zdog.Shape({
    addTo: body,
    path: [{ x: -20 }, { x: 20 }],
    stroke: 10,
    translate: { x: 200, z: 200 },
    color: cheese,
  });

  stripe_1.copy({
    translate: { x: 320, y: 200, z: -400 },
    color: cheese,
  });

  stripe_1.copy({
    translate: { x: -220, y: 300, z: -400 },
    color: 'white',
  });

  stripe_1.copy({
    translate: { x: -100, y: 400, z: -280 },
    color: light_purple,
  });

  stripe_1.copy({
    translate: { x: 50, y: -60, z: 150 },
    color: orange,
  });

  stripe_1.copy({
    translate: { x: -250, y: 80, z: 300 },
    color: light_purple,
  });

  stripe_1.copy({
    translate: { x: -350, y: -280, z: 175 },
    color: dark_purple,
  });

  stripe_1.copy({
    translate: { x: 250, y: -380, z: -175 },
    color: 'white',
  });

  // update & render
  illo.updateRenderGraph();

  function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.005;
    illo.rotate.x += 0.005;
    illo.rotate.z += 0.005;
    illo.updateRenderGraph();
    // animate next frame
    timer = requestAnimationFrame(animate);
  }

  // start animation
  animate();
};
onUnmounted(() => {
  cancelAnimationFrame(timer);
  timer = null;
});
</script>

<style lang="scss" scoped>
.ve_404 {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(90deg, #2f3640 23%, #181b20 100%);
}
.moon {
  position: absolute;
  top: -30vh;
  left: -80vh;
  width: 160vh;
  height: 160%;
  content: '';
  background: linear-gradient(90deg, #d0d0d0 48%, #919191 100%);
  border-radius: 50%;
  box-shadow: 0 0 30px -4px rgb(0 0 0 / 50%);
}
.moon__crater {
  position: absolute;
  content: '';
  background: linear-gradient(90deg, #7a7a7a 38%, #c3c3c3 100%);
  border-radius: 100%;
  opacity: 0.6;
}
.moon__crater1 {
  top: 250px;
  left: 500px;
  width: 60px;
  height: 180px;
}
.moon__crater2 {
  top: 650px;
  left: 340px;
  width: 40px;
  height: 80px;
  transform: rotate(55deg);
}
.moon__crater3 {
  top: -20px;
  left: 40px;
  width: 65px;
  height: 120px;
  transform: rotate(250deg);
}
.star {
  position: absolute;
  width: 10px;
  height: 10px;
  color: grey;
  content: '';
  border-radius: 100%;
  opacity: 0.4;
  transform: rotate(250deg);
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes shimmer {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}
.star1 {
  top: 40%;
  left: 50%;
  animation-delay: 1s;
}
.star2 {
  top: 60%;
  left: 90%;
  animation-delay: 3s;
}
.star3 {
  top: 10%;
  left: 70%;
  animation-delay: 2s;
}
.star4 {
  top: 90%;
  left: 40%;
}
.star5 {
  top: 20%;
  left: 30%;
  animation-delay: 0.5s;
}
.astronaut {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 60vw;
  height: 100vh;
}
.error {
  position: absolute;
  top: 400px;
  left: 100px;
  z-index: 1;
  font-family: Righteous, cursive;
  color: #363e49;
  transform: translateY(-60%);
}
.error__title {
  font-size: 10em;
  font-weight: bold;
  color: #d0d0d0;
  text-shadow: -5px -5px 0 rgb(0 0 0 / 70%);
  background-image: linear-gradient(90deg, #d0d0d0 48%, #919191 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.error__subtitle {
  font-size: 2em;
}
.error__description {
  opacity: 0.5;
}
.error__button {
  min-width: 7em;
  padding: 0.5em 2em;
  margin-top: 3em;
  margin-right: 0.5em;
  font-family: Righteous, cursive;
  font-size: 0.75em;
  color: #576375;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #2f3640;
  border-radius: 8em;
  outline: none;
  transition-duration: 0.2s;
}
.error__button:hover {
  color: #21252c;
}
.error__button--active {
  color: white;

  // background-color: $base-color;
  // border: 2px solid $base-color;
}
.error__button--active:hover {
  color: white;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 50%);
}
</style>
