<template>
  <Layout>
    <h1>Downloaded Images?</h1>
    <p>The below images should be downloaded locally using a plugin.</p>

    <div>
      <div v-for="(edge, index) in $page.allContentfulAssets.edges">
        <pre>
          <img :src="edge.node.localFile" width="200" alt="">
        </pre>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query allContentfulAsset {
  allContentfulAssets: allContentfulAsset {
    edges {
      node {
        file {
          url
        }
        localFile
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style></style>
