<template>
  <div class="main">
    <!-- 列表区域 -->
    <section>
      <h3>
        博客类
        <span id="todocount">{{blog_list.length}}</span>
      </h3>
      <div class="view">
        <a :href="item.link" v-for="(item,index) in blog_list" :key="index">{{item.title}}</a>
      </div>
    </section>
    <section>
      <h3>
        论坛类
        <span id="todocount">{{forum_list.length}}</span>
      </h3>
      <div class="view">
        <a :href="item.link" v-for="(item,index) in forum_list" :key="index">{{item.title}}</a>
      </div>
    </section>
    <section>
      <h3>
        资源类
        <span id="todocount">{{material_list.length}}</span>
      </h3>
      <div class="view">
        <a :href="item.link" v-for="(item,index) in material_list" :key="index">{{item.title}}</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog_list: [
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        },
        {
          title: "v2ex",
          link: "v2ex.com"
        }
      ],
      forum_list: [],
      material_list: []
    };
  }
};
</script>

<style lang="scss">
.view {
  display: flex;
  margin: 0 10px;
  font-size: 18px;
  flex-wrap: wrap;
  justify-content: left;
  a {
    color: #000;
    // flex: 1;
    max-width: 80px;
    min-width: 40px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin: 0 5px 10px;
    padding: 0 5px;
    border-radius: 3px;
    border-left: 5px solid #629a9c;
    border-right: 5px solid #629a9c;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  }
}
</style>
