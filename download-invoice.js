 window.addEventListener('message', function (event) {
          try {
            const data =
              JSON.parse(event.data)
              
            if (data.data.url) {
              const url = data.data.url
              const link = document.createElement('a');
              link.href = url;
              link.target = '_blank';
              link.download = 'The invoice';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          } catch (error) {
           console.error('Error occurred:', error);
          }
        });
