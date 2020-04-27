<template>
  <div id="app">
    <div class="wheel-container">
      <div class="prev"></div>
      <div class="next"></div>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <markdown-agent :markdown-content="markdown.types" />
      </swiper-slide>
      <swiper-slide>
        <markdown-agent :markdown-content="markdown.describe" />
      </swiper-slide>
      <swiper-slide>
        <markdown-agent :markdown-content="markdown.echartsSimpleLine" />
      </swiper-slide>
      <swiper-slide>
        <markdown-agent :markdown-content="markdown.whyNoEcharts" />
      </swiper-slide>
      <swiper-slide>
        <markdown-agent :markdown-content="markdown.whyOnG2" />
      </swiper-slide>
      <swiper-slide>
        <markdown-agent :markdown-content="markdown.useG2" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Part1 from "./views/part1.vue";
import describe from "@/markdown/describe.md";
import types from "@/markdown/types.md";
import echartsSimpleLine from "@/markdown/echarts-simple-line.md";
import whyNoEcharts from "@/markdown/why-no-echarts.md";

const path = require("path");
const files = require.context("@/markdown", false, /\.md$/);
const markdown = {};
files.keys().forEach(key => {
  const name = path
    .basename(key, ".md")
    .split("-")
    .map((str, index) =>
      index ? str.replace(str[0], str[0].toUpperCase()) : str
    )
    .join("");

  markdown[name] = files(key).default || files(key);
});

export default {
  name: "App",
  components: {
    Part1
  },
  data() {
    return {
      markdown,
      swiperOptions: {
        initialSlide: localStorage.getItem("index"),
        navigation: {
          prevEl: ".prev",
          nextEl: ".next"
        },
        allowTouchMove: false,
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          transitionEnd: () => {
            this.changed();
          }
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {},
  methods: {
    changed() {
      if (this.$refs.mySwiper.$swiper) {
        const doms = this.swiper.el.querySelectorAll(".part-box");
        doms.forEach(element => (element.style.overflow = "hidden"));
        setTimeout(() => {
          doms.forEach(element => (element.style.overflow = ""));
        }, 20);
        localStorage.setItem("index", this.swiper.realIndex);
      }
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  padding-left: 40px;
  box-sizing: border-box;
}
.wheel-container {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 40px;
  background: #ccc;
  .prev,
  .next {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
  }
  .prev {
    top: 0;
  }
  .next {
    top: 50%;
  }
}
.swiper-container {
  height: 100%;
}
.part-box {
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}
.highlight {
  height: 100%;
}
pre {
  max-height: 70%;
  overflow: auto;
  margin: 0;
}
.part-left,
.part-right {
  width: 50%;
  float: left;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.part-left {
  background: rgba(224, 66, 102, 0.15);
}
.part-right {
  background: rgba(133, 0, 255, 0.15);
}
</style>
