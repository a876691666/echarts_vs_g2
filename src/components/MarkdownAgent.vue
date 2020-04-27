<template>
  <div class="part-box" v-html="markdown"></div>
</template>

<script>
export default {
  name: "MarkdownAgent",
  props: {
    markdownName: String,
    markdownContent: String
  },
  data() {
    return {
      markdown: ""
    };
  },
  watch: {
    markdownName: {
      immediate: true,
      handler: function() {
        if (this.markdownName && !this.markdownContent) {
          import(`../markdown/${this.markdownName}`).then(res => {
            this.markdown = res.default;
          });
        } else {
          this.markdown = "";
        }
      }
    },
    markdownContent: {
      immediate: true,
      handler: function() {
        if (this.markdownContent) {
          this.markdown = this.markdownContent;
        } 
      }
    }
  }
};
</script>

<style lang="scss">
</style>
