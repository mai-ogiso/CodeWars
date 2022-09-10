// Safen User Input Part I - htmlspecialchars(8kyu)
// Input <h2>Hello World</h2>
// Output &lt;h2&gt;Hello World&lt;/h2&gt;

function htmlspecialchars(formData) {
    function convert(str){
      let newStr = str;
      switch(str){
        case '<':
          newStr = '&lt;';
          break;
        case '>':
          newStr = '&gt;';
          break;
        case '>':
          newStr = '&gt;';
          break;
        case '"':
          newStr = '&quot;';
          break;
        case '&':
          newStr = '&amp;';
          break;
      }
      return newStr
    }
    let arr = formData.split('');
    return arr.map(item => convert(item)).join('');
  }
  
  console.log(htmlspecialchars('<h2>Hello World</h2>'))