<template>
    sadsad
  </template>
  
  <script>
  /* eslint-disable */


  
  export default {
    name: "App",
    methods: {
      onProgress(event) {
        console.log(`Processed: ${event} / 100`);
      },
      hasGenerated() {
        alert("PDF generated successfully!");
      },
      generatePDF() {
        this.$refs.html2Pdf.generatePdf();
      },
    },
    components: {
  
      
    },
  };
  </script>
  
  <style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .np-btn {
    padding: 2px 8px;
    margin: 12px 8px;
    border: 1px solid #da1010;
    width: 110px;
    background: #da1010;
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
  }
  </style>