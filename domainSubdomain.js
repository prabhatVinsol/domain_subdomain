/*jshint esversion: 6*/
/*global document*/
/*global alert*/
class InputUrl {
	
    getDomainAndSubdomain(text) {
      if (this.isUrlValid(text)) {
        this.showDomainAndSubdomain(text);
      } else {
        alert('Enter valid url.');
      }
    }
  
    isUrlValid(text) {
        let regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
        return regex.test(text);
      }
  
      showDomainAndSubdomain(text) {
      
      let regex = new RegExp("([a-z0-9\\_\\@\\#\\%\\~\\+\\-\\=]{1,}\\.)+[a-z0-9][a-z0-9\-]*", "gi");
      let urlDomainStr = text.match(regex)[0];
          this.getFinalAlert(urlDomainStr);
    }
  
      getFinalAlert(urlDomain) {
      let regex = new RegExp("([a-z0-9\\_\\@\\#\\%\\~\\+\\-\\=]{1,})+", "gi");
      let domainVals = urlDomain.match(regex);
      if (domainVals.length >= 3) {
          alert(`Domain: ${domainVals[domainVals.length - 2]}.${domainVals[domainVals.length - 1]}, Subdomain: ${domainVals[domainVals.length - 3]}`);
          } else {
        alert(`Domain: ${domainVals[domainVals.length - 2]}.${domainVals[domainVals.length - 1]}`);
      }
    }
  }
  
  let inputUrl = new InputUrl();
  
  let submit = document.getElementById('submit');
  submit.addEventListener("click", (event) => inputUrl.getDomainAndSubdomain(form.enterurl.value));
  
  let form = document.forms.inputurl; 
  
  //_@#%~+-=: