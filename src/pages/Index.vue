<template>
  <Layout>
    <h1>Downloaded Images?</h1>
    <p>The below images should be downloaded locally using a plugin.</p>

    <div>
      <div
        v-for="(edge, index) in $page.allContentfulBlockFullWidthMedia.edges"
      >
        <pre>{{ edge.node.media.localFile.src }}</pre>
        <img :src="edge.node.media.localFile.src" width="200" alt="" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query allContentfulBlockFullWidthMedia {
  allContentfulBlockFullWidthMedia: allContentfulBlockFullWidthMedia {
    edges {
      node {
        media {
          file {
            url
          },
          localFile
        }
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style></style>
