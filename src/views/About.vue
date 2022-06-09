<template>
  <page-container class="about">
    <h1 class="h2">About this starter repo</h1>

    <aside>
      <template v-for="({ text, href }, i) in links" :key="i">
        <a
          class="App-link"
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ text }}
        </a>

        <span v-if="i < links.length - 1"> | </span>
      </template>
    </aside>

    <p>
      This page is linked up to the global state. Look in
      <code>src/views/About.vue</code> to see how it works.
    </p>

    <h2 class="h3">Getting Started</h2>
    <p>
      This starter is meant to get you hacking quickly. You can freely change
      styles (global or local), rename component files, and/or re-arrange things
      to your liking.
    </p>
    <p>
      This project supports <b>Typescript</b>, <b>SASS/SCSS</b>, and
      <b>Material Icons</b>
      <icon icon="face" />
    </p>
    <hr />

    <h3 class="h4">Path aliasing</h3>
    <p>
      You may see <code>@</code> as an alias when importing files from
      <code>src/</code>. For example:
    </p>

    <ul>
      <li><code>@/components/...</code></li>
      <li><code>@/reach/...</code></li>
    </ul>

    <p>
      This setting can be configured in the
      <code>tsconfig.json</code> file (root directory).
    </p>
    <hr />

    <h3 class="h4">Application State</h3>
    <p>
      The value below is in global state. You can view it on the
      <router-link to="/" title="Home">Home</router-link> page after changing it
      here. It will reset if you reload the window.
    </p>

    <global-count-button />

    <p>
      This project uses a simple global state management system. It is defined
      in
      <code>src/state/index.ts</code>; you can add (or remove) as many
      properties as you want. There is a
      <b> Store Mixin </b>
      that uses it in <code>src/mixins/Store.mixin.ts</code>; you can use that
      for reusable code between components.
    </p>

    <block-quote>
      <b>Fun fact</b>: this uses the same state management library as its
      <a
        href="https://github.com/MrJackdaw/reach-reactjs-starter"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >React variant</a
      >.
    </block-quote>

    <hr />
    <h3 class="h4">CSS and styles</h3>
    <p>
      This starter uses <b>scss</b> for styling. Implementing scoped/un-scoped
      styles, or styling libraries, is entirely up to you!
    </p>

    <h4 class="h5">Global (Default) Styles</h4>
    <p>Global-level styles can be found in <code>src/css</code>.</p>

    <ol>
      <li><code>index.scss</code> All global CSS exports</li>
      <li>
        <code>mixins.scss</code> CSS mixins (e.g. heading fonts; sizes; colors)
      </li>
      <li><code>animations.scss</code> CSS animation classes</li>
      <li>
        <code>reset.scss</code> CSS reset. Only used in <code>App.vue</code>
      </li>
    </ol>
  </page-container>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
import PageContainer from "@/components/Containers/PageContainer.vue";
import { defineComponent } from "vue";
import GlobalCountButton from "@/components/GlobalCountButton.vue";
import BlockQuote from "@/components/Containers/BlockQuote.vue";

export default defineComponent({
  components: { Icon, PageContainer, GlobalCountButton, BlockQuote },

  data: () => ({
    links: [
      { href: "https://reactjs.org", text: "Learn React" },
      { href: "https://docs.reach.sh/index.html", text: "Reach Lang Docs" },
    ],
  }),
});
</script>
