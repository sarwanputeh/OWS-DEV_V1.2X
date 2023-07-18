<!-- <template>
  <div id="app">
     
    <h1>Vue.js Generate PDF from HTML and Download It</h1>
    <div id="pdf-content">
      <h2>Hello World!</h2>
      <p>This is a PDF document generated from HTML using Vue.js.</p>
    </div>
    <button @click= "downloadPDF">Download PDF</button>
  </div>
  <script type="module">
     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    const app = Vue.createApp({
      methods: {
        async downloadPDF() {
          // Get the HTML content to be converted to PDF
          const htmlContent = document.getElementById("pdf-content").outerHTML;

          // Create a hidden iFrame to load the HTML content and print it
          const iFrame = document.createElement("iframe");
          iFrame.style.display = "none";
          document.body.appendChild(iFrame);

          // Load the HTML content into the iFrame and print it
          const pdfBlob = await new Promise((resolve) => {
            iFrame.onload = () => {
              const iFrameWindow = iFrame.contentWindow;
              iFrameWindow.print();
              iFrameWindow.addEventListener("afterprint", () => {
                // When the print dialog is closed, get the resulting PDF Blob and resolve the Promise
                const pdfBlob = iFrameWindow.Blob;
                resolve(pdfBlob);
                document.body.removeChild(iFrame);
              }, { once: true });
            };
            iFrame.srcdoc = htmlContent;
          });

          // Create a download link for the resulting PDF Blob and trigger the download
          const downloadLink = document.createElement("a");
          downloadLink.href = URL.createObjectURL(pdfBlob);
          downloadLink.download = "my-pdf-document.pdf";
          downloadLink.onclick = () => downloadLink.remove();
          document.body.appendChild(downloadLink);
          downloadLink.click();
        },
      },
    });

    app.mount("#app");
  </script>

</template>
   -->