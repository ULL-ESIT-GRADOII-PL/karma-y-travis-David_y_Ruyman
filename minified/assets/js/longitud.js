!function(t){"use strict";function o(t,o){Medida.call(this,t,o)}function e(t){o.call(this,t,"M"),this.toPulgadas=function(){return new r(this.valor/.0254)}}function r(t){o.call(this,t,"P"),this.toMetros=function(){return new e(.0254*t)}}o.prototype=new Medida,o.prototype.constructor=o,e.prototype=new o,e.prototype.MATCH=/^(?:m(?:e(?:t(?:r(?:o(?:s)?)?)?)?)?)$/i,e.prototype.constructor=e,Medida.measures.Metros=e,r.prototype=new o,r.prototype.MATCH=/^(?:p(?:u(?:l(?:g(?:a(?:d(?:a(?:s)?)?)?)?)?)?)?)$/i,r.prototype.constructor=r,Medida.measures.Pulgadas=r,t.Longitud=o,t.Metros=e,t.Pulgadas=r}(this);