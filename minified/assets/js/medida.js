!function(e){"use strict";function t(e,t){e&&t?(this.tipo=t,this.valor=e):e&&(this.valor=e)}t.REGEXP=XRegExp("^\\s*(?<numero> [-+]?\\d+(?:\\.\\d*)?)   # NUMERO      \n\\s*(?:e(?<exponente> [-+]?\\d+))?     # EXPONENTE   \n\\s*(?<tipo> ([A-Z]+))                 # TIPO        \n((?:\\s+to)?\\s+(?<destino> ([A-Z]+))  # TO          \n)?\\s*$","xi"),t.measures=new Object,t.prototype.toString=function(){return this.valor.toFixed(2)+" "+this.constructor.name},t.prototype.esPrefijo=function(e){return!(!e||!e.match(this.MATCH))},t.convertir=function(e){var o=t.measures,r=XRegExp.exec(e,t.REGEXP);if(!r)return"Introduzca una temperatura valida: 330e-1 Fahrenheit to Celsius";var n=parseFloat(r.numero),s=r.exponente,i=r.tipo,a=r.destino;s&&(n*=Math.pow(10,parseInt(s))),a||(a=i);for(var u=!1,c=!1,p=0,h=Object.keys(o);p<h.length&&(!u||!c);)!u&&o[h[p]].prototype.esPrefijo(i)&&(u=!0,i=o[h[p]].name),!c&&o[h[p]].prototype.esPrefijo(a)&&(c=!0,a=o[h[p]].name),p++;try{if(i!=a){var d=new o[i](n),f="to"+o[a].name;return d[f]()}return d=new o[i](n)}catch(m){return'Desconozco como convertir desde "'+i+'" hasta "'+a+'"'}},e.Medida=t}(this);