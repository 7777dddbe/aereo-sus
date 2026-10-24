(()=>{var _d=0,vh=1,vd=2;var vs=1,yd=2,ur=3,$i=0,Qe=1,je=2,mi=0,Ji=1,ys=2,yh=3,Mh=4,Md=5;var Ms=100,Sd=101,bd=102,wd=103,Ed=104,Td=200,Ad=201,Rd=202,Cd=203,Sh=204,bh=205,Pd=206,Id=207,Ld=208,Dd=209,Nd=210,Fd=211,Ud=212,Od=213,Bd=214,Ca=0,Pa=1,Ia=2,js=3,La=4,Da=5,Na=6,Fa=7,fl=0,zd=1,kd=2,ei=0,wh=1,Eh=2,Th=3,Eo=4,Ah=5,Rh=6,Ch=7;var Ph=300,Ki=301,Ss=302,pl=303,ml=304,To=306,us=1e3,Wn=1001,Ua=1002,un=1003,Hd=1004;var Ao=1005;var Ye=1006,gl=1007;var gi=1008;var Ln=1009,Ih=1010,Lh=1011,dr=1012,xl=1013,ni=1014,Xn=1015,zn=1016,_l=1017,vl=1018,fr=1020,Dh=35902,Nh=35899,Fh=1021,Uh=1022,bn=1023,di=1026,Qi=1027,yl=1028,Ml=1029,ji=1030,Sl=1031;var bl=1033,Ro=33776,Co=33777,Po=33778,Io=33779,wl=35840,El=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37488,Ll=37489,Lo=37490,Dl=37491,Nl=37808,Fl=37809,Ul=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Hl=37815,Gl=37816,Vl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,$l=36494,Jl=36495,Kl=36283,Ql=36284,Do=36285,jl=36286;var zr=2300,Oa=2301,Aa=2302,ah=2303,lh=2400,ch=2401,hh=2402;var Gd=3200;var No=0,Vd=1,ii="",Ne="srgb",kr="srgb-linear",Hr="linear",Ce="srgb";var Ra=7680;var Wd=519,Xd=512,qd=513,Yd=514,tc=515,Zd=516,$d=517,ec=518,Jd=519,Oh=35044,qn=35048;var Bh="300 es",jn=2e3,tr=2001;function _p(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kd(){let s=Gr("canvas");return s.style.display="block",s}var zu={},er=null;function Vr(...s){let t="THREE."+s.shift();er?er("log",t,...s):console.log(t,...s)}function Qd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function te(...s){s=Qd(s);let t="THREE."+s.shift();if(er)er("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=Qd(s);let t="THREE."+s.shift();if(er)er("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function hs(...s){let t=s.join(" ");t in zu||(zu[t]=!0,te(...s))}function jd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tf={[Ca]:Pa,[Ia]:Na,[La]:Fa,[js]:Da,[Pa]:Ca,[Na]:Ia,[Fa]:La,[Da]:js},fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dc=Math.PI/180,Wr=180/Math.PI;function Ci(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function de(s,t,e){return Math.max(t,Math.min(e,s))}function yp(s,t){return(s%t+t)%t}function Nc(s,t,e){return(1-e)*s+e*t}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wh=class Wh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;var dt=Wh,nn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){let S=Math.acos(g),_=Math.sin(S);m=Math.sin(m*S)/_,a=Math.sin(a*S)/_,l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+v*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+v*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xh=class Xh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;var D=Xh,Fc=new D,ku=new nn,qh=class qh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],S=i[1],_=i[4],x=i[7],M=i[2],b=i[5],w=i[8];return r[0]=o*v+a*S+l*M,r[3]=o*g+a*_+l*b,r[6]=o*m+a*x+l*w,r[1]=c*v+h*S+u*M,r[4]=c*g+h*_+u*b,r[7]=c*m+h*x+u*w,r[2]=d*v+f*S+p*M,r[5]=d*g+f*_+p*b,r[8]=d*m+f*x+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qh.prototype.isMatrix3=!0;var ae=qh,Uc=new ae,Hu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let s={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Hr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[kr]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}var ge=Mp();function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,Ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=Gr("canvas")),Ns.width=t.width,Ns.height=t.height;let i=Ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oc(i[o].image)):r.push(Oc(i[o]))}else r=Oc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var bp=0,Bc=new D,Cn=class s extends fi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Wn,i=Wn,r=Ye,o=gi,a=bn,l=Ln,c=s.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ci(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ph;Cn.DEFAULT_ANISOTROPY=1;var Yh=class Yh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(f+1)/2,M=(m+1)/2,b=(h+d)/4,w=(u+v)/4,y=(p+g)/4;return _>x&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=w/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=y/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=w/r,i=y/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;var xe=Yh,za=class extends fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Cn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,v,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Ep)}lookAt(t,e,n){let i=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Bi.crossVectors(n,Nn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Bi.crossVectors(n,Nn)),Bi.normalize(),ta.crossVectors(Nn,Bi),i[0]=Bi.x,i[4]=ta.x,i[8]=Nn.x,i[1]=Bi.y,i[5]=ta.y,i[9]=Nn.y,i[2]=Bi.z,i[6]=ta.z,i[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],_=n[7],x=n[11],M=n[15],b=i[0],w=i[4],y=i[8],T=i[12],R=i[1],E=i[5],C=i[9],L=i[13],P=i[2],F=i[6],U=i[10],O=i[14],X=i[3],H=i[7],W=i[11],G=i[15];return r[0]=o*b+a*R+l*P+c*X,r[4]=o*w+a*E+l*F+c*H,r[8]=o*y+a*C+l*U+c*W,r[12]=o*T+a*L+l*O+c*G,r[1]=h*b+u*R+d*P+f*X,r[5]=h*w+u*E+d*F+f*H,r[9]=h*y+u*C+d*U+f*W,r[13]=h*T+u*L+d*O+f*G,r[2]=p*b+v*R+g*P+m*X,r[6]=p*w+v*E+g*F+m*H,r[10]=p*y+v*C+g*U+m*W,r[14]=p*T+v*L+g*O+m*G,r[3]=S*b+_*R+x*P+M*X,r[7]=S*w+_*E+x*F+M*H,r[11]=S*y+_*C+x*U+M*W,r[15]=S*T+_*L+x*O+M*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15],S=l*f-c*d,_=a*f-c*u,x=a*d-l*u,M=o*f-c*h,b=o*d-l*h,w=o*u-a*h;return e*(v*S-g*_+m*x)-n*(p*S-g*M+m*b)+i*(p*_-v*M+m*w)-r*(p*x-v*b+g*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],S=e*a-n*o,_=e*l-i*o,x=e*c-r*o,M=n*l-i*a,b=n*c-r*a,w=i*c-r*l,y=h*v-u*p,T=h*g-d*p,R=h*m-f*p,E=u*g-d*v,C=u*m-f*v,L=d*m-f*g,P=S*L-_*C+x*E+M*R-b*T+w*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return t[0]=(a*L-l*C+c*E)*F,t[1]=(i*C-n*L-r*E)*F,t[2]=(v*w-g*b+m*M)*F,t[3]=(d*b-u*w-f*M)*F,t[4]=(l*R-o*L-c*T)*F,t[5]=(e*L-i*R+r*T)*F,t[6]=(g*x-p*w-m*_)*F,t[7]=(h*w-d*x+f*_)*F,t[8]=(o*C-a*R+c*y)*F,t[9]=(n*R-e*C-r*y)*F,t[10]=(p*b-v*x+m*S)*F,t[11]=(u*x-h*b-f*S)*F,t[12]=(a*T-o*E-l*y)*F,t[13]=(e*E-n*T+i*y)*F,t[14]=(v*_-p*M-g*S)*F,t[15]=(h*M-u*_+d*S)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,v=o*h,g=o*u,m=a*u,S=l*c,_=l*h,x=l*u,M=n.x,b=n.y,w=n.z;return i[0]=(1-(v+m))*M,i[1]=(f+x)*M,i[2]=(p-_)*M,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+m))*b,i[6]=(g+S)*b,i[7]=0,i[8]=(p+_)*w,i[9]=(g-S)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fs.set(i[0],i[1],i[2]).length(),a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=jn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===jn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===tr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=jn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===jn)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===tr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};dl.prototype.isMatrix4=!0;var ye=dl,Fs=new D,Jn=new ye,wp=new D(0,0,0),Ep=new D(1,1,1),Bi=new D,ta=new D,Nn=new D,Vu=new ye,Wu=new nn,Pn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,Xu=new D,Us=new nn,bi=new ye,ea=new D,Tr=new D,Ap=new D,Rp=new nn,qu=new D(1,0,0),Yu=new D(0,1,0),Zu=new D(0,0,1),$u={type:"added"},Cp={type:"removed"},Os={type:"childadded",child:null},zc={type:"childremoved",child:null},Ze=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new Pn,n=new nn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new ae}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(qu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis(Zu,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis(Zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Tr,ea,this.up):bi.lookAt(ea,Tr,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(bi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($u),Os.child=t,this.dispatchEvent(Os),Os.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cp),zc.child=t,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($u),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new D(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pp={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},na={h:0,s:0,l:0};function kc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=yp(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kc(o,r,t+1/3),this.g=kc(o,r,t),this.b=kc(o,r,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ge.workingToColorSpace(Mn.copy(this),t),Math.round(de(Mn.r*255,0,255))*65536+Math.round(de(Mn.g*255,0,255))*256+Math.round(de(Mn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,r=Mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=Ne){ge.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(na);let n=Nc(zi.h,na.h,e),i=Nc(zi.s,na.s,e),r=Nc(zi.l,na.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new It;It.NAMES=ef;var Yr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ds=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new D,wi=new D,Hc=new D,Ei=new D,Bs=new D,zs=new D,Ju=new D,Gc=new D,Vc=new D,Wc=new D,Xc=new xe,qc=new xe,Yc=new xe,Ri=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Kn.subVectors(t,e),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Kn.subVectors(i,e),wi.subVectors(n,e),Hc.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(wi),l=Kn.dot(Hc),c=wi.dot(wi),h=wi.dot(Hc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,n),Yc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(t,e,n,i){return Kn.subVectors(n,e),wi.subVectors(t,e),Kn.cross(wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Bs.subVectors(i,n),zs.subVectors(r,n),Gc.subVectors(t,n);let l=Bs.dot(Gc),c=zs.dot(Gc);if(l<=0&&c<=0)return e.copy(n);Vc.subVectors(t,i);let h=Bs.dot(Vc),u=zs.dot(Vc);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bs,o);Wc.subVectors(t,r);let f=Bs.dot(Wc),p=zs.dot(Wc);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(zs,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Ju.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Ju,a);let m=1/(g+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),sa.subVectors(this.max,Ar),ks.subVectors(t.a,Ar),Hs.subVectors(t.b,Ar),Gs.subVectors(t.c,Ar),ki.subVectors(Hs,ks),Hi.subVectors(Gs,Hs),os.subVectors(ks,Gs);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-os.z,os.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,os.z,0,-os.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-os.y,os.x,0];return!Zc(e,ks,Hs,Gs,sa)||(e=[1,0,0,0,1,0,0,0,1],!Zc(e,ks,Hs,Gs,sa))?!1:(ra.crossVectors(ki,Hi),e=[ra.x,ra.y,ra.z],Zc(e,ks,Hs,Gs,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new D,new D,new D,new D,new D,new D,new D,new D],Qn=new D,ia=new pi,ks=new D,Hs=new D,Gs=new D,ki=new D,Hi=new D,os=new D,Ar=new D,sa=new D,ra=new D,as=new D;function Zc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){as.fromArray(s,r);let a=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new D,oa=new dt,Ip=0,be=class extends fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zr=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lp=new pi,Rr=new D,$c=new D,Ii=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add($c)),this.expandByPoint(Rr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dp=0,Vn=new ye,Jc=new Ze,Vs=new D,Fn=new pi,Cr=new pi,cn=new D,me=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?$r:Zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Fn.min,Cr.min),Fn.expandByPoint(cn),cn.addVectors(Fn.max,Cr.max),Fn.expandByPoint(cn)):(Fn.expandByPoint(Cr.min),Fn.expandByPoint(Cr.max))}Fn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),cn.add(Vs)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new D,l[y]=new D;let c=new D,h=new D,u=new D,d=new dt,f=new dt,p=new dt,v=new D,g=new D;function m(y,T,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let E=1/(f.x*p.y-p.x*f.y);isFinite(E)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(E),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(E),a[y].add(v),a[T].add(v),a[R].add(v),l[y].add(g),l[T].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,T=S.length;y<T;++y){let R=S[y],E=R.start,C=R.count;for(let L=E,P=E+C;L<P;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new D,x=new D,M=new D,b=new D;function w(y){M.fromBufferAttribute(i,y),b.copy(M);let T=a[y];_.copy(T),_.sub(M.multiplyScalar(M.dot(T))).normalize(),x.crossVectors(b,T);let E=x.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,E)}for(let y=0,T=S.length;y<T;++y){let R=S[y],E=R.start,C=R.count;for(let L=E,P=E+C;L<P;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new be(d,h,u)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Rn=new D,Jr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kc=new D,Np=new D,Fp=new ae,Un=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Kc.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fp.getNormalMatrix(t),i=this.coplanarPoint(Kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Up=0,ti=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Ji,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=bh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sr=class extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Pr=new D,Xs=new D,qs=new D,Ys=new dt,Ir=new dt,nf=new ye,aa=new D,Lr=new D,la=new D,Ku=new dt,Qc=new dt,Qu=new dt,Kr=class extends Ze{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ha(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Jr(n,3,0,!1)),Ws.setAttribute("uv",new Jr(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new dt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ca(aa.set(-.5,-.5,0),qs,o,Xs,i,r),ca(Lr.set(.5,-.5,0),qs,o,Xs,i,r),ca(la.set(.5,.5,0),qs,o,Xs,i,r),Ku.set(0,0),Qc.set(1,0),Qu.set(1,1);let a=t.ray.intersectTriangle(aa,Lr,la,!1,Pr);if(a===null&&(ca(Lr.set(-.5,.5,0),qs,o,Xs,i,r),Qc.set(0,1),a=t.ray.intersectTriangle(aa,la,Lr,!1,Pr),a===null))return;let l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Ri.getInterpolation(Pr,aa,Lr,la,Ku,Qc,Qu,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ca(s,t,e,n,i,r){Ys.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ir.x=r*Ys.x-i*Ys.y,Ir.y=i*Ys.x+r*Ys.y):Ir.copy(Ys),s.copy(t),s.x+=Ir.x,s.y+=Ir.y,s.applyMatrix4(nf)}var Ai=new D,jc=new D,ha=new D,ua=new D,Qr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jc.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ha),a=ua.dot(this.direction),l=-ua.dot(ha),c=ua.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jc).addScaledVector(ha,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,v=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,_=n.z-o.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(h),w,y,T,R,E,C,L,P,F,U,O,X;if(x>=M&&x>=b?(T=l,C=u,F=p,X=m,l>=0?(w=c,y=h,R=d,E=f,L=v,P=g,U=S,O=_):(w=h,y=c,R=f,E=d,L=g,P=v,U=_,O=S)):M>=b?(T=c,C=d,F=v,X=S,c>=0?(w=h,y=l,R=f,E=u,L=g,P=p,U=_,O=m):(w=l,y=h,R=u,E=f,L=p,P=g,U=m,O=_)):(T=h,C=f,F=g,X=_,h>=0?(w=l,y=c,R=u,E=d,L=p,P=v,U=m,O=S):(w=c,y=l,R=d,E=u,L=v,P=p,U=S,O=m)),T===0)return null;let H=w/T,W=y/T,G=1/T,ft=R-H*C,ct=E-W*C,Ct=L-H*F,Bt=P-W*F,Qt=U-H*X,J=O-W*X,nt=Qt*Bt-J*Ct,mt=ft*J-ct*Qt,Gt=Ct*ct-Bt*ft;if(i){if(nt<0||mt<0||Gt<0)return null}else if((nt<0||mt<0||Gt<0)&&(nt>0||mt>0||Gt>0))return null;let Pt=nt+mt+Gt;if(Pt===0)return null;let St=G*(nt*C+mt*F+Gt*X);return(Pt>0?St<0:St>0)?null:this.at(St/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ju=new ye,ls=new Qr,da=new Ii,td=new D,fa=new D,pa=new D,ma=new D,th=new D,ga=new D,ed=new D,xa=new D,$=class extends Ze{constructor(t=new me,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(th.fromBufferAttribute(u,t),o?ga.addScaledVector(th,h):ga.addScaledVector(th.sub(e),h))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(da.containsPoint(ls.origin)===!1&&(ls.intersectSphere(da,td)===null||ls.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(ju.copy(r).invert(),ls.copy(t.ray).applyMatrix4(ju),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,M=_;x<M;x+=3){let b=a.getX(x),w=a.getX(x+1),y=a.getX(x+2);i=_a(this,m,t,n,c,h,u,b,w,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let S=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);i=_a(this,o,t,n,c,h,u,S,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,M=_;x<M;x+=3){let b=x,w=x+1,y=x+2;i=_a(this,m,t,n,c,h,u,b,w,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let S=g,_=g+1,x=g+2;i=_a(this,o,t,n,c,h,u,S,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Op(s,t,e,n,i,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===$i,a),l===null)return null;xa.copy(a),xa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:s}}function _a(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,fa),s.getVertexPosition(l,pa),s.getVertexPosition(c,ma);let h=Op(s,t,e,n,fa,pa,ma,ed);if(h){let u=new D;Ri.getBarycoord(ed,fa,pa,ma,u),i&&(h.uv=Ri.getInterpolatedAttribute(i,a,l,c,u,new dt)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,u,new dt)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Ri.getNormal(fa,pa,ma,d.normal),h.face=d,h.barycoord=u}return h}var Li=class extends Cn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=un,h=un,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=class extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new ye,nd=new ye,va=[],id=new pi,Bp=new ye,Dr=new $,Nr=new Ii,jr=class extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),id.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(id)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Nr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),t.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zs),nd.multiplyMatrices(n,Zs),Dr.matrixWorld=nd,Dr.raycast(t,va);for(let o=0,a=va.length;o<a;o++){let l=va[o];l.instanceId=r,l.object=this,e.push(l)}va.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(i*this.count),i,this.count,yl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new Ii,zp=new dt(.5,.5),ya=new D,rr=class{constructor(t=new Un,e=new Un,n=new Un,i=new Un,r=new Un,o=new Un){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],S=r[12],_=r[13],x=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,m-p,M-S).normalize(),i[1].setComponents(c+o,f+h,m+p,M+S).normalize(),i[2].setComponents(c+a,f+u,m+v,M+_).normalize(),i[3].setComponents(c-a,f-u,m-v,M-_).normalize(),n)i[4].setComponents(l,d,g,x).normalize(),i[5].setComponents(c-l,f-d,m-g,M-x).normalize();else if(i[4].setComponents(c-l,f-d,m-g,M-x).normalize(),e===jn)i[5].setComponents(c+l,f+d,m+g,M+x).normalize();else if(e===tr)i[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=zp.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ya.x=i.normal.x>0?t.max.x:t.min.x,ya.y=i.normal.y>0?t.max.y:t.min.y,ya.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new D,Va=new D,sd=new ye,Fr=new Qr,Ma=new Ii,eh=new D,rd=new D,to=class extends Ze{constructor(t=new me,e=new or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ga.fromBufferAttribute(e,i-1),Va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Va);t.setAttribute("lineDistance",new Kt(n,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;sd.copy(i).invert(),Fr.copy(t.ray).applyMatrix4(sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=h.getX(v),S=h.getX(v+1),_=Sa(this,t,Fr,l,m,S,v);_&&e.push(_)}if(this.isLineLoop){let v=h.getX(p-1),g=h.getX(f),m=Sa(this,t,Fr,l,v,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=Sa(this,t,Fr,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){let v=Sa(this,t,Fr,l,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sa(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Ga.fromBufferAttribute(a,i),Va.fromBufferAttribute(a,r),e.distanceSqToSegment(Ga,Va,eh,rd)>n)return;eh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(eh);if(!(c<t.near||c>t.far))return{distance:c,point:rd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var eo=class extends Cn{constructor(t=[],e=Ki,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends Cn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends Cn{constructor(t,e,n=ni,i,r,o,a=un,l=un,c,h=di,u=1){if(h!==di&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wa=class extends Vi{constructor(t,e=ni,n=Ki,i,r,o=un,a=un,l,c=di){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ie=class s extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function p(v,g,m,S,_,x,M,b,w,y,T){let R=x/w,E=M/y,C=x/2,L=M/2,P=b/2,F=w+1,U=y+1,O=0,X=0,H=new D;for(let W=0;W<U;W++){let G=W*E-L;for(let ft=0;ft<F;ft++){let ct=ft*R-C;H[v]=ct*S,H[g]=G*_,H[m]=P,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[m]=b>0?1:-1,h.push(H.x,H.y,H.z),u.push(ft/w),u.push(1-W/y),O+=1}}for(let W=0;W<y;W++)for(let G=0;G<w;G++){let ft=d+G+F*W,ct=d+G+F*(W+1),Ct=d+(G+1)+F*(W+1),Bt=d+(G+1)+F*W;l.push(ft,ct,Bt),l.push(ct,Ct,Bt),X+=6}a.addGroup(f,X,T),f+=X,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class s extends me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_e=class s extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],g=n/2,m=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function S(){let x=new D,M=new D,b=0,w=(e-t)/n;for(let y=0;y<=r;y++){let T=[],R=y/r,E=R*(e-t)+t;for(let C=0;C<=i;C++){let L=C/i,P=L*l+a,F=Math.sin(P),U=Math.cos(P);M.x=E*F,M.y=-R*n+g,M.z=E*U,u.push(M.x,M.y,M.z),x.set(F,w,U).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-R),T.push(p++)}v.push(T)}for(let y=0;y<i;y++)for(let T=0;T<r;T++){let R=v[T][y],E=v[T+1][y],C=v[T+1][y+1],L=v[T][y+1];(t>0||T!==0)&&(h.push(R,E,L),b+=3),(e>0||T!==r-1)&&(h.push(E,C,L),b+=3)}c.addGroup(m,b,0),m+=b}function _(x){let M=p,b=new dt,w=new D,y=0,T=x===!0?t:e,R=x===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let E=p;for(let C=0;C<=i;C++){let P=C/i*l+a,F=Math.cos(P),U=Math.sin(P);w.x=T*U,w.y=g*R,w.z=T*F,u.push(w.x,w.y,w.z),d.push(0,R,0),b.x=F*.5+.5,b.y=U*.5*R+.5,f.push(b.x,b.y),p++}for(let C=0;C<i;C++){let L=M+C,P=E+C;x===!0?h.push(P,P+1,L):h.push(P+1,P,L),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fs=class s extends _e{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xa=class s extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new D,x=new D,M=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],x),f(e[b+2],M),l(_,x,M,S)}function l(S,_,x,M){let b=M+1,w=[];for(let y=0;y<=b;y++){w[y]=[];let T=S.clone().lerp(x,y/b),R=_.clone().lerp(x,y/b),E=b-y;for(let C=0;C<=E;C++)C===0&&y===b?w[y][C]=T:w[y][C]=T.clone().lerp(R,C/E)}for(let y=0;y<b;y++)for(let T=0;T<2*(b-y)-1;T++){let R=Math.floor(T/2);T%2===0?(d(w[y][R+1]),d(w[y+1][R]),d(w[y][R])):(d(w[y][R+1]),d(w[y+1][R+1]),d(w[y+1][R]))}}function c(S){let _=new D;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(S),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let S=new D;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let x=g(S)/2/Math.PI+.5,M=m(S)/Math.PI+.5;o.push(x,1-M)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){let _=o[S+0],x=o[S+2],M=o[S+4],b=Math.max(_,x,M),w=Math.min(_,x,M);b>.9&&w<.1&&(_<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,_){let x=S*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function p(){let S=new D,_=new D,x=new D,M=new D,b=new dt,w=new dt,y=new dt;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),b.set(o[R+0],o[R+1]),w.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),M.copy(S).add(_).add(x).divideScalar(3);let E=g(M);v(b,R+0,S,E),v(w,R+2,_,E),v(y,R+4,x,E)}}function v(S,_,x,M){M<0&&S.x===1&&(o[_]=S.x-1),x.x===0&&x.z===0&&(o[_]=M/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new dt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,i=[],r=[],o=[],a=new D,l=new ye;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(de(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(de(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends On{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qa=class extends ar{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var od=new D,ad=new D,nh=new zh,ih=new zh,sh=new zh,Wi=class extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ad.subVectors(i[0],i[1]).add(i[0]),c=ad);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(od.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=od),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),nh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),ih.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),sh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ih.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nh.calc(l),ih.calc(l),sh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ld(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function kp(s,t){let e=1-s;return e*e*t}function Hp(s,t){return 2*(1-s)*s*t}function Gp(s,t){return s*s*t}function Or(s,t,e,n){return kp(s,t)+Hp(s,e)+Gp(s,n)}function Vp(s,t){let e=1-s;return e*e*e*t}function Wp(s,t){let e=1-s;return 3*e*e*s*t}function Xp(s,t){return 3*(1-s)*s*s*t}function qp(s,t){return s*s*s*t}function Br(s,t,e,n,i){return Vp(s,t)+Wp(s,e)+Xp(s,n)+qp(s,i)}var io=class extends On{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,i.x,r.x,o.x,a.x),Br(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends On{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,i.x,r.x,o.x,a.x),Br(t,i.y,r.y,o.y,a.y),Br(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},so=class extends On{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends On{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends On{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,i.x,r.x,o.x),Or(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends On{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,i.x,r.x,o.x),Or(t,i.y,r.y,o.y),Or(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ld(a,l.x,c.x,h.x,u.x),ld(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new dt().fromArray(i))}return this}},$a=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:Wi,CubicBezierCurve:io,CubicBezierCurve3:Ya,EllipseCurve:ar,LineCurve:so,LineCurve3:Za,QuadraticBezierCurve:ro,QuadraticBezierCurve3:oo,SplineCurve:ao}),Ja=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new $a[i.type]().fromJSON(i))}return this}},lo=class extends Ja{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new so(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ro(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new io(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ao(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new ar(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xi=class extends lo{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new lo().fromJSON(i))}return this}};function Yp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=sf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Qp(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return co(r,o,e,a,l,c,0),o}function sf(s,t,e,n,i){let r;if(i===c0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=cd(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=cd(o/n|0,s[o],s[o+1],r);return r&&lr(r,r.next)&&(uo(r),r=r.next),r}function ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(lr(e,e.next)||We(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function co(s,t,e,n,i,r,o){if(!s)return;!o&&r&&i0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?$p(s,n,i,r):Zp(s)){t.push(l.i,s.i,c.i),uo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Jp(ps(s),t),co(s,t,e,n,i,r,2)):o===2&&Kp(s,t,e,n,i,r):co(ps(s),t,e,n,i,r,1);break}}}function Zp(s){let t=s.prev,e=s,n=s.next;if(We(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ur(i,a,r,l,o,c,p.x,p.y)&&We(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function $p(s,t,e,n){let i=s.prev,r=s,o=s.next;if(We(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),v=Math.max(a,l,c),g=Math.max(h,u,d),m=uh(f,p,t,e,n),S=uh(v,g,t,e,n),_=s.prevZ,x=s.nextZ;for(;_&&_.z>=m&&x&&x.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&Ur(a,h,l,u,c,d,_.x,_.y)&&We(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Ur(a,h,l,u,c,d,x.x,x.y)&&We(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&Ur(a,h,l,u,c,d,_.x,_.y)&&We(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Ur(a,h,l,u,c,d,x.x,x.y)&&We(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!lr(n,i)&&of(n,e,e.next,i)&&ho(n,i)&&ho(i,n)&&(t.push(n.i,e.i,i.i),uo(e),uo(e.next),e=s=i),e=e.next}while(e!==s);return ps(e)}function Kp(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&o0(o,a)){let l=af(o,a);o=ps(o,o.next),l=ps(l,l.next),co(o,t,e,n,i,r,0),co(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Qp(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=sf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(r0(c))}i.sort(jp);for(let r=0;r<i.length;r++)e=t0(i[r],e);return e}function jp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function t0(s,t){let e=e0(s,t);if(!e)return t;let n=af(e,s);return ps(n,n.next),ps(e,e.next)}function e0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(lr(s,e))return e;do{if(lr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&rf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);ho(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&n0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function n0(s,t){return We(s.prev,s,t.prev)<0&&We(t.next,s,s.next)<0}function i0(s,t,e,n){let i=s;do i.z===0&&(i.z=uh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,s0(i)}function s0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function uh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function r0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function rf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ur(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&rf(s,t,e,n,i,r,o,a)}function o0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!a0(s,t)&&(ho(s,t)&&ho(t,s)&&l0(s,t)&&(We(s.prev,s,t.prev)||We(s,t.prev,t))||lr(s,t)&&We(s.prev,s,s.next)>0&&We(t.prev,t,t.next)>0)}function We(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function lr(s,t){return s.x===t.x&&s.y===t.y}function of(s,t,e,n){let i=wa(We(s,t,e)),r=wa(We(s,t,n)),o=wa(We(e,n,s)),a=wa(We(e,n,t));return!!(i!==r&&o!==a||i===0&&ba(s,e,t)||r===0&&ba(s,n,t)||o===0&&ba(e,s,n)||a===0&&ba(e,t,n))}function ba(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wa(s){return s>0?1:s<0?-1:0}function a0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&of(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ho(s,t){return We(s.prev,s,s.next)<0?We(s,t,s.next)>=0&&We(s,s.prev,t)>=0:We(s,t,s.prev)<0||We(s,s.next,t)<0}function l0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function af(s,t){let e=dh(s.i,s.x,s.y),n=dh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cd(s,t,e,n){let i=dh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function uo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var fh=class{static triangulate(t,e,n=2){return Yp(t,e,n)}},ui=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];hd(t),ud(n,t);let o=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ud(n,e[l]);let a=fh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ud(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var fo=class s extends me{constructor(t=new Xi([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(i,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:h0,_,x=!1,M,b,w,y;if(m){_=m.getSpacedPoints(h),x=!0,d=!1;let et=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,et),b=new D,w=new D,y=new D}d||(g=0,f=0,p=0,v=0);let T=a.extractPoints(c),R=T.shape,E=T.holes;if(!ui.isClockWise(R)){R=R.reverse();for(let et=0,ot=E.length;et<ot;et++){let ht=E[et];ui.isClockWise(ht)&&(E[et]=ht.reverse())}}function L(et){let ht=10000000000000001e-36,at=et[0];for(let lt=1;lt<=et.length;lt++){let At=lt%et.length,Et=et[At],Ot=Et.x-at.x,Vt=Et.y-at.y,B=Ot*Ot+Vt*Vt,oe=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(at.x),Math.abs(at.y)),jt=ht*oe*oe;if(B<=jt){et.splice(At,1),lt--;continue}at=Et}}L(R),E.forEach(L);let P=E.length,F=R;for(let et=0;et<P;et++){let ot=E[et];R=R.concat(ot)}function U(et,ot,ht){return ot||ee("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ot,ht)}let O=R.length;function X(et,ot,ht){let at,lt,At,Et=et.x-ot.x,Ot=et.y-ot.y,Vt=ht.x-et.x,B=ht.y-et.y,oe=Et*Et+Ot*Ot,jt=Et*B-Ot*Vt;if(Math.abs(jt)>Number.EPSILON){let N=Math.sqrt(oe),A=Math.sqrt(Vt*Vt+B*B),V=ot.x-Ot/N,q=ot.y+Et/N,j=ht.x-B/A,pt=ht.y+Vt/A,gt=((j-V)*B-(pt-q)*Vt)/(Et*B-Ot*Vt);at=V+Et*gt-et.x,lt=q+Ot*gt-et.y;let tt=at*at+lt*lt;if(tt<=2)return new dt(at,lt);At=Math.sqrt(tt/2)}else{let N=!1;Et>Number.EPSILON?Vt>Number.EPSILON&&(N=!0):Et<-Number.EPSILON?Vt<-Number.EPSILON&&(N=!0):Math.sign(Ot)===Math.sign(B)&&(N=!0),N?(at=-Ot,lt=Et,At=Math.sqrt(oe)):(at=Et,lt=Ot,At=Math.sqrt(oe/2))}return new dt(at/At,lt/At)}let H=[];for(let et=0,ot=F.length,ht=ot-1,at=et+1;et<ot;et++,ht++,at++)ht===ot&&(ht=0),at===ot&&(at=0),H[et]=X(F[et],F[ht],F[at]);let W=[],G,ft=H.concat();for(let et=0,ot=P;et<ot;et++){let ht=E[et];G=[];for(let at=0,lt=ht.length,At=lt-1,Et=at+1;at<lt;at++,At++,Et++)At===lt&&(At=0),Et===lt&&(Et=0),G[at]=X(ht[at],ht[At],ht[Et]);W.push(G),ft=ft.concat(G)}let ct;if(g===0)ct=ui.triangulateShape(F,E);else{let et=[],ot=[];for(let ht=0;ht<g;ht++){let at=ht/g,lt=f*Math.cos(at*Math.PI/2),At=p*Math.sin(at*Math.PI/2)+v;for(let Et=0,Ot=F.length;Et<Ot;Et++){let Vt=U(F[Et],H[Et],At);mt(Vt.x,Vt.y,-lt),at===0&&et.push(Vt)}for(let Et=0,Ot=P;Et<Ot;Et++){let Vt=E[Et];G=W[Et];let B=[];for(let oe=0,jt=Vt.length;oe<jt;oe++){let N=U(Vt[oe],G[oe],At);mt(N.x,N.y,-lt),at===0&&B.push(N)}at===0&&ot.push(B)}}ct=ui.triangulateShape(et,ot)}let Ct=ct.length,Bt=p+v;for(let et=0;et<O;et++){let ot=d?U(R[et],ft[et],Bt):R[et];x?(w.copy(M.normals[0]).multiplyScalar(ot.x),b.copy(M.binormals[0]).multiplyScalar(ot.y),y.copy(_[0]).add(w).add(b),mt(y.x,y.y,y.z)):mt(ot.x,ot.y,0)}for(let et=1;et<=h;et++)for(let ot=0;ot<O;ot++){let ht=d?U(R[ot],ft[ot],Bt):R[ot];x?(w.copy(M.normals[et]).multiplyScalar(ht.x),b.copy(M.binormals[et]).multiplyScalar(ht.y),y.copy(_[et]).add(w).add(b),mt(y.x,y.y,y.z)):mt(ht.x,ht.y,u/h*et)}for(let et=g-1;et>=0;et--){let ot=et/g,ht=f*Math.cos(ot*Math.PI/2),at=p*Math.sin(ot*Math.PI/2)+v;for(let lt=0,At=F.length;lt<At;lt++){let Et=U(F[lt],H[lt],at);mt(Et.x,Et.y,u+ht)}for(let lt=0,At=E.length;lt<At;lt++){let Et=E[lt];G=W[lt];for(let Ot=0,Vt=Et.length;Ot<Vt;Ot++){let B=U(Et[Ot],G[Ot],at);x?mt(B.x,B.y+_[h-1].y,_[h-1].x+ht):mt(B.x,B.y,u+ht)}}}Qt(),J();function Qt(){let et=i.length/3;if(d){let ot=0,ht=O*ot;for(let at=0;at<Ct;at++){let lt=ct[at];Gt(lt[2]+ht,lt[1]+ht,lt[0]+ht)}ot=h+g*2,ht=O*ot;for(let at=0;at<Ct;at++){let lt=ct[at];Gt(lt[0]+ht,lt[1]+ht,lt[2]+ht)}}else{for(let ot=0;ot<Ct;ot++){let ht=ct[ot];Gt(ht[2],ht[1],ht[0])}for(let ot=0;ot<Ct;ot++){let ht=ct[ot];Gt(ht[0]+O*h,ht[1]+O*h,ht[2]+O*h)}}n.addGroup(et,i.length/3-et,0)}function J(){let et=i.length/3,ot=0;nt(F,ot),ot+=F.length;for(let ht=0,at=E.length;ht<at;ht++){let lt=E[ht];nt(lt,ot),ot+=lt.length}n.addGroup(et,i.length/3-et,1)}function nt(et,ot){let ht=et.length;for(;--ht>=0;){let at=ht,lt=ht-1;lt<0&&(lt=et.length-1);for(let At=0,Et=h+g*2;At<Et;At++){let Ot=O*At,Vt=O*(At+1),B=ot+at+Ot,oe=ot+lt+Ot,jt=ot+lt+Vt,N=ot+at+Vt;Pt(B,oe,jt,N)}}}function mt(et,ot,ht){l.push(et),l.push(ot),l.push(ht)}function Gt(et,ot,ht){St(et),St(ot),St(ht);let at=i.length/3,lt=S.generateTopUV(n,i,at-3,at-2,at-1);bt(lt[0]),bt(lt[1]),bt(lt[2])}function Pt(et,ot,ht,at){St(et),St(ot),St(at),St(ot),St(ht),St(at);let lt=i.length/3,At=S.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);bt(At[0]),bt(At[1]),bt(At[3]),bt(At[1]),bt(At[2]),bt(At[3])}function St(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function bt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return u0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $a[i.type]().fromJSON(i)),new s(n,t.options)}},h0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-u),new dt(d,1-p),new dt(v,1-m)]:[new dt(a,1-l),new dt(h,1-u),new dt(f,1-p),new dt(g,1-m)]}};function u0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var po=class s extends Xa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},mo=class s extends me{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=de(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,d=new dt,f=new D,p=new D,v=new D,g=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let S=0;S<=e;S++){let _=n+S*h*i,x=Math.sin(_),M=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*M,o.push(u.x,u.y,u.z),d.x=S/e,d.y=b/(t.length-1),a.push(d.x,d.y);let w=l[3*b+0]*x,y=l[3*b+1],T=l[3*b+0]*M;c.push(w,y,T)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){let x=_+S*t.length,M=x,b=x+t.length,w=x+t.length+1,y=x+1;r.push(M,b,y),r.push(w,y,b)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ke=class s extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let S=m*d-o;for(let _=0;_<c;_++){let x=_*u-r;p.push(x,-S,0),v.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let _=S+c*m,x=S+c*(m+1),M=S+1+c*(m+1),b=S+1+c*m;f.push(_,x,b),f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var go=class s extends me{constructor(t=new Xi([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(i,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;ui.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];ui.isClockWise(S)===!0&&(p[g]=S.reverse())}let v=ui.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){let S=f[g];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=v.length;g<m;g++){let S=v[g],_=S[0]+u,x=S[1]+u,M=S[2]+u;n.push(_,x,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return d0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function d0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var In=class s extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,d=new D,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let S=[],_=m/n,x=o+_*a,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M),w=0;m===0&&o===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=i+T*r;u.x=-b*Math.cos(R),u.y=M,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+w,1-_),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let _=h[m][S+1],x=h[m][S],M=h[m+1][S],b=h[m+1][S+1];(m!==0||o>0)&&f.push(_,x,b),(m!==n-1||l<Math.PI)&&f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ms=class s extends me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new D,f=new D,p=new D;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let m=0;m<=i;m++){let S=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let m=(i+1)*v+g-1,S=(i+1)*(v-1)+g-1,_=(i+1)*(v-1)+g,x=(i+1)*v+g;l.push(m,S,x),l.push(S,_,x)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var gs=class s extends me{constructor(t=new oo(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new dt,h=new D,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function v(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),S(),m()}function g(_){h=t.getPointAt(_/e,h);let x=o.normals[_],M=o.binormals[_];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,y=Math.sin(w),T=-Math.cos(w);l.x=T*x.x+y*M.x,l.y=T*x.y+y*M.y,l.z=T*x.z+y*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let x=1;x<=i;x++){let M=(i+1)*(_-1)+(x-1),b=(i+1)*_+(x-1),w=(i+1)*_+x,y=(i+1)*(_-1)+x;p.push(M,b,y),p.push(b,w,y)}}function S(){for(let _=0;_<=e;_++)for(let x=0;x<=i;x++)c.x=_/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new $a[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(dd(i))i.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(dd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(s){let t={};for(let e=0;e<s.length;e++){let n=bs(s[e]);for(let i in n)t[i]=n[i]}return t}function dd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function f0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var pr={clone:bs,merge:wn},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(i.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ka=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},we=class extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xs=class extends we{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var xo=class extends ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qa=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function rh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var qi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends qi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:r=t,a=2*e-n;break;case hh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:o=t,l=2*n-e;break;case hh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,S=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let M=0;M!==a;++M)r[M]=m*o[h+M]+S*o[c+M]+_*o[l+M]+x*o[u+M];return r}},el=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},nl=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends qi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),v=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let v=o[c+p],g=o[l+p],m=f*d+p*2,S=u[m],_=u[m+1],x=t*d+p*2,M=h[x],b=h[x+1],w=x0(n,e,S,M,i);r[p]=lf(w,v,_,b,g)}return r}};function lf(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function g0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function x0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=lf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=g0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),rh(t.settings)&&(n.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Aa;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;rh(this.settings)&&(fd(this.settings.inTangents,t),fd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&vp(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Aa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,rh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function fd(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Oa;var Yi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=zr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}};sl.prototype.ValueTypeName="color";var rl=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}};rl.prototype.ValueTypeName="number";var ol=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_o=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=zr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}};al.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cf=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},vo=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},oh=new ye,pd=new D,md=new D,cr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(pd),md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(md),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ea=new D,Ta=new nn,ci=new D,yo=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,Ta,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ea,Ta,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new D,gd=new dt,xd=new dt,hn=class extends yo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,gd,xd),e.subVectors(xd,gd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ph=class extends cr{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Wr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Mo=class extends _s{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},mh=class extends cr{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},So=class extends _s{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},hr=class extends yo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gh=class extends cr{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var wo=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Js=-90,Ks=1,hl=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new hn(Js,Ks,t,e);i.layers=this.layers,this.add(i);let r=new hn(Js,Ks,t,e);r.layers=this.layers,this.add(r);let o=new hn(Js,Ks,t,e);o.layers=this.layers,this.add(o);let a=new hn(Js,Ks,t,e);a.layers=this.layers,this.add(a);let l=new hn(Js,Ks,t,e);l.layers=this.layers,this.add(l);let c=new hn(Js,Ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ul=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Hh="\\[\\]\\.:\\/",_0=new RegExp("["+Hh+"]","g"),Gh="[^"+Hh+"]",v0="[^"+Hh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Gh),M0=/(WCOD+)?/.source.replace("WCOD",v0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),w0=new RegExp("^"+y0+M0+S0+b0+"$"),E0=["material","materials","bones","map"],xh=class{constructor(t,e,n){let i=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(t){let e=w0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);E0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=xh;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $v=new Float32Array(1);var Zh=class Zh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Zh.prototype.isMatrix2=!0;var _h=Zh;function Vh(s,t,e,n){let i=T0(n);switch(e){case Fh:return s*t;case yl:return s*t/i.components*i.byteLength;case Ml:return s*t/i.components*i.byteLength;case ji:return s*t*2/i.components*i.byteLength;case Sl:return s*t*2/i.components*i.byteLength;case Uh:return s*t*3/i.components*i.byteLength;case bn:return s*t*4/i.components*i.byteLength;case bl:return s*t*4/i.components*i.byteLength;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Po:case Io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case El:case Al:return Math.max(s,16)*Math.max(t,8)/4;case wl:case Tl:return Math.max(s,8)*Math.max(t,8)/2;case Rl:case Cl:case Il:case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pl:case Lo:case Dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zl:case $l:case Jl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kl:case Ql:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Do:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T0(s){switch(s){case Ln:case Ih:return{byteLength:1,components:1};case dr:case Lh:case zn:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case ni:case xl:case Xn:return{byteLength:4,components:1};case Dh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function If(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function R0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:C0,alphahash_pars_fragment:P0,alphamap_fragment:I0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:N0,aomap_fragment:F0,aomap_pars_fragment:U0,batching_pars_vertex:O0,batching_vertex:B0,begin_vertex:z0,beginnormal_vertex:k0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:V0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:Z0,color_pars_fragment:$0,color_pars_vertex:J0,color_vertex:K0,common:Q0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:xm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:bm,lights_phong_fragment:wm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,lightprobes_pars_fragment:Im,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Fm,map_fragment:Um,map_pars_fragment:Om,map_particle_fragment:Bm,map_particle_pars_fragment:zm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Hm,morphinstance_vertex:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:$m,normal_pars_vertex:Jm,normal_vertex:Km,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:eg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:xg,skinnormal_vertex:_g,specularmap_fragment:vg,specularmap_pars_fragment:yg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:bg,transmission_pars_fragment:wg,uv_pars_fragment:Eg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:Rg,background_vert:Cg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ng,depth_vert:Fg,depth_frag:Ug,distance_vert:Og,distance_frag:Bg,equirect_vert:zg,equirect_frag:kg,linedashed_vert:Hg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:$g,meshnormal_frag:Jg,meshphong_vert:Kg,meshphong_frag:Qg,meshphysical_vert:jg,meshphysical_frag:tx,meshtoon_vert:ex,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},wt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},_i={basic:{uniforms:wn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:wn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:wn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:wn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:wn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new It(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:wn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:wn([wt.points,wt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:wn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:wn([wt.common,wt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:wn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:wn([wt.sprite,wt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:wn([wt.common,wt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:wn([wt.lights,wt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};_i.physical={uniforms:wn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var nc={r:0,b:0,g:0},cx=new ye,Lf=new ae;Lf.set(-1,0,0,0,1,0,0,0,1);function hx(s,t,e,n,i,r){let o=new It(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let _=S.isScene===!0?S.background:null;if(_&&_.isTexture){let x=S.backgroundBlurriness>0;_=t.get(_,x)}return _}function p(S){let _=!1,x=f(S);x===null?g(o,a):x&&x.isColor&&(g(x,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(S,_){let x=f(_);x&&(x.isCubeTexture||x.mapping===To)?(c===void 0&&(c=new $(new ie(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:bs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lf),c.material.toneMapped=ge.getTransfer(x.colorSpace)!==Ce,(h!==x||u!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $(new ke(2,2),new Xe({name:"BackgroundMaterial",uniforms:bs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ge.getTransfer(x.colorSpace)!==Ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,_){S.getRGB(nc,kh(s)),e.buffers.color.setClear(nc.r,nc.g,nc.b,_,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:v,dispose:m}}function ux(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(E,C,L,P,F){let U=!1,O=u(E,P,L,C);r!==O&&(r=O,c(r.object)),U=f(E,P,L,F),U&&p(E,P,L,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(E,C,L,P),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,C,L,P){let F=P.wireframe===!0,U=n[C.id];U===void 0&&(U={},n[C.id]=U);let O=E.isInstancedMesh===!0?E.id:0,X=U[O];X===void 0&&(X={},U[O]=X);let H=X[L.id];H===void 0&&(H={},X[L.id]=H);let W=H[F];return W===void 0&&(W=d(l()),H[F]=W),W}function d(E){let C=[],L=[],P=[];for(let F=0;F<e;F++)C[F]=0,L[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:P,object:E,attributes:{},index:null}}function f(E,C,L,P){let F=r.attributes,U=C.attributes,O=0,X=L.getAttributes();for(let H in X)if(X[H].location>=0){let G=F[H],ft=U[H];if(ft===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ft=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ft=E.instanceColor)),G===void 0||G.attribute!==ft||ft&&G.data!==ft.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function p(E,C,L,P){let F={},U=C.attributes,O=0,X=L.getAttributes();for(let H in X)if(X[H].location>=0){let G=U[H];G===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(G=E.instanceColor));let ft={};ft.attribute=G,G&&G.data&&(ft.data=G.data),F[H]=ft,O++}r.attributes=F,r.attributesNum=O,r.index=P}function v(){let E=r.newAttributes;for(let C=0,L=E.length;C<L;C++)E[C]=0}function g(E){m(E,0)}function m(E,C){let L=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;L[E]=1,P[E]===0&&(s.enableVertexAttribArray(E),P[E]=1),F[E]!==C&&(s.vertexAttribDivisor(E,C),F[E]=C)}function S(){let E=r.newAttributes,C=r.enabledAttributes;for(let L=0,P=C.length;L<P;L++)C[L]!==E[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function _(E,C,L,P,F,U,O){O===!0?s.vertexAttribIPointer(E,C,L,F,U):s.vertexAttribPointer(E,C,L,P,F,U)}function x(E,C,L,P){v();let F=P.attributes,U=L.getAttributes(),O=C.defaultAttributeValues;for(let X in U){let H=U[X];if(H.location>=0){let W=F[X];if(W===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){let G=W.normalized,ft=W.itemSize,ct=t.get(W);if(ct===void 0)continue;let Ct=ct.buffer,Bt=ct.type,Qt=ct.bytesPerElement,J=Bt===s.INT||Bt===s.UNSIGNED_INT||W.gpuType===xl;if(W.isInterleavedBufferAttribute){let nt=W.data,mt=nt.stride,Gt=W.offset;if(nt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<H.locationSize;Pt++)m(H.location+Pt,nt.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Pt=0;Pt<H.locationSize;Pt++)g(H.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let Pt=0;Pt<H.locationSize;Pt++)_(H.location+Pt,ft/H.locationSize,Bt,G,mt*Qt,(Gt+ft/H.locationSize*Pt)*Qt,J)}else{if(W.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt,W.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let nt=0;nt<H.locationSize;nt++)g(H.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let nt=0;nt<H.locationSize;nt++)_(H.location+nt,ft/H.locationSize,Bt,G,ft*Qt,ft/H.locationSize*nt*Qt,J)}}else if(O!==void 0){let G=O[X];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(H.location,G);break;case 3:s.vertexAttrib3fv(H.location,G);break;case 4:s.vertexAttrib4fv(H.location,G);break;default:s.vertexAttrib1fv(H.location,G)}}}}S()}function M(){T();for(let E in n){let C=n[E];for(let L in C){let P=C[L];for(let F in P){let U=P[F];for(let O in U)h(U[O].object),delete U[O];delete P[F]}}delete n[E]}}function b(E){if(n[E.id]===void 0)return;let C=n[E.id];for(let L in C){let P=C[L];for(let F in P){let U=P[F];for(let O in U)h(U[O].object),delete U[O];delete P[F]}}delete n[E.id]}function w(E){for(let C in n){let L=n[C];for(let P in L){let F=L[P];if(F[E.id]===void 0)continue;let U=F[E.id];for(let O in U)h(U[O].object),delete U[O];delete F[E.id]}}}function y(E){for(let C in n){let L=n[C],P=E.isInstancedMesh===!0?E.id:0,F=L[P];if(F!==void 0){for(let U in F){let O=F[U];for(let X in O)h(O[X].object),delete O[X];delete F[U]}delete L[P],Object.keys(L).length===0&&delete n[C]}}}function T(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function dx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==bn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ln&&w!==Xn&&!y&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:x,maxSamples:M,samples:b}}function px(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Un,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,_=S*4,x=m.clippingState||null;l.value=x,x=h(p,d,_,f);for(let M=0;M!==_;++M)x[M]=e[M];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var gr=4,mx=6,gx=20,xx=256,Fo=new hr,hf=new It,$h=null,Jh=0,Kh=0,Qh=!1,_x=new D,ws=new D,_r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=_x}=r;$h=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($h,Jh,Kh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:zn,format:bn,colorSpace:kr,depthBuffer:!1},i=uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vx(r)),this._blurMaterial=Mx(r,t,e),this._ggxMaterial=yx(r,t,e)}return i}_compileMaterial(t){let e=new $(new me,t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,i,r){let l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hf),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $(new ie,new Ve({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(hf),m=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let M=this._cubeSize;mr(i,x*M,_>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(v,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ki||t.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-gr?n-p+gr:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,mr(r,g,m,3*v,2*v),i.setRenderTarget(r),i.render(a,Fo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,mr(t,g,m,3*v,2*v),i.setRenderTarget(t),i.render(a,Fo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-gr?i-this._lodMax+gr:0),d=4*(this._cubeSize-h);mr(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,Fo)}};function vx(s){let t=[],e=[],n=s,i=s-gr+1+mx;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let m=0;m<u;m++){let S=m%3*2/3-1,_=m>2?0:-1,x=[S,_,0,S+2/3,_,0,S+2/3,_+1,0,S,_,0,S+2/3,_+1,0,S,_+1,0];p.set(x,f*d*m);for(let M=0;M<d;M++){let b=h[M*2]*2-1,w=h[M*2+1]*2-1;m===0?ws.set(1,w,b):m===1?ws.set(-b,1,-w):m===2?ws.set(-b,w,1):m===3?ws.set(-1,w,-b):m===4?ws.set(-b,-1,w):ws.set(b,w,-1),ws.toArray(v,(m*d+M)*f)}}let g=new me;g.setAttribute("position",new be(p,f)),g.setAttribute("outputDirection",new be(v,f)),e.push(new $(g,null)),n>gr&&n--}return{lodMeshes:e,sizeLods:t}}function uf(s,t,e){let n=new Sn(s,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function yx(s,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mx(s,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function df(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ff(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new eo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ie(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:mi});r.uniforms.tEquirect.value=e;let o=new $(i,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=Ye),new hl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function Sx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===pl||f===ml)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new sc(p.height);return v.fromEquirectangularTexture(s,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===pl||f===ml,v=f===Ki||f===Ss;if(p||v){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new _r(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new _r(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===pl?d.mapping=Ki:f===ml&&(d.mapping=Ss),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function bx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&hs("WebGLRenderer: "+n+" extension not supported."),i}}}function wx(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let _=0,x=S.length;_<x;_+=3){let M=S[_+0],b=S[_+1],w=S[_+2];d.push(M,b,b,w,w,M)}}else{let S=p.array;v=p.version;for(let _=0,x=S.length/3-1;_<x;_+=3){let M=_+0,b=_+1,w=_+2;d.push(M,b,b,w,w,M)}}let g=new(p.count>=65535?$r:Zr)(d,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ex(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Tx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ax(s,t,e){let n=new WeakMap,i=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*M*4*u),w=new Xr(b,x,M,u);w.type=Xn,w.needsUpdate=!0;let y=_*4;for(let R=0;R<u;R++){let E=g[R],C=m[R],L=S[R],P=x*M*4*R;for(let F=0;F<E.count;F++){let U=F*y;f===!0&&(i.fromBufferAttribute(E,F),b[P+U+0]=i.x,b[P+U+1]=i.y,b[P+U+2]=i.z,b[P+U+3]=0),p===!0&&(i.fromBufferAttribute(C,F),b[P+U+4]=i.x,b[P+U+5]=i.y,b[P+U+6]=i.z,b[P+U+7]=0),v===!0&&(i.fromBufferAttribute(L,F),b[P+U+8]=i.x,b[P+U+9]=i.y,b[P+U+10]=i.z,b[P+U+11]=L.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new dt(x,M)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Rx(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Cx={[wh]:"LINEAR_TONE_MAPPING",[Eh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[Rh]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Ah]:"CUSTOM_TONE_MAPPING"};function Px(s,t,e,n,i,r){let o=new Sn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new me;c.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let h=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $(c,h),d=new hr(-1,1,1,-1,0,1),f=null,p=null,v=!1,g,m=null,S=[],_=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<S.length;b++){let w=S[b];w.setSize&&w.setSize(x,M)}},this.setEffects=function(x){S=x,_=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new Sn(M,b,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(M,b,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let y=S[w];y.setSize&&y.setSize(M,b)}},this.begin=function(x,M){if(v||x.toneMapping===ei&&S.length===0)return!1;if(m=M,M!==null){let b=M.width,w=M.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return _===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=ei,!0},this.hasRenderPass=function(){return _},this.end=function(x,M){x.toneMapping=g,v=!0;let b=o,w=a;for(let y=0;y<S.length;y++){let T=S[y];T.enabled!==!1&&(T.render(x,w,b,M),T.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},ge.getTransfer(f)===Ce&&(h.defines.SRGB_TRANSFER="");let y=Cx[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Df=new Cn,eu=new Vi(1,1),Nf=new Xr,Ff=new ka,Uf=new eo,pf=[],mf=[],gf=new Float32Array(16),xf=new Float32Array(9),_f=new Float32Array(4);function vr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=pf[i];if(r===void 0&&(r=new Float32Array(i),pf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function rn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ac(s,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ix(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),rn(e,t)}}function Dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),rn(e,t)}}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),rn(e,t)}}function Fx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;_f.set(n),s.uniformMatrix2fv(this.addr,!1,_f),rn(e,n)}}function Ux(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;xf.set(n),s.uniformMatrix3fv(this.addr,!1,xf),rn(e,n)}}function Ox(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;gf.set(n),s.uniformMatrix4fv(this.addr,!1,gf),rn(e,n)}}function Bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),rn(e,t)}}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),rn(e,t)}}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),rn(e,t)}}function Gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),rn(e,t)}}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),rn(e,t)}}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),rn(e,t)}}function qx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eu.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=eu):r=Df,e.setTexture2D(t||r,i)}function Yx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ff,i)}function Zx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uf,i)}function $x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nf,i)}function Jx(s){switch(s){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Fx;case 35675:return Ux;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return $x}}function Kx(s,t){s.uniform1fv(this.addr,t)}function Qx(s,t){let e=vr(t,this.size,2);s.uniform2fv(this.addr,e)}function jx(s,t){let e=vr(t,this.size,3);s.uniform3fv(this.addr,e)}function t_(s,t){let e=vr(t,this.size,4);s.uniform4fv(this.addr,e)}function e_(s,t){let e=vr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function n_(s,t){let e=vr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function i_(s,t){let e=vr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function s_(s,t){s.uniform1iv(this.addr,t)}function r_(s,t){s.uniform2iv(this.addr,t)}function o_(s,t){s.uniform3iv(this.addr,t)}function a_(s,t){s.uniform4iv(this.addr,t)}function l_(s,t){s.uniform1uiv(this.addr,t)}function c_(s,t){s.uniform2uiv(this.addr,t)}function h_(s,t){s.uniform3uiv(this.addr,t)}function u_(s,t){s.uniform4uiv(this.addr,t)}function d_(s,t,e){let n=this.cache,i=t.length,r=ac(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=eu:o=Df;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function f_(s,t,e){let n=this.cache,i=t.length,r=ac(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ff,r[o])}function p_(s,t,e){let n=this.cache,i=t.length,r=ac(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Uf,r[o])}function m_(s,t,e){let n=this.cache,i=t.length,r=ac(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nf,r[o])}function g_(s){switch(s){case 5126:return Kx;case 35664:return Qx;case 35665:return jx;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jx(e.type)}},iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}},su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function vf(s,t){s.seq.push(t),s.map[t.id]=t}function x_(s,t,e){let n=s.name,i=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),o=jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vf(e,c===void 0?new nu(a,s,t):new iu(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new su(a),vf(e,u)),e=u}}}var xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);x_(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function yf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var __=37297,v_=0;function y_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Mf=new ae;function M_(s){ge._getMatrix(Mf,ge.workingColorSpace,s);let t=`mat3( ${Mf.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Hr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y_(s.getShaderSource(t),a)}else return r}function S_(s,t){let e=M_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var b_={[wh]:"Linear",[Eh]:"Reinhard",[Th]:"Cineon",[Eo]:"ACESFilmic",[Rh]:"AgX",[Ch]:"Neutral",[Ah]:"Custom"};function w_(s,t){let e=b_[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new D;function E_(){ge.getLuminanceCoefficients(ic);let s=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function A_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Oo(s){return s!==""}function bf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(s){return s.replace(C_,I_)}var P_=new Map;function I_(s,t){let e=ue[t];if(e===void 0){let n=P_.get(t);if(n!==void 0)e=ue[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ru(e)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(s){return s.replace(L_,D_)}function D_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var N_={[vs]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function F_(s){return N_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U_={[Ki]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function O_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":U_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[Ss]:"ENVMAP_MODE_REFRACTION"};function z_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k_={[fl]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[kd]:"ENVMAP_BLENDING_ADD"};function H_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":k_[s.combine]||"ENVMAP_BLENDING_NONE"}function G_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=F_(e),c=O_(e),h=z_(e),u=H_(e),d=G_(e),f=T_(e),p=A_(r),v=i.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Oo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Oo).join(`
`),m.length>0&&(m+=`
`)):(g=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),m=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?ue.tonemapping_pars_fragment:"",e.toneMapping!==ei?w_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,S_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oo).join(`
`)),o=ru(o),o=bf(o,e),o=wf(o,e),a=ru(a),a=bf(a,e),a=wf(a,e),o=Ef(o),a=Ef(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=S+g+o,x=S+m+a,M=yf(i,i.VERTEX_SHADER,_),b=yf(i,i.FRAGMENT_SHADER,x);i.attachShader(v,M),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(E){if(s.debug.checkShaderErrors){let C=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(M)||"",P=i.getShaderInfoLog(b)||"",F=C.trim(),U=L.trim(),O=P.trim(),X=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,M,b);else{let W=Sf(i,M,"vertex"),G=Sf(i,b,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+W+`
`+G)}else F!==""?te("WebGLProgram: Program Info Log:",F):(U===""||O==="")&&(H=!1);H&&(E.diagnostics={runnable:X,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(M),i.deleteShader(b),y=new xr(i,v),T=R_(i,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(v,__)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}var W_=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new au(t),e.set(t,n)),n}},au=class{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}};function X_(s){return s===ji||s===Lo||s===Do}function q_(s,t,e,n,i,r){let o=new qr,a=new ou,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,R,E,C,L){let P=E.fog,F=C.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?E.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=t.get(y.envMap||U,O),H=X&&X.mapping===To?X.image.height:null,W=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&te("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let G=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ft=G!==void 0?G.length:0,ct=0;F.morphAttributes.position!==void 0&&(ct=1),F.morphAttributes.normal!==void 0&&(ct=2),F.morphAttributes.color!==void 0&&(ct=3);let Ct,Bt,Qt,J;if(W){let Ue=_i[W];Ct=Ue.vertexShader,Bt=Ue.fragmentShader}else{Ct=y.vertexShader,Bt=y.fragmentShader;let Ue=a.getVertexShaderStage(y),Ae=a.getFragmentShaderStage(y);a.update(y,Ue,Ae),Qt=Ue.id,J=Ae.id}let nt=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Gt=C.isInstancedMesh===!0,Pt=C.isBatchedMesh===!0,St=!!y.map,bt=!!y.matcap,et=!!X,ot=!!y.aoMap,ht=!!y.lightMap,at=!!y.bumpMap&&y.wireframe===!1,lt=!!y.normalMap,At=!!y.displacementMap,Et=!!y.emissiveMap,Ot=!!y.metalnessMap,Vt=!!y.roughnessMap,B=y.anisotropy>0,oe=y.clearcoat>0,jt=y.dispersion>0,N=y.retroreflectivity>0,A=y.iridescence>0,V=y.sheen>0,q=y.transmission>0,j=B&&!!y.anisotropyMap,pt=oe&&!!y.clearcoatMap,gt=oe&&!!y.clearcoatNormalMap,tt=oe&&!!y.clearcoatRoughnessMap,rt=A&&!!y.iridescenceMap,xt=A&&!!y.iridescenceThicknessMap,Wt=V&&!!y.sheenColorMap,vt=V&&!!y.sheenRoughnessMap,_t=!!y.specularMap,Xt=!!y.specularColorMap,Jt=!!y.specularIntensityMap,ce=q&&!!y.transmissionMap,k=q&&!!y.thicknessMap,yt=!!y.gradientMap,st=!!y.alphaMap,Mt=y.alphaTest>0,Lt=!!y.alphaHash,ut=!!y.extensions,Zt=ei;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Zt=s.toneMapping);let Ht={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:Ct,fragmentShader:Bt,defines:y.defines,customVertexShaderID:Qt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Pt,batchingColor:Pt&&C._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&C.instanceColor!==null,instancingMorph:Gt&&C.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:bt,envMap:et,envMapMode:et&&X.mapping,envMapCubeUVHeight:H,aoMap:ot,lightMap:ht,bumpMap:at,normalMap:lt,displacementMap:At,emissiveMap:Et,normalMapObjectSpace:lt&&y.normalMapType===Vd,normalMapTangentSpace:lt&&y.normalMapType===No,packedNormalMap:lt&&y.normalMapType===No&&X_(y.normalMap.format),metalnessMap:Ot,roughnessMap:Vt,anisotropy:B,anisotropyMap:j,clearcoat:oe,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:tt,dispersion:jt,retroreflection:N,iridescence:A,iridescenceMap:rt,iridescenceThicknessMap:xt,sheen:V,sheenColorMap:Wt,sheenRoughnessMap:vt,specularMap:_t,specularColorMap:Xt,specularIntensityMap:Jt,transmission:q,transmissionMap:ce,thicknessMap:k,gradientMap:yt,opaque:y.transparent===!1&&y.blending===Ji&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Mt,alphaHash:Lt,combine:y.combine,mapUv:St&&p(y.map.channel),aoMapUv:ot&&p(y.aoMap.channel),lightMapUv:ht&&p(y.lightMap.channel),bumpMapUv:at&&p(y.bumpMap.channel),normalMapUv:lt&&p(y.normalMap.channel),displacementMapUv:At&&p(y.displacementMap.channel),emissiveMapUv:Et&&p(y.emissiveMap.channel),metalnessMapUv:Ot&&p(y.metalnessMap.channel),roughnessMapUv:Vt&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:pt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(y.sheenRoughnessMap.channel),specularMapUv:_t&&p(y.specularMap.channel),specularColorMapUv:Xt&&p(y.specularColorMap.channel),specularIntensityMapUv:Jt&&p(y.specularIntensityMap.channel),transmissionMapUv:ce&&p(y.transmissionMap.channel),thicknessMapUv:k&&p(y.thicknessMap.channel),alphaMapUv:st&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(lt||B),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(St||st),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===Ce,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&ge.getTransfer(y.emissiveMap.colorSpace)===Ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===Qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ut&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&y.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(T,y),S(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let T=f[y.type],R;if(T){let E=_i[T];R=pr.clone(E.uniforms)}else R=y.uniforms;return R}function x(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new V_(s,T,y,i),c.push(R),h.set(T,R)),R}function M(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function Y_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Z_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Af(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,v,g,m){let S=s[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},s[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=g,S.group=m),t++,S}function l(d,f,p,v,g,m,S){S.reversedDepth===!0&&(g=-g);let _=a(d,f,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):e.push(_)}function c(d,f,p,v,g,m){let S=a(d,f,p,v,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||Z_),n.length>1&&n.sort(f||Af),i.length>1&&i.sort(f||Af)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function $_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Rf,s.set(n,[o])):i>=r.length?(o=new Rf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function J_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function K_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Q_=0;function j_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tv(s){let t=new J_,e=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new ye,o=new ye;function a(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,S=0,_=0,x=0,M=0,b=0,w=0,y=0,T=0,R=0;c.sort(j_);for(let C=0,L=c.length;C<L;C++){let P=c[C],F=P.color,U=P.intensity,O=P.distance,X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ji?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],U);R++}else if(P.isSunLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,G=e.get(P);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=X;let ft=W.getViewportCount();for(let ct=0;ct<ft;ct++)n.sunShadowMatrix[v+ct]=W.getMatrix(ct),n.sunShadowCascade[v+ct]=W._cascadeData[ct];v+=ft,p++}n.sun[f]=H,f++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,G=e.get(P);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=P.shadow.matrix,M++}n.directional[g]=H,g++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[S]=H;let W=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,W.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[S]=W.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.spotShadow[S]=G,n.spotShadowMap[S]=X,w++}S++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(F).multiplyScalar(U),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=H,_++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let W=P.shadow,G=e.get(P);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=H,m++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(U),H.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[x]=H,x++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let E=n.hash;(E.sunLength!==f||E.directionalLength!==g||E.pointLength!==m||E.spotLength!==S||E.rectAreaLength!==_||E.hemiLength!==x||E.numSunShadows!==p||E.numDirectionalShadows!==M||E.numPointShadows!==b||E.numSpotShadows!==w||E.numSpotMaps!==y||E.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=_,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,E.sunLength=f,E.directionalLength=g,E.pointLength=m,E.spotLength=S,E.rectAreaLength=_,E.hemiLength=x,E.numSunShadows=p,E.numDirectionalShadows=M,E.numPointShadows=b,E.numSpotShadows=w,E.numSpotMaps=y,E.numLightProbes=R,n.version=Q_++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let S=0,_=c.length;S<_;S++){let x=c[S];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Cf(s){let t=new tv(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ev(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Cf(s),t.set(i,[a])):r>=o.length?(a=new Cf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],rv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Pf=new ye,Uo=new D,tu=new D;function ov(s,t,e){let n=new rr,i=new dt,r=new dt,o=new xe,a=new Qa,l=new ja,c={},h=e.maxTextureSize,u={[$i]:Qe,[Qe]:$i,[je]:je},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new me;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new $(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let m=this.type;this.render=function(b,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===yd&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),C=s.state;C.setBlending(mi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=m!==this.type;L&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=b.length;P<F;P++){let U=b[P],O=U.shadow;if(O===void 0){te("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let X=O.getFrameExtents();i.multiply(X),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,O.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ur){if(U.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Sn(i.x,i.y,{format:ji,type:zn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Vi(i.x,i.y,Xn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=di,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else U.isPointLight?(O.map=new sc(i.x),O.map.depthTexture=new Wa(i.x,ni)):(O.map=new Sn(i.x,i.y),O.map.depthTexture=new Vi(i.x,i.y,ni)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=di,this.type===vs?(O.map.depthTexture.compareFunction=H?ec:tc,O.map.depthTexture.minFilter=Ye,O.map.depthTexture.magFilter=Ye):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let W=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,y);for(let G=0;G<W;G++){let ft=O.getCamera(G);if(U.isPointLight){let ct=O.camera,Ct=O.matrix,Bt=U.distance||ct.far;Bt!==ct.far&&(ct.far=Bt,ct.updateProjectionMatrix()),Uo.setFromMatrixPosition(U.matrixWorld),ct.position.copy(Uo),tu.copy(ct.position),tu.add(sv[G]),ct.up.copy(rv[G]),ct.lookAt(tu),ct.updateMatrixWorld(),Ct.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Pf.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pf,ct.coordinateSystem,ct.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,G),s.clear();else{G===0&&(s.setRenderTarget(O.map),s.clear());let ct=O.getViewport(G);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),C.viewport(o)}n=O.getFrustum(G),x(w,y,ft,U,this.type)}O.isPointLightShadow!==!0&&this.type===ur&&S(O,y),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,R,E)};function S(b,w){let y=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Sn(i.x,i.y,{format:ji,type:zn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,y,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,y,f,v,null)}function _(b,w,y,T){let R=null,E=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)R=E;else if(R=y.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=R.uuid,L=w.uuid,P=c[C];P===void 0&&(P={},c[C]=P);let F=P[L];F===void 0&&(F=R.clone(),P[L]=F,w.addEventListener("dispose",M)),R=F}if(R.visible=w.visible,R.wireframe=w.wireframe,T===ur?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=s.properties.get(R);C.light=y}return R}function x(b,w,y,T,R){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ur)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let L=t.update(b),P=b.material;if(Array.isArray(P)){let F=L.groups;for(let U=0,O=F.length;U<O;U++){let X=F[U],H=P[X.materialIndex];if(H&&H.visible){let W=_(b,H,T,R);b.onBeforeShadow(s,b,w,y,L,W,X),s.renderBufferDirect(y,null,L,W,b,X),b.onAfterShadow(s,b,w,y,L,W,X)}}}else if(P.visible){let F=_(b,P,T,R);b.onBeforeShadow(s,b,w,y,L,F,null),s.renderBufferDirect(y,null,L,F,b,null),b.onAfterShadow(s,b,w,y,L,F,null)}}let C=b.children;for(let L=0,P=C.length;L<P;L++)x(C[L],w,y,T,R)}function M(b){b.target.removeEventListener("dispose",M);for(let y in c){let T=c[y],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function av(s,t){function e(){let k=!1,yt=new xe,st=null,Mt=new xe(0,0,0,0);return{setMask:function(Lt){st!==Lt&&!k&&(s.colorMask(Lt,Lt,Lt,Lt),st=Lt)},setLocked:function(Lt){k=Lt},setClear:function(Lt,ut,Zt,Ht,Ue){Ue===!0&&(Lt*=Ht,ut*=Ht,Zt*=Ht),yt.set(Lt,ut,Zt,Ht),Mt.equals(yt)===!1&&(s.clearColor(Lt,ut,Zt,Ht),Mt.copy(yt))},reset:function(){k=!1,st=null,Mt.set(-1,0,0,0)}}}function n(){let k=!1,yt=!1,st=null,Mt=null,Lt=null;return{setReversed:function(ut){if(yt!==ut){let Zt=t.get("EXT_clip_control");ut?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),yt=ut;let Ht=Lt;Lt=null,this.setClear(Ht)}},getReversed:function(){return yt},setTest:function(ut){ut?nt(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(ut){st!==ut&&!k&&(s.depthMask(ut),st=ut)},setFunc:function(ut){if(yt&&(ut=tf[ut]),Mt!==ut){switch(ut){case Ca:s.depthFunc(s.NEVER);break;case Pa:s.depthFunc(s.ALWAYS);break;case Ia:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case Na:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=ut}},setLocked:function(ut){k=ut},setClear:function(ut){Lt!==ut&&(Lt=ut,yt&&(ut=1-ut),s.clearDepth(ut))},reset:function(){k=!1,st=null,Mt=null,Lt=null,yt=!1}}}function i(){let k=!1,yt=null,st=null,Mt=null,Lt=null,ut=null,Zt=null,Ht=null,Ue=null;return{setTest:function(Ae){k||(Ae?nt(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(Ae){yt!==Ae&&!k&&(s.stencilMask(Ae),yt=Ae)},setFunc:function(Ae,$n,ai){(st!==Ae||Mt!==$n||Lt!==ai)&&(s.stencilFunc(Ae,$n,ai),st=Ae,Mt=$n,Lt=ai)},setOp:function(Ae,$n,ai){(ut!==Ae||Zt!==$n||Ht!==ai)&&(s.stencilOp(Ae,$n,ai),ut=Ae,Zt=$n,Ht=ai)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Ue!==Ae&&(s.clearStencil(Ae),Ue=Ae)},reset:function(){k=!1,yt=null,st=null,Mt=null,Lt=null,ut=null,Zt=null,Ht=null,Ue=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,_=null,x=null,M=null,b=null,w=null,y=new It(0,0,0),T=0,R=!1,E=null,C=null,L=null,P=null,F=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,X=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=X>=2);let W=null,G={},ft=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Ct=new xe().fromArray(ft),Bt=new xe().fromArray(ct);function Qt(k,yt,st,Mt){let Lt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(k,ut),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<st;Zt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(yt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(yt+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return ut}let J={};J[s.TEXTURE_2D]=Qt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(js),at(!1),lt(vh),nt(s.CULL_FACE),ot(mi);function nt(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function mt(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Gt(k,yt){return d[k]!==yt?(s.bindFramebuffer(k,yt),d[k]=yt,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=yt),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=yt),!0):!1}function Pt(k,yt){let st=p,Mt=!1;if(k){st=f.get(yt),st===void 0&&(st=[],f.set(yt,st));let Lt=k.textures;if(st.length!==Lt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Zt=Lt.length;ut<Zt;ut++)st[ut]=s.COLOR_ATTACHMENT0+ut;st.length=Lt.length,Mt=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(st)}function St(k){return v!==k?(s.useProgram(k),v=k,!0):!1}let bt={[Ms]:s.FUNC_ADD,[Sd]:s.FUNC_SUBTRACT,[bd]:s.FUNC_REVERSE_SUBTRACT};bt[wd]=s.MIN,bt[Ed]=s.MAX;let et={[Td]:s.ZERO,[Ad]:s.ONE,[Rd]:s.SRC_COLOR,[Sh]:s.SRC_ALPHA,[Nd]:s.SRC_ALPHA_SATURATE,[Ld]:s.DST_COLOR,[Pd]:s.DST_ALPHA,[Cd]:s.ONE_MINUS_SRC_COLOR,[bh]:s.ONE_MINUS_SRC_ALPHA,[Dd]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Fd]:s.CONSTANT_COLOR,[Ud]:s.ONE_MINUS_CONSTANT_COLOR,[Od]:s.CONSTANT_ALPHA,[Bd]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(k,yt,st,Mt,Lt,ut,Zt,Ht,Ue,Ae){if(k===mi){g===!0&&(mt(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),k!==Md){if(k!==m||Ae!==R){if((S!==Ms||M!==Ms)&&(s.blendEquation(s.FUNC_ADD),S=Ms,M=Ms),Ae)switch(k){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ys:s.blendFunc(s.ONE,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",k);break}else switch(k){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",k);break}_=null,x=null,b=null,w=null,y.set(0,0,0),T=0,m=k,R=Ae}return}Lt=Lt||yt,ut=ut||st,Zt=Zt||Mt,(yt!==S||Lt!==M)&&(s.blendEquationSeparate(bt[yt],bt[Lt]),S=yt,M=Lt),(st!==_||Mt!==x||ut!==b||Zt!==w)&&(s.blendFuncSeparate(et[st],et[Mt],et[ut],et[Zt]),_=st,x=Mt,b=ut,w=Zt),(Ht.equals(y)===!1||Ue!==T)&&(s.blendColor(Ht.r,Ht.g,Ht.b,Ue),y.copy(Ht),T=Ue),m=k,R=!1}function ht(k,yt){k.side===je?mt(s.CULL_FACE):nt(s.CULL_FACE);let st=k.side===Qe;yt&&(st=!st),at(st),k.blending===Ji&&k.transparent===!1?ot(mi):ot(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Mt=k.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Et(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){E!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),E=k)}function lt(k){k!==_d?(nt(s.CULL_FACE),k!==C&&(k===vh?s.cullFace(s.BACK):k===vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),C=k}function At(k){k!==L&&(O&&s.lineWidth(k),L=k)}function Et(k,yt,st){k?(nt(s.POLYGON_OFFSET_FILL),(P!==yt||F!==st)&&(P=yt,F=st,o.getReversed()&&(yt=-yt),s.polygonOffset(yt,st))):mt(s.POLYGON_OFFSET_FILL)}function Ot(k){k?nt(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function Vt(k){k===void 0&&(k=s.TEXTURE0+U-1),W!==k&&(s.activeTexture(k),W=k)}function B(k,yt,st){st===void 0&&(W===null?st=s.TEXTURE0+U-1:st=W);let Mt=G[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},G[st]=Mt),(Mt.type!==k||Mt.texture!==yt)&&(W!==st&&(s.activeTexture(st),W=st),s.bindTexture(k,yt||J[k]),Mt.type=k,Mt.texture=yt)}function oe(){let k=G[W];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function jt(){try{s.compressedTexImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function A(){try{s.texSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function V(){try{s.texSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function pt(){try{s.texStorage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function gt(){try{s.texStorage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function tt(){try{s.texImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function rt(){try{s.texImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function xt(k){return u[k]!==void 0?u[k]:s.getParameter(k)}function Wt(k,yt){u[k]!==yt&&(s.pixelStorei(k,yt),u[k]=yt)}function vt(k){Ct.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ct.copy(k))}function _t(k){Bt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Bt.copy(k))}function Xt(k,yt){let st=c.get(yt);st===void 0&&(st=new WeakMap,c.set(yt,st));let Mt=st.get(k);Mt===void 0&&(Mt=s.getUniformBlockIndex(yt,k.name),st.set(k,Mt))}function Jt(k,yt){let Mt=c.get(yt).get(k);l.get(yt)!==Mt&&(s.uniformBlockBinding(yt,Mt,k.__bindingPointIndex),l.set(yt,Mt))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,G={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,_=null,x=null,M=null,b=null,w=null,y=new It(0,0,0),T=0,R=!1,E=null,C=null,L=null,P=null,F=null,Ct.set(0,0,s.canvas.width,s.canvas.height),Bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:mt,bindFramebuffer:Gt,drawBuffers:Pt,useProgram:St,setBlending:ot,setMaterial:ht,setFlipSided:at,setCullFace:lt,setLineWidth:At,setPolygonOffset:Et,setScissorTest:Ot,activeTexture:Vt,bindTexture:B,unbindTexture:oe,compressedTexImage2D:jt,compressedTexImage3D:N,texImage2D:tt,texImage3D:rt,pixelStorei:Wt,getParameter:xt,updateUBOMapping:Xt,uniformBlockBinding:Jt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:A,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:vt,viewport:_t,reset:ce}}function lv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,A){return p?new OffscreenCanvas(N,A):Gr("canvas")}function g(N,A,V){let q=1,j=jt(N);if((j.width>V||j.height>V)&&(q=V/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let pt=Math.floor(q*j.width),gt=Math.floor(q*j.height);d===void 0&&(d=v(pt,gt));let tt=A?v(pt,gt):d;return tt.width=pt,tt.height=gt,tt.getContext("2d").drawImage(N,0,0,pt,gt),te("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+pt+"x"+gt+")."),tt}else return"data"in N&&te("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),N;return N}function m(N){return N.generateMipmaps}function S(N){s.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(N,A,V,q,j,pt=!1){if(N!==null){if(s[N]!==void 0)return s[N];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let gt;q&&(gt=t.get("EXT_texture_norm16"),gt||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=A;if(A===s.RED&&(V===s.FLOAT&&(tt=s.R32F),V===s.HALF_FLOAT&&(tt=s.R16F),V===s.UNSIGNED_BYTE&&(tt=s.R8),V===s.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),V===s.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),A===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.R8UI),V===s.UNSIGNED_SHORT&&(tt=s.R16UI),V===s.UNSIGNED_INT&&(tt=s.R32UI),V===s.BYTE&&(tt=s.R8I),V===s.SHORT&&(tt=s.R16I),V===s.INT&&(tt=s.R32I)),A===s.RG&&(V===s.FLOAT&&(tt=s.RG32F),V===s.HALF_FLOAT&&(tt=s.RG16F),V===s.UNSIGNED_BYTE&&(tt=s.RG8),V===s.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),V===s.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RG8UI),V===s.UNSIGNED_SHORT&&(tt=s.RG16UI),V===s.UNSIGNED_INT&&(tt=s.RG32UI),V===s.BYTE&&(tt=s.RG8I),V===s.SHORT&&(tt=s.RG16I),V===s.INT&&(tt=s.RG32I)),A===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),V===s.UNSIGNED_INT&&(tt=s.RGB32UI),V===s.BYTE&&(tt=s.RGB8I),V===s.SHORT&&(tt=s.RGB16I),V===s.INT&&(tt=s.RGB32I)),A===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),V===s.UNSIGNED_INT&&(tt=s.RGBA32UI),V===s.BYTE&&(tt=s.RGBA8I),V===s.SHORT&&(tt=s.RGBA16I),V===s.INT&&(tt=s.RGBA32I)),A===s.RGB&&(V===s.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),V===s.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),A===s.RGBA){let rt=pt?Hr:ge.getTransfer(j);V===s.FLOAT&&(tt=s.RGBA32F),V===s.HALF_FLOAT&&(tt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(tt=rt===Ce?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),V===s.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(N,A){let V;return N?A===null||A===ni||A===fr?V=s.DEPTH24_STENCIL8:A===Xn?V=s.DEPTH32F_STENCIL8:A===dr&&(V=s.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ni||A===fr?V=s.DEPTH_COMPONENT24:A===Xn?V=s.DEPTH_COMPONENT32F:A===dr&&(V=s.DEPTH_COMPONENT16),V}function b(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==un&&N.minFilter!==Ye?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function w(N){let A=N.target;A.removeEventListener("dispose",w),T(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function y(N){let A=N.target;A.removeEventListener("dispose",y),E(A)}function T(N){let A=n.get(N);if(A.__webglInit===void 0)return;let V=N.source,q=f.get(V);if(q){let j=q[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(N),Object.keys(q).length===0&&f.delete(V)}n.remove(N)}function R(N){let A=n.get(N);s.deleteTexture(A.__webglTexture);let V=N.source,q=f.get(V);delete q[A.__cacheKey],o.memory.textures--}function E(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(A.__webglFramebuffer[q]))for(let j=0;j<A.__webglFramebuffer[q].length;j++)s.deleteFramebuffer(A.__webglFramebuffer[q][j]);else s.deleteFramebuffer(A.__webglFramebuffer[q]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[q])}else{if(Array.isArray(A.__webglFramebuffer))for(let q=0;q<A.__webglFramebuffer.length;q++)s.deleteFramebuffer(A.__webglFramebuffer[q]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let q=0;q<A.__webglColorRenderbuffer.length;q++)A.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[q]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let V=N.textures;for(let q=0,j=V.length;q<j;q++){let pt=n.get(V[q]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(N)}let C=0;function L(){C=0}function P(){return C}function F(N){C=N}function U(){let N=C;return N>=i.maxTextures&&te("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),C+=1,N}function O(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function X(N,A){let V=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&V.__version!==N.version){let q=N.image;if(q===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(V,N,A);return}}else N.isExternalTexture&&(V.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+A)}function H(N,A){let V=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){mt(V,N,A);return}else N.isExternalTexture&&(V.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+A)}function W(N,A){let V=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){mt(V,N,A);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+A)}function G(N,A){let V=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&V.__version!==N.version){Gt(V,N,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+A)}let ft={[us]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Ua]:s.MIRRORED_REPEAT},ct={[un]:s.NEAREST,[Hd]:s.NEAREST_MIPMAP_NEAREST,[Ao]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[gl]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},Ct={[Xd]:s.NEVER,[Jd]:s.ALWAYS,[qd]:s.LESS,[tc]:s.LEQUAL,[Yd]:s.EQUAL,[ec]:s.GEQUAL,[Zd]:s.GREATER,[$d]:s.NOTEQUAL};function Bt(N,A){if(A.type===Xn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ye||A.magFilter===gl||A.magFilter===Ao||A.magFilter===gi||A.minFilter===Ye||A.minFilter===gl||A.minFilter===Ao||A.minFilter===gi)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ft[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ft[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ft[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ct[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ct[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ct[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===un||A.minFilter!==Ao&&A.minFilter!==gi||A.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(N,A){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",w));let q=A.source,j=f.get(q);j===void 0&&(j={},f.set(q,j));let pt=O(A);if(pt!==N.__cacheKey){j[pt]===void 0&&(j[pt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[pt].usedTimes++;let gt=j[N.__cacheKey];gt!==void 0&&(j[N.__cacheKey].usedTimes--,gt.usedTimes===0&&R(A)),N.__cacheKey=pt,N.__webglTexture=j[pt].texture}return V}function J(N,A,V){return Math.floor(Math.floor(N/V)/A)}function nt(N,A,V,q){let pt=N.updateRanges;if(pt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,V,q,A.data);else{pt.sort((Wt,vt)=>Wt.start-vt.start);let gt=0;for(let Wt=1;Wt<pt.length;Wt++){let vt=pt[gt],_t=pt[Wt],Xt=vt.start+vt.count,Jt=J(_t.start,A.width,4),ce=J(vt.start,A.width,4);_t.start<=Xt+1&&Jt===ce&&J(_t.start+_t.count-1,A.width,4)===Jt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++gt,pt[gt]=_t)}pt.length=gt+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),rt=e.getParameter(s.UNPACK_SKIP_PIXELS),xt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Wt=0,vt=pt.length;Wt<vt;Wt++){let _t=pt[Wt],Xt=Math.floor(_t.start/4),Jt=Math.ceil(_t.count/4),ce=Xt%A.width,k=Math.floor(Xt/A.width),yt=Jt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,ce,k,yt,st,V,q,A.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function mt(N,A,V){let q=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(q=s.TEXTURE_3D);let j=Qt(N,A),pt=A.source;e.bindTexture(q,N.__webglTexture,s.TEXTURE0+V);let gt=n.get(pt);if(pt.version!==gt.__version||j===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let st=ge.getPrimaries(ge.workingColorSpace),Mt=A.colorSpace===ii?null:ge.getPrimaries(A.colorSpace),Lt=A.colorSpace===ii||st===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let rt=g(A.image,!1,i.maxTextureSize);rt=oe(A,rt);let xt=r.convert(A.format,A.colorSpace),Wt=r.convert(A.type),vt=x(A.internalFormat,xt,Wt,A.normalized,A.colorSpace,A.isVideoTexture);Bt(q,A);let _t,Xt=A.mipmaps,Jt=A.isVideoTexture!==!0,ce=gt.__version===void 0||j===!0,k=pt.dataReady,yt=b(A,rt);if(A.isDepthTexture)vt=M(A.format===Qi,A.type),ce&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,vt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,vt,rt.width,rt.height,0,xt,Wt,null));else if(A.isDataTexture)if(Xt.length>0){Jt&&ce&&e.texStorage2D(s.TEXTURE_2D,yt,vt,Xt[0].width,Xt[0].height);for(let st=0,Mt=Xt.length;st<Mt;st++)_t=Xt[st],Jt?k&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,_t.width,_t.height,xt,Wt,_t.data):e.texImage2D(s.TEXTURE_2D,st,vt,_t.width,_t.height,0,xt,Wt,_t.data);A.generateMipmaps=!1}else Jt?(ce&&e.texStorage2D(s.TEXTURE_2D,yt,vt,rt.width,rt.height),k&&nt(A,rt,xt,Wt)):e.texImage2D(s.TEXTURE_2D,0,vt,rt.width,rt.height,0,xt,Wt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,vt,Xt[0].width,Xt[0].height,rt.depth);for(let st=0,Mt=Xt.length;st<Mt;st++)if(_t=Xt[st],A.format!==bn)if(xt!==null)if(Jt){if(k)if(A.layerUpdates.size>0){let Lt=Vh(_t.width,_t.height,A.format,A.type);for(let ut of A.layerUpdates){let Zt=_t.data.subarray(ut*Lt/_t.data.BYTES_PER_ELEMENT,(ut+1)*Lt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,ut,_t.width,_t.height,1,xt,Zt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,rt.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,rt.depth,xt,Wt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,rt.depth,0,xt,Wt,_t.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Jt&&ce&&e.texStorage2D(s.TEXTURE_2D,yt,vt,Xt[0].width,Xt[0].height);for(let st=0,Mt=Xt.length;st<Mt;st++)_t=Xt[st],A.format!==bn?xt!==null?Jt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,st,vt,_t.width,_t.height,0,_t.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?k&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,_t.width,_t.height,xt,Wt,_t.data):e.texImage2D(s.TEXTURE_2D,st,vt,_t.width,_t.height,0,xt,Wt,_t.data)}else if(A.isDataArrayTexture)if(Jt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,vt,rt.width,rt.height,rt.depth),k)if(A.layerUpdates.size>0){let st=Vh(rt.width,rt.height,A.format,A.type);for(let Mt of A.layerUpdates){let Lt=rt.data.subarray(Mt*st/rt.data.BYTES_PER_ELEMENT,(Mt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,rt.width,rt.height,1,xt,Wt,Lt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Wt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,xt,Wt,rt.data);else if(A.isData3DTexture)Jt?(ce&&e.texStorage3D(s.TEXTURE_3D,yt,vt,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Wt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,xt,Wt,rt.data);else if(A.isFramebufferTexture){if(ce)if(Jt)e.texStorage2D(s.TEXTURE_2D,yt,vt,rt.width,rt.height);else{let st=rt.width,Mt=rt.height;for(let Lt=0;Lt<yt;Lt++)e.texImage2D(s.TEXTURE_2D,Lt,vt,st,Mt,0,xt,Wt,null),st>>=1,Mt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),u.add(A),st.onpaint=Mt=>{let Lt=Mt.changedElements;for(let ut of u)Lt.includes(ut.image)&&(ut.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,rt);else{let Lt=s.RGBA,ut=s.RGBA,Zt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Lt,ut,Zt,rt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Jt&&ce){let st=jt(Xt[0]);e.texStorage2D(s.TEXTURE_2D,yt,vt,st.width,st.height)}for(let st=0,Mt=Xt.length;st<Mt;st++)_t=Xt[st],Jt?k&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,xt,Wt,_t):e.texImage2D(s.TEXTURE_2D,st,vt,xt,Wt,_t);A.generateMipmaps=!1}else if(Jt){if(ce){let st=jt(rt);e.texStorage2D(s.TEXTURE_2D,yt,vt,st.width,st.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Wt,rt)}else e.texImage2D(s.TEXTURE_2D,0,vt,xt,Wt,rt);m(A)&&S(q),gt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Gt(N,A,V){if(A.image.length!==6)return;let q=Qt(N,A),j=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+V);let pt=n.get(j);if(j.version!==pt.__version||q===!0){e.activeTexture(s.TEXTURE0+V);let gt=ge.getPrimaries(ge.workingColorSpace),tt=A.colorSpace===ii?null:ge.getPrimaries(A.colorSpace),rt=A.colorSpace===ii||gt===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let xt=A.isCompressedTexture||A.image[0].isCompressedTexture,Wt=A.image[0]&&A.image[0].isDataTexture,vt=[];for(let ut=0;ut<6;ut++)!xt&&!Wt?vt[ut]=g(A.image[ut],!0,i.maxCubemapSize):vt[ut]=Wt?A.image[ut].image:A.image[ut],vt[ut]=oe(A,vt[ut]);let _t=vt[0],Xt=r.convert(A.format,A.colorSpace),Jt=r.convert(A.type),ce=x(A.internalFormat,Xt,Jt,A.normalized,A.colorSpace),k=A.isVideoTexture!==!0,yt=pt.__version===void 0||q===!0,st=j.dataReady,Mt=b(A,_t);Bt(s.TEXTURE_CUBE_MAP,A);let Lt;if(xt){k&&yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,ce,_t.width,_t.height);for(let ut=0;ut<6;ut++){Lt=vt[ut].mipmaps;for(let Zt=0;Zt<Lt.length;Zt++){let Ht=Lt[Zt];A.format!==bn?Xt!==null?k?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,0,0,Ht.width,Ht.height,Xt,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,ce,Ht.width,Ht.height,0,Ht.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,0,0,Ht.width,Ht.height,Xt,Jt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,ce,Ht.width,Ht.height,0,Xt,Jt,Ht.data)}}}else{if(Lt=A.mipmaps,k&&yt){Lt.length>0&&Mt++;let ut=jt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,ce,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Wt){k?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,vt[ut].width,vt[ut].height,Xt,Jt,vt[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,vt[ut].width,vt[ut].height,0,Xt,Jt,vt[ut].data);for(let Zt=0;Zt<Lt.length;Zt++){let Ue=Lt[Zt].image[ut].image;k?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,0,0,Ue.width,Ue.height,Xt,Jt,Ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,ce,Ue.width,Ue.height,0,Xt,Jt,Ue.data)}}else{k?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Xt,Jt,vt[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,Xt,Jt,vt[ut]);for(let Zt=0;Zt<Lt.length;Zt++){let Ht=Lt[Zt];k?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,0,0,Xt,Jt,Ht.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,ce,Xt,Jt,Ht.image[ut])}}}m(A)&&S(s.TEXTURE_CUBE_MAP),pt.__version=j.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Pt(N,A,V,q,j,pt){let gt=r.convert(V.format,V.colorSpace),tt=r.convert(V.type),rt=x(V.internalFormat,gt,tt,V.normalized,V.colorSpace),xt=n.get(A),Wt=n.get(V);if(Wt.__renderTarget=A,!xt.__hasExternalTextures){let vt=Math.max(1,A.width>>pt),_t=Math.max(1,A.height>>pt);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,pt,rt,vt,_t,A.depth,0,gt,tt,null):e.texImage2D(j,pt,rt,vt,_t,0,gt,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),Vt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,j,Wt.__webglTexture,0,Ot(A)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,j,Wt.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(N,A,V){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){let q=A.depthTexture,j=q&&q.isDepthTexture?q.type:null,pt=M(A.stencilBuffer,j),gt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(A),pt,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(A),pt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,pt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,N)}else{let q=A.textures;for(let j=0;j<q.length;j++){let pt=q[j],gt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),rt=x(pt.internalFormat,gt,tt,pt.normalized,pt.colorSpace);Vt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(A),rt,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(A),rt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,rt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(N,A,V){let q=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(A.depthTexture);if(j.__renderTarget=A,(!j.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,A.depthTexture);let xt=r.convert(A.depthTexture.format),Wt=r.convert(A.depthTexture.type),vt;A.depthTexture.format===di?vt=s.DEPTH_COMPONENT24:A.depthTexture.format===Qi&&(vt=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,A.width,A.height,0,xt,Wt,null)}}else X(A.depthTexture,0);let pt=j.__webglTexture,gt=Ot(A),tt=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,rt=A.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===di)Vt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,tt,pt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,rt,tt,pt,0);else if(A.depthTexture.format===Qi)Vt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,tt,pt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,rt,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(N){let A=n.get(N),V=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),q){let j=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),A.__depthDisposeCallback=j}A.__boundDepthTexture=q}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)bt(A.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?bt(A.__webglFramebuffer[0],N,0):bt(A.__webglFramebuffer,N,0)}else if(V){A.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[q]),A.__webglDepthbuffer[q]===void 0)A.__webglDepthbuffer[q]=s.createRenderbuffer(),St(A.__webglDepthbuffer[q],N,!1);else{let j=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,pt)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),St(A.__webglDepthbuffer,N,!1);else{let j=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,pt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(N,A,V){let q=n.get(N);A!==void 0&&Pt(q.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&et(N)}function ht(N){let A=N.texture,V=n.get(N),q=n.get(A);N.addEventListener("dispose",y);let j=N.textures,pt=N.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=A.version,o.memory.textures++),pt){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let rt=0;rt<A.mipmaps.length;rt++)V.__webglFramebuffer[tt][rt]=s.createFramebuffer()}else V.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<A.mipmaps.length;tt++)V.__webglFramebuffer[tt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(gt)for(let tt=0,rt=j.length;tt<rt;tt++){let xt=n.get(j[tt]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&Vt(N)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let rt=j[tt];V.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);let xt=r.convert(rt.format,rt.colorSpace),Wt=r.convert(rt.type),vt=x(rt.internalFormat,xt,Wt,rt.normalized,rt.colorSpace,N.isXRRenderTarget===!0),_t=Ot(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,vt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),St(V.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,A);for(let tt=0;tt<6;tt++)if(A.mipmaps&&A.mipmaps.length>0)for(let rt=0;rt<A.mipmaps.length;rt++)Pt(V.__webglFramebuffer[tt][rt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else Pt(V.__webglFramebuffer[tt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(A)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let tt=0,rt=j.length;tt<rt;tt++){let xt=j[tt],Wt=n.get(xt),vt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(vt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,Wt.__webglTexture),Bt(vt,xt),Pt(V.__webglFramebuffer,N,xt,s.COLOR_ATTACHMENT0+tt,vt,0),m(xt)&&S(vt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(tt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,q.__webglTexture),Bt(tt,A),A.mipmaps&&A.mipmaps.length>0)for(let rt=0;rt<A.mipmaps.length;rt++)Pt(V.__webglFramebuffer[rt],N,A,s.COLOR_ATTACHMENT0,tt,rt);else Pt(V.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,tt,0);m(A)&&S(tt),e.unbindTexture()}N.depthBuffer&&et(N)}function at(N){let A=N.textures;for(let V=0,q=A.length;V<q;V++){let j=A[V];if(m(j)){let pt=_(N),gt=n.get(j).__webglTexture;e.bindTexture(pt,gt),S(pt),e.unbindTexture()}}}let lt=[],At=[];function Et(N){if(N.samples>0){if(Vt(N)===!1){let A=N.textures,V=N.width,q=N.height,j=s.COLOR_BUFFER_BIT,pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(N),tt=A.length>1;if(tt)for(let xt=0;xt<A.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let rt=N.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Wt=n.get(A[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,V,q,0,0,V,q,j,s.NEAREST),l===!0&&(lt.length=0,At.length=0,lt.push(s.COLOR_ATTACHMENT0+xt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(lt.push(pt),At.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,At)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let xt=0;xt<A.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Wt=n.get(A[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ot(N){return Math.min(i.maxSamples,N.samples)}function Vt(N){let A=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function B(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function oe(N,A){let V=N.colorSpace,q=N.format,j=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==kr&&V!==ii&&(ge.getTransfer(V)===Ce?(q!==bn||j!==Ln)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",V)),A}function jt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cv(s,t){function e(n,i=ii){let r,o=ge.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return s.BYTE;if(n===Lh)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===xl)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===zn)return s.HALF_FLOAT;if(n===Fh)return s.ALPHA;if(n===Uh)return s.RGB;if(n===bn)return s.RGBA;if(n===di)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===yl)return s.RED;if(n===Ml)return s.RED_INTEGER;if(n===ji)return s.RG;if(n===Sl)return s.RG_INTEGER;if(n===bl)return s.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Io)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Lo||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Fl||n===Ul||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===$l||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zl)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===Ql||n===Do||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:hv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends fi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",g=new lu,m={},S=e.getContextAttributes(),_=null,x=null,M=[],b=[],w=new dt,y=null,T=null,R=new hn;R.viewport=new xe;let E=new hn;E.viewport=new xe;let C=[R,E],L=new ul,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=M[J];return nt===void 0&&(nt=new ir,M[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=M[J];return nt===void 0&&(nt=new ir,M[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=M[J];return nt===void 0&&(nt=new ir,M[J]=nt),nt.getHandSpace()};function U(J){let nt=b.indexOf(J.inputSource);if(nt===-1)return;let mt=M[nt];mt!==void 0&&(mt.update(J.inputSource,J.frame,c||o),mt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let J=0;J<M.length;J++){let nt=b[J];nt!==null&&(b[J]=null,M[J].disconnect(nt))}P=null,F=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(_),f=null,d=null,u=null,i=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Gt=null,Pt=null;S.depth&&(Pt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?Qi:di,Gt=S.stencil?fr:ni);let St={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(St),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Sn(d.textureWidth,d.textureHeight,{format:bn,type:Ln,depthTexture:new Vi(d.textureWidth,d.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Sn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(J){for(let nt=0;nt<J.removed.length;nt++){let mt=J.removed[nt],Gt=b.indexOf(mt);Gt>=0&&(b[Gt]=null,M[Gt].disconnect(mt))}for(let nt=0;nt<J.added.length;nt++){let mt=J.added[nt],Gt=b.indexOf(mt);if(Gt===-1){for(let St=0;St<M.length;St++)if(St>=b.length){b.push(mt),Gt=St;break}else if(b[St]===null){b[St]=mt,Gt=St;break}if(Gt===-1)break}let Pt=M[Gt];Pt&&Pt.connect(mt)}}let H=new D,W=new D;function G(J,nt,mt){H.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(mt.matrixWorld);let Gt=H.distanceTo(W),Pt=nt.projectionMatrix.elements,St=mt.projectionMatrix.elements,bt=Pt[14]/(Pt[10]-1),et=Pt[14]/(Pt[10]+1),ot=(Pt[9]+1)/Pt[5],ht=(Pt[9]-1)/Pt[5],at=(Pt[8]-1)/Pt[0],lt=(St[8]+1)/St[0],At=bt*at,Et=bt*lt,Ot=Gt/(-at+lt),Vt=Ot*-at;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Vt),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let B=bt+Ot,oe=et+Ot,jt=At-Vt,N=Et+(Gt-Vt),A=ot*et/oe*B,V=ht*et/oe*B;J.projectionMatrix.makePerspective(jt,N,A,V,B,oe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,mt=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),L.near=E.near=R.near=nt,L.far=E.far=R.far=mt,(P!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,F=L.far),L.layers.mask=J.layers.mask|6,R.layers.mask=L.layers.mask&-5,E.layers.mask=L.layers.mask&-3;let Gt=J.parent,Pt=L.cameras;ft(L,Gt);for(let St=0;St<Pt.length;St++)ft(Pt[St],Gt);Pt.length===2?G(L,R,E):L.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),ct(J,L,Gt)};function ct(J,nt,mt){mt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let Ct=null;function Bt(J,nt){if(h=nt.getViewerPose(c||o),p=nt,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Gt=!1;mt.length!==L.cameras.length&&(L.cameras.length=0,Gt=!0);for(let et=0;et<mt.length;et++){let ot=mt[et],ht=null;if(f!==null)ht=f.getViewport(ot);else{let lt=u.getViewSubImage(d,ot);ht=lt.viewport,et===0&&(t.setRenderTargetTextures(x,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(x))}let at=C[et];at===void 0&&(at=new hn,at.layers.enable(et),at.viewport=new xe,C[et]=at),at.matrix.fromArray(ot.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ot.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ht.x,ht.y,ht.width,ht.height),et===0&&(L.matrix.copy(at.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Gt===!0&&L.cameras.push(at)}let Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let et=u.getDepthInformation(mt[0]);et&&et.isValid&&et.texture&&g.init(et,i.renderState)}if(Pt&&Pt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let et=0;et<mt.length;et++){let ot=mt[et].camera;if(ot){let ht=m[ot];ht||(ht=new no,m[ot]=ht);let at=u.getCameraImage(ot);ht.sourceTexture=at}}}}for(let mt=0;mt<M.length;mt++){let Gt=b[mt],Pt=M[mt];Gt!==null&&Pt!==void 0&&Pt.update(Gt,nt,c||o)}Ct&&Ct(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let Qt=new If;Qt.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Ct=J},this.dispose=function(){}}},dv=new ye,Of=new ae;Of.set(-1,0,0,0,1,0,0,0,1);function fv(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,kh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,_,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),_=S.envMap,x=S.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Of),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",S));let w=M.program;n.updateUBOMapping(x,w);let y=t.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let b=s.createBuffer(),w=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=i[x.id],b=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,T=b.length;y<T;y++){let R=b[y];if(Array.isArray(R))for(let E=0,C=R.length;E<C;E++)f(R[E],y,E,w);else f(R,y,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,b,w){if(v(x,M,b,w)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let E=0;E<T.length;E++){let C=T[E],L=m(C);p(C,x.__data,R),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function v(x,M,b,w){let y=x.value,T=M+"_"+b;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{let R=w[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(x){let M=x.uniforms,b=0,w=16;for(let T=0,R=M.length;T<R;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,L=E.length;C<L;C++){let P=E[C],F=Array.isArray(P.value)?P.value:[P.value];for(let U=0,O=F.length;U<O;U++){let X=F[U],H=m(X),W=b%w,G=W%H.boundary,ft=W+G;b+=G,ft!==0&&w-ft<H.storage&&(b+=w-ft),P.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=H.storage}}}let y=b%w;return y>0&&(b+=w-y),x.__size=b,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):te("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}var mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function gv(){return xi===null&&(xi=new Li(mv,16,16,ji,zn),xi.name="DFG_LUT",xi.minFilter=Ye,xi.magFilter=Ye,xi.wrapS=Wn,xi.wrapT=Wn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var rc=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ln}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,g=new Set([bl,Sl,Ml]),m=new Set([Ln,ni,dr,fr,_l,vl]),S=new Uint32Array(4),_=new Int32Array(4),x=new D,M=null,b=null,w=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,E=!1,C=null,L=null,P=null,F=null;this._outputColorSpace=Ne;let U=0,O=0,X=null,H=-1,W=null,G=new xe,ft=new xe,ct=null,Ct=new It(0),Bt=0,Qt=e.width,J=e.height,nt=1,mt=null,Gt=null,Pt=new xe(0,0,Qt,J),St=new xe(0,0,Qt,J),bt=!1,et=new rr,ot=!1,ht=!1,at=new ye,lt=new D,At=new xe,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Vt(){return X===null?nt:1}let B=n;function oe(I,z){return e.getContext(I,z)}let jt,N,A,V,q,j,pt,gt,tt,rt,xt,Wt,vt,_t,Xt,Jt,ce,k,yt,st,Mt,Lt,ut;try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",$n,!1),B===null){let z="webgl2";if(B=oe(z,I),B===null)throw oe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(I){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),ee("WebGLRenderer: "+I.message),I}function Zt(){jt=new bx(B),jt.init(),Mt=new cv(B,jt),N=new fx(B,jt,t,Mt),A=new av(B,jt),N.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),L=B.createFramebuffer(),P=B.createFramebuffer(),F=B.createFramebuffer(),V=new Tx(B),q=new Y_,j=new lv(B,jt,A,q,N,Mt,V),pt=new Sx(R),gt=new R0(B),Lt=new ux(B,gt),tt=new wx(B,gt,V,Lt),rt=new Rx(B,tt,gt,Lt,V),k=new Ax(B,N,j),Xt=new px(q),xt=new q_(R,pt,jt,N,Lt,Xt),Wt=new fv(R,q),vt=new $_,_t=new ev(jt),ce=new hx(R,pt,A,rt,p,l),Jt=new ov(R,rt,N),ut=new pv(B,V,N,A),yt=new dx(B,jt,V),st=new Ex(B,jt,V),V.programs=xt.programs,R.capabilities=N,R.extensions=jt,R.properties=q,R.renderLists=vt,R.shadowMap=Jt,R.state=A,R.info=V}v!==Ln&&(T=new Px(v,e.width,e.height,a,i,r));let Ht=new cu(R,B);this.xr=Ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let I=jt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=jt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(I){I!==void 0&&(nt=I,this.setSize(Qt,J,!1))},this.getSize=function(I){return I.set(Qt,J)},this.setSize=function(I,z,K=!0){if(Ht.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=I,J=z,e.width=Math.floor(I*nt),e.height=Math.floor(z*nt),K===!0&&(e.style.width=I+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,I,z)},this.getDrawingBufferSize=function(I){return I.set(Qt*nt,J*nt).floor()},this.setDrawingBufferSize=function(I,z,K){Qt=I,J=z,nt=K,e.width=Math.floor(I*K),e.height=Math.floor(z*K),this.setViewport(0,0,I,z)},this.setEffects=function(I){if(v===Ln){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let z=0;z<I.length;z++)if(I[z].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(G)},this.getViewport=function(I){return I.copy(Pt)},this.setViewport=function(I,z,K,Y){I.isVector4?Pt.set(I.x,I.y,I.z,I.w):Pt.set(I,z,K,Y),A.viewport(G.copy(Pt).multiplyScalar(nt).round())},this.getScissor=function(I){return I.copy(St)},this.setScissor=function(I,z,K,Y){I.isVector4?St.set(I.x,I.y,I.z,I.w):St.set(I,z,K,Y),A.scissor(ft.copy(St).multiplyScalar(nt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(I){A.setScissorTest(bt=I)},this.setOpaqueSort=function(I){mt=I},this.setTransparentSort=function(I){Gt=I},this.getClearColor=function(I){return I.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(I=!0,z=!0,K=!0){let Y=0;if(I){let Z=!1;if(X!==null){let Rt=X.texture.format;Z=g.has(Rt)}if(Z){let Rt=X.texture.type,Ut=m.has(Rt),Tt=ce.getClearColor(),zt=ce.getClearAlpha(),qt=Tt.r,he=Tt.g,pe=Tt.b;Ut?(S[0]=qt,S[1]=he,S[2]=pe,S[3]=zt,B.clearBufferuiv(B.COLOR,0,S)):(_[0]=qt,_[1]=he,_[2]=pe,_[3]=zt,B.clearBufferiv(B.COLOR,0,_))}else Y|=B.COLOR_BUFFER_BIT}z&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),C=I},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),ce.dispose(),vt.dispose(),_t.dispose(),q.dispose(),pt.dispose(),rt.dispose(),Lt.dispose(),ut.dispose(),xt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Pu),Ht.removeEventListener("sessionend",Iu),rs.stop()};function Ue(I){I.preventDefault(),Vr("WebGLRenderer: Context Lost."),E=!0}function Ae(){Vr("WebGLRenderer: Context Restored."),E=!1;let I=V.autoReset,z=Jt.enabled,K=Jt.autoUpdate,Y=Jt.needsUpdate,Z=Jt.type;Zt(),V.autoReset=I,Jt.enabled=z,Jt.autoUpdate=K,Jt.needsUpdate=Y,Jt.type=Z}function $n(I){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ai(I){let z=I.target;z.removeEventListener("dispose",ai),up(z)}function up(I){dp(I),q.remove(I)}function dp(I){let z=q.get(I).programs;z!==void 0&&(z.forEach(function(K){xt.releaseProgram(K)}),I.isShaderMaterial&&xt.releaseShaderCache(I))}this.renderBufferDirect=function(I,z,K,Y,Z,Rt){z===null&&(z=Et);let Ut=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Tt=mp(I,z,K,Y,Z);A.setMaterial(Y,Ut);let zt=K.index,qt=1;if(Y.wireframe===!0){if(zt=tt.getWireframeAttribute(K),zt===void 0)return;qt=2}let he=K.drawRange,pe=K.attributes.position,kt=he.start*qt,Re=(he.start+he.count)*qt;Rt!==null&&(kt=Math.max(kt,Rt.start*qt),Re=Math.min(Re,(Rt.start+Rt.count)*qt)),zt!==null?(kt=Math.max(kt,0),Re=Math.min(Re,zt.count)):pe!=null&&(kt=Math.max(kt,0),Re=Math.min(Re,pe.count));let tn=Re-kt;if(tn<0||tn===1/0)return;Lt.setup(Z,Y,Tt,K,zt);let Be,De=yt;if(zt!==null&&(Be=gt.get(zt),De=st,De.setIndex(Be)),Z.isMesh)Y.wireframe===!0?(A.setLineWidth(Y.wireframeLinewidth*Vt()),De.setMode(B.LINES)):De.setMode(B.TRIANGLES);else if(Z.isLine){let vn=Y.linewidth;vn===void 0&&(vn=1),A.setLineWidth(vn*Vt()),Z.isLineSegments?De.setMode(B.LINES):Z.isLineLoop?De.setMode(B.LINE_LOOP):De.setMode(B.LINE_STRIP)}else Z.isPoints?De.setMode(B.POINTS):Z.isSprite&&De.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let vn=Z._multiDrawStarts,Nt=Z._multiDrawCounts,An=Z._multiDrawCount,Se=zt?gt.get(zt).bytesPerElement:1,Gn=q.get(Y).currentProgram.getUniforms();for(let li=0;li<An;li++)Gn.setValue(B,"_gl_DrawID",li),De.render(vn[li]/Se,Nt[li])}else if(Z.isInstancedMesh)De.renderInstances(kt,tn,Z.count);else if(K.isInstancedBufferGeometry){let vn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nt=Math.min(K.instanceCount,vn);De.renderInstances(kt,tn,Nt)}else De.render(kt,tn)};function Cu(I,z,K,Y){C!==null&&I.isNodeMaterial&&C.setObject(Y,I),ot===!0&&Xt.setState(I,K,!1),I.transparent===!0&&I.side===je&&I.forceSinglePass===!1?(I.side=Qe,I.needsUpdate=!0,jo(I,z,Y),I.side=$i,I.needsUpdate=!0,jo(I,z,Y),I.side=je):jo(I,z,Y)}this.compile=function(I,z,K=null){K===null&&(K=I),C!==null&&C.renderStart(I,z,K),b=_t.get(K),b.init(z),y.push(b),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),I!==K&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),C!==null&&C.updateLights(b.state.lightsArray),ht=this.localClippingEnabled,ot=Xt.init(this.clippingPlanes,ht),ot===!0&&Xt.setGlobalState(this.clippingPlanes,z),C!==null&&Jt.render(b.state.shadowsArray,K,z);let Y=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Ut=0;Ut<Rt.length;Ut++){let Tt=Rt[Ut];Cu(Tt,K,z,Z),Y.add(Tt)}else Cu(Rt,K,z,Z),Y.add(Rt)}),b=y.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(I,z,K=null){let Y=this.compile(I,z,K);return new Promise(Z=>{function Rt(){if(Y.forEach(function(Ut){let zt=q.get(Ut).currentProgram;(zt===void 0||zt.isReady())&&Y.delete(Ut)}),Y.size===0){Z(I);return}setTimeout(Rt,10)}jt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ic=null;function fp(I){Ic&&Ic(I)}function Pu(){rs.stop()}function Iu(){rs.start()}let rs=new If;rs.setAnimationLoop(fp),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(I){Ic=I,Ht.setAnimationLoop(I),I===null?rs.stop():rs.start()},Ht.addEventListener("sessionstart",Pu),Ht.addEventListener("sessionend",Iu),this.render=function(I,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C!==null&&C.renderStart(I,z);let K=Ht.enabled===!0&&Ht.isPresenting===!0,Y=T!==null&&(X===null||K)&&T.begin(R,X);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(z),z=Ht.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,z,X),b=_t.get(I,y.length),b.init(z),b.state.textureUnits=j.getTextureUnits(),y.push(b),at.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(at,jn,z.reversedDepth),ht=this.localClippingEnabled,ot=Xt.init(this.clippingPlanes,ht),M=vt.get(I,w.length),M.init(),w.push(M),Ht.enabled===!0&&Ht.isPresenting===!0){let Ut=R.xr.getDepthSensingMesh();Ut!==null&&Lc(Ut,z,-1/0,R.sortObjects)}Lc(I,z,0,R.sortObjects),M.finish(),C!==null&&C.updateLights(b.state.lightsArray),R.sortObjects===!0&&M.sort(mt,Gt),Ot=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Ot&&ce.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Xt.beginShadows();let Z=b.state.shadowsArray;if(Jt.render(Z,I,z),ot===!0&&Xt.endShadows(),(Y&&T.hasRenderPass())===!1){let Ut=M.opaque,Tt=M.transmissive;if(b.setupLights(),z.isArrayCamera){let zt=z.cameras;if(Tt.length>0)for(let qt=0,he=zt.length;qt<he;qt++){let pe=zt[qt];Du(Ut,Tt,I,pe)}Ot&&ce.render(I);for(let qt=0,he=zt.length;qt<he;qt++){let pe=zt[qt];Lu(M,I,pe,pe.viewport)}}else Tt.length>0&&Du(Ut,Tt,I,z),Ot&&ce.render(I),Lu(M,I,z)}X!==null&&O===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),Y&&T.end(R),I.isScene===!0&&I.onAfterRender(R,I,z),Lt.resetDefaultState(),H=-1,W=null,y.pop(),y.length>0?(b=y[y.length-1],j.setTextureUnits(b.state.textureUnits),ot===!0&&Xt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,C!==null&&C.renderEnd()};function Lc(I,z,K,Y){if(I.visible===!1)return;if(I.layers.test(z.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(z);else if(I.isLightProbeGrid)b.pushLightProbeGrid(I);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(et)){Y&&At.setFromMatrixPosition(I.matrixWorld).applyMatrix4(at);let Ut=rt.update(I),Tt=I.material;Tt.visible&&M.push(I,Ut,Tt,K,At.z,null,z)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(et))){let Ut=rt.update(I),Tt=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),At.copy(I.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),At.copy(Ut.boundingSphere.center)),At.applyMatrix4(I.matrixWorld).applyMatrix4(at)),Array.isArray(Tt)){let zt=Ut.groups;for(let qt=0,he=zt.length;qt<he;qt++){let pe=zt[qt],kt=Tt[pe.materialIndex];kt&&kt.visible&&M.push(I,Ut,kt,K,At.z,pe,z)}}else Tt.visible&&M.push(I,Ut,Tt,K,At.z,null,z)}}let Rt=I.children;for(let Ut=0,Tt=Rt.length;Ut<Tt;Ut++)Lc(Rt[Ut],z,K,Y)}function Lu(I,z,K,Y){let{opaque:Z,transmissive:Rt,transparent:Ut}=I;b.setupLightsView(K),ot===!0&&Xt.setGlobalState(R.clippingPlanes,K),Y&&A.viewport(G.copy(Y)),Z.length>0&&Qo(Z,z,K),Rt.length>0&&Qo(Rt,z,K),Ut.length>0&&Qo(Ut,z,K),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Du(I,z,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let kt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Sn(1,1,{generateMipmaps:!0,type:kt?zn:Ln,minFilter:gi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Rt=b.state.transmissionRenderTarget[Y.id],Ut=Y.viewport||G;Rt.setSize(Ut.z*R.transmissionResolutionScale,Ut.w*R.transmissionResolutionScale);let Tt=R.getRenderTarget(),zt=R.getActiveCubeFace(),qt=R.getActiveMipmapLevel();R.setRenderTarget(Rt),R.getClearColor(Ct),Bt=R.getClearAlpha(),Bt<1&&R.setClearColor(16777215,.5),R.clear(),Ot&&ce.render(K);let he=R.toneMapping;R.toneMapping=ei;let pe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ot===!0&&Xt.setGlobalState(R.clippingPlanes,Y),Qo(I,K,Y),j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Re=0,tn=z.length;Re<tn;Re++){let Be=z[Re],{object:De,geometry:vn,material:Nt,group:An}=Be;if(Nt.side===je&&De.layers.test(Y.layers)){let Se=Nt.side;Nt.side=Qe,Nt.needsUpdate=!0,Nu(De,K,Y,vn,Nt,An),Nt.side=Se,Nt.needsUpdate=!0,kt=!0}}kt===!0&&(j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt))}R.setRenderTarget(Tt,zt,qt),R.setClearColor(Ct,Bt),pe!==void 0&&(Y.viewport=pe),R.toneMapping=he}function Qo(I,z,K){let Y=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Rt=I.length;Z<Rt;Z++){let Ut=I[Z],{object:Tt,geometry:zt,group:qt}=Ut,he=Ut.material;he.allowOverride===!0&&Y!==null&&(he=Y),Tt.layers.test(K.layers)&&Nu(Tt,z,K,zt,he,qt)}}function Nu(I,z,K,Y,Z,Rt){C!==null&&Z.isNodeMaterial&&C.setObject(I,Z),I.onBeforeRender(R,z,K,Y,Z,Rt),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(R,z,K,Y,I,Rt),Z.transparent===!0&&Z.side===je&&Z.forceSinglePass===!1?(Z.side=Qe,Z.needsUpdate=!0,R.renderBufferDirect(K,z,Y,Z,I,Rt),Z.side=$i,Z.needsUpdate=!0,R.renderBufferDirect(K,z,Y,Z,I,Rt),Z.side=je):R.renderBufferDirect(K,z,Y,Z,I,Rt),I.onAfterRender(R,z,K,Y,Z,Rt)}function jo(I,z,K){z.isScene!==!0&&(z=Et);let Y=q.get(I),Z=b.state.lights,Rt=b.state.shadowsArray,Ut=Z.state.version,Tt=xt.getParameters(I,Z.state,Rt,z,K,b.state.lightProbeGridArray),zt=xt.getProgramCacheKey(Tt),qt=Y.programs;Y.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let he=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Y.envMap=pt.get(I.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&I.envMap===null?z.environmentRotation:I.envMapRotation,qt===void 0&&(I.addEventListener("dispose",ai),qt=new Map,Y.programs=qt);let pe=qt.get(zt);if(pe!==void 0){if(Y.currentProgram===pe&&Y.lightsStateVersion===Ut)return Uu(I,Tt),pe}else Tt.uniforms=xt.getUniforms(I),C!==null&&I.isNodeMaterial&&C.build(I,K,Tt),I.onBeforeCompile(Tt,R),pe=xt.acquireProgram(Tt,zt),qt.set(zt,pe),Y.uniforms=Tt.uniforms;let kt=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(kt.clippingPlanes=Xt.uniform),Uu(I,Tt),Y.needsLights=xp(I),Y.lightsStateVersion=Ut,Y.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.sunLights.value=Z.state.sun,kt.sunLightShadows.value=Z.state.sunShadow,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.sunShadowMatrix.value=Z.state.sunShadowMatrix,kt.sunShadowCascade.value=Z.state.sunShadowCascade,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=pe,Y.uniformsList=null,pe}function Fu(I){if(I.uniformsList===null){let z=I.currentProgram.getUniforms();I.uniformsList=xr.seqWithValue(z.seq,I.uniforms)}return I.uniformsList}function Uu(I,z){let K=q.get(I);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function pp(I,z){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let K=0,Y=I.length;K<Y;K++){let Z=I[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function mp(I,z,K,Y,Z){z.isScene!==!0&&(z=Et),j.resetTextureUnits();let Rt=z.fog,Ut=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Tt=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ge.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,qt=pt.get(Y.envMap||Ut,zt),he=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pe=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!K.morphAttributes.position,Re=!!K.morphAttributes.normal,tn=!!K.morphAttributes.color,Be=ei;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Be=R.toneMapping);let De=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vn=De!==void 0?De.length:0,Nt=q.get(Y),An=b.state.lights;if(ot===!0&&(ht===!0||I!==W)){let Oe=I===W&&Y.id===H;Xt.setState(Y,I,Oe)}let Se=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==An.state.version||Nt.outputColorSpace!==Tt||Z.isBatchedMesh&&Nt.batching===!1||!Z.isBatchedMesh&&Nt.batching===!0||Z.isBatchedMesh&&Nt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Nt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Nt.instancing===!1||!Z.isInstancedMesh&&Nt.instancing===!0||Z.isSkinnedMesh&&Nt.skinning===!1||!Z.isSkinnedMesh&&Nt.skinning===!0||Z.isInstancedMesh&&Nt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Nt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Nt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Nt.instancingMorph===!1&&Z.morphTexture!==null||Nt.envMap!==qt||Y.fog===!0&&Nt.fog!==Rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Xt.numPlanes||Nt.numIntersection!==Xt.numIntersection)||Nt.vertexAlphas!==he||Nt.vertexTangents!==pe||Nt.morphTargets!==kt||Nt.morphNormals!==Re||Nt.morphColors!==tn||Nt.toneMapping!==Be||Nt.morphTargetsCount!==vn||!!Nt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Nt.__version=Y.version);let Gn=Nt.currentProgram;Se===!0&&(Gn=jo(Y,z,Z),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,Gn,Nt));let li=!1,Fi=!1,Ls=!1,Ie=Gn.getUniforms(),Ke=Nt.uniforms;if(A.useProgram(Gn.program)&&(li=!0,Fi=!0,Ls=!0),Y.id!==H&&(H=Y.id,Fi=!0),Nt.needsLights){let Oe=pp(b.state.lightProbeGridArray,Z);Nt.lightProbeGrid!==Oe&&(Nt.lightProbeGrid=Oe,Fi=!0)}if(li||W!==I){A.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ie.setValue(B,"projectionMatrix",I.projectionMatrix),Ie.setValue(B,"viewMatrix",I.matrixWorldInverse);let Oi=Ie.map.cameraPosition;Oi!==void 0&&Oi.setValue(B,lt.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),W!==I&&(W=I,Fi=!0,Ls=!0)}if(Nt.needsLights&&(An.state.sunShadowMap.length>0&&Ie.setValue(B,"sunShadowMap",An.state.sunShadowMap,j),An.state.directionalShadowMap.length>0&&Ie.setValue(B,"directionalShadowMap",An.state.directionalShadowMap,j),An.state.spotShadowMap.length>0&&Ie.setValue(B,"spotShadowMap",An.state.spotShadowMap,j),An.state.pointShadowMap.length>0&&Ie.setValue(B,"pointShadowMap",An.state.pointShadowMap,j)),Z.isSkinnedMesh){Ie.setOptional(B,Z,"bindMatrix"),Ie.setOptional(B,Z,"bindMatrixInverse");let Oe=Z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ie.setValue(B,"boneTexture",Oe.boneTexture,j))}Z.isBatchedMesh&&(Ie.setOptional(B,Z,"batchingTexture"),Ie.setValue(B,"batchingTexture",Z._matricesTexture,j),Ie.setOptional(B,Z,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",Z._indirectTexture,j),Ie.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",Z._colorsTexture,j));let Ui=K.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&k.update(Z,K,Gn),(Fi||Nt.receiveShadow!==Z.receiveShadow)&&(Nt.receiveShadow=Z.receiveShadow,Ie.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Ke.envMapIntensity.value=z.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=gv()),Fi){if(Ie.setValue(B,"toneMappingExposure",R.toneMappingExposure),Nt.needsLights&&gp(Ke,Ls),Rt&&Y.fog===!0&&Wt.refreshFogUniforms(Ke,Rt),Wt.refreshMaterialUniforms(Ke,Y,nt,J,b.state.transmissionRenderTarget[I.id]),Nt.needsLights&&Nt.lightProbeGrid){let Oe=Nt.lightProbeGrid;Ke.probesSH.value=Oe.texture,Ke.probesMin.value.copy(Oe.boundingBox.min),Ke.probesMax.value.copy(Oe.boundingBox.max),Ke.probesResolution.value.copy(Oe.resolution)}xr.upload(B,Fu(Nt),Ke,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xr.upload(B,Fu(Nt),Ke,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ie.setValue(B,"center",Z.center),Ie.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(B,"normalMatrix",Z.normalMatrix),Ie.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Oe=Y.uniformsGroups;for(let Oi=0,Ds=Oe.length;Oi<Ds;Oi++){let Bu=Oe[Oi];ut.update(Bu,Gn),ut.bind(Bu,Gn)}}return Gn}function gp(I,z){I.ambientLightColor.needsUpdate=z,I.lightProbe.needsUpdate=z,I.sunLights.needsUpdate=z,I.sunLightShadows.needsUpdate=z,I.directionalLights.needsUpdate=z,I.directionalLightShadows.needsUpdate=z,I.pointLights.needsUpdate=z,I.pointLightShadows.needsUpdate=z,I.spotLights.needsUpdate=z,I.spotLightShadows.needsUpdate=z,I.rectAreaLights.needsUpdate=z,I.hemisphereLights.needsUpdate=z}function xp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(I,z,K){let Y=q.get(I);Y.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(I.texture).__webglTexture=z,q.get(I.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,z){let K=q.get(I);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(I,z=0,K=0){X=I,U=z,O=K;let Y=null,Z=!1,Rt=!1;if(I){let Tt=q.get(I);if(Tt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(B.FRAMEBUFFER,Tt.__webglFramebuffer),G.copy(I.viewport),ft.copy(I.scissor),ct=I.scissorTest,A.viewport(G),A.scissor(ft),A.setScissorTest(ct),H=-1;return}else if(Tt.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(Tt.__hasExternalTextures)j.rebindTextures(I,q.get(I.texture).__webglTexture,q.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let he=I.depthTexture;if(Tt.__boundDepthTexture!==he){if(he!==null&&q.has(he)&&(I.width!==he.image.width||I.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}let zt=I.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Rt=!0);let qt=q.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(qt[z])?Y=qt[z][K]:Y=qt[z],Z=!0):I.samples>0&&j.useMultisampledRTT(I)===!1?Y=q.get(I).__webglMultisampledFramebuffer:Array.isArray(qt)?Y=qt[K]:Y=qt,G.copy(I.viewport),ft.copy(I.scissor),ct=I.scissorTest}else G.copy(Pt).multiplyScalar(nt).floor(),ft.copy(St).multiplyScalar(nt).floor(),ct=bt;if(K!==0&&(Y=L),A.bindFramebuffer(B.FRAMEBUFFER,Y)&&A.drawBuffers(I,Y),A.viewport(G),A.scissor(ft),A.setScissorTest(ct),Z){let Tt=q.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Tt.__webglTexture,K)}else if(Rt){let Tt=z;for(let zt=0;zt<I.textures.length;zt++){let qt=q.get(I.textures[zt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+zt,qt.__webglTexture,K,Tt)}}else if(I!==null&&K!==0){let Tt=q.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,K)}H=-1};function Ou(I){let z=q.get(I);return(z.__readFormat!==I.format||z.__readType!==I.type)&&(z.__readFormat=I.format,z.__readType=I.type,z.__formatReadable=N.textureFormatReadable(I.format),z.__typeReadable=N.textureTypeReadable(I.type)),z}this.readRenderTargetPixels=function(I,z,K,Y,Z,Rt,Ut,Tt=0){if(!(I&&I.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){A.bindFramebuffer(B.FRAMEBUFFER,zt);try{let qt=I.textures[Tt],he=qt.format,pe=qt.type;I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);let kt=Ou(qt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=I.width-Y&&K>=0&&K<=I.height-Z&&B.readPixels(z,K,Y,Z,Mt.convert(he),Mt.convert(pe),Rt)}finally{let qt=X!==null?q.get(X).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(I,z,K,Y,Z,Rt,Ut,Tt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt)if(z>=0&&z<=I.width-Y&&K>=0&&K<=I.height-Z){A.bindFramebuffer(B.FRAMEBUFFER,zt);let qt=I.textures[Tt],he=qt.format,pe=qt.type;I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);let kt=Ou(qt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,Rt.byteLength,B.STREAM_READ),B.readPixels(z,K,Y,Z,Mt.convert(he),Mt.convert(pe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let tn=X!==null?q.get(X).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,tn);let Be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jd(B,Be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Rt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Re),B.deleteSync(Be),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,z=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(I.image.width*Y),Rt=Math.floor(I.image.height*Y),Ut=z!==null?z.x:0,Tt=z!==null?z.y:0;j.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Ut,Tt,Z,Rt),A.unbindTexture()},this.copyTextureToTexture=function(I,z,K=null,Y=null,Z=0,Rt=0){let Ut,Tt,zt,qt,he,pe,kt,Re,tn,Be=I.isCompressedTexture?I.mipmaps[Rt]:I.image;if(K!==null)Ut=K.max.x-K.min.x,Tt=K.max.y-K.min.y,zt=K.isBox3?K.max.z-K.min.z:1,qt=K.min.x,he=K.min.y,pe=K.isBox3?K.min.z:0;else{let Ke=Math.pow(2,-Z);Ut=Math.floor(Be.width*Ke),Tt=Math.floor(Be.height*Ke),I.isDataArrayTexture?zt=Be.depth:I.isData3DTexture?zt=Math.floor(Be.depth*Ke):zt=1,qt=0,he=0,pe=0}Y!==null?(kt=Y.x,Re=Y.y,tn=Y.z):(kt=0,Re=0,tn=0);let De=Mt.convert(z.format),vn=Mt.convert(z.type),Nt;z.isData3DTexture?(j.setTexture3D(z,0),Nt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Nt=B.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Nt=B.TEXTURE_2D),A.activeTexture(B.TEXTURE0),A.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let An=A.getParameter(B.UNPACK_ROW_LENGTH),Se=A.getParameter(B.UNPACK_IMAGE_HEIGHT),Gn=A.getParameter(B.UNPACK_SKIP_PIXELS),li=A.getParameter(B.UNPACK_SKIP_ROWS),Fi=A.getParameter(B.UNPACK_SKIP_IMAGES);A.pixelStorei(B.UNPACK_ROW_LENGTH,Be.width),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Be.height),A.pixelStorei(B.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(B.UNPACK_SKIP_ROWS,he),A.pixelStorei(B.UNPACK_SKIP_IMAGES,pe);let Ls=I.isDataArrayTexture||I.isData3DTexture,Ie=z.isDataArrayTexture||z.isData3DTexture;if(I.isDepthTexture){let Ke=q.get(I),Ui=q.get(z),Oe=q.get(Ke.__renderTarget),Oi=q.get(Ui.__renderTarget);A.bindFramebuffer(B.READ_FRAMEBUFFER,Oe.__webglFramebuffer),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ds=0;Ds<zt;Ds++)Ls&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(I).__webglTexture,Z,pe+Ds),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(z).__webglTexture,Rt,tn+Ds)),B.blitFramebuffer(qt,he,Ut,Tt,kt,Re,Ut,Tt,B.DEPTH_BUFFER_BIT,B.NEAREST);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||q.has(I)){let Ke=q.get(I),Ui=q.get(z);A.bindFramebuffer(B.READ_FRAMEBUFFER,P),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Oe=0;Oe<zt;Oe++)Ls?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ke.__webglTexture,Z,pe+Oe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ke.__webglTexture,Z),Ie?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ui.__webglTexture,Rt,tn+Oe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ui.__webglTexture,Rt),Z!==0?B.blitFramebuffer(qt,he,Ut,Tt,kt,Re,Ut,Tt,B.COLOR_BUFFER_BIT,B.NEAREST):Ie?B.copyTexSubImage3D(Nt,Rt,kt,Re,tn+Oe,qt,he,Ut,Tt):B.copyTexSubImage2D(Nt,Rt,kt,Re,qt,he,Ut,Tt);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ie?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Nt,Rt,kt,Re,tn,Ut,Tt,zt,De,vn,Be.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,Rt,kt,Re,tn,Ut,Tt,zt,De,Be.data):B.texSubImage3D(Nt,Rt,kt,Re,tn,Ut,Tt,zt,De,vn,Be):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Rt,kt,Re,Ut,Tt,De,vn,Be.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Rt,kt,Re,Be.width,Be.height,De,Be.data):B.texSubImage2D(B.TEXTURE_2D,Rt,kt,Re,Ut,Tt,De,vn,Be);A.pixelStorei(B.UNPACK_ROW_LENGTH,An),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se),A.pixelStorei(B.UNPACK_SKIP_PIXELS,Gn),A.pixelStorei(B.UNPACK_SKIP_ROWS,li),A.pixelStorei(B.UNPACK_SKIP_IMAGES,Fi),Rt===0&&z.generateMipmaps&&B.generateMipmap(Nt),A.unbindTexture()},this.initRenderTarget=function(I){q.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),A.unbindTexture()},this.resetState=function(){U=0,O=0,X=null,A.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var yr=class s extends ${constructor(){let t=s.SkyShader,e=new Xe({name:t.name,uniforms:pr.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Qe,depthWrite:!1});super(new ie(1,1,1),e),this.isSky=!0}};yr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Yt=Math.PI/180,hu=180/Math.PI,Q=(s,t,e)=>s<t?t:s>e?e:s,si=(s,t,e)=>s+(t-s)*e,xv=(s,t,e)=>Q((e-s)/(t-s),0,1),on=(s,t,e)=>{let n=xv(s,t,e);return n*n*(3-2*n)};var He=(s,t,e,n)=>{let i=t-s,r=e*n;return Math.abs(i)<=r?t:s+Math.sign(i)*r},Es=(s,t,e,n)=>si(s,t,1-Math.exp(-e*n));function En(s=1){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ts(s=1){let t=En(s),e=new Uint8Array(512),n=new Uint8Array(256);for(let a=0;a<256;a++)n[a]=a;for(let a=255;a>0;a--){let l=Math.floor(t()*(a+1)),c=n[a];n[a]=n[l],n[l]=c}for(let a=0;a<512;a++)e[a]=n[a&255];let i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return function(l,c){let h=(l+c)*r,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*o,p=l-(u-f),v=c-(d-f),g=p>v?1:0,m=p>v?0:1,S=p-g+o,_=v-m+o,x=p-1+2*o,M=v-1+2*o,b=u&255,w=d&255,y=0,T=0,R=0,E=.5-p*p-v*v;if(E>0){let P=i[e[b+e[w]]&7];E*=E,y=E*E*(P[0]*p+P[1]*v)}let C=.5-S*S-_*_;if(C>0){let P=i[e[b+g+e[w+m]]&7];C*=C,T=C*C*(P[0]*S+P[1]*_)}let L=.5-x*x-M*M;if(L>0){let P=i[e[b+1+e[w+1]]&7];L*=L,R=L*L*(P[0]*x+P[1]*M)}return 70*(y+T+R)}}function Bo(s,t,e,n=5,i=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*s(t*a,e*a),c+=o,o*=r,a*=i;return l/c}function Bf(s,t,e,n=5,i=2,r=.5){let o=1,a=1,l=0,c=0,h=1;for(let u=0;u<n;u++){let d=1-Math.abs(s(t*a,e*a));d*=d,d*=h,h=Q(d*2,0,1),l+=o*d,c+=o,o*=r,a*=i}return l/c}function an(s){let t=s.length,e=s.map(o=>o[0]),n=s.map(o=>o[1]),i=new Array(t-1),r=new Array(t);for(let o=0;o<t-1;o++)i[o]=(n[o+1]-n[o])/(e[o+1]-e[o]);r[0]=i[0],r[t-1]=i[t-2];for(let o=1;o<t-1;o++)i[o-1]*i[o]<=0?r[o]=0:r[o]=(i[o-1]+i[o])/2;for(let o=0;o<t-1;o++){if(i[o]===0){r[o]=0,r[o+1]=0;continue}let a=r[o]/i[o],l=r[o+1]/i[o],c=a*a+l*l;if(c>9){let h=3/Math.sqrt(c);r[o]=h*a*i[o],r[o+1]=h*l*i[o]}}return function(o){if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0,l=t-1;for(;l-a>1;){let f=a+l>>1;e[f]>o?l=f:a=f}let c=e[l]-e[a],h=(o-e[a])/c,u=h*h,d=u*h;return(2*d-3*u+1)*n[a]+(d-2*u+h)*c*r[a]+(-2*d+3*u)*n[l]+(d-u)*c*r[l]}}var lc=class{constructor(t,e,{quality:n="medium"}={}){this.scene=t,this.renderer=e,this.quality=n,this.sunElevation=41*Yt,this.sunAzimuth=228*Yt,this.sunDir=new D,this._computeSunDir();let i=new yr;i.scale.setScalar(8e4);let r=i.material.uniforms;r.turbidity.value=4.2,r.rayleigh.value=1.25,r.mieCoefficient.value=.0045,r.mieDirectionalG.value=.82,r.sunPosition.value.copy(this.sunDir).multiplyScalar(1e3),i.frustumCulled=!1,i.renderOrder=-10,t.add(i),this.sky=i,this.fogColor=new It(.62,.7,.78),this.skyColor=new It(.35,.5,.7),this.fogDensity=46e-6,t.fog=new Yr(this.fogColor.clone(),this.fogDensity);let o=new bo(16773596,3.9);o.castShadow=!0;let a=n==="high"?4096:n==="low"?1024:2048;o.shadow.mapSize.set(a,a);let l=o.shadow.camera;l.left=-22,l.right=22,l.top=22,l.bottom=-22,l.near=1,l.far=3e3,o.shadow.bias=-12e-5,o.shadow.normalBias=.025,o.shadow.radius=2,t.add(o),t.add(o.target),this.sun=o;let c=new vo(12439778,6050368,.42);t.add(c),this.hemi=c,this._buildEnvMap(),this.wind={fromDeg:250,speed:4.6,gust:2.2,turb:1},this.noise=ts(4242),this.thermals=[],this._windBase=new D,this.updateWindBase()}_computeSunDir(){let t=this.sunElevation,e=this.sunAzimuth;this.sunDir.set(Math.cos(t)*Math.sin(e),Math.sin(t),-Math.cos(t)*Math.cos(e)).normalize()}_buildEnvMap(){let t=new _r(this.renderer),e=new ds,n=new yr;n.scale.setScalar(1e3);let i=n.material.uniforms,r=this.sky.material.uniforms;for(let l of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])i[l].value=r[l].value;i.sunPosition.value.copy(this.sunDir),i.showSunDisc&&(i.showSunDisc.value=!1),e.add(n);let o=new $(new In(500,32,16,0,Math.PI*2,Math.PI/2+.02,Math.PI/2),new Ve({color:3881516,side:Qe}));e.add(o);let a=t.fromScene(e,0,.1,2e3);this.envMap=a.texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.55,t.dispose()}updateWindBase(){let t=this.wind.fromDeg*Yt;this._windBase.set(-Math.sin(t),0,Math.cos(t)).multiplyScalar(this.wind.speed)}windAt(t,e,n,i,r,o=0){let a=Math.max(0,e-o),l=Q(Math.log(1+a/.3)/Math.log(1+100/.3),.25,1.35);r.copy(this._windBase).multiplyScalar(l);let c=this.noise,h=this.wind.gust*(.5+.5*c(i*.07,3.1)),u=this.wind.turb;r.x+=h*c(t/180+i*.35,n/180)*.8+u*c(t/31+i*.9,n/29+e/40)*.6,r.z+=h*c(n/170-i*.31,t/190+9)*.8+u*c(n/33-i*.85,t/27+5)*.6,r.y+=u*.5*c(t/45+7,n/45+i*.6)*Q(a/60,.1,1);for(let d of this.thermals){let f=t-d.x,p=n-d.z,v=f*f+p*p,g=d.r*d.r;if(v<g*4&&e<d.top){let m=Math.exp(-v/g);r.y+=d.w*m,r.x+=d.w*.3*m*c(i*2.3+t/20,n/20),r.z+=d.w*.3*m*c(n/20,i*2.1+t/20)}}return r}update(t,e,n){let i=this.sun;i.target.position.copy(e),i.position.copy(e).addScaledVector(this.sunDir,400),i.target.updateMatrixWorld(),this.sky.position.copy(n)}setFogDensity(t){this.fogDensity=t,this.scene.fog.density=t}};function ri(s,t,e=5,n=1,i=.5){let r=new Float32Array(s*s),o=En(n),a=1,l=0;for(let c=0;c<e;c++){let h=t<<c,u=new Float32Array(h*h);for(let d=0;d<u.length;d++)u[d]=o();for(let d=0;d<s;d++){let f=d/s*h,p=Math.floor(f),v=f-p,g=v*v*(3-2*v),m=p%h*h,S=(p+1)%h*h;for(let _=0;_<s;_++){let x=_/s*h,M=Math.floor(x),b=x-M,w=b*b*(3-2*b),y=M%h,T=(M+1)%h,R=(u[m+y]*(1-w)+u[m+T]*w)*(1-g)+(u[S+y]*(1-w)+u[S+T]*w)*g;r[d*s+_]+=R*a}}l+=a,a*=i}for(let c=0;c<r.length;c++)r[c]/=l;return r}function zf(s,t,e=2){let n=En(e),i=[];for(let c=0;c<t;c++)i.push([n()*s,n()*s,.7+n()*.6]);let r=new Float32Array(s*s),o=Math.ceil(Math.sqrt(t)),a=s/o,l=Array.from({length:o*o},()=>[]);i.forEach((c,h)=>l[Math.floor(c[1]/a)%o*o+Math.floor(c[0]/a)%o].push(h));for(let c=0;c<s;c++)for(let h=0;h<s;h++){let u=Math.floor(h/a),d=Math.floor(c/a),f=1e9,p=1e9;for(let v=-1;v<=1;v++)for(let g=-1;g<=1;g++){let m=(u+g+o)%o,S=(d+v+o)%o;for(let _ of l[S*o+m]){let x=i[_],M=Math.abs(h-x[0]),b=Math.abs(c-x[1]);M>s/2&&(M=s-M),b>s/2&&(b=s-b);let w=Math.sqrt(M*M+b*b)/x[2];w<f?(p=f,f=w):w<p&&(p=w)}}r[c*s+h]=Math.min(1,f/a)}return r}function vi(s,t,{repeat:e=!0,srgb:n=!1}={}){let i=new Uint8Array(s*s*4);for(let o=0;o<s*s;o++)for(let a=0;a<4;a++){let l=t[a],c=l===void 0?1:typeof l=="number"?l:l[o];i[o*4+a]=Math.max(0,Math.min(255,Math.round(c*255)))}let r=new Li(i,s,s,bn);return r.wrapS=r.wrapT=e?us:Wn,r.magFilter=Ye,r.minFilter=gi,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=Ne),r.needsUpdate=!0,r}function uu(s,t,e=2){let n=new Float32Array(t*t),i=new Float32Array(t*t),r=new Float32Array(t*t);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=s[o*t+(a-1+t)%t],c=s[o*t+(a+1)%t],h=s[(o-1+t)%t*t+a],u=s[(o+1)%t*t+a],d=(l-c)*e,f=(h-u)*e,p=1,v=1/Math.sqrt(d*d+f*f+p*p),g=o*t+a;n[g]=d*v*.5+.5,i[g]=f*v*.5+.5,r[g]=p*v*.5+.5}return vi(t,[n,i,r,1])}function kf(s=512,t=7){let e=En(t),n=new Float32Array(s*s),i=[];for(let o=0;o<28;o++){let a=Math.round((e()*2-1)*(3+o*.9)),l=Math.round((e()*2-1)*(3+o*.9));if(a===0&&l===0)continue;let c=Math.hypot(a,l);i.push([a,l,1/Math.pow(c,1.15),e()*Math.PI*2])}let r=ri(s,16,4,t+3,.55);for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=0,c=a/s*Math.PI*2,h=o/s*Math.PI*2;for(let u of i){let d=u[0]*c+u[1]*h+u[3];l+=u[2]*(Math.sin(d)+.25*Math.sin(2*d+1))}n[o*s+a]=l*.22+(r[o*s+a]-.5)*.35}return uu(n,s,9)}function Mr(s,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let i=new dn(s);return t&&(i.colorSpace=Ne),i.anisotropy=n,e&&(i.wrapS=i.wrapT=us),i.needsUpdate=!0,i}function es(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ns(s=128,{power:t=2.2,noise:e=0,seed:n=5}={}){let i=e>0?ri(s,6,4,n):null,r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let l=0;l<s;l++){let c=(l+.5)/s*2-1,h=(a+.5)/s*2-1,u=Math.sqrt(c*c+h*h);i&&(u+=(i[a*s+l]-.5)*e);let d=Math.max(0,1-u);r[a*s+l]=Math.pow(d,t)*(u<1?1:0)}return vi(s,[1,1,1,r],{repeat:!1})}function Hf(s=256,t=17){let e=En(t),n=document.createElement("canvas");n.width=n.height=s;let i=n.getContext("2d");i.clearRect(0,0,s,s);let r=s/2,o=s/2,a=i.createRadialGradient(r,o,0,r,o,s/2);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(.55,"rgba(255,255,255,0.1)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,s,s);for(let h=0;h<1400;h++){let u=e()*Math.PI*2,d=Math.pow(e(),.85)*s*.46,f=r+Math.cos(u)*d,p=o+Math.sin(u)*d,v=.6+Math.pow(e(),3)*s*.05,g=Math.min(1,(1-d/(s*.5))*(.5+e()*.8));i.fillStyle=`rgba(255,255,255,${g.toFixed(3)})`,i.beginPath(),i.arc(f,p,v,0,Math.PI*2),i.fill()}let l=i.getImageData(0,0,s,s).data,c=new Float32Array(s*s);for(let h=0;h<s*s;h++)c[h]=l[h*4+3]/255;return vi(s,[1,1,1,c],{repeat:!1})}var pu=.35,Sr=Math.cos(pu),br=Math.sin(pu),Ee={x:Sr,z:br},ve={x:-br,z:Sr},$t={half:12e3,lake:{cx:0,cz:0,a:3400,b:900},runway:{len:1800,wid:30,elev:9,cx:0,cz:0,angle:pu},apron:{len:260,wid:110},ramp:{wid:24},island:{u:1500,v:170,r:160},fireZones:[]};$t.runway.cx=-ve.x*1750+Ee.x*250;$t.runway.cz=-ve.z*1750+Ee.z*250;$t.apron.cx=$t.runway.cx+ve.x*115;$t.apron.cz=$t.runway.cz+ve.z*115;$t.ramp.x0=$t.apron.cx+ve.x*55;$t.ramp.z0=$t.apron.cz+ve.z*55;$t.ramp.x1=$t.ramp.x0+ve.x*900;$t.ramp.z1=$t.ramp.z0+ve.z*900;$t.fireZones=[{x:ve.x*2350-Ee.x*900,z:ve.z*2350-Ee.z*900,size:768,name:"Versante Sud \u2014 Pineta"},{x:ve.x*2700+Ee.x*1800,z:ve.z*2700+Ee.z*1800,size:768,name:"Collina di Monte Rosso"},{x:-ve.x*2900+Ee.x*3300,z:-ve.z*2900+Ee.z*3300,size:768,name:"Bosco del Nord-Est"},{x:ve.x*2200-Ee.x*4300,z:ve.z*2200-Ee.z*4300,size:768,name:"Valle Ovest"}];function _v(s,t){let e=s-$t.lake.cx,n=t-$t.lake.cz;return{u:e*Sr+n*br,v:-e*br+n*Sr}}function mu(s,t){return{x:$t.lake.cx+s*Sr-t*br,z:$t.lake.cz+s*br+t*Sr}}function du(s,t,e,n,i,r){let o=i-e,a=r-n,l=Q(((s-e)*o+(t-n)*a)/(o*o+a*a),0,1),c=s-(e+o*l),h=t-(n+a*l);return{d:Math.hypot(c,h),t:l}}var fu=class{constructor(t=1415){this.noise=ts(t),this.noise2=ts(t+11),this.noise3=ts(t+23)}lakeE(t,e){let{u:n,v:i}=_v(t,e),r=$t.lake,o=Math.sqrt((n/r.a)**2+(i/r.b)**2);o+=.07*this.noise(t/800,e/800)+.03*this.noise2(t/230,e/230);let a=Math.hypot((n+1600)/520,(i-820)/380);return o=Math.min(o,a*.98+.02),{e:o,u:n,v:i}}raw(t,e){let n=this.noise,i=this.noise2,r=this.noise3,{e:o,u:a,v:l}=this.lakeE(t,e),c=on(700,2900,Math.abs(l)+.25*Math.max(0,Math.abs(a)-5500)),h=on(1.05,3.6,o),u=Bf(n,t/3800+10,e/3800-7,5),d=(.18+.82*c)*Math.pow(h,1.25)*(300+520*u),f=38*Bo(i,t/950,e/950,4)+14*Bo(r,t/260,e/260,3)+4*r(t/60,e/60),p=on(1,1.7,o),v=3.5+7*p+(f+22)*p*.75+d,g=-1.5-26*on(.98,.45,o)+2.5*Bo(r,t/400,e/400,3),m;if(o<.97)m=g;else if(o<1.06){let x=on(.97,1.06,o);m=si(g,v,x)}else m=v;let S=$t.island,_=Math.hypot(a-S.u,l-S.v)/S.r;return _<1.6&&(m=Math.max(m,si(14+6*n(t/80,e/80),-3,on(.2,1.4,_)))),m}height(t,e){let n=this.raw(t,e),i=$t.runway,r=t-i.cx,o=e-i.cz,a=r*Ee.x+o*Ee.z,l=r*ve.x+o*ve.z,c=1-on(i.len/2+120,i.len/2+420,Math.abs(a)),h=1-on(i.wid/2+70,i.wid/2+260,Math.abs(l-(l>0?Math.min(l,180):0))),u=c*h;u>0&&(n=si(n,i.elev,u));let d=$t.ramp,f=du(t,e,d.x0,d.z0,d.x1,d.z1),p=1-on(d.wid/2+4,d.wid/2+60,f.d);if(p>0){let v=Math.hypot(d.x1-d.x0,d.z1-d.z0),g=f.t*v,m=this._rampShore||(this._rampShore=this._findRampShore()),S=g<m-110?i.elev:si(i.elev,-3.2,Q((g-(m-110))/170,0,1));n=si(n,S,p)}return n}_findRampShore(){let t=$t.ramp,e=Math.hypot(t.x1-t.x0,t.z1-t.z0);for(let n=0;n<e;n+=2){let i=t.x0+(t.x1-t.x0)*n/e,r=t.z0+(t.z1-t.z0)*n/e;if(this.raw(i,r)<.5)return n}return e*.7}forest(t,e,n,i){if(n<2.5)return 0;let r=$t.runway,o=t-r.cx,a=e-r.cz,l=o*Ee.x+a*Ee.z,c=o*ve.x+a*ve.z;if(Math.abs(l)<r.len/2+450&&c>-260&&c<420)return 0;let h=$t.ramp;if(du(t,e,h.x0,h.z0,h.x1,h.z1).d<70)return 0;let u=.55+.6*Bo(this.noise2,t/1400+3,e/1400-5,4)+.25*this.noise3(t/300,e/300);return u*=on(2.5,9,n),u*=1-on(780,1050,n),u*=1-on(.55,.8,i),Q(u,0,1)}};function vv(s,t,e){let n=new Float64Array(s);for(let i=0;i<s;i++){let r=i/(s-1)*2-1,o=Math.abs(r);n[i]=Math.sign(r)*t*(e*o+(1-e)*o*o*o)}return n}function cc(s,t){let e=0,n=s.length-1;if(t<=s[0])return 0;if(t>=s[n])return n-1;for(;n-e>1;){let i=e+n>>1;s[i]>t?n=i:e=i}return e}var uc=class{constructor({quality:t="medium",seed:e=1415}={}){this.hf=new fu(e);let n=t==="low"?360:t==="high"?760:560;this.N=n,this.xs=vv(n,$t.half,.3),this.zs=this.xs,this.heights=new Float32Array(n*n);for(let i=0;i<n;i++)for(let r=0;r<n;r++)this.heights[i*n+r]=this.hf.height(this.xs[r],this.zs[i])}heightAt(t,e){let n=this.N,i=this.xs,r=this.zs,o=this.heights,a=cc(i,t),l=cc(r,e),c=Q((t-i[a])/(i[a+1]-i[a]),0,1),h=Q((e-r[l])/(r[l+1]-r[l]),0,1),u=o[l*n+a],d=o[(l+1)*n+a],f=o[(l+1)*n+a+1],p=o[l*n+a+1];return c+h<=1?u+(p-u)*c+(d-u)*h:f+(d-f)*(1-c)+(p-f)*(1-h)}normalAt(t,e,n=new D){let r=this.heightAt(t+4,e)-this.heightAt(t-4,e),o=this.heightAt(t,e+4)-this.heightAt(t,e-4);return n.set(-r,8,-o).normalize()}isRunway(t,e){let n=$t.runway,i=t-n.cx,r=e-n.cz,o=i*Ee.x+r*Ee.z,a=i*ve.x+r*ve.z;if(Math.abs(o)<n.len/2&&Math.abs(a)<n.wid/2+3)return!0;let l=$t.apron,c=t-l.cx,h=e-l.cz;if(Math.abs(c*Ee.x+h*Ee.z)<l.len/2&&Math.abs(c*ve.x+h*ve.z)<l.wid/2)return!0;let u=$t.ramp;return du(t,e,u.x0,u.z0,u.x1,u.z1).d<u.wid/2||Math.abs(o)<15&&a>0&&a<70}surfaceFriction(t,e){return this.isRunway(t,e)?1:.55}buildMesh(t){let e=this.N,n=new Float32Array(e*e*3),i=new Float32Array(e*e);for(let u=0;u<e;u++)for(let d=0;d<e;d++){let f=u*e+d;n[f*3]=this.xs[d],n[f*3+1]=this.heights[f],n[f*3+2]=this.zs[u]}let r=new me;r.setAttribute("position",new be(n,3));let o=new Uint32Array((e-1)*(e-1)*6),a=0;for(let u=0;u<e-1;u++)for(let d=0;d<e-1;d++){let f=u*e+d,p=(u+1)*e+d,v=(u+1)*e+d+1,g=u*e+d+1;o[a++]=f,o[a++]=p,o[a++]=g,o[a++]=p,o[a++]=v,o[a++]=g}r.setIndex(new be(o,1)),r.computeVertexNormals();let l=r.attributes.normal.array;for(let u=0;u<e*e;u++)i[u]=this.hf.forest(n[u*3],n[u*3+2],n[u*3+1],1-l[u*3+1]);this.forestGrid=i,r.setAttribute("aForest",new be(i,1)),r.computeBoundingSphere();let c=Mv(t),h=new $(r,c);return h.receiveShadow=!0,h.name="terrain",this.mesh=h,this.material=c,h}forestAt(t,e){let n=this.N,i=cc(this.xs,t),r=cc(this.zs,e);return this.forestGrid?this.forestGrid[r*n+i]:0}},hc=null;function yv(){if(hc)return hc;let s=512,t=ri(s,8,6,31,.55),e=ri(s,32,3,37,.5),n=zf(s,900,41),i=new Float32Array(s*s);for(let a=0;a<i.length;a++)i[a]=Math.sqrt(Math.max(0,1-n[a]*1.05))*(.7+.6*e[a]);let r=vi(s,[t,e,i,1]),o=uu(i,s,5);return hc={noiseTex:r,crownNormal:o},hc}function Mv(s){let{noiseTex:t,crownNormal:e}=yv(),n=new we({color:16777215,roughness:.95,metalness:0}),i={tNoise:{value:t},tCrown:{value:e},tBurn:{value:s?s.texture:null},burnRects:{value:s?s.rects:[new xe,new xe,new xe,new xe]},uTime:{value:0}};return n.userData.uniforms=i,n.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute float aForest;
        varying float vForest;
        varying vec3 vWPos;
        varying vec3 vWN;`).replace("#include <project_vertex>",`#include <project_vertex>
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWN = normalize(mat3(modelMatrix) * objectNormal);
        vForest = aForest;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D tNoise;
        uniform sampler2D tCrown;
        uniform sampler2D tBurn;
        uniform vec4 burnRects[4];
        uniform float uTime;
        varying float vForest;
        varying vec3 vWPos;
        varying vec3 vWN;
        vec4 burnSample(vec2 p) {
          vec4 r = vec4(0.0);
          for (int i = 0; i < 4; i++) {
            vec4 R = burnRects[i];
            if (R.z <= 0.0) continue;
            vec2 uv = (p - R.xy) / R.z;
            if (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) {
              vec2 cell = vec2(mod(R.w, 2.0), floor(R.w / 2.0));
              r = max(r, texture2D(tBurn, (cell + uv) * 0.5));
            }
          }
          return r;
        }
        float tFor = 0.0;
        vec4 tBurnV = vec4(0.0);`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 p = vWPos.xz;
          float h = vWPos.y;
          vec3 N = normalize(vWN);
          float slope = 1.0 - N.y;
          vec4 nA = texture2D(tNoise, p / 61.0);
          vec4 nB = texture2D(tNoise, p / 437.0 + 0.31);
          vec4 nC = texture2D(tNoise, p / 2900.0 + 0.77);
          float macro = nC.r;
          vec3 dryGrass = mix(vec3(0.19, 0.155, 0.06), vec3(0.15, 0.135, 0.05), nB.r);
          vec3 greenGrass = mix(vec3(0.085, 0.13, 0.035), vec3(0.14, 0.16, 0.05), nA.r);
          vec3 grass = mix(greenGrass, dryGrass, smoothstep(0.35, 0.75, macro + nB.g * 0.3));
          grass *= 0.8 + 0.4 * nA.g;
          vec3 rock = mix(vec3(0.17, 0.15, 0.13), vec3(0.28, 0.26, 0.23), nA.r) * (0.75 + 0.5 * nB.g);
          vec3 sand = mix(vec3(0.42, 0.36, 0.22), vec3(0.52, 0.45, 0.28), nA.g);
          vec3 wetSand = vec3(0.16, 0.13, 0.08);
          vec3 lakebed = mix(vec3(0.09, 0.085, 0.05), vec3(0.15, 0.13, 0.08), nA.r);
          // chiome del bosco
          float crown = texture2D(tNoise, p / 23.0).b;
          float crown2 = texture2D(tNoise, p / 9.0 + 0.5).b;
          vec3 canopyDark = vec3(0.016, 0.034, 0.011);
          vec3 canopyLight = mix(vec3(0.05, 0.085, 0.022), vec3(0.075, 0.09, 0.03), nB.r);
          vec3 canopy = mix(canopyDark, canopyLight, crown * 0.75 + crown2 * 0.35);
          canopy *= 0.75 + 0.5 * macro;
          tFor = smoothstep(0.25, 0.55, vForest + (nB.g - 0.5) * 0.35);
          vec3 col = mix(grass, canopy, tFor);
          col = mix(col, rock, smoothstep(0.42, 0.62, slope + (nA.r - 0.5) * 0.25) * (1.0 - tFor * 0.6));
          // spiagge e fondale
          float beach = 1.0 - smoothstep(1.8, 4.5 + nA.r * 2.0, h);
          col = mix(col, sand, beach * (1.0 - smoothstep(0.35, 0.6, slope)));
          col = mix(col, wetSand, 1.0 - smoothstep(-0.2, 0.8, h));
          col = mix(col, lakebed, 1.0 - smoothstep(-2.5, -0.3, h));
          // bruciato / bagnato
          tBurnV = burnSample(p);
          vec3 ash = mix(vec3(0.018, 0.016, 0.014), vec3(0.05, 0.047, 0.043), nA.g);
          col = mix(col, ash, smoothstep(0.05, 0.6, tBurnV.r));
          col *= 1.0 - 0.35 * tBurnV.b;
          // ritardante/schiuma lasciata a terra
          col = mix(col, vec3(0.45, 0.45, 0.43), tBurnV.a * 0.5);
          diffuseColor.rgb = col;
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(0.97, 0.75, 1.0 - smoothstep(-0.2, 0.6, vWPos.y));
        roughnessFactor = mix(roughnessFactor, 0.6, tBurnV.b * 0.5);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          float camD = length(vWPos - cameraPosition);
          float fade = 1.0 - smoothstep(1500.0, 5000.0, camD);
          vec3 cn = texture2D(tCrown, vWPos.xz / 23.0).xyz * 2.0 - 1.0;
          vec3 cn2 = texture2D(tCrown, vWPos.xz / 9.0 + 0.5).xyz * 2.0 - 1.0;
          vec3 bump = vec3(cn.x + cn2.x * 0.5, 0.0, cn.y + cn2.y * 0.5) * tFor * 0.9 * fade * (1.0 - tBurnV.r);
          normal = normalize(normal + (viewMatrix * vec4(bump, 0.0)).xyz);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float flick = 0.6 + 0.4 * sin(uTime * 7.0 + vWPos.x * 0.3) * sin(uTime * 5.3 + vWPos.z * 0.27);
          totalEmissiveRadiance += vec3(1.0, 0.38, 0.06) * tBurnV.g * tBurnV.g * 1.2 * flick;
        }`)},n}function Gf(s){let t=new re;t.name="airfield";let e=$t.runway,n=(Math.atan2(Ee.x,-Ee.z)*180/Math.PI+360)%360,i=Math.round(n/10)%36||36,r=(i+17)%36+1,o=16,a=e.wid*o,l=4096,c=es(a,l),h=c.getContext("2d");h.fillStyle="#3a3a3c",h.fillRect(0,0,a,l);let u=En(77);for(let G=0;G<26e3;G++){let ft=40+u()*30;h.fillStyle=`rgba(${ft},${ft},${ft+2},${.25+u()*.3})`,h.fillRect(u()*a,u()*l,1+u()*3,1+u()*3)}for(let G=0;G<2;G++)for(let ft=0;ft<260;ft++){let ct=G===0?300+u()*900:l-300-u()*900,Ct=a/2+(u()-.5)*8*o;h.fillStyle=`rgba(15,15,15,${.08+u()*.12})`,h.fillRect(Ct,ct,2+u()*4,60+u()*200)}let d=l/e.len;h.fillStyle="#e8e8e2",h.fillRect(.5*o,0,.9*o,l),h.fillRect(a-1.4*o,0,.9*o,l);for(let G=70;G<e.len-70;G+=50)G>110&&G<e.len-110&&h.fillRect(a/2-.45*o,G*d,.9*o,30*d);let f=(G,ft)=>{h.save(),G&&(h.translate(a,l),h.rotate(Math.PI));for(let ct=0;ct<12;ct++){let Ct=2.5*o+ct*2.1*o+(ct>=6?3.2*o:0);h.fillRect(Ct,6*d,1.5*o,30*d)}h.font=`bold ${Math.round(9*d)}px Arial`,h.textAlign="center",h.textBaseline="middle",h.save(),h.translate(a/2,62*d),h.rotate(Math.PI),h.scale(1.6,2.4),h.fillText(String(ft).padStart(2,"0"),0,0),h.restore();for(let ct of[150,300,450])h.fillRect(a/2-9*o,ct*d,1.8*o,22*d),h.fillRect(a/2+7.2*o,ct*d,1.8*o,22*d);h.fillRect(a/2-10*o,300*d,4*o,45*d),h.fillRect(a/2+6*o,300*d,4*o,45*d),h.restore()};f(!1,r),f(!0,i);let p=Mr(c,{srgb:!0,aniso:16}),v=new ke(e.wid,e.len,1,64);v.rotateX(-Math.PI/2);let g=new we({map:p,roughness:.88,metalness:0}),m=new $(v,g);m.receiveShadow=!0,m.position.set(e.cx,e.elev+.07,e.cz),m.rotation.y=Math.atan2(-Ee.x,-Ee.z),t.add(m);let S=es(512,512),_=S.getContext("2d");_.fillStyle="#8d8c86",_.fillRect(0,0,512,512);for(let G=0;G<9e3;G++){let ft=120+u()*40;_.fillStyle=`rgba(${ft},${ft},${ft-4},0.35)`,_.fillRect(u()*512,u()*512,2,2)}_.strokeStyle="rgba(60,60,58,0.7)",_.lineWidth=2;for(let G=0;G<=512;G+=64)_.beginPath(),_.moveTo(G,0),_.lineTo(G,512),_.stroke(),_.beginPath(),_.moveTo(0,G),_.lineTo(512,G),_.stroke();let x=Mr(S,{srgb:!0,repeat:!0});x.repeat.set($t.apron.len/40,$t.apron.wid/40);let M=new we({map:x,roughness:.92}),b=$t.apron,w=new ke(b.len,b.wid);w.rotateX(-Math.PI/2);let y=new $(w,M);y.position.set(b.cx,e.elev+.06,b.cz),y.rotation.y=m.rotation.y+Math.PI/2,y.receiveShadow=!0,t.add(y);let T=new ke(22,72);T.rotateX(-Math.PI/2);let R=new $(T,M.clone());R.material.map=x.clone(),R.material.map.repeat.set(.6,2),R.position.set(e.cx+ve.x*52,e.elev+.055,e.cz+ve.z*52),R.rotation.y=m.rotation.y+Math.PI/2,R.receiveShadow=!0,t.add(R);let E=$t.ramp,C=Math.hypot(E.x1-E.x0,E.z1-E.z0),L=90,P=new ke(E.wid,C,1,L);P.rotateX(-Math.PI/2);let F=P.attributes.position,U=Math.atan2(ve.x,ve.z),O=Math.cos(U),X=Math.sin(U);for(let G=0;G<F.count;G++){let ft=F.getX(G),Ct=.5-F.getZ(G)/C,Bt=E.x0+(E.x1-E.x0)*Ct+ft*ve.z,Qt=E.z0+(E.z1-E.z0)*Ct-ft*ve.x;F.setXYZ(G,Bt,s.heightAt(Bt,Qt)+.08,Qt)}P.computeVertexNormals();let H=M.clone();H.map=x.clone(),H.map.repeat.set(1,C/30);let W=new $(P,H);return W.receiveShadow=!0,t.add(W),Sv(t,s,m.rotation.y),t}function Sv(s,t,e){let n=$t.runway,i=(M,b,w)=>{let y=n.cx+Ee.x*b+ve.x*w,T=n.cz+Ee.z*b+ve.z*w;return M.position.set(y,n.elev,T),M.rotation.y=e,s.add(M),M},r=new we({color:14209732,roughness:.85}),o=new we({color:8007458,roughness:.7}),a=new we({color:11186357,roughness:.45,metalness:.6}),l=new we({color:2764080,roughness:.6}),c=new we({color:11541782,roughness:.5}),h=new we({color:2240576,roughness:.1,metalness:.8});for(let M=0;M<2;M++){let b=new re,w=new _e(18,18,40,28,1,!0,-Math.PI/2,Math.PI);w.rotateZ(Math.PI/2),w.scale(1,.62,1);let y=new $(w,a);y.rotation.y=Math.PI/2,y.castShadow=!0,y.receiveShadow=!0,b.add(y);let T=new $(new fn(18,28,0,Math.PI),r);T.scale.y=.62,T.position.z=20,T.rotation.y=Math.PI,b.add(T);let R=new $(new ke(30,10),l);R.position.set(0,5,-20),R.rotation.y=Math.PI,b.add(R),i(b,-125+M*46,205).rotation.y=e+Math.PI/2}let u=new re,d=new $(new ie(6,14,6),r);d.position.y=7,d.castShadow=!0,u.add(d);let f=new $(new _e(4.6,4,3.4,8),h);f.position.y=15.7,u.add(f);let p=new $(new _e(5.2,5.2,.6,8),l);p.position.y=17.7,u.add(p),i(u,55,200);let v=new re,g=new $(new ie(36,7,16),r);g.position.y=3.5,g.castShadow=!0,v.add(g);let m=new $(new ie(37,.6,17),o);m.position.y=7.3,v.add(m);for(let M=0;M<4;M++){let b=new $(new ke(6,5),c);b.position.set(-12+M*8,2.6,-8.05),b.rotation.y=Math.PI,v.add(b)}i(v,120,190);for(let M=0;M<2;M++){let b=new $(new _e(4,4,7,20),new we({color:14737628,roughness:.5}));b.position.y=3.5,b.castShadow=!0;let w=new re;w.add(b),i(w,170+M*11,215)}let S=new re,_=new $(new _e(.08,.1,6,6),a);_.position.y=3,S.add(_);let x=new $(new fs(.45,3.2,12,1,!0),new we({color:16734746,roughness:.8,side:je}));x.rotation.z=Math.PI/2,x.position.set(1.7,5.8,0),S.add(x),S.userData.sock=x,i(S,-n.len/2+250,-45),s.userData.windsock=S}var Dn=400;function zo(s,t){let e=s.attributes.position,n=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){let r=t(e.getX(i),e.getY(i),e.getZ(i),i);n[i*3]=r[0],n[i*3+1]=r[1],n[i*3+2]=r[2]}return s.setAttribute("color",new be(n,3)),s}function gu(s){let t=s.map(l=>l.index?l.toNonIndexed():l),e=0;t.forEach(l=>e+=l.attributes.position.count);let n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e*3),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),i.set(l.attributes.normal.array,o*3),r.set(l.attributes.color.array,o*3),o+=l.attributes.position.count;let a=new me;return a.setAttribute("position",new be(n,3)),a.setAttribute("normal",new be(i,3)),a.setAttribute("color",new be(r,3)),a.computeBoundingSphere(),a}function dc(s,t,e){let n=En(e),i=s.attributes.position,r=new Map;for(let o=0;o<i.count;o++){let a=`${i.getX(o).toFixed(3)},${i.getY(o).toFixed(3)},${i.getZ(o).toFixed(3)}`,l=r.get(a);l||(l=[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t],r.set(a,l)),i.setXYZ(o,i.getX(o)+l[0],i.getY(o)+l[1],i.getZ(o)+l[2])}return s.computeVertexNormals(),s}var bv=[.11,.07,.04];function xu(s,t,e){let n=new _e(e,t,s,5,1,!0);return n.translate(0,s/2,0),zo(n,()=>bv)}function fc(s,t=.25){return(e,n,i,r)=>{let o=.75+t*Math.sin(r*12.9898)*.5+.25*Q(n/10,0,1);return[s[0]*o,s[1]*o,s[2]*o]}}function wv(){let s=xu(7.2,.32,.2),t=new In(1,8,5);t.scale(4.4,1.55,4),t.translate(.3,8,0),dc(t,.9,3),zo(t,fc([.035,.065,.02]));let e=new In(1,7,4);return e.scale(2.6,1.1,2.4),e.translate(-1.9,7.3,1.1),dc(e,.6,4),zo(e,fc([.03,.06,.018])),gu([s,t,e])}function Ev(){let t=[xu(3,.25,.18)];return[[2.5,4.6,2.2],[2,4,5],[1.35,3.4,7.6],[.7,2.6,9.8]].forEach(([n,i,r],o)=>{let a=new fs(n,i,7,1,!0);a.translate(0,r,0),dc(a,.35,10+o),zo(a,fc([.022,.05,.022],.35)),t.push(a)}),gu(t)}function Tv(){let t=[xu(3.6,.3,.22)];return[[0,5.2,0,2.9],[1.6,4.6,.9,2.1],[-1.4,4.4,-.8,2.2],[.3,6.4,-.6,1.9]].forEach(([n,i,r,o],a)=>{let l=new po(o,1);l.translate(n,i,r),dc(l,.7,20+a),zo(l,fc([.04,.06,.02],.35)),t.push(l)}),gu(t)}var pc=class{constructor(t,e,{quality:n="medium"}={}){this.terrain=t,this.radius=n==="low"?800:n==="high"?2200:1500,this.maxPerType=n==="low"?9e3:n==="high"?45e3:26e3,this.chunks=new Map,this.noise=ts(99),this.time={value:0},this.burnFn=null;let i=[wv(),Ev(),Tv()];this.meshes=i.map((r,o)=>{let a=new xo({vertexColors:!0});a.onBeforeCompile=c=>{c.uniforms.uTime=this.time,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
            #ifdef USE_INSTANCING
              vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
              float sway = sin(uTime * 1.3 + ip.x * 0.05 + ip.z * 0.04) * 0.5 + sin(uTime * 2.7 + ip.x * 0.11) * 0.25;
              float hh = max(position.y - 2.5, 0.0) / 9.0;
              transformed.x += sway * hh * hh * 0.35;
              transformed.z += sway * hh * hh * 0.2;
            #endif`)};let l=new jr(r,a,this.maxPerType);return l.count=0,l.frustumCulled=!1,l.instanceMatrix.setUsage(qn),l.setColorAt(0,new It(1,1,1)),l.instanceColor.setUsage(qn),l.name="trees"+o,e.add(l),l}),this.lastCenter=new D(1e9,0,1e9),this.visible=[[],[],[]],this._m=new ye,this._q=new nn,this._s=new D,this._p=new D,this._c=new It,this._pending=[]}_genChunk(t,e){let n=t+","+e,i=this.chunks.get(n);if(i)return i;let r=En(t*73856093^e*19349663),o=[],a=9.5,l=t*Dn,c=e*Dn,h=this.terrain;for(let u=0;u<Dn;u+=a)for(let d=0;d<Dn;d+=a){let f=l+d+(r()-.5)*a*.9,p=c+u+(r()-.5)*a*.9,v=h.forestAt(f,p);if(v<=.02)continue;let g=Q(v*1.25+.25*this.noise(f/60,p/60),0,1);if(r()>g)continue;let m=h.heightAt(f,p);if(m<2.5)continue;let S=this.noise(f/700+5,p/700),_=0,x=r();m>350||S>.35?_=x<.7?1:2:S<-.25?_=x<.75?2:0:_=x<.6?0:x<.8?2:1;let M=.7+r()*.65;o.push({x:f,y:m-.2,z:p,type:_,s:M,rot:r()*Math.PI*2,tint:.8+r()*.45,hue:r(),rank:r()})}return i={list:o},this.chunks.set(n,i),i}update(t,e,n=!1){this.time.value+=e;let i=t.x-this.lastCenter.x,r=t.z-this.lastCenter.z,o=Q(1+(t.y-300)/1500,1,2.2);if(!n&&i*i+r*r<19600&&Math.abs(o-(this._altF||1))<.2)return;this._altF=o,this.lastCenter.copy(t);let a=this.radius*o,l=Math.floor((t.x-a)/Dn),c=Math.floor((t.x+a)/Dn),h=Math.floor((t.z-a)/Dn),u=Math.floor((t.z+a)/Dn),d=[0,0,0],f=[[],[],[]],p=$t.half-200;for(let v=h;v<=u;v++)for(let g=l;g<=c;g++){if(Math.abs(g*Dn)>p||Math.abs(v*Dn)>p)continue;let m=(g+.5)*Dn-t.x,S=(v+.5)*Dn-t.z;if(m*m+S*S>(a+Dn)*(a+Dn))continue;let _=this._genChunk(g,v);for(let x of _.list){let M=Math.hypot(x.x-t.x,x.z-t.z);if(M>a)continue;let b=M<a*.3?1:1-(M-a*.3)/(a*.7)*.8;x.rank>b||f[x.type].push(x)}}for(let v=0;v<3;v++){let g=f[v];g.length>this.maxPerType&&(g.sort((S,_)=>(S.x-t.x)**2+(S.z-t.z)**2-((_.x-t.x)**2+(_.z-t.z)**2)),g=g.slice(0,this.maxPerType)),this.visible[v]=g;let m=this.meshes[v];for(let S=0;S<g.length;S++){let _=g[S];this._q.setFromAxisAngle(Ze.DEFAULT_UP,_.rot),this._s.set(_.s,_.s*(.9+_.hue*.25),_.s),this._p.set(_.x,_.y,_.z),this._m.compose(this._p,this._q,this._s),m.setMatrixAt(S,this._m)}m.count=g.length,m.instanceMatrix.needsUpdate=!0,d[v]=g.length}this.refreshColors(),this.counts=d}refreshColors(){for(let t=0;t<3;t++){let e=this.visible[t],n=this.meshes[t];for(let i=0;i<e.length;i++){let r=e[i],o=this.burnFn?this.burnFn(r.x,r.z):0,a=r.tint*(1-o*.93);this._c.setRGB(a*(.9+.2*r.hue),a,a*(.85+.2*(1-r.hue))),n.setColorAt(i,this._c)}n.instanceColor&&(n.instanceColor.needsUpdate=!0)}}};var ko=class s extends ${constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,i=e.color!==void 0?new It(e.color):new It(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||s.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Un,u=new D,d=new D,f=new D,p=new ye,v=new D(0,0,-1),g=new xe,m=new D,S=new D,_=new xe,x=new ye,M=new Sn(r,o,{samples:c,type:zn}),b=new Xe({name:l.name!==void 0?l.name:"unspecified",uniforms:pr.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=M.texture,b.uniforms.color.value=i,b.uniforms.textureMatrix.value=x,this.material=b,this.onBeforeRender=function(w,y,T){let R=this.getReflectionCamera(T);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(T.matrixWorld),p.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),m.subVectors(d,f),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(d),p.extractRotation(T.matrixWorld),v.set(0,0,-1),v.applyMatrix4(p),v.add(f),S.subVectors(d,v),S.reflect(u).negate(),S.add(d),R.position.copy(m),R.up.set(0,1,0),R.up.applyMatrix4(p),R.up.reflect(u),R.lookAt(S),R.far=T.far,R.updateMatrixWorld(),R.projectionMatrix.copy(T.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(R.projectionMatrix),x.multiply(R.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let C=R.projectionMatrix;R.isOrthographicCamera?(_.x=(Math.sign(g.x)+C.elements[8])/C.elements[0],_.y=(Math.sign(g.y)+C.elements[9])/C.elements[5],_.z=-T.far,_.w=1):(_.x=(Math.sign(g.x)+C.elements[8])/C.elements[0],_.y=(Math.sign(g.y)+C.elements[9])/C.elements[5],_.z=-1,_.w=(1+C.elements[10])/C.elements[14]),g.multiplyScalar(2/g.dot(_)),C.elements[2]=g.x,C.elements[6]=g.y,R.isOrthographicCamera?(C.elements[10]=g.z-a,C.elements[14]=g.w-1):(C.elements[10]=g.z+1-a,C.elements[14]=g.w),n.visible=!1;let L=w.getRenderTarget(),P=w.xr.enabled,F=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(M),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(y,R),w.xr.enabled=P,w.shadowMap.autoUpdate=F,w.setRenderTarget(L);let U=T.viewport;U!==void 0&&w.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()},this.getReflectionCamera=function(w){let y=this._reflectionCameras.get(w);return y===void 0&&(y=w.clone(),this._reflectionCameras.set(w,y)),y}}};ko.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var _u=class{constructor(){this.amp=.09,this.waves=[{kx:.52,kz:.21,a:.45,w:2.2,p:0},{kx:.31,kz:-.44,a:.3,w:1.7,p:1.3},{kx:.95,kz:.6,a:.15,w:3,p:2.1},{kx:-.2,kz:.83,a:.1,w:2.8,p:.6}]}height(t,e,n){let i=0;for(let r of this.waves)i+=r.a*Math.sin(r.kx*t+r.kz*e-r.w*n+r.p);return i*this.amp}},mc=class{constructor({terrain:t,sunDir:e,quality:n="medium",renderer:i}){this.waves=new _u;let r=$t.lake,o=2*(r.a+900),a=new ke(o,o,1,1),l=n==="low"?.35:n==="high"?.75:.5,c=Math.round(window.innerWidth*l*Math.min(window.devicePixelRatio,1.5)),h=Math.round(window.innerHeight*l*Math.min(window.devicePixelRatio,1.5)),u=512,d=new Float32Array(u*u),f=r.cx-o/2,p=r.cz-o/2;for(let x=0;x<u;x++)for(let M=0;M<u;M++){let b=f+(M+.5)/u*o,w=p+(x+.5)/u*o,y=t.heightAt(b,w);d[x*u+M]=Math.max(0,Math.min(1,-y/25))}let v=vi(u,[d,0,0,1],{repeat:!1});v.flipY=!1,v.needsUpdate=!0;let g=ri(256,16,4,91,.6),m=vi(256,[g,g,g,1]);this.normalTex=kf(512,7);let S={name:"LakeWater",uniforms:{color:{value:new It},tDiffuse:{value:null},textureMatrix:{value:null},tNormal:{value:this.normalTex},tDepth:{value:v},tFoam:{value:m},depthRect:{value:new xe(f,p,1/o,1/o)},uTime:{value:0},sunDir:{value:e.clone()},sunColor:{value:new It(1,.93,.82).multiplyScalar(3.2)},skyColor:{value:new It(.32,.45,.6)},deepColor:{value:new It(.006,.03,.035)},shallowColor:{value:new It(.06,.13,.11)},windDir:{value:new dt(.86,.5)},fogColor:{value:new It(.6,.68,.75)},fogDensity:{value:5e-5},reflStrength:{value:1}},vertexShader:`
        uniform mat4 textureMatrix;
        varying vec4 vUvRefl;
        varying vec3 vWorldPos;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vUvRefl = textureMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tNormal;
        uniform sampler2D tDepth;
        uniform sampler2D tFoam;
        uniform vec4 depthRect;
        uniform float uTime;
        uniform vec3 sunDir;
        uniform vec3 sunColor;
        uniform vec3 skyColor;
        uniform vec3 deepColor;
        uniform vec3 shallowColor;
        uniform vec2 windDir;
        uniform vec3 fogColor;
        uniform float fogDensity;
        uniform float reflStrength;
        varying vec4 vUvRefl;
        varying vec3 vWorldPos;
        #include <common>
        #include <logdepthbuf_pars_fragment>

        vec3 nrm(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }

        void main() {
          #include <logdepthbuf_fragment>
          vec2 p = vWorldPos.xz;
          vec3 toEye = cameraPosition - vWorldPos;
          float dist = length(toEye);
          vec3 V = toEye / dist;
          vec2 w = normalize(windDir);
          vec2 wp = vec2(-w.y, w.x);
          vec3 n1 = nrm(p / 31.0 + w * uTime * 0.012);
          vec3 n2 = nrm(p / 9.7 + wp * uTime * 0.021 + 0.37);
          vec3 n3 = nrm(p / 3.3 + w * uTime * 0.045 + 0.71);
          vec3 n4 = nrm(p / 1.9 - wp * uTime * 0.06);
          vec3 n5 = nrm(p / 140.0 + w * uTime * 0.004);
          float far = 1.0 / (1.0 + dist / 450.0);
          vec2 slope = n1.xy * 0.55 + n2.xy * 0.45 + n5.xy * 0.5 + (n3.xy * 0.35 + n4.xy * 0.2) * far;
          slope *= mix(0.35, 1.0, far);
          vec3 N = normalize(vec3(slope.x * 0.55, 1.0, slope.y * 0.55));

          // profondit\xE0
          vec2 duv = (p - depthRect.xy) * depthRect.zw;
          float depth = texture2D(tDepth, duv).r * 25.0;

          // riflesso planare distorto
          vec4 ruv = vUvRefl;
          ruv.xy += N.xz * (1.5 + 7.0 * far) * ruv.w * 0.01;
          vec3 refl = texture2DProj(tDiffuse, ruv).rgb;

          float NdV = max(dot(N, V), 0.0);
          float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
          F = mix(F, 1.0, smoothstep(2500.0, 9000.0, dist) * 0.35);

          // colore del corpo d'acqua (diffusione sotto superficie verso il sole)
          float shallow = exp(-depth * 0.35);
          vec3 body = mix(deepColor, shallowColor, shallow);
          float sss = pow(max(dot(V, -sunDir) * 0.5 + 0.5, 0.0), 3.0) * 0.6 + 0.4;
          body *= sss * (0.6 + 0.4 * max(sunDir.y, 0.0));
          body += skyColor * 0.025;

          vec3 col = mix(body, refl * reflStrength, F);

          // riflesso speculare del sole
          vec3 H = normalize(sunDir + V);
          float spec = pow(max(dot(N, H), 0.0), 700.0) * 5.0 + pow(max(dot(N, H), 0.0), 80.0) * 0.1;
          col += sunColor * spec * (0.3 + 0.7 * F);

          // schiuma della riva
          float fnz = texture2D(tFoam, p / 7.0 + uTime * 0.02).r;
          float shore = 1.0 - smoothstep(0.0, 0.55 + fnz * 0.5, depth);
          float wave = 0.5 + 0.5 * sin(depth * 9.0 - uTime * 1.6 + fnz * 4.0);
          float foam = shore * smoothstep(0.35, 0.8, fnz * 0.7 + wave * 0.5) * (1.0 - smoothstep(700.0, 2500.0, dist));
          col = mix(col, vec3(0.75, 0.77, 0.76), foam * 0.75);

          // trasparenza nei bassi fondali: si vede il fondale
          float alpha = mix(1.0, 0.45 + 0.55 * F, exp(-depth * 0.9));
          alpha = max(alpha, foam);

          // nebbia (esponenziale quadratica come la scena)
          float fogF = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
          col = mix(col, fogColor, fogF);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`},_=new ko(a,{textureWidth:c,textureHeight:h,clipBias:.02,shader:S,multisample:n==="high"?4:0});_.rotation.x=-Math.PI/2,_.position.set(r.cx,0,r.cz),_.material.transparent=!0,_.material.depthWrite=!0,_.renderOrder=1,_.name="water",this.mesh=_,this.uniforms=_.material.uniforms}heightAt(t,e,n){return this.waves.height(t,e,n)}update(t,e,n){let i=this.uniforms;i.uTime.value=e,n&&(i.sunDir.value.copy(n.sunDir),i.fogColor.value.copy(n.fogColor),i.fogDensity.value=n.fogDensity,i.skyColor.value.copy(n.skyColor))}setSize(t,e,n){let i=n==="low"?.35:n==="high"?.75:.5,r=Math.min(window.devicePixelRatio,1.5);this.mesh.getRenderTarget().setSize(Math.round(t*i*r),Math.round(e*i*r))}};var Av=(()=>{let s=new wo;return s.setAttribute("position",new Kt([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),s.setAttribute("uv",new Kt([0,0,1,0,1,1,0,1],2)),s.setIndex([0,1,2,0,2,3]),s})(),yi=class{constructor({max:t=2e3,texture:e,blending:n="normal",lit:i=0,sort:r=!1,stretch:o=0,renderOrder:a=5,name:l="particles",depthTest:c=!0,fog:h=!0,emissive:u=0,growth:d=.5}){this.growth=d,this.max=t,this.n=0,this.sort=r;let f=(g=1)=>new Float32Array(t*g);this.p=f(3),this.v=f(3),this.age=f(),this.life=f(),this.s0=f(),this.s1=f(),this.a0=f(),this.col=f(3),this.rot=f(),this.rotV=f(),this.drag=f(),this.grav=f(),this.fadeIn=f(),this.user=f(),this.user2=f();let p=Av.clone();this.aPos=new Di(new Float32Array(t*3),3).setUsage(qn),this.aCol=new Di(new Float32Array(t*4),4).setUsage(qn),this.aExt=new Di(new Float32Array(t*4),4).setUsage(qn),p.setAttribute("iPos",this.aPos),p.setAttribute("iCol",this.aCol),p.setAttribute("iExt",this.aExt),p.instanceCount=0,this.geometry=p,this.uniforms={map:{value:e},sunDirView:{value:new D(0,1,0)},sunColor:{value:new It(1,.96,.9)},ambColor:{value:new It(.55,.62,.72)},lit:{value:i},stretch:{value:o},emissive:{value:u},fogColor:{value:new It},fogDensity:{value:0}};let v=new Xe({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:je,depthTest:c,blending:n==="additive"?ys:Ji,vertexShader:`
        attribute vec3 iPos;
        attribute vec4 iCol;
        attribute vec4 iExt;
        uniform float stretch;
        varying vec2 vUv;
        varying vec4 vCol;
        varying float vFogDepth;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vUv = uv;
          vCol = iCol;
          vec4 mv = viewMatrix * vec4(iPos, 1.0);
          float c = cos(iExt.y), s = sin(iExt.y);
          vec2 q = position.xy * iExt.x;
          vec2 d = iExt.zw;
          float dl = length(d);
          if (stretch > 0.0 && dl > 0.001) {
            vec2 dir = d / dl;
            vec2 perp = vec2(dir.y, -dir.x); // base destrorsa: il quadrato non viene specchiato
            float k = 1.0 + stretch * dl;
            q = dir * (position.y * iExt.x * k) + perp * (position.x * iExt.x);
          } else {
            q = vec2(c * q.x - s * q.y, s * q.x + c * q.y);
          }
          mv.xy += q;
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform sampler2D map;
        uniform vec3 sunDirView;
        uniform vec3 sunColor;
        uniform vec3 ambColor;
        uniform float lit;
        uniform float emissive;
        uniform vec3 fogColor;
        uniform float fogDensity;
        varying vec2 vUv;
        varying vec4 vCol;
        varying float vFogDepth;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        void main() {
          #include <logdepthbuf_fragment>
          vec4 t = texture2D(map, vUv);
          float a = t.a * vCol.a;
          if (a < 0.003) discard;
          vec3 col = vCol.rgb * t.rgb;
          if (lit > 0.0) {
            vec2 c = vUv * 2.0 - 1.0;
            vec3 n = normalize(vec3(c, sqrt(max(0.0, 1.0 - dot(c, c))) + 0.35));
            float d = max(dot(n, sunDirView), 0.0);
            float back = pow(max(-sunDirView.z, 0.0), 2.0) * (1.0 - t.a) * 0.6; // luce che attraversa i bordi
            vec3 light = ambColor + sunColor * (d * 0.8 + back + 0.15);
            col = mix(col, col * light, lit);
          }
          col += vCol.rgb * emissive;
          float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
          col = mix(col, fogColor, fogF * (emissive > 0.0 ? 0.6 : 1.0));
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.material=v,this.mesh=new $(p,v),this.mesh.frustumCulled=!1,this.mesh.renderOrder=a,this.mesh.name=l,this._order=new Uint32Array(t),this._depth=new Float32Array(t),this._v=new D}spawn(t,e,n,i,r,o,{life:a=2,size0:l=1,size1:c=2,alpha:h=1,r:u=1,g:d=1,b:f=1,rot:p=Math.random()*6.28,rotV:v=0,drag:g=.5,grav:m=0,fadeIn:S=.1,user:_=0,user2:x=0}={}){if(this.n>=this.max)return-1;let M=this.n++;return this.p[M*3]=t,this.p[M*3+1]=e,this.p[M*3+2]=n,this.v[M*3]=i,this.v[M*3+1]=r,this.v[M*3+2]=o,this.age[M]=0,this.life[M]=a,this.s0[M]=l,this.s1[M]=c,this.a0[M]=h,this.col[M*3]=u,this.col[M*3+1]=d,this.col[M*3+2]=f,this.rot[M]=p,this.rotV[M]=v,this.drag[M]=g,this.grav[M]=m,this.fadeIn[M]=S,this.user[M]=_,this.user2[M]=x,M}kill(t){let e=--this.n;if(t===e)return;let n=i=>{i[t*3]=i[e*3],i[t*3+1]=i[e*3+1],i[t*3+2]=i[e*3+2]};n(this.p),n(this.v),n(this.col),this.age[t]=this.age[e],this.life[t]=this.life[e],this.s0[t]=this.s0[e],this.s1[t]=this.s1[e],this.a0[t]=this.a0[e],this.rot[t]=this.rot[e],this.rotV[t]=this.rotV[e],this.drag[t]=this.drag[e],this.grav[t]=this.grav[e],this.fadeIn[t]=this.fadeIn[e],this.user[t]=this.user[e],this.user2[t]=this.user2[e]}simulate(t,e,n,i){let r=this.p,o=this.v,a=e?e.x:0,l=e?e.y:0,c=e?e.z:0;for(let h=this.n-1;h>=0;h--){if(this.age[h]+=t,this.age[h]>=this.life[h]){this.kill(h);continue}let u=Math.min(1,this.drag[h]*t);if(o[h*3]+=(a-o[h*3])*u,o[h*3+1]+=(l-o[h*3+1])*u+this.grav[h]*t,o[h*3+2]+=(c-o[h*3+2])*u,r[h*3]+=o[h*3]*t,r[h*3+1]+=o[h*3+1]*t,r[h*3+2]+=o[h*3+2]*t,this.rot[h]+=this.rotV[h]*t,n){let d=n(r[h*3],r[h*3+2]);if(r[h*3+1]<d&&(!i||i(h,d))){this.kill(h);continue}}}}upload(t,e){let n=this.n,i=this.aPos.array,r=this.aCol.array,o=this.aExt.array,a=t.matrixWorldInverse.elements,l=null;if(this.sort&&n>1){l=this._order;let h=this._depth;for(let d=0;d<n;d++){let f=this.p[d*3],p=this.p[d*3+1],v=this.p[d*3+2];h[d]=a[2]*f+a[6]*p+a[10]*v+a[14],l[d]=d}l.subarray(0,n).sort((d,f)=>h[d]-h[f])}let c=this.uniforms.stretch.value>0;for(let h=0;h<n;h++){let u=l?l[h]:h,d=this.age[u]/this.life[u];i[h*3]=this.p[u*3],i[h*3+1]=this.p[u*3+1],i[h*3+2]=this.p[u*3+2];let f=this.a0[u],p=this.fadeIn[u];d<p&&(f*=d/p),f*=e?e(d,u):1-d*d,r[h*4]=this.col[u*3],r[h*4+1]=this.col[u*3+1],r[h*4+2]=this.col[u*3+2],r[h*4+3]=f;let v=this.s0[u]+(this.s1[u]-this.s0[u])*(this.growth===.5?Math.sqrt(d):Math.pow(d,this.growth));if(o[h*4]=v,o[h*4+1]=this.rot[u],c){let g=this.v[u*3],m=this.v[u*3+1],S=this.v[u*3+2],_=a[0]*g+a[4]*m+a[8]*S,x=a[1]*g+a[5]*m+a[9]*S;o[h*4+2]=_*.02,o[h*4+3]=x*.02}else o[h*4+2]=0,o[h*4+3]=0}this.geometry.instanceCount=n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aExt.needsUpdate=!0,this.aPos.clearUpdateRanges&&this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange&&(this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange(0,n*3),this.aCol.clearUpdateRanges(),this.aCol.addUpdateRange(0,n*4),this.aExt.clearUpdateRanges(),this.aExt.addUpdateRange(0,n*4))}setLighting(t,e,n,i,r){this._v.copy(t).transformDirection(e.matrixWorldInverse),this.uniforms.sunDirView.value.copy(this._v),n&&this.uniforms.sunColor.value.copy(n),i&&this.uniforms.ambColor.value.copy(i),r&&(this.uniforms.fogColor.value.copy(r.color),this.uniforms.fogDensity.value=r.density)}};var ne=96,Me=Math.random;function Rv(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128),i=ri(128,8,4,71,.55);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=(a+.5)/128*2-1,c=(o+.5)/128,h=.25+.6*Math.pow(c,.7),u=Math.max(0,1-Math.abs(l)/h);u*=Math.pow(c,.6)*(1-Math.pow(c,6)),u*=.6+.8*i[o*128+a],u=Math.min(1,u*1.4);let d=(o*128+a)*4,f=Math.pow(c,2)*(1-Math.abs(l));n.data[d]=255,n.data[d+1]=120+135*f,n.data[d+2]=40+160*f*f,n.data[d+3]=u*255}e.putImageData(n,0,0);let r=new dn(t);return r.colorSpace=Ne,r}var gc=class{constructor(t,e,n,{quality:i="medium"}={}){this.terrain=e,this.env=n;let r=i==="low"?.5:i==="high"?1.4:1;this.q=r,this.zones=$t.fireZones.map((o,a)=>{let l=o.size,c=l/ne,h=o.x-l/2,u=o.z-l/2,d=new Float32Array(ne*ne),f=new Float32Array(ne*ne),p=new Float32Array(ne*ne),v=new Float32Array(ne*ne),g=new Float32Array(ne*ne),m=new Float32Array(ne*ne);for(let S=0;S<ne;S++)for(let _=0;_<ne;_++){let x=h+(_+.5)*c,M=u+(S+.5)*c,b=e.forestAt(x,M),w=e.heightAt(x,M);m[S*ne+_]=w,d[S*ne+_]=w<1?0:Q(.25+.85*b,0,1)}return{...o,k:a,size:l,cell:c,x0:h,z0:u,fuel:d,heat:f,burnt:p,wet:v,foam:g,hgt:m,active:!1,burning:0,burntCells:0,state:"quiete",cx:o.x,cz:o.z,intensity:0,ignitedAt:-1}}),this.atlasData=new Uint8Array(2*ne*2*ne*4),this.atlas=new Li(this.atlasData,2*ne,2*ne,bn),this.atlas.magFilter=Ye,this.atlas.minFilter=Ye,this.atlas.needsUpdate=!0,this.rects=this.zones.map(o=>new xe(o.x0,o.z0,o.size,o.k)),this.fireAtlas={texture:this.atlas,rects:this.rects},this.flames=new yi({max:Math.round(3200*r),texture:Rv(),blending:"additive",name:"flames",renderOrder:8,emissive:0}),this.smoke=new yi({max:Math.round(2600*Math.max(r,.7)),texture:ns(128,{power:1.25,noise:.45,seed:21}),lit:1,sort:!0,name:"smoke",renderOrder:9,growth:.85}),this.embers=new yi({max:Math.round(700*r),texture:ns(32,{power:2}),blending:"additive",name:"embers",renderOrder:8}),t.add(this.flames.mesh,this.smoke.mesh,this.embers.mesh),this.tick=0,this.time=0,this.texTimer=0,this.wind=new D,this.events=[],this.totalWater=0,this.effectiveWater=0}ignite(t,e,n,i=30){let r=this.zones[t];r.active=!0,r.ignitedAt<0&&(r.ignitedAt=this.time);let o=Math.floor((e-r.x0)/r.cell),a=Math.floor((n-r.z0)/r.cell),l=Math.ceil(i/r.cell);for(let c=a-l;c<=a+l;c++)for(let h=o-l;h<=o+l;h++){if(h<1||c<1||h>=ne-1||c>=ne-1||Math.hypot(h-o,c-a)>l)continue;let u=c*ne+h;r.fuel[u]>.1&&(r.heat[u]=Math.max(r.heat[u],.4+Me()*.4))}}start(t=1){let e=this.zones[0];this.ignite(0,e.x-60,e.z+80,45),this.ignite(0,e.x+50,e.z+120,25);let n=this.zones[1];this.ignite(1,n.x,n.z,35),this.nextIgnition=300}cellAt(t,e){for(let n of this.zones){let i=Math.floor((t-n.x0)/n.cell),r=Math.floor((e-n.z0)/n.cell);if(i>=0&&r>=0&&i<ne&&r<ne)return{Z:n,c:r*ne+i,i,j:r}}return null}burntAt(t,e){let n=this.cellAt(t,e);return n?Math.max(n.Z.burnt[n.c],n.Z.heat[n.c]>.5?.6:0):0}deposit(t,e,n,i){this.totalWater+=n;let r=this.cellAt(t,e);if(!r)return;let{Z:o}=r,a=o.cell*o.cell;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=r.i+c,u=r.j+l;if(h<0||u<0||h>=ne||u>=ne)continue;let d=c===0&&l===0?.4:.075,f=u*ne+h,p=n*d/a,v=i?2.4:1;o.wet[f]=Math.min(1.5,o.wet[f]+p/2.5*v),i&&(o.foam[f]=Math.min(1,o.foam[f]+p*.5)),o.heat[f]>0&&(this.effectiveWater+=n*d,o.heat[f]=Math.max(0,o.heat[f]-p/2*v*1.3),Me()<.3&&this._steam(o,f))}}_cellPos(t,e){let n=e%ne,i=Math.floor(e/ne);return[t.x0+(n+Me())*t.cell,t.hgt[e],t.z0+(i+Me())*t.cell]}_steam(t,e){let[n,i,r]=this._cellPos(t,e);this.smoke.spawn(n,i+3,r,this.wind.x*.5,3+Me()*3,this.wind.z*.5,{life:10+Me()*8,size0:8,size1:40+Me()*20,alpha:.35,r:.86,g:.86,b:.86,drag:.3,grav:0,fadeIn:.05,user:.3})}update(t,e,n){this.time=e,this.env.windAt(0,200,0,e,this.wind);let i=this.wind,r=Math.hypot(i.x,i.z)||1,o=i.x/r,a=i.z/r;this.tick+=t;let l=[];if(this.tick>=.25){let d=this.tick;this.tick=0;for(let f of this.zones){if(!f.active)continue;let p=0,v=0,g=0,m=0,S=0,_=f.list||(f.list=new Int32Array(ne*ne)),x=0,M=f.heat,b=f.fuel,w=f.wet,y=f.burnt,T=f.hgt,R=this._next||(this._next=new Float32Array(ne*ne));R.set(M);for(let C=1;C<ne-1;C++)for(let L=1;L<ne-1;L++){let P=C*ne+L;w[P]>0&&(w[P]=Math.max(0,w[P]-d*(.0018+M[P]*.02)*(f.foam[P]>.2?.4:1))),y[P]>.5&&v++;let F=M[P];if(F<=.01)continue;p++,F>.08&&(_[x++]=P),g+=L*F,m+=C*F,S+=F;let U=b[P]*(1-Q(w[P]*1.4,0,1)),O=F+(U-F)*d*.25;b[P]=Math.max(0,b[P]-F*d*.006),y[P]=Math.min(1,y[P]+F*d*.05),b[P]<.05&&(O*=1-d*.5),w[P]>.3&&(O-=d*.2*w[P]),R[P]=Math.max(0,O);for(let X=-1;X<=1;X++)for(let H=-1;H<=1;H++){if(!H&&!X)continue;let W=P+X*ne+H;if(M[W]>.05||b[W]<.12||w[W]>.25)continue;let G=Math.hypot(H,X),ft=(H*o+X*a)/G,ct=(T[W]-T[P])/(G*f.cell),Ct=.018*F*b[W]*Math.exp(1.2*ft*Q(r/5,.3,2.5))*Math.exp(Q(ct,-.5,.8)*3)*(1-w[W]*3)/G;Me()<Ct*d*4&&(R[W]=Math.max(R[W],.15+.2*Me()))}}M.set(R),f.burning=p,f.nList=x,f.burntCells=v,S>0&&(f.cx=f.x0+(g/S+.5)*f.cell,f.cz=f.z0+(m/S+.5)*f.cell),f.intensity=S;let E=f.state;S>45&&(f.wasActive=!0),f.state=p===0?v>0?"spento":"quiete":S<15&&f.wasActive?"contenuto":"attivo",E!==f.state&&(f.state==="spento"||f.state==="contenuto")&&this.events.push({type:"fire",text:`${f.name}: incendio ${f.state.toUpperCase()}`,level:f.state==="spento"?"good":"info"}),p===0&&(f.active=v>0?!1:f.active)}if(this._uploadAtlas(),this.nextIgnition!==void 0&&e>this.nextIgnition){let f=this.zones.filter(p=>!p.active&&p.burntCells===0);if(f.length){let p=f[Math.floor(Me()*f.length)];this.ignite(p.k,p.x+(Me()-.5)*200,p.z+(Me()-.5)*200,30),this.events.push({type:"fire",text:`NUOVO FOCOLAIO: ${p.name}`,level:"warn"})}this.nextIgnition=e+360+Me()*240}}for(let d of this.zones)d.intensity>2&&l.push({x:d.cx,z:d.cz,r:120+Math.sqrt(d.intensity)*15,w:Q(d.intensity*.06,1,9),top:d.hgt[ne*ne>>1]+900});this.env.thermals=l;let c=(d,f)=>Math.hypot(d-n.x,f-n.z);for(let d of this.zones){if(!d.burning)continue;let f=c(d.cx,d.cz),p=f>7e3?.15:f>3500?.4:1;if(!d.nList)continue;let v=Math.min(900,d.burning*3.2)*this.q*p,g=Math.floor(v*t+Me());for(;g-- >0;){let _=d.list[Me()*d.nList|0],x=d.heat[_];if(x<.05)continue;let[M,b,w]=this._cellPos(d,_),y=3+x*9*(.6+Me()*.8);this.flames.spawn(M,b+y*.35,w,i.x*.2,2.5+Me()*3*x,i.z*.2,{life:.6+Me()*.9,size0:y*.6,size1:y,alpha:.75+Me()*.25,r:1,g:.55+Me()*.25,b:.25,drag:.5,grav:2,fadeIn:.15,rot:(Me()-.5)*.3}),Me()<.05&&this.embers.spawn(M,b+2,w,i.x*.5+(Me()-.5)*3,4+Me()*8,i.z*.5+(Me()-.5)*3,{life:2+Me()*3,size0:.35,size1:.2,alpha:1,r:1,g:.5,b:.12,drag:.6,grav:-1})}let m=Math.min(22,3+d.intensity*.2)*Math.max(.6,this.q)*(p<1?.6:1),S=Math.floor(m*t+Me());for(;S-- >0;){let _=d.list[Me()*d.nList|0],x=Math.max(d.heat[_],.1),[M,b,w]=this._cellPos(d,_),T=.78-Q(x*.8+(1-d.fuel[_])*.2,0,1)*.3+Me()*.08;this.smoke.spawn(M,b+10,w,i.x*.4,6+x*10+Me()*3,i.z*.4,{life:70+Me()*40,size0:16+Me()*12,size1:200+Me()*160,alpha:.55+x*.25,r:T*1.04,g:T,b:T*.93,drag:.08,grav:0,fadeIn:.04,rotV:(Me()-.5)*.05,user:.6+x*.6})}}let h=this.smoke;for(let d=0;d<h.n;d++)h.v[d*3+1]+=t*1.7*Math.max(0,1-h.age[d]/80)*h.user[d];let u=this._windUp||(this._windUp=new D);u.set(i.x*1.25,0,i.z*1.25),h.simulate(t,u,null),this.flames.simulate(t,i,null),this.embers.simulate(t,i,null)}_uploadAtlas(){let t=this.atlasData,e=2*ne;for(let n of this.zones){let i=n.k%2*ne,r=Math.floor(n.k/2)*ne;for(let o=0;o<ne;o++)for(let a=0;a<ne;a++){let l=o*ne+a,c=((r+o)*e+i+a)*4;t[c]=Math.min(255,n.burnt[l]*255),t[c+1]=Math.min(255,n.heat[l]*255),t[c+2]=Math.min(255,n.wet[l]*200),t[c+3]=Math.min(255,n.foam[l]*255)}}this.atlas.needsUpdate=!0}render(t,e){let n=new It(1,.92,.82).multiplyScalar(1.7),i=new It(.7,.75,.84);this.smoke.setLighting(e.sunDir,t,n,i,e.scene.fog),this.flames.setLighting(e.sunDir,t,null,null,e.scene.fog),this.embers.setLighting(e.sunDir,t,null,null,e.scene.fog),this.smoke.upload(t,r=>Math.min(1,r*15)*(1-Math.max(0,(r-.5)/.5)**1.5)),this.flames.upload(t,r=>Math.sin(Math.PI*r)),this.embers.upload(t,r=>1-r)}summary(){let t=0,e=0,n=0;for(let i of this.zones)t+=i.burning,e+=i.burntCells*i.cell*i.cell/1e4,i.burning&&n++;return{burning:t,burntHa:e,active:n,zones:this.zones.map(i=>({name:i.name,state:i.state,x:i.cx,z:i.cz,burning:i.burning,intensity:i.intensity}))}}};var le={name:"Canadair CL-415",length:19.82,span:28.6,height:8.98,wingArea:100.33,chord:3.51,aspect:28.6*28.6/100.33,emptyMass:12900,maxFuel:4650,waterCapacity:6137,foamCapacity:680,mtowLand:19890,mtowWater:17168,maxAfterScoop:21319,enginePower:1775e3,propDiameter:3.97,propRPM:1200,propBlades:4,vmo:200,vfe:{10:165,15:145,25:125},vScoopMin:60,vScoopMax:95,vProbeMax:105,flapDetents:[0,10,15,25]},it={L:19.82,sCG:7.95,hCG:2.2,sStep:8.95,wing:{sLE:6.9,chord:3.51,h:3.78,rootY:1.3,halfSpan:14.3,incidence:2*Yt,flapStart:1.35,flapEnd:9.85,ailStart:10.05,ailEnd:13.75,hingeX:.72},engine:{y:3.95,sProp:4.25,h:4.65,sNacEnd:11.6},float:{y:11.4,sFront:6.75,sBack:10.55,hBottom:1.55,width:.78,height:.82},htail:{sLE:16.45,rootChord:2.55,tipChord:1.7,halfSpan:5.6,h:5.05,sweepLE:1,elevHinge:.62,finletY:3.05},vtail:{sRootLE:14,rootChord:5.4,hRoot:3.15,hTip:8.25,sTipLE:17.55,tipChord:2.15,rudderHinge:.66},gear:{nose:{s:2.55,pivotH:.62,legLen:1.08,wheelR:.33,track:.42},main:{s:9.35,pivotY:1.24,pivotH:.6,wheelY:2.32,wheelH:-.32,wheelR:.5,width:.34}},probe:{s:9.32,y:.42,hExt:-.42},doors:[{s:6.95,y:-.36},{s:6.95,y:.36},{s:8.05,y:-.36},{s:8.05,y:.36}],doorSize:{len:.92,wid:.5},tanksH:.95,tankS:7.6};function pn(s,t,e=0,n={x:0,y:0,z:0}){return n.x=e,n.y=t-it.hCG,n.z=s-it.sCG,n}var Cv=an([[0,1.3],[.22,.86],[.55,.52],[1,.29],[1.6,.13],[2.4,.04],[3.4,0],[it.sStep,0]]),Pv=an([[it.sStep,.24],[12,.62],[15,1.02],[16.6,1.27],[18,1.72],[19.2,2.32],[19.82,2.62]]);function $e(s){return s<it.sStep?Cv(s):Pv(s)}var Ge=an([[0,1.3],[.12,1.66],[.4,2.08],[.85,2.42],[1.15,2.54],[2.05,3.2],[2.6,3.4],[3.4,3.5],[12,3.5],[13.6,3.43],[15.5,3.28],[17.5,3.16],[19,3.07],[19.82,3.02]]),is=an([[0,0],[.06,.2],[.28,.5],[.7,.84],[1.2,1.08],[2,1.21],[3,1.28],[4,1.3],[11.6,1.3],[13,1.24],[14.5,1.08],[16,.86],[17.5,.62],[18.8,.4],[19.82,.15]]),Iv=an([[0,52],[1,38],[2.5,27],[5,22],[it.sStep,20]]),Lv=an([[it.sStep,22],[14,26],[17,30],[19.82,36]]);function oi(s){return(s<it.sStep?Iv(s):Lv(s))*Yt}function Ho(s){let t=$e(s),e=is(s),n=Ge(s);return Math.min(t+e*Math.tan(oi(s)),n-.08)}function Vf(s,t=22,e=9){let n=$e(s),i=Ge(s),r=Math.max(is(s),5e-4),o=Ho(s),a=Math.max(i-o,.01),l=Math.min(1.25,a*.48),c=i-l,h=[],u=Math.round(t*.7),d=t-u,f=2/2.7;for(let g=0;g<=u;g++){let m=g/u*(Math.PI/2),S=Math.pow(Math.sin(m),f),_=Math.pow(Math.cos(m),f);h.push([r*S,c+l*_])}for(let g=1;g<=d;g++){let m=g/d,S=c+(o-c)*m,_=.035*Math.pow(m,6)*Q(r/.6,0,1);h.push([r+_,S])}let p=[],v=r+.035*Q(r/.6,0,1);for(let g=0;g<=e;g++){let S=1-g/e,_=v*S,x=n+(o-n)*(S-.07*S*(1-S));p.push([_,x])}return{roof:h,bottom:p,keel:n,top:i,chine:o,halfBeam:r}}function ss(s,t,e,n=24,i=!0){let r=[],o=[];for(let l=0;l<=n;l++){let c=l/n*Math.PI,h=(1-Math.cos(c))/2,u=5*e*(.2969*Math.sqrt(h)-.126*h-.3516*h*h+.2843*h**3-(i?.1036:.1015)*h**4),d=0,f=0;s>0&&(h<t?(d=s/(t*t)*(2*t*h-h*h),f=2*s/(t*t)*(t-h)):(d=s/(1-t)**2*(1-2*t+2*t*h-h*h),f=2*s/(1-t)**2*(t-h)));let p=Math.atan(f);r.push([h-u*Math.sin(p),d+u*Math.cos(p)]),o.push([h+u*Math.sin(p),d-u*Math.cos(p)])}let a=[];for(let l=n;l>=0;l--)a.push(r[l]);for(let l=1;l<=n;l++)a.push(o[l]);return a}function Ni(s,t,e,n=!1){let i=(s.length-1)/2,r=s.slice(0,i+1).reverse(),o=s.slice(i),a=(h,u)=>{for(let d=1;d<h.length;d++)if(h[d][0]>=u){let f=h[d-1],p=h[d],v=(u-f[0])/(p[0]-f[0]||1);return f[1]+(p[1]-f[1])*v}return h[h.length-1][1]},l=[],c=10;for(let h=c;h>=0;h--){let u=t+(e-t)*h/c;l.push([u,a(r,u)])}if(n){let h=a(r,t),u=a(o,t),d=(h+u)/2,f=(h-u)/2;for(let p=1;p<6;p++){let v=Math.PI/2+p/6*Math.PI;l.push([t+Math.cos(v)*f*.9,d+Math.sin(v)*f])}}else{let h=a(r,t),u=a(o,t);for(let d=1;d<4;d++)l.push([t,h+(u-h)*d/4])}for(let h=0;h<=c;h++){let u=t+(e-t)*h/c;l.push([u,a(o,u)])}return l}function Ts(s,{closed:t=!1,capStart:e=!1,capEnd:n=!1,uvU:i=null,uvV:r=null,flip:o=!1}={}){let a=s.length,l=s[0].length,c=[],h=[];for(let v=0;v<a;v++)for(let g=0;g<l;g++){let m=s[v][g];c.push(m.x,m.y,m.z),h.push(i?i[v]:v/(a-1),r?r[g]:g/(l-1))}let u=[],d=t?l:l-1;for(let v=0;v<a-1;v++)for(let g=0;g<d;g++){let m=(g+1)%l,S=v*l+g,_=(v+1)*l+g,x=(v+1)*l+m,M=v*l+m;o?u.push(S,M,_,_,M,x):u.push(S,_,M,_,x,M)}let f=(v,g)=>{let m=new D;s[v].forEach(_=>m.add(_)),m.divideScalar(l);let S=c.length/3;c.push(m.x,m.y,m.z),h.push(i?i[v]:v/(a-1),.5);for(let _=0;_<d;_++){let x=v*l+_,M=v*l+(_+1)%l;g!==o?u.push(S,x,M):u.push(S,M,x)}};e&&f(0,!1),n&&f(a-1,!0);let p=new me;return p.setAttribute("position",new Kt(c,3)),p.setAttribute("uv",new Kt(h,2)),p.setIndex(u),p.computeVertexNormals(),p}function Mi(s,t,{chordDir:e,upDir:n,uvU:i=null,capStart:r=!1,capEnd:o=!0,foilV:a=null,flip:l=!1}={}){let c=t.map(u=>{let d=e.clone(),f=n.clone();if(u.twist){let v=new D().crossVectors(d,f).normalize();d.applyAxisAngle(v,u.twist),f.applyAxisAngle(v,u.twist)}return(u.foil||s).map(([v,g])=>u.le.clone().addScaledVector(d,v*u.chord).addScaledVector(f,g*u.chord*(u.thick||1)))}),h=a;if(!h){let u=t[0].foil||s,d=(u.length-1)/2;h=u.map((f,p)=>p<=d?.5-.5*f[0]:.5+.5*f[0])}return Ts(c,{uvU:i,uvV:h,capStart:r,capEnd:o,flip:l})}function Wf(s,t=24,e=0){let n=s.map(([r,o])=>new dt(Math.max(r,1e-4),o)),i=new mo(n,t,e);return i.rotateX(Math.PI/2),i}function Go(s){let t=s.clone();t.scale(-1,1,1);let e=t.index;if(e){let n=e.array;for(let i=0;i<n.length;i+=3){let r=n[i+1];n[i+1]=n[i+2],n[i+2]=r}e.needsUpdate=!0}return t.computeVertexNormals(),t}function As(s){let t=0,e=0;for(let h of s)t+=h.attributes.position.count,e+=h.index?h.index.count:h.attributes.position.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint32Array(e),a=0,l=0;for(let h of s){let u=h.attributes.position.count;if(n.set(h.attributes.position.array,a*3),h.attributes.normal&&i.set(h.attributes.normal.array,a*3),h.attributes.uv&&r.set(h.attributes.uv.array,a*2),h.index){let d=h.index.array;for(let f=0;f<d.length;f++)o[l+f]=d[f]+a;l+=d.length}else{for(let d=0;d<u;d++)o[l+d]=d+a;l+=u}a+=u}let c=new me;return c.setAttribute("position",new be(n,3)),c.setAttribute("normal",new be(i,3)),c.setAttribute("uv",new be(r,2)),c.setIndex(new be(o,1)),c.computeBoundingSphere(),c}function Tn(s,t,e,n=e,i=8,r=1){let o=new D().subVectors(t,s),a=o.length(),l=new _e(n,e,a,i,1,!1);l.scale(r,1,1),l.translate(0,a/2,0);let c=new nn().setFromUnitVectors(new D(0,1,0),o.normalize());return l.applyQuaternion(c),l.translate(s.x,s.y,s.z),l}var Xf={roof:40,bottom:10};function Vo(s,t,e,n=0){let i=Math.abs(t),r=Ge(s);if(s>1.2-n&&s<2.02+n){let a=.93-(s-1.2)*.1+n;if(i>.032-n&&i<a&&e>r-.75)return 1}if(s>1.32-n&&s<2.04+n){let a=.93-(s-1.2)*.1+.075-n;if(i>a&&e>2.43-n&&e<r-.04+n)return 5}let o=is(s);if(i>o*.62){let a=Math.min(r-.3,3.18)+n;if(e>2.43-n&&e<a){if(s>2.13-n&&s<2.66+n)return 2;if(s>2.74-n&&s<3.3+n&&e<a-.03)return 3}}return s>2.12-n&&s<2.6+n&&i>.42-n&&i<.78+n&&e>r-.2?4:0}function qf(s){let t=Vf(s,Xf.roof,Xf.bottom);return{roof:t.roof,bottom:t.bottom,sec:t}}function Rs(s){let{roof:t,bottom:e}=qf(s),n=t.concat(e),i=[0];for(let o=1;o<n.length;o++)i.push(i[o-1]+Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1]));let r=i[i.length-1]||1;return{pts:n,t:i.map(o=>o/r),nRoof:t.length,total:r}}function xc(s,t){let{pts:e,t:n}=Rs(s);if(t>=e[0][1])return 0;for(let i=1;i<e.length;i++)if(e[i][1]<=t){let r=e[i-1],o=e[i],a=(r[1]-t)/(r[1]-o[1]||1);return n[i-1]+(n[i]-n[i-1])*a}return 1}function _c(s,t){let{pts:e,t:n}=Rs(s);for(let i=1;i<e.length;i++)if(e[i][0]>=t){let r=e[i-1],o=e[i],a=(t-r[0])/(o[0]-r[0]||1);return n[i-1]+(n[i]-n[i-1])*a}return n[n.length-1]}function Wo(s,t){let{pts:e,t:n}=s;for(let i=1;i<e.length;i++)if(n[i]>=t){let r=(t-n[i-1])/(n[i]-n[i-1]||1);return[e[i-1][0]+(e[i][0]-e[i-1][0])*r,e[i-1][1]+(e[i][1]-e[i-1][1])*r]}return e[e.length-1]}function Dv(s=0,t=it.L){let e=[],n=(i,r,o)=>{for(let a=i;a<r-1e-6;a+=o)a>=s-1e-6&&a<=t+1e-6&&e.push(a)};return n(0,.12,.02),n(.12,.6,.04),n(.6,3.6,.045),n(3.6,8.9,.18),n(8.9,9,.05),n(9,15.4,.22),n(15.4,it.L,.12),e[e.length-1]<Math.min(t,it.L)-1e-4&&e.push(Math.min(t,it.L)),s>0&&e[0]>s+1e-4&&e.unshift(s),e}function Xo({s0:s=0,s1:t=it.L,inset:e=0,inside:n=!1,cutWindows:i=!0,collectGlass:r=!1,glassMargin:o=0}={}){let a=Dv(s,t),l=it.L,c=[],h={pos:[],idx:[]};for(let d of[1,-1])for(let f of["roof","bottom"]){let p=[],v=[],g=[],m=[],S=0;for(let M of a){let b=Rs(M),w=qf(M),y=f==="roof"?w.roof:w.bottom,T=f==="roof"?0:b.nRoof;S=y.length;for(let R=0;R<y.length;R++){let[E,C]=y[R];if(e){let P=y[Math.max(0,R-1)],F=y[Math.min(y.length-1,R+1)],U=F[1]-P[1],O=-(F[0]-P[0]),X=Math.hypot(U,O)||1;U/=X,O/=X,E-=U*e,C-=O*e,E<0&&(E=0)}let L=b.t[T+R];p.push(d*E,C-it.hCG,M-it.sCG),m.push([M,E,C]),v.push(M/l,d>0?.5*L:1-.5*L)}}let _=a.length;for(let M=0;M<_-1;M++)for(let b=0;b<S-1;b++){let w=M*S+b,y=(M+1)*S+b,T=(M+1)*S+b+1,R=M*S+b+1,E=0,C=0;if(i||r){let P=m[w],F=m[T],U=(P[0]+F[0])/2,O=(P[1]+F[1])/2,X=(P[2]+F[2])/2;E=Vo(U,O,X),C=o?Vo(U,O,X,o):E}let L=d>0?[w,y,R,y,T,R]:[w,R,y,y,R,T];if(n&&(L=[L[0],L[2],L[1],L[3],L[5],L[4]]),C&&r){let P=h.pos.length/3,F=new Map,U=[];for(let O of L)F.has(O)||(F.set(O,P+F.size),h.pos.push(p[O*3],p[O*3+1],p[O*3+2])),U.push(F.get(O));h.idx.push(...U)}E&&i||g.push(...L)}let x=new me;x.setAttribute("position",new Kt(p,3)),x.setAttribute("uv",new Kt(v,2)),x.setIndex(g),x.computeVertexNormals(),c.push(x)}let u=null;return r&&h.pos.length&&(u=new me,u.setAttribute("position",new Kt(h.pos,3)),u.setIndex(h.idx),u.computeVertexNormals()),{strips:c,glassGeo:u}}var qe={yellow:"#f4b000",yellowDark:"#d9a400",red:"#c3141e",white:"#f4f2ea",black:"#17181a",glass:"#0d1418",frame:"#1d1f22"},vu=an([[0,2.2],[.55,2.3],[1.15,2.08],[2,1.72],[3.1,1.46],[6,1.4],[10.6,1.4],[13,1.72],[15.5,2.22],[17.6,2.66],[19.82,2.95]]);function Nv(s,t=2.2){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=es(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=a.data,c=(u,d)=>i[((d+n)%n*e+(u+e)%e)*4]/255;for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=(c(d-1,u)-c(d+1,u))*t,p=(c(d,u-1)-c(d,u+1))*t,v=1/Math.sqrt(f*f+p*p+1),g=(u*e+d)*4;l[g]=(f*v*.5+.5)*255,l[g+1]=(-p*v*.5+.5)*255,l[g+2]=(v*.5+.5)*255,l[g+3]=255}o.putImageData(a,0,0);let h=new dn(r);return h.colorSpace=ii,h.anisotropy=8,h}function Yf({quality:s="medium",number:t="21",reg:e="I-SUSA",text:n="ANTINCENDIO"}={}){let i=s==="high"?4096:s==="low"?1024:2048,r=i/2,o=it.L,a=es(i,r),l=a.getContext("2d"),c=es(i,r),h=c.getContext("2d");h.fillStyle="rgb(128,128,128)",h.fillRect(0,0,i,r);let u=E=>E/o*i,d=new Map,f=(E,C)=>{let L=Math.round(E*1e3)+":"+Math.round(C*1e3),P=d.get(L);return P===void 0&&(P=xc(E,C),d.set(L,P)),P},p=(E,C)=>E<0?C*r/2:r-C*r/2,v=(E,C,L)=>p(E,f(C,L)),g=[-1,1];l.fillStyle=qe.yellow,l.fillRect(0,0,i,r);let m=.04;l.fillStyle=qe.red;for(let E of g){l.beginPath(),l.moveTo(u(0),p(E,1));for(let C=0;C<=o+1e-6;C+=m)l.lineTo(u(C),v(E,C,vu(C)));l.lineTo(u(o),p(E,1)),l.closePath(),l.fill()}let S=(E,C,L,P,F)=>{l.fillStyle=L;for(let U of g){l.beginPath();for(let O=P;O<=F+1e-6;O+=m)l.lineTo(u(O),v(U,O,vu(O)+C));for(let O=F;O>=P-1e-6;O-=m)l.lineTo(u(O),v(U,O,vu(O)+E));l.closePath(),l.fill()}};S(.025,.085,qe.white,.75,o),S(.28,.36,qe.red,3.4,17.6),l.fillStyle=qe.black;for(let E of g){l.beginPath(),l.moveTo(u(.32),p(E,0));for(let C=.32;C<=1.24;C+=.02){let L=on(.32,.6,C);l.lineTo(u(C),p(E,_c(C,is(C)*(.25+.55*L))))}l.lineTo(u(1.24),p(E,0)),l.closePath(),l.fill()}{let E=Math.floor(u(.95)),C=Math.ceil(u(3.55)),L=l.getImageData(E,0,C-E,r),P=h.getImageData(E,0,C-E,r),F=L.data,U=P.data,O=[29,31,34],X=[13,20,24];for(let H=E;H<C;H++){let W=(H+.5)/i*o,G=Rs(W);for(let ft=0;ft<r;ft++){let ct=ft<r/2?(ft+.5)/(r/2):(r-ft-.5)/(r/2);if(ct>.75)continue;let[Ct,Bt]=Wo(G,ct);if(!Vo(W,Ct,Bt,.075))continue;let J=Vo(W,Ct,Bt,0),nt=J?X:O,mt=(ft*(C-E)+(H-E))*4;F[mt]=nt[0],F[mt+1]=nt[1],F[mt+2]=nt[2];let Gt=J?128:100;U[mt]=U[mt+1]=U[mt+2]=Gt}}l.putImageData(L,E,0),h.putImageData(P,E,0)}let _=(E,C,L,P)=>{E.strokeStyle=L,E.lineWidth=P,E.beginPath(),C.forEach(([F,U],O)=>O?E.lineTo(F,U):E.moveTo(F,U)),E.stroke()},x=i/o,M=Math.max(1,x*.006);for(let E of g){for(let P=3.7;P<18.6;P+=.53){let F=[];for(let U=.03;U<=.97;U+=.02)F.push([u(P),p(E,U)]);_(l,F,"rgba(40,30,0,0.16)",M),_(h,F,"rgb(96,96,96)",M*1.4);for(let U=.05;U<.95;U+=.012)h.fillStyle="rgb(150,150,150)",h.fillRect(u(P)+M*2,p(E,U),M*.9,M*.9),h.fillRect(u(P)-M*2.5,p(E,U),M*.9,M*.9)}for(let P of[3.05,2.45,.95]){let F=[];for(let U=2.6;U<18.5;U+=.1)P>$e(U)+.2&&P<3.3&&F.push([u(U),v(E,U,P)]);F.length>2&&(_(l,F,"rgba(40,30,0,0.12)",M),_(h,F,"rgb(100,100,100)",M*1.3))}let C=[];for(let P=.4;P<o;P+=.05)C.push([u(P),v(E,P,Ho(P)+.004)]);_(l,C,"rgba(60,0,0,0.45)",M*1.5),_(h,C,"rgb(150,150,150)",M*2);let L=[];for(let P=.6;P<=1;P+=.01)L.push([u(it.sStep),p(E,P)]);_(l,L,"rgba(20,0,0,0.6)",M*3),_(h,L,"rgb(60,60,60)",M*3)}let b=(E,C,L,P,F,U,O,X,H=!0)=>{let W=[],G=(ct,Ct,Bt)=>{for(let Qt=0;Qt<=6;Qt++){let J=Bt+Qt/6*(Math.PI/2);W.push([ct+Math.cos(J)*U,Ct+Math.sin(J)*U])}};G(L-U,F-U,0),G(C+U,F-U,Math.PI/2),G(C+U,P+U,Math.PI),G(L-U,P+U,3*Math.PI/2);let ft=W.map(([ct,Ct])=>[u(ct),v(E,ct,Ct)]);X&&(l.fillStyle=X,l.beginPath(),ft.forEach(([ct,Ct],Bt)=>Bt?l.lineTo(ct,Ct):l.moveTo(ct,Ct)),l.closePath(),l.fill()),l.strokeStyle=O,l.lineWidth=M*2.2,l.beginPath(),ft.forEach(([ct,Ct],Bt)=>Bt?l.lineTo(ct,Ct):l.moveTo(ct,Ct)),l.closePath(),l.stroke(),H&&(h.strokeStyle="rgb(70,70,70)",h.lineWidth=M*2.5,h.beginPath(),ft.forEach(([ct,Ct],Bt)=>Bt?h.lineTo(ct,Ct):h.moveTo(ct,Ct)),h.closePath(),h.stroke())};b(-1,3.58,4.42,1.22,2.92,.12,"rgba(25,20,10,0.75)"),b(-1,3.86,4.16,2.25,2.62,.05,qe.frame,qe.glass,!1),b(-1,12.05,12.9,1.32,2.72,.1,"rgba(25,20,10,0.75)");for(let E of g){b(E,5.05,5.62,1.95,2.72,.08,"rgba(25,20,10,0.7)"),b(E,5.18,5.5,2.25,2.55,.06,qe.frame,qe.glass,!1);for(let C of[7,9.6,14.6])b(E,C,C+.32,2.42,2.72,.07,qe.frame,qe.glass,!1)}b(1,12.1,12.9,1.4,2.6,.1,"rgba(25,20,10,0.7)");for(let E of g)b(E,8.72,9.98,1.28,2.5,.25,"rgba(10,10,10,0.9)","#2a2a2a");l.fillStyle="rgba(40,0,0,0.0)";for(let E of it.doors){let C=E.y<0?-1:1,L=E.s-it.doorSize.len/2,P=E.s+it.doorSize.len/2,F=Math.abs(E.y)-it.doorSize.wid/2,U=Math.abs(E.y)+it.doorSize.wid/2,O=[],X=(H,W)=>$e(H)+W*Math.tan(oi(H));for(let[H,W]of[[L,F],[P,F],[P,U],[L,U],[L,F]])O.push([u(H),v(C,H,X(H,W))]);_(l,O,"rgba(20,0,0,0.85)",M*2.5),_(h,O,"rgb(60,60,60)",M*3)}for(let E of g){let C=it.probe.s,L=it.probe.y,P=$e(C)+L*Math.tan(oi(C));l.fillStyle="rgba(15,10,10,0.9)";let F=u(C-.22),U=v(E,C,P+.05);l.fillRect(F,Math.min(U,v(E,C,P-.05)),u(.44),Math.abs(v(E,C,P-.05)-U)+2)}let w=(E,C,L,P,F,U,{stroke:O=null,font:X="900",family:H="Arial Black, Arial, sans-serif",widthScale:W=1}={})=>{let G=u(L),ft=v(E,L,P),ct=Math.abs(v(E,L,P+.05)-v(E,L,P-.05))/.1,Ct=F*ct;l.save(),l.translate(G,ft),E>0&&l.rotate(Math.PI),l.scale(x/ct*W,1),l.font=`${X} ${Ct*1.33}px ${H}`,l.textAlign="center",l.textBaseline="middle",O&&(l.lineWidth=Ct*.08,l.strokeStyle=O,l.strokeText(C,0,0)),l.fillStyle=U,l.fillText(C,0,0),l.restore()};for(let E of g){w(E,n,8.55,2.06,.5,qe.red,{stroke:"rgba(90,0,0,0.6)",widthScale:.95}),w(E,t,16.9,2.85,.62,qe.black,{widthScale:.9}),w(E,e,14,2.68,.2,qe.black,{font:"bold",family:"Arial, sans-serif"}),w(E,"SOCCORSO",1.85,1.68,.11,qe.white,{font:"bold",family:"Arial, sans-serif"});let C=15.15,L=2.5,P=["#0b8a3e","#f4f2ea","#c8102e"];for(let F=0;F<3;F++){let U=C+F*.13*(E>0?-1:1);l.fillStyle=P[F];let O=v(E,U,L+.12),X=v(E,U,L-.12);l.fillRect(u(Math.min(U,U+.13*(E>0?-1:1))),Math.min(O,X),u(.13),Math.abs(X-O))}}let y=En(1234);l.globalCompositeOperation="multiply";for(let E=0;E<700;E++){let C=y()<.5?-1:1,L=1+y()*17.5,P=.55+y()*.45,F=u(L),U=p(C,P),O=.03+y()*.06;l.fillStyle=`rgba(${120+y()*60},${110+y()*50},${100+y()*40},${O})`,l.fillRect(F,U-(C<0?0:1)*0,2+y()*x*.8,(C<0?1:-1)*(x*(.1+y()*.5)))}for(let E of g)for(let C=.8;C<18;C+=.02){let L=$e(C)+.85+Math.sin(C*5.3)*.06;if(L>3)continue;let P=v(E,C,L);l.fillStyle=`rgba(150,150,140,${.05+.05*y()})`,l.fillRect(u(C),P-2,x*.03,4+y()*6)}l.globalCompositeOperation="source-over";for(let E=0;E<2500;E++)l.fillStyle=`rgba(${y()<.5?"255,255,255":"0,0,0"},${.012+y()*.02})`,l.fillRect(y()*i,y()*r,4+y()*x*.6,4+y()*x*.4);let T=Mr(a,{srgb:!0,aniso:8}),R=Nv(c,2.5);return{map:T,normalMap:R,canvas:a}}function Zf({quality:s="medium"}={}){let t=s==="high"?2048:1024,e=s==="high"?512:256,n=it.wing.halfSpan,i=it.wing.chord,r=es(t,e),o=r.getContext("2d"),a=o.createImageData(t,e),l=a.data,c=_=>[parseInt(_.slice(1,3),16),parseInt(_.slice(3,5),16),parseInt(_.slice(5,7),16)],h=c(qe.yellow),u=c(qe.red),d=c(qe.white),f=[38,39,38],p=Math.tan(30*Math.PI/180),v=En(77);for(let _=0;_<e;_++){let x=1-(_+.5)/e,M=x<.5,b=M?1-2*x:2*x-1;for(let w=0;w<t;w++){let y=(w+.5)/t*n,T=h,R=(b-.5)*i*p,E=y-(10.75+R);E>-.6&&E<.6&&(T=Math.abs(E)<.2?d:u),y>13.15+R*.6&&(T=u),M&&y>1.35&&y<2.9&&b>.12&&b<.62&&(T=f);let C=1;if(M){let P=it.engine.y+.62+(b-.35)*.25,F=.18+b*.55,U=Math.abs(y-P);b>.3&&U<F&&(C*=1-.5*(1-U/F)*on(.3,.7,b))}let L=(_*t+w)*4;l[L]=T[0]*C,l[L+1]=T[1]*C,l[L+2]=T[2]*C,l[L+3]=255}}o.putImageData(a,0,0);let g=_=>_/n*t,m=(_,x)=>_?(1-(.5-.5*x))*e:(1-(.5+.5*x))*e;o.strokeStyle="rgba(40,30,0,0.28)",o.lineWidth=1;for(let _ of[!0,!1]){for(let x of[.12,.62,.715])o.beginPath(),o.moveTo(0,m(_,x)),o.lineTo(t,m(_,x)),o.stroke();for(let x=1.3;x<n;x+=.58)o.beginPath(),o.moveTo(g(x),m(_,.02)),o.lineTo(g(x),m(_,.98)),o.stroke()}o.fillStyle="rgba(30,30,30,0.6)";for(let _ of[5.6,8.4])o.beginPath(),o.arc(g(_),m(!0,.4),3,0,Math.PI*2),o.fill();return Mr(r,{srgb:!0,aniso:8})}var Ft=(s,t,e=0)=>new D(e,t-it.hCG,s-it.sCG),Cs=class{constructor(t,e,n){this.pivot=new re,this.pivot.position.copy(e),this.axis=new D().subVectors(n,e).normalize(),this.origin=e.clone(),t.add(this.pivot),this.angle=0}add(t){return t.geometry.translate(-this.origin.x,-this.origin.y,-this.origin.z),this.pivot.add(t),t}set(t){t!==this.angle&&(this.angle=t,this.pivot.quaternion.setFromAxisAngle(this.axis,t))}};function wr(s,t=10){let n=s.length-2*(t+1);return s.map(([i],r)=>r<=t?.5-.5*i:r<t+1+n?.5:.5+.5*i)}var vc=class{constructor({quality:t="medium"}={}){this.quality=t,this.group=new re,this.group.name="CL415",this.time=0,this._mats(),this._fuselage(),this._wing(),this._nacelles(),this._tail(),this._floats(),this._gear(),this._probesDoors(),this._lights(),this._details(),this.group.traverse(e=>{e.isMesh&&!e.userData.noShadow&&!e.userData.shadowOnly&&(e.castShadow=!0,e.receiveShadow=!0),e.userData.noShadow&&e.name==="hull"&&(e.receiveShadow=!0)})}_mats(){let t=this.quality,e=(r,o={})=>new xs({color:r,roughness:.46,metalness:0,clearcoat:.32,clearcoatRoughness:.3,envMapIntensity:.8,...o}),n=Yf({quality:t}),i=Zf({quality:t});this.M={hull:e(16777215,{map:n.map,normalMap:n.normalMap,normalScale:new dt(.45,.45)}),wing:e(16777215,{map:i}),yellow:e(qe.yellow),red:e(qe.red),white:e(qe.white),black:new we({color:1316118,roughness:.55,metalness:.1}),blade:new we({color:1184532,roughness:.5,metalness:.2,transparent:!0}),bladeTip:new we({color:qe.yellow,roughness:.5,transparent:!0}),spinner:new xs({color:15263972,roughness:.25,metalness:.3,clearcoat:.8}),chrome:new we({color:14212578,roughness:.12,metalness:1}),gray:new we({color:9080208,roughness:.45,metalness:.6}),darkMetal:new we({color:2762276,roughness:.7,metalness:.7}),rubber:new we({color:1381653,roughness:.92,metalness:0}),inlet:new we({color:328965,roughness:1}),glass:new xs({color:1844780,roughness:.02,metalness:0,transparent:!0,opacity:.45,envMapIntensity:1.6,side:je,depthWrite:!1,clearcoat:1,clearcoatRoughness:.02})}}_fuselage(){let{strips:t,glassGeo:e}=Xo({cutWindows:!1,collectGlass:!0,glassMargin:.04}),n=As(t),i=new $(n,this.M.hull);i.name="hull",i.userData.noShadow=!0,i.receiveShadow=!0,this.group.add(i),this.hull=i;let r=new $(As(Xo({cutWindows:!0}).strips),new Ve({colorWrite:!1,depthWrite:!1,side:je}));if(r.castShadow=!0,r.userData.shadowOnly=!0,this.group.add(r),e){let h=e.attributes.position,u=e.attributes.normal;for(let f=0;f<h.count;f++)h.setXYZ(f,h.getX(f)+u.getX(f)*.006,h.getY(f)+u.getY(f)*.006,h.getZ(f)+u.getZ(f)*.006);let d=new $(e,this.M.glass);d.renderOrder=10,d.userData.noShadow=!0,d.name="glass",this.group.add(d),this.glass=d}let o=new $(new In(.16,10,8),this.M.yellow);o.scale.set(.9,1.6,.5),o.position.copy(Ft(it.L-.02,2.85)),this.group.add(o);let a=this.M.black,l=[];for(let h=1.18;h<=2.05;h+=.05)l.push(Ft(h,Ge(h)+.006,0));let c=new gs(new Wi(l),16,.035,6,!1);this.group.add(new $(c,a))}_wing(){let t=it.wing,e=ss(.04,.4,.17,26),n=ss(.04,.4,.135,26),i=t.incidence,r=new D(0,-Math.sin(i),Math.cos(i)),o=new D(0,Math.cos(i),Math.sin(i)),a=t.h+.25*t.chord*Math.sin(i),l=R=>{let E=Q(R/t.halfSpan,0,1);return e.map((C,L)=>[C[0],si(C[1],n[L][1],E)])},c=t.hingeX,h=(R,E)=>({le:Ft(t.sLE,a,R),chord:t.chord,foil:E}),u=[0];for(let R=.4;R<t.halfSpan;R+=.45)u.push(R);u.push(t.halfSpan);let d=R=>R.map(E=>E/t.halfSpan),f=u.map(R=>h(R,Ni(l(R),0,c-.005))),p=Mi(null,f,{chordDir:r,upDir:o,uvU:d(u),capEnd:!0,foilV:wr(f[0].foil)}),g=[[0,t.flapStart-.02],[t.flapEnd+.02,t.ailStart-.02],[t.ailEnd+.02,t.halfSpan]].map(([R,E])=>{let C=[R,(R+E)/2,E],L=C.map(P=>h(P,Ni(l(P),c-.01,1)));return Mi(null,L,{chordDir:r,upDir:o,uvU:d(C),capStart:!0,capEnd:!0,foilV:wr(L[0].foil)})}),m=As([p,...g]),S=Go(m);for(let R of[m,S]){let E=new $(R,this.M.wing);E.name="wing",this.group.add(E)}let _=(R,E,C,L,P)=>{let F=[];for(let W=R;W<=E+1e-6;W+=(E-R)/Math.max(2,Math.round((E-R)/.6)))F.push(W);let U=F.map(W=>h(W,Ni(l(W),C,1,!0))),O=Mi(null,U,{chordDir:r,upDir:o,uvU:d(F),capStart:!0,capEnd:!0,foilV:wr(U[0].foil)}),X=t.sLE+(C-.01)*t.chord,H=a-(C-.01)*t.chord*Math.sin(i)-P;return{g:O,p0:Ft(X,H,R),p1:Ft(X,H,E)}};this.flaps=[],this.ailerons=[];for(let R of[1,-1]){let E=_(t.flapStart,t.flapEnd,c+.008,this.M.wing,.32),C=_(t.ailStart,t.ailEnd,c+.008,this.M.wing,0);for(let[L,P]of[[E,this.flaps],[C,this.ailerons]]){let F=L.g,U=L.p0,O=L.p1;R<0&&(F=Go(F),U=U.clone().setX(-U.x),O=O.clone().setX(-O.x));let X=new Cs(this.group,U,O);X.add(new $(F,this.M.wing)),X.side=R,P.push(X)}}let x=[],M=[6.2,6.6,7.2,8.4,9.6,10.4,11.1],b=[.2,.62,.92,1.05,1.02,.85,.35],w=[3.52,3.68,3.82,3.9,3.86,3.76,3.6];M.forEach((R,E)=>{let C=[];for(let P=0;P<=16;P++){let F=Math.PI*(P/16),U=Math.cos(F)*b[E],O=3.38+(w[E]-3.38)*Math.pow(Math.sin(F),.5);C.push(Ft(R,O,U))}x.push(C)});let y=new $(Ts(x,{capStart:!0,capEnd:!0,flip:!0}),this.M.yellow);this.group.add(y);let T=ss(0,.3,.1,12);for(let R of[1,-1]){let C=[0,.95].map((P,F)=>({le:Ft(t.sLE+.55+P*.5,t.h+.12+P,R*(t.halfSpan+.02+P*.12)),chord:F===0?2.5:1.3})),L=Mi(T,C,{chordDir:new D(0,0,1),upDir:new D(R,0,0),capEnd:!0,flip:R>0});this.group.add(new $(L,this.M.red))}}_nacelles(){let t=it.engine,e=[4.4,4.5,4.75,5.2,5.9,6.8,7.8,8.8,9.8,10.7,11.3,11.62],n=an(e.map((l,c)=>[l,[4.65,4.645,4.62,4.58,4.55,4.54,4.56,4.6,4.66,4.74,4.8,4.85][c]])),i=an(e.map((l,c)=>[l,[.35,.39,.46,.52,.55,.56,.55,.52,.45,.33,.2,.05][c]])),r=an(e.map((l,c)=>[l,[.35,.4,.5,.6,.66,.67,.64,.58,.48,.34,.2,.05][c]])),o=28,a=2/2.3;this.props=[];for(let l of[-1,1]){let c=l*t.y,h=[],u=[];for(let w=4.4;w<=11.62+1e-6;w+=.18)u.push(Math.min(w,11.62));for(let w of u){let y=[];for(let T=0;T<o;T++){let R=T/o*Math.PI*2,E=Math.cos(R),C=Math.sin(R),L=Math.sign(E)*Math.pow(Math.abs(E),a)*i(w),P=Math.sign(C)*Math.pow(Math.abs(C),a)*r(w);y.push(Ft(w,n(w)+P,c+L))}h.push(y)}let d=Ts(h,{closed:!0,capEnd:!0,flip:!0}),f=new $(d,this.M.yellow);f.name="nacelle",this.group.add(f);let p=[],v=[4.62,4.75,5.1,5.6,6.2,6.7],g=[.2,.24,.26,.25,.2,.08],m=[.26,.3,.3,.26,.16,.04];v.forEach((w,y)=>{let T=[];for(let R=0;R<16;R++){let E=R/16*Math.PI*2;T.push(Ft(w,n(w)-r(w)*.82+Math.sin(E)*m[y]*.5-m[y]*.3,c+Math.cos(E)*g[y]))}p.push(T)}),this.group.add(new $(Ts(p,{closed:!0,capEnd:!0,flip:!0}),this.M.yellow));let S=new $(new fn(1,16),this.M.inlet);S.scale.set(.2,.135,1),S.position.copy(Ft(4.615,n(4.62)-r(4.62)*.82-.078,c)),S.rotation.y=Math.PI,this.group.add(S);let _=Ft(6.35,4.6,c+l*.5),x=Ft(6.85,4.62,c+l*.82),M=new $(Tn(_,x,.15,.17,12),this.M.darkMetal);this.group.add(M);let b=new $(new fn(.15,12),this.M.inlet);b.position.copy(x).add(new D(l*.002,0,.001)),b.lookAt(x.clone().add(new D().subVectors(x,_))),this.group.add(b),this.props.push(this._propeller(l,Ft(t.sProp,t.h,c)))}}_propeller(t,e){let n=new re;n.position.copy(e),this.group.add(n);let i=new re;n.add(i);let r=[];for(let _=0;_<=14;_++){let x=_/14,M=-.72+x*.92,b=.36*Math.pow(Math.sin(x*Math.PI/2),.62);r.push([b,M])}r.push([.36,.22]),r.push([.3,.22]);let o=new $(Wf(r,28),this.M.spinner);i.add(o);let a=le.propDiameter/2,l=ss(.02,.4,.12,9),c=[.3,.42,.55,.75,.95,1.2,1.45,1.68,1.84,1.93,1.985],h=an([[.3,.17],[.45,.25],[.7,.31],[1.1,.3],[1.5,.25],[1.85,.18],[1.985,.06]]),u=an([[.3,2.6],[.45,1.6],[.8,.95],[1.4,.65],[1.985,.45]]),d=_=>(22-34*(_-.3)/(a-.3))*Yt;this.blades=this.blades||[];let f=(_,x)=>{let M=c.filter(w=>w>=_-1e-6&&w<=x+1e-6);M[0]>_&&M.unshift(_),M[M.length-1]<x&&M.push(x);let b=M.map(w=>({le:new D(.35*h(w),w,0),chord:h(w),twist:d(w),thick:u(w)}));return Mi(l,b,{chordDir:new D(-1,0,0),upDir:new D(0,0,-1),capEnd:!0})},p=f(.3,1.86),v=f(1.86,1.985),g=[];for(let _=0;_<4;_++){let x=new re;x.rotation.z=_*Math.PI/2;let M=new re;x.add(M);let b=new $(p,this.M.blade),w=new $(v,this.M.bladeTip);M.add(b,w);let y=new $(new _e(.075,.09,.32,10),this.M.black);y.position.y=.38,M.add(y),i.add(x),g.push(M)}let m=(()=>{let _=document.createElement("canvas");_.width=_.height=256;let x=_.getContext("2d"),M=x.createRadialGradient(128,128,20,128,128,128);M.addColorStop(0,"rgba(30,30,30,0.0)"),M.addColorStop(.25,"rgba(25,25,25,0.16)"),M.addColorStop(.85,"rgba(25,25,25,0.10)"),M.addColorStop(.93,"rgba(240,180,0,0.16)"),M.addColorStop(.985,"rgba(240,180,0,0.10)"),M.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=M,x.fillRect(0,0,256,256);for(let w=0;w<4;w++){x.save(),x.translate(128,128),x.rotate(w*Math.PI/2);let y=x.createLinearGradient(0,-20,0,20);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(.5,"rgba(10,10,10,0.08)"),y.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=y,x.beginPath(),x.moveTo(0,0),x.arc(0,0,128,-.35,.05),x.closePath(),x.fill(),x.restore()}let b=new dn(_);return b.colorSpace=Ne,b})(),S=new $(new fn(a,48),new Ve({map:m,transparent:!0,depthWrite:!1,side:je,opacity:0,toneMapped:!0}));return S.userData.noShadow=!0,S.renderOrder=11,i.add(S),{grp:n,spin:i,blades:g,disc:S,side:t,angle:Math.random()*6.28,bladeMat:this.M.blade}}_tail(){let t=it.vtail,e=ss(0,.3,.12,18),n=an([[3,11.3],[3.35,12.4],[3.8,13.45],[4.4,14.25],[5.2,14.85],[8.25,17.55]]),i=_=>19.72+(_-3)*.004,r=18.05,o=new D(0,0,1),a=new D(1,0,0),l=(_,x)=>({le:Ft(n(_),_,0),chord:i(_)-n(_),foil:x}),c=7.35,h=(_,x,M,b,w,y,T,R,E=!1)=>{let C=[];for(let U=0;U<=M;U++)C.push(_+(x-_)*U/M);let L=C.map(U=>l(U,Ni(e,b(U),w(U),E))),P=Mi(null,L,{chordDir:o,upDir:a,capStart:T,capEnd:R,foilV:wr(L[0].foil),flip:!0});return new $(P,y)},u=_=>(r-n(_))/(i(_)-n(_));this.group.add(h(3,3.6,2,()=>0,()=>1,this.M.yellow,!1,!1)),this.group.add(h(3.6,c,10,()=>0,_=>u(_)-.005,this.M.yellow,!1,!1)),this.group.add(h(c,8.05,3,()=>0,_=>u(_)-.005,this.M.red,!1,!1)),this.group.add(h(8.05,8.25,1,()=>0,()=>1,this.M.red,!1,!0)),this.rudder=new Cs(this.group,Ft(r,3.6,0),Ft(r,8.05,0)),this.rudder.add(h(3.6,c,8,_=>u(_)+.003,()=>1,this.M.yellow,!0,!1,!0)),this.rudder.add(h(c,8.05,3,_=>u(_)+.003,()=>1,this.M.red,!1,!0,!0));let d=new $(new ie(.02,.9,.32),this.M.yellow);d.position.copy(Ft(19.62,4.3,0)),d.geometry.translate(d.position.x,d.position.y,d.position.z),d.position.set(0,0,0),this.rudder.add(d);let f=it.htail,p=ss(0,.3,.11,18),v=(_,x)=>{let M=Math.abs(_)/f.halfSpan;return{le:Ft(f.sLE+f.sweepLE*M,f.h,_),chord:f.rootChord+(f.tipChord-f.rootChord)*M,foil:x}},g=new D(0,0,1),m=new D(0,1,0),S=[0,.8,1.6,2.4,3.2,4,4.8,f.halfSpan];this.elevators=[];for(let _ of[1,-1]){let x=Mi(null,S.map(W=>v(W,Ni(p,0,.615))),{chordDir:g,upDir:m,capEnd:!0,foilV:wr(Ni(p,0,.615))}),M=_>0?x:Go(x);this.group.add(new $(M,this.M.red));let b=S.slice(0,-1).concat([f.halfSpan-.05]),w=Mi(null,b.map(W=>v(W,Ni(p,.625,1,!0))),{chordDir:g,upDir:m,capStart:!0,capEnd:!0,foilV:wr(Ni(p,.625,1,!0))}),y=_>0?w:Go(w),T=v(0,null),R=v(f.halfSpan,null),E=Ft(f.sLE+.62*f.rootChord,f.h,0),C=Ft(f.sLE+f.sweepLE+.62*f.tipChord,f.h,_*f.halfSpan),L=new Cs(this.group,E,C);L.add(new $(y,this.M.red)),L.side=_,this.elevators.push(L);let P=f.finletY*_,F=f.finletY/f.halfSpan,U=f.sLE+f.sweepLE*F+.05,O=ss(0,.3,.1,12),X=[{le:Ft(U+.1,f.h-.7,P),chord:1.05},{le:Ft(U-.05,f.h,P),chord:1.55},{le:Ft(U+.45,f.h+1.05,P),chord:.95}],H=Mi(O,X,{chordDir:new D(0,0,1),upDir:new D(1,0,0),capStart:!0,capEnd:!0,flip:!0});this.group.add(new $(H,this.M.red))}}_floats(){let t=it.float,e=t.sBack-t.sFront,n=an([[0,.48],[.35,.16],[.8,.02],[1.2,0],[2,0],[2.02,.07],[3,.2],[e,.42]]),i=an([[0,.52],[.25,.7],[.8,.82],[3,.8],[e,.62]]),r=an([[0,.04],[.15,.22],[.5,.34],[1,.39],[2.6,.39],[3.4,.28],[e,.16]]),o=25*Yt;this.floatGroups=[];for(let a of[-1,1]){let l=a*t.y,c=[],h=[];for(let m=0;m<=e+1e-6;m+=.08){let S=t.sFront+m,_=n(m),x=i(m),M=r(m),b=Math.min(_+M*Math.tan(o),x-.05),w=[],y=[],T=12;for(let R=0;R<=T;R++){let E=Math.PI-R/T*Math.PI,C=Math.cos(E)*M,L=b+.1+(x-b-.1)*Math.pow(Math.sin(E),.55);w.push(Ft(S,t.hBottom+L,l+C))}y.push(Ft(S,t.hBottom+b+.1,l+M)),y.push(Ft(S,t.hBottom+b,l+M)),y.push(Ft(S,t.hBottom+_,l)),y.push(Ft(S,t.hBottom+b,l-M)),y.push(Ft(S,t.hBottom+b+.1,l-M)),c.push(w),h.push(y)}let u=Ts(c,{capStart:!1,capEnd:!1,flip:!1}),d=Ts(h,{capStart:!1,capEnd:!1,flip:!1});this.group.add(new $(u,this.M.yellow)),this.group.add(new $(d,this.M.red));for(let[m,S]of[[c,this.M.yellow],[h,this.M.red]])for(let _ of[0,m.length-1]){let x=m[_],M=new D;x.forEach(R=>M.add(R)),M.divideScalar(x.length);let b=[M.x,M.y,M.z];x.forEach(R=>b.push(R.x,R.y,R.z));let w=[];for(let R=1;R<x.length;R++)_===0?w.push(0,R,R+1):w.push(0,R+1,R);let y=new me;y.setAttribute("position",new Kt(b,3)),y.setIndex(w),y.computeVertexNormals();let T=new $(y,S);T.material=S.clone(),T.material.side=je,this.group.add(T)}let f=it.wing.h-.28,p=[t.sFront+1.05,t.sFront+2.75];for(let m of p){let S=Ft(m,t.hBottom+.78,l),_=Ft(m+.15,f,l-a*.05);this.group.add(new $(Tn(S,_,.09,.075,10,2.4),this.M.yellow))}let v=Ft(t.sFront+1.9,t.hBottom+.8,l),g=Ft(t.sFront+1.7,f+.02,l-a*1.35);this.group.add(new $(Tn(v,g,.045,.045,8),this.M.yellow))}}_gear(){let t=it.gear.main,e=it.gear.nose,n=(i,r)=>{let o=new ms(i-r*.42,r*.5,12,28);return o.scale(1,1,.9),o.rotateY(Math.PI/2),o};this.mainGear=[];for(let i of[-1,1]){let r=Ft(t.s,t.pivotH,i*t.pivotY),o=Ft(t.s,t.wheelH,i*t.wheelY),a=new re;a.position.copy(r),this.group.add(a);let l=o.clone().sub(r),c=l.clone().normalize(),h=l.length(),u=new $(Tn(new D,c.clone().multiplyScalar(h*.62),.11,.1,12),this.M.gray);a.add(u);let d=new re;a.add(d);let f=new $(Tn(c.clone().multiplyScalar(h*.4),c.clone().multiplyScalar(h-.05),.075,.075,12),this.M.chrome);d.add(f);let p=new re;p.position.copy(l),d.add(p);let v=new $(n(t.wheelR,t.width),this.M.rubber);p.add(v);let g=new $(new _e(.22,.22,t.width*.85,18),this.M.gray);g.rotation.z=Math.PI/2,p.add(g);let m=new $(new _e(.1,.12,t.width*.95,12),this.M.chrome);m.rotation.z=Math.PI/2,p.add(m);let S=new $(Tn(l.clone().add(new D(-i*.25,.05,0)),l.clone(),.06,.06,8),this.M.gray);d.add(S);let _=c.clone().multiplyScalar(h*.5),x=Ft(t.s-.3,1.95,i*1.3).sub(r);a.add(new $(Tn(_,x,.05,.05,8),this.M.gray)),this.mainGear.push({leg:a,slider:d,wheel:p,side:i,dir:c,len:h})}{let i=Ft(e.s,e.pivotH,0),r=new re;r.position.copy(i),this.group.add(r),r.add(new $(Tn(new D(0,0,0),new D(0,-e.legLen*.6,0),.07,.065,10),this.M.gray));let o=new re;r.add(o),o.add(new $(Tn(new D(0,-e.legLen*.45,0),new D(0,-e.legLen+.02,.03),.05,.05,10),this.M.chrome));let a=new re;a.position.set(0,-e.legLen,.03),o.add(a);let l=[];for(let h of[-1,1]){let u=new re;u.position.set(h*e.track/2,0,0),u.add(new $(n(e.wheelR,.2),this.M.rubber));let d=new $(new _e(.14,.14,.17,14),this.M.gray);d.rotation.z=Math.PI/2,u.add(d),a.add(u),l.push(u)}a.add(new $(new ie(e.track-.15,.06,.08),this.M.gray));let c=[];for(let h of[-1,1]){let u=Ft(1.35,$e(1.35)+.02,h*.3),d=Ft(2.85,$e(2.85)+.02,h*.3),f=new Cs(this.group,u,d),p=new ie(.28,.025,1.5),v=Ft(2.1,$e(2.1)+.05,h*.16);p.translate(v.x,v.y,v.z),f.add(new $(p,this.M.red)),f.side=h,c.push(f)}this.noseGear={leg:r,slider:o,steer:a,wheels:l,doors:c}}}_probesDoors(){this.probeMeshes=[];for(let t of[-1,1]){let e=it.probe.s,n=t*it.probe.y,i=$e(e)+it.probe.y*Math.tan(oi(e)),r=new re,o=new $(new ie(.1,.92,.26),this.M.gray);o.geometry.translate(0,-.46,0),r.add(o);let a=new $(new _e(.05,.05,.92,10),this.M.gray);a.geometry.translate(0,-.46,-.13),r.add(a);let l=new $(new ie(.14,.12,.3),this.M.darkMetal);l.position.set(0,-.86,-.05),r.add(l);let c=new $(new ke(.11,.09),this.M.inlet);c.position.set(0,-.86,-.205),c.rotation.y=Math.PI,r.add(c),r.position.copy(Ft(e,i+.88,n)),this.group.add(r),this.probeMeshes.push({g:r,base:r.position.clone()})}this.tankDoors=[];for(let t of it.doors){let e=t.y<0?-1:1,n=Math.abs(t.y),i=t.s-it.doorSize.len/2,r=t.s+it.doorSize.len/2,o=n+it.doorSize.wid/2,a=(p,v)=>$e(p)+v*Math.tan(oi(p))-.006,l=Ft(i,a(i,o),e*o),c=Ft(r,a(r,o),e*o),h=new Cs(this.group,l,c),u=new ie(it.doorSize.wid,.025,it.doorSize.len),d=oi(t.s);u.rotateZ(-e*d);let f=Ft(t.s,a(t.s,n)-.008,e*n);u.translate(f.x,f.y,f.z),h.add(new $(u,this.M.red)),h.side=e,this.tankDoors.push(h)}}_lights(){let t=ns(64,{power:2.5}),e=(u,d)=>{let f=new sr({map:t,color:u,transparent:!0,depthWrite:!1,blending:ys}),p=new Kr(f);return p.scale.setScalar(d),p.userData.noShadow=!0,p.renderOrder=12,p},n=u=>new $(new In(.05,8,6),new Ve({color:u})),i=it.wing,r=Ft(i.sLE+.45,i.h+.08,-(i.halfSpan+.06)),o=Ft(i.sLE+.45,i.h+.08,i.halfSpan+.06),a=Ft(19.85,3,0);this.lights={navL:e(16722458,1.1),navR:e(2293589,1.1),tail:e(16777215,.9),beaconT:e(16719888,2.2),beaconB:e(16719888,2.2),strobeL:e(16777215,3.2),strobeR:e(16777215,3.2)},this.lights.navL.position.copy(r),this.lights.navR.position.copy(o),this.lights.tail.position.copy(a),this.lights.beaconT.position.copy(Ft(11.2,3.62,0)),this.lights.beaconB.position.copy(Ft(11.5,$e(11.5)-.06,0)),this.lights.strobeL.position.copy(r).add(new D(0,0,.5)),this.lights.strobeR.position.copy(o).add(new D(0,0,.5));for(let u in this.lights)this.group.add(this.lights[u]);let l=n(16724e3);l.position.copy(r),this.group.add(l);let c=n(3211104);c.position.copy(o),this.group.add(c);let h=n(16719888);h.position.copy(this.lights.beaconT.position),this.group.add(h),this.landingLights=[];for(let u of[-1,1]){let d=Ft(i.sLE+.02,i.h+.02,u*2.2),f=new $(new fn(.11,14),new Ve({color:7829367}));f.position.copy(d).add(new D(0,0,-.02)),f.rotation.y=Math.PI,this.group.add(f);let p=new Mo(16774880,0,900,.22,.5,1.5);p.position.copy(d),p.target.position.copy(d).add(new D(u*2,-12,-100)),this.group.add(p,p.target);let v=e(16774365,2.5);v.position.copy(d).add(new D(0,0,-.1)),v.visible=!1,this.group.add(v),this.landingLights.push({lamp:f,spot:p,glow:v})}}_details(){let t=this.group;for(let o of[-1,1]){let a=Ft(1.25,2.05,o*1.06),l=Ft(.85,2.05,o*1.06);t.add(new $(Tn(a,l,.018,.012,6),this.M.chrome));let c=new $(Tn(Ft(1.3,2.05,o*1),a,.03,.02,6),this.M.gray);t.add(c)}let e=(o,a,l,c=0,h=.32,u=this.M.white)=>{let d=new $(new ie(.015,h,.22),u);d.geometry.translate(0,h/2,0),d.position.copy(Ft(o,a,l)),d.rotation.x=-.35,d.rotation.z=c,t.add(d)};e(4.6,Ge(4.6),0),e(12.4,Ge(12.4),0,0,.26),e(13.6,Ge(13.6),.3,.2,.18,this.M.black),e(6.2,$e(6.2)+.02,0,Math.PI,.22,this.M.black),t.add(new $(Tn(Ft(3.9,Ge(3.9),0),Ft(4.3,Ge(3.9)+.75,0),.012,.006,5),this.M.black));let n=new to(new me().setFromPoints([Ft(4.8,Ge(4.8)+.05,0),Ft(16.9,7.6,0)]),new or({color:1118481}));t.add(n);for(let o of[-1,1]){let a=Ft(1.24,Ge(1.24)+.01,o*.55),l=Ft(1.62,Ge(1.62)+.02,o*.38);t.add(new $(Tn(a,l,.007,.006,5),this.M.black))}for(let o of[-1,1]){let a=new $(new ie(.28,.12,.5),this.M.darkMetal);a.position.copy(Ft(11.25,Ge(11.25)-.02,o*.55)),t.add(a)}this.overflowVents=[Ft(11.3,Ge(11.3)+.08,-.55),Ft(11.3,Ge(11.3)+.08,.55)];let i=new $(new _e(.14,.14,.02,14),this.M.darkMetal);i.position.copy(Ft(.35,Ge(.35)-.04,0)),i.rotation.x=-.6,t.add(i);let r=new $(new ie(.03,.04,.18),this.M.chrome);r.position.copy(Ft(4.3,2.1,-1.31)),t.add(r)}get emitters(){return{doors:it.doors.map(t=>Ft(t.s,$e(t.s)-.05,t.y)),probes:this.probeMeshes.map(t=>t.g),overflow:this.overflowVents,props:this.props.map(t=>t.grp.position),exhausts:[-1,1].map(t=>Ft(6.85,4.62,t*(it.engine.y+.82)))}}update(t,e,n,i={}){this.time+=t;let r=this.time,o=n.surf;for(let _ of this.flaps)_.set(_.side*e.flapPos*Yt);for(let _ of this.ailerons)_.set(-o.ail*Yt);for(let _ of this.elevators)_.set(_.side*(-o.elev*Yt)*1);this.rudder.set(o.rud*Yt);for(let _=0;_<2;_++){let x=this.props[_],M=e.engines[_],b=M.np/100*le.propRPM*(M.running?1:M.np/100),w=b/60*Math.PI*2,y=Q((b-250)/600,0,1);x.angle-=Math.min(w,2*Math.PI*4.5)*t*(y>.95?.6:1),x.spin.rotation.z=x.angle,x.disc.material.opacity=y*.6,x.disc.rotation.z=-r*2.2,x.bladeMat.opacity=1-y*.9,this.M.bladeTip.opacity=1-y*.9;let T=14+M.pf*22+Q(n.out.tas/80,0,1)*12;M.reverse>.05&&(T=-12),!M.running&&M.feathered&&(T=84),x.beta=si(x.beta??T,T,Q(t*3,0,1));for(let R of x.blades)R.rotation.y=-x.beta*Yt}let a=e.gearPos,l=a*a*(3-2*a);for(let _=0;_<2;_++){let x=this.mainGear[_];x.leg.rotation.z=x.side*(1-l)*112*Yt;let M=n.out.gearCompress[1+(x.side>0?1:0)]||0;x.slider.position.copy(x.dir).multiplyScalar(-M*.9),x.wheel.rotation.x-=(n.out.wheelSpeed[1+(x.side>0?1:0)]||0)*t}let c=this.noseGear,h=Q((a-.1)/.8,0,1),u=h*h*(3-2*h);c.leg.rotation.x=(1-u)*102*Yt,c.slider.position.y=(n.out.gearCompress[0]||0)*.9,c.steer.rotation.y=-(e.noseSteer||0)*(a>.98?1:0);for(let _ of c.wheels)_.rotation.x-=(n.out.wheelSpeed[0]||0)*t*1.5;let d=Q(a<.02?0:1,0,1);c.doorAnim=si(c.doorAnim||0,d,Q(t*3,0,1));for(let _ of c.doors)_.set(_.side*c.doorAnim*80*Yt);for(let _ of this.probeMeshes)_.g.position.copy(_.base),_.g.position.y-=.88*e.probePos,_.g.position.z+=.12*e.probePos;for(let _=0;_<4;_++){let x=this.tankDoors[_];x.set(x.side*e.doorOpen[_]*82*Yt)}let f=this.lights,p=e.lights;f.navL.visible=f.navR.visible=f.tail.visible=p.nav;let v=r*1.1%1,g=p.beacon?Math.max(0,1-Math.abs(v-.1)*8):0;f.beaconT.material.opacity=g,f.beaconB.material.opacity=p.beacon?Math.max(0,1-Math.abs((r*1.1+.5)%1-.1)*8):0;let m=r%1.25,S=p.strobe&&(m<.05||m>.16&&m<.2)?1:0;f.strobeL.material.opacity=f.strobeR.material.opacity=S;for(let _ of this.landingLights)_.spot.intensity=p.landing?900:0,_.glow.visible=p.landing,_.lamp.material.color.setHex(p.landing?16777215:6710886)}setInterior(t){this.M.glass.opacity=.45,this.glass&&(this.glass.visible=!t)}};var kn=256,yc=8,Pe={asi:s=>{let t=Q(s,0,260);return t<40?-160+t/40*20:-140+(t-40)/210*300},radalt:s=>{let t=Q(s,0,2500);return t<=500?-150+t/500*180:30+(t-500)/2e3*120},torque:s=>-135+Q(s,0,120)/120*270,itt:s=>-135+Q(s,0,1e3)/1e3*270,nh:s=>-135+Q(s,0,110)/110*270,np:s=>-135+Q(s,0,1300)/1300*270,ff:s=>-135+Q(s,0,800)/800*270,flaps:s=>-60+Q(s,0,25)/25*150,fuel:s=>-120+Q(s,0,2400)/2400*240,hyd:s=>-120+Q(s,0,4e3)/4e3*240,g:s=>-90+(Q(s,-2,4)+2)/6*270-45,trim:s=>Q(s,-1,1)*70};Pe.vsi=s=>{let t=Math.sign(s),e=Math.abs(s),n;return e<=1e3?n=e/1e3*50:e<=2e3?n=50+(e-1e3)/1e3*40:n=90+(Q(e,2e3,6e3)-2e3)/4e3*80,-90+t*n};function Hn(s,t,e,n){let i=(n-90)*Yt;return[s+Math.cos(i)*e,t+Math.sin(i)*e]}function yu(s,t,e,n,i){s.fillStyle="#121314",s.beginPath(),s.arc(t,e,n,0,Math.PI*2),s.fill();let r=i.map;for(let o of i.arcs||[]){s.strokeStyle=o.color,s.lineWidth=o.w||n*.07,s.beginPath();let a=(r(o.from)-90)*Yt,l=(r(o.to)-90)*Yt;s.arc(t,e,n*(o.r||.86),Math.min(a,l),Math.max(a,l)),s.stroke()}s.strokeStyle="#e8e8e8";for(let o of i.ticks||[]){let[a,l,c]=o,h=r(a),[u,d]=Hn(t,e,n*.93,h),[f,p]=Hn(t,e,n*(.93-l),h);s.lineWidth=c,s.beginPath(),s.moveTo(u,d),s.lineTo(f,p),s.stroke()}s.fillStyle="#f0f0f0",s.textAlign="center",s.textBaseline="middle",s.font=`bold ${Math.round(n*(i.numSize||.2))}px Arial`;for(let[o,a]of i.labels||[]){let[l,c]=Hn(t,e,n*(i.numR||.66),r(o));s.fillText(a,l,c)}if(i.title&&(s.font=`bold ${Math.round(n*.13)}px Arial`,s.fillStyle="#d8d8d8",s.fillText(i.title,t,e+n*(i.titleY||.38))),i.unit&&(s.font=`${Math.round(n*.1)}px Arial`,s.fillStyle="#bdbdbd",s.fillText(i.unit,t,e-n*.34)),i.redline!==void 0){let o=r(i.redline),[a,l]=Hn(t,e,n*.97,o),[c,h]=Hn(t,e,n*.7,o);s.strokeStyle="#ff2a1a",s.lineWidth=n*.05,s.beginPath(),s.moveTo(a,l),s.lineTo(c,h),s.stroke()}}function Fe(s,t,e,n,i){let r=[];for(let o=s;o<=t+1e-6;o+=e)r.push([o,n,i]);return r}var $f={asi:{map:Pe.asi,ticks:[...Fe(40,250,10,.1,2.5),...Fe(40,250,5,.05,1.5)],labels:[[40,"40"],[60,"60"],[80,"80"],[100,"100"],[120,"120"],[140,"140"],[160,"160"],[180,"180"],[200,"200"],[220,"220"],[240,"240"]],arcs:[{from:66,to:125,color:"#f2f2f2",r:.78,w:6},{from:85,to:200,color:"#2fbf3a"}],redline:200,title:"NODI",numSize:.15},vsi:{map:Pe.vsi,ticks:[...Fe(-2e3,2e3,500,.09,2.5),...Fe(-6e3,6e3,1e3,.12,3),...Fe(-1e3,1e3,100,.05,1.5)],labels:[[0,"0"],[1e3,"1"],[2e3,"2"],[4e3,"4"],[6e3,"6"],[-1e3,"1"],[-2e3,"2"],[-4e3,"4"],[-6e3,"6"]],title:"VERT SPEED",unit:"x1000 FT/MIN",numSize:.2,titleY:.3},radalt:{map:Pe.radalt,ticks:[...Fe(0,500,50,.08,2),...Fe(0,500,100,.13,3),...Fe(500,2500,500,.13,3)],labels:[[0,"0"],[100,"1"],[200,"2"],[300,"3"],[400,"4"],[500,"5"],[1e3,"10"],[2e3,"20"]],arcs:[{from:0,to:200,color:"#ffb000",r:.8,w:5}],title:"RAD ALT",unit:"x100 FT",numSize:.17},torque:{map:Pe.torque,ticks:[...Fe(0,120,10,.1,2),...Fe(0,120,5,.05,1.5)],labels:[[0,"0"],[20,"2"],[40,"4"],[60,"6"],[80,"8"],[100,"10"],[120,"12"]],arcs:[{from:0,to:100,color:"#2fbf3a"}],redline:106,title:"TORQUE %",numSize:.2},itt:{map:Pe.itt,ticks:[...Fe(0,1e3,100,.1,2),...Fe(0,1e3,50,.05,1.5)],labels:[[0,"0"],[200,"2"],[400,"4"],[600,"6"],[800,"8"],[1e3,"10"]],arcs:[{from:300,to:765,color:"#2fbf3a"},{from:765,to:800,color:"#ffb000"}],redline:800,title:"ITT \xB0C",numSize:.2},nh:{map:Pe.nh,ticks:[...Fe(0,110,10,.1,2),...Fe(0,110,5,.05,1.5)],labels:[[0,"0"],[20,"20"],[40,"40"],[60,"60"],[80,"80"],[100,"100"]],arcs:[{from:66,to:101,color:"#2fbf3a"}],redline:103,title:"NH %",numSize:.16},np:{map:Pe.np,ticks:[...Fe(0,1300,100,.1,2)],labels:[[0,"0"],[400,"4"],[800,"8"],[1200,"12"]],arcs:[{from:900,to:1212,color:"#2fbf3a"}],redline:1236,title:"NP RPM",unit:"x100",numSize:.2},ff:{map:Pe.ff,ticks:[...Fe(0,800,100,.1,2),...Fe(0,800,50,.05,1.5)],labels:[[0,"0"],[200,"2"],[400,"4"],[600,"6"],[800,"8"]],title:"FUEL FLOW",unit:"x100 KG/H",numSize:.2},flaps:{map:Pe.flaps,ticks:[[0,.15,3],[10,.15,3],[15,.15,3],[25,.15,3],...Fe(0,25,5,.07,1.5)],labels:[[0,"0"],[10,"10"],[15,"15"],[25,"25"]],title:"FLAPS",numSize:.2},fuel:{map:Pe.fuel,ticks:[...Fe(0,2400,400,.12,2.5),...Fe(0,2400,200,.06,1.5)],labels:[[0,"0"],[800,"8"],[1600,"16"],[2400,"24"]],arcs:[{from:0,to:400,color:"#ffb000"}],title:"FUEL",unit:"x100 KG",numSize:.18},hyd:{map:Pe.hyd,ticks:[...Fe(0,4e3,500,.1,2.5)],labels:[[0,"0"],[1e3,"1"],[2e3,"2"],[3e3,"3"],[4e3,"4"]],arcs:[{from:2700,to:3200,color:"#2fbf3a"}],title:"HYD PSI",unit:"x1000",numSize:.18},g:{map:Pe.g,ticks:[...Fe(-2,4,1,.13,3),...Fe(-2,4,.5,.07,1.5)],labels:[[-2,"-2"],[-1,"-1"],[0,"0"],[1,"1"],[2,"2"],[3,"3"],[4,"4"]],arcs:[{from:3.25,to:4,color:"#ff2a1a"}],title:"G",numSize:.18}},Mc=class{constructor(){let t=document.createElement("canvas");t.width=t.height=kn*yc,this.canvas=t,this.g=t.getContext("2d"),this.cells={},this.next=0;let e=this.g;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);for(let n of Object.keys($f))this._cell(n,(i,r,o,a)=>yu(i,r,o,a,$f[n]));this._cell("alt",(n,i,r,o)=>{yu(n,i,r,o,{map:a=>a*36,ticks:[...Fe(0,9.9,1,.13,3),...Fe(0,9.9,.2,.06,1.5)],labels:Array.from({length:10},(a,l)=>[l,String(l)]),numSize:.22,numR:.7}),n.fillStyle="#d8d8d8",n.font=`bold ${o*.11}px Arial`,n.fillText("ALT",i,r-o*.32),n.fillText("FEET",i,r+o*.25),n.fillStyle="#000",n.fillRect(i+o*.22,r-o*.08,o*.4,o*.16),n.fillStyle="#fff",n.font=`${o*.12}px monospace`,n.fillText("1013",i+o*.42,r+o*.005)}),this._cell("clock",(n,i,r,o)=>yu(n,i,r,o,{map:a=>a*30,ticks:[...Fe(0,11.9,1,.14,3),...Fe(0,11.9,.2,.05,1)],labels:[[0,"12"],[3,"3"],[6,"6"],[9,"9"]],numSize:.24})),this._cell("hsiCard",(n,i,r,o)=>{n.fillStyle="#121314",n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="#eee",n.fillStyle="#eee",n.textAlign="center",n.textBaseline="middle";for(let l=0;l<360;l+=5){let c=l%30===0?.14:l%10===0?.1:.05,[h,u]=Hn(i,r,o*.95,l),[d,f]=Hn(i,r,o*(.95-c),l);n.lineWidth=l%10===0?2.5:1.5,n.beginPath(),n.moveTo(h,u),n.lineTo(d,f),n.stroke()}let a={0:"N",90:"E",180:"S",270:"W"};for(let l=0;l<360;l+=30){n.save();let[c,h]=Hn(i,r,o*.68,l);n.translate(c,h),n.rotate(l*Yt),n.font=`bold ${o*(a[l]?.2:.16)}px Arial`,n.fillStyle=a[l]?"#ffd040":"#eee",n.fillText(a[l]||String(l/10),0,0),n.restore()}}),this._cell("hsiOverlay",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o),n.fillStyle="#ff8c00",n.beginPath(),n.moveTo(i,r-o*.98),n.lineTo(i-o*.06,r-o*.84),n.lineTo(i+o*.06,r-o*.84),n.fill(),n.fillStyle="#f2f2f2",n.fillRect(i-o*.03,r-o*.25,o*.06,o*.5),n.fillRect(i-o*.28,r-o*.06,o*.56,o*.06),n.fillRect(i-o*.12,r+o*.18,o*.24,o*.05)},!0),this._cell("adiOverlay",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o),n.strokeStyle="#f2f2f2";for(let l of[-60,-45,-30,-20,-10,0,10,20,30,45,60]){let c=Math.abs(l)%30===0?.12:.07,[h,u]=Hn(i,r,o*.97,l),[d,f]=Hn(i,r,o*(.97-c),l);n.lineWidth=3,n.beginPath(),n.moveTo(h,u),n.lineTo(d,f),n.stroke()}n.fillStyle="#ffae00",n.strokeStyle="#000",n.lineWidth=2;let a=l=>{n.beginPath(),n.moveTo(i+l*o*.12,r),n.lineTo(i+l*o*.55,r),n.lineTo(i+l*o*.55,r+o*.05),n.lineTo(i+l*o*.18,r+o*.05),n.lineTo(i+l*o*.12,r+o*.12),n.closePath(),n.fill(),n.stroke()};a(-1),a(1),n.fillRect(i-o*.03,r-o*.03,o*.06,o*.06),n.beginPath(),n.moveTo(i,r-o*.83),n.lineTo(i-o*.06,r-o*.72),n.lineTo(i+o*.06,r-o*.72),n.fill()},!0),this._cell("tcFace",(n,i,r,o)=>{n.fillStyle="#121314",n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="#eee",n.lineWidth=4;for(let a of[-90,-70,70,90]){let[l,c]=Hn(i,r,o*.92,a),[h,u]=Hn(i,r,o*.75,a);n.beginPath(),n.moveTo(l,c),n.lineTo(h,u),n.stroke()}n.fillStyle="#eee",n.font=`bold ${o*.16}px Arial`,n.textAlign="center",n.fillText("L",i-o*.72,r+o*.35),n.fillText("R",i+o*.72,r+o*.35),n.font=`${o*.1}px Arial`,n.fillText("2 MIN",i,r+o*.72),n.fillText("TURN COORDINATOR",i,r-o*.45),n.strokeStyle="#ddd",n.lineWidth=o*.16,n.beginPath(),n.arc(i,r-o*.4,o*.9,Math.PI*.36,Math.PI*.64),n.stroke(),n.strokeStyle="#111",n.lineWidth=2;for(let a of[-1,1])n.beginPath(),n.moveTo(i+a*o*.09,r+o*.38),n.lineTo(i+a*o*.09,r+o*.58),n.stroke()}),this._cell("tcPlane",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o),n.fillStyle="#f2f2f2",n.fillRect(i-o*.7,r-o*.03,o*1.4,o*.07),n.beginPath(),n.arc(i,r,o*.1,0,Math.PI*2),n.fill(),n.fillRect(i-o*.025,r-o*.25,o*.05,o*.2)},!0),this._cell("bezel",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o);let a=n.createRadialGradient(i,r,o*.82,i,r,o);a.addColorStop(0,"#000"),a.addColorStop(.5,"#2a2b2d"),a.addColorStop(1,"#0c0c0d"),n.fillStyle=a,n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.arc(i,r,o*.86,0,Math.PI*2,!0),n.fill(),n.fillStyle="#555";for(let l of[45,135,225,315]){let[c,h]=Hn(i,r,o*.93,l);n.beginPath(),n.arc(c,h,o*.035,0,Math.PI*2),n.fill()}},!0),this.texture=new dn(t),this.texture.colorSpace=Ne,this.texture.anisotropy=8}_cell(t,e,n=!1){let i=this.next++,r=i%yc*kn,o=Math.floor(i/yc)*kn;n&&this.g.clearRect(r,o,kn,kn),this.g.save(),this.g.beginPath(),this.g.rect(r,o,kn,kn),this.g.clip(),e(this.g,r+kn/2,o+kn/2,kn/2-2),this.g.restore(),this.cells[t]={x:r,y:o}}disc(t,e,n=40){let i=this.cells[t],r=new fn(e,n),o=r.attributes.uv,a=kn*yc;for(let l=0;l<o.count;l++){let c=o.getX(l),h=o.getY(l);o.setXY(l,(i.x+c*kn)/a,1-(i.y+(1-h)*kn)/a)}return r}};function Jf(){return new Xe({uniforms:{pitch:{value:0},roll:{value:0}},vertexShader:`varying vec2 vUv;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform float pitch; uniform float roll; varying vec2 vUv;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      void main(){
        #include <logdepthbuf_fragment>
        vec2 p = vUv * 2.0 - 1.0;
        float c = cos(roll), s = sin(roll);
        vec2 q = vec2(c*p.x - s*p.y, s*p.x + c*p.y);
        float k = 2.6; // unit\xE0 per radiante
        float y = q.y + pitch * k;
        vec3 sky = mix(vec3(0.12,0.38,0.78), vec3(0.25,0.55,0.9), clamp(y,0.0,1.0));
        vec3 gnd = mix(vec3(0.42,0.24,0.09), vec3(0.3,0.16,0.05), clamp(-y,0.0,1.0));
        vec3 col = y > 0.0 ? sky : gnd;
        float lw = 0.012;
        if (abs(y) < lw) col = vec3(1.0);
        // scala di beccheggio
        for (int i = -4; i <= 4; i++) {
          if (i == 0) continue;
          float deg = float(i) * 5.0;
          float yy = y - deg * 0.0174533 * k;
          float hw = (i == -4 || i == -2 || i == 2 || i == 4) ? 0.22 : 0.11;
          if (abs(yy) < 0.008 && abs(q.x) < hw) col = vec3(1.0);
        }
        // puntatore del cielo (ruota con l'orizzonte)
        if (q.y > 0.7 && q.y < 0.82 && abs(q.x) < (q.y - 0.7) * 0.6) col = vec3(1.0);
        float r = length(p);
        col *= smoothstep(1.0, 0.94, r);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`})}var Er=class{constructor(t,e,n){this.canvas=document.createElement("canvas"),this.canvas.width=t,this.canvas.height=e,this.g=this.canvas.getContext("2d"),this.draw=n,this.texture=new dn(this.canvas),this.texture.colorSpace=Ne,this.last=""}update(t){let e=JSON.stringify(t);e!==this.last&&(this.last=e,this.draw(this.g,this.canvas.width,this.canvas.height,t),this.texture.needsUpdate=!0)}};function Kf(s,t,e,n){s.fillStyle="#050806",s.fillRect(0,0,t,e),s.strokeStyle="#333",s.lineWidth=4,s.strokeRect(2,2,t-4,e-4),s.fillStyle="#8f8",s.font="bold 22px monospace",s.textAlign="left",s.fillText("WATER QTY",14,30),s.textAlign="right",s.font="bold 54px monospace",s.fillStyle=n.foam?"#9df":"#5f5",s.fillText(String(Math.round(n.total)).padStart(4," "),t-74,92),s.font="bold 26px monospace",s.fillText("L",t-40,92);for(let i=0;i<4;i++){let r=18+i*60,o=120,a=e-140;s.strokeStyle="#3a3",s.lineWidth=2,s.strokeRect(r,o,44,a);let l=n.tanks[i];s.fillStyle=n.doors[i]?"#f44":"#2c2",s.fillRect(r+3,o+a*(1-l)+3,38,a*l-6>0?a*l-6:0),s.fillStyle="#8f8",s.font="16px monospace",s.textAlign="center",s.fillText(String(i+1),r+22,o-6)}s.textAlign="left",s.font="bold 18px monospace",s.fillStyle=n.foam?"#9df":"#2a2",s.fillText(n.foam?"FOAM "+n.foamPct+"%":"FOAM OFF",268,140),s.fillStyle="#8f8",s.fillText("PRESEL",268,170),s.fillText(String(n.preset)+"%",268,195),s.fillStyle=n.scoop?"#ff0":"#272",s.fillText(n.scoop?"SCOOP":"-----",268,225)}function Qf(s,t,e,n){s.fillStyle="#111",s.fillRect(0,0,t,e),s.fillStyle="#000",s.fillRect(10,10,t-20,54),s.fillStyle="#ff9a1a",s.font="bold 30px monospace",s.textAlign="center",s.fillText(n.mode,t/2,48),s.font="bold 15px Arial",s.fillStyle="#ddd",s.fillText("DROP MODE",t/2,86);let i=["1","2","3","4"];for(let r=0;r<4;r++){let o=26+r*((t-52)/3);s.fillStyle=n.doors[r]?"#ff3020":n.armed?"#3a1410":"#2a2a2a",s.beginPath(),s.arc(o,112,11,0,Math.PI*2),s.fill(),s.fillStyle="#bbb",s.font="12px Arial",s.fillText(i[r],o,116)}}var Fv=[["STALL","w","stall"],["OVERSPEED","w","overspeed"],[`GEAR DN
WATER!`,"w","gearWater"],["GEAR UP","w","gearUpLand"],[`PROBES
DOWN`,"c","probes"],[`PROBE
OVSPD`,"c","probeSpeed"],[`TANKS
FULL`,"g","tanksFull"],[`DOORS
OPEN`,"c","doors"],[`FLAP
OVSPD`,"c","flapSpeed"],[`LOW
FUEL`,"c","lowFuel"],[`OVER
WEIGHT`,"c","overweight"],[`FOAM
ARMED`,"g","foam"],[`PARK
BRAKE`,"c","park"],[`ENG 1
FAIL`,"w","eng1"],[`ENG 2
FAIL`,"w","eng2"],["REV","g","rev"]];function jf(s,t,e,n){s.fillStyle="#0c0c0c",s.fillRect(0,0,t,e);let i=4,r=4,o=t/i,a=e/r;Fv.forEach(([l,c,h],u)=>{let d=u%i*o,f=Math.floor(u/i)*a,p=!!n[h],v=c==="w"?"#ff2a1a":c==="c"?"#ffb000":"#38e048",g=c==="w"?"#2a0c0a":c==="c"?"#2a2008":"#0c240e";s.fillStyle=p?v:g,s.fillRect(d+3,f+3,o-6,a-6),s.fillStyle=p?"#111":"#444",s.font=`bold ${Math.round(a*.24)}px Arial`,s.textAlign="center",s.textBaseline="middle";let m=l.split(`
`);m.forEach((S,_)=>s.fillText(S,d+o/2,f+a/2+(_-(m.length-1)/2)*a*.28))})}function qo(s){let e=288.15-.0065*Math.max(-500,Math.min(11e3,s)),n=101325*Math.pow(e/288.15,5.25588),i=n/(287.053*e);return{T:e,p:n,rho:i,a:Math.sqrt(1.4*287.053*e)}}var Ps=[{id:"SALVO",label:"SALVO (4 porte)"},{id:"COPPIE",label:"2 + 2 porte"},{id:"SEQ",label:"SEQUENZA 1-2-3-4"},{id:"SINGOLA",label:"1 porta"}],tp=le.waterCapacity/4,Uv=tp/1e3/1.25,Ov=.42,Sc=class{constructor(t){this.index=t,this.lever=0,this.reverseLever=0,this.reverse=0,this.running=!0,this.nh=70,this.np=100,this.pf=.06,this.shaftPower=0,this.torque=0,this.itt=500,this.ff=0,this.oilP=60,this.oilT=70,this.feathered=!1,this.fire=!1}update(t,e,n,i){if(!this.running){this.nh=He(this.nh,0,6,t),this.pf=0,this.np=He(this.np,this.feathered?0:20,15,t),this.shaftPower=0,this.torque=0,this.itt=He(this.itt,e+40,30,t),this.ff=0,this.oilP=He(this.oilP,0,20,t);return}let r=i?this.reverseLever:0;this.reverse=He(this.reverse,r,.8,t);let o=r>0?.05+.45*r:this.lever,a=.055+.945*Q(o,0,1),l=68+32*Math.pow(a,.6),c=l>this.nh?6.5+.12*(this.nh-66):11;this.nh=He(this.nh,l,c,t),this.pf=Q(Math.pow(Q((this.nh-68)/32,0,1),1/.6),0,1);let h=Q(1-(1-qo(n).rho/1.225)*.6,.5,1)*(1-Math.max(0,e-30)*.008);this.shaftPower=this.reverse>.02?0:this.pf*le.enginePower*h,this.np=He(this.np,this.pf>.08||!i?100:86,12,t),this.torque=this.pf*h*100/(this.np/100),this.itt=He(this.itt,e+470+330*this.pf*(1+(1-h)*.6),120,t),this.ff=115+540*this.pf,this.oilP=He(this.oilP,55+10*this.pf,10,t),this.oilT=He(this.oilT,62+25*this.pf,.3,t)}},Yo=class{constructor(){this.fuel=2300,this.tanks=[0,0,0,0],this.foamConc=le.foamCapacity,this.foamMix=[0,0,0,0],this.foamArmed=!1,this.flapIndex=0,this.flapPos=0,this.gearDown=!0,this.gearPos=1,this.probesCmd=!1,this.probePos=0,this.doorOpen=[0,0,0,0],this.doorCmd=[!1,!1,!1,!1],this.doorEmptyTime=[0,0,0,0],this.outflow=[0,0,0,0],this.dropMode=0,this.dropQueue=[],this.scoopPreset=1,this.engines=[new Sc(0),new Sc(1)],this.elevTrim=0,this.ailTrim=0,this.rudTrim=0,this.parkingBrake=!1,this.noseSteer=0,this.lights={nav:!0,beacon:!0,strobe:!0,landing:!1},this.events=[],this.warn={stall:!1,overspeed:!1,flapSpeed:!1,gearWater:!1,gearUpLand:!1,probeSpeed:!1,tanksFull:!1,lowFuel:!1,overweight:!1,master:!1,caution:!1},this.scoopedThisRun=0,this.totalDropped=0,this.overflowRate=0,this.time=0,this._wasScooping=!1,this._fullAnnounced=!1}emit(t,e,n="info"){this.events.push({type:t,text:e,level:n,t:this.time})}waterLiters(){return this.tanks[0]+this.tanks[1]+this.tanks[2]+this.tanks[3]}waterMass(){return this.waterLiters()*1+this.foamConc*1.05}totalMass(){return le.emptyMass+this.fuel+this.waterMass()}setFlaps(t){let e=le.flapDetents.length,n=Q(this.flapIndex+t,0,e-1);n!==this.flapIndex&&(this.flapIndex=n,this.emit("flaps",`Flap ${le.flapDetents[n]}\xB0`))}toggleGear(t){if(this.gearDown&&t&&t.out.onGround){this.emit("warn","Carrello bloccato: aereo a terra (sicurezza WOW)","caution");return}this.gearDown=!this.gearDown,this.emit("gear",this.gearDown?"Carrello: ESTRAZIONE":"Carrello: RETRAZIONE")}toggleProbes(t){this.probesCmd=!this.probesCmd,this.probesCmd&&t&&t.out.ias>le.vProbeMax*.514444&&this.emit("warn","Velocit\xE0 eccessiva per le sonde!","caution"),this.emit("probes",this.probesCmd?"Sonde: ESTESE":"Sonde: RETRATTE")}cycleDropMode(){this.dropMode=(this.dropMode+1)%Ps.length,this.emit("mode","Modalit\xE0 sgancio: "+Ps[this.dropMode].label)}cycleScoopPreset(){let t=[.25,.5,.75,1],e=(t.indexOf(this.scoopPreset)+1)%t.length;this.scoopPreset=t[e],this.emit("preset",`Quantit\xE0 di pescaggio preselezionata: ${Math.round(this.scoopPreset*100)}% (${Math.round(this.scoopPreset*le.waterCapacity)} L)`)}toggleFoam(){this.foamArmed=!this.foamArmed,this.emit("foam",this.foamArmed?"Schiumogeno: ARMATO":"Schiumogeno: DISINSERITO")}drop(){if(this.waterLiters()<5){this.emit("warn","Serbatoi vuoti","caution");return}let t=Ps[this.dropMode].id,e=this.time,n=[0,1,2,3].filter(i=>this.tanks[i]>5&&!this.doorCmd[i]);if(n.length){if(t==="SALVO")n.forEach(i=>this.dropQueue.push({i,t:e}));else if(t==="COPPIE"){let i=n.filter(a=>a<2),r=n.filter(a=>a>=2);(i.length?i:r).forEach(a=>this.dropQueue.push({i:a,t:e})),i.length&&r.length&&r.forEach(a=>this.dropQueue.push({i:a,t:e+.45}))}else t==="SEQ"?n.forEach((i,r)=>this.dropQueue.push({i,t:e+r*.32})):this.dropQueue.push({i:n[0],t:e});this.emit("drop","SGANCIO!","drop")}}addScoopedWater(t){if(t<=0)return this.overflowRate=0,0;let e=tp,n=this.waterLiters(),i=Math.min(le.waterCapacity,Math.max(this.scoopPreset*le.waterCapacity,n)),r=Math.max(0,Math.min(t,le.waterCapacity-n)),o=0;for(let a=0;a<4;a++){if(this.doorOpen[a]>.1)continue;let l=Math.min(r/4,e-this.tanks[a]);this.tanks[a]+=l,o+=l}return this.overflowRate=(t-o)/Math.max(1e-6,1/240),this.scoopedThisRun+=o,this.waterLiters()>=i-2&&this.probesCmd&&(this.probesCmd=!1,this.emit("scoopdone",`Quantit\xE0 raggiunta: ${Math.round(this.waterLiters())} L \u2014 sonde retratte automaticamente`,"good")),o}update(t,e){this.time+=t;let n=e.out,i=n.onGround||n.onWater,r=qo(e.pos.y).T-273.15+13;for(let p of this.engines)p.update(t,r,e.pos.y,i);let o=le.flapDetents[this.flapIndex];this.flapPos=He(this.flapPos,o,2.2,t),this.gearPos=He(this.gearPos,this.gearDown?1:0,1/11,t),this.probePos=He(this.probePos,this.probesCmd?1:0,1/1.8,t);for(let p=this.dropQueue.length-1;p>=0;p--){let v=this.dropQueue[p];this.time>=v.t&&(this.doorCmd[v.i]=!0,this.doorEmptyTime[v.i]=0,this.dropQueue.splice(p,1))}let a=Math.max(.05,n.nz)*9.80665;for(let p=0;p<4;p++){if(this.doorOpen[p]=He(this.doorOpen[p],this.doorCmd[p]?1:0,this.doorCmd[p]?5:1.6,t),this.outflow[p]=0,this.doorOpen[p]>.02&&this.tanks[p]>0){let v=this.tanks[p]/1e3/Uv+.12,g=Ov*this.doorOpen[p]*Math.sqrt(2*a*v),m=Math.min(this.tanks[p],g*1e3*t);this.tanks[p]-=m,this.outflow[p]=m/t,this.totalDropped+=m,this.tanks[p]<=.5&&(this.tanks[p]=0,this.foamMix[p]=0)}this.doorCmd[p]&&this.tanks[p]<=.5&&(this.doorEmptyTime[p]+=t,this.doorEmptyTime[p]>1.2&&(this.doorCmd[p]=!1))}if(this.foamArmed&&this.foamConc>0){for(let p=0;p<4;p++)if(this.tanks[p]>50&&this.foamMix[p]<1){let v=this.tanks[p]*.005*(1-this.foamMix[p]),g=Math.min(v,8*t,this.foamConc);this.foamConc-=g,this.foamMix[p]=Q(this.foamMix[p]+g/(this.tanks[p]*.005),0,1)}}let l=(this.engines[0].ff+this.engines[1].ff)/3600*t;this.fuel=Math.max(0,this.fuel-l),this.fuel<=0&&this.engines.forEach(p=>p.running=!1);let c=this.warn,h=n.ias/.514444;c.stall=n.stall,c.overspeed=h>le.vmo;let u=this.flapPos>1?le.vfe[le.flapDetents[Math.max(1,this.flapIndex)]]||125:999;c.flapSpeed=h>u+3,c.gearWater=this.gearPos>.5&&n.surfaceUnder==="water"&&n.radAlt<120&&n.vs<-.5&&!n.onGround&&!n.onWater,c.gearUpLand=this.gearPos<.99&&n.surfaceUnder==="land"&&n.radAlt<150&&this.flapPos>20&&n.vs<-.5,c.probeSpeed=this.probePos>.1&&h>le.vProbeMax;let d=this.waterLiters()>=le.waterCapacity-3;d&&!this._fullAnnounced&&(this._fullAnnounced=!0,this.emit("full","SERBATOI PIENI \u2014 ritrarre le sonde!","good")),this.waterLiters()<le.waterCapacity-300&&(this._fullAnnounced=!1),c.tanksFull=d&&this.probePos>.2,c.lowFuel=this.fuel<400,c.overweight=this.totalMass()>le.maxAfterScoop,c.master=c.stall||c.overspeed||c.gearWater||c.gearUpLand,c.caution=c.flapSpeed||c.probeSpeed||c.lowFuel||c.overweight||c.tanksFull;let f=n.scoopRate>20;f&&!this._wasScooping&&(this.scoopedThisRun=0,this.emit("scoop","Pescaggio in corso\u2026","info")),this._wasScooping=f}};var fe=(s,t,e=0)=>new D(e,t-it.hCG,s-it.sCG),Te=1.5,Mu={s:2.42,h:2.77,y:-.52};function Zn(s,{y:t=null,h:e=null},n,i){let r=Rs(s),o=t!==null?_c(s,t):xc(s,e),[a,l]=Wo(r,o),[c,h]=Wo(r,Math.min(1,o+.005)),u=h-l,d=-(c-a),f=Math.hypot(u,d)||1;return fe(s,l-d/f*n,i*(a-u/f*n))}var bc=class{constructor({quality:t="medium"}={}){this.group=new re,this.group.name="cockpit",this.static=new Map,this._mats(),this._shell(),this._frames(),this._floorBulkhead(),this._panel(),this._glareshield(),this._pedestal(),this._overhead(),this._yokes(),this._pedals(),this._seats(),this._details(),this._flush(),this.group.traverse(n=>{n.isMesh&&(n.receiveShadow=!0,n.castShadow=!1)}),this.eye=fe(Mu.s,Mu.h,Mu.y);let e=new So(16773340,1.6,3.2,1.6);e.position.copy(fe(2.3,3,0)),this.group.add(e),this.fill=e}_mats(){let t=(e,n=.8,i=0,r={})=>new we({color:e,roughness:n,metalness:i,envMapIntensity:.35,...r});this.M={wall:t(9079944,.88),wallDark:t(4474698,.85),panel:t(2830388,.75),black:t(1118739,.6),floor:t(2237994,.95),seat:t(2764081,.9),seatCushion:t(3882821,.95),metal:t(10133926,.35,.8),chrome:t(14080734,.15,1),frame:t(1974564,.6,.2),yoke:t(1579291,.5,.1),red:t(11866651,.5),yellowBlack:t(14200832,.5),white:t(15263976,.6),knobRed:t(12587024,.45),knobBlack:t(1052688,.4),visor:new we({color:1060888,roughness:.2,transparent:!0,opacity:.55,side:je}),needle:new Ve({color:15921906}),needleOrange:new Ve({color:16751120}),cabinDark:new Ve({color:658188,side:Qe})}}_add(t,e){this.static.has(e)||this.static.set(e,[]);let n=(t.index,t);n.attributes.uv||n.setAttribute("uv",new Kt(new Float32Array(n.attributes.position.count*2),2)),this.static.get(e).push(n)}_box(t,e,n,i,r,o=null){let a=new ie(t,e,n);o&&a.applyEuler(o),a.translate(i.x,i.y,i.z),this._add(a,r)}_cyl(t,e,n,i,r,o=null,a=12){let l=new _e(e,t,n,a);o&&l.applyEuler(o),l.translate(i.x,i.y,i.z),this._add(l,r)}_flush(){for(let[t,e]of this.static){let n=As(e.map(r=>(r.index,r)));n.computeVertexNormals();let i=new $(n,t);this.group.add(i)}this.static.clear()}_shell(){let{strips:t}=Xo({s0:.6,s1:3.98,inset:.05,inside:!0,cutWindows:!0});for(let e of t){let n=new $(e,this.M.wall);n.name="cockpitShell",this.group.add(n)}}_frames(){let e=(i,r=.03)=>{let o=new gs(new Wi(i),Math.max(4,i.length*2),r,6,!1);this._add(o,this.M.frame)};for(let i of[-1,1]){let r=v=>.93-(v-1.2)*.1,o=[],a=[],l=[],c=[];for(let v=.05;v<=r(1.2)+1e-6;v+=.05)o.push(Zn(1.2,{y:v},.035,i));for(let v=.05;v<=r(2.02)+1e-6;v+=.05)a.push(Zn(2.02,{y:v},.035,i));for(let v=1.2;v<=2.02+1e-6;v+=.05)l.push(Zn(v,{y:r(v)},.035,i));for(let v=1.2;v<=2.02+1e-6;v+=.05)c.push(Zn(v,{y:.032},.035,i));e(o,.025),e(a,.03),e(l,.04),e(c,.022);let h=[],u=[];for(let v=1.32;v<=2.04+1e-6;v+=.04)h.push(Zn(v,{h:2.43},.035,i));for(let v=2.43;v<=Ge(2.04)-.04+1e-6;v+=.05)u.push(Zn(2.04,{h:v},.035,i));e(h,.026),e(u,.03);let d=v=>Math.min(Ge(v)-.3,3.18);for(let[v,g]of[[2.13,2.66],[2.74,3.3]]){let m=[],S=[],_=[],x=[];for(let M=v;M<=g+1e-6;M+=.04)m.push(Zn(M,{h:2.43},.035,i)),S.push(Zn(M,{h:d(M)},.035,i));for(let M=2.43;M<=d(v)+1e-6;M+=.05)_.push(Zn(v,{h:M},.035,i));for(let M=2.43;M<=d(g)+1e-6;M+=.05)x.push(Zn(g,{h:M},.035,i));e(m,.028),e(S,.026),e(_,.028),e(x,.028)}let f=[];for(let[v,g]of[[2.12,.42],[2.12,.78],[2.6,.78],[2.6,.42],[2.12,.42]])f.push(Zn(v,{y:g},.035,i));let p=[];for(let v=0;v<f.length-1;v++)for(let g=0;g<6;g++)p.push(f[v].clone().lerp(f[v+1],g/6));e(p,.02),this._box(.03,.04,.16,Zn(2.4,{h:2.5},.035+.04,i),this.M.metal)}}_floorBulkhead(){let t=new ke(2.3,3.2);t.rotateX(-Math.PI/2),t.translate(0,Te-it.hCG,2.35-it.sCG),this._add(t,this.M.floor),this._box(2.2,.38,.03,fe(1.42,Te+.19,0),this.M.wallDark);let e=3.96;this._box(.82,1.9,.04,fe(e,Te+.95,-.77),this.M.wall),this._box(.82,1.9,.04,fe(e,Te+.95,.77),this.M.wall),this._box(.72,.35,.04,fe(e,Te+1.72,0),this.M.wall);let n=new $(new ie(2.5,2.4,3),this.M.cabinDark);n.position.copy(fe(e+1.52,Te+.9,0)),this.group.add(n),this._box(1.6,1.2,.05,fe(e+2.8,Te+.3,0),this.M.wallDark),this._cyl(.06,.06,.42,fe(3.85,Te+.35,-.95),this.M.red),this._cyl(.02,.02,.08,fe(3.85,Te+.6,-.95),this.M.black)}_panel(){let t=14*Yt,e=fe(1.62,2.16,0),n=new re;n.position.copy(e),n.rotation.x=-t,this.group.add(n),this.panelGroup=n;let i=document.createElement("canvas");i.width=2048,i.height=640;let r=i.getContext("2d");r.fillStyle="#2d3236",r.fillRect(0,0,i.width,i.height),r.strokeStyle="#1a1d20",r.lineWidth=5;let o=E=>(E+1)/2*i.width,a=E=>(.31-E)/.64*i.height;for(let[E,C]of[[-.98,-.16],[-.15,.15],[.16,.98]])r.strokeRect(o(E),a(.3),o(C)-o(E),a(-.32)-a(.3));r.fillStyle="#c8c8c8",r.font="bold 22px Arial",r.textAlign="center";let l=(E,C,L,P=22)=>{r.font=`bold ${P}px Arial`,r.fillText(E,o(C),a(L))};l("ENG 1",-.06,.28),l("ENG 2",.06,.28),l("CAPTAIN",-.5,.28),l("FIRST OFFICER",.53,.28),l("WATER",.24,.28),l("GEAR",-.24,-.17,18),l("AMPHIBIAN GEAR",-.24,-.305,13),l("RAD ALT",-.2,.2,14),l("RAD ALT",.83,.2,14);for(let[E,C,L]of[["TQ",-.13,.18],["ITT",-.13,.09],["NH",-.13,0],["NP",-.13,-.09],["FF",-.13,-.18]])l(E,C,L-.01,14);l("FLAP",.205,-.045,13),l("HYD",.29,-.045,13),l("FUEL",.205,-.145,13),l("G",.29,-.145,13);let c=new dn(i);c.colorSpace=Ne,c.anisotropy=8;let h=new Xi;h.moveTo(-.97,-.33),h.lineTo(.97,-.33),h.lineTo(.97,.18),h.quadraticCurveTo(.95,.31,.8,.31),h.lineTo(-.8,.31),h.quadraticCurveTo(-.95,.31,-.97,.18),h.closePath();let u=new go(h,8),d=u.attributes.uv,f=u.attributes.position;for(let E=0;E<d.count;E++)d.setXY(E,(f.getX(E)+1)/2,(f.getY(E)+.33)/.64);let p=new $(u,new we({map:c,roughness:.8,envMapIntensity:.3}));n.add(p);let v=new $(new ie(1.94,.64,.12),this.M.panel);v.position.set(0,-.01,-.065),n.add(v);let g=new Mc;this.atlas=g;let m=new Ve({map:g.texture}),S=new Ve({map:g.texture,transparent:!0});this.gauges={};let _=(E,C=.006,L=this.M.needle,P=.15)=>{let F=new ie(C,E*(1+P),.002);return F.translate(0,E*(1-P)/2,0),new $(F,L)},x=(E,C,L,P,F,U=[])=>{let O=new re;O.position.set(L,P,.004),n.add(O),C&&O.add(new $(g.disc(C,F),m));let X=new $(g.disc("bezel",F*1.16),S);X.position.z=.006,O.add(X);let H=new _e(F*1.16,F*1.16,.03,24);H.rotateX(Math.PI/2),H.translate(0,0,-.012),O.add(new $(H,this.M.black));let W=U.map(([ft,ct,Ct])=>{let Bt=new re;return Bt.position.z=.004,Bt.add(_(F*ft,ct,Ct)),O.add(Bt),Bt}),G=new $(new fn(F*.08,12),this.M.black);return G.position.z=.006,O.add(G),this.gauges[E]={grp:O,ns:W},this.gauges[E]},M=(E,C)=>{x(E+"asi","asi",C-.16,.13,.056,[[.85,.008]]);let L=new re;L.position.set(C,.13,.004),n.add(L);let P=Jf();L.add(new $(new fn(.068,48),P));let F=new $(g.disc("adiOverlay",.068),S);F.position.z=.003,L.add(F);let U=new $(g.disc("bezel",.08),S);U.position.z=.006,L.add(U),this.gauges[E+"adi"]={mat:P},x(E+"alt","alt",C+.16,.13,.056,[[.86,.007],[.55,.012],[.92,.003,this.M.needleOrange]]);let O=x(E+"tc","tcFace",C-.16,-.03,.046,[]),X=new $(g.disc("tcPlane",.046),S);X.position.z=.004,O.grp.add(X),O.plane=X;let H=new $(new In(.0055,10,8),this.M.black);H.position.set(0,-.046*.4-.046*.9*-1+-.046*.9,.005),O.grp.add(H),O.ball=H;let W=x(E+"hsi",null,C,-.035,.066,[]),G=new $(g.disc("hsiCard",.06),m);G.position.z=.001,W.grp.add(G);let ft=new $(g.disc("hsiOverlay",.06),S);ft.position.z=.004,W.grp.add(ft),W.card=G,x(E+"vsi","vsi",C+.16,-.03,.05,[[.85,.008]])};M("c_",-.5),M("f_",.53),x("c_radalt","radalt",-.2,.13,.044,[[.85,.007]]),x("f_radalt","radalt",.83,.13,.044,[[.85,.007]]),x("clock","clock",-.84,0,.036,[[.6,.006],[.85,.004],[.9,.0025,this.M.needleOrange]]),x("gmeter","g",-.2,-.03,.036,[[.85,.006]]);for(let[E,C]of[["torque",.18],["itt",.09],["nh",0],["np",-.09],["ff",-.18]])x(E+"1",E,-.06,C,.036,[[.85,.006]]),x(E+"2",E,.06,C,.036,[[.85,.006]]);x("flaps","flaps",.205,0,.034,[[.85,.007]]),x("hyd","hyd",.29,0,.034,[[.85,.006],[.75,.006,this.M.needleOrange]]),x("fuel","fuel",.205,-.1,.034,[[.85,.006],[.75,.006,this.M.needleOrange]]),x("gfo","g",.29,-.1,.034,[[.85,.006]]),this.waterDisplay=new Er(384,256,Kf);let b=new $(new ke(.15,.1),new Ve({map:this.waterDisplay.texture}));b.position.set(.245,.17,.006),n.add(b),this.annunciator=new Er(512,256,jf);let w=new $(new ke(.2,.1),new Ve({map:this.annunciator.texture}));w.position.set(.245,-.235,.006),n.add(w);let y=new re;y.position.set(-.27,-.25,.01),n.add(y);let T=new ie(.012,.012,.09);T.translate(0,0,.045),y.add(new $(T,this.M.chrome));let R=new $(new _e(.022,.022,.012,16),this.M.white);R.rotation.x=Math.PI/2,R.position.z=.09,y.add(R),this.gearLever=y,this.gearLights=[];for(let E=0;E<3;E++){let C=new $(new fn(.011,14),new Ve({color:663562}));C.position.set(-.2+(E===0?.025:E===1?0:.05),-.21-(E===0?0:.035),.006),n.add(C),this.gearLights.push(C)}for(let E=0;E<10;E++){let C=new $(new _e(.004,.006,.03,8),this.M.chrome);C.rotation.x=Math.PI/2+.4,C.position.set(-.75+E*.05,-.28,.02),n.add(C)}}_glareshield(){let t=new Xi;t.moveTo(-.96,0),t.lineTo(.96,0),t.lineTo(.86,.24),t.quadraticCurveTo(0,.33,-.86,.24),t.closePath();let e=new fo(t,{depth:.025,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});e.rotateX(-Math.PI/2),e.translate(0,2.475-it.hCG,1.64-it.sCG),this._add(e,this.M.black),this._box(1.9,.045,.05,fe(1.635,2.462,0),this.M.black),this.masterLights=[];for(let r of[-1,1])for(let[o,a]of[[0,4198416],[1,4206608]]){let l=new $(new ie(.05,.03,.012),new Ve({color:a}));l.position.copy(fe(1.665,2.455,r*(.72-o*.07))),l.rotation.x=-.3,this.group.add(l),this.masterLights.push({m:l,kind:o})}this.dropDisplay=new Er(256,128,Qf);let n=new $(new ke(.16,.08),new Ve({map:this.dropDisplay.texture}));n.position.copy(fe(1.56,2.535,0)),n.rotation.x=-1.05,this.group.add(n),this._box(.18,.05,.1,fe(1.55,2.5,0),this.M.black),this._box(.09,.07,.07,fe(2,Ge(2)-.16,0),this.M.black);let i=new $(new fn(.025,16),new Ve({color:13682848}));i.position.copy(fe(2.036,Ge(2)-.16,0)),this.group.add(i);for(let r of[-1,1]){let o=new $(new ke(.42,.2),this.M.visor);o.position.copy(fe(2.05,Ge(2.05)-.17,r*.48)),o.rotation.x=-1,this.group.add(o)}}_pedestal(){this._box(.36,.5,2.95-1.72,fe((1.72+2.95)/2,Te+.25+0,0),this.M.panel);let n=new ie(.36,.04,2.95-1.72);n.rotateX(.06),n.translate(0,Te+.5-it.hCG,(1.72+2.95)/2-it.sCG),this._add(n,this.M.panel);let i=document.createElement("canvas");i.width=256,i.height=768;let r=i.getContext("2d");r.fillStyle="#25292d",r.fillRect(0,0,256,768);let o=(m,S,_,x)=>{r.fillStyle="#1b1e21",r.fillRect(10,m,236,S),r.fillStyle="#c8c8c8",r.font="bold 15px Arial",r.textAlign="left",r.fillText(_,18,m+20),r.fillStyle="#ff9a1a",r.font="22px monospace",x.forEach((M,b)=>r.fillText(M,18,m+46+b*26))};o(20,110,"COM 1   COM 2",["122.80  123.45"]),o(140,110,"NAV 1   ADF",["110.30  353"]),o(260,90,"XPDR",["7000  ALT"]),o(360,130,"ELEV TRIM   AIL TRIM",[""]),o(500,120,"FIRE / WATER",["DROP ARM","FOAM INJ"]);let a=new dn(i);a.colorSpace=Ne;let l=new $(new ke(.34,1),new we({map:a,roughness:.8,envMapIntensity:.3}));l.rotation.x=-Math.PI/2+.06,l.position.copy(fe(2.38,Te+.525,0)),this.group.add(l),this.powerLevers=[],this.condLevers=[];for(let[m,S]of[[0,-.045],[1,.045]]){let _=new re;_.position.copy(fe(2.08,Te+.52,S)),this.group.add(_);let x=new ie(.012,.2,.018);x.translate(0,.1,0),_.add(new $(x,this.M.chrome));let M=new $(new ie(.06,.04,.035),this.M.knobBlack);M.position.y=.21,_.add(M),this.powerLevers.push(_);let b=new re;b.position.copy(fe(2.25,Te+.52,S*2.7)),this.group.add(b);let w=new ie(.01,.15,.014);w.translate(0,.075,0),b.add(new $(w,this.M.chrome));let y=new $(new _e(.018,.018,.04,10),this.M.knobRed);y.rotation.z=Math.PI/2,y.position.y=.155,b.add(y),b.rotation.x=-.4,this.condLevers.push(b)}let c=new re;c.position.copy(fe(2.5,Te+.53,.11)),this.group.add(c);let h=new ie(.012,.14,.012);h.translate(0,.07,0),c.add(new $(h,this.M.chrome));let u=new $(new ie(.06,.018,.04),this.M.white);u.position.y=.145,c.add(u),this.flapLever=c;let d=new re;d.position.copy(fe(2.5,Te+.36,-.19)),this.group.add(d);let f=new $(new _e(.13,.13,.03,32),this.M.black);f.rotation.z=Math.PI/2,d.add(f);for(let m=0;m<16;m++){let S=new $(new ie(.035,.012,.012),this.M.white),_=m/16*Math.PI*2;S.position.set(0,Math.cos(_)*.13,Math.sin(_)*.13),d.add(S)}this.trimWheel=d;let p=new re;p.position.copy(fe(2.78,Te+.56,-.08)),this.group.add(p);let v=new $(new _e(.022,.026,.03,16),this.M.knobBlack);p.add(v);let g=new $(new ie(.005,.031,.02),this.M.white);g.position.set(0,.001,-.012),p.add(g),this.dropSelector=p,this._box(.04,.012,.06,fe(2.78,Te+.55,.08),this.M.red)}_overhead(){let t=document.createElement("canvas");t.width=1024,t.height=1024;let e=t.getContext("2d");e.fillStyle="#2b3034",e.fillRect(0,0,1024,1024);let n=[["ELECTRICAL",40,40],["FUEL",540,40],["ENGINE START",40,300],["ANTI-ICE",540,300],["LIGHTS",40,560],["HYDRAULIC",540,560],["FIRE",40,800],["WATER SYSTEM",540,800]];for(let[h,u,d]of n){e.strokeStyle="#d0d0d0",e.lineWidth=3,e.strokeRect(u,d,440,220),e.fillStyle="#2b3034",e.fillRect(u+20,d-12,h.length*15+20,24),e.fillStyle="#e0e0e0",e.font="bold 22px Arial",e.fillText(h,u+30,d+8),e.font="14px Arial";for(let f=0;f<6;f++)e.fillText(["BATT","GEN 1","GEN 2","INV","BUS","EXT"][f],u+30+f*70,d+200)}e.fillStyle="#c01010",e.fillRect(90,850,120,60),e.fillRect(300,850,120,60),e.fillStyle="#fff",e.font="bold 22px Arial",e.fillText("ENG 1",112,888),e.fillText("ENG 2",322,888);let i=new dn(t);i.colorSpace=Ne;let r=new re;r.position.copy(fe(2.55,Ge(2.55)-.12,0)),r.rotation.x=Math.PI/2+.12,this.group.add(r);let o=new $(new ke(.6,.72),new we({map:i,roughness:.8,envMapIntensity:.3}));r.add(o);let a=new $(new ie(.62,.74,.1),this.M.panel);a.position.z=-.052,r.add(a);let l=[];for(let h=0;h<4;h++)for(let u=0;u<6;u++)for(let d of[0,1]){let f=-.27+d*.3+u*.042,p=.3-h*.175-.07,v=new _e(.003,.004,.022,6);v.rotateX(Math.PI/2+(Math.random()<.6?.4:-.4)),v.translate(f,p,.012),l.push(v)}let c=new $(As(l.map(h=>(h.attributes.uv,h))),this.M.chrome);r.add(c)}_yokes(){this.yokes=[];for(let t of[-1,1]){let e=new re;e.position.copy(fe(1.98,Te+.02,t*.52)),this.group.add(e);let n=new _e(.03,.04,.62,12);n.translate(0,.31,0);let i=new $(n,this.M.yoke);i.rotation.x=.28,e.add(i);let r=new $(new _e(.05,.08,.12,12),this.M.black);r.position.y=.06,e.add(r);let o=new re;o.position.set(0,.6,.17),e.add(o);let a=new $(new ie(.1,.07,.05),this.M.yoke);o.add(a);let l=new $(new ie(.32,.03,.035),this.M.yoke);l.position.y=-.01,o.add(l);for(let f of[-1,1]){let p=new $(new _e(.018,.02,.15,10),this.M.yoke);p.position.set(f*.165,.05,0),p.rotation.z=-f*.18,o.add(p);let v=new $(new In(.02,10,8),this.M.yoke);v.position.set(f*.18,.125,0),o.add(v)}let c=new $(new _e(.009,.009,.01,10),this.M.knobRed);c.position.set(-.18,.138,0),o.add(c);let h=new $(new ie(.012,.01,.012),this.M.yellowBlack);h.position.set(.18,.12,.018),o.add(h);let u=new $(new fn(.022,16),this.M.metal);u.position.z=.026,o.add(u);let d=new $(new ke(.09,.06),this.M.white);d.position.set(0,.06,.027),o.add(d),this.yokes.push({col:e,wheel:o})}}_pedals(){this.pedals=[];for(let t of[-1,1])for(let e of[-1,1]){let n=new re;n.position.copy(fe(1.55,Te+.42,t*.52+e*.12)),this.group.add(n);let i=new ie(.03,.28,.025);i.translate(0,-.14,0),n.add(new $(i,this.M.metal));let r=new $(new ie(.09,.15,.02),this.M.black);r.position.set(0,-.25,.03),r.rotation.x=-.5,n.add(r),this.pedals.push({pv:n,lr:e,side:t})}}_seats(){for(let t of[-1,1]){let e=t*.52;this._box(.42,.06,.6,fe(2.55,Te+.03,e),this.M.metal),this._box(.3,.32,.36,fe(2.5,Te+.22,e),this.M.seat);let n=new ie(.5,.11,.5);n.translate(e,Te+.42-it.hCG,2.4-it.sCG),this._add(n,this.M.seatCushion);let i=new ie(.5,.78,.12);i.translate(0,.39,0),i.rotateX(.2),i.translate(e,Te+.46-it.hCG,2.68-it.sCG),this._add(i,this.M.seatCushion);let r=new ie(.28,.2,.12);r.translate(0,.9,0),r.rotateX(.2),r.translate(e,Te+.46-it.hCG,2.7-it.sCG),this._add(r,this.M.seat);for(let o of[-1,1]){let a=new ie(.06,.06,.36);a.translate(e+o*.26,Te+.68-it.hCG,2.45-it.sCG),this._add(a,this.M.seat)}for(let o of[-1,1]){let a=fe(2.74,Te+1.12,e+o*.1),l=fe(2.62,Te+.5,e+o*.16);this._add(Tn(a,l,.022,.022,4,.3),this.M.knobBlack)}}}_details(){for(let i of[-1,1])this._box(.22,.42,1.2,fe(2.55,Te+.62,i*.98),this.M.panel);let t=new re;t.position.copy(fe(2.2,Te+.86,-.95)),this.group.add(t);let e=new $(new _e(.07,.07,.02,20),this.M.black);t.add(e);let n=new $(new _e(.012,.012,.06,8),this.M.black);n.position.set(.05,.04,0),t.add(n),this.tiller=t;for(let i of[-1,1]){let r=new $(new ms(.08,.012,6,16,Math.PI),this.M.black);r.position.copy(fe(3.1,2.62,i*1.02)),r.rotation.y=Math.PI/2,this.group.add(r)}this._box(.04,.25,.3,fe(3.05,Te+.75,-1.06),this.M.black)}update(t,e,n,i){let r=e.out,o=this.gauges,a=(m,S,_)=>{m&&m.ns[S]&&(m.ns[S].rotation.z=-_*Yt)},l=r.ias/.514444,c=r.alt/.3048,h=r.vs/.00508;for(let m of["c_","f_"]){a(o[m+"asi"],0,Pe.asi(l));let S=o[m+"adi"];S.mat.uniforms.pitch.value=r.pitch,S.mat.uniforms.roll.value=-r.roll,a(o[m+"alt"],0,c%1e3/1e3*360),a(o[m+"alt"],1,c%1e4/1e4*360),a(o[m+"alt"],2,c%1e5/1e5*360),a(o[m+"vsi"],0,Pe.vsi(h));let _=o[m+"tc"];_.plane.rotation.z=-Q(r.turnRate/(3*Yt)*20,-35,35)*Yt;let x=Q(-r.ny*3.2,-1,1)*.36,M=.046*.9;_.ball.position.set(Math.sin(x)*M,.046*.4-Math.cos(x)*M,.006),o[m+"hsi"].card.rotation.z=r.heading,a(o[m+"radalt"],0,Pe.radalt(Math.max(0,r.radAlt/.3048)))}let u=new Date;a(o.clock,0,(u.getHours()%12+u.getMinutes()/60)*30),a(o.clock,1,u.getMinutes()*6),a(o.clock,2,u.getSeconds()*6),a(o.gmeter,0,Pe.g(r.nz)),a(o.gfo,0,Pe.g(r.nz));for(let m=0;m<2;m++){let S=n.engines[m],_=m+1;a(o["torque"+_],0,Pe.torque(S.torque)),a(o["itt"+_],0,Pe.itt(S.itt)),a(o["nh"+_],0,Pe.nh(S.nh)),a(o["np"+_],0,Pe.np(S.np/100*le.propRPM)),a(o["ff"+_],0,Pe.ff(S.ff))}a(o.flaps,0,Pe.flaps(n.flapPos));let d=n.engines[0].running||n.engines[1].running?3e3:0;a(o.hyd,0,Pe.hyd(d)),a(o.hyd,1,Pe.hyd(d*.98)),a(o.fuel,0,Pe.fuel(n.fuel/2)),a(o.fuel,1,Pe.fuel(n.fuel/2-15));let f=e.ctl;for(let m of this.yokes)m.col.rotation.x=f.elevator*12*Yt,m.wheel.rotation.z=-f.aileron*70*Yt;for(let m of this.pedals)m.pv.position.z=fe(1.55,0,0).z+(m.lr<0?1:-1)*f.rudder*.05;for(let m=0;m<2;m++){let S=n.engines[m];this.powerLevers[m].rotation.x=(S.reverseLever>.02?32+12*S.reverseLever:28-60*S.lever)*Yt}this.flapLever.rotation.x=(-22+n.flapIndex/3*48)*Yt,this.trimWheel.rotation.x=n.elevTrim*8,this.gearLever.rotation.x=(n.gearDown?-25:25)*Yt,this.tiller.rotation.y=-(f.tiller||0)*1.5,this.dropSelector.rotation.y=-n.dropMode*40*Yt;let p=n.gearPos,v=p>.02&&p<.98;for(let m of this.gearLights)m.material.color.setHex(v?16719888:p>=.98?2162480:663562);let g=Math.floor(i*3)%2===0;for(let m of this.masterLights){let S=m.kind===0?n.warn.master:n.warn.caution;m.m.material.color.setHex(S&&g?m.kind===0?16719888:16755200:m.kind===0?4198416:4206608)}if(this._dispT=(this._dispT||0)+t,this._dispT>.1){this._dispT=0;let m=le.waterCapacity/4,S=n.foamMix.reduce((x,M)=>x+M,0)/4;this.waterDisplay.update({total:Math.round(n.waterLiters()/5)*5,tanks:n.tanks.map(x=>Math.round(x/m*20)/20),doors:n.doorOpen.map(x=>x>.1),foam:n.foamArmed,foamPct:Math.round(S*100),preset:Math.round(n.scoopPreset*100),scoop:r.scoopRate>20}),this.dropDisplay.update({mode:Ps[n.dropMode].id,doors:n.doorOpen.map(x=>x>.1),armed:n.waterLiters()>10});let _=n.warn;this.annunciator.update({stall:_.stall,overspeed:_.overspeed,gearWater:_.gearWater&&g,gearUpLand:_.gearUpLand&&g,probes:n.probePos>.5,probeSpeed:_.probeSpeed,tanksFull:n.waterLiters()>le.waterCapacity-5,doors:n.doorOpen.some(x=>x>.1),flapSpeed:_.flapSpeed,lowFuel:_.lowFuel,overweight:_.overweight,foam:n.foamArmed,park:n.parkingBrake,eng1:!n.engines[0].running,eng2:!n.engines[1].running,rev:n.engines.some(x=>x.reverse>.1)})}}};var se=D,ep=5.05,Bv=-3.9*Yt,np=4.3,ip=3,zv=Math.PI*(le.propDiameter/2)**2,sp=le.propRPM/60*2*Math.PI,rp=30500,op=.86,kv=95,ap=s=>1/(1+Math.exp(-s));function Hv(s,t,e){let n=.82*e;if(s>n)return n+(e-n)*(1-Math.exp(-(s-n)/(e-n)));let i=.82*t;return s<i?i+(t-i)*(1-Math.exp(-(s-i)/(t-i))):s}function bu(s,t,e,n,i,r,o,a){let l=i*(s-r)+t,c=r+(e-t)/i+1.8*Yt,h=r+(n-t)/i-1.8*Yt,u=1.25*Yt,d=ap((s-c)/u),f=ap((h-s)/u),p=Q(d+f,0,1),v=Math.sin(2*s),g=Math.sin(s),m=1.05*v+.3*t*Math.cos(s),S=.06+1.22*g*g,_=Hv(l,n,e);return a.cl=(1-p)*_+p*m,a.cd=(1-p)*(o+.006*_*_)+p*S,a.sep=p,a.margin=Math.min(c-s,s-h),a}var wc=class{constructor(t){this.world=t,this.pos=new se,this.vel=new se,this.quat=new nn,this.omega=new se,this.cg=new se,this.mass=le.emptyMass,this.inertia=new se(17e4,35e4,24e4),this.time=0,this.accum=0,this.dt=1/240,this.surf={elev:0,ail:0,rud:0,flap:0},this.ctl={elevator:0,aileron:0,rudder:0,brakeL:0,brakeR:0,tiller:0},this.sys=null,this.crash=null,this.damage=0,this.out=this._makeOut(),this._buildElements(),this._tmp={f:new se,m:new se,r:new se,v:new se,w:new se,a:new se,b:new se,c:new se,d:new se,n:new se,q:new nn,qi:new nn,wind:new se,vAir:new se,vAirB:new se,up:new se,fwd:new se,right:new se,coef:{cl:0,cd:0,sep:0}},this.prevCLw=.3,this.sprayPoints=[];for(let e=0;e<64;e++)this.sprayPoints.push({x:0,y:0,z:0,intensity:0,vx:0,vz:0,side:0,s:0});this.sprayCount=0}_makeOut(){return{ias:0,tas:0,gs:0,mach:0,alt:0,agl:0,radAlt:0,vs:0,heading:0,pitch:0,roll:0,alpha:0,beta:0,nz:1,ny:0,slip:0,rho:1.225,onWater:!1,onGround:!1,planing:!1,hullDepth:0,wetLength:0,waterSpeed:0,scoopRate:0,probeImmersion:0,stall:!1,stallMargin:1,thrust:[0,0],gearLoad:[0,0,0],gearCompress:[0,0,0],wheelSpeed:[0,0,0],impact:0,gearInWater:!1,wingtipWater:0,overG:0,turnRate:0,track:0,propWash:[0,0],clWing:0,surfaceUnder:"water",groundBelow:0,waterBelow:0,ge:0}}_buildElements(){let t=it.wing;this.wingStrips=[];let e=8,n=t.halfSpan-t.rootY;for(let f of[-1,1])for(let p=0;p<e;p++){let v=t.rootY+n*p/e,g=t.rootY+n*(p+1)/e,m=(v+g)/2,S=g-v,_=Q((Math.min(g,t.flapEnd)-Math.max(v,t.flapStart))/S,0,1),x=Q((Math.min(g,t.ailEnd)-Math.max(v,t.ailStart))/S,0,1),M=p===e-1?.84:p===e-2?.95:1;this.wingStrips.push({side:f,y0:v,y1:g,yc:m,width:S,area:S*t.chord,pos:new se().copy(pn(t.sLE+.25*t.chord,t.h,f*m)),flapFrac:_,ailFrac:x,tipLoss:M,spoiler:m>5.5&&m<9.6?1:0,slipCov:[0,0]})}let i=.86*le.propDiameter/2,r=[-it.engine.y,it.engine.y];for(let f of this.wingStrips)for(let p=0;p<2;p++){let v=Math.max(f.side*f.y0,f.side*f.y1),g=Math.min(f.side*f.y0,f.side*f.y1),S=Math.min(v,r[p]+i)-Math.max(g,r[p]-i);f.slipCov[p]=Q(S/f.width,0,1)}let o=it.htail;this.htStrips=[];for(let f of[-1,1])for(let p=0;p<2;p++){let v=o.halfSpan*p/2,g=o.halfSpan*(p+1)/2,m=(v+g)/2,S=m/o.halfSpan,_=o.rootChord+(o.tipChord-o.rootChord)*S,x=o.sLE+o.sweepLE*S,M=Math.abs(m-it.engine.y)<1.9?.75:Math.abs(m-it.engine.y)<2.6?.35:0;this.htStrips.push({side:f,yc:m,chord:_,area:(g-v)*_,pos:new se().copy(pn(x+.25*_,o.h,f*m)),slip:M,eng:f<0?0:1})}let a=it.vtail;this.vtStrips=[];for(let f=0;f<2;f++){let p=a.hRoot+(a.hTip-a.hRoot)*f/2,v=a.hRoot+(a.hTip-a.hRoot)*(f+1)/2,g=(p+v)/2,m=(g-a.hRoot)/(a.hTip-a.hRoot),S=a.rootChord+(a.tipChord-a.rootChord)*m,_=a.sRootLE+(a.sTipLE-a.sRootLE)*m;this.vtStrips.push({area:(v-p)*S*.86,pos:new se().copy(pn(_+.25*S,g,0)),rudder:1})}for(let f of[-1,1])this.vtStrips.push({area:1.55,pos:new se().copy(pn(o.sLE+.55+.35,o.h+.2,f*o.finletY)),rudder:0,finlet:f});this.engines=[-1,1].map(f=>({pos:new se().copy(pn(it.engine.sProp,it.engine.h,f*it.engine.y)),vi:0,thrust:0,side:f})),this.hullSamples=[];let l=.5;for(let f=.35;f<19.3;f+=l){let p=$e(f),v=is(f),g=Ho(f),m=oi(f),S=($e(f+.05)-$e(f-.05))/.1;for(let _ of[-1,1]){let x=pn(f,p+(g-p)*.5,_*v*.5),M=new se(_*Math.sin(m),-Math.cos(m),S*Math.cos(m)).normalize();this.hullSamples.push({s:f,side:_,ds:l,keel:p,chineRel:Math.max(g-p,.02),hb:v,beta:m,tanb:Math.tan(m),pos:new se(x.x,x.y,x.z),n:M,fore:f<it.sStep,depth:0})}}let c=it.float;this.floatSamples=[];for(let f of[-1,1])for(let p=0;p<3;p++){let v=c.sFront+.6+p*1.15,g=c.width/2,m=25*Yt;for(let S of[-1,1]){let _=pn(v,c.hBottom+.12,f*c.y+S*g*.5);this.floatSamples.push({s:v,side:S,fside:f,ds:1.15,keel:c.hBottom,chineRel:g*Math.tan(m),hb:g,beta:m,tanb:Math.tan(m),pos:new se(_.x,_.y,_.z),n:new se(S*Math.sin(m),-Math.cos(m),p===0?-.25:0).normalize(),fore:!0,depth:0,sideH:c.height})}}this.structPoints=[];let h=(f,p,v,g)=>this.structPoints.push({pos:new se().copy(pn(f,p,v)),kind:g});for(let f of[.4,1.2,2.5,4.5,6.5,8.9,10.5,13,15.5,17.5,19.2])h(f,$e(f),0,"hull");h(it.float.sFront+1.5,it.float.hBottom,-it.float.y,"float"),h(it.float.sFront+1.5,it.float.hBottom,it.float.y,"float"),h(it.wing.sLE+1.2,it.wing.h,-it.wing.halfSpan,"wingtip"),h(it.wing.sLE+1.2,it.wing.h,it.wing.halfSpan,"wingtip"),h(it.vtail.sRootLE+4,2.7,0,"tail"),this.propTipLow=it.engine.h-le.propDiameter/2;let u=it.gear.nose,d=it.gear.main;this.gearPts=[{name:"nose",pos:new se().copy(pn(u.s,u.pivotH-u.legLen,0)),r:u.wheelR,k:26e4,c:32e3,travel:.3,steer:!0,drag:.32},{name:"left",pos:new se().copy(pn(d.s,d.wheelH,-d.wheelY)),r:d.wheelR,k:56e4,c:65e3,travel:.35,brake:"L",drag:.55},{name:"right",pos:new se().copy(pn(d.s,d.wheelH,d.wheelY)),r:d.wheelR,k:56e4,c:65e3,travel:.35,brake:"R",drag:.55}];for(let f of this.gearPts)f.comp=0,f.load=0,f.spin=0;this.probes=[-1,1].map(f=>({side:f,root:new se().copy(pn(it.probe.s,$e(it.probe.s)+it.probe.y*Math.tan(oi(it.probe.s)),f*it.probe.y)),tip:new se,immersion:0}))}reset(t,e,n=0,i="air"){this.crash=null,this.damage=0,this.time=0,this.accum=0,this.omega.set(0,0,0),this._updateMass(!0);let r=i==="runway"?.4*Yt:i==="water"?1.5*Yt:2.5*Yt;if(this.quat.setFromEuler(new Pn(r,e,0,"YXZ")),this.pos.copy(t),i==="runway"){let a=this.world.groundHeight(t.x,t.z);this.pos.y=a+it.hCG+this.cg.y-it.gear.main.wheelH+it.gear.main.wheelR-.12}else if(i==="water"){let a=this.world.waterHeight(t.x,t.z,0);this.pos.y=a+it.hCG+this.cg.y-(n>15?.25:.95)}let o=new se(0,0,-1).applyQuaternion(this.quat);this.vel.copy(o).multiplyScalar(n),this.vel.y=0;for(let a of this.gearPts)a.comp=0;this.prevCLw=.4}_updateMass(t=!1){let e=this.sys;if(!e)return;let n=e.waterMass(),i=e.fuel,r=le.emptyMass,o=r+n+i,a=pn(it.tankS,.25+it.tanksH*Q(n/6800,.15,1)*.6,0),l=pn(it.wing.sLE+1.6,it.wing.h,0),c=0,h=(n*a.y+i*l.y)/o,u=(n*a.z+i*l.z)/o,d=this._tmp?this._tmp.c.set(c,h,u):new se(c,h,u);if(!t){let p=this._tmp.d.copy(d).sub(this.cg).applyQuaternion(this.quat);this.pos.add(p)}this.cg.copy(d),this.mass=o;let f=o/r;this.inertia.set(168e3*(.75+.25*f)+n*1.2,35e4*(.8+.2*f)+i*22+n*1,24e4*(.85+.15*f)+i*25+n*.5)}update(t){this.accum+=Math.min(t,.1);let e=0;for(;this.accum>=this.dt&&e<40;)this.step(this.dt),this.accum-=this.dt,e++}step(t){if(this.crash){this.time+=t;return}let e=this.sys,n=this._tmp,i=this.world;this.time+=t,e.update(t,this),this._updateMass(!1);let r=this.ctl,o=(r.elevator>=0?r.elevator*26:r.elevator*17)+e.elevTrim*11;this.surf.elev=He(this.surf.elev,Q(o,-20,28),70,t),this.surf.ail=He(this.surf.ail,Q(r.aileron*18+e.ailTrim*4,-20,20),70,t),this.surf.rud=He(this.surf.rud,Q(r.rudder*25+e.rudTrim*8,-27,27),60,t),this.surf.flap=e.flapPos;let a=n.f.set(0,0,0),l=n.m.set(0,0,0),c=this.quat,h=n.qi.copy(c).invert(),u=this.out,d=qo(this.pos.y),f=d.rho;i.windAt(this.pos.x,this.pos.y,this.pos.z,this.time,n.wind);let p=n.vAir.copy(this.vel).sub(n.wind),v=n.vAirB.copy(p).applyQuaternion(h),g=p.length();u.rho=f;let m=i.groundHeight(this.pos.x,this.pos.z),S=i.waterHeight(this.pos.x,this.pos.z,this.time),_=Math.max(m,S);u.groundBelow=m,u.waterBelow=S,u.surfaceUnder=S>m?"water":"land";let x=this.pos.y+(it.wing.h-it.hCG-this.cg.y)-_,M=Q(x/le.span,.02,2),b=(16*M)**2/(1+(16*M)**2);u.ge=1-b;for(let bt=0;bt<2;bt++){let et=this.engines[bt],ot=e.engines[bt],ht=n.r.copy(et.pos).sub(this.cg),at=n.v.copy(this.omega).cross(ht).add(v),lt=Math.max(-at.z,0),At=0,Et=ot.shaftPower;if(ot.reverse>0)At=-rp*.42*ot.reverse*Q(1-lt/45,.15,1);else if(Et>1){let oe=Et/le.enginePower,jt=rp*Math.pow(oe,2/3),N=op*Et/(jt*(u.onGround||u.onWater?Math.max(.3,on(0,.12,ot.lever)):1));At=op*Et/Math.cbrt(lt*lt*lt+N*N*N),At-=.5*f*lt*lt*.3*Math.pow(1-Q(oe*3,0,1),2)}else At=-.5*f*lt*lt*(ot.feathered?.05:.3);At*=f/1.225>.6?1:f/1.225,et.thrust=At,u.thrust[bt]=At;let Ot=Math.max(At,0);et.vi=.5*(-lt+Math.sqrt(lt*lt+2*Ot/(f*zv))),u.propWash[bt]=lt+2*et.vi,n.a.set(0,0,-At),this._addBodyForce(n.a,ht,a,l,c);let Vt=Et/sp;l.z+=Vt*.9,l.y+=Ot*(.06+.5*Q(u.alpha,-.2,.3));let B=kv*sp*(ot.np/100);n.b.set(0,0,-B),n.a.copy(this.omega).cross(n.b),l.sub(n.a)}let w=this.surf.flap,y=w/25,T=.9*Math.pow(Q(y,0,1.2),.85),R=.0011*w+7e-5*w*w,E=this.surf.ail*Yt,C=0,L=.5*f*g*g,P=n.coef,F=le.aspect,U=1/(Math.PI*.8*F),O=b,X=1;for(let bt of this.wingStrips){let et=n.r.copy(bt.pos).sub(this.cg),ot=n.v.copy(this.omega).cross(et).add(v),ht=bt.ailFrac*E*(bt.side>0?-1:1),at=bt.spoiler*Q(((bt.side>0?1:-1)*this.surf.ail-4)/14,0,1),lt=bt.flapFrac*T+ep*.42*ht-.45*at,At=(1.6+1*bt.flapFrac*T)*bt.tipLoss,Et=-1.05;for(let Ot=0;Ot<2;Ot++){let Vt=0,B=0;if(Ot===0)Vt=1-Math.min(1,bt.slipCov[0]+bt.slipCov[1]);else{let Jt=bt.slipCov[0]>0?0:bt.slipCov[1]>0?1:-1;if(Jt<0)continue;Vt=bt.slipCov[Jt],B=1.55*this.engines[Jt].vi}if(Vt<=0)continue;let oe=-ot.z+B,jt=ot.y,N=oe*oe+jt*jt;if(N<.01)continue;let A=Math.sqrt(N),V=Math.atan2(-jt,oe)+it.wing.incidence+(bt.yc>9?-1.2*Yt:0);bu(V,lt,At,Et,ep*bt.tipLoss*(1+.08*(1-O)),Bv,.0085+R*bt.flapFrac+.03*at,P);let q=.5*f*N*bt.area*Vt,j=P.cl*P.cl*U*O*(1-P.sep),pt=q*P.cl,gt=q*(P.cd+j),tt=-jt/A,rt=oe/A,xt=-oe/A,Wt=-jt/A,vt=pt*tt+gt*xt,_t=pt*rt+gt*Wt;n.a.set(0,_t,-vt),this._addBodyForce(n.a,et,a,l,c);let Xt=-.085-.22*bt.flapFrac*T;l.x+=q*it.wing.chord*Xt*(1-P.sep*.5),C+=P.cl*bt.area*Vt*(N/Math.max(g*g,1)),V>0&&A>15&&bt.side!==0&&(X=Math.min(X,P.margin))}}let H=C/le.wingArea;u.clWing=H,this.prevCLw+=(H-this.prevCLw)*Q(t*8,0,1);let W=Q(2*this.prevCLw/(Math.PI*F)*1.05,-.1,.32)*(.45+.55*O),G=-this.surf.elev*Yt,ft=-1.3*Yt;for(let bt of this.htStrips){let et=n.r.copy(bt.pos).sub(this.cg),ot=n.v.copy(this.omega).cross(et).add(v),ht=bt.slip*1.25*this.engines[bt.eng].vi,at=-ot.z+ht,lt=ot.y,At=at*at+lt*lt;if(At<.01)continue;let Et=Math.sqrt(At),Ot=Math.atan2(-lt,at)+ft-W;bu(Ot,np*.55*G,1.25,-1.25,np,0,.009,P);let Vt=.5*f*At*bt.area*.95,B=P.cl*P.cl/(Math.PI*.85*5.3),oe=Vt*P.cl,jt=Vt*(P.cd+B),N=-lt/Et,A=at/Et,V=-at/Et,q=-lt/Et;n.a.set(0,oe*A+jt*q,-(oe*N+jt*V)),this._addBodyForce(n.a,et,a,l,c)}let ct=this.surf.rud*Yt;for(let bt of this.vtStrips){let et=n.r.copy(bt.pos).sub(this.cg),ot=n.v.copy(this.omega).cross(et).add(v),ht=0;bt.finlet&&(ht=1.1*this.engines[bt.finlet<0?0:1].vi);let at=-ot.z+ht,lt=ot.x,At=at*at+lt*lt;if(At<.01)continue;let Et=Math.sqrt(At),Ot=Math.atan2(-lt,at);bu(Ot,bt.rudder?-ip*.5*ct:0,1.15,-1.15,ip,0,.01,P);let Vt=.5*f*At*bt.area,B=P.cl*P.cl/(Math.PI*.85*1.8),oe=Vt*P.cl,jt=Vt*(P.cd+B),N=-lt/Et,A=at/Et,V=-at/Et,q=-lt/Et;n.a.set(oe*A+jt*q,0,-(oe*N+jt*V)),this._addBodyForce(n.a,et,a,l,c)}if(g>.5){let bt=-v.z,et=v.y,ot=v.x,ht=Math.atan2(-et,Math.max(bt,.1)),at=Math.asin(Q(ot/g,-1,1)),lt=3;lt*=1+2.5*Math.sin(ht)**2+3*Math.sin(at)**2,lt+=1.25*e.gearPos+.12*e.probePos;for(let Ot=0;Ot<4;Ot++)lt+=.22*e.doorOpen[Ot];n.a.copy(v).normalize().multiplyScalar(-L*lt),n.r.copy(pn(8,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let At=-L*8.5*Math.sin(at)*Math.cos(at);n.a.set(At,0,0),n.r.copy(pn(5.6,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let Et=L*2.4*Math.sin(ht)*Math.cos(ht);n.a.set(0,Et,0),n.r.copy(pn(3.6,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c),u.alpha=ht,u.beta=at}else u.alpha=0,u.beta=0;l.x-=.5*f*Math.max(g,5)*40*3.5*3.5*this.omega.x*1.2,l.y-=.5*f*Math.max(g,5)*60*4*4*this.omega.y*.8,l.z-=.5*f*Math.max(g,5)*20*this.omega.z,this.sprayCount=0,this._hydro(a,l,c,h,t),this._ground(a,l,c,h,t);let Ct=n.w.copy(a);a.y-=this.mass*9.80665;let Bt=n.a.copy(a).divideScalar(this.mass);this.vel.addScaledVector(Bt,t),this.pos.addScaledVector(this.vel,t);let Qt=this.inertia,J=this.omega,nt=n.b.set(J.x*Qt.x,J.y*Qt.y,J.z*Qt.z),mt=n.c.copy(J).cross(nt);J.x+=(l.x-mt.x)/Qt.x*t,J.y+=(l.y-mt.y)/Qt.y*t,J.z+=(l.z-mt.z)/Qt.z*t;let Gt=4;J.lengthSq()>Gt*Gt&&J.setLength(Gt);let Pt=n.q.set(J.x*t*.5,J.y*t*.5,J.z*t*.5,1);c.multiply(Pt).normalize();let St=Ct.applyQuaternion(h).divideScalar(this.mass*9.80665);u.nz=St.y,u.ny=St.x,u.slip=Q(-St.x*4,-1,1),u.overG=Math.max(u.nz-3.25,-1-u.nz,0),(u.nz>4.6||u.nz<-2.2)&&this._doCrash("Sovraccarico strutturale ("+u.nz.toFixed(1)+" g)"),this._outputs(g,f,d,X)}_addBodyForce(t,e,n,i,r){let o=this._tmp;i.x+=e.y*t.z-e.z*t.y,i.y+=e.z*t.x-e.x*t.z,i.z+=e.x*t.y-e.y*t.x,o.d.copy(t).applyQuaternion(r),n.add(o.d)}_addWorldForce(t,e,n,i,r){let o=this._tmp;n.add(t);let a=o.d.copy(t).applyQuaternion(r);i.x+=e.y*a.z-e.z*a.y,i.y+=e.z*a.x-e.x*a.z,i.z+=e.x*a.y-e.y*a.x}_pointVel(t,e,n){return n.copy(this.omega).cross(t).applyQuaternion(e).add(this.vel),n}_hydro(t,e,n,i,r){let o=this.world,a=this.out,l=this.sys,c=this._h||(this._h={rb:new se,pw:new se,vw:new se,vb:new se,fw:new se,fwd:new se,right:new se}),{rb:h,pw:u,vw:d,vb:f,fw:p}=c,v=0,g=99,m=-99,S=-9,_=0,x=Math.hypot(this.vel.x,this.vel.z),M=x/Math.sqrt(9.80665*2.6),b=.17*Math.pow(M/2.4,2)*Math.exp(1-Math.pow(M/2.4,2)),w=!1,y=(L,P)=>{h.copy(L.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let F=o.groundHeight(u.x,u.z),U=o.waterHeight(u.x,u.z,this.time);if(U<=F+.15){L.depth=-9;return}let X=U-u.y+.5*L.chineRel;if(L.depth=X,X<=0)return;w=!0,S=Math.max(S,X);let H=L.chineRel,W,G,ft=0;if(X<H){let St=X/L.tanb;W=.5*X*Math.min(St,L.hb),G=Math.min(St,L.hb)/Math.cos(L.beta)}else W=.5*H*L.hb+L.hb*(X-H),G=L.hb/Math.cos(L.beta),ft=X-H;if(P){let St=L.sideH||.8;X>St&&(W=.5*H*L.hb+L.hb*(St-H))}let ct=W*L.ds;v+=ct,P||(g=Math.min(g,L.s),m=Math.max(m,L.s)),p.set(0,998*9.80665*ct,0),this._addWorldForce(p,h,t,e,i),this._pointVel(h,n,d),f.copy(d).applyQuaternion(i);let Ct=f.dot(L.n),Bt=f.x-Ct*L.n.x,Qt=f.y-Ct*L.n.y,J=f.z-Ct*L.n.z,nt=Math.sqrt(Bt*Bt+Qt*Qt+J*J),mt=G*L.ds,Gt;if(Ct>0){let St=L.fore?.125:.08;Gt=998*mt*(St*nt*Ct+.55*Ct*Ct),X<.35&&(_=Math.max(_,-d.y))}else Gt=998*mt*.02*nt*Ct;if(p.copy(L.n).multiplyScalar(-Gt),nt>.01){let St=.002+7e-4*on(3,15,nt),bt=.5*998*St*(mt+ft*L.ds)*nt;p.x-=bt*Bt,p.y-=bt*Qt,p.z-=bt*J}let Pt=(Math.min(X,H)*.7+ft)*L.ds;if(p.x-=.5*998*1.1*Pt*Math.abs(f.x)*f.x,p.applyQuaternion(n),x>.3){let St=998*9.80665*ct*b;p.x-=St*this.vel.x/x,p.z-=St*this.vel.z/x}if(this._addWorldForce(p,h,t,e,i),this.sprayCount<this.sprayPoints.length&&nt>3){let St=this.sprayPoints[this.sprayCount++];St.x=u.x,St.y=U,St.z=u.z,St.intensity=Q(nt/30,0,1.5)*Q(X/.25,0,1),St.vx=d.x,St.vz=d.z,St.side=L.side,St.s=L.s,St.float=P?1:0}};for(let L of this.hullSamples)y(L,!1);for(let L of this.floatSamples)y(L,!0);a.onWater=w,a.hullDepth=Math.max(S,0),a.wetLength=m>g?m-g+.5:0,a.displaced=v,a.impact=_,a.planing=w&&x>13&&v*998<this.mass*.45,a.waterSpeed=w?x:0,w&&_>5.2&&this._doCrash(this._gearWaterT>0?"Ammaraggio con carrello estratto: capottamento":"Ammaraggio troppo duro ("+(_/.00508).toFixed(0)+" ft/min)"),a.wingtipWater=0;let T=0,R=0,E=l.probePos;for(let L of this.probes){if(L.tip.copy(L.root),L.tip.y-=.88*E,L.tip.z+=.12*E,L.immersion=0,E<.05)continue;h.copy(L.tip).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let P=o.waterHeight(u.x,u.z,this.time),F=o.groundHeight(u.x,u.z);if(F>u.y&&P<F+.1){x>3&&(this.damage=Math.min(1,this.damage+r*.5));continue}if(P<=F+.3)continue;let U=P-u.y;if(U<=0)continue;let O=Q(U/.32,0,1)*Q((E-.5)/.5,0,1);L.immersion=O,R=Math.max(R,O),this._pointVel(h,n,d),f.copy(d).applyQuaternion(i);let X=Math.max(-f.z,0),H=.0074*X*O,W=H*998;T+=H;let G=d.length(),ft=W*X,ct=.5*998*.0055*O*G*G;G>.1&&(p.copy(d).multiplyScalar(-(ft+ct)/G),this._addWorldForce(p,h,t,e,i))}let C=l.addScoopedWater(T*1e3*r);a.scoopRate=T*1e3,a.scoopAccepted=C,a.probeImmersion=R}_ground(t,e,n,i,r){let o=this.world,a=this.sys,l=this.out,c=this._h,{rb:h,pw:u,vw:d,fw:f,fwd:p,right:v}=c,g=!1;l.gearInWater=!1;let m=a.gearPos,S=this.vel.length();for(let _=0;_<3;_++){let x=this.gearPts[_];if(x.load=0,m<.98){x.comp=0;continue}h.copy(x.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let M=o.groundHeight(u.x,u.z),b=o.waterHeight(u.x,u.z,this.time);if(this._pointVel(h,n,d),b>M&&b>u.y-x.r){let W=Q((b-(u.y-x.r))/(2*x.r),0,1.5),G=d.length();G>.1&&(f.copy(d).multiplyScalar(-.5*998*1*x.drag*W*G),this._addWorldForce(f,h,t,e,i)),W>.2&&G>8&&(l.gearInWater=!0)}let w=u.y-x.r,y=M-w;if(y<=0){x.comp=Math.max(0,x.comp-r*2),x.spin*=.995;continue}g=!0;let T=Math.min(y,x.travel),R=-d.y,E=x.k*T+x.c*R;if(y>x.travel&&(E+=(y-x.travel)*6e6+Math.max(R,0)*2e5,R>3.6&&this._doCrash("Atterraggio troppo duro: carrello collassato")),E=Math.max(E,0),x.comp=T,x.load=E,p.set(0,0,-1).applyQuaternion(n),x.steer){let W=55*Yt*Q(1-S/30,.12,1),G=Q(this.ctl.tiller*1+this.ctl.rudder*.25,-1,1)*W;a.noseSteer=G,p.applyAxisAngle(Vv(n),-G)}p.y=0,p.normalize(),v.set(-p.z,0,p.x);let C=d.x*p.x+d.z*p.z,L=d.x*v.x+d.z*v.z;x.spin=C/x.r;let P=0;x.brake==="L"&&(P=this.ctl.brakeL),x.brake==="R"&&(P=this.ctl.brakeR),a.parkingBrake&&(P=1);let F=o.surfaceFriction?o.surfaceFriction(u.x,u.z):1,U=.018*(2-F),O=.55*F,X=-Math.tanh(C/.4)*E*(U+O*P);P>.5&&Math.abs(C)<.6&&(X=-C*E*1.2);let H=-Math.tanh(L/.18)*E*.75*F;f.set(0,E,0),f.addScaledVector(p,X),f.addScaledVector(v,H),this._addWorldForce(f,h,t,e,i)}for(let _=0;_<3;_++)l.gearLoad[_]=this.gearPts[_].load,l.gearCompress[_]=this.gearPts[_].comp,l.wheelSpeed[_]=this.gearPts[_].spin;for(let _ of this.structPoints){h.copy(_.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let x=o.groundHeight(u.x,u.z),M=o.waterHeight(u.x,u.z,this.time);this._pointVel(h,n,d);let b=Math.hypot(d.x,d.z);if(_.kind==="wingtip"&&M>x&&u.y<M+.05&&b>9){l.wingtipWater=1,this._doCrash("Estremit\xE0 alare in acqua: l'aereo ha fatto la 'ruota'");return}let w=x-u.y;if(w<=0)continue;g=!0;let y=d.y;if((_.kind==="wingtip"||_.kind==="tail")&&(b>6||y<-2)){this._doCrash(_.kind==="wingtip"?"Ala contro il terreno":"Coda contro il terreno");return}if(_.kind==="hull"&&M<=x+.3){if(-y>4||b>45*.514444){this._doCrash(m<.98?"Atterraggio sul ventre: carrello non estratto":"Impatto con il terreno");return}this.damage=Math.min(1,this.damage+r*b*.02)}if(-y>7){this._doCrash("Impatto con il terreno");return}let T=Math.max(0,w*3e6-y*25e4);f.set(0,T,0),b>.01&&(f.x-=.45*T*d.x/Math.max(b,.5),f.z-=.45*T*d.z/Math.max(b,.5)),this._addWorldForce(f,h,t,e,i)}for(let _ of this.engines){h.copy(_.pos).sub(this.cg),h.y-=le.propDiameter/2,u.copy(h).applyQuaternion(n).add(this.pos);let x=o.groundHeight(u.x,u.z),M=o.waterHeight(u.x,u.z,this.time);if(u.y<Math.max(x,M)-.05&&Math.abs(_.thrust)>500){this._doCrash(M>x?"Eliche in acqua":"Eliche contro il terreno");return}}l.onGround=g,this._gearWaterT=l.gearInWater?3:Math.max(0,(this._gearWaterT||0)-r),l.gearInWater&&S>20&&!this.crash&&Math.asin(Q(new se(0,0,-1).applyQuaternion(n).y,-1,1))<-25*Yt&&this._doCrash("Ammaraggio con carrello estratto: capottamento")}_doCrash(t){this.crash||(this.crash={reason:t,time:this.time,pos:this.pos.clone(),vel:this.vel.clone()})}_outputs(t,e,n,i){let r=this.out,o=this.quat,a=this._tmp.fwd.set(0,0,-1).applyQuaternion(o),l=this._tmp.up.set(0,1,0).applyQuaternion(o),c=this._tmp.right.set(1,0,0).applyQuaternion(o);r.tas=t,r.ias=t*Math.sqrt(e/1.225),r.gs=Math.hypot(this.vel.x,this.vel.z),r.mach=t/n.a,r.alt=this.pos.y,r.vs=this.vel.y,r.pitch=Math.asin(Q(a.y,-1,1)),r.roll=Math.atan2(-c.y,l.y);let h=Math.atan2(a.x,-a.z);h<0&&(h+=2*Math.PI),r.heading=h;let u=Math.atan2(this.vel.x,-this.vel.z);u<0&&(u+=2*Math.PI),r.track=u,r.turnRate=-this.omega.y*l.y;let d=this.pos.y+(-it.hCG-this.cg.y)*l.y;r.radAlt=d-Math.max(r.groundBelow,r.waterBelow),r.agl=r.radAlt,r.stallMargin=i,r.stall=i<4.2*Yt&&!r.onGround&&!r.onWater&&r.ias>10}},Gv=new se;function Vv(s){return Gv.set(0,1,0).applyQuaternion(s)}var Dt=Math.random,Ec=class{constructor(t,{quality:e="medium",world:n,onDeposit:i}){this.world=n,this.onDeposit=i;let r=e==="low"?.5:e==="high"?1.5:1;this.q=r;let o=Hf(256,3),a=ns(128,{power:1.8,noise:.35,seed:8}),l=ns(64,{power:1.1,noise:.25,seed:13});this.drop=new yi({max:Math.round(5e3*r),texture:l,lit:.85,stretch:.9,name:"dropCore",renderOrder:6}),this.mist=new yi({max:Math.round(2600*r),texture:a,lit:.9,name:"mist",renderOrder:7}),this.spray=new yi({max:Math.round(6e3*r),texture:o,lit:.75,stretch:.25,name:"spray",renderOrder:6});for(let c of[this.drop,this.mist,this.spray])t.add(c.mesh);this.wake=new wu(t),this._v=new D,this._p=new D,this._w=new D,this._acc={drop:[0,0,0,0],scoop:0,hull:0,overflow:0,prop:[0,0]},this.windVec=new D,this.cameraShake=0,this.windscreenWet=0}_bodyPoint(t,e,n,i){let r=this._w.copy(e).sub(t.cg);i.copy(t.omega).cross(r).applyQuaternion(t.quat).add(t.vel),n.copy(r).applyQuaternion(t.quat).add(t.pos)}update(t,e,n,i,r,o,a){let l=this.world,c=e.out;r.windAt(e.pos.x,30,e.pos.z,a,this.windVec);let h=this.windVec,u=this._p,d=this._v,f=i.emitters,p=new D(0,-1,0).applyQuaternion(e.quat),v=new D(0,0,-1).applyQuaternion(e.quat),g=new D(1,0,0).applyQuaternion(e.quat);for(let w=0;w<4;w++){let y=n.outflow[w];if(y<=.5)continue;let T=n.foamMix[w]>.3;this._bodyPoint(e,f.doors[w],u,d);let R=2.4/this.q;this._acc.drop[w]+=y*t/R;let E=Math.floor(this._acc.drop[w]);this._acc.drop[w]-=E;let C=3+Math.sqrt(y/400)*2.5;for(;E-- >0;){let L=.9+y/2500,P=d.x+p.x*C+(Dt()-.5)*L*2,F=d.y+p.y*C+(Dt()-.5)*L,U=d.z+p.z*C+(Dt()-.5)*L*2,O=(Dt()-.5)*.5,X=(Dt()-.5)*.9,H=.05+Math.pow(Dt(),2.2)*(T?.9:.65);this.drop.spawn(u.x+g.x*O+v.x*X,u.y-.1,u.z+g.z*O+v.z*X,P,F,U,{life:14,size0:.5+Dt()*.4,size1:(T?7:5)+Dt()*3,alpha:T?.9:.8,r:T?.98:.86,g:T?.98:.92,b:.98,drag:H,grav:-9.81,fadeIn:.02,user:R,user2:T?1:0,rotV:(Dt()-.5)*1.5})}}let m=this.drop;for(let w=0;w<m.n;w++){let y=m.age[w];if(m.drag[w]=Math.min(m.drag[w]*(1+t*.9),1.6),y>.25&&Dt()<t*(.9+m.drag[w]*2.2)){let T=w*3;this.mist.spawn(m.p[T],m.p[T+1],m.p[T+2],m.v[T]*.4+h.x*.6,m.v[T+1]*.3,m.v[T+2]*.4+h.z*.6,{life:6+Dt()*5,size0:3+Dt()*3,size1:14+Dt()*12,alpha:.2+.15*m.user2[w],r:.92,g:.95,b:.98,drag:.9,grav:-.5,fadeIn:.15,rotV:(Dt()-.5)*.3})}}let S=(w,y)=>Math.max(l.groundHeight(w,y),l.waterHeight(w,y,a));m.simulate(t,h,S,(w,y)=>{let T=w*3,R=m.p[T],E=m.p[T+2],C=l.waterHeight(R,E,a)>l.groundHeight(R,E);return!C&&this.onDeposit&&this.onDeposit(R,E,m.user[w],m.user2[w]>.5),Dt()<.12&&this.mist.spawn(R,y+1.5,E,h.x*.5+(Dt()-.5)*4,1+Dt()*2,h.z*.5+(Dt()-.5)*4,{life:5+Dt()*4,size0:4,size1:16+Dt()*10,alpha:.28,r:.9,g:.92,b:.94,drag:.8,grav:-.2,fadeIn:.1}),C&&Dt()<.2&&this._splash(R,y,E,.4),!0});let _=c.scoopRate||0,x=c.gs;if(c.onWater&&n.probePos>.3&&c.probeImmersion>.05){this._acc.scoop+=t*(130+_*.35)*this.q;let w=Math.floor(this._acc.scoop);for(this._acc.scoop-=w;w-- >0;){let y=f.probes[Dt()<.5?0:1],T=this._w.set(y.position.x,y.position.y-.85,y.position.z);this._bodyPoint(e,T.clone(),u,d);let R=l.waterHeight(u.x,u.z,a),E=.15+Dt()*.45,C=Q(x/32,.4,1.3),L=(3.5+Dt()*5.5+(Dt()<.15?3:0))*C,P=(Dt()-.5)*3.5+Math.sign(y.position.x)*(.5+Dt()*1.5);this.spray.spawn(u.x,R+.25,u.z,d.x*E+g.x*P,L,d.z*E+g.z*P,{life:1.1+Dt()*1,size0:.5+Dt()*.4,size1:(1.8+Dt()*2.2)*C,alpha:.92,r:.97,g:.98,b:1,drag:.35,grav:-9.81,fadeIn:.02,rotV:(Dt()-.5)*2}),Dt()<.06&&this.mist.spawn(u.x-v.x*8,R+2+Dt()*3,u.z-v.z*8,d.x*.25+h.x,1+Dt(),d.z*.25+h.z,{life:3+Dt()*3,size0:3,size1:9+Dt()*6,alpha:.14,r:.92,g:.94,b:.96,drag:.8,grav:-.3,fadeIn:.1})}this.windscreenWet=Math.min(1,this.windscreenWet+t*.25)}if(n.overflowRate>5&&c.onWater){this._acc.overflow+=t*90*this.q;let w=Math.floor(this._acc.overflow);for(this._acc.overflow-=w;w-- >0;){let y=f.overflow[Dt()<.5?0:1];this._bodyPoint(e,y,u,d);let T=Math.sign(y.x);this.spray.spawn(u.x,u.y,u.z,d.x*.7+g.x*T*(2+Dt()*3),3+Dt()*4,d.z*.7+g.z*T*(2+Dt()*3),{life:1.2+Dt()*.8,size0:.3,size1:2+Dt()*2,alpha:.8,r:.92,g:.95,b:.98,drag:.6,grav:-9.81})}}let M=e.sprayCount;if(M>0){for(let w=0;w<M;w++){let y=e.sprayPoints[w],T=Math.hypot(y.vx,y.vz);if(T<2.5)continue;let R=Q(y.intensity,.1,1.2)*(y.float?8:14)*this.q*Q(T/15,.2,1.5),E=Math.floor(R*t+Dt()),C=y.side;for(;E-- >0;){let L=1.5+T*(.06+Dt()*.1),P=1+T*(.04+Dt()*.09);this.spray.spawn(y.x+g.x*C*.4,y.y+.15,y.z+g.z*C*.4,y.vx*(.2+Dt()*.35)+g.x*C*L,P,y.vz*(.2+Dt()*.35)+g.z*C*L,{life:.6+Dt()*.7,size0:.4,size1:1+Dt()*1.8*Q(T/20,.4,1.4),alpha:.85,r:.95,g:.97,b:.99,drag:.4,grav:-9.81,fadeIn:.03,rotV:(Dt()-.5)*2})}}if(x>12&&(this.windscreenWet=Math.min(1,this.windscreenWet+t*.05*Q(c.hullDepth*3,0,1))),c.impact>1.2&&(this._lastImpactT||0)<a-.5){this._lastImpactT=a;let w=e.sprayPoints[0],y=Math.min(400,Math.round(c.impact*60*this.q));for(let T=0;T<y;T++){let R=e.sprayPoints[Math.floor(Dt()*M)],E=Dt()*Math.PI*2,C=2+Dt()*c.impact*2.5;this.spray.spawn(R.x,R.y+.1,R.z,R.vx*.3+Math.cos(E)*C,2+Dt()*c.impact*2.2,R.vz*.3+Math.sin(E)*C,{life:1+Dt()*1.2,size0:.6,size1:2.5+Dt()*3,alpha:.85,r:.93,g:.95,b:.97,drag:.3,grav:-9.81})}this.cameraShake=Math.min(1,this.cameraShake+c.impact*.15),this.windscreenWet=Math.min(1,this.windscreenWet+c.impact*.15)}}if(c.radAlt<9&&c.surfaceUnder==="water")for(let w=0;w<2;w++){let y=n.engines[w].pf;if(y<.3)continue;this._acc.prop[w]+=t*y*25*this.q*Q(1-c.radAlt/9,0,1);let T=Math.floor(this._acc.prop[w]);this._acc.prop[w]-=T,this._bodyPoint(e,f.props[w],u,d);let R=l.waterHeight(u.x,u.z,a);for(;T-- >0;)this.mist.spawn(u.x-v.x*(4+Dt()*6)+(Dt()-.5)*3,R+.4,u.z-v.z*(4+Dt()*6)+(Dt()-.5)*3,d.x*.6-v.x*8,.8+Dt()*1.2,d.z*.6-v.z*8,{life:2+Dt()*2,size0:1.5,size1:6+Dt()*4,alpha:.18,r:.9,g:.93,b:.95,drag:.7,grav:0})}this.wake.update(t,e,a);let b=(w,y)=>l.waterHeight(w,y,a)-.3;this.spray.simulate(t,h,(w,y)=>Math.max(l.groundHeight(w,y),l.waterHeight(w,y,a)-.2)),this.mist.simulate(t,h,null),this.windscreenWet=Math.max(0,this.windscreenWet-t*(.06+c.ias*.004)),this.cameraShake=Math.max(0,this.cameraShake-t*1.5)}_splash(t,e,n,i){let r=Math.round(4*i*this.q)+1;for(let o=0;o<r;o++)this.spray.spawn(t,e+.1,n,(Dt()-.5)*3,2+Dt()*3,(Dt()-.5)*3,{life:.8+Dt()*.6,size0:.4,size1:1.5+Dt(),alpha:.7,r:.93,g:.95,b:.97,drag:.3,grav:-9.81})}render(t,e){let n=new It(1,.96,.9).multiplyScalar(2.3),i=new It(.95,1.02,1.12);for(let r of[this.drop,this.mist,this.spray])r.setLighting(e.sunDir,t,n,i,e.scene.fog);this.drop.upload(t,r=>r<.85?1:1-(r-.85)/.15),this.spray.upload(t,r=>1-r*r),this.mist.upload(t,r=>Math.sin(Math.PI*Math.min(1,r*1.15))*(1-r*.3)),this.wake.mat.uniforms.fogColor.value.copy(e.scene.fog.color),this.wake.mat.uniforms.fogDensity.value=e.scene.fog.density,this.wake.render()}stats(){return{drop:this.drop.n,mist:this.mist.n,spray:this.spray.n}}},wu=class{constructor(t){this.max=900,this.pts=[];let e=new me;this.pos=new Float32Array(this.max*2*3),this.uv=new Float32Array(this.max*2*2),this.ext=new Float32Array(this.max*2*2),e.setAttribute("position",new be(this.pos,3).setUsage(qn)),e.setAttribute("uv",new be(this.uv,2).setUsage(qn)),e.setAttribute("aExt",new be(this.ext,2).setUsage(qn));let n=[];for(let o=0;o<this.max-1;o++){let a=o*2,l=o*2+1,c=o*2+2,h=o*2+3;n.push(a,c,l,l,c,h)}e.setIndex(n),e.setDrawRange(0,0),this.geo=e;let i=ri(256,12,5,55,.6),r=vi(256,[i,i,i,1]);this.mat=new Xe({uniforms:{tFoam:{value:r},uTime:{value:0},fogColor:{value:new It},fogDensity:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec2 aExt; varying vec2 vUv; varying vec2 vExt; varying vec3 vW; varying float vFog;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main(){ vUv = uv; vExt = aExt; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mv = viewMatrix * w; vFog = -mv.z; gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform sampler2D tFoam; uniform float uTime; uniform vec3 fogColor; uniform float fogDensity;
        varying vec2 vUv; varying vec2 vExt; varying vec3 vW; varying float vFog;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        void main(){
          #include <logdepthbuf_fragment>
          float age = vExt.x; float k = vExt.y;
          float x = abs(vUv.x * 2.0 - 1.0);
          float n = texture2D(tFoam, vW.xz / 6.0).r;
          float n2 = texture2D(tFoam, vW.xz / 1.7 + 0.3).r;
          // turbolenza centrale (giovane) + creste laterali della scia di Kelvin (persistenti)
          float core = (1.0 - smoothstep(0.0, 0.6, x)) * exp(-age / 12.0);
          float edge = smoothstep(0.72, 0.9, x) * (1.0 - smoothstep(0.9, 1.0, x)) * exp(-age / 45.0);
          float cells = smoothstep(0.42, 0.62, n * 0.7 + n2 * 0.5);
          float foam = (core * 1.4 + edge * 0.8) * mix(cells, 1.0, exp(-age / 2.5) * 0.7);
          float a = clamp(foam * k, 0.0, 0.92) * smoothstep(0.0, 0.4, age);
          if (a < 0.01) discard;
          vec3 col = vec3(1.6, 1.65, 1.65);
          float f = 1.0 - exp(-fogDensity * fogDensity * vFog * vFog);
          col = mix(col, fogColor, f);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),this.mesh=new $(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.name="wake",t.add(this.mesh),this.time=0,this.last=null}update(t,e,n){this.time=n;let i=e.out,r=i.onWater&&i.gs>1.5,o=new D(0,(it.sStep,0),it.sStep-it.sCG).sub(e.cg).applyQuaternion(e.quat).add(e.pos);if(r){let a=Q(i.hullDepth*2.5+i.gs/25,.2,1)*(i.planing?1:.8);if(!this.last||Math.hypot(o.x-this.last.x,o.z-this.last.z)>2){let l=o.x-(this.last?this.last.x:o.x-e.vel.x*.05),c=o.z-(this.last?this.last.z:o.z-e.vel.z*.05),h=Math.hypot(l,c)||1;this.pts.push({x:o.x,z:o.z,dx:l/h,dz:c/h,t:n,k:a,gap:!this.last}),this.pts.length>this.max&&this.pts.shift(),this.last={x:o.x,z:o.z}}}else this.last=null;for(;this.pts.length&&n-this.pts[0].t>160;)this.pts.shift()}render(){let t=this.pts.length;if(t<2){this.geo.setDrawRange(0,0);return}for(let e=0;e<t;e++){let n=this.pts[e],i=this.time-n.t,r=2.2+i*.9+Math.sqrt(i)*1.5,o=-n.dz,a=n.dx,l=n.gap||e+1<t&&this.pts[e+1].gap?0:n.k;for(let c=0;c<2;c++){let h=c===0?-1:1,u=e*2+c;this.pos[u*3]=n.x+o*r*h,this.pos[u*3+1]=.07,this.pos[u*3+2]=n.z+a*r*h,this.uv[u*2]=c,this.uv[u*2+1]=e,this.ext[u*2]=i,this.ext[u*2+1]=l}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.aExt.needsUpdate=!0,this.geo.setDrawRange(0,(t-1)*6)}};function Eu(s,t=2,e="white"){let n=Math.floor(s.sampleRate*t),i=s.createBuffer(1,n,s.sampleRate),r=i.getChannelData(0),o=0,a=0,l=0,c=0;for(let h=0;h<n;h++){let u=Math.random()*2-1;e==="pink"?(o=.99765*o+u*.099046,a=.963*a+u*.2965164,l=.57*l+u*1.0526913,r[h]=(o+a+l+u*.1848)*.18):e==="brown"?(c=(c+.02*u)/1.02,r[h]=c*3.5):r[h]=u*.5}return i}var Tc=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.8,this._prev={}}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=3,this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(n).connect(e.destination),this.cabin=e.createBiquadFilter(),this.cabin.type="lowpass",this.cabin.frequency.value=2200,this.cabin.Q.value=.5,this.cabin.connect(this.master),this.white=Eu(e,2,"white"),this.pink=Eu(e,3,"pink"),this.brown=Eu(e,3,"brown"),this.engines=[0,1].map(i=>this._engine(i)),this.wind=this._noiseVoice(this.pink,"bandpass",700,.6),this.water=this._noiseVoice(this.brown,"lowpass",500,.7),this.scoop=this._noiseVoice(this.white,"bandpass",1800,.5),this.dropSnd=this._noiseVoice(this.pink,"lowpass",1400,.4),this.hyd=this._tone("sawtooth",380,"lowpass",900),this.gearRoll=this._noiseVoice(this.brown,"lowpass",250,.8),this.stallHorn=this._tone("square",420,"lowpass",2e3,!0),this.warnHorn=this._tone("square",880,"lowpass",3e3,!0),this.enabled=!0}_noiseVoice(t,e,n,i){let r=this.ctx,o=r.createBufferSource();o.buffer=t,o.loop=!0,o.playbackRate.value=.9+Math.random()*.2;let a=r.createBiquadFilter();a.type=e,a.frequency.value=n,a.Q.value=i;let l=r.createGain();return l.gain.value=0,o.connect(a).connect(l).connect(this.cabin),o.start(),{src:o,f:a,g:l}}_tone(t,e,n,i,r=!1){let o=this.ctx,a=o.createOscillator();a.type=t,a.frequency.value=e;let l=o.createBiquadFilter();l.type=n,l.frequency.value=i;let c=o.createGain();return c.gain.value=0,a.connect(l).connect(c).connect(r?this.master:this.cabin),a.start(),{o:a,f:l,g:c}}_engine(t){let e=this.ctx,n=e.createStereoPanner?e.createStereoPanner():e.createGain();n.pan&&(n.pan.value=t===0?-.45:.45);let i=e.createGain();i.gain.value=0,i.connect(n).connect(this.cabin);let r=e.createOscillator();r.type="sawtooth";let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=520,o.Q.value=1.2;let a=e.createGain();r.connect(o).connect(a).connect(i);let l=e.createOscillator();l.type="square";let c=e.createGain();c.gain.value=.05,l.connect(o),l.connect(c).connect(i);let h=e.createOscillator();h.type="sine";let u=e.createGain();u.gain.value=.2,h.connect(u).connect(a.gain);let d=e.createOscillator();d.type="sine";let f=e.createGain();d.connect(f).connect(i);let p=e.createOscillator();p.type="triangle";let v=e.createGain();p.connect(v).connect(i);let g=e.createBufferSource();g.buffer=this.pink,g.loop=!0;let m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=400;let S=e.createGain();g.connect(m).connect(S).connect(i);let _=e.createBufferSource();_.buffer=this.white,_.loop=!0;let x=e.createBiquadFilter();x.type="bandpass",x.frequency.value=2400,x.Q.value=.8;let M=e.createGain();_.connect(x).connect(M).connect(i);for(let b of[r,l,h,d,p])b.start();return g.start(),_.start(),{bus:i,pan:n,prop:r,prop2:l,propF:o,propG:a,lfo:h,whine:d,whineG:f,whine2:p,whine2G:v,roarF:m,roarG:S,hissF:x,hissG:M,detune:t===0?.997:1.004}}click(t=1800,e=.04,n=.25){if(!this.enabled)return;let i=this.ctx,r=i.createBufferSource();r.buffer=this.white;let o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=t;let a=i.createGain(),l=i.currentTime;a.gain.setValueAtTime(n,l),a.gain.exponentialRampToValueAtTime(.001,l+e),r.connect(o).connect(a).connect(this.master),r.start(l,Math.random()),r.stop(l+e+.05)}chime(t=1,e=1320){if(!this.enabled)return;let n=this.ctx;for(let i=0;i<t;i++){let r=n.createOscillator();r.type="sine",r.frequency.value=e;let o=n.createGain(),a=n.currentTime+i*.22;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.01),o.gain.exponentialRampToValueAtTime(1e-4,a+.6),r.connect(o).connect(this.master),r.start(a),r.stop(a+.7)}}thump(t=1,e=!1){if(!this.enabled)return;let n=this.ctx,i=n.createBufferSource();i.buffer=e?this.pink:this.brown;let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=e?1500:220;let o=n.createGain(),a=n.currentTime;o.gain.setValueAtTime(Q(t,0,1.5)*(e?.8:1.2),a),o.gain.exponentialRampToValueAtTime(.001,a+(e?1.2:.35)),i.connect(r).connect(o).connect(this.master),i.start(a,Math.random()),i.stop(a+1.5)}update(t,e,n,i){if(!this.enabled)return;let o=this.ctx.currentTime,a=e.out,l=i.inside,c=.08;this.cabin.frequency.setTargetAtTime(l?1900:14e3,o,.1);let h=l?0:i.distance,u=l?1:1/(1+h/35),d=l?1:Q(1/(1-Q(i.closing/340,-.4,.4)),.7,1.4);for(let w=0;w<2;w++){let y=n.engines[w],T=this.engines[w],R=y.np/100*1200/60,E=R*4*T.detune*d;T.prop.frequency.setTargetAtTime(Math.max(5,E),o,c),T.prop2.frequency.setTargetAtTime(Math.max(5,E*2),o,c),T.lfo.frequency.setTargetAtTime(Math.max(.1,R),o,c);let C=Q(y.torque/100,0,1.2),L=y.running?1:Q(y.nh/60,0,1);T.propG.gain.setTargetAtTime((.12+.5*C)*L,o,c),T.propF.frequency.setTargetAtTime(280+700*C,o,c);let P=y.nh/100;T.whine.frequency.setTargetAtTime(2600*P*d,o,c),T.whine2.frequency.setTargetAtTime(5200*P*d*1.01,o,c),T.whineG.gain.setTargetAtTime((l?.02:.05)*P*P*L,o,c),T.whine2G.gain.setTargetAtTime((l?.004:.018)*P*L,o,c),T.roarG.gain.setTargetAtTime((.18+.55*C)*L,o,c),T.roarF.frequency.setTargetAtTime(250+600*C,o,c),T.hissG.gain.setTargetAtTime((l?.04:.14)*C*L,o,c),T.hissF.frequency.setTargetAtTime(1800+1500*C,o,c);let F=w===0?-.45:.45;!l&&i.panFn&&(F=i.panFn(w)),T.pan.pan&&T.pan.pan.setTargetAtTime(F,o,.1),T.bus.gain.setTargetAtTime(.55*u,o,c)}let f=a.ias/.514444;this.wind.g.gain.setTargetAtTime(Q((f/140)**2,0,1.4)*(l?.35:.6)*u+.01,o,c),this.wind.f.frequency.setTargetAtTime(400+f*9,o,c);let p=a.onWater?Q(a.gs/20,0,1.4)*Q(.3+a.hullDepth*1.5,0,1.2):0,v=.75+.25*Math.sin(o*7.3)*Math.sin(o*3.1);this.water.g.gain.setTargetAtTime(p*.9*v*u,o,.05),this.water.f.frequency.setTargetAtTime(300+a.gs*22,o,c);let g=Q((a.scoopRate||0)/500,0,1.2);this.scoop.g.gain.setTargetAtTime(g*.55*u,o,.05);let m=n.outflow.reduce((w,y)=>w+y,0);this.dropSnd.g.gain.setTargetAtTime(Q(m/3e3,0,1)*.9*u,o,.05);let S=Math.abs(n.flapPos-(this._prev.flap??n.flapPos))>1e-4||Math.abs(n.gearPos-(this._prev.gear??n.gearPos))>1e-4||Math.abs(n.probePos-(this._prev.probe??n.probePos))>1e-4;this._prev.flap=n.flapPos,this._prev.gear=n.gearPos,this._prev.probe=n.probePos,this.hyd.g.gain.setTargetAtTime(S?l?.05:.02:0,o,.1);let _=a.onGround?Q(a.gs/25,0,1):0;this.gearRoll.g.gain.setTargetAtTime(_*.7,o,.05);let x=n.warn.stall;this.stallHorn.g.gain.setTargetAtTime(x?.12:0,o,.02),this.stallHorn.o.frequency.setTargetAtTime(x?420+60*Math.sin(o*25):420,o,.01);let M=(n.warn.gearWater||n.warn.gearUpLand)&&Math.floor(o*2.5)%2===0;this.warnHorn.g.gain.setTargetAtTime(M?.08:0,o,.01),a.impact>1&&(this._lastImp||0)<o-.6&&(this._lastImp=o,this.thump(a.impact/3,!0));let b=a.gearLoad[1]+a.gearLoad[2];b>1e3&&!this._prev.ground&&this.thump(Q(-a.vs/2.5,.3,1.5),!1),this._prev.ground=b>1e3}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}};var lp=[["W / S  (\u2191 / \u2193)","Cloche avanti / indietro (picchiare / cabrare)"],["A / D  (\u2190 / \u2192)","Alettoni (rollio)"],["Q / E","Pedaliera (timone e ruotino)"],["R / F","Manette + / \u2212 (F tenuto al minimo in acqua o a terra = reverse)"],["Shift+R / Shift+F","Potenza massima / minimo"],["V / Shift+V","Flap gi\xF9 / su (0-10-15-25\xB0)"],["G","Carrello (anfibio)"],["P","Sonde di pescaggio (estendi / ritrai)"],["SPAZIO","SGANCIO dell'acqua"],["M","Modalit\xE0 di sgancio (salvo, 2+2, sequenza, 1 porta)"],["N","Quantit\xE0 di pescaggio preselezionata"],["J","Schiumogeno (arma / disarma)"],["T / Shift+T","Trim cabrare / picchiare"],["B (tenuto) / Shift+B","Freni / freno di stazionamento"],["L","Fari di atterraggio"],["C / 1-7","Cambia visuale (cabina, inseguimento, orbita, passaggio, sonde, ala, torre)"],["Mouse (trascina) / rotella","Guarda intorno / zoom"],["Y","Cloche col mouse (on/off)"],["O","Pannello dati on/off"],["H / F1","Aiuto"],["Esc","Pausa / menu"],["Invio","Riparti dopo un incidente"]],Ac=class{constructor(t){this.dom=t,this.keys=new Set,this.actions=[],this.stick={x:0,y:0},this.rudder=0,this.throttle=0,this.reverse=0,this.brakes=0,this.mouseYoke=!1,this.look={dx:0,dy:0,wheel:0,dragging:!1},this.gamepad=null,this.touch={active:!1,x:0,y:0,throttle:null},this._mouse={x:0,y:0},this._bind()}_bind(){let t={KeyR:"thrMax",KeyF:"thrIdle",KeyV:"flapUp",KeyB:"parking"},e={KeyV:"flapDown",BracketRight:"flapDown",BracketLeft:"flapUp",KeyG:"gear",KeyP:"probes",Space:"drop",KeyM:"mode",KeyN:"preset",KeyJ:"foam",KeyL:"lights",KeyC:"camera",KeyO:"hud",KeyH:"help",F1:"help",Escape:"pause",Enter:"restart",KeyY:"mouseYoke",KeyK:"debug"};window.addEventListener("keydown",i=>{if(i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="SELECT"))return;let r=i.code;i.repeat||(i.shiftKey&&t[r]?this.actions.push(t[r]):e[r]&&this.actions.push(e[r]),/^Digit[1-7]$/.test(r)&&this.actions.push("cam"+r.slice(5))),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","F1","Tab"].includes(r)&&i.preventDefault(),this.keys.add(r),this.shift=i.shiftKey}),window.addEventListener("keyup",i=>{this.keys.delete(i.code),this.shift=i.shiftKey}),window.addEventListener("blur",()=>this.keys.clear());let n=this.dom;n.addEventListener("contextmenu",i=>i.preventDefault()),n.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(this.look.dragging=!0,this._mouse.x=i.clientX,this._mouse.y=i.clientY,n.setPointerCapture&&n.setPointerCapture(i.pointerId))}),n.addEventListener("pointerup",()=>this.look.dragging=!1),n.addEventListener("pointermove",i=>{i.pointerType!=="touch"&&(this.look.dragging&&(this.look.dx+=i.clientX-this._mouse.x,this.look.dy+=i.clientY-this._mouse.y),this._mouse.x=i.clientX,this._mouse.y=i.clientY,this._mouseNorm={x:i.clientX/window.innerWidth*2-1,y:i.clientY/window.innerHeight*2-1})}),n.addEventListener("dblclick",()=>this.actions.push("lookReset")),n.addEventListener("wheel",i=>{this.look.wheel+=Math.sign(i.deltaY),i.preventDefault()},{passive:!1}),window.addEventListener("gamepadconnected",i=>{this.gamepad=i.gamepad.index,this.actions.push("gamepad")})}consumeLook(){let t={dx:this.look.dx,dy:this.look.dy,wheel:this.look.wheel};return this.look.dx=this.look.dy=this.look.wheel=0,t}update(t,e){let n=this.keys,i=(...p)=>p.some(v=>n.has(v)),r=0,o=0,a=0;i("KeyA","ArrowLeft")&&(r-=1),i("KeyD","ArrowRight")&&(r+=1),i("KeyS","ArrowDown")&&(o+=1),i("KeyW","ArrowUp")&&(o-=1),i("KeyQ")&&(a-=1),i("KeyE")&&(a+=1);let l=(p,v)=>p===0?3.2:Math.sign(p)!==Math.sign(v)&&v!==0?4:1.6,c=He(this.stick.x,r,l(r,this.stick.x),t),h=He(this.stick.y,o*.85,l(o,this.stick.y),t),u=He(this.rudder,a,l(a,this.rudder),t);this.mouseYoke&&this._mouseNorm&&!this.look.dragging&&(c=Q(this._mouseNorm.x*1.4,-1,1),h=Q(-this._mouseNorm.y*1.4,-1,1));let d=navigator.getGamepads?navigator.getGamepads():[],f=this.gamepad!==null?d[this.gamepad]:null;if(f){let p=w=>Math.abs(w)<.08?0:(w-Math.sign(w)*.08)/.92,v=p(f.axes[0]||0),g=p(f.axes[1]||0),m=p(f.axes[2]||0),S=p(f.axes[3]||0);(Math.abs(v)>0||Math.abs(g)>0)&&(c=Math.sign(v)*v*v,h=-Math.sign(g)*g*g),Math.abs(m)>0&&(u=m);let _=w=>f.buttons[w]&&f.buttons[w].pressed,x=f.buttons[7]?f.buttons[7].value:0,M=f.buttons[6]?f.buttons[6].value:0;this.throttle=Q(this.throttle+(x-M)*t*.6-S*t*.5,0,1),this.brakes=Math.max(this.brakes,_(4)&&_(5)?1:0),this._gpPrev=this._gpPrev||[];let b=(w,y)=>{let T=_(w);T&&!this._gpPrev[w]&&this.actions.push(y),this._gpPrev[w]=T};b(0,"drop"),b(1,"probes"),b(2,"flapDown"),b(3,"flapUp"),b(8,"camera"),b(9,"pause"),b(10,"gear"),b(12,"trimUpPulse"),b(13,"trimDownPulse"),b(14,"mode"),b(15,"lights")}this.touch.active&&(c=this.touch.x,h=this.touch.y),this.touch.throttle!==null&&(this.throttle=this.touch.throttle),this.stick.x=c,this.stick.y=h,this.rudder=u,i("KeyR")&&!this.shift&&(this.throttle=Q(this.throttle+t*.45,0,1)),i("KeyF")&&!this.shift?this.throttle>0?this.throttle=Q(this.throttle-t*.45,0,1):e&&(this._revHold=(this._revHold||0)+t,this._revHold>.4&&(this.reverse=Q(this.reverse+t*.6,0,1))):(this._revHold=0,this.reverse=He(this.reverse,0,1.5,t)),e||(this.reverse=0),this.brakes=i("KeyB")&&!this.shift?1:He(this.brakes,0,4,t),this.trimRate=i("KeyT")?this.shift?-1:1:0}popActions(){let t=this.actions;return this.actions=[],t}};var $o=[{id:"cockpit",name:"Cabina"},{id:"chase",name:"Inseguimento"},{id:"orbit",name:"Orbita libera"},{id:"flyby",name:"Passaggio"},{id:"probe",name:"Sotto lo scafo"},{id:"wing",name:"Ala"},{id:"tower",name:"Torre"}],Rc=(s,t,e=0)=>new D(e,t-it.hCG,s-it.sCG),Cc=class{constructor(t,{towerPos:e}){this.camera=t,this.mode=0,this.head={yaw:0,pitch:-.17,tyaw:0,tpitch:-.17},this.orbit={yaw:Math.PI*.85,pitch:.12,dist:42},this.chase={yaw:0,pitch:.1,dist:34,pos:new D,init:!1},this.flyby={pos:new D,t:-1},this.fov={cockpit:72,other:50},this.zoom=1,this.tower=e.clone(),this._q=new nn,this._v=new D,this._e=new Pn(0,0,0,"YXZ"),this.shake=new D,this.vib=0}get id(){return $o[this.mode].id}get inside(){return this.id==="cockpit"}set(t){this.mode=(t+$o.length)%$o.length,this.chase.init=!1,this.flyby.t=-1,this.zoom=1}lookReset(){this.head.tyaw=0,this.head.tpitch=-.17}update(t,e,n,i){let r=this.camera,o=this.id,a=e.quat,l=e.out;n.wheel&&(this.zoom=Q(this.zoom*(n.wheel>0?1.12:.89),.25,3.5));let c=l.onWater?Q(l.gs/25,0,1)*Q(l.hullDepth*2,.2,1):0,h=l.onGround?Q(l.gs/30,0,1):0,u=.0012+c*.012+h*.006+(i.shake||0)*.05+(i.turb||0)*.004,d=performance.now()/1e3;this.shake.set(Math.sin(d*37.1)*Math.sin(d*13.7)*u,Math.sin(d*41.3+1)*Math.sin(d*9.1)*u,Math.sin(d*29.3+2)*u*.5);let f=p=>this._v.copy(p).sub(e.cg).applyQuaternion(a).add(e.pos);if(o==="cockpit"){this.head.tyaw=Q(this.head.tyaw-n.dx*.0035,-2.6,2.6),this.head.tpitch=Q(this.head.tpitch-n.dy*.0035,-1.2,1.1),this.head.yaw=Es(this.head.yaw,this.head.tyaw,14,t),this.head.pitch=Es(this.head.pitch,this.head.tpitch,14,t);let p=Q(-l.ny*.02,-.04,.04),v=Q(-(l.nz-1)*.012,-.05,.05),g=i.eye.clone().add(new D(p,v,0)).add(this.shake);g.x+=Math.sin(this.head.yaw)*.12,g.z+=(1-Math.cos(this.head.yaw))*.05,r.position.copy(f(g)),this._e.set(this.head.pitch,this.head.yaw,0,"YXZ"),this._q.setFromEuler(this._e),r.quaternion.copy(a).multiply(this._q),r.fov=this.fov.cockpit/this.zoom,r.near=.04}else if(o==="chase"){let p=this.chase;p.yaw=Q(p.yaw-n.dx*.005,-Math.PI,Math.PI),p.pitch=Q(p.pitch+n.dy*.004,-.4,1.2),!n.dx&&!n.dy&&(p.yaw=Es(p.yaw,0,.4,t));let v=new D(0,0,-1).applyQuaternion(a),m=Math.atan2(v.x,-v.z)+p.yaw,S=p.dist*this.zoom,_=e.pos.clone().add(new D(0,2.5,0)),x=_.clone().add(new D(-Math.sin(m)*Math.cos(p.pitch)*S,Math.sin(p.pitch)*S+3,Math.cos(m)*Math.cos(p.pitch)*S));p.init||(p.pos.copy(x),p.init=!0),p.pos.x=Es(p.pos.x,x.x,5,t),p.pos.y=Es(p.pos.y,x.y,4,t),p.pos.z=Es(p.pos.z,x.z,5,t);let M=i.groundAt(p.pos.x,p.pos.z)+1.5;p.pos.y<M&&(p.pos.y=M),r.position.copy(p.pos).add(this.shake.clone().multiplyScalar(4)),r.up.set(0,1,0),r.lookAt(_),r.fov=this.fov.other,r.near=.3}else if(o==="orbit"){let p=this.orbit;p.yaw-=n.dx*.005,p.pitch=Q(p.pitch+n.dy*.004,-1.2,1.45);let v=p.dist*this.zoom,g=e.pos.clone();r.position.set(g.x+Math.sin(p.yaw)*Math.cos(p.pitch)*v,g.y+Math.sin(p.pitch)*v,g.z+Math.cos(p.yaw)*Math.cos(p.pitch)*v);let m=i.groundAt(r.position.x,r.position.z)+1;r.position.y<m&&(r.position.y=m),r.up.set(0,1,0),r.lookAt(g),r.fov=this.fov.other,r.near=.3}else if(o==="flyby"){let p=this.flyby,v=e.vel.clone(),g=v.length(),m=e.pos.clone().sub(p.pos);if(p.t<0||m.length()>450||m.dot(v)>0&&m.length()>150){let _=g>5?v.clone().normalize():new D(0,0,-1).applyQuaternion(a),x=new D(-_.z,0,_.x).normalize();p.pos.copy(e.pos).addScaledVector(_,Q(g*6,60,320)).addScaledVector(x,28+Math.random()*25);let M=i.groundAt(p.pos.x,p.pos.z);p.pos.y=Math.max(e.pos.y-6+Math.random()*10,M+2),p.t=0}p.t+=t,r.position.copy(p.pos),r.up.set(0,1,0),r.lookAt(e.pos);let S=e.pos.distanceTo(p.pos);r.fov=Q(2*Math.atan(26/S)/Yt,12,60)/this.zoom,r.near=.3}else if(o==="probe"){let p=f(Rc(12.2,1.25,2.5));r.position.copy(p).add(this.shake);let v=f(Rc(8.6,-.4,.3));r.up.copy(new D(0,1,0).applyQuaternion(a)),r.lookAt(v),r.fov=70/this.zoom,r.near=.05}else if(o==="wing"){let p=f(Rc(9.4,4.5,-12.6));r.position.copy(p).add(this.shake);let v=f(Rc(3,2.8,0));r.up.copy(new D(0,1,0).applyQuaternion(a)),r.lookAt(v),r.fov=62/this.zoom,r.near=.1}else if(o==="tower"){r.position.copy(this.tower),r.up.set(0,1,0),r.lookAt(e.pos);let p=e.pos.distanceTo(this.tower);r.fov=Q(2*Math.atan(30/p)/Yt,2,60)/this.zoom,r.near=.5}r.updateProjectionMatrix(),r.updateMatrixWorld()}};var _n=s=>document.getElementById(s),Pc=class{constructor(){this.msgBox=_n("messages"),this.data=_n("data"),this.warnBox=_n("warnings"),this.mapCanvas=_n("minimap"),this.mapCtx=this.mapCanvas.getContext("2d"),this.fireList=_n("fires"),this.camLabel=_n("camlabel"),this.showData=!0,this._mapTimer=0,this._dataTimer=0,this._buildHelp(),this._buildDroplets()}_buildHelp(){let t=_n("helptable");t.innerHTML=lp.map(([e,n])=>`<tr><td class="k">${e}</td><td>${n}</td></tr>`).join("")}_buildDroplets(){let t=_n("droplets"),e=t.getContext("2d");t.width=1024,t.height=640;let n=En(9);for(let i=0;i<520;i++){let r=n()*t.width,o=n()*t.height,a=2+Math.pow(n(),3)*14,l=e.createRadialGradient(r-a*.3,o-a*.3,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(.5,"rgba(200,215,225,0.18)"),l.addColorStop(.85,"rgba(40,50,60,0.25)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.beginPath(),e.ellipse(r,o,a,a*(.8+n()*.5),n()*3,0,Math.PI*2),e.fill(),a>8&&n()<.6&&(e.fillStyle="rgba(210,220,230,0.12)",e.fillRect(r-1,o,2,a*(2+n()*5)))}}message(t,e="info",n=5){let i=document.createElement("div");for(i.className="msg "+e,i.textContent=t,this.msgBox.prepend(i);this.msgBox.children.length>6;)this.msgBox.lastChild.remove();setTimeout(()=>i.classList.add("fade"),n*1e3),setTimeout(()=>i.remove(),n*1e3+1200)}setCamera(t){this.camLabel.textContent="Visuale: "+$o[t].name,this.camLabel.classList.remove("fade"),clearTimeout(this._camT),this._camT=setTimeout(()=>this.camLabel.classList.add("fade"),1800)}toggleData(){this.showData=!this.showData,this.data.style.display=this.showData?"":"none"}update(t,e,n,i,r,o,a){let l=e.out,c=_n("droplets"),h=o.inside?Q(a,0,.9):0;if(Math.abs((this._wet||0)-h)>.01&&(c.style.opacity=h.toFixed(2),this._wet=h),this._dataTimer+=t,this._dataTimer>.1&&this.showData){this._dataTimer=0;let p=l.ias/.514444,v=n.waterLiters(),g=v/le.waterCapacity,m=(n.engines[0].lever+n.engines[1].lever)/2,S=n.engines.some(w=>w.reverse>.05),_=(w,y,T="")=>`<div class="cell ${T}"><span>${w}</span><b>${y}</b></div>`,x=n.gearPos>.98?"GI\xD9":n.gearPos<.02?"SU":"IN MOTO",M=n.probePos>.95?"ESTESE":n.probePos<.05?"RETRATTE":"\u2026",b=Math.round(l.heading*hu)%360;b<=0&&(b+=360),this.data.innerHTML=_("IAS",`${p.toFixed(0)} kt`,p>le.vmo?"bad":"")+_("ALT",`${Math.round(l.alt/.3048)} ft`)+_("RAD ALT",`${Math.max(0,Math.round(l.radAlt/.3048))} ft`,l.radAlt<30&&!l.onWater&&!l.onGround?"warn":"")+_("V/S",`${Math.round(l.vs/.00508)} fpm`)+_("PRUA",`${String(b).padStart(3,"0")}\xB0`)+_("POTENZA",S?"REVERSE":`${Math.round(n.engines[0].torque)}% TQ`)+_("FLAP",`${Math.round(n.flapPos)}\xB0 (${le.flapDetents[n.flapIndex]}\xB0)`)+_("CARRELLO",x,n.gearPos>.5&&l.surfaceUnder==="water"&&l.radAlt<150?"bad":"")+_("SONDE",M,n.probePos>.5?"warn":"")+_("ACQUA",`${Math.round(v)} L (${Math.round(g*100)}%)`,n.foamArmed?"foam":"")+_("SGANCIO",Ps[n.dropMode].id)+_("MASSA",`${Math.round(n.totalMass())} kg`,n.warn.overweight?"warn":"")+_("CARB.",`${Math.round(n.fuel)} kg`,n.warn.lowFuel?"warn":"")+_("TRIM",`${(n.elevTrim*100).toFixed(0)}%`)+_("MANETTE",`${Math.round(m*100)}%`)+_("G",`${l.nz.toFixed(2)}`,l.nz>3?"bad":"")}let u=n.warn,d=[];u.stall&&d.push("STALLO"),u.gearWater&&d.push("CARRELLO ESTRATTO \u2014 AMMARAGGIO!"),u.gearUpLand&&d.push("CARRELLO RETRATTO!"),u.overspeed&&d.push("VELOCIT\xC0 ECCESSIVA"),u.probeSpeed&&d.push("SONDE: VELOCIT\xC0 ECCESSIVA"),u.tanksFull&&d.push("SERBATOI PIENI \u2014 RITRARRE LE SONDE"),l.overG>0&&d.push("SOVRACCARICO "+l.nz.toFixed(1)+" g");let f=d.join("<br>");f!==this._warnT&&(this.warnBox.innerHTML=f,this._warnT=f),this._mapTimer+=t,this._mapTimer>.25&&(this._mapTimer=0,this._drawMap(e,i))}_drawMap(t,e){let n=this.mapCanvas,i=this.mapCtx,r=n.width,o=n.height,a=r/11e3,l=r/2,c=o/2,h=(_,x)=>[l+_*a,c+x*a];if(i.clearRect(0,0,r,o),i.fillStyle="rgba(20,32,22,0.82)",i.fillRect(0,0,r,o),!this._lakePath){let _=[];for(let x=0;x<Math.PI*2;x+=.08){let M=Math.cos(x)*$t.lake.a,b=Math.sin(x)*$t.lake.b,w=$t.lake.cx+M*Math.cos(.35)-b*Math.sin(.35),y=$t.lake.cz+M*Math.sin(.35)+b*Math.cos(.35);_.push([w,y])}this._lakePath=_}i.fillStyle="#2a5f86",i.beginPath(),this._lakePath.forEach(([_,x],M)=>{let[b,w]=h(_,x);M?i.lineTo(b,w):i.moveTo(b,w)}),i.closePath(),i.fill();let u=$t.runway;i.strokeStyle="#ddd",i.lineWidth=3,i.beginPath();let d=Math.cos(.35)*u.len/2,f=Math.sin(.35)*u.len/2;i.moveTo(...h(u.cx-d,u.cz-f)),i.lineTo(...h(u.cx+d,u.cz+f)),i.stroke();let p=e.summary();for(let _ of p.zones){if(_.state==="quiete")continue;let[x,M]=h(_.x,_.z),b=3+Math.sqrt(_.burning)*.5;i.fillStyle=_.state==="spento"?"rgba(120,120,120,0.9)":_.state==="contenuto"?"rgba(255,170,0,0.9)":"rgba(255,50,20,0.95)",i.beginPath(),i.arc(x,M,Math.min(b,14),0,Math.PI*2),i.fill()}let[v,g]=h(t.pos.x,t.pos.z),m=t.out.heading;i.save(),i.translate(v,g),i.rotate(m),i.fillStyle="#ffd400",i.beginPath(),i.moveTo(0,-8),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore(),i.fillStyle="#ccc",i.font="10px Arial",i.fillText("N \u2191",6,12);let S=p.zones.filter(_=>_.state!=="quiete").map(_=>{let x=Math.hypot(_.x-t.pos.x,_.z-t.pos.z)/1852,M=Math.atan2(_.x-t.pos.x,-(_.z-t.pos.z))*hu;return M<0&&(M+=360),`<div class="fz ${_.state}"><b>${_.name}</b> \u2014 ${_.state.toUpperCase()}<br><small>${Math.round(M)}\xB0 \xB7 ${x.toFixed(1)} NM</small></div>`}).join("");S!==this._fhtml&&(this.fireList.innerHTML=S+`<div class="fz tot">Area bruciata: ${p.burntHa.toFixed(1)} ha</div>`,this._fhtml=S)}showCrash(t){_n("crash").style.display="flex",_n("crashReason").textContent=t}hideCrash(){_n("crash").style.display="none"}};function cp(s,t){if(!("ontouchstart"in window||navigator.maxTouchPoints>0))return;let n=_n("touch");n.style.display="block";let i=_n("tstick"),r=_n("tknob"),o=h=>{let u=i.getBoundingClientRect();for(let d of h.targetTouches){let f=(d.clientX-u.left)/u.width*2-1,p=(d.clientY-u.top)/u.height*2-1;s.touch.active=!0,s.touch.x=Q(f,-1,1),s.touch.y=Q(-p,-1,1),r.style.transform=`translate(${Q(f,-1,1)*45}px, ${Q(p,-1,1)*45}px)`}h.preventDefault()};i.addEventListener("touchstart",o,{passive:!1}),i.addEventListener("touchmove",o,{passive:!1}),i.addEventListener("touchend",()=>{s.touch.active=!1,s.touch.x=s.touch.y=0,r.style.transform=""});let a=_n("tthr"),l=_n("tthrknob"),c=h=>{let u=a.getBoundingClientRect(),d=h.targetTouches[0],f=Q(1-(d.clientY-u.top)/u.height,0,1);s.touch.throttle=f,l.style.bottom=`${f*100}%`,h.preventDefault()};a.addEventListener("touchstart",c,{passive:!1}),a.addEventListener("touchmove",c,{passive:!1});for(let h of n.querySelectorAll("button[data-act]"))h.addEventListener("touchstart",u=>{u.preventDefault();let d=h.dataset.act;d==="brakes"?s.brakes=1:t(d)},{passive:!1})}var Je=s=>document.getElementById(s),Wv=()=>new Promise(s=>setTimeout(s,16)),hp=location.hash.includes("test"),mn={quality:localStorage.getItem("cl415.quality")||(matchMedia("(pointer: coarse)").matches?"low":"medium"),start:localStorage.getItem("cl415.start")||"air",wind:localStorage.getItem("cl415.wind")||"moderate"};try{for(let s of["quality","start","wind"])Je(s+"Sel").value=mn[s]}catch{}var ln=new Tc,gn=null;Je("startBtn").addEventListener("click",async()=>{mn.quality=Je("qualitySel").value,mn.start=Je("startSel").value,mn.wind=Je("windSel").value;try{for(let s of["quality","start","wind"])localStorage.setItem("cl415."+s,mn[s])}catch{}ln.start(),Je("menu").style.display="none",gn?Ko(mn.start):await qv(),gn.paused=!1});function Xv(){try{let t=document.createElement("canvas").getContext("webgl2");return!!(t&&t.getExtension("EXT_clip_control"))}catch{return!1}}async function qv(){let s=Je("loading"),t=Je("loadStatus");s.style.display="flex";let e=async y=>{t.textContent=y,await Wv()},n=mn.quality;await e("Preparazione del motore grafico\u2026");let i=Xv(),r=new rc({antialias:n!=="low",powerPreference:"high-performance",reverseDepthBuffer:i,logarithmicDepthBuffer:!i});r.setPixelRatio(Math.min(window.devicePixelRatio,n==="high"?2:n==="low"?1:1.25)),r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Eo,r.toneMappingExposure=.52,r.shadowMap.enabled=!0,r.shadowMap.type=vs,Je("app").prepend(r.domElement),r.domElement.id="gl";let o=new ds,a=new hn(70,window.innerWidth/window.innerHeight,.05,95e3);a.layers.enable(1),await e("Cielo e atmosfera\u2026");let l=new lc(o,r,{quality:n});l.wind.speed=mn.wind==="calm"?1.5:mn.wind==="strong"?9:4.6,l.wind.gust=mn.wind==="calm"?.6:mn.wind==="strong"?5:2.2,l.wind.turb=mn.wind==="calm"?.3:mn.wind==="strong"?2.2:1,l.updateWindBase(),await e("Generazione del terreno (valle, lago, montagne)\u2026");let c=new uc({quality:n});await e("Incendi boschivi\u2026");let h=new gc(o,c,l,{quality:n});await e("Superficie del terreno\u2026"),o.add(c.buildMesh(h.fireAtlas)),await e("Aeroporto e rampa idrovolanti\u2026");let u=Gf(c);o.add(u),await e("Vegetazione\u2026");let d=new pc(c,o,{quality:n});d.meshes.forEach(y=>y.layers.set(1)),d.burnFn=(y,T)=>h.burntAt(y,T),await e("Lago con riflessi\u2026");let f=new mc({terrain:c,sunDir:l.sunDir,quality:n,renderer:r});o.add(f.mesh),await e("Canadair CL-415: fusoliera, ali, livrea\u2026");let p=new vc({quality:n});o.add(p.group),await e("Cabina di pilotaggio e strumenti\u2026");let v=new bc({quality:n});p.group.add(v.group);let g={groundHeight:(y,T)=>Math.abs(y)>$t.half-50||Math.abs(T)>$t.half-50?2e3:c.heightAt(y,T),waterHeight:(y,T,R)=>f.heightAt(y,T,R),windAt:(y,T,R,E,C)=>l.windAt(y,T,R,E,C,Math.max(c.heightAt(y,R),0)),surfaceFriction:(y,T)=>c.surfaceFriction(y,T)},m=new wc(g),S=new Yo;m.sys=S;let _=new Ec(o,{quality:n,world:g,onDeposit:(y,T,R,E)=>h.deposit(y,T,R,E)}),x=new Ac(r.domElement),M=new D($t.runway.cx+Ee.x*55+ve.x*200,$t.runway.elev+17,$t.runway.cz+Ee.z*55+ve.z*200),b=new Cc(a,{towerPos:M}),w=new Pc;cp(x,y=>x.actions.push(y)),gn={renderer:r,scene:o,camera:a,env:l,terrain:c,fires:h,veg:d,water:f,model:p,cockpit:v,world:g,fm:m,sys:S,fx:_,input:x,rig:b,hud:w,paused:!0,time:0,crashShown:!1,airfield:u},h.start(),Ko(mn.start),await e("Pronto."),s.style.display="none",Je("hud").style.display="block",w.message("Benvenuto a bordo del CL-415. Premi H per i comandi.","info",8),w.message("Incendi attivi sui versanti a sud del lago: guarda la mappa in alto a destra.","warn",10),w.setCamera(b.mode),window.addEventListener("resize",Yv),gn.last=performance.now(),window.__cl415=gn,hp?window.__advance=(y,T=30,R=!0)=>{let E=Math.max(1,Math.round(y*T));for(let C=0;C<E;C++)Tu(gn.last+1e3/T,R&&C===E-1);return!0}:requestAnimationFrame(Tu)}function Yv(){let{renderer:s,camera:t,water:e}=gn;s.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight,mn.quality)}function Ko(s){let{fm:t,sys:e,input:n,hud:i,rig:r}=gn,o=new Yo;for(let c of Object.keys(o))c!=="events"&&(e[c]=o[c]);e.engines=o.engines,e.fuel=2300,n.throttle=0,n.reverse=0,n.stick.x=n.stick.y=0,n.rudder=0;let a=$t.lake,l=Math.atan2(Ee.x,-Ee.z);if(s==="water"){let c=mu(-2600,-280);e.gearDown=!1,e.gearPos=0,e.flapIndex=2,e.flapPos=15,t.reset(new D(c.x,0,c.z),-l,0,"water"),n.throttle=0}else if(s==="runway"){let c=$t.runway,h=c.cx-Ee.x*(c.len/2-60),u=c.cz-Ee.z*(c.len/2-60);e.gearDown=!0,e.gearPos=1,e.flapIndex=1,e.flapPos=10,e.parkingBrake=!1,t.reset(new D(h,0,u),-l,0,"runway")}else{let c=mu(-5200,0);e.gearDown=!1,e.gearPos=0,e.flapIndex=0,e.flapPos=0,t.reset(new D(c.x,330,c.z),-l,135*.514444,"air"),n.throttle=.55,e.engines.forEach(h=>{h.lever=.55,h.nh=92}),e.elevTrim=.1}gn.crashShown=!1,i.hideCrash(),r.lookReset()}function Zv(s){let{sys:t,fm:e,hud:n,rig:i,input:r}=gn;switch(s){case"flapDown":t.setFlaps(1),ln.click(900,.06,.3);break;case"flapUp":t.setFlaps(-1),ln.click(900,.06,.3);break;case"gear":t.toggleGear(e),ln.click(600,.08,.4);break;case"probes":t.toggleProbes(e),ln.click(1200,.05,.3);break;case"drop":t.drop(),ln.click(2e3,.03,.4);break;case"mode":t.cycleDropMode(),ln.click(2400,.03,.3);break;case"preset":t.cycleScoopPreset(),ln.click(2400,.03,.3);break;case"foam":t.toggleFoam(),ln.click(1600,.04,.3);break;case"lights":t.lights.landing=!t.lights.landing,n.message("Fari di atterraggio: "+(t.lights.landing?"ACCESI":"SPENTI")),ln.click();break;case"parking":t.parkingBrake=!t.parkingBrake,n.message("Freno di stazionamento: "+(t.parkingBrake?"INSERITO":"DISINSERITO"));break;case"thrMax":r.throttle=1;break;case"thrIdle":r.throttle=0;break;case"camera":i.set(i.mode+1),n.setCamera(i.mode);break;case"hud":n.toggleData();break;case"help":Au("help");break;case"pause":Ru();break;case"lookReset":i.lookReset();break;case"mouseYoke":r.mouseYoke=!r.mouseYoke,n.message("Cloche col mouse: "+(r.mouseYoke?"ATTIVA":"DISATTIVA"));break;case"gamepad":n.message("Gamepad collegato","good");break;case"restart":e.crash&&Ko(mn.start);break;case"trimUpPulse":t.elevTrim=Q(t.elevTrim+.05,-1,1);break;case"trimDownPulse":t.elevTrim=Q(t.elevTrim-.05,-1,1);break;case"debug":gn.debug=!gn.debug,Je("debug").style.display=gn.debug?"block":"none";break;default:s.startsWith("cam")&&(i.set(parseInt(s.slice(3),10)-1),n.setCamera(i.mode))}}function Au(s){let t=Je(s);t.style.display=t.style.display==="flex"?"none":"flex"}function Ru(){gn.paused=!gn.paused,Je("pause").style.display=gn.paused?"flex":"none",gn.paused&&ln.ctx?ln.ctx.suspend():ln.ctx&&ln.ctx.resume()}Je("resumeBtn").addEventListener("click",()=>Ru());Je("restartBtn").addEventListener("click",()=>{Ko(mn.start),Ru()});Je("menuBtn").addEventListener("click",()=>{Je("pause").style.display="none",Je("menu").style.display="flex"});Je("crashBtn").addEventListener("click",()=>Ko(mn.start));Je("helpClose").addEventListener("click",()=>Au("help"));for(let s of document.querySelectorAll("[data-help]"))s.addEventListener("click",()=>Au("help"));var Jo=new D;function Tu(s,t=!0){hp||requestAnimationFrame(Tu);let e=gn,n=Math.min(.05,(s-e.last)/1e3);e.last=s;let{fm:i,sys:r,input:o,rig:a,hud:l,model:c,cockpit:h,fx:u,fires:d,veg:f,env:p,water:v,camera:g,renderer:m}=e;for(let E of o.popActions())Zv(E);if(e.paused){t&&m.render(e.scene,g);return}e.time+=n;let S=i.out,_=S.onGround||S.onWater;o.update(n,_),i.ctl.elevator=o.stick.y,i.ctl.aileron=o.stick.x,i.ctl.rudder=o.rudder,i.ctl.tiller=o.rudder;let x=o.brakes;i.ctl.brakeL=Q(x*(1+Math.max(0,-o.rudder)*.6-Math.max(0,o.rudder)*.5),0,1),i.ctl.brakeR=Q(x*(1+Math.max(0,o.rudder)*.6-Math.max(0,-o.rudder)*.5),0,1);for(let E of r.engines)E.lever=o.throttle,E.reverseLever=o.reverse;r.elevTrim=Q(r.elevTrim+o.trimRate*n*.12,-1,1),e.autopilot&&e.autopilot(n,e),i.update(n);for(let E of r.events){let C=E.level==="caution"?"warn":E.level;l.message(E.text,C,E.type==="drop"?2.5:5),(E.type==="full"||E.type==="scoopdone")&&ln.chime(2,1046),E.level==="caution"&&ln.chime(1,880)}r.events.length=0;for(let E of d.events)l.message(E.text,E.level==="good"?"good":"warn",7),E.level==="good"&&ln.chime(3,1318);d.events.length=0,i.crash&&!e.crashShown&&(e.crashShown=!0,l.showCrash(i.crash.reason),ln.thump(1.5,S.surfaceUnder==="water")),c.group.quaternion.copy(i.quat),c.group.position.copy(i.cg).negate().applyQuaternion(i.quat).add(i.pos),c.update(n,r,i),c.group.updateMatrixWorld(!0);let M=a.inside;h.group.visible=M,c.setInterior(M),M&&h.update(n,i,r,e.time);let b=o.consumeLook();p.windAt(i.pos.x,i.pos.y,i.pos.z,e.time,Jo),a.update(n,i,b,{eye:h.eye,groundAt:(E,C)=>Math.max(e.world.groundHeight(E,C),.3),shake:u.cameraShake,turb:p.thermals.length?.5:0}),e.camOverride&&e.camOverride(g),d.update(n,e.time,g.position),u.update(n,i,r,c,p,g,e.time),f.update(g.position,n),e._vegT=(e._vegT||0)+n,e._vegT>2.5&&(e._vegT=0,f.refreshColors()),p.update(n,i.pos,g.position),v.update(n,e.time,p),e.terrain.material.userData.uniforms.uTime.value=e.time;let w=e.airfield.userData.windsock;if(w){let E=Math.atan2(Jo.x,Jo.z);w.rotation.y=E-Math.PI/2,w.userData.sock.rotation.y=0,w.userData.sock.rotation.z=Math.PI/2-Q(Math.hypot(Jo.x,Jo.z)/8,.1,1)*1.3+Math.PI/2-Math.PI/2}let y=i.pos.clone().sub(g.position),T=y.length(),R=T>1?-i.vel.dot(y)/T:0;if(ln.update(n,i,r,{inside:M,distance:T,closing:R}),l.update(n,i,r,d,o,a,u.windscreenWet),!!t&&(u.render(g,p),d.render(g,p),m.render(e.scene,g),e.debug)){let E=m.info;Je("debug").textContent=`fps ${(1/Math.max(n,.001)).toFixed(0)} | draw ${E.render.calls} | tri ${(E.render.triangles/1e6).toFixed(2)}M | part ${JSON.stringify(u.stats())} | alpha ${(S.alpha/Yt).toFixed(1)} beta ${(S.beta/Yt).toFixed(1)} | wet ${S.wetLength.toFixed(1)} depth ${S.hullDepth.toFixed(2)} | scoop ${S.scoopRate.toFixed(0)} L/s`}}Je("menu").style.display="flex";})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
