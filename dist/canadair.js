(()=>{var Ud=0,Dh=1,Od=2;var As=1,Bd=2,Mr=3,is=0,nn=1,sn=2,Mi=0,ss=1,Rs=2,Nh=3,Fh=4,kd=5;var Cs=100,zd=101,Hd=102,Gd=103,Vd=104,Wd=200,Xd=201,qd=202,Yd=203,Uh=204,Oh=205,Zd=206,$d=207,Kd=208,Jd=209,Qd=210,jd=211,tf=212,ef=213,nf=214,za=0,Ha=1,Ga=2,lr=3,Va=4,Wa=5,Xa=6,qa=7,bl=0,sf=1,rf=2,ai=0,Bh=1,kh=2,zh=3,Uo=4,Hh=5,Gh=6,Vh=7;var Wh=300,rs=301,Ps=302,wl=303,El=304,Oo=306,Ms=1e3,Qn=1001,Ya=1002,pn=1003,of=1004;var Bo=1005;var Ke=1006,Tl=1007;var Si=1008;var Nn=1009,Xh=1010,qh=1011,Sr=1012,Al=1013,li=1014,jn=1015,Vn=1016,Rl=1017,Cl=1018,br=1020,Yh=35902,Zh=35899,$h=1021,Kh=1022,Tn=1023,_i=1026,os=1027,Pl=1028,Il=1029,as=1030,Ll=1031;var Dl=1033,ko=33776,zo=33777,Ho=33778,Go=33779,Nl=35840,Fl=35841,Ul=35842,Ol=35843,Bl=36196,kl=37492,zl=37496,Hl=37488,Gl=37489,Vo=37490,Vl=37491,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,$l=37813,Kl=37814,Jl=37815,Ql=37816,jl=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,Wo=36285,cc=36286;var Kr=2300,Za=2301,Ba=2302,yh=2303,Mh=2400,Sh=2401,bh=2402;var af=3200;var Xo=0,lf=1,ci="",De="srgb",Jr="srgb-linear",Qr="linear",Ie="srgb";var ka=7680;var cf=519,hf=512,uf=513,df=514,hc=515,ff=516,pf=517,uc=518,mf=519,Jh=35044,ti=35048;var Qh="300 es",ri=2e3,cr=2001;function $p(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gf(){let s=jr("canvas");return s.style.display="block",s}var id={},hr=null;function to(...s){let t="THREE."+s.shift();hr?hr("log",t,...s):console.log(t,...s)}function xf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Jt(...s){s=xf(s);let t="THREE."+s.shift();if(hr)hr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function jt(...s){s=xf(s);let t="THREE."+s.shift();if(hr)hr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ys(...s){let t=s.join(" ");t in id||(id[t]=!0,Jt(...s))}function _f(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vf={[za]:Ha,[Ga]:Xa,[Va]:qa,[lr]:Wa,[Ha]:za,[Xa]:Ga,[qa]:Va,[Wa]:lr},vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qc=Math.PI/180,eo=180/Math.PI;function Fi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function pe(s,t,e){return Math.max(t,Math.min(e,s))}function Jp(s,t){return(s%t+t)%t}function Yc(s,t,e){return(1-e)*s+e*t}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var su=class su{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var ct=su,qe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),_=Math.sin(S);g=Math.sin(g*S)/_,a=Math.sin(a*S)/_,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+v*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+v*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zc.copy(this).projectOnVector(t),this.sub(Zc)}reflect(t){return this.sub(Zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var D=ru,Zc=new D,sd=new qe,ou=class ou{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],S=i[1],_=i[4],x=i[7],M=i[2],b=i[5],w=i[8];return r[0]=o*v+a*S+l*M,r[3]=o*m+a*_+l*b,r[6]=o*g+a*x+l*w,r[1]=c*v+h*S+u*M,r[4]=c*m+h*_+u*b,r[7]=c*g+h*x+u*w,r[2]=d*v+f*S+p*M,r[5]=d*m+f*_+p*b,r[8]=d*g+f*x+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ou.prototype.isMatrix3=!0;var se=ou,$c=new se,rd=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qp(){let s={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ie&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ie&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jr]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:rd,fromXYZ:od,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:Ie,toXYZ:rd,fromXYZ:od,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}var ve=Qp();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function or(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gs,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gs===void 0&&(Gs=jr("canvas")),Gs.width=t.width,Gs.height=t.height;let i=Gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jp=0,ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Kc(i[o].image)):r.push(Kc(i[o]))}else r=Kc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var t0=0,Jc=new D,Ln=class s extends vi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Qn,i=Qn,r=Ke,o=Si,a=Tn,l=Nn,c=s.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Fi(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Wh;Ln.DEFAULT_ANISOTROPY=1;var au=class au{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(f+1)/2,M=(g+1)/2,b=(h+d)/4,w=(u+v)/4,y=(p+m)/4;return _>x&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=w/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=y/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=w/r,i=y/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};au.prototype.isVector4=!0;var ye=au,Ka=class extends vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ln(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ur(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},no=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sl=class Sl{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,v,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),o=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(e0,t,n0)}lookAt(t,e,n){let i=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),qi.crossVectors(n,Bn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),qi.crossVectors(n,Bn)),qi.normalize(),ua.crossVectors(Bn,qi),i[0]=qi.x,i[4]=ua.x,i[8]=Bn.x,i[1]=qi.y,i[5]=ua.y,i[9]=Bn.y,i[2]=qi.z,i[6]=ua.z,i[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],S=n[3],_=n[7],x=n[11],M=n[15],b=i[0],w=i[4],y=i[8],E=i[12],A=i[1],R=i[5],C=i[9],L=i[13],P=i[2],F=i[6],U=i[10],B=i[14],X=i[3],O=i[7],H=i[11],V=i[15];return r[0]=o*b+a*A+l*P+c*X,r[4]=o*w+a*R+l*F+c*O,r[8]=o*y+a*C+l*U+c*H,r[12]=o*E+a*L+l*B+c*V,r[1]=h*b+u*A+d*P+f*X,r[5]=h*w+u*R+d*F+f*O,r[9]=h*y+u*C+d*U+f*H,r[13]=h*E+u*L+d*B+f*V,r[2]=p*b+v*A+m*P+g*X,r[6]=p*w+v*R+m*F+g*O,r[10]=p*y+v*C+m*U+g*H,r[14]=p*E+v*L+m*B+g*V,r[3]=S*b+_*A+x*P+M*X,r[7]=S*w+_*R+x*F+M*O,r[11]=S*y+_*C+x*U+M*H,r[15]=S*E+_*L+x*B+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],S=l*f-c*d,_=a*f-c*u,x=a*d-l*u,M=o*f-c*h,b=o*d-l*h,w=o*u-a*h;return e*(v*S-m*_+g*x)-n*(p*S-m*M+g*b)+i*(p*_-v*M+g*w)-r*(p*x-v*b+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],S=e*a-n*o,_=e*l-i*o,x=e*c-r*o,M=n*l-i*a,b=n*c-r*a,w=i*c-r*l,y=h*v-u*p,E=h*m-d*p,A=h*g-f*p,R=u*m-d*v,C=u*g-f*v,L=d*g-f*m,P=S*L-_*C+x*R+M*A-b*E+w*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return t[0]=(a*L-l*C+c*R)*F,t[1]=(i*C-n*L-r*R)*F,t[2]=(v*w-m*b+g*M)*F,t[3]=(d*b-u*w-f*M)*F,t[4]=(l*A-o*L-c*E)*F,t[5]=(e*L-i*A+r*E)*F,t[6]=(m*x-p*w-g*_)*F,t[7]=(h*w-d*x+f*_)*F,t[8]=(o*C-a*A+c*y)*F,t[9]=(n*A-e*C-r*y)*F,t[10]=(p*b-v*x+g*S)*F,t[11]=(u*x-h*b-f*S)*F,t[12]=(a*E-o*R-l*y)*F,t[13]=(e*R-n*E+i*y)*F,t[14]=(v*_-p*M-m*S)*F,t[15]=(h*M-u*_+d*S)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,v=o*h,m=o*u,g=a*u,S=l*c,_=l*h,x=l*u,M=n.x,b=n.y,w=n.z;return i[0]=(1-(v+g))*M,i[1]=(f+x)*M,i[2]=(p-_)*M,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+g))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(p+_)*w,i[9]=(m-S)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Vs.set(i[0],i[1],i[2]).length(),a=Vs.set(i[4],i[5],i[6]).length(),l=Vs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,u=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,e.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===cr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ri,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===ri)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===cr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sl.prototype.isMatrix4=!0;var Se=Sl,Vs=new D,ni=new Se,e0=new D(0,0,0),n0=new D(1,1,1),qi=new D,ua=new D,Bn=new D,ad=new Se,ld=new qe,Dn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},i0=0,cd=new D,Ws=new qe,Ci=new Se,da=new D,Or=new D,s0=new D,r0=new qe,hd=new D(1,0,0),ud=new D(0,1,0),dd=new D(0,0,1),fd={type:"added"},o0={type:"removed"},Xs={type:"childadded",child:null},Qc={type:"childremoved",child:null},Je=class s extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new Dn,n=new qe,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new se}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(hd,t)}rotateY(t){return this.rotateOnAxis(ud,t)}rotateZ(t){return this.rotateOnAxis(dd,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hd,t)}translateY(t){return this.translateOnAxis(ud,t)}translateZ(t){return this.translateOnAxis(dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Or,da,this.up):Ci.lookAt(da,Or,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fd),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(o0),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fd),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,s0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,r0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new D(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function jc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ve.workingColorSpace){if(t=Jp(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return ve.colorSpaceToWorking(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ve.workingToColorSpace(wn.copy(this),t),Math.round(pe(wn.r*255,0,255))*65536+Math.round(pe(wn.g*255,0,255))*256+Math.round(pe(wn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(wn.copy(this),e);let n=wn.r,i=wn.g,r=wn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=De){ve.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,i=wn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(fa);let n=Yc(Yi.h,fa.h,e),i=Yc(Yi.s,fa.s,e),r=Yc(Yi.l,fa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new bt;bt.NAMES=yf;var so=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ss=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new D,Pi=new D,th=new D,Ii=new D,qs=new D,Ys=new D,pd=new D,eh=new D,nh=new D,ih=new D,sh=new ye,rh=new ye,oh=new ye,Ni=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ii.subVectors(t,e),i.cross(ii);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ii.subVectors(i,e),Pi.subVectors(n,e),th.subVectors(t,e);let o=ii.dot(ii),a=ii.dot(Pi),l=ii.dot(th),c=Pi.dot(Pi),h=Pi.dot(th),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),oh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(t,e,n,i){return ii.subVectors(n,e),Pi.subVectors(t,e),ii.cross(Pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ii.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;qs.subVectors(i,n),Ys.subVectors(r,n),eh.subVectors(t,n);let l=qs.dot(eh),c=Ys.dot(eh);if(l<=0&&c<=0)return e.copy(n);nh.subVectors(t,i);let h=qs.dot(nh),u=Ys.dot(nh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qs,o);ih.subVectors(t,r);let f=qs.dot(ih),p=Ys.dot(ih);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ys,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return pd.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(pd,a);let g=1/(m+v+d);return o=v*g,a=d*g,e.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),ma.subVectors(this.max,Br),Zs.subVectors(t.a,Br),$s.subVectors(t.b,Br),Ks.subVectors(t.c,Br),Zi.subVectors($s,Zs),$i.subVectors(Ks,$s),gs.subVectors(Zs,Ks);let e=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-gs.y,gs.x,0];return!ah(e,Zs,$s,Ks,ma)||(e=[1,0,0,0,1,0,0,0,1],!ah(e,Zs,$s,Ks,ma))?!1:(ga.crossVectors(Zi,$i),e=[ga.x,ga.y,ga.z],ah(e,Zs,$s,Ks,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Li=[new D,new D,new D,new D,new D,new D,new D,new D],si=new D,pa=new yi,Zs=new D,$s=new D,Ks=new D,Zi=new D,$i=new D,gs=new D,Br=new D,ma=new D,ga=new D,xs=new D;function ah(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xs.fromArray(s,r);let a=i.x*Math.abs(xs.x)+i.y*Math.abs(xs.y)+i.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new D,xa=new ct,l0=0,Te=class extends vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},c0=new yi,kr=new D,lh=new D,Oi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):c0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(lh)),this.expandByPoint(kr.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},h0=0,Jn=new Se,ch=new Je,Js=new D,kn=new yi,zr=new yi,dn=new D,xe=class s extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($p(t)?oo:ro)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(kn.min,zr.min),kn.expandByPoint(dn),dn.addVectors(kn.max,zr.max),kn.expandByPoint(dn)):(kn.expandByPoint(zr.min),kn.expandByPoint(zr.max))}kn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(t,c),dn.add(Js)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new D,l[y]=new D;let c=new D,h=new D,u=new D,d=new ct,f=new ct,p=new ct,v=new D,m=new D;function g(y,E,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(R),a[y].add(v),a[E].add(v),a[A].add(v),l[y].add(m),l[E].add(m),l[A].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,E=S.length;y<E;++y){let A=S[y],R=A.start,C=A.count;for(let L=R,P=R+C;L<P;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new D,x=new D,M=new D,b=new D;function w(y){M.fromBufferAttribute(i,y),b.copy(M);let E=a[y];_.copy(E),_.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(b,E);let R=x.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,R)}for(let y=0,E=S.length;y<E;++y){let A=S[y],R=A.start,C=A.count;for(let L=R,P=R+C;L<P;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},In=new D,ao=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hh=new D,u0=new D,d0=new se,zn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=hh.subVectors(n,e).cross(u0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(hh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||d0.getNormalMatrix(t),i=this.coplanarPoint(hh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},f0=0,oi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ss,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Oh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fr=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs,Hr=new D,js=new D,tr=new D,er=new ct,Gr=new ct,Mf=new Se,_a=new D,Vr=new D,va=new D,md=new ct,uh=new ct,gd=new ct,lo=class extends Je{constructor(t=new fr){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qa(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new ao(n,3,0,!1)),Qs.setAttribute("uv",new ao(n,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-tr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ya(_a.set(-.5,-.5,0),tr,o,js,i,r),ya(Vr.set(.5,-.5,0),tr,o,js,i,r),ya(va.set(.5,.5,0),tr,o,js,i,r),md.set(0,0),uh.set(1,0),gd.set(1,1);let a=t.ray.intersectTriangle(_a,Vr,va,!1,Hr);if(a===null&&(ya(Vr.set(-.5,.5,0),tr,o,js,i,r),uh.set(0,1),a=t.ray.intersectTriangle(_a,va,Vr,!1,Hr),a===null))return;let l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:Ni.getInterpolation(Hr,_a,Vr,va,md,uh,gd,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ya(s,t,e,n,i,r){er.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Gr.x=r*er.x-i*er.y,Gr.y=i*er.x+r*er.y):Gr.copy(er),s.copy(t),s.x+=Gr.x,s.y+=Gr.y,s.applyMatrix4(Mf)}var Di=new D,dh=new D,Ma=new D,Sa=new D,co=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){dh.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(dh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(dh).addScaledVector(Ma,d),f}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,S=n.y-o.y,_=n.z-o.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(h),w,y,E,A,R,C,L,P,F,U,B,X;if(x>=M&&x>=b?(E=l,C=u,F=p,X=g,l>=0?(w=c,y=h,A=d,R=f,L=v,P=m,U=S,B=_):(w=h,y=c,A=f,R=d,L=m,P=v,U=_,B=S)):M>=b?(E=c,C=d,F=v,X=S,c>=0?(w=h,y=l,A=f,R=u,L=m,P=p,U=_,B=g):(w=l,y=h,A=u,R=f,L=p,P=m,U=g,B=_)):(E=h,C=f,F=m,X=_,h>=0?(w=l,y=c,A=u,R=d,L=p,P=v,U=g,B=S):(w=c,y=l,A=d,R=u,L=v,P=p,U=S,B=g)),E===0)return null;let O=w/E,H=y/E,V=1/E,ot=A-O*C,rt=R-H*C,yt=L-O*F,Lt=P-H*F,Xt=U-O*X,K=B-H*X,tt=Xt*Lt-K*yt,ht=ot*K-rt*Xt,zt=yt*rt-Lt*ot;if(i){if(tt<0||ht<0||zt<0)return null}else if((tt<0||ht<0||zt<0)&&(tt>0||ht>0||zt>0))return null;let _t=tt+ht+zt;if(_t===0)return null;let Tt=V*(tt*C+ht*F+zt*X);return(_t>0?Tt<0:Tt>0)?null:this.at(Tt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xd=new Se,_s=new co,ba=new Oi,_d=new D,wa=new D,Ea=new D,Ta=new D,fh=new D,Aa=new D,vd=new D,Ra=new D,q=class extends Je{constructor(t=new xe,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(fh.fromBufferAttribute(u,t),o?Aa.addScaledVector(fh,h):Aa.addScaledVector(fh.sub(e),h))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(ba.containsPoint(_s.origin)===!1&&(_s.intersectSphere(ba,_d)===null||_s.origin.distanceToSquared(_d)>(t.far-t.near)**2))&&(xd.copy(r).invert(),_s.copy(t.ray).applyMatrix4(xd),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=_;x<M;x+=3){let b=a.getX(x),w=a.getX(x+1),y=a.getX(x+2);i=Ca(this,g,t,n,c,h,u,b,w,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let S=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);i=Ca(this,o,t,n,c,h,u,S,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=_;x<M;x+=3){let b=x,w=x+1,y=x+2;i=Ca(this,g,t,n,c,h,u,b,w,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let S=m,_=m+1,x=m+2;i=Ca(this,o,t,n,c,h,u,S,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function p0(s,t,e,n,i,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===is,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:s}}function Ca(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,wa),s.getVertexPosition(l,Ea),s.getVertexPosition(c,Ta);let h=p0(s,t,e,n,wa,Ea,Ta,vd);if(h){let u=new D;Ni.getBarycoord(vd,wa,Ea,Ta,u),i&&(h.uv=Ni.getInterpolatedAttribute(i,a,l,c,u,new ct)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Ni.getNormal(wa,Ea,Ta,d.normal),h.face=d,h.barycoord=u}return h}var Bi=class extends Ln{constructor(t=null,e=1,n=1,i,r,o,a,l,c=pn,h=pn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class extends Te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},nr=new Se,yd=new Se,Pa=[],Md=new yi,m0=new Se,Wr=new q,Xr=new Oi,ho=class extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),Md.copy(t.boundingBox).applyMatrix4(nr),this.boundingBox.union(Md)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),Xr.copy(t.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),t.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,nr),yd.multiplyMatrices(n,nr),Wr.matrixWorld=yd,Wr.raycast(t,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(i*this.count),i,this.count,Pl,jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new Oi,g0=new ct(.5,.5),Ia=new D,pr=class{constructor(t=new zn,e=new zn,n=new zn,i=new zn,r=new zn,o=new zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],S=r[12],_=r[13],x=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,g-p,M-S).normalize(),i[1].setComponents(c+o,f+h,g+p,M+S).normalize(),i[2].setComponents(c+a,f+u,g+v,M+_).normalize(),i[3].setComponents(c-a,f-u,g-v,M-_).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,g-m,M-x).normalize();else if(i[4].setComponents(c-l,f-d,g-m,M-x).normalize(),e===ri)i[5].setComponents(c+l,f+d,g+m,M+x).normalize();else if(e===cr)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=g0.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ia.x=i.normal.x>0?t.max.x:t.min.x,Ia.y=i.normal.y>0?t.max.y:t.min.y,Ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ja=new D,tl=new D,Sd=new Se,qr=new co,La=new Oi,ph=new D,bd=new D,uo=class extends Je{constructor(t=new xe,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ja.fromBufferAttribute(e,i-1),tl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ja.distanceTo(tl);t.setAttribute("lineDistance",new Zt(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;Sd.copy(i).invert(),qr.copy(t.ray).applyMatrix4(Sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=h.getX(v),S=h.getX(v+1),_=Da(this,t,qr,l,g,S,v);_&&e.push(_)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=Da(this,t,qr,l,v,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=Da(this,t,qr,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){let v=Da(this,t,qr,l,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Da(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(ja.fromBufferAttribute(a,i),tl.fromBufferAttribute(a,r),e.distanceSqToSegment(ja,tl,ph,bd)>n)return;ph.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ph);if(!(c<t.near||c>t.far))return{distance:c,point:bd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var fo=class extends Ln{constructor(t=[],e=rs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},an=class extends Ln{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends Ln{constructor(t,e,n=li,i,r,o,a=pn,l=pn,c,h=_i,u=1){if(h!==_i&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},el=class extends Ji{constructor(t,e=li,n=rs,i,r,o=pn,a=pn,l,c=_i){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},po=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class s extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function p(v,m,g,S,_,x,M,b,w,y,E){let A=x/w,R=M/y,C=x/2,L=M/2,P=b/2,F=w+1,U=y+1,B=0,X=0,O=new D;for(let H=0;H<U;H++){let V=H*R-L;for(let ot=0;ot<F;ot++){let rt=ot*A-C;O[v]=rt*S,O[m]=V*_,O[g]=P,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[g]=b>0?1:-1,h.push(O.x,O.y,O.z),u.push(ot/w),u.push(1-H/y),B+=1}}for(let H=0;H<y;H++)for(let V=0;V<w;V++){let ot=d+V+F*H,rt=d+V+F*(H+1),yt=d+(V+1)+F*(H+1),Lt=d+(V+1)+F*H;l.push(ot,rt,Lt),l.push(rt,yt,Lt),X+=6}a.addGroup(f,X,E),f+=X,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mo=class s extends xe{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=n*2+r,v=i+1,m=new D,g=new D;for(let S=0;S<=p;S++){let _=0,x=0,M=0,b=0;if(S<=n){let E=S/n,A=E*Math.PI/2;x=-h-t*Math.cos(A),M=t*Math.sin(A),b=-t*Math.cos(A),_=E*u}else if(S<=n+r){let E=(S-n)/r;x=-h+E*e,M=t,b=0,_=u+E*d}else{let E=(S-n-r)/n,A=E*Math.PI/2;x=h+t*Math.sin(A),M=t*Math.cos(A),b=t*Math.sin(A),_=u+d+E*u}let w=Math.max(0,Math.min(1,_/f)),y=0;S===0?y=.5/i:S===p&&(y=-.5/i);for(let E=0;E<=i;E++){let A=E/i,R=A*Math.PI*2,C=Math.sin(R),L=Math.cos(R);g.x=-M*L,g.y=x,g.z=M*C,a.push(g.x,g.y,g.z),m.set(-M*L,b,M*C),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+y,w)}if(S>0){let E=(S-1)*v;for(let A=0;A<i;A++){let R=E+A,C=E+A+1,L=S*v+A,P=S*v+A+1;o.push(R,C,L),o.push(C,P,L)}}}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mn=class s extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},re=class s extends xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=n/2,g=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function S(){let x=new D,M=new D,b=0,w=(e-t)/n;for(let y=0;y<=r;y++){let E=[],A=y/r,R=A*(e-t)+t;for(let C=0;C<=i;C++){let L=C/i,P=L*l+a,F=Math.sin(P),U=Math.cos(P);M.x=R*F,M.y=-A*n+m,M.z=R*U,u.push(M.x,M.y,M.z),x.set(F,w,U).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-A),E.push(p++)}v.push(E)}for(let y=0;y<i;y++)for(let E=0;E<r;E++){let A=v[E][y],R=v[E+1][y],C=v[E+1][y+1],L=v[E][y+1];(t>0||E!==0)&&(h.push(A,R,L),b+=3),(e>0||E!==r-1)&&(h.push(R,C,L),b+=3)}c.addGroup(g,b,0),g+=b}function _(x){let M=p,b=new ct,w=new D,y=0,E=x===!0?t:e,A=x===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;let R=p;for(let C=0;C<=i;C++){let P=C/i*l+a,F=Math.cos(P),U=Math.sin(P);w.x=E*U,w.y=m*A,w.z=E*F,u.push(w.x,w.y,w.z),d.push(0,A,0),b.x=F*.5+.5,b.y=U*.5*A+.5,f.push(b.x,b.y),p++}for(let C=0;C<i;C++){let L=M+C,P=R+C;x===!0?h.push(P,P+1,L):h.push(P+1,P,L),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bs=class s extends re{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nl=class s extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new D,x=new D,M=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],x),f(e[b+2],M),l(_,x,M,S)}function l(S,_,x,M){let b=M+1,w=[];for(let y=0;y<=b;y++){w[y]=[];let E=S.clone().lerp(x,y/b),A=_.clone().lerp(x,y/b),R=b-y;for(let C=0;C<=R;C++)C===0&&y===b?w[y][C]=E:w[y][C]=E.clone().lerp(A,C/R)}for(let y=0;y<b;y++)for(let E=0;E<2*(b-y)-1;E++){let A=Math.floor(E/2);E%2===0?(d(w[y][A+1]),d(w[y+1][A]),d(w[y][A])):(d(w[y][A+1]),d(w[y+1][A+1]),d(w[y+1][A]))}}function c(S){let _=new D;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(S),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let S=new D;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let x=m(S)/2/Math.PI+.5,M=g(S)/Math.PI+.5;o.push(x,1-M)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){let _=o[S+0],x=o[S+2],M=o[S+4],b=Math.max(_,x,M),w=Math.min(_,x,M);b>.9&&w<.1&&(_<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,_){let x=S*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function p(){let S=new D,_=new D,x=new D,M=new D,b=new ct,w=new ct,y=new ct;for(let E=0,A=0;E<r.length;E+=9,A+=6){S.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),M.copy(S).add(_).add(x).divideScalar(3);let R=m(M);v(b,A+0,S,R),v(w,A+2,_,R),v(y,A+4,x,R)}}function v(S,_,x,M){M<0&&S.x===1&&(o[_]=S.x-1),x.x===0&&x.z===0&&(o[_]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ct:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,i=[],r=[],o=[],a=new D,l=new Se;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(pe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends Hn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends gr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var wd=new D,Ed=new D,mh=new jh,gh=new jh,xh=new jh,zi=class extends Hn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ed.subVectors(i[0],i[1]).add(i[0]),c=Ed);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(wd.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=wd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),mh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,m),gh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,m),xh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),xh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(mh.calc(l),gh.calc(l),xh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Td(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function x0(s,t){let e=1-s;return e*e*t}function _0(s,t){return 2*(1-s)*s*t}function v0(s,t){return s*s*t}function Zr(s,t,e,n){return x0(s,t)+_0(s,e)+v0(s,n)}function y0(s,t){let e=1-s;return e*e*e*t}function M0(s,t){let e=1-s;return 3*e*e*s*t}function S0(s,t){return 3*(1-s)*s*s*t}function b0(s,t){return s*s*s*t}function $r(s,t,e,n,i){return y0(s,t)+M0(s,e)+S0(s,n)+b0(s,i)}var go=class extends Hn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,i.x,r.x,o.x,a.x),$r(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends Hn{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,i.x,r.x,o.x,a.x),$r(t,i.y,r.y,o.y,a.y),$r(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends Hn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Hn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Hn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,i.x,r.x,o.x),Zr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Hn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,i.x,r.x,o.x),Zr(t,i.y,r.y,o.y),Zr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Td(a,l.x,c.x,h.x,u.x),Td(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ct().fromArray(i))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:zi,CubicBezierCurve:go,CubicBezierCurve3:sl,EllipseCurve:gr,LineCurve:xo,LineCurve3:rl,QuadraticBezierCurve:_o,QuadraticBezierCurve3:vo,SplineCurve:yo}),ol=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new wh[i.type]().fromJSON(i))}return this}},Mo=class extends ol{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new _o(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new go(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new gr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xr=class extends Mo{constructor(t){super(t),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Mo().fromJSON(i))}return this}};function w0(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Sf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=C0(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return So(r,o,e,a,l,c,0),o}function Sf(s,t,e,n,i){let r;if(i===z0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ad(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ad(o/n|0,s[o],s[o+1],r);return r&&_r(r,r.next)&&(wo(r),r=r.next),r}function ws(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(_r(e,e.next)||Xe(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function So(s,t,e,n,i,r,o){if(!s)return;!o&&r&&N0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?T0(s,n,i,r):E0(s)){t.push(l.i,s.i,c.i),wo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=A0(ws(s),t),So(s,t,e,n,i,r,2)):o===2&&R0(s,t,e,n,i,r):So(ws(s),t,e,n,i,r,1);break}}}function E0(s){let t=s.prev,e=s,n=s.next;if(Xe(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Yr(i,a,r,l,o,c,p.x,p.y)&&Xe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function T0(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Xe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),v=Math.max(a,l,c),m=Math.max(h,u,d),g=Eh(f,p,t,e,n),S=Eh(v,m,t,e,n),_=s.prevZ,x=s.nextZ;for(;_&&_.z>=g&&x&&x.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&Yr(a,h,l,u,c,d,_.x,_.y)&&Xe(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&Yr(a,h,l,u,c,d,x.x,x.y)&&Xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&Yr(a,h,l,u,c,d,_.x,_.y)&&Xe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&Yr(a,h,l,u,c,d,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function A0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!_r(n,i)&&wf(n,e,e.next,i)&&bo(n,i)&&bo(i,n)&&(t.push(n.i,e.i,i.i),wo(e),wo(e.next),e=s=i),e=e.next}while(e!==s);return ws(e)}function R0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O0(o,a)){let l=Ef(o,a);o=ws(o,o.next),l=ws(l,l.next),So(o,t,e,n,i,r,0),So(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function C0(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Sf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(U0(c))}i.sort(P0);for(let r=0;r<i.length;r++)e=I0(i[r],e);return e}function P0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function I0(s,t){let e=L0(s,t);if(!e)return t;let n=Ef(e,s);return ws(n,n.next),ws(e,e.next)}function L0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(_r(s,e))return e;do{if(_r(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&bf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);bo(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&D0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function D0(s,t){return Xe(s.prev,s,t.prev)<0&&Xe(t.next,s,s.next)<0}function N0(s,t,e,n){let i=s;do i.z===0&&(i.z=Eh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,F0(i)}function F0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Eh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function U0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function bf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Yr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&bf(s,t,e,n,i,r,o,a)}function O0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!B0(s,t)&&(bo(s,t)&&bo(t,s)&&k0(s,t)&&(Xe(s.prev,s,t.prev)||Xe(s,t.prev,t))||_r(s,t)&&Xe(s.prev,s,s.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function _r(s,t){return s.x===t.x&&s.y===t.y}function wf(s,t,e,n){let i=Fa(Xe(s,t,e)),r=Fa(Xe(s,t,n)),o=Fa(Xe(e,n,s)),a=Fa(Xe(e,n,t));return!!(i!==r&&o!==a||i===0&&Na(s,e,t)||r===0&&Na(s,n,t)||o===0&&Na(e,s,n)||a===0&&Na(e,t,n))}function Na(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Fa(s){return s>0?1:s<0?-1:0}function B0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function bo(s,t){return Xe(s.prev,s,s.next)<0?Xe(s,t,s.next)>=0&&Xe(s,s.prev,t)>=0:Xe(s,t,s.prev)<0||Xe(s,s.next,t)<0}function k0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ef(s,t){let e=Th(s.i,s.x,s.y),n=Th(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ad(s,t,e,n){let i=Th(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Th(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ah=class{static triangulate(t,e,n=2){return w0(t,e,n)}},ar=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Rd(t),Cd(n,t);let o=t.length;e.forEach(Rd);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Cd(n,e[l]);let a=Ah.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Cd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Eo=class s extends nl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},To=class s extends xe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=pe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,d=new ct,f=new D,p=new D,v=new D,m=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let S=0;S<=e;S++){let _=n+S*h*i,x=Math.sin(_),M=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*M,o.push(u.x,u.y,u.z),d.x=S/e,d.y=b/(t.length-1),a.push(d.x,d.y);let w=l[3*b+0]*x,y=l[3*b+1],E=l[3*b+0]*M;c.push(w,y,E)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){let x=_+S*t.length,M=x,b=x+t.length,w=x+t.length+1,y=x+1;r.push(M,b,y),r.push(w,y,b)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var We=class s extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let S=g*d-o;for(let _=0;_<c;_++){let x=_*u-r;p.push(x,-S,0),v.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let _=S+c*g,x=S+c*(g+1),M=S+1+c*(g+1),b=S+1+c*g;f.push(_,x,b),f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ao=class s extends xe{constructor(t=new xr([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(i,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;ar.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let S=p[m];ar.isClockWise(S)===!0&&(p[m]=S.reverse())}let v=ar.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let S=p[m];f=f.concat(S)}for(let m=0,g=f.length;m<g;m++){let S=f[m];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,g=v.length;m<g;m++){let S=v[m],_=S[0]+u,x=S[1]+u,M=S[2]+u;n.push(_,x,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return H0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function H0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var mn=class s extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,d=new D,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let S=[],_=g/n,x=o+_*a,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M),w=0;g===0&&o===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){let E=y/e,A=i+E*r;u.x=-b*Math.cos(A),u.y=M,u.z=b*Math.sin(A),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+w,1-_),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){let _=h[g][S+1],x=h[g][S],M=h[g+1][S],b=h[g+1][S+1];(g!==0||o>0)&&f.push(_,x,b),(g!==n-1||l<Math.PI)&&f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qi=class s extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new D,f=new D,p=new D;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=i;g++){let S=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){let g=(i+1)*v+m-1,S=(i+1)*(v-1)+m-1,_=(i+1)*(v-1)+m,x=(i+1)*v+m;l.push(g,S,x),l.push(S,_,x)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ji=class s extends xe{constructor(t=new vo(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ct,h=new D,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),S(),g()}function m(_){h=t.getPointAt(_/e,h);let x=o.normals[_],M=o.binormals[_];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,y=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+y*M.x,l.y=E*x.y+y*M.y,l.z=E*x.z+y*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let x=1;x<=i;x++){let M=(i+1)*(_-1)+(x-1),b=(i+1)*_+(x-1),w=(i+1)*_+x,y=(i+1)*(_-1)+x;p.push(M,b,y),p.push(b,w,y)}}function S(){for(let _=0;_<=e;_++)for(let x=0;x<=i;x++)c.x=_/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new wh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Pd(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Pd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function An(s){let t={};for(let e=0;e<s.length;e++){let n=Is(s[e]);for(let i in n)t[i]=n[i]}return t}function Pd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function G0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var wr={clone:Is,merge:An},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new bt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(i.value);break;case"m3":this.uniforms[n].value=new se().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},al=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},be=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Es=class extends be{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ro=class extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=bl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ll=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ir(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _h(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=t,a=2*e-n;break;case bh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:o=t,l=2*n-e;break;case bh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,_=(-1-f)*m+(1.5+f)*v+.5*p,x=f*m-f*v;for(let M=0;M!==a;++M)r[M]=g*o[h+M]+S*o[c+M]+_*o[l+M]+x*o[u+M];return r}},ul=class extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},dl=class extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fl=class extends ts{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=f*d+p*2,S=u[g],_=u[g+1],x=t*d+p*2,M=h[x],b=h[x+1],w=q0(n,e,S,M,i);r[p]=Tf(w,v,_,b,m)}return r}};function Tf(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function X0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function q0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Tf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=X0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ir(e,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ir(t.times,Array),values:ir(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),_h(t.settings)&&(n.settings={inTangents:ir(t.settings.inTangents,Array),outTangents:ir(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;_h(this.settings)&&(Id(this.settings.inTangents,t),Id(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Kp(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,_h(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Id(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Za;var es=class extends Gn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Kr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Gn{constructor(t,e,n,i){super(t,e,n,i)}};pl.prototype.ValueTypeName="color";var ml=class extends Gn{constructor(t,e,n,i){super(t,e,n,i)}};ml.prototype.ValueTypeName="number";var gl=class extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Co=class extends Gn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Gn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Kr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Gn{constructor(t,e,n,i){super(t,e,n,i)}};xl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Af=new _l,vl=class{constructor(t){this.manager=t!==void 0?t:Af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Po=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vh=new Se,Ld=new D,Dd=new D,vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ld),Dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===cr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ua=new D,Oa=new qe,gi=new D,Io=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Oa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ua,Oa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new D,Nd=new ct,Fd=new ct,fn=class extends Io{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Nd,Fd),e.subVectors(Fd,Nd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Rh=class extends vr{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=eo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Lo=class extends Ts{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Ch=class extends vr{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},Do=class extends Ts{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},yr=class extends Io{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends vr{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fo=class extends xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var sr=-90,rr=1,yl=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn(sr,rr,t,e);i.layers=this.layers,this.add(i);let r=new fn(sr,rr,t,e);r.layers=this.layers,this.add(r);let o=new fn(sr,rr,t,e);o.layers=this.layers,this.add(o);let a=new fn(sr,rr,t,e);a.layers=this.layers,this.add(a);let l=new fn(sr,rr,t,e);l.layers=this.layers,this.add(l);let c=new fn(sr,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ml=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var eu="\\[\\]\\.:\\/",Y0=new RegExp("["+eu+"]","g"),nu="[^"+eu+"]",Z0="[^"+eu.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",nu),K0=/(WCOD+)?/.source.replace("WCOD",Z0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),j0=new RegExp("^"+$0+K0+J0+Q0+"$"),tm=["material","materials","bones","map"],Ih=class{constructor(t,e,n){let i=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y0,"")}static parseTrackName(t){let e=j0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Ih;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ly=new Float32Array(1);var lu=class lu{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};lu.prototype.isMatrix2=!0;var Lh=lu;function iu(s,t,e,n){let i=em(n);switch(e){case $h:return s*t;case Pl:return s*t/i.components*i.byteLength;case Il:return s*t/i.components*i.byteLength;case as:return s*t*2/i.components*i.byteLength;case Ll:return s*t*2/i.components*i.byteLength;case Kh:return s*t*3/i.components*i.byteLength;case Tn:return s*t*4/i.components*i.byteLength;case Dl:return s*t*4/i.components*i.byteLength;case ko:case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Ol:return Math.max(s,16)*Math.max(t,8)/4;case Nl:case Ul:return Math.max(s,8)*Math.max(t,8)/2;case Bl:case kl:case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zl:case Vo:case Vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case oc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ac:case lc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wo:case cc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(s){switch(s){case Nn:case Xh:return{byteLength:1,components:1};case Sr:case qh:case Vn:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case li:case Al:case jn:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $f(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function im(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,ng=`uniform sampler2D dfgLUT;
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,dx=`#define DISTANCE
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
}`,fx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,wx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Fx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:xm,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:bm,color_pars_fragment:wm,color_pars_vertex:Em,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Im,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Fm,envmap_fragment:Um,envmap_common_pars_fragment:Om,envmap_pars_fragment:Bm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Km,envmap_vertex:zm,fog_vertex:Hm,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Zm,lights_pars_begin:$m,lights_toon_fragment:Jm,lights_toon_pars_fragment:Qm,lights_phong_fragment:jm,lights_phong_pars_fragment:tg,lights_physical_fragment:eg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,lightprobes_pars_fragment:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:dg,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:_g,morphnormal_vertex:vg,morphtarget_pars_vertex:yg,morphtarget_vertex:Mg,normal_fragment_begin:Sg,normal_fragment_maps:bg,normal_pars_fragment:wg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Fg,dithering_fragment:Ug,dithering_pars_fragment:Og,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:Zg,specularmap_pars_fragment:$g,tonemapping_fragment:Kg,tonemapping_pars_fragment:Jg,transmission_fragment:Qg,transmission_pars_fragment:jg,uv_pars_fragment:tx,uv_pars_vertex:ex,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distance_vert:dx,distance_frag:fx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:yx,meshlambert_frag:Mx,meshmatcap_vert:Sx,meshmatcap_frag:bx,meshnormal_vert:wx,meshnormal_frag:Ex,meshphong_vert:Tx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Lx,points_frag:Dx,shadow_vert:Nx,shadow_frag:Fx,sprite_vert:Ux,sprite_frag:Ox},xt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},wi={basic:{uniforms:An([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:An([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:An([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:An([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:An([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new bt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:An([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:An([xt.points,xt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:An([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:An([xt.common,xt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:An([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:An([xt.sprite,xt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:An([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:An([xt.lights,xt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};wi.physical={uniforms:An([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var dc={r:0,b:0,g:0},Bx=new Se,Kf=new se;Kf.set(-1,0,0,0,1,0,0,0,1);function kx(s,t,e,n,i,r){let o=new bt(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let _=S.isScene===!0?S.background:null;if(_&&_.isTexture){let x=S.backgroundBlurriness>0;_=t.get(_,x)}return _}function p(S){let _=!1,x=f(S);x===null?m(o,a):x&&x.isColor&&(m(x,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(S,_){let x=f(_);x&&(x.isCubeTexture||x.mapping===Oo)?(c===void 0&&(c=new q(new Gt(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Is(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=ve.getTransfer(x.colorSpace)!==Ie,(h!==x||u!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new q(new We(2,2),new Ye({name:"BackgroundMaterial",uniforms:Is(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ve.getTransfer(x.colorSpace)!==Ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,_){S.getRGB(dc,tu(s)),e.buffers.color.setClear(dc.r,dc.g,dc.b,_,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:v,dispose:g}}function zx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,C,L,P,F){let U=!1,B=u(R,P,L,C);r!==B&&(r=B,c(r.object)),U=f(R,P,L,F),U&&p(R,P,L,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(R,C,L,P),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,C,L,P){let F=P.wireframe===!0,U=n[C.id];U===void 0&&(U={},n[C.id]=U);let B=R.isInstancedMesh===!0?R.id:0,X=U[B];X===void 0&&(X={},U[B]=X);let O=X[L.id];O===void 0&&(O={},X[L.id]=O);let H=O[F];return H===void 0&&(H=d(l()),O[F]=H),H}function d(R){let C=[],L=[],P=[];for(let F=0;F<e;F++)C[F]=0,L[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:P,object:R,attributes:{},index:null}}function f(R,C,L,P){let F=r.attributes,U=C.attributes,B=0,X=L.getAttributes();for(let O in X)if(X[O].location>=0){let V=F[O],ot=U[O];if(ot===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor)),V===void 0||V.attribute!==ot||ot&&V.data!==ot.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function p(R,C,L,P){let F={},U=C.attributes,B=0,X=L.getAttributes();for(let O in X)if(X[O].location>=0){let V=U[O];V===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let ot={};ot.attribute=V,V&&V.data&&(ot.data=V.data),F[O]=ot,B++}r.attributes=F,r.attributesNum=B,r.index=P}function v(){let R=r.newAttributes;for(let C=0,L=R.length;C<L;C++)R[C]=0}function m(R){g(R,0)}function g(R,C){let L=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;L[R]=1,P[R]===0&&(s.enableVertexAttribArray(R),P[R]=1),F[R]!==C&&(s.vertexAttribDivisor(R,C),F[R]=C)}function S(){let R=r.newAttributes,C=r.enabledAttributes;for(let L=0,P=C.length;L<P;L++)C[L]!==R[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function _(R,C,L,P,F,U,B){B===!0?s.vertexAttribIPointer(R,C,L,F,U):s.vertexAttribPointer(R,C,L,P,F,U)}function x(R,C,L,P){v();let F=P.attributes,U=L.getAttributes(),B=C.defaultAttributeValues;for(let X in U){let O=U[X];if(O.location>=0){let H=F[X];if(H===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let V=H.normalized,ot=H.itemSize,rt=t.get(H);if(rt===void 0)continue;let yt=rt.buffer,Lt=rt.type,Xt=rt.bytesPerElement,K=Lt===s.INT||Lt===s.UNSIGNED_INT||H.gpuType===Al;if(H.isInterleavedBufferAttribute){let tt=H.data,ht=tt.stride,zt=H.offset;if(tt.isInstancedInterleavedBuffer){for(let _t=0;_t<O.locationSize;_t++)g(O.location+_t,tt.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let _t=0;_t<O.locationSize;_t++)m(O.location+_t);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let _t=0;_t<O.locationSize;_t++)_(O.location+_t,ot/O.locationSize,Lt,V,ht*Xt,(zt+ot/O.locationSize*_t)*Xt,K)}else{if(H.isInstancedBufferAttribute){for(let tt=0;tt<O.locationSize;tt++)g(O.location+tt,H.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let tt=0;tt<O.locationSize;tt++)m(O.location+tt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let tt=0;tt<O.locationSize;tt++)_(O.location+tt,ot/O.locationSize,Lt,V,ot*Xt,ot/O.locationSize*tt*Xt,K)}}else if(B!==void 0){let V=B[X];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(O.location,V);break;case 3:s.vertexAttrib3fv(O.location,V);break;case 4:s.vertexAttrib4fv(O.location,V);break;default:s.vertexAttrib1fv(O.location,V)}}}}S()}function M(){E();for(let R in n){let C=n[R];for(let L in C){let P=C[L];for(let F in P){let U=P[F];for(let B in U)h(U[B].object),delete U[B];delete P[F]}}delete n[R]}}function b(R){if(n[R.id]===void 0)return;let C=n[R.id];for(let L in C){let P=C[L];for(let F in P){let U=P[F];for(let B in U)h(U[B].object),delete U[B];delete P[F]}}delete n[R.id]}function w(R){for(let C in n){let L=n[C];for(let P in L){let F=L[P];if(F[R.id]===void 0)continue;let U=F[R.id];for(let B in U)h(U[B].object),delete U[B];delete F[R.id]}}}function y(R){for(let C in n){let L=n[C],P=R.isInstancedMesh===!0?R.id:0,F=L[P];if(F!==void 0){for(let U in F){let B=F[U];for(let X in B)h(B[X].object),delete B[X];delete F[U]}delete L[P],Object.keys(L).length===0&&delete n[C]}}}function E(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Hx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Tn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Nn&&w!==jn&&!y&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:x,maxSamples:M,samples:b}}function Vx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new zn,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,_=S*4,x=g.clippingState||null;l.value=x,x=h(p,d,_,f);for(let M=0;M!==_;++M)x[M]=e[M];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Tr=4,Wx=6,Xx=20,qx=256,qo=new yr,Rf=new bt,cu=null,hu=0,uu=0,du=!1,Yx=new D,Ls=new D,Rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Yx}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Vn,format:Tn,colorSpace:Jr,depthBuffer:!1},i=Cf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zx(r)),this._blurMaterial=Kx(r,t,e),this._ggxMaterial=$x(r,t,e)}return i}_compileMaterial(t){let e=new q(new xe,t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i,r){let l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Rf),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Gt,new Qe({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,g=!0):(m.color.copy(Rf),g=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let M=this._cubeSize;Er(i,x*M,_>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(v,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===rs||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-Tr?n-p+Tr:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Er(r,m,g,3*v,2*v),i.setRenderTarget(r),i.render(a,qo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Er(t,m,g,3*v,2*v),i.setRenderTarget(t),i.render(a,qo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Tr?i-this._lodMax+Tr:0),d=4*(this._cubeSize-h);Er(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,qo)}};function Zx(s){let t=[],e=[],n=s,i=s-Tr+1+Wx;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let g=0;g<u;g++){let S=g%3*2/3-1,_=g>2?0:-1,x=[S,_,0,S+2/3,_,0,S+2/3,_+1,0,S,_,0,S+2/3,_+1,0,S,_+1,0];p.set(x,f*d*g);for(let M=0;M<d;M++){let b=h[M*2]*2-1,w=h[M*2+1]*2-1;g===0?Ls.set(1,w,b):g===1?Ls.set(-b,1,-w):g===2?Ls.set(-b,w,1):g===3?Ls.set(-1,w,-b):g===4?Ls.set(-b,-1,w):Ls.set(b,w,-1),Ls.toArray(v,(g*d+M)*f)}}let m=new xe;m.setAttribute("position",new Te(p,f)),m.setAttribute("outputDirection",new Te(v,f)),e.push(new q(m,null)),n>Tr&&n--}return{lodMeshes:e,sizeLods:t}}function Cf(s,t,e){let n=new En(s,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function $x(s,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Kx(s,t,e){return new Ye({name:"SphericalGaussianBlur",defines:{SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Pf(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function If(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new q(i,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Ke),new yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function Jx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wl||f===El)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new pc(p.height);return v.fromEquirectangularTexture(s,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===wl||f===El,v=f===rs||f===Ps;if(p||v){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Rr(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Rr(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===wl?d.mapping=rs:f===El&&(d.mapping=Ps),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Qx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ys("WebGLRenderer: "+n+" extension not supported."),i}}}function jx(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let _=0,x=S.length;_<x;_+=3){let M=S[_+0],b=S[_+1],w=S[_+2];d.push(M,b,b,w,w,M)}}else{let S=p.array;v=p.version;for(let _=0,x=S.length/3-1;_<x;_+=3){let M=_+0,b=_+1,w=_+2;d.push(M,b,b,w,w,M)}}let m=new(p.count>=65535?oo:ro)(d,1);m.version=v;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function t_(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function e_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function n_(s,t,e){let n=new WeakMap,i=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*M*4*u),w=new no(b,x,M,u);w.type=jn,w.needsUpdate=!0;let y=_*4;for(let A=0;A<u;A++){let R=m[A],C=g[A],L=S[A],P=x*M*4*A;for(let F=0;F<R.count;F++){let U=F*y;f===!0&&(i.fromBufferAttribute(R,F),b[P+U+0]=i.x,b[P+U+1]=i.y,b[P+U+2]=i.z,b[P+U+3]=0),p===!0&&(i.fromBufferAttribute(C,F),b[P+U+4]=i.x,b[P+U+5]=i.y,b[P+U+6]=i.z,b[P+U+7]=0),v===!0&&(i.fromBufferAttribute(L,F),b[P+U+8]=i.x,b[P+U+9]=i.y,b[P+U+10]=i.z,b[P+U+11]=L.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new ct(x,M)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function i_(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var s_={[Bh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};function r_(s,t,e,n,i,r){let o=new En(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new xe;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new q(c,h),d=new yr(-1,1,1,-1,0,1),f=null,p=null,v=!1,m,g=null,S=[],_=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<S.length;b++){let w=S[b];w.setSize&&w.setSize(x,M)}},this.setEffects=function(x){S=x,_=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new En(M,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new En(M,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let y=S[w];y.setSize&&y.setSize(M,b)}},this.begin=function(x,M){if(v||x.toneMapping===ai&&S.length===0)return!1;if(g=M,M!==null){let b=M.width,w=M.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return _===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ai,!0},this.hasRenderPass=function(){return _},this.end=function(x,M){x.toneMapping=m,v=!0;let b=o,w=a;for(let y=0;y<S.length;y++){let E=S[y];E.enabled!==!1&&(E.render(x,w,b,M),E.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},ve.getTransfer(f)===Ie&&(h.defines.SRGB_TRANSFER="");let y=s_[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(u,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Jf=new Ln,mu=new Ji(1,1),Qf=new no,jf=new Ja,tp=new fo,Lf=[],Df=[],Nf=new Float32Array(16),Ff=new Float32Array(9),Uf=new Float32Array(4);function Cr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Lf[i];if(r===void 0&&(r=new Float32Array(i),Lf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ln(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function cn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xc(s,t){let e=Df[t];e===void 0&&(e=new Int32Array(t),Df[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function o_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function a_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2fv(this.addr,t),cn(e,t)}}function l_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;s.uniform3fv(this.addr,t),cn(e,t)}}function c_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4fv(this.addr,t),cn(e,t)}}function h_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Uf.set(n),s.uniformMatrix2fv(this.addr,!1,Uf),cn(e,n)}}function u_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Ff.set(n),s.uniformMatrix3fv(this.addr,!1,Ff),cn(e,n)}}function d_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Nf.set(n),s.uniformMatrix4fv(this.addr,!1,Nf),cn(e,n)}}function f_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function p_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2iv(this.addr,t),cn(e,t)}}function m_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;s.uniform3iv(this.addr,t),cn(e,t)}}function g_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4iv(this.addr,t),cn(e,t)}}function x_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function __(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2uiv(this.addr,t),cn(e,t)}}function v_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;s.uniform3uiv(this.addr,t),cn(e,t)}}function y_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4uiv(this.addr,t),cn(e,t)}}function M_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?uc:hc,r=mu):r=Jf,e.setTexture2D(t||r,i)}function S_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jf,i)}function b_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tp,i)}function w_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qf,i)}function E_(s){switch(s){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return v_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return w_}}function T_(s,t){s.uniform1fv(this.addr,t)}function A_(s,t){let e=Cr(t,this.size,2);s.uniform2fv(this.addr,e)}function R_(s,t){let e=Cr(t,this.size,3);s.uniform3fv(this.addr,e)}function C_(s,t){let e=Cr(t,this.size,4);s.uniform4fv(this.addr,e)}function P_(s,t){let e=Cr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function I_(s,t){let e=Cr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function L_(s,t){let e=Cr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function D_(s,t){s.uniform1iv(this.addr,t)}function N_(s,t){s.uniform2iv(this.addr,t)}function F_(s,t){s.uniform3iv(this.addr,t)}function U_(s,t){s.uniform4iv(this.addr,t)}function O_(s,t){s.uniform1uiv(this.addr,t)}function B_(s,t){s.uniform2uiv(this.addr,t)}function k_(s,t){s.uniform3uiv(this.addr,t)}function z_(s,t){s.uniform4uiv(this.addr,t)}function H_(s,t,e){let n=this.cache,i=t.length,r=xc(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=mu:o=Jf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function G_(s,t,e){let n=this.cache,i=t.length,r=xc(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||jf,r[o])}function V_(s,t,e){let n=this.cache,i=t.length,r=xc(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tp,r[o])}function W_(s,t,e){let n=this.cache,i=t.length,r=xc(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Qf,r[o])}function X_(s){switch(s){case 5126:return T_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return I_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return U_;case 5125:return O_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}var gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E_(e.type)}},xu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X_(e.type)}},_u=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Of(s,t){s.seq.push(t),s.map[t.id]=t}function q_(s,t,e){let n=s.name,i=n.length;for(fu.lastIndex=0;;){let r=fu.exec(n),o=fu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Of(e,c===void 0?new gu(a,s,t):new xu(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new _u(a),Of(e,u)),e=u}}}var Ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);q_(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Bf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Y_=37297,Z_=0;function $_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var kf=new se;function K_(s){ve._getMatrix(kf,ve.workingColorSpace,s);let t=`mat3( ${kf.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(s)){case Qr:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+$_(s.getShaderSource(t),a)}else return r}function J_(s,t){let e=K_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Q_={[Bh]:"Linear",[kh]:"Reinhard",[zh]:"Cineon",[Uo]:"ACESFilmic",[Gh]:"AgX",[Vh]:"Neutral",[Hh]:"Custom"};function j_(s,t){let e=Q_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new D;function tv(){ve.getLuminanceCoefficients(fc);let s=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function nv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zo(s){return s!==""}function Hf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(s){return s.replace(sv,ov)}var rv=new Map;function ov(s,t){let e=fe[t];if(e===void 0){let n=rv.get(t);if(n!==void 0)e=fe[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vu(e)}var av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(s){return s.replace(av,lv)}function lv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var cv={[As]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function hv(s){return cv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uv={[rs]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function dv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":uv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var fv={[Ps]:"ENVMAP_MODE_REFRACTION"};function pv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":fv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mv={[bl]:"ENVMAP_BLENDING_MULTIPLY",[sf]:"ENVMAP_BLENDING_MIX",[rf]:"ENVMAP_BLENDING_ADD"};function gv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mv[s.combine]||"ENVMAP_BLENDING_NONE"}function xv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _v(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hv(e),c=dv(e),h=pv(e),u=gv(e),d=xv(e),f=ev(e),p=nv(r),v=i.createProgram(),m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zo).join(`
`),g.length>0&&(g+=`
`)):(m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),g=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?fe.tonemapping_pars_fragment:"",e.toneMapping!==ai?j_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,J_("linearToOutputTexel",e.outputColorSpace),tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),o=vu(o),o=Hf(o,e),o=Gf(o,e),a=vu(a),a=Hf(a,e),a=Gf(a,e),o=Vf(o),a=Vf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=S+m+o,x=S+g+a,M=Bf(i,i.VERTEX_SHADER,_),b=Bf(i,i.FRAGMENT_SHADER,x);i.attachShader(v,M),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(R){if(s.debug.checkShaderErrors){let C=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(M)||"",P=i.getShaderInfoLog(b)||"",F=C.trim(),U=L.trim(),B=P.trim(),X=!0,O=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,M,b);else{let H=zf(i,M,"vertex"),V=zf(i,b,"fragment");jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+H+`
`+V)}else F!==""?Jt("WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(O=!1);O&&(R.diagnostics={runnable:X,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:g}})}i.deleteShader(M),i.deleteShader(b),y=new Ar(i,v),E=iv(i,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(v,Y_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}var vv=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mu(t),e.set(t,n)),n}},Mu=class{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}};function yv(s){return s===as||s===Vo||s===Wo}function Mv(s,t,e,n,i,r){let o=new io,a=new yu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,E,A,R,C,L){let P=R.fog,F=C.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=t.get(y.envMap||U,B),O=X&&X.mapping===Oo?X.image.height:null,H=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=V!==void 0?V.length:0,rt=0;F.morphAttributes.position!==void 0&&(rt=1),F.morphAttributes.normal!==void 0&&(rt=2),F.morphAttributes.color!==void 0&&(rt=3);let yt,Lt,Xt,K;if(H){let ke=wi[H];yt=ke.vertexShader,Lt=ke.fragmentShader}else{yt=y.vertexShader,Lt=y.fragmentShader;let ke=a.getVertexShaderStage(y),Ce=a.getFragmentShaderStage(y);a.update(y,ke,Ce),Xt=ke.id,K=Ce.id}let tt=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),zt=C.isInstancedMesh===!0,_t=C.isBatchedMesh===!0,Tt=!!y.map,St=!!y.matcap,qt=!!X,Kt=!!y.aoMap,oe=!!y.lightMap,Ft=!!y.bumpMap&&y.wireframe===!1,Ht=!!y.normalMap,ce=!!y.displacementMap,_e=!!y.emissiveMap,ue=!!y.metalnessMap,ae=!!y.roughnessMap,k=y.anisotropy>0,Ae=y.clearcoat>0,le=y.dispersion>0,N=y.retroreflectivity>0,T=y.iridescence>0,W=y.sheen>0,Y=y.transmission>0,j=k&&!!y.anisotropyMap,lt=Ae&&!!y.clearcoatMap,ut=Ae&&!!y.clearcoatNormalMap,et=Ae&&!!y.clearcoatRoughnessMap,st=T&&!!y.iridescenceMap,dt=T&&!!y.iridescenceThicknessMap,Ot=W&&!!y.sheenColorMap,pt=W&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Bt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,he=Y&&!!y.transmissionMap,G=Y&&!!y.thicknessMap,mt=!!y.gradientMap,it=!!y.alphaMap,gt=y.alphaTest>0,wt=!!y.alphaHash,at=!!y.extensions,Vt=ai;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Vt=s.toneMapping);let Ut={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:yt,fragmentShader:Lt,defines:y.defines,customVertexShaderID:Xt,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_t,batchingColor:_t&&C._colorsTexture!==null,instancing:zt,instancingColor:zt&&C.instanceColor!==null,instancingMorph:zt&&C.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:St,envMap:qt,envMapMode:qt&&X.mapping,envMapCubeUVHeight:O,aoMap:Kt,lightMap:oe,bumpMap:Ft,normalMap:Ht,displacementMap:ce,emissiveMap:_e,normalMapObjectSpace:Ht&&y.normalMapType===lf,normalMapTangentSpace:Ht&&y.normalMapType===Xo,packedNormalMap:Ht&&y.normalMapType===Xo&&yv(y.normalMap.format),metalnessMap:ue,roughnessMap:ae,anisotropy:k,anisotropyMap:j,clearcoat:Ae,clearcoatMap:lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:et,dispersion:le,retroreflection:N,iridescence:T,iridescenceMap:st,iridescenceThicknessMap:dt,sheen:W,sheenColorMap:Ot,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:Bt,specularIntensityMap:Yt,transmission:Y,transmissionMap:he,thicknessMap:G,gradientMap:mt,opaque:y.transparent===!1&&y.blending===ss&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:gt,alphaHash:wt,combine:y.combine,mapUv:Tt&&p(y.map.channel),aoMapUv:Kt&&p(y.aoMap.channel),lightMapUv:oe&&p(y.lightMap.channel),bumpMapUv:Ft&&p(y.bumpMap.channel),normalMapUv:Ht&&p(y.normalMap.channel),displacementMapUv:ce&&p(y.displacementMap.channel),emissiveMapUv:_e&&p(y.emissiveMap.channel),metalnessMapUv:ue&&p(y.metalnessMap.channel),roughnessMapUv:ae&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:lt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&p(y.sheenRoughnessMap.channel),specularMapUv:ft&&p(y.specularMap.channel),specularColorMapUv:Bt&&p(y.specularColorMap.channel),specularIntensityMapUv:Yt&&p(y.specularIntensityMap.channel),transmissionMapUv:he&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:it&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ht||k),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(Tt||it),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ht,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:rt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&ve.getTransfer(y.map.colorSpace)===Ie,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&ve.getTransfer(y.emissiveMap.colorSpace)===Ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)E.push(A),E.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(g(E,y),S(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let E=f[y.type],A;if(E){let R=wi[E];A=wr.clone(R.uniforms)}else A=y.uniforms;return A}function x(y,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new _v(s,E,y,i),c.push(A),h.set(E,A)),A}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function Sv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function bv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Xf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function qf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,v,m,g){let S=s[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},s[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,v,m,g,S){S.reversedDepth===!0&&(m=-m);let _=a(d,f,p,v,m,g);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):e.push(_)}function c(d,f,p,v,m,g){let S=a(d,f,p,v,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||bv),n.length>1&&n.sort(f||Xf),i.length>1&&i.sort(f||Xf)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function wv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new qf,s.set(n,[o])):i>=r.length?(o=new qf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ev(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new bt};break;case"SpotLight":e={position:new D,direction:new D,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Tv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Av=0;function Rv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cv(s){let t=new Ev,e=Tv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,S=0,_=0,x=0,M=0,b=0,w=0,y=0,E=0,A=0;c.sort(Rv);for(let C=0,L=c.length;C<L;C++){let P=c[C],F=P.color,U=P.intensity,B=P.distance,X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===as?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],U);A++}else if(P.isSunLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=X;let ot=H.getViewportCount();for(let rt=0;rt<ot;rt++)n.sunShadowMatrix[v+rt]=H.getMatrix(rt),n.sunShadowCascade[v+rt]=H._cascadeData[rt];v+=ot,p++}n.sun[f]=O,f++}else if(P.isDirectionalLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,M++}n.directional[m]=O,m++}else if(P.isSpotLight){let O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(F).multiplyScalar(U),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[S]=O;let H=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,H.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[S]=H.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=X,w++}S++}else if(P.isRectAreaLight){let O=t.get(P);O.color.copy(F).multiplyScalar(U),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=O,_++}else if(P.isPointLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let H=P.shadow,V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=O,g++}else if(P.isHemisphereLight){let O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(U),O.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[x]=O,x++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==S||R.rectAreaLength!==_||R.hemiLength!==x||R.numSunShadows!==p||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==w||R.numSpotMaps!==y||R.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=_,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.sunLength=f,R.directionalLength=m,R.pointLength=g,R.spotLength=S,R.rectAreaLength=_,R.hemiLength=x,R.numSunShadows=p,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=w,R.numSpotMaps=y,R.numLightProbes=A,n.version=Av++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let S=0,_=c.length;S<_;S++){let x=c[S];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Yf(s){let t=new Cv(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Pv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Yf(s),t.set(i,[a])):r>=o.length?(a=new Yf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
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
}`,Dv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Nv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Zf=new Se,Yo=new D,pu=new D;function Fv(s,t,e){let n=new pr,i=new ct,r=new ct,o=new ye,a=new ll,l=new cl,c={},h=e.maxTextureSize,u={[is]:nn,[nn]:is,[sn]:sn},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Iv,fragmentShader:Lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new xe;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new q(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let g=this.type;this.render=function(b,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Bd&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);let E=s.getRenderTarget(),A=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Mi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=g!==this.type;L&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=b.length;P<F;P++){let U=b[P],B=U.shadow;if(B===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let X=B.getFrameExtents();i.multiply(X),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,B.mapSize.y=r.y));let O=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Mr){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new En(i.x,i.y,{format:as,type:Vn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new Ji(i.x,i.y,jn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=_i,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=pn,B.map.depthTexture.magFilter=pn}else U.isPointLight?(B.map=new pc(i.x),B.map.depthTexture=new el(i.x,li)):(B.map=new En(i.x,i.y),B.map.depthTexture=new Ji(i.x,i.y,li)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=_i,this.type===As?(B.map.depthTexture.compareFunction=O?uc:hc,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=pn,B.map.depthTexture.magFilter=pn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let H=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,y);for(let V=0;V<H;V++){let ot=B.getCamera(V);if(U.isPointLight){let rt=B.camera,yt=B.matrix,Lt=U.distance||rt.far;Lt!==rt.far&&(rt.far=Lt,rt.updateProjectionMatrix()),Yo.setFromMatrixPosition(U.matrixWorld),rt.position.copy(Yo),pu.copy(rt.position),pu.add(Dv[V]),rt.up.copy(Nv[V]),rt.lookAt(pu),rt.updateMatrixWorld(),yt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Zf.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Zf,rt.coordinateSystem,rt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,V),s.clear();else{V===0&&(s.setRenderTarget(B.map),s.clear());let rt=B.getViewport(V);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),C.viewport(o)}n=B.getFrustum(V),x(w,y,ot,U,this.type)}B.isPointLightShadow!==!0&&this.type===Mr&&S(B,y),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,A,R)};function S(b,w){let y=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new En(i.x,i.y,{format:as,type:Vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,y,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,y,f,v,null)}function _(b,w,y,E){let A=null,R=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)A=R;else if(A=y.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=A.uuid,L=w.uuid,P=c[C];P===void 0&&(P={},c[C]=P);let F=P[L];F===void 0&&(F=A.clone(),P[L]=F,w.addEventListener("dispose",M)),A=F}if(A.visible=w.visible,A.wireframe=w.wireframe,E===Mr?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let C=s.properties.get(A);C.light=y}return A}function x(b,w,y,E,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Mr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let L=t.update(b),P=b.material;if(Array.isArray(P)){let F=L.groups;for(let U=0,B=F.length;U<B;U++){let X=F[U],O=P[X.materialIndex];if(O&&O.visible){let H=_(b,O,E,A);b.onBeforeShadow(s,b,w,y,L,H,X),s.renderBufferDirect(y,null,L,H,b,X),b.onAfterShadow(s,b,w,y,L,H,X)}}}else if(P.visible){let F=_(b,P,E,A);b.onBeforeShadow(s,b,w,y,L,F,null),s.renderBufferDirect(y,null,L,F,b,null),b.onAfterShadow(s,b,w,y,L,F,null)}}let C=b.children;for(let L=0,P=C.length;L<P;L++)x(C[L],w,y,E,A)}function M(b){b.target.removeEventListener("dispose",M);for(let y in c){let E=c[y],A=b.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Uv(s,t){function e(){let G=!1,mt=new ye,it=null,gt=new ye(0,0,0,0);return{setMask:function(wt){it!==wt&&!G&&(s.colorMask(wt,wt,wt,wt),it=wt)},setLocked:function(wt){G=wt},setClear:function(wt,at,Vt,Ut,ke){ke===!0&&(wt*=Ut,at*=Ut,Vt*=Ut),mt.set(wt,at,Vt,Ut),gt.equals(mt)===!1&&(s.clearColor(wt,at,Vt,Ut),gt.copy(mt))},reset:function(){G=!1,it=null,gt.set(-1,0,0,0)}}}function n(){let G=!1,mt=!1,it=null,gt=null,wt=null;return{setReversed:function(at){if(mt!==at){let Vt=t.get("EXT_clip_control");at?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),mt=at;let Ut=wt;wt=null,this.setClear(Ut)}},getReversed:function(){return mt},setTest:function(at){at?tt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(at){it!==at&&!G&&(s.depthMask(at),it=at)},setFunc:function(at){if(mt&&(at=vf[at]),gt!==at){switch(at){case za:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=at}},setLocked:function(at){G=at},setClear:function(at){wt!==at&&(wt=at,mt&&(at=1-at),s.clearDepth(at))},reset:function(){G=!1,it=null,gt=null,wt=null,mt=!1}}}function i(){let G=!1,mt=null,it=null,gt=null,wt=null,at=null,Vt=null,Ut=null,ke=null;return{setTest:function(Ce){G||(Ce?tt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Ce){mt!==Ce&&!G&&(s.stencilMask(Ce),mt=Ce)},setFunc:function(Ce,ei,pi){(it!==Ce||gt!==ei||wt!==pi)&&(s.stencilFunc(Ce,ei,pi),it=Ce,gt=ei,wt=pi)},setOp:function(Ce,ei,pi){(at!==Ce||Vt!==ei||Ut!==pi)&&(s.stencilOp(Ce,ei,pi),at=Ce,Vt=ei,Ut=pi)},setLocked:function(Ce){G=Ce},setClear:function(Ce){ke!==Ce&&(s.clearStencil(Ce),ke=Ce)},reset:function(){G=!1,mt=null,it=null,gt=null,wt=null,at=null,Vt=null,Ut=null,ke=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,S=null,_=null,x=null,M=null,b=null,w=null,y=new bt(0,0,0),E=0,A=!1,R=null,C=null,L=null,P=null,F=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=X>=2);let H=null,V={},ot=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),yt=new ye().fromArray(ot),Lt=new ye().fromArray(rt);function Xt(G,mt,it,gt){let wt=new Uint8Array(4),at=s.createTexture();s.bindTexture(G,at),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<it;Vt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(mt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return at}let K={};K[s.TEXTURE_2D]=Xt(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),o.setFunc(lr),Ft(!1),Ht(Dh),tt(s.CULL_FACE),Kt(Mi);function tt(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ht(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function zt(G,mt){return d[G]!==mt?(s.bindFramebuffer(G,mt),d[G]=mt,G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=mt),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function _t(G,mt){let it=p,gt=!1;if(G){it=f.get(mt),it===void 0&&(it=[],f.set(mt,it));let wt=G.textures;if(it.length!==wt.length||it[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Vt=wt.length;at<Vt;at++)it[at]=s.COLOR_ATTACHMENT0+at;it.length=wt.length,gt=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,gt=!0);gt&&s.drawBuffers(it)}function Tt(G){return v!==G?(s.useProgram(G),v=G,!0):!1}let St={[Cs]:s.FUNC_ADD,[zd]:s.FUNC_SUBTRACT,[Hd]:s.FUNC_REVERSE_SUBTRACT};St[Gd]=s.MIN,St[Vd]=s.MAX;let qt={[Wd]:s.ZERO,[Xd]:s.ONE,[qd]:s.SRC_COLOR,[Uh]:s.SRC_ALPHA,[Qd]:s.SRC_ALPHA_SATURATE,[Kd]:s.DST_COLOR,[Zd]:s.DST_ALPHA,[Yd]:s.ONE_MINUS_SRC_COLOR,[Oh]:s.ONE_MINUS_SRC_ALPHA,[Jd]:s.ONE_MINUS_DST_COLOR,[$d]:s.ONE_MINUS_DST_ALPHA,[jd]:s.CONSTANT_COLOR,[tf]:s.ONE_MINUS_CONSTANT_COLOR,[ef]:s.CONSTANT_ALPHA,[nf]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(G,mt,it,gt,wt,at,Vt,Ut,ke,Ce){if(G===Mi){m===!0&&(ht(s.BLEND),m=!1);return}if(m===!1&&(tt(s.BLEND),m=!0),G!==kd){if(G!==g||Ce!==A){if((S!==Cs||M!==Cs)&&(s.blendEquation(s.FUNC_ADD),S=Cs,M=Cs),Ce)switch(G){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFunc(s.ONE,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:jt("WebGLState: Invalid blending: ",G);break}else switch(G){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Nh:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",G);break}_=null,x=null,b=null,w=null,y.set(0,0,0),E=0,g=G,A=Ce}return}wt=wt||mt,at=at||it,Vt=Vt||gt,(mt!==S||wt!==M)&&(s.blendEquationSeparate(St[mt],St[wt]),S=mt,M=wt),(it!==_||gt!==x||at!==b||Vt!==w)&&(s.blendFuncSeparate(qt[it],qt[gt],qt[at],qt[Vt]),_=it,x=gt,b=at,w=Vt),(Ut.equals(y)===!1||ke!==E)&&(s.blendColor(Ut.r,Ut.g,Ut.b,ke),y.copy(Ut),E=ke),g=G,A=!1}function oe(G,mt){G.side===sn?ht(s.CULL_FACE):tt(s.CULL_FACE);let it=G.side===nn;mt&&(it=!it),Ft(it),G.blending===ss&&G.transparent===!1?Kt(Mi):Kt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let gt=G.stencilWrite;a.setTest(gt),gt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),_e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function Ht(G){G!==Ud?(tt(s.CULL_FACE),G!==C&&(G===Dh?s.cullFace(s.BACK):G===Od?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),C=G}function ce(G){G!==L&&(B&&s.lineWidth(G),L=G)}function _e(G,mt,it){G?(tt(s.POLYGON_OFFSET_FILL),(P!==mt||F!==it)&&(P=mt,F=it,o.getReversed()&&(mt=-mt),s.polygonOffset(mt,it))):ht(s.POLYGON_OFFSET_FILL)}function ue(G){G?tt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function ae(G){G===void 0&&(G=s.TEXTURE0+U-1),H!==G&&(s.activeTexture(G),H=G)}function k(G,mt,it){it===void 0&&(H===null?it=s.TEXTURE0+U-1:it=H);let gt=V[it];gt===void 0&&(gt={type:void 0,texture:void 0},V[it]=gt),(gt.type!==G||gt.texture!==mt)&&(H!==it&&(s.activeTexture(it),H=it),s.bindTexture(G,mt||K[G]),gt.type=G,gt.texture=mt)}function Ae(){let G=V[H];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function T(){try{s.texSubImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function W(){try{s.texSubImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function lt(){try{s.texStorage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function ut(){try{s.texStorage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function et(){try{s.texImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function st(){try{s.texImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function dt(G){return u[G]!==void 0?u[G]:s.getParameter(G)}function Ot(G,mt){u[G]!==mt&&(s.pixelStorei(G,mt),u[G]=mt)}function pt(G){yt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function ft(G){Lt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Lt.copy(G))}function Bt(G,mt){let it=c.get(mt);it===void 0&&(it=new WeakMap,c.set(mt,it));let gt=it.get(G);gt===void 0&&(gt=s.getUniformBlockIndex(mt,G.name),it.set(G,gt))}function Yt(G,mt){let gt=c.get(mt).get(G);l.get(mt)!==gt&&(s.uniformBlockBinding(mt,gt,G.__bindingPointIndex),l.set(mt,gt))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,V={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,S=null,_=null,x=null,M=null,b=null,w=null,y=new bt(0,0,0),E=0,A=!1,R=null,C=null,L=null,P=null,F=null,yt.set(0,0,s.canvas.width,s.canvas.height),Lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:ht,bindFramebuffer:zt,drawBuffers:_t,useProgram:Tt,setBlending:Kt,setMaterial:oe,setFlipSided:Ft,setCullFace:Ht,setLineWidth:ce,setPolygonOffset:_e,setScissorTest:ue,activeTexture:ae,bindTexture:k,unbindTexture:Ae,compressedTexImage2D:le,compressedTexImage3D:N,texImage2D:et,texImage3D:st,pixelStorei:Ot,getParameter:dt,updateUBOMapping:Bt,uniformBlockBinding:Yt,texStorage2D:lt,texStorage3D:ut,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:pt,viewport:ft,reset:he}}function Ov(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,T){return p?new OffscreenCanvas(N,T):jr("canvas")}function m(N,T,W){let Y=1,j=le(N);if((j.width>W||j.height>W)&&(Y=W/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let lt=Math.floor(Y*j.width),ut=Math.floor(Y*j.height);d===void 0&&(d=v(lt,ut));let et=T?v(lt,ut):d;return et.width=lt,et.height=ut,et.getContext("2d").drawImage(N,0,0,lt,ut),Jt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+lt+"x"+ut+")."),et}else return"data"in N&&Jt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),N;return N}function g(N){return N.generateMipmaps}function S(N){s.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(N,T,W,Y,j,lt=!1){if(N!==null){if(s[N]!==void 0)return s[N];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut;Y&&(ut=t.get("EXT_texture_norm16"),ut||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=T;if(T===s.RED&&(W===s.FLOAT&&(et=s.R32F),W===s.HALF_FLOAT&&(et=s.R16F),W===s.UNSIGNED_BYTE&&(et=s.R8),W===s.UNSIGNED_SHORT&&ut&&(et=ut.R16_EXT),W===s.SHORT&&ut&&(et=ut.R16_SNORM_EXT)),T===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.R8UI),W===s.UNSIGNED_SHORT&&(et=s.R16UI),W===s.UNSIGNED_INT&&(et=s.R32UI),W===s.BYTE&&(et=s.R8I),W===s.SHORT&&(et=s.R16I),W===s.INT&&(et=s.R32I)),T===s.RG&&(W===s.FLOAT&&(et=s.RG32F),W===s.HALF_FLOAT&&(et=s.RG16F),W===s.UNSIGNED_BYTE&&(et=s.RG8),W===s.UNSIGNED_SHORT&&ut&&(et=ut.RG16_EXT),W===s.SHORT&&ut&&(et=ut.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RG8UI),W===s.UNSIGNED_SHORT&&(et=s.RG16UI),W===s.UNSIGNED_INT&&(et=s.RG32UI),W===s.BYTE&&(et=s.RG8I),W===s.SHORT&&(et=s.RG16I),W===s.INT&&(et=s.RG32I)),T===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RGB8UI),W===s.UNSIGNED_SHORT&&(et=s.RGB16UI),W===s.UNSIGNED_INT&&(et=s.RGB32UI),W===s.BYTE&&(et=s.RGB8I),W===s.SHORT&&(et=s.RGB16I),W===s.INT&&(et=s.RGB32I)),T===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),W===s.UNSIGNED_INT&&(et=s.RGBA32UI),W===s.BYTE&&(et=s.RGBA8I),W===s.SHORT&&(et=s.RGBA16I),W===s.INT&&(et=s.RGBA32I)),T===s.RGB&&(W===s.UNSIGNED_SHORT&&ut&&(et=ut.RGB16_EXT),W===s.SHORT&&ut&&(et=ut.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),T===s.RGBA){let st=lt?Qr:ve.getTransfer(j);W===s.FLOAT&&(et=s.RGBA32F),W===s.HALF_FLOAT&&(et=s.RGBA16F),W===s.UNSIGNED_BYTE&&(et=st===Ie?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&ut&&(et=ut.RGBA16_EXT),W===s.SHORT&&ut&&(et=ut.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(N,T){let W;return N?T===null||T===li||T===br?W=s.DEPTH24_STENCIL8:T===jn?W=s.DEPTH32F_STENCIL8:T===Sr&&(W=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===li||T===br?W=s.DEPTH_COMPONENT24:T===jn?W=s.DEPTH_COMPONENT32F:T===Sr&&(W=s.DEPTH_COMPONENT16),W}function b(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==pn&&N.minFilter!==Ke?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){let T=N.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function y(N){let T=N.target;T.removeEventListener("dispose",y),R(T)}function E(N){let T=n.get(N);if(T.__webglInit===void 0)return;let W=N.source,Y=f.get(W);if(Y){let j=Y[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(N),Object.keys(Y).length===0&&f.delete(W)}n.remove(N)}function A(N){let T=n.get(N);s.deleteTexture(T.__webglTexture);let W=N.source,Y=f.get(W);delete Y[T.__cacheKey],o.memory.textures--}function R(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let j=0;j<T.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(T.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)s.deleteFramebuffer(T.__webglFramebuffer[Y]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=N.textures;for(let Y=0,j=W.length;Y<j;Y++){let lt=n.get(W[Y]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(W[Y])}n.remove(N)}let C=0;function L(){C=0}function P(){return C}function F(N){C=N}function U(){let N=C;return N>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),C+=1,N}function B(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function X(N,T){let W=n.get(N);if(N.isVideoTexture&&k(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Y=N.image;if(Y===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+T)}function O(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ht(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+T)}function H(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ht(W,N,T);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+T)}function V(N,T){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){zt(W,N,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+T)}let ot={[Ms]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},rt={[pn]:s.NEAREST,[of]:s.NEAREST_MIPMAP_NEAREST,[Bo]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[Tl]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},yt={[hf]:s.NEVER,[mf]:s.ALWAYS,[uf]:s.LESS,[hc]:s.LEQUAL,[df]:s.EQUAL,[uc]:s.GEQUAL,[ff]:s.GREATER,[pf]:s.NOTEQUAL};function Lt(N,T){if(T.type===jn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ke||T.magFilter===Tl||T.magFilter===Bo||T.magFilter===Si||T.minFilter===Ke||T.minFilter===Tl||T.minFilter===Bo||T.minFilter===Si)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ot[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ot[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ot[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,rt[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==Bo&&T.minFilter!==Si||T.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Xt(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",w));let Y=T.source,j=f.get(Y);j===void 0&&(j={},f.set(Y,j));let lt=B(T);if(lt!==N.__cacheKey){j[lt]===void 0&&(j[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),j[lt].usedTimes++;let ut=j[N.__cacheKey];ut!==void 0&&(j[N.__cacheKey].usedTimes--,ut.usedTimes===0&&A(T)),N.__cacheKey=lt,N.__webglTexture=j[lt].texture}return W}function K(N,T,W){return Math.floor(Math.floor(N/W)/T)}function tt(N,T,W,Y){let lt=N.updateRanges;if(lt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,W,Y,T.data);else{lt.sort((Ot,pt)=>Ot.start-pt.start);let ut=0;for(let Ot=1;Ot<lt.length;Ot++){let pt=lt[ut],ft=lt[Ot],Bt=pt.start+pt.count,Yt=K(ft.start,T.width,4),he=K(pt.start,T.width,4);ft.start<=Bt+1&&Yt===he&&K(ft.start+ft.count-1,T.width,4)===Yt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++ut,lt[ut]=ft)}lt.length=ut+1;let et=e.getParameter(s.UNPACK_ROW_LENGTH),st=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ot=0,pt=lt.length;Ot<pt;Ot++){let ft=lt[Ot],Bt=Math.floor(ft.start/4),Yt=Math.ceil(ft.count/4),he=Bt%T.width,G=Math.floor(Bt/T.width),mt=Yt,it=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,he),e.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,he,G,mt,it,W,Y,T.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,et),e.pixelStorei(s.UNPACK_SKIP_PIXELS,st),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function ht(N,T,W){let Y=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=s.TEXTURE_3D);let j=Xt(N,T),lt=T.source;e.bindTexture(Y,N.__webglTexture,s.TEXTURE0+W);let ut=n.get(lt);if(lt.version!==ut.__version||j===!0){if(e.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let it=ve.getPrimaries(ve.workingColorSpace),gt=T.colorSpace===ci?null:ve.getPrimaries(T.colorSpace),wt=T.colorSpace===ci||it===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let st=m(T.image,!1,i.maxTextureSize);st=Ae(T,st);let dt=r.convert(T.format,T.colorSpace),Ot=r.convert(T.type),pt=x(T.internalFormat,dt,Ot,T.normalized,T.colorSpace,T.isVideoTexture);Lt(Y,T);let ft,Bt=T.mipmaps,Yt=T.isVideoTexture!==!0,he=ut.__version===void 0||j===!0,G=lt.dataReady,mt=b(T,st);if(T.isDepthTexture)pt=M(T.format===os,T.type),he&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,pt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,pt,st.width,st.height,0,dt,Ot,null));else if(T.isDataTexture)if(Bt.length>0){Yt&&he&&e.texStorage2D(s.TEXTURE_2D,mt,pt,Bt[0].width,Bt[0].height);for(let it=0,gt=Bt.length;it<gt;it++)ft=Bt[it],Yt?G&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,dt,Ot,ft.data):e.texImage2D(s.TEXTURE_2D,it,pt,ft.width,ft.height,0,dt,Ot,ft.data);T.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(s.TEXTURE_2D,mt,pt,st.width,st.height),G&&tt(T,st,dt,Ot)):e.texImage2D(s.TEXTURE_2D,0,pt,st.width,st.height,0,dt,Ot,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,pt,Bt[0].width,Bt[0].height,st.depth);for(let it=0,gt=Bt.length;it<gt;it++)if(ft=Bt[it],T.format!==Tn)if(dt!==null)if(Yt){if(G)if(T.layerUpdates.size>0){let wt=iu(ft.width,ft.height,T.format,T.type);for(let at of T.layerUpdates){let Vt=ft.data.subarray(at*wt/ft.data.BYTES_PER_ELEMENT,(at+1)*wt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,at,ft.width,ft.height,1,dt,Vt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,st.depth,dt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,pt,ft.width,ft.height,st.depth,0,ft.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,st.depth,dt,Ot,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,pt,ft.width,ft.height,st.depth,0,dt,Ot,ft.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Yt&&he&&e.texStorage2D(s.TEXTURE_2D,mt,pt,Bt[0].width,Bt[0].height);for(let it=0,gt=Bt.length;it<gt;it++)ft=Bt[it],T.format!==Tn?dt!==null?Yt?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,it,pt,ft.width,ft.height,0,ft.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?G&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,dt,Ot,ft.data):e.texImage2D(s.TEXTURE_2D,it,pt,ft.width,ft.height,0,dt,Ot,ft.data)}else if(T.isDataArrayTexture)if(Yt){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,pt,st.width,st.height,st.depth),G)if(T.layerUpdates.size>0){let it=iu(st.width,st.height,T.format,T.type);for(let gt of T.layerUpdates){let wt=st.data.subarray(gt*it/st.data.BYTES_PER_ELEMENT,(gt+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,st.width,st.height,1,dt,Ot,wt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,Ot,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,pt,st.width,st.height,st.depth,0,dt,Ot,st.data);else if(T.isData3DTexture)Yt?(he&&e.texStorage3D(s.TEXTURE_3D,mt,pt,st.width,st.height,st.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,Ot,st.data)):e.texImage3D(s.TEXTURE_3D,0,pt,st.width,st.height,st.depth,0,dt,Ot,st.data);else if(T.isFramebufferTexture){if(he)if(Yt)e.texStorage2D(s.TEXTURE_2D,mt,pt,st.width,st.height);else{let it=st.width,gt=st.height;for(let wt=0;wt<mt;wt++)e.texImage2D(s.TEXTURE_2D,wt,pt,it,gt,0,dt,Ot,null),it>>=1,gt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let it=s.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),u.add(T),it.onpaint=gt=>{let wt=gt.changedElements;for(let at of u)wt.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,st);else{let wt=s.RGBA,at=s.RGBA,Vt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,at,Vt,st)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Yt&&he){let it=le(Bt[0]);e.texStorage2D(s.TEXTURE_2D,mt,pt,it.width,it.height)}for(let it=0,gt=Bt.length;it<gt;it++)ft=Bt[it],Yt?G&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,dt,Ot,ft):e.texImage2D(s.TEXTURE_2D,it,pt,dt,Ot,ft);T.generateMipmaps=!1}else if(Yt){if(he){let it=le(st);e.texStorage2D(s.TEXTURE_2D,mt,pt,it.width,it.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Ot,st)}else e.texImage2D(s.TEXTURE_2D,0,pt,dt,Ot,st);g(T)&&S(Y),ut.__version=lt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function zt(N,T,W){if(T.image.length!==6)return;let Y=Xt(N,T),j=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+W);let lt=n.get(j);if(j.version!==lt.__version||Y===!0){e.activeTexture(s.TEXTURE0+W);let ut=ve.getPrimaries(ve.workingColorSpace),et=T.colorSpace===ci?null:ve.getPrimaries(T.colorSpace),st=T.colorSpace===ci||ut===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ot=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let at=0;at<6;at++)!dt&&!Ot?pt[at]=m(T.image[at],!0,i.maxCubemapSize):pt[at]=Ot?T.image[at].image:T.image[at],pt[at]=Ae(T,pt[at]);let ft=pt[0],Bt=r.convert(T.format,T.colorSpace),Yt=r.convert(T.type),he=x(T.internalFormat,Bt,Yt,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,mt=lt.__version===void 0||Y===!0,it=j.dataReady,gt=b(T,ft);Lt(s.TEXTURE_CUBE_MAP,T);let wt;if(dt){G&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,he,ft.width,ft.height);for(let at=0;at<6;at++){wt=pt[at].mipmaps;for(let Vt=0;Vt<wt.length;Vt++){let Ut=wt[Vt];T.format!==Tn?Bt!==null?G?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Ut.width,Ut.height,Bt,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,he,Ut.width,Ut.height,0,Ut.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Ut.width,Ut.height,Bt,Yt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,he,Ut.width,Ut.height,0,Bt,Yt,Ut.data)}}}else{if(wt=T.mipmaps,G&&mt){wt.length>0&&gt++;let at=le(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,he,at.width,at.height)}for(let at=0;at<6;at++)if(Ot){G?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,pt[at].width,pt[at].height,Bt,Yt,pt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,he,pt[at].width,pt[at].height,0,Bt,Yt,pt[at].data);for(let Vt=0;Vt<wt.length;Vt++){let ke=wt[Vt].image[at].image;G?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,ke.width,ke.height,Bt,Yt,ke.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,he,ke.width,ke.height,0,Bt,Yt,ke.data)}}else{G?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Yt,pt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,he,Bt,Yt,pt[at]);for(let Vt=0;Vt<wt.length;Vt++){let Ut=wt[Vt];G?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Bt,Yt,Ut.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,he,Bt,Yt,Ut.image[at])}}}g(T)&&S(s.TEXTURE_CUBE_MAP),lt.__version=j.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _t(N,T,W,Y,j,lt){let ut=r.convert(W.format,W.colorSpace),et=r.convert(W.type),st=x(W.internalFormat,ut,et,W.normalized,W.colorSpace),dt=n.get(T),Ot=n.get(W);if(Ot.__renderTarget=T,!dt.__hasExternalTextures){let pt=Math.max(1,T.width>>lt),ft=Math.max(1,T.height>>lt);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,lt,st,pt,ft,T.depth,0,ut,et,null):e.texImage2D(j,lt,st,pt,ft,0,ut,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),ae(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,Ot.__webglTexture,0,ue(T)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,Ot.__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(N,T,W){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){let Y=T.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,lt=M(T.stencilBuffer,j),ut=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ae(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(T),lt,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(T),lt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,lt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,N)}else{let Y=T.textures;for(let j=0;j<Y.length;j++){let lt=Y[j],ut=r.convert(lt.format,lt.colorSpace),et=r.convert(lt.type),st=x(lt.internalFormat,ut,et,lt.normalized,lt.colorSpace);ae(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(T),st,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(T),st,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,st,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(N,T,W){let Y=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(T.depthTexture);if(j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,T.depthTexture);let dt=r.convert(T.depthTexture.format),Ot=r.convert(T.depthTexture.type),pt;T.depthTexture.format===_i?pt=s.DEPTH_COMPONENT24:T.depthTexture.format===os&&(pt=s.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,T.width,T.height,0,dt,Ot,null)}}else X(T.depthTexture,0);let lt=j.__webglTexture,ut=ue(T),et=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,st=T.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===_i)ae(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,et,lt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,st,et,lt,0);else if(T.depthTexture.format===os)ae(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,et,lt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,st,et,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(N){let T=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){let j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=Y}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)St(T.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?St(T.__webglFramebuffer[0],N,0):St(T.__webglFramebuffer,N,0)}else if(W){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=s.createRenderbuffer(),Tt(T.__webglDepthbuffer[Y],N,!1);else{let j=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,lt)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Tt(T.__webglDepthbuffer,N,!1);else{let j=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,lt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(N,T,W){let Y=n.get(N);T!==void 0&&_t(Y.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&qt(N)}function oe(N){let T=N.texture,W=n.get(N),Y=n.get(T);N.addEventListener("dispose",y);let j=N.textures,lt=N.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=T.version,o.memory.textures++),lt){W.__webglFramebuffer=[];for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[et]=[];for(let st=0;st<T.mipmaps.length;st++)W.__webglFramebuffer[et][st]=s.createFramebuffer()}else W.__webglFramebuffer[et]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let et=0;et<T.mipmaps.length;et++)W.__webglFramebuffer[et]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(ut)for(let et=0,st=j.length;et<st;et++){let dt=n.get(j[et]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&ae(N)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){let st=j[et];W.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let dt=r.convert(st.format,st.colorSpace),Ot=r.convert(st.type),pt=x(st.internalFormat,dt,Ot,st.normalized,st.colorSpace,N.isXRRenderTarget===!0),ft=ue(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,pt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,W.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(W.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,T);for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)_t(W.__webglFramebuffer[et][st],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else _t(W.__webglFramebuffer[et],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(T)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let et=0,st=j.length;et<st;et++){let dt=j[et],Ot=n.get(dt),pt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Ot.__webglTexture),Lt(pt,dt),_t(W.__webglFramebuffer,N,dt,s.COLOR_ATTACHMENT0+et,pt,0),g(dt)&&S(pt)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(et=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,Y.__webglTexture),Lt(et,T),T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)_t(W.__webglFramebuffer[st],N,T,s.COLOR_ATTACHMENT0,et,st);else _t(W.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,et,0);g(T)&&S(et),e.unbindTexture()}N.depthBuffer&&qt(N)}function Ft(N){let T=N.textures;for(let W=0,Y=T.length;W<Y;W++){let j=T[W];if(g(j)){let lt=_(N),ut=n.get(j).__webglTexture;e.bindTexture(lt,ut),S(lt),e.unbindTexture()}}}let Ht=[],ce=[];function _e(N){if(N.samples>0){if(ae(N)===!1){let T=N.textures,W=N.width,Y=N.height,j=s.COLOR_BUFFER_BIT,lt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(N),et=T.length>1;if(et)for(let dt=0;dt<T.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let st=N.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Ot=n.get(T[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,W,Y,0,0,W,Y,j,s.NEAREST),l===!0&&(Ht.length=0,ce.length=0,Ht.push(s.COLOR_ATTACHMENT0+dt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Ht.push(lt),ce.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let dt=0;dt<T.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Ot=n.get(T[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ue(N){return Math.min(i.maxSamples,N.samples)}function ae(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function Ae(N,T){let W=N.colorSpace,Y=N.format,j=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Jr&&W!==ci&&(ve.getTransfer(W)===Ie?(Y!==Tn||j!==Nn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",W)),T}function le(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Kt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Bv(s,t){function e(n,i=ci){let r,o=ve.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===Rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return s.BYTE;if(n===qh)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===Al)return s.INT;if(n===li)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===Vn)return s.HALF_FLOAT;if(n===$h)return s.ALPHA;if(n===Kh)return s.RGB;if(n===Tn)return s.RGBA;if(n===_i)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===Pl)return s.RED;if(n===Il)return s.RED_INTEGER;if(n===as)return s.RG;if(n===Ll)return s.RG_INTEGER;if(n===Dl)return s.RGBA_INTEGER;if(n===ko||n===zo||n===Ho||n===Go)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Fl||n===Ul||n===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===kl||n===zl||n===Hl||n===Gl||n===Vo||n===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===kl)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vo)return r.COMPRESSED_RG11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Kl||n===Jl||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===lc||n===Wo||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:kv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends vi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new Su,g={},S=e.getContextAttributes(),_=null,x=null,M=[],b=[],w=new ct,y=null,E=null,A=new fn;A.viewport=new ye;let R=new fn;R.viewport=new ye;let C=[A,R],L=new Ml,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=M[K];return tt===void 0&&(tt=new dr,M[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=M[K];return tt===void 0&&(tt=new dr,M[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=M[K];return tt===void 0&&(tt=new dr,M[K]=tt),tt.getHandSpace()};function U(K){let tt=b.indexOf(K.inputSource);if(tt===-1)return;let ht=M[tt];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||o),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let K=0;K<M.length;K++){let tt=b[K];tt!==null&&(b[K]=null,M[K].disconnect(tt))}P=null,F=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(_),f=null,d=null,u=null,i=null,x=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,zt=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=S.stencil?os:_i,zt=S.stencil?br:li);let Tt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new En(d.textureWidth,d.textureHeight,{format:Tn,type:Nn,depthTexture:new Ji(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ht={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new En(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(K){for(let tt=0;tt<K.removed.length;tt++){let ht=K.removed[tt],zt=b.indexOf(ht);zt>=0&&(b[zt]=null,M[zt].disconnect(ht))}for(let tt=0;tt<K.added.length;tt++){let ht=K.added[tt],zt=b.indexOf(ht);if(zt===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=b.length){b.push(ht),zt=Tt;break}else if(b[Tt]===null){b[Tt]=ht,zt=Tt;break}if(zt===-1)break}let _t=M[zt];_t&&_t.connect(ht)}}let O=new D,H=new D;function V(K,tt,ht){O.setFromMatrixPosition(tt.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);let zt=O.distanceTo(H),_t=tt.projectionMatrix.elements,Tt=ht.projectionMatrix.elements,St=_t[14]/(_t[10]-1),qt=_t[14]/(_t[10]+1),Kt=(_t[9]+1)/_t[5],oe=(_t[9]-1)/_t[5],Ft=(_t[8]-1)/_t[0],Ht=(Tt[8]+1)/Tt[0],ce=St*Ft,_e=St*Ht,ue=zt/(-Ft+Ht),ae=ue*-Ft;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ae),K.translateZ(ue),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let k=St+ue,Ae=qt+ue,le=ce-ae,N=_e+(zt-ae),T=Kt*qt/Ae*k,W=oe*qt/Ae*k;K.projectionMatrix.makePerspective(le,N,T,W,k,Ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let tt=K.near,ht=K.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),L.near=R.near=A.near=tt,L.far=R.far=A.far=ht,(P!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,F=L.far),L.layers.mask=K.layers.mask|6,A.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let zt=K.parent,_t=L.cameras;ot(L,zt);for(let Tt=0;Tt<_t.length;Tt++)ot(_t[Tt],zt);_t.length===2?V(L,A,R):L.projectionMatrix.copy(A.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),rt(K,L,zt)};function rt(K,tt,ht){ht===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=eo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return g[K]};let yt=null;function Lt(K,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let zt=!1;ht.length!==L.cameras.length&&(L.cameras.length=0,zt=!0);for(let qt=0;qt<ht.length;qt++){let Kt=ht[qt],oe=null;if(f!==null)oe=f.getViewport(Kt);else{let Ht=u.getViewSubImage(d,Kt);oe=Ht.viewport,qt===0&&(t.setRenderTargetTextures(x,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(x))}let Ft=C[qt];Ft===void 0&&(Ft=new fn,Ft.layers.enable(qt),Ft.viewport=new ye,C[qt]=Ft),Ft.matrix.fromArray(Kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(oe.x,oe.y,oe.width,oe.height),qt===0&&(L.matrix.copy(Ft.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),zt===!0&&L.cameras.push(Ft)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let qt=u.getDepthInformation(ht[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,i.renderState)}if(_t&&_t.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let qt=0;qt<ht.length;qt++){let Kt=ht[qt].camera;if(Kt){let oe=g[Kt];oe||(oe=new po,g[Kt]=oe);let Ft=u.getCameraImage(Kt);oe.sourceTexture=Ft}}}}for(let ht=0;ht<M.length;ht++){let zt=b[ht],_t=M[ht];zt!==null&&_t!==void 0&&_t.update(zt,tt,c||o)}yt&&yt(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let Xt=new $f;Xt.setAnimationLoop(Lt),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}},Hv=new Se,ep=new se;ep.set(-1,0,0,0,1,0,0,0,1);function Gv(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,tu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,_,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),_=S.envMap,x=S.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ep),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=i[x.id];b===void 0&&(m(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",S));let w=M.program;n.updateUBOMapping(x,w);let y=t.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let b=s.createBuffer(),w=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=i[x.id],b=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,E=b.length;y<E;y++){let A=b[y];if(Array.isArray(A))for(let R=0,C=A.length;R<C;R++)f(A[R],y,R,w);else f(A,y,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,b,w){if(v(x,M,b,w)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let R=0;R<E.length;R++){let C=E[R],L=g(C);p(C,x.__data,A),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function v(x,M,b,w){let y=x.value,E=M+"_"+b;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{let A=w[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(x){let M=x.uniforms,b=0,w=16;for(let E=0,A=M.length;E<A;E++){let R=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,L=R.length;C<L;C++){let P=R[C],F=Array.isArray(P.value)?P.value:[P.value];for(let U=0,B=F.length;U<B;U++){let X=F[U],O=g(X),H=b%w,V=H%O.boundary,ot=H+V;b+=V,ot!==0&&w-ot<O.storage&&(b+=w-ot),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=O.storage}}}let y=b%w;return y>0&&(b+=w-y),x.__size=b,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function Xv(){return bi===null&&(bi=new Bi(Wv,16,16,as,Vn),bi.name="DFG_LUT",bi.minFilter=Ke,bi.magFilter=Ke,bi.wrapS=Qn,bi.wrapT=Qn,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var mc=class{constructor(t={}){let{canvas:e=gf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Nn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,m=new Set([Dl,Ll,Il]),g=new Set([Nn,li,Sr,br,Rl,Cl]),S=new Uint32Array(4),_=new Int32Array(4),x=new D,M=null,b=null,w=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,C=null,L=null,P=null,F=null;this._outputColorSpace=De;let U=0,B=0,X=null,O=-1,H=null,V=new ye,ot=new ye,rt=null,yt=new bt(0),Lt=0,Xt=e.width,K=e.height,tt=1,ht=null,zt=null,_t=new ye(0,0,Xt,K),Tt=new ye(0,0,Xt,K),St=!1,qt=new pr,Kt=!1,oe=!1,Ft=new Se,Ht=new D,ce=new ye,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ae(){return X===null?tt:1}let k=n;function Ae(I,z){return e.getContext(I,z)}let le,N,T,W,Y,j,lt,ut,et,st,dt,Ot,pt,ft,Bt,Yt,he,G,mt,it,gt,wt,at;try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",ei,!1),k===null){let z="webgl2";if(k=Ae(z,I),k===null)throw Ae(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(I){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),jt("WebGLRenderer: "+I.message),I}function Vt(){le=new Qx(k),le.init(),gt=new Bv(k,le),N=new Gx(k,le,t,gt),T=new Uv(k,le),N.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),L=k.createFramebuffer(),P=k.createFramebuffer(),F=k.createFramebuffer(),W=new e_(k),Y=new Sv,j=new Ov(k,le,T,Y,N,gt,W),lt=new Jx(A),ut=new im(k),wt=new zx(k,ut),et=new jx(k,ut,W,wt),st=new i_(k,et,ut,wt,W),G=new n_(k,N,j),Bt=new Vx(Y),dt=new Mv(A,lt,le,N,wt,Bt),Ot=new Gv(A,Y),pt=new wv,ft=new Pv(le),he=new kx(A,lt,T,st,p,l),Yt=new Fv(A,st,N),at=new Vv(k,W,N,T),mt=new Hx(k,le,W),it=new t_(k,le,W),W.programs=dt.programs,A.capabilities=N,A.extensions=le,A.properties=Y,A.renderLists=pt,A.shadowMap=Yt,A.state=T,A.info=W}v!==Nn&&(E=new r_(v,e.width,e.height,a,i,r));let Ut=new bu(A,k);this.xr=Ut,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let I=le.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=le.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(I){I!==void 0&&(tt=I,this.setSize(Xt,K,!1))},this.getSize=function(I){return I.set(Xt,K)},this.setSize=function(I,z,Q=!0){if(Ut.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=I,K=z,e.width=Math.floor(I*tt),e.height=Math.floor(z*tt),Q===!0&&(e.style.width=I+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,I,z)},this.getDrawingBufferSize=function(I){return I.set(Xt*tt,K*tt).floor()},this.setDrawingBufferSize=function(I,z,Q){Xt=I,K=z,tt=Q,e.width=Math.floor(I*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,I,z)},this.setEffects=function(I){if(v===Nn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let z=0;z<I.length;z++)if(I[z].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(_t)},this.setViewport=function(I,z,Q,Z){I.isVector4?_t.set(I.x,I.y,I.z,I.w):_t.set(I,z,Q,Z),T.viewport(V.copy(_t).multiplyScalar(tt).round())},this.getScissor=function(I){return I.copy(Tt)},this.setScissor=function(I,z,Q,Z){I.isVector4?Tt.set(I.x,I.y,I.z,I.w):Tt.set(I,z,Q,Z),T.scissor(ot.copy(Tt).multiplyScalar(tt).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(I){T.setScissorTest(St=I)},this.setOpaqueSort=function(I){ht=I},this.setTransparentSort=function(I){zt=I},this.getClearColor=function(I){return I.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(I=!0,z=!0,Q=!0){let Z=0;if(I){let $=!1;if(X!==null){let Mt=X.texture.format;$=m.has(Mt)}if($){let Mt=X.texture.type,Pt=g.has(Mt),vt=he.getClearColor(),Dt=he.getClearAlpha(),kt=vt.r,de=vt.g,ge=vt.b;Pt?(S[0]=kt,S[1]=de,S[2]=ge,S[3]=Dt,k.clearBufferuiv(k.COLOR,0,S)):(_[0]=kt,_[1]=de,_[2]=ge,_[3]=Dt,k.clearBufferiv(k.COLOR,0,_))}else Z|=k.COLOR_BUFFER_BIT}z&&(Z|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),C=I},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),he.dispose(),pt.dispose(),ft.dispose(),Y.dispose(),lt.dispose(),st.dispose(),wt.dispose(),at.dispose(),dt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Zu),Ut.removeEventListener("sessionend",$u),ms.stop()};function ke(I){I.preventDefault(),to("WebGLRenderer: Context Lost."),R=!0}function Ce(){to("WebGLRenderer: Context Restored."),R=!1;let I=W.autoReset,z=Yt.enabled,Q=Yt.autoUpdate,Z=Yt.needsUpdate,$=Yt.type;Vt(),W.autoReset=I,Yt.enabled=z,Yt.autoUpdate=Q,Yt.needsUpdate=Z,Yt.type=$}function ei(I){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function pi(I){let z=I.target;z.removeEventListener("dispose",pi),Gp(z)}function Gp(I){Vp(I),Y.remove(I)}function Vp(I){let z=Y.get(I).programs;z!==void 0&&(z.forEach(function(Q){dt.releaseProgram(Q)}),I.isShaderMaterial&&dt.releaseShaderCache(I))}this.renderBufferDirect=function(I,z,Q,Z,$,Mt){z===null&&(z=_e);let Pt=$.isMesh&&$.matrixWorld.determinantAffine()<0,vt=qp(I,z,Q,Z,$);T.setMaterial(Z,Pt);let Dt=Q.index,kt=1;if(Z.wireframe===!0){if(Dt=et.getWireframeAttribute(Q),Dt===void 0)return;kt=2}let de=Q.drawRange,ge=Q.attributes.position,Nt=de.start*kt,Pe=(de.start+de.count)*kt;Mt!==null&&(Nt=Math.max(Nt,Mt.start*kt),Pe=Math.min(Pe,(Mt.start+Mt.count)*kt)),Dt!==null?(Nt=Math.max(Nt,0),Pe=Math.min(Pe,Dt.count)):ge!=null&&(Nt=Math.max(Nt,0),Pe=Math.min(Pe,ge.count));let rn=Pe-Nt;if(rn<0||rn===1/0)return;wt.setup($,Z,vt,Q,Dt);let Ge,Oe=mt;if(Dt!==null&&(Ge=ut.get(Dt),Oe=it,Oe.setIndex(Ge)),$.isMesh)Z.wireframe===!0?(T.setLineWidth(Z.wireframeLinewidth*ae()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if($.isLine){let Sn=Z.linewidth;Sn===void 0&&(Sn=1),T.setLineWidth(Sn*ae()),$.isLineSegments?Oe.setMode(k.LINES):$.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else $.isPoints?Oe.setMode(k.POINTS):$.isSprite&&Oe.setMode(k.TRIANGLES);if($.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Sn=$._multiDrawStarts,Rt=$._multiDrawCounts,Pn=$._multiDrawCount,Ee=Dt?ut.get(Dt).bytesPerElement:1,Kn=Y.get(Z).currentProgram.getUniforms();for(let mi=0;mi<Pn;mi++)Kn.setValue(k,"_gl_DrawID",mi),Oe.render(Sn[mi]/Ee,Rt[mi])}else if($.isInstancedMesh)Oe.renderInstances(Nt,rn,$.count);else if(Q.isInstancedBufferGeometry){let Sn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Rt=Math.min(Q.instanceCount,Sn);Oe.renderInstances(Nt,rn,Rt)}else Oe.render(Nt,rn)};function Yu(I,z,Q,Z){C!==null&&I.isNodeMaterial&&C.setObject(Z,I),Kt===!0&&Bt.setState(I,Q,!1),I.transparent===!0&&I.side===sn&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,ha(I,z,Z),I.side=is,I.needsUpdate=!0,ha(I,z,Z),I.side=sn):ha(I,z,Z)}this.compile=function(I,z,Q=null){Q===null&&(Q=I),C!==null&&C.renderStart(I,z,Q),b=ft.get(Q),b.init(z),y.push(b),Q.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),I!==Q&&I.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),C!==null&&C.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,Kt=Bt.init(this.clippingPlanes,oe),Kt===!0&&Bt.setGlobalState(this.clippingPlanes,z),C!==null&&Yt.render(b.state.shadowsArray,Q,z);let Z=new Set;return I.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Mt=$.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let vt=Mt[Pt];Yu(vt,Q,z,$),Z.add(vt)}else Yu(Mt,Q,z,$),Z.add(Mt)}),b=y.pop(),C!==null&&C.renderEnd(),Z},this.compileAsync=function(I,z,Q=null){let Z=this.compile(I,z,Q);return new Promise($=>{function Mt(){if(Z.forEach(function(Pt){let Dt=Y.get(Pt).currentProgram;(Dt===void 0||Dt.isReady())&&Z.delete(Pt)}),Z.size===0){$(I);return}setTimeout(Mt,10)}le.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Wc=null;function Wp(I){Wc&&Wc(I)}function Zu(){ms.stop()}function $u(){ms.start()}let ms=new $f;ms.setAnimationLoop(Wp),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(I){Wc=I,Ut.setAnimationLoop(I),I===null?ms.stop():ms.start()},Ut.addEventListener("sessionstart",Zu),Ut.addEventListener("sessionend",$u),this.render=function(I,z){if(z!==void 0&&z.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C!==null&&C.renderStart(I,z);let Q=Ut.enabled===!0&&Ut.isPresenting===!0,Z=E!==null&&(X===null||Q)&&E.begin(A,X);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(z),z=Ut.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,z,X),b=ft.get(I,y.length),b.init(z),b.state.textureUnits=j.getTextureUnits(),y.push(b),Ft.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),qt.setFromProjectionMatrix(Ft,ri,z.reversedDepth),oe=this.localClippingEnabled,Kt=Bt.init(this.clippingPlanes,oe),M=pt.get(I,w.length),M.init(),w.push(M),Ut.enabled===!0&&Ut.isPresenting===!0){let Pt=A.xr.getDepthSensingMesh();Pt!==null&&Xc(Pt,z,-1/0,A.sortObjects)}Xc(I,z,0,A.sortObjects),M.finish(),C!==null&&C.updateLights(b.state.lightsArray),A.sortObjects===!0&&M.sort(ht,zt),ue=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,ue&&he.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Bt.beginShadows();let $=b.state.shadowsArray;if(Yt.render($,I,z),Kt===!0&&Bt.endShadows(),(Z&&E.hasRenderPass())===!1){let Pt=M.opaque,vt=M.transmissive;if(b.setupLights(),z.isArrayCamera){let Dt=z.cameras;if(vt.length>0)for(let kt=0,de=Dt.length;kt<de;kt++){let ge=Dt[kt];Ju(Pt,vt,I,ge)}ue&&he.render(I);for(let kt=0,de=Dt.length;kt<de;kt++){let ge=Dt[kt];Ku(M,I,ge,ge.viewport)}}else vt.length>0&&Ju(Pt,vt,I,z),ue&&he.render(I),Ku(M,I,z)}X!==null&&B===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),Z&&E.end(A),I.isScene===!0&&I.onAfterRender(A,I,z),wt.resetDefaultState(),O=-1,H=null,y.pop(),y.length>0?(b=y[y.length-1],j.setTextureUnits(b.state.textureUnits),Kt===!0&&Bt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,C!==null&&C.renderEnd()};function Xc(I,z,Q,Z){if(I.visible===!1)return;if(I.layers.test(z.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(z);else if(I.isLightProbeGrid)b.pushLightProbeGrid(I);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(qt)){Z&&ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ft);let Pt=st.update(I),vt=I.material;vt.visible&&M.push(I,Pt,vt,Q,ce.z,null,z)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(qt))){let Pt=st.update(I),vt=I.material;if(Z&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ce.copy(I.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ce.copy(Pt.boundingSphere.center)),ce.applyMatrix4(I.matrixWorld).applyMatrix4(Ft)),Array.isArray(vt)){let Dt=Pt.groups;for(let kt=0,de=Dt.length;kt<de;kt++){let ge=Dt[kt],Nt=vt[ge.materialIndex];Nt&&Nt.visible&&M.push(I,Pt,Nt,Q,ce.z,ge,z)}}else vt.visible&&M.push(I,Pt,vt,Q,ce.z,null,z)}}let Mt=I.children;for(let Pt=0,vt=Mt.length;Pt<vt;Pt++)Xc(Mt[Pt],z,Q,Z)}function Ku(I,z,Q,Z){let{opaque:$,transmissive:Mt,transparent:Pt}=I;b.setupLightsView(Q),Kt===!0&&Bt.setGlobalState(A.clippingPlanes,Q),Z&&T.viewport(V.copy(Z)),$.length>0&&ca($,z,Q),Mt.length>0&&ca(Mt,z,Q),Pt.length>0&&ca(Pt,z,Q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ju(I,z,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let Nt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new En(1,1,{generateMipmaps:!0,type:Nt?Vn:Nn,minFilter:Si,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[Z.id],Pt=Z.viewport||V;Mt.setSize(Pt.z*A.transmissionResolutionScale,Pt.w*A.transmissionResolutionScale);let vt=A.getRenderTarget(),Dt=A.getActiveCubeFace(),kt=A.getActiveMipmapLevel();A.setRenderTarget(Mt),A.getClearColor(yt),Lt=A.getClearAlpha(),Lt<1&&A.setClearColor(16777215,.5),A.clear(),ue&&he.render(Q);let de=A.toneMapping;A.toneMapping=ai;let ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),Kt===!0&&Bt.setGlobalState(A.clippingPlanes,Z),ca(I,Q,Z),j.updateMultisampleRenderTarget(Mt),j.updateRenderTargetMipmap(Mt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Pe=0,rn=z.length;Pe<rn;Pe++){let Ge=z[Pe],{object:Oe,geometry:Sn,material:Rt,group:Pn}=Ge;if(Rt.side===sn&&Oe.layers.test(Z.layers)){let Ee=Rt.side;Rt.side=nn,Rt.needsUpdate=!0,Qu(Oe,Q,Z,Sn,Rt,Pn),Rt.side=Ee,Rt.needsUpdate=!0,Nt=!0}}Nt===!0&&(j.updateMultisampleRenderTarget(Mt),j.updateRenderTargetMipmap(Mt))}A.setRenderTarget(vt,Dt,kt),A.setClearColor(yt,Lt),ge!==void 0&&(Z.viewport=ge),A.toneMapping=de}function ca(I,z,Q){let Z=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Mt=I.length;$<Mt;$++){let Pt=I[$],{object:vt,geometry:Dt,group:kt}=Pt,de=Pt.material;de.allowOverride===!0&&Z!==null&&(de=Z),vt.layers.test(Q.layers)&&Qu(vt,z,Q,Dt,de,kt)}}function Qu(I,z,Q,Z,$,Mt){C!==null&&$.isNodeMaterial&&C.setObject(I,$),I.onBeforeRender(A,z,Q,Z,$,Mt),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(A,z,Q,Z,I,Mt),$.transparent===!0&&$.side===sn&&$.forceSinglePass===!1?($.side=nn,$.needsUpdate=!0,A.renderBufferDirect(Q,z,Z,$,I,Mt),$.side=is,$.needsUpdate=!0,A.renderBufferDirect(Q,z,Z,$,I,Mt),$.side=sn):A.renderBufferDirect(Q,z,Z,$,I,Mt),I.onAfterRender(A,z,Q,Z,$,Mt)}function ha(I,z,Q){z.isScene!==!0&&(z=_e);let Z=Y.get(I),$=b.state.lights,Mt=b.state.shadowsArray,Pt=$.state.version,vt=dt.getParameters(I,$.state,Mt,z,Q,b.state.lightProbeGridArray),Dt=dt.getProgramCacheKey(vt),kt=Z.programs;Z.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;let de=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Z.envMap=lt.get(I.envMap||Z.environment,de),Z.envMapRotation=Z.environment!==null&&I.envMap===null?z.environmentRotation:I.envMapRotation,kt===void 0&&(I.addEventListener("dispose",pi),kt=new Map,Z.programs=kt);let ge=kt.get(Dt);if(ge!==void 0){if(Z.currentProgram===ge&&Z.lightsStateVersion===Pt)return td(I,vt),ge}else vt.uniforms=dt.getUniforms(I),C!==null&&I.isNodeMaterial&&C.build(I,Q,vt),I.onBeforeCompile(vt,A),ge=dt.acquireProgram(vt,Dt),kt.set(Dt,ge),Z.uniforms=vt.uniforms;let Nt=Z.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Nt.clippingPlanes=Bt.uniform),td(I,vt),Z.needsLights=Zp(I),Z.lightsStateVersion=Pt,Z.needsLights&&(Nt.ambientLightColor.value=$.state.ambient,Nt.lightProbe.value=$.state.probe,Nt.sunLights.value=$.state.sun,Nt.sunLightShadows.value=$.state.sunShadow,Nt.directionalLights.value=$.state.directional,Nt.directionalLightShadows.value=$.state.directionalShadow,Nt.spotLights.value=$.state.spot,Nt.spotLightShadows.value=$.state.spotShadow,Nt.rectAreaLights.value=$.state.rectArea,Nt.ltc_1.value=$.state.rectAreaLTC1,Nt.ltc_2.value=$.state.rectAreaLTC2,Nt.pointLights.value=$.state.point,Nt.pointLightShadows.value=$.state.pointShadow,Nt.hemisphereLights.value=$.state.hemi,Nt.sunShadowMatrix.value=$.state.sunShadowMatrix,Nt.sunShadowCascade.value=$.state.sunShadowCascade,Nt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Nt.spotLightMatrix.value=$.state.spotLightMatrix,Nt.spotLightMap.value=$.state.spotLightMap,Nt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=ge,Z.uniformsList=null,ge}function ju(I){if(I.uniformsList===null){let z=I.currentProgram.getUniforms();I.uniformsList=Ar.seqWithValue(z.seq,I.uniforms)}return I.uniformsList}function td(I,z){let Q=Y.get(I);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Xp(I,z){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let Q=0,Z=I.length;Q<Z;Q++){let $=I[Q];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function qp(I,z,Q,Z,$){z.isScene!==!0&&(z=_e),j.resetTextureUnits();let Mt=z.fog,Pt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,vt=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ve.workingColorSpace,Dt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,kt=lt.get(Z.envMap||Pt,Dt),de=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ge=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!Q.morphAttributes.position,Pe=!!Q.morphAttributes.normal,rn=!!Q.morphAttributes.color,Ge=ai;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ge=A.toneMapping);let Oe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Sn=Oe!==void 0?Oe.length:0,Rt=Y.get(Z),Pn=b.state.lights;if(Kt===!0&&(oe===!0||I!==H)){let ze=I===H&&Z.id===O;Bt.setState(Z,I,ze)}let Ee=!1;Z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Pn.state.version||Rt.outputColorSpace!==vt||$.isBatchedMesh&&Rt.batching===!1||!$.isBatchedMesh&&Rt.batching===!0||$.isBatchedMesh&&Rt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Rt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||$.isInstancedMesh&&Rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Rt.instancingMorph===!1&&$.morphTexture!==null||Rt.envMap!==kt||Z.fog===!0&&Rt.fog!==Mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Bt.numPlanes||Rt.numIntersection!==Bt.numIntersection)||Rt.vertexAlphas!==de||Rt.vertexTangents!==ge||Rt.morphTargets!==Nt||Rt.morphNormals!==Pe||Rt.morphColors!==rn||Rt.toneMapping!==Ge||Rt.morphTargetsCount!==Sn||!!Rt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Rt.__version=Z.version);let Kn=Rt.currentProgram;Ee===!0&&(Kn=ha(Z,z,$),C&&Z.isNodeMaterial&&C.onUpdateProgram(Z,Kn,Rt));let mi=!1,Vi=!1,zs=!1,Fe=Kn.getUniforms(),en=Rt.uniforms;if(T.useProgram(Kn.program)&&(mi=!0,Vi=!0,zs=!0),Z.id!==O&&(O=Z.id,Vi=!0),Rt.needsLights){let ze=Xp(b.state.lightProbeGridArray,$);Rt.lightProbeGrid!==ze&&(Rt.lightProbeGrid=ze,Vi=!0)}if(mi||H!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Fe.setValue(k,"projectionMatrix",I.projectionMatrix),Fe.setValue(k,"viewMatrix",I.matrixWorldInverse);let Xi=Fe.map.cameraPosition;Xi!==void 0&&Xi.setValue(k,Ht.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Fe.setValue(k,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Fe.setValue(k,"isOrthographic",I.isOrthographicCamera===!0),H!==I&&(H=I,Vi=!0,zs=!0)}if(Rt.needsLights&&(Pn.state.sunShadowMap.length>0&&Fe.setValue(k,"sunShadowMap",Pn.state.sunShadowMap,j),Pn.state.directionalShadowMap.length>0&&Fe.setValue(k,"directionalShadowMap",Pn.state.directionalShadowMap,j),Pn.state.spotShadowMap.length>0&&Fe.setValue(k,"spotShadowMap",Pn.state.spotShadowMap,j),Pn.state.pointShadowMap.length>0&&Fe.setValue(k,"pointShadowMap",Pn.state.pointShadowMap,j)),$.isSkinnedMesh){Fe.setOptional(k,$,"bindMatrix"),Fe.setOptional(k,$,"bindMatrixInverse");let ze=$.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Fe.setValue(k,"boneTexture",ze.boneTexture,j))}$.isBatchedMesh&&(Fe.setOptional(k,$,"batchingTexture"),Fe.setValue(k,"batchingTexture",$._matricesTexture,j),Fe.setOptional(k,$,"batchingIdTexture"),Fe.setValue(k,"batchingIdTexture",$._indirectTexture,j),Fe.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Fe.setValue(k,"batchingColorTexture",$._colorsTexture,j));let Wi=Q.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&G.update($,Q,Kn),(Vi||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,Fe.setValue(k,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(en.envMapIntensity.value=z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Xv()),Vi){if(Fe.setValue(k,"toneMappingExposure",A.toneMappingExposure),Rt.needsLights&&Yp(en,zs),Mt&&Z.fog===!0&&Ot.refreshFogUniforms(en,Mt),Ot.refreshMaterialUniforms(en,Z,tt,K,b.state.transmissionRenderTarget[I.id]),Rt.needsLights&&Rt.lightProbeGrid){let ze=Rt.lightProbeGrid;en.probesSH.value=ze.texture,en.probesMin.value.copy(ze.boundingBox.min),en.probesMax.value.copy(ze.boundingBox.max),en.probesResolution.value.copy(ze.resolution)}Ar.upload(k,ju(Rt),en,j)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ar.upload(k,ju(Rt),en,j),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Fe.setValue(k,"center",$.center),Fe.setValue(k,"modelViewMatrix",$.modelViewMatrix),Fe.setValue(k,"normalMatrix",$.normalMatrix),Fe.setValue(k,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let ze=Z.uniformsGroups;for(let Xi=0,Hs=ze.length;Xi<Hs;Xi++){let nd=ze[Xi];at.update(nd,Kn),at.bind(nd,Kn)}}return Kn}function Yp(I,z){I.ambientLightColor.needsUpdate=z,I.lightProbe.needsUpdate=z,I.sunLights.needsUpdate=z,I.sunLightShadows.needsUpdate=z,I.directionalLights.needsUpdate=z,I.directionalLightShadows.needsUpdate=z,I.pointLights.needsUpdate=z,I.pointLightShadows.needsUpdate=z,I.spotLights.needsUpdate=z,I.spotLightShadows.needsUpdate=z,I.rectAreaLights.needsUpdate=z,I.hemisphereLights.needsUpdate=z}function Zp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(I,z,Q){let Z=Y.get(I);Z.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Y.get(I.texture).__webglTexture=z,Y.get(I.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,z){let Q=Y.get(I);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(I,z=0,Q=0){X=I,U=z,B=Q;let Z=null,$=!1,Mt=!1;if(I){let vt=Y.get(I);if(vt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(k.FRAMEBUFFER,vt.__webglFramebuffer),V.copy(I.viewport),ot.copy(I.scissor),rt=I.scissorTest,T.viewport(V),T.scissor(ot),T.setScissorTest(rt),O=-1;return}else if(vt.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(vt.__hasExternalTextures)j.rebindTextures(I,Y.get(I.texture).__webglTexture,Y.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let de=I.depthTexture;if(vt.__boundDepthTexture!==de){if(de!==null&&Y.has(de)&&(I.width!==de.image.width||I.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}let Dt=I.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Mt=!0);let kt=Y.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(kt[z])?Z=kt[z][Q]:Z=kt[z],$=!0):I.samples>0&&j.useMultisampledRTT(I)===!1?Z=Y.get(I).__webglMultisampledFramebuffer:Array.isArray(kt)?Z=kt[Q]:Z=kt,V.copy(I.viewport),ot.copy(I.scissor),rt=I.scissorTest}else V.copy(_t).multiplyScalar(tt).floor(),ot.copy(Tt).multiplyScalar(tt).floor(),rt=St;if(Q!==0&&(Z=L),T.bindFramebuffer(k.FRAMEBUFFER,Z)&&T.drawBuffers(I,Z),T.viewport(V),T.scissor(ot),T.setScissorTest(rt),$){let vt=Y.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,Q)}else if(Mt){let vt=z;for(let Dt=0;Dt<I.textures.length;Dt++){let kt=Y.get(I.textures[Dt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Dt,kt.__webglTexture,Q,vt)}}else if(I!==null&&Q!==0){let vt=Y.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vt.__webglTexture,Q)}O=-1};function ed(I){let z=Y.get(I);return(z.__readFormat!==I.format||z.__readType!==I.type)&&(z.__readFormat=I.format,z.__readType=I.type,z.__formatReadable=N.textureFormatReadable(I.format),z.__typeReadable=N.textureTypeReadable(I.type)),z}this.readRenderTargetPixels=function(I,z,Q,Z,$,Mt,Pt,vt=0){if(!(I&&I.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Y.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){T.bindFramebuffer(k.FRAMEBUFFER,Dt);try{let kt=I.textures[vt],de=kt.format,ge=kt.type;I.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+vt);let Nt=ed(kt);if(Nt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=I.width-Z&&Q>=0&&Q<=I.height-$&&k.readPixels(z,Q,Z,$,gt.convert(de),gt.convert(ge),Mt)}finally{let kt=X!==null?Y.get(X).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(I,z,Q,Z,$,Mt,Pt,vt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Y.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(z>=0&&z<=I.width-Z&&Q>=0&&Q<=I.height-$){T.bindFramebuffer(k.FRAMEBUFFER,Dt);let kt=I.textures[vt],de=kt.format,ge=kt.type;I.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+vt);let Nt=ed(kt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Pe),k.bufferData(k.PIXEL_PACK_BUFFER,Mt.byteLength,k.STREAM_READ),k.readPixels(z,Q,Z,$,gt.convert(de),gt.convert(ge),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let rn=X!==null?Y.get(X).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,rn);let Ge=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _f(k,Ge,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Pe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Mt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Pe),k.deleteSync(Ge),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,z=null,Q=0){let Z=Math.pow(2,-Q),$=Math.floor(I.image.width*Z),Mt=Math.floor(I.image.height*Z),Pt=z!==null?z.x:0,vt=z!==null?z.y:0;j.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Pt,vt,$,Mt),T.unbindTexture()},this.copyTextureToTexture=function(I,z,Q=null,Z=null,$=0,Mt=0){let Pt,vt,Dt,kt,de,ge,Nt,Pe,rn,Ge=I.isCompressedTexture?I.mipmaps[Mt]:I.image;if(Q!==null)Pt=Q.max.x-Q.min.x,vt=Q.max.y-Q.min.y,Dt=Q.isBox3?Q.max.z-Q.min.z:1,kt=Q.min.x,de=Q.min.y,ge=Q.isBox3?Q.min.z:0;else{let en=Math.pow(2,-$);Pt=Math.floor(Ge.width*en),vt=Math.floor(Ge.height*en),I.isDataArrayTexture?Dt=Ge.depth:I.isData3DTexture?Dt=Math.floor(Ge.depth*en):Dt=1,kt=0,de=0,ge=0}Z!==null?(Nt=Z.x,Pe=Z.y,rn=Z.z):(Nt=0,Pe=0,rn=0);let Oe=gt.convert(z.format),Sn=gt.convert(z.type),Rt;z.isData3DTexture?(j.setTexture3D(z,0),Rt=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Rt=k.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Rt=k.TEXTURE_2D),T.activeTexture(k.TEXTURE0),T.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let Pn=T.getParameter(k.UNPACK_ROW_LENGTH),Ee=T.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=T.getParameter(k.UNPACK_SKIP_PIXELS),mi=T.getParameter(k.UNPACK_SKIP_ROWS),Vi=T.getParameter(k.UNPACK_SKIP_IMAGES);T.pixelStorei(k.UNPACK_ROW_LENGTH,Ge.width),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ge.height),T.pixelStorei(k.UNPACK_SKIP_PIXELS,kt),T.pixelStorei(k.UNPACK_SKIP_ROWS,de),T.pixelStorei(k.UNPACK_SKIP_IMAGES,ge);let zs=I.isDataArrayTexture||I.isData3DTexture,Fe=z.isDataArrayTexture||z.isData3DTexture;if(I.isDepthTexture){let en=Y.get(I),Wi=Y.get(z),ze=Y.get(en.__renderTarget),Xi=Y.get(Wi.__renderTarget);T.bindFramebuffer(k.READ_FRAMEBUFFER,ze.__webglFramebuffer),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Hs=0;Hs<Dt;Hs++)zs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(I).__webglTexture,$,ge+Hs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,Mt,rn+Hs)),k.blitFramebuffer(kt,de,Pt,vt,Nt,Pe,Pt,vt,k.DEPTH_BUFFER_BIT,k.NEAREST);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||I.isRenderTargetTexture||Y.has(I)){let en=Y.get(I),Wi=Y.get(z);T.bindFramebuffer(k.READ_FRAMEBUFFER,P),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let ze=0;ze<Dt;ze++)zs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,$,ge+ze):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,$),Fe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wi.__webglTexture,Mt,rn+ze):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wi.__webglTexture,Mt),$!==0?k.blitFramebuffer(kt,de,Pt,vt,Nt,Pe,Pt,vt,k.COLOR_BUFFER_BIT,k.NEAREST):Fe?k.copyTexSubImage3D(Rt,Mt,Nt,Pe,rn+ze,kt,de,Pt,vt):k.copyTexSubImage2D(Rt,Mt,Nt,Pe,kt,de,Pt,vt);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Fe?I.isDataTexture||I.isData3DTexture?k.texSubImage3D(Rt,Mt,Nt,Pe,rn,Pt,vt,Dt,Oe,Sn,Ge.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Rt,Mt,Nt,Pe,rn,Pt,vt,Dt,Oe,Ge.data):k.texSubImage3D(Rt,Mt,Nt,Pe,rn,Pt,vt,Dt,Oe,Sn,Ge):I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Mt,Nt,Pe,Pt,vt,Oe,Sn,Ge.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Mt,Nt,Pe,Ge.width,Ge.height,Oe,Ge.data):k.texSubImage2D(k.TEXTURE_2D,Mt,Nt,Pe,Pt,vt,Oe,Sn,Ge);T.pixelStorei(k.UNPACK_ROW_LENGTH,Pn),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ee),T.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),T.pixelStorei(k.UNPACK_SKIP_ROWS,mi),T.pixelStorei(k.UNPACK_SKIP_IMAGES,Vi),Mt===0&&z.generateMipmaps&&k.generateMipmap(Rt),T.unbindTexture()},this.initRenderTarget=function(I){Y.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){U=0,B=0,X=null,T.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var Pr=class s extends q{constructor(){let t=s.SkyShader,e=new Ye({name:t.name,uniforms:wr.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:nn,depthWrite:!1});super(new Gt(1,1,1),e),this.isSky=!0}};Pr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Et=Math.PI/180,wu=180/Math.PI,J=(s,t,e)=>s<t?t:s>e?e:s,hi=(s,t,e)=>s+(t-s)*e,qv=(s,t,e)=>J((e-s)/(t-s),0,1),hn=(s,t,e)=>{let n=qv(s,t,e);return n*n*(3-2*n)};var Ne=(s,t,e,n)=>{let i=t-s,r=e*n;return Math.abs(i)<=r?t:s+Math.sign(i)*r},Ds=(s,t,e,n)=>hi(s,t,1-Math.exp(-e*n));function Rn(s=1){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ls(s=1){let t=Rn(s),e=new Uint8Array(512),n=new Uint8Array(256);for(let a=0;a<256;a++)n[a]=a;for(let a=255;a>0;a--){let l=Math.floor(t()*(a+1)),c=n[a];n[a]=n[l],n[l]=c}for(let a=0;a<512;a++)e[a]=n[a&255];let i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return function(l,c){let h=(l+c)*r,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*o,p=l-(u-f),v=c-(d-f),m=p>v?1:0,g=p>v?0:1,S=p-m+o,_=v-g+o,x=p-1+2*o,M=v-1+2*o,b=u&255,w=d&255,y=0,E=0,A=0,R=.5-p*p-v*v;if(R>0){let P=i[e[b+e[w]]&7];R*=R,y=R*R*(P[0]*p+P[1]*v)}let C=.5-S*S-_*_;if(C>0){let P=i[e[b+m+e[w+g]]&7];C*=C,E=C*C*(P[0]*S+P[1]*_)}let L=.5-x*x-M*M;if(L>0){let P=i[e[b+1+e[w+1]]&7];L*=L,A=L*L*(P[0]*x+P[1]*M)}return 70*(y+E+A)}}function $o(s,t,e,n=5,i=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*s(t*a,e*a),c+=o,o*=r,a*=i;return l/c}function np(s,t,e,n=5,i=2,r=.5){let o=1,a=1,l=0,c=0,h=1;for(let u=0;u<n;u++){let d=1-Math.abs(s(t*a,e*a));d*=d,d*=h,h=J(d*2,0,1),l+=o*d,c+=o,o*=r,a*=i}return l/c}function un(s){let t=s.length,e=s.map(o=>o[0]),n=s.map(o=>o[1]),i=new Array(t-1),r=new Array(t);for(let o=0;o<t-1;o++)i[o]=(n[o+1]-n[o])/(e[o+1]-e[o]);r[0]=i[0],r[t-1]=i[t-2];for(let o=1;o<t-1;o++)i[o-1]*i[o]<=0?r[o]=0:r[o]=(i[o-1]+i[o])/2;for(let o=0;o<t-1;o++){if(i[o]===0){r[o]=0,r[o+1]=0;continue}let a=r[o]/i[o],l=r[o+1]/i[o],c=a*a+l*l;if(c>9){let h=3/Math.sqrt(c);r[o]=h*a*i[o],r[o+1]=h*l*i[o]}}return function(o){if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0,l=t-1;for(;l-a>1;){let f=a+l>>1;e[f]>o?l=f:a=f}let c=e[l]-e[a],h=(o-e[a])/c,u=h*h,d=u*h;return(2*d-3*u+1)*n[a]+(d-2*u+h)*c*r[a]+(-2*d+3*u)*n[l]+(d-u)*c*r[l]}}var _c=class{constructor(t,e,{quality:n="medium"}={}){this.scene=t,this.renderer=e,this.quality=n,this.sunElevation=41*Et,this.sunAzimuth=228*Et,this.sunDir=new D,this._computeSunDir();let i=new Pr;i.scale.setScalar(8e4);let r=i.material.uniforms;r.turbidity.value=4.2,r.rayleigh.value=1.25,r.mieCoefficient.value=.0045,r.mieDirectionalG.value=.82,r.sunPosition.value.copy(this.sunDir).multiplyScalar(1e3),i.frustumCulled=!1,i.renderOrder=-10,t.add(i),this.sky=i,this.fogColor=new bt(.62,.7,.78),this.skyColor=new bt(.35,.5,.7),this.fogDensity=46e-6,t.fog=new so(this.fogColor.clone(),this.fogDensity);let o=new No(16773596,3.9);o.castShadow=!0;let a=n==="high"?4096:n==="low"?1024:2048;o.shadow.mapSize.set(a,a);let l=o.shadow.camera;l.left=-22,l.right=22,l.top=22,l.bottom=-22,l.near=1,l.far=3e3,o.shadow.bias=-12e-5,o.shadow.normalBias=.025,o.shadow.radius=2,t.add(o),t.add(o.target),this.sun=o;let c=new Po(12439778,6050368,.42);t.add(c),this.hemi=c,this._buildEnvMap(),this.wind={fromDeg:250,speed:4.6,gust:2.2,turb:1},this.noise=ls(4242),this.thermals=[],this._windBase=new D,this.updateWindBase()}_computeSunDir(){let t=this.sunElevation,e=this.sunAzimuth;this.sunDir.set(Math.cos(t)*Math.sin(e),Math.sin(t),-Math.cos(t)*Math.cos(e)).normalize()}_buildEnvMap(){let t=new Rr(this.renderer),e=new Ss,n=new Pr;n.scale.setScalar(1e3);let i=n.material.uniforms,r=this.sky.material.uniforms;for(let l of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])i[l].value=r[l].value;i.sunPosition.value.copy(this.sunDir),i.showSunDisc&&(i.showSunDisc.value=!1),e.add(n);let o=new q(new mn(500,32,16,0,Math.PI*2,Math.PI/2+.02,Math.PI/2),new Qe({color:3881516,side:nn}));e.add(o);let a=t.fromScene(e,0,.1,2e3);this.envMap=a.texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.55,t.dispose()}updateWindBase(){let t=this.wind.fromDeg*Et;this._windBase.set(-Math.sin(t),0,Math.cos(t)).multiplyScalar(this.wind.speed)}windAt(t,e,n,i,r,o=0){let a=Math.max(0,e-o),l=J(Math.log(1+a/.3)/Math.log(1+100/.3),.25,1.35);r.copy(this._windBase).multiplyScalar(l);let c=this.noise,h=this.wind.gust*(.5+.5*c(i*.07,3.1)),u=this.wind.turb;r.x+=h*c(t/180+i*.35,n/180)*.8+u*c(t/31+i*.9,n/29+e/40)*.6,r.z+=h*c(n/170-i*.31,t/190+9)*.8+u*c(n/33-i*.85,t/27+5)*.6,r.y+=u*.5*c(t/45+7,n/45+i*.6)*J(a/60,.1,1);for(let d of this.thermals){let f=t-d.x,p=n-d.z,v=f*f+p*p,m=d.r*d.r;if(v<m*4&&e<d.top){let g=Math.exp(-v/m);r.y+=d.w*g,r.x+=d.w*.3*g*c(i*2.3+t/20,n/20),r.z+=d.w*.3*g*c(n/20,i*2.1+t/20)}}return r}update(t,e,n){let i=this.sun;i.target.position.copy(e),i.position.copy(e).addScaledVector(this.sunDir,400),i.target.updateMatrixWorld(),this.sky.position.copy(n)}setFogDensity(t){this.fogDensity=t,this.scene.fog.density=t}};function ui(s,t,e=5,n=1,i=.5){let r=new Float32Array(s*s),o=Rn(n),a=1,l=0;for(let c=0;c<e;c++){let h=t<<c,u=new Float32Array(h*h);for(let d=0;d<u.length;d++)u[d]=o();for(let d=0;d<s;d++){let f=d/s*h,p=Math.floor(f),v=f-p,m=v*v*(3-2*v),g=p%h*h,S=(p+1)%h*h;for(let _=0;_<s;_++){let x=_/s*h,M=Math.floor(x),b=x-M,w=b*b*(3-2*b),y=M%h,E=(M+1)%h,A=(u[g+y]*(1-w)+u[g+E]*w)*(1-m)+(u[S+y]*(1-w)+u[S+E]*w)*m;r[d*s+_]+=A*a}}l+=a,a*=i}for(let c=0;c<r.length;c++)r[c]/=l;return r}function ip(s,t,e=2){let n=Rn(e),i=[];for(let c=0;c<t;c++)i.push([n()*s,n()*s,.7+n()*.6]);let r=new Float32Array(s*s),o=Math.ceil(Math.sqrt(t)),a=s/o,l=Array.from({length:o*o},()=>[]);i.forEach((c,h)=>l[Math.floor(c[1]/a)%o*o+Math.floor(c[0]/a)%o].push(h));for(let c=0;c<s;c++)for(let h=0;h<s;h++){let u=Math.floor(h/a),d=Math.floor(c/a),f=1e9,p=1e9;for(let v=-1;v<=1;v++)for(let m=-1;m<=1;m++){let g=(u+m+o)%o,S=(d+v+o)%o;for(let _ of l[S*o+g]){let x=i[_],M=Math.abs(h-x[0]),b=Math.abs(c-x[1]);M>s/2&&(M=s-M),b>s/2&&(b=s-b);let w=Math.sqrt(M*M+b*b)/x[2];w<f?(p=f,f=w):w<p&&(p=w)}}r[c*s+h]=Math.min(1,f/a)}return r}function Ei(s,t,{repeat:e=!0,srgb:n=!1}={}){let i=new Uint8Array(s*s*4);for(let o=0;o<s*s;o++)for(let a=0;a<4;a++){let l=t[a],c=l===void 0?1:typeof l=="number"?l:l[o];i[o*4+a]=Math.max(0,Math.min(255,Math.round(c*255)))}let r=new Bi(i,s,s,Tn);return r.wrapS=r.wrapT=e?Ms:Qn,r.magFilter=Ke,r.minFilter=Si,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=De),r.needsUpdate=!0,r}function Eu(s,t,e=2){let n=new Float32Array(t*t),i=new Float32Array(t*t),r=new Float32Array(t*t);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=s[o*t+(a-1+t)%t],c=s[o*t+(a+1)%t],h=s[(o-1+t)%t*t+a],u=s[(o+1)%t*t+a],d=(l-c)*e,f=(h-u)*e,p=1,v=1/Math.sqrt(d*d+f*f+p*p),m=o*t+a;n[m]=d*v*.5+.5,i[m]=f*v*.5+.5,r[m]=p*v*.5+.5}return Ei(t,[n,i,r,1])}function sp(s=512,t=7){let e=Rn(t),n=new Float32Array(s*s),i=[];for(let o=0;o<28;o++){let a=Math.round((e()*2-1)*(3+o*.9)),l=Math.round((e()*2-1)*(3+o*.9));if(a===0&&l===0)continue;let c=Math.hypot(a,l);i.push([a,l,1/Math.pow(c,1.15),e()*Math.PI*2])}let r=ui(s,16,4,t+3,.55);for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=0,c=a/s*Math.PI*2,h=o/s*Math.PI*2;for(let u of i){let d=u[0]*c+u[1]*h+u[3];l+=u[2]*(Math.sin(d)+.25*Math.sin(2*d+1))}n[o*s+a]=l*.22+(r[o*s+a]-.5)*.35}return Eu(n,s,9)}function Ir(s,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let i=new an(s);return t&&(i.colorSpace=De),i.anisotropy=n,e&&(i.wrapS=i.wrapT=Ms),i.needsUpdate=!0,i}function cs(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function hs(s=128,{power:t=2.2,noise:e=0,seed:n=5}={}){let i=e>0?ui(s,6,4,n):null,r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let l=0;l<s;l++){let c=(l+.5)/s*2-1,h=(a+.5)/s*2-1,u=Math.sqrt(c*c+h*h);i&&(u+=(i[a*s+l]-.5)*e);let d=Math.max(0,1-u);r[a*s+l]=Math.pow(d,t)*(u<1?1:0)}return Ei(s,[1,1,1,r],{repeat:!1})}function rp(s=256,t=17){let e=Rn(t),n=document.createElement("canvas");n.width=n.height=s;let i=n.getContext("2d");i.clearRect(0,0,s,s);let r=s/2,o=s/2,a=i.createRadialGradient(r,o,0,r,o,s/2);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(.55,"rgba(255,255,255,0.1)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,s,s);for(let h=0;h<1400;h++){let u=e()*Math.PI*2,d=Math.pow(e(),.85)*s*.46,f=r+Math.cos(u)*d,p=o+Math.sin(u)*d,v=.6+Math.pow(e(),3)*s*.05,m=Math.min(1,(1-d/(s*.5))*(.5+e()*.8));i.fillStyle=`rgba(255,255,255,${m.toFixed(3)})`,i.beginPath(),i.arc(f,p,v,0,Math.PI*2),i.fill()}let l=i.getImageData(0,0,s,s).data,c=new Float32Array(s*s);for(let h=0;h<s*s;h++)c[h]=l[h*4+3]/255;return Ei(s,[1,1,1,c],{repeat:!1})}var Ru=.35,Lr=Math.cos(Ru),Dr=Math.sin(Ru),Re={x:Lr,z:Dr},Me={x:-Dr,z:Lr},Wt={half:12e3,lake:{cx:0,cz:0,a:3400,b:900},runway:{len:1800,wid:30,elev:9,cx:0,cz:0,angle:Ru},apron:{len:260,wid:110},ramp:{wid:24},island:{u:1500,v:170,r:160},fireZones:[]};Wt.runway.cx=-Me.x*1750+Re.x*250;Wt.runway.cz=-Me.z*1750+Re.z*250;Wt.apron.cx=Wt.runway.cx+Me.x*115;Wt.apron.cz=Wt.runway.cz+Me.z*115;Wt.ramp.x0=Wt.apron.cx+Me.x*55;Wt.ramp.z0=Wt.apron.cz+Me.z*55;Wt.ramp.x1=Wt.ramp.x0+Me.x*900;Wt.ramp.z1=Wt.ramp.z0+Me.z*900;Wt.fireZones=[{x:Me.x*2350-Re.x*900,z:Me.z*2350-Re.z*900,size:768,name:"Versante Sud \u2014 Pineta"},{x:Me.x*2700+Re.x*1800,z:Me.z*2700+Re.z*1800,size:768,name:"Collina di Monte Rosso"},{x:-Me.x*2900+Re.x*3300,z:-Me.z*2900+Re.z*3300,size:768,name:"Bosco del Nord-Est"},{x:Me.x*2200-Re.x*4300,z:Me.z*2200-Re.z*4300,size:768,name:"Valle Ovest"}];function Yv(s,t){let e=s-Wt.lake.cx,n=t-Wt.lake.cz;return{u:e*Lr+n*Dr,v:-e*Dr+n*Lr}}function Cu(s,t){return{x:Wt.lake.cx+s*Lr-t*Dr,z:Wt.lake.cz+s*Dr+t*Lr}}function Tu(s,t,e,n,i,r){let o=i-e,a=r-n,l=J(((s-e)*o+(t-n)*a)/(o*o+a*a),0,1),c=s-(e+o*l),h=t-(n+a*l);return{d:Math.hypot(c,h),t:l}}var Au=class{constructor(t=1415){this.noise=ls(t),this.noise2=ls(t+11),this.noise3=ls(t+23)}lakeE(t,e){let{u:n,v:i}=Yv(t,e),r=Wt.lake,o=Math.sqrt((n/r.a)**2+(i/r.b)**2);o+=.07*this.noise(t/800,e/800)+.03*this.noise2(t/230,e/230);let a=Math.hypot((n+1600)/520,(i-820)/380);return o=Math.min(o,a*.98+.02),{e:o,u:n,v:i}}raw(t,e){let n=this.noise,i=this.noise2,r=this.noise3,{e:o,u:a,v:l}=this.lakeE(t,e),c=hn(700,2900,Math.abs(l)+.25*Math.max(0,Math.abs(a)-5500)),h=hn(1.05,3.6,o),u=np(n,t/3800+10,e/3800-7,5),d=(.18+.82*c)*Math.pow(h,1.25)*(300+520*u),f=38*$o(i,t/950,e/950,4)+14*$o(r,t/260,e/260,3)+4*r(t/60,e/60),p=hn(1,1.7,o),v=3.5+7*p+(f+22)*p*.75+d,m=-1.5-26*hn(.98,.45,o)+2.5*$o(r,t/400,e/400,3),g;if(o<.97)g=m;else if(o<1.06){let x=hn(.97,1.06,o);g=hi(m,v,x)}else g=v;let S=Wt.island,_=Math.hypot(a-S.u,l-S.v)/S.r;return _<1.6&&(g=Math.max(g,hi(14+6*n(t/80,e/80),-3,hn(.2,1.4,_)))),g}height(t,e){let n=this.raw(t,e),i=Wt.runway,r=t-i.cx,o=e-i.cz,a=r*Re.x+o*Re.z,l=r*Me.x+o*Me.z,c=1-hn(i.len/2+120,i.len/2+420,Math.abs(a)),h=1-hn(i.wid/2+70,i.wid/2+260,Math.abs(l-(l>0?Math.min(l,180):0))),u=c*h;u>0&&(n=hi(n,i.elev,u));let d=Wt.ramp,f=Tu(t,e,d.x0,d.z0,d.x1,d.z1),p=1-hn(d.wid/2+4,d.wid/2+60,f.d);if(p>0){let v=Math.hypot(d.x1-d.x0,d.z1-d.z0),m=f.t*v,g=this._rampShore||(this._rampShore=this._findRampShore()),S=m<g-110?i.elev:hi(i.elev,-3.2,J((m-(g-110))/170,0,1));n=hi(n,S,p)}return n}_findRampShore(){let t=Wt.ramp,e=Math.hypot(t.x1-t.x0,t.z1-t.z0);for(let n=0;n<e;n+=2){let i=t.x0+(t.x1-t.x0)*n/e,r=t.z0+(t.z1-t.z0)*n/e;if(this.raw(i,r)<.5)return n}return e*.7}forest(t,e,n,i){if(n<2.5)return 0;let r=Wt.runway,o=t-r.cx,a=e-r.cz,l=o*Re.x+a*Re.z,c=o*Me.x+a*Me.z;if(Math.abs(l)<r.len/2+450&&c>-260&&c<420)return 0;let h=Wt.ramp;if(Tu(t,e,h.x0,h.z0,h.x1,h.z1).d<70)return 0;let u=.55+.6*$o(this.noise2,t/1400+3,e/1400-5,4)+.25*this.noise3(t/300,e/300);return u*=hn(2.5,9,n),u*=1-hn(780,1050,n),u*=1-hn(.55,.8,i),J(u,0,1)}};function Zv(s,t,e){let n=new Float64Array(s);for(let i=0;i<s;i++){let r=i/(s-1)*2-1,o=Math.abs(r);n[i]=Math.sign(r)*t*(e*o+(1-e)*o*o*o)}return n}function vc(s,t){let e=0,n=s.length-1;if(t<=s[0])return 0;if(t>=s[n])return n-1;for(;n-e>1;){let i=e+n>>1;s[i]>t?n=i:e=i}return e}var Mc=class{constructor({quality:t="medium",seed:e=1415}={}){this.hf=new Au(e);let n=t==="low"?360:t==="high"?760:560;this.N=n,this.xs=Zv(n,Wt.half,.3),this.zs=this.xs,this.heights=new Float32Array(n*n);for(let i=0;i<n;i++)for(let r=0;r<n;r++)this.heights[i*n+r]=this.hf.height(this.xs[r],this.zs[i])}heightAt(t,e){let n=this.N,i=this.xs,r=this.zs,o=this.heights,a=vc(i,t),l=vc(r,e),c=J((t-i[a])/(i[a+1]-i[a]),0,1),h=J((e-r[l])/(r[l+1]-r[l]),0,1),u=o[l*n+a],d=o[(l+1)*n+a],f=o[(l+1)*n+a+1],p=o[l*n+a+1];return c+h<=1?u+(p-u)*c+(d-u)*h:f+(d-f)*(1-c)+(p-f)*(1-h)}normalAt(t,e,n=new D){let r=this.heightAt(t+4,e)-this.heightAt(t-4,e),o=this.heightAt(t,e+4)-this.heightAt(t,e-4);return n.set(-r,8,-o).normalize()}isRunway(t,e){let n=Wt.runway,i=t-n.cx,r=e-n.cz,o=i*Re.x+r*Re.z,a=i*Me.x+r*Me.z;if(Math.abs(o)<n.len/2&&Math.abs(a)<n.wid/2+3)return!0;let l=Wt.apron,c=t-l.cx,h=e-l.cz;if(Math.abs(c*Re.x+h*Re.z)<l.len/2&&Math.abs(c*Me.x+h*Me.z)<l.wid/2)return!0;let u=Wt.ramp;return Tu(t,e,u.x0,u.z0,u.x1,u.z1).d<u.wid/2||Math.abs(o)<15&&a>0&&a<70}surfaceFriction(t,e){return this.isRunway(t,e)?1:.55}buildMesh(t){let e=this.N,n=new Float32Array(e*e*3),i=new Float32Array(e*e);for(let u=0;u<e;u++)for(let d=0;d<e;d++){let f=u*e+d;n[f*3]=this.xs[d],n[f*3+1]=this.heights[f],n[f*3+2]=this.zs[u]}let r=new xe;r.setAttribute("position",new Te(n,3));let o=new Uint32Array((e-1)*(e-1)*6),a=0;for(let u=0;u<e-1;u++)for(let d=0;d<e-1;d++){let f=u*e+d,p=(u+1)*e+d,v=(u+1)*e+d+1,m=u*e+d+1;o[a++]=f,o[a++]=p,o[a++]=m,o[a++]=p,o[a++]=v,o[a++]=m}r.setIndex(new Te(o,1)),r.computeVertexNormals();let l=r.attributes.normal.array;for(let u=0;u<e*e;u++)i[u]=this.hf.forest(n[u*3],n[u*3+2],n[u*3+1],1-l[u*3+1]);this.forestGrid=i,r.setAttribute("aForest",new Te(i,1)),r.computeBoundingSphere();let c=Kv(t),h=new q(r,c);return h.receiveShadow=!0,h.name="terrain",this.mesh=h,this.material=c,h}forestAt(t,e){let n=this.N,i=vc(this.xs,t),r=vc(this.zs,e);return this.forestGrid?this.forestGrid[r*n+i]:0}},yc=null;function $v(){if(yc)return yc;let s=512,t=ui(s,8,6,31,.55),e=ui(s,32,3,37,.5),n=ip(s,900,41),i=new Float32Array(s*s);for(let a=0;a<i.length;a++)i[a]=Math.sqrt(Math.max(0,1-n[a]*1.05))*(.7+.6*e[a]);let r=Ei(s,[t,e,i,1]),o=Eu(i,s,5);return yc={noiseTex:r,crownNormal:o},yc}function Kv(s){let{noiseTex:t,crownNormal:e}=$v(),n=new be({color:16777215,roughness:.95,metalness:0}),i={tNoise:{value:t},tCrown:{value:e},tBurn:{value:s?s.texture:null},burnRects:{value:s?s.rects:[new ye,new ye,new ye,new ye]},uTime:{value:0}};return n.userData.uniforms=i,n.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n}function op(s){let t=new Qt;t.name="airfield";let e=Wt.runway,n=(Math.atan2(Re.x,-Re.z)*180/Math.PI+360)%360,i=Math.round(n/10)%36||36,r=(i+17)%36+1,o=16,a=e.wid*o,l=4096,c=cs(a,l),h=c.getContext("2d");h.fillStyle="#45433f",h.fillRect(0,0,a,l);let u=Rn(77);for(let V=0;V<26e3;V++){let ot=40+u()*30;h.fillStyle=`rgba(${ot},${ot},${ot+2},${.25+u()*.3})`,h.fillRect(u()*a,u()*l,1+u()*3,1+u()*3)}for(let V=0;V<2;V++)for(let ot=0;ot<260;ot++){let rt=V===0?300+u()*900:l-300-u()*900,yt=a/2+(u()-.5)*8*o;h.fillStyle=`rgba(15,15,15,${.08+u()*.12})`,h.fillRect(yt,rt,2+u()*4,60+u()*200)}let d=l/e.len;h.fillStyle="#e8e8e2",h.fillRect(.5*o,0,.9*o,l),h.fillRect(a-1.4*o,0,.9*o,l);for(let V=70;V<e.len-70;V+=50)V>110&&V<e.len-110&&h.fillRect(a/2-.45*o,V*d,.9*o,30*d);let f=(V,ot)=>{h.save(),V&&(h.translate(a,l),h.rotate(Math.PI));for(let rt=0;rt<12;rt++){let yt=2.5*o+rt*2.1*o+(rt>=6?3.2*o:0);h.fillRect(yt,6*d,1.5*o,30*d)}h.font=`bold ${Math.round(9*d)}px Arial`,h.textAlign="center",h.textBaseline="middle",h.save(),h.translate(a/2,62*d),h.rotate(Math.PI),h.scale(1.6,2.4),h.fillText(String(ot).padStart(2,"0"),0,0),h.restore();for(let rt of[150,300,450])h.fillRect(a/2-9*o,rt*d,1.8*o,22*d),h.fillRect(a/2+7.2*o,rt*d,1.8*o,22*d);h.fillRect(a/2-10*o,300*d,4*o,45*d),h.fillRect(a/2+6*o,300*d,4*o,45*d),h.restore()};f(!1,r),f(!0,i);let p=Ir(c,{srgb:!0,aniso:16}),v=new We(e.wid,e.len,1,64);v.rotateX(-Math.PI/2);let m=new be({map:p,roughness:.88,metalness:0}),g=new q(v,m);g.receiveShadow=!0,g.position.set(e.cx,e.elev+.07,e.cz),g.rotation.y=Math.atan2(-Re.x,-Re.z),t.add(g);let S=cs(512,512),_=S.getContext("2d");_.fillStyle="#8d8c86",_.fillRect(0,0,512,512);for(let V=0;V<9e3;V++){let ot=120+u()*40;_.fillStyle=`rgba(${ot},${ot},${ot-4},0.35)`,_.fillRect(u()*512,u()*512,2,2)}_.strokeStyle="rgba(60,60,58,0.7)",_.lineWidth=2;for(let V=0;V<=512;V+=64)_.beginPath(),_.moveTo(V,0),_.lineTo(V,512),_.stroke(),_.beginPath(),_.moveTo(0,V),_.lineTo(512,V),_.stroke();let x=Ir(S,{srgb:!0,repeat:!0});x.repeat.set(Wt.apron.len/40,Wt.apron.wid/40);let M=new be({map:x,roughness:.92}),b=Wt.apron,w=new We(b.len,b.wid);w.rotateX(-Math.PI/2);let y=new q(w,M);y.position.set(b.cx,e.elev+.06,b.cz),y.rotation.y=g.rotation.y+Math.PI/2,y.receiveShadow=!0,t.add(y);let E=new We(22,72);E.rotateX(-Math.PI/2);let A=new q(E,M.clone());A.material.map=x.clone(),A.material.map.repeat.set(.6,2),A.position.set(e.cx+Me.x*52,e.elev+.055,e.cz+Me.z*52),A.rotation.y=g.rotation.y+Math.PI/2,A.receiveShadow=!0,t.add(A);let R=Wt.ramp,C=Math.hypot(R.x1-R.x0,R.z1-R.z0),L=90,P=new We(R.wid,C,1,L);P.rotateX(-Math.PI/2);let F=P.attributes.position,U=Math.atan2(Me.x,Me.z),B=Math.cos(U),X=Math.sin(U);for(let V=0;V<F.count;V++){let ot=F.getX(V),yt=.5-F.getZ(V)/C,Lt=R.x0+(R.x1-R.x0)*yt+ot*Me.z,Xt=R.z0+(R.z1-R.z0)*yt-ot*Me.x;F.setXYZ(V,Lt,s.heightAt(Lt,Xt)+.08,Xt)}P.computeVertexNormals();let O=M.clone();O.map=x.clone(),O.map.repeat.set(1,C/30);let H=new q(P,O);return H.receiveShadow=!0,t.add(H),Jv(t,s,g.rotation.y),t}function Jv(s,t,e){let n=Wt.runway,i=(M,b,w)=>{let y=n.cx+Re.x*b+Me.x*w,E=n.cz+Re.z*b+Me.z*w;return M.position.set(y,n.elev,E),M.rotation.y=e,s.add(M),M},r=new be({color:14209732,roughness:.85}),o=new be({color:8007458,roughness:.7}),a=new be({color:11186357,roughness:.45,metalness:.6}),l=new be({color:2764080,roughness:.6}),c=new be({color:11541782,roughness:.5}),h=new be({color:2240576,roughness:.1,metalness:.8});for(let M=0;M<2;M++){let b=new Qt,w=new re(18,18,40,28,1,!0,-Math.PI/2,Math.PI);w.rotateZ(Math.PI/2),w.scale(1,.62,1);let y=new q(w,a);y.rotation.y=Math.PI/2,y.castShadow=!0,y.receiveShadow=!0,b.add(y);let E=new q(new Mn(18,28,0,Math.PI),r);E.scale.y=.62,E.position.z=20,E.rotation.y=Math.PI,b.add(E);let A=new q(new We(30,10),l);A.position.set(0,5,-20),A.rotation.y=Math.PI,b.add(A),i(b,-125+M*46,205).rotation.y=e+Math.PI/2}let u=new Qt,d=new q(new Gt(6,14,6),r);d.position.y=7,d.castShadow=!0,u.add(d);let f=new q(new re(4.6,4,3.4,8),h);f.position.y=15.7,u.add(f);let p=new q(new re(5.2,5.2,.6,8),l);p.position.y=17.7,u.add(p),i(u,55,200);let v=new Qt,m=new q(new Gt(36,7,16),r);m.position.y=3.5,m.castShadow=!0,v.add(m);let g=new q(new Gt(37,.6,17),o);g.position.y=7.3,v.add(g);for(let M=0;M<4;M++){let b=new q(new We(6,5),c);b.position.set(-12+M*8,2.6,-8.05),b.rotation.y=Math.PI,v.add(b)}i(v,120,190);for(let M=0;M<2;M++){let b=new q(new re(4,4,7,20),new be({color:14737628,roughness:.5}));b.position.y=3.5,b.castShadow=!0;let w=new Qt;w.add(b),i(w,170+M*11,215)}let S=new Qt,_=new q(new re(.08,.1,6,6),a);_.position.y=3,S.add(_);let x=new q(new bs(.45,3.2,12,1,!0),new be({color:16734746,roughness:.8,side:sn}));x.rotation.z=Math.PI/2,x.position.set(1.7,5.8,0),S.add(x),S.userData.sock=x,i(S,-n.len/2+250,-45),s.userData.windsock=S}var Fn=400;function Ko(s,t){let e=s.attributes.position,n=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){let r=t(e.getX(i),e.getY(i),e.getZ(i),i);n[i*3]=r[0],n[i*3+1]=r[1],n[i*3+2]=r[2]}return s.setAttribute("color",new Te(n,3)),s}function Pu(s){let t=s.map(l=>l.index?l.toNonIndexed():l),e=0;t.forEach(l=>e+=l.attributes.position.count);let n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e*3),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),i.set(l.attributes.normal.array,o*3),r.set(l.attributes.color.array,o*3),o+=l.attributes.position.count;let a=new xe;return a.setAttribute("position",new Te(n,3)),a.setAttribute("normal",new Te(i,3)),a.setAttribute("color",new Te(r,3)),a.computeBoundingSphere(),a}function Sc(s,t,e){let n=Rn(e),i=s.attributes.position,r=new Map;for(let o=0;o<i.count;o++){let a=`${i.getX(o).toFixed(3)},${i.getY(o).toFixed(3)},${i.getZ(o).toFixed(3)}`,l=r.get(a);l||(l=[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t],r.set(a,l)),i.setXYZ(o,i.getX(o)+l[0],i.getY(o)+l[1],i.getZ(o)+l[2])}return s.computeVertexNormals(),s}var Qv=[.11,.07,.04];function Iu(s,t,e){let n=new re(e,t,s,5,1,!0);return n.translate(0,s/2,0),Ko(n,()=>Qv)}function bc(s,t=.25){return(e,n,i,r)=>{let o=.75+t*Math.sin(r*12.9898)*.5+.25*J(n/10,0,1);return[s[0]*o,s[1]*o,s[2]*o]}}function jv(){let s=Iu(7.2,.32,.2),t=new mn(1,8,5);t.scale(4.4,1.55,4),t.translate(.3,8,0),Sc(t,.9,3),Ko(t,bc([.035,.065,.02]));let e=new mn(1,7,4);return e.scale(2.6,1.1,2.4),e.translate(-1.9,7.3,1.1),Sc(e,.6,4),Ko(e,bc([.03,.06,.018])),Pu([s,t,e])}function ty(){let t=[Iu(3,.25,.18)];return[[2.5,4.6,2.2],[2,4,5],[1.35,3.4,7.6],[.7,2.6,9.8]].forEach(([n,i,r],o)=>{let a=new bs(n,i,7,1,!0);a.translate(0,r,0),Sc(a,.35,10+o),Ko(a,bc([.022,.05,.022],.35)),t.push(a)}),Pu(t)}function ey(){let t=[Iu(3.6,.3,.22)];return[[0,5.2,0,2.9],[1.6,4.6,.9,2.1],[-1.4,4.4,-.8,2.2],[.3,6.4,-.6,1.9]].forEach(([n,i,r,o],a)=>{let l=new Eo(o,1);l.translate(n,i,r),Sc(l,.7,20+a),Ko(l,bc([.04,.06,.02],.35)),t.push(l)}),Pu(t)}var wc=class{constructor(t,e,{quality:n="medium"}={}){this.terrain=t,this.radius=n==="low"?800:n==="high"?2200:1500,this.maxPerType=n==="low"?9e3:n==="high"?45e3:26e3,this.chunks=new Map,this.noise=ls(99),this.time={value:0},this.burnFn=null;let i=[jv(),ty(),ey()];this.meshes=i.map((r,o)=>{let a=new Ro({vertexColors:!0});a.onBeforeCompile=c=>{c.uniforms.uTime=this.time,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
            #ifdef USE_INSTANCING
              vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
              float sway = sin(uTime * 1.3 + ip.x * 0.05 + ip.z * 0.04) * 0.5 + sin(uTime * 2.7 + ip.x * 0.11) * 0.25;
              float hh = max(position.y - 2.5, 0.0) / 9.0;
              transformed.x += sway * hh * hh * 0.35;
              transformed.z += sway * hh * hh * 0.2;
            #endif`)};let l=new ho(r,a,this.maxPerType);return l.count=0,l.frustumCulled=!1,l.instanceMatrix.setUsage(ti),l.setColorAt(0,new bt(1,1,1)),l.instanceColor.setUsage(ti),l.name="trees"+o,e.add(l),l}),this.lastCenter=new D(1e9,0,1e9),this.visible=[[],[],[]],this._m=new Se,this._q=new qe,this._s=new D,this._p=new D,this._c=new bt,this._pending=[]}_genChunk(t,e){let n=t+","+e,i=this.chunks.get(n);if(i)return i;let r=Rn(t*73856093^e*19349663),o=[],a=9.5,l=t*Fn,c=e*Fn,h=this.terrain;for(let u=0;u<Fn;u+=a)for(let d=0;d<Fn;d+=a){let f=l+d+(r()-.5)*a*.9,p=c+u+(r()-.5)*a*.9,v=h.forestAt(f,p);if(v<=.02)continue;let m=J(v*1.25+.25*this.noise(f/60,p/60),0,1);if(r()>m)continue;let g=h.heightAt(f,p);if(g<2.5)continue;let S=this.noise(f/700+5,p/700),_=0,x=r();g>350||S>.35?_=x<.7?1:2:S<-.25?_=x<.75?2:0:_=x<.6?0:x<.8?2:1;let M=.7+r()*.65;o.push({x:f,y:g-.2,z:p,type:_,s:M,rot:r()*Math.PI*2,tint:.8+r()*.45,hue:r(),rank:r()})}return i={list:o},this.chunks.set(n,i),i}update(t,e,n=!1){this.time.value+=e;let i=t.x-this.lastCenter.x,r=t.z-this.lastCenter.z,o=J(1+(t.y-300)/1500,1,2.2);if(!n&&i*i+r*r<19600&&Math.abs(o-(this._altF||1))<.2)return;this._altF=o,this.lastCenter.copy(t);let a=this.radius*o,l=Math.floor((t.x-a)/Fn),c=Math.floor((t.x+a)/Fn),h=Math.floor((t.z-a)/Fn),u=Math.floor((t.z+a)/Fn),d=[0,0,0],f=[[],[],[]],p=Wt.half-200;for(let v=h;v<=u;v++)for(let m=l;m<=c;m++){if(Math.abs(m*Fn)>p||Math.abs(v*Fn)>p)continue;let g=(m+.5)*Fn-t.x,S=(v+.5)*Fn-t.z;if(g*g+S*S>(a+Fn)*(a+Fn))continue;let _=this._genChunk(m,v);for(let x of _.list){let M=Math.hypot(x.x-t.x,x.z-t.z);if(M>a)continue;let b=M<a*.3?1:1-(M-a*.3)/(a*.7)*.8;x.rank>b||f[x.type].push(x)}}for(let v=0;v<3;v++){let m=f[v];m.length>this.maxPerType&&(m.sort((S,_)=>(S.x-t.x)**2+(S.z-t.z)**2-((_.x-t.x)**2+(_.z-t.z)**2)),m=m.slice(0,this.maxPerType)),this.visible[v]=m;let g=this.meshes[v];for(let S=0;S<m.length;S++){let _=m[S];this._q.setFromAxisAngle(Je.DEFAULT_UP,_.rot),this._s.set(_.s,_.s*(.9+_.hue*.25),_.s),this._p.set(_.x,_.y,_.z),this._m.compose(this._p,this._q,this._s),g.setMatrixAt(S,this._m)}g.count=m.length,g.instanceMatrix.needsUpdate=!0,d[v]=m.length}this.refreshColors(),this.counts=d}refreshColors(){for(let t=0;t<3;t++){let e=this.visible[t],n=this.meshes[t];for(let i=0;i<e.length;i++){let r=e[i],o=this.burnFn?this.burnFn(r.x,r.z):0,a=r.tint*(1-o*.93);this._c.setRGB(a*(.9+.2*r.hue),a,a*(.85+.2*(1-r.hue))),n.setColorAt(i,this._c)}n.instanceColor&&(n.instanceColor.needsUpdate=!0)}}};var Jo=class s extends q{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,i=e.color!==void 0?new bt(e.color):new bt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||s.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new zn,u=new D,d=new D,f=new D,p=new Se,v=new D(0,0,-1),m=new ye,g=new D,S=new D,_=new ye,x=new Se,M=new En(r,o,{samples:c,type:Vn}),b=new Ye({name:l.name!==void 0?l.name:"unspecified",uniforms:wr.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=M.texture,b.uniforms.color.value=i,b.uniforms.textureMatrix.value=x,this.material=b,this.onBeforeRender=function(w,y,E){let A=this.getReflectionCamera(E);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),p.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),g.subVectors(d,f),g.dot(u)>0===!0&&this.forceUpdate===!1)return;g.reflect(u).negate(),g.add(d),p.extractRotation(E.matrixWorld),v.set(0,0,-1),v.applyMatrix4(p),v.add(f),S.subVectors(d,v),S.reflect(u).negate(),S.add(d),A.position.copy(g),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(u),A.lookAt(S),A.far=E.far,A.updateMatrixWorld(),A.projectionMatrix.copy(E.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(A.projectionMatrix),x.multiply(A.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(A.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let C=A.projectionMatrix;A.isOrthographicCamera?(_.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],_.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],_.z=-E.far,_.w=1):(_.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],_.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],_.z=-1,_.w=(1+C.elements[10])/C.elements[14]),m.multiplyScalar(2/m.dot(_)),C.elements[2]=m.x,C.elements[6]=m.y,A.isOrthographicCamera?(C.elements[10]=m.z-a,C.elements[14]=m.w-1):(C.elements[10]=m.z+1-a,C.elements[14]=m.w),n.visible=!1;let L=w.getRenderTarget(),P=w.xr.enabled,F=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(M),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(y,A),w.xr.enabled=P,w.shadowMap.autoUpdate=F,w.setRenderTarget(L);let U=E.viewport;U!==void 0&&w.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()},this.getReflectionCamera=function(w){let y=this._reflectionCameras.get(w);return y===void 0&&(y=w.clone(),this._reflectionCameras.set(w,y)),y}}};Jo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Lu=class{constructor(){this.amp=.09,this.waves=[{kx:.52,kz:.21,a:.45,w:2.2,p:0},{kx:.31,kz:-.44,a:.3,w:1.7,p:1.3},{kx:.95,kz:.6,a:.15,w:3,p:2.1},{kx:-.2,kz:.83,a:.1,w:2.8,p:.6}]}height(t,e,n){let i=0;for(let r of this.waves)i+=r.a*Math.sin(r.kx*t+r.kz*e-r.w*n+r.p);return i*this.amp}},Ec=class{constructor({terrain:t,sunDir:e,quality:n="medium",renderer:i}){this.waves=new Lu;let r=Wt.lake,o=2*(r.a+900),a=new We(o,o,1,1),l=n==="low"?.35:n==="high"?.75:.5,c=Math.round(window.innerWidth*l*Math.min(window.devicePixelRatio,1.5)),h=Math.round(window.innerHeight*l*Math.min(window.devicePixelRatio,1.5)),u=512,d=new Float32Array(u*u),f=r.cx-o/2,p=r.cz-o/2;for(let x=0;x<u;x++)for(let M=0;M<u;M++){let b=f+(M+.5)/u*o,w=p+(x+.5)/u*o,y=t.heightAt(b,w);d[x*u+M]=Math.max(0,Math.min(1,-y/25))}let v=Ei(u,[d,0,0,1],{repeat:!1});v.flipY=!1,v.needsUpdate=!0;let m=ui(256,16,4,91,.6),g=Ei(256,[m,m,m,1]);this.normalTex=sp(512,7);let S={name:"LakeWater",uniforms:{color:{value:new bt},tDiffuse:{value:null},textureMatrix:{value:null},tNormal:{value:this.normalTex},tDepth:{value:v},tFoam:{value:g},depthRect:{value:new ye(f,p,1/o,1/o)},uTime:{value:0},sunDir:{value:e.clone()},sunColor:{value:new bt(1,.93,.82).multiplyScalar(3.2)},skyColor:{value:new bt(.32,.45,.6)},deepColor:{value:new bt(.006,.03,.035)},shallowColor:{value:new bt(.06,.13,.11)},windDir:{value:new ct(.86,.5)},fogColor:{value:new bt(.6,.68,.75)},fogDensity:{value:5e-5},reflStrength:{value:1}},vertexShader:`
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
        }`},_=new Jo(a,{textureWidth:c,textureHeight:h,clipBias:.02,shader:S,multisample:n==="high"?4:0});_.rotation.x=-Math.PI/2,_.position.set(r.cx,0,r.cz),_.material.transparent=!0,_.material.depthWrite=!0,_.renderOrder=1,_.name="water",this.mesh=_,this.uniforms=_.material.uniforms}heightAt(t,e,n){return this.waves.height(t,e,n)}update(t,e,n){let i=this.uniforms;i.uTime.value=e,n&&(i.sunDir.value.copy(n.sunDir),i.fogColor.value.copy(n.fogColor),i.fogDensity.value=n.fogDensity,i.skyColor.value.copy(n.skyColor))}setSize(t,e,n){let i=n==="low"?.35:n==="high"?.75:.5,r=Math.min(window.devicePixelRatio,1.5);this.mesh.getRenderTarget().setSize(Math.round(t*i*r),Math.round(e*i*r))}};var ny=(()=>{let s=new Fo;return s.setAttribute("position",new Zt([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),s.setAttribute("uv",new Zt([0,0,1,0,1,1,0,1],2)),s.setIndex([0,1,2,0,2,3]),s})(),Ti=class{constructor({max:t=2e3,texture:e,blending:n="normal",lit:i=0,sort:r=!1,stretch:o=0,renderOrder:a=5,name:l="particles",depthTest:c=!0,fog:h=!0,emissive:u=0,growth:d=.5,nearFade:f=0}){this.growth=d,this.max=t,this.n=0,this.sort=r;let p=(g=1)=>new Float32Array(t*g);this.p=p(3),this.v=p(3),this.age=p(),this.life=p(),this.s0=p(),this.s1=p(),this.a0=p(),this.col=p(3),this.rot=p(),this.rotV=p(),this.drag=p(),this.grav=p(),this.fadeIn=p(),this.user=p(),this.user2=p();let v=ny.clone();this.aPos=new ki(new Float32Array(t*3),3).setUsage(ti),this.aCol=new ki(new Float32Array(t*4),4).setUsage(ti),this.aExt=new ki(new Float32Array(t*4),4).setUsage(ti),v.setAttribute("iPos",this.aPos),v.setAttribute("iCol",this.aCol),v.setAttribute("iExt",this.aExt),v.instanceCount=0,this.geometry=v,this.uniforms={map:{value:e},sunDirView:{value:new D(0,1,0)},sunColor:{value:new bt(1,.96,.9)},ambColor:{value:new bt(.55,.62,.72)},lit:{value:i},stretch:{value:o},emissive:{value:u},fogColor:{value:new bt},fogDensity:{value:0},nearFade:{value:f}};let m=new Ye({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:sn,depthTest:c,blending:n==="additive"?Rs:ss,vertexShader:`
        attribute vec3 iPos;
        attribute vec4 iCol;
        attribute vec4 iExt;
        uniform float stretch;
        uniform float nearFade;
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
          if (nearFade > 0.0) vCol.a *= smoothstep(iExt.x * nearFade * 0.25, iExt.x * nearFade, -mv.z);
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
        }`});this.material=m,this.mesh=new q(v,m),this.mesh.frustumCulled=!1,this.mesh.renderOrder=a,this.mesh.name=l,this._order=new Uint32Array(t),this._depth=new Float32Array(t),this._v=new D}spawn(t,e,n,i,r,o,{life:a=2,size0:l=1,size1:c=2,alpha:h=1,r:u=1,g:d=1,b:f=1,rot:p=Math.random()*6.28,rotV:v=0,drag:m=.5,grav:g=0,fadeIn:S=.1,user:_=0,user2:x=0}={}){if(this.n>=this.max)return-1;let M=this.n++;return this.p[M*3]=t,this.p[M*3+1]=e,this.p[M*3+2]=n,this.v[M*3]=i,this.v[M*3+1]=r,this.v[M*3+2]=o,this.age[M]=0,this.life[M]=a,this.s0[M]=l,this.s1[M]=c,this.a0[M]=h,this.col[M*3]=u,this.col[M*3+1]=d,this.col[M*3+2]=f,this.rot[M]=p,this.rotV[M]=v,this.drag[M]=m,this.grav[M]=g,this.fadeIn[M]=S,this.user[M]=_,this.user2[M]=x,M}kill(t){let e=--this.n;if(t===e)return;let n=i=>{i[t*3]=i[e*3],i[t*3+1]=i[e*3+1],i[t*3+2]=i[e*3+2]};n(this.p),n(this.v),n(this.col),this.age[t]=this.age[e],this.life[t]=this.life[e],this.s0[t]=this.s0[e],this.s1[t]=this.s1[e],this.a0[t]=this.a0[e],this.rot[t]=this.rot[e],this.rotV[t]=this.rotV[e],this.drag[t]=this.drag[e],this.grav[t]=this.grav[e],this.fadeIn[t]=this.fadeIn[e],this.user[t]=this.user[e],this.user2[t]=this.user2[e]}simulate(t,e,n,i){let r=this.p,o=this.v,a=e?e.x:0,l=e?e.y:0,c=e?e.z:0;for(let h=this.n-1;h>=0;h--){if(this.age[h]+=t,this.age[h]>=this.life[h]){this.kill(h);continue}let u=Math.min(1,this.drag[h]*t);if(o[h*3]+=(a-o[h*3])*u,o[h*3+1]+=(l-o[h*3+1])*u+this.grav[h]*t,o[h*3+2]+=(c-o[h*3+2])*u,r[h*3]+=o[h*3]*t,r[h*3+1]+=o[h*3+1]*t,r[h*3+2]+=o[h*3+2]*t,this.rot[h]+=this.rotV[h]*t,n){let d=n(r[h*3],r[h*3+2]);if(r[h*3+1]<d&&(!i||i(h,d))){this.kill(h);continue}}}}upload(t,e){let n=this.n,i=this.aPos.array,r=this.aCol.array,o=this.aExt.array,a=t.matrixWorldInverse.elements,l=null;if(this.sort&&n>1){l=this._order;let h=this._depth;for(let d=0;d<n;d++){let f=this.p[d*3],p=this.p[d*3+1],v=this.p[d*3+2];h[d]=a[2]*f+a[6]*p+a[10]*v+a[14],l[d]=d}l.subarray(0,n).sort((d,f)=>h[d]-h[f])}let c=this.uniforms.stretch.value>0;for(let h=0;h<n;h++){let u=l?l[h]:h,d=this.age[u]/this.life[u];i[h*3]=this.p[u*3],i[h*3+1]=this.p[u*3+1],i[h*3+2]=this.p[u*3+2];let f=this.a0[u],p=this.fadeIn[u];d<p&&(f*=d/p),f*=e?e(d,u):1-d*d,r[h*4]=this.col[u*3],r[h*4+1]=this.col[u*3+1],r[h*4+2]=this.col[u*3+2],r[h*4+3]=f;let v=this.s0[u]+(this.s1[u]-this.s0[u])*(this.growth===.5?Math.sqrt(d):Math.pow(d,this.growth));if(o[h*4]=v,o[h*4+1]=this.rot[u],c){let m=this.v[u*3],g=this.v[u*3+1],S=this.v[u*3+2],_=a[0]*m+a[4]*g+a[8]*S,x=a[1]*m+a[5]*g+a[9]*S;o[h*4+2]=_*.02,o[h*4+3]=x*.02}else o[h*4+2]=0,o[h*4+3]=0}this.geometry.instanceCount=n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aExt.needsUpdate=!0,this.aPos.clearUpdateRanges&&this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange&&(this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange(0,n*3),this.aCol.clearUpdateRanges(),this.aCol.addUpdateRange(0,n*4),this.aExt.clearUpdateRanges(),this.aExt.addUpdateRange(0,n*4))}setLighting(t,e,n,i,r){this._v.copy(t).transformDirection(e.matrixWorldInverse),this.uniforms.sunDirView.value.copy(this._v),n&&this.uniforms.sunColor.value.copy(n),i&&this.uniforms.ambColor.value.copy(i),r&&(this.uniforms.fogColor.value.copy(r.color),this.uniforms.fogDensity.value=r.density)}};var te=96,we=Math.random;function iy(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128),i=ui(128,8,4,71,.55);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=(a+.5)/128*2-1,c=(o+.5)/128,h=.25+.6*Math.pow(c,.7),u=Math.max(0,1-Math.abs(l)/h);u*=Math.pow(c,.6)*(1-Math.pow(c,6)),u*=.6+.8*i[o*128+a],u=Math.min(1,u*1.4);let d=(o*128+a)*4,f=Math.pow(c,2)*(1-Math.abs(l));n.data[d]=255,n.data[d+1]=120+135*f,n.data[d+2]=40+160*f*f,n.data[d+3]=u*255}e.putImageData(n,0,0);let r=new an(t);return r.colorSpace=De,r}var Tc=class{constructor(t,e,n,{quality:i="medium"}={}){this.terrain=e,this.env=n;let r=i==="low"?.5:i==="high"?1.4:1;this.q=r,this.zones=Wt.fireZones.map((o,a)=>{let l=o.size,c=l/te,h=o.x-l/2,u=o.z-l/2,d=new Float32Array(te*te),f=new Float32Array(te*te),p=new Float32Array(te*te),v=new Float32Array(te*te),m=new Float32Array(te*te),g=new Float32Array(te*te);for(let S=0;S<te;S++)for(let _=0;_<te;_++){let x=h+(_+.5)*c,M=u+(S+.5)*c,b=e.forestAt(x,M),w=e.heightAt(x,M);g[S*te+_]=w,d[S*te+_]=w<1?0:J(.25+.85*b,0,1)}return{...o,k:a,size:l,cell:c,x0:h,z0:u,fuel:d,heat:f,burnt:p,wet:v,foam:m,hgt:g,active:!1,burning:0,burntCells:0,state:"quiete",cx:o.x,cz:o.z,intensity:0,ignitedAt:-1}}),this.atlasData=new Uint8Array(2*te*2*te*4),this.atlas=new Bi(this.atlasData,2*te,2*te,Tn),this.atlas.magFilter=Ke,this.atlas.minFilter=Ke,this.atlas.needsUpdate=!0,this.rects=this.zones.map(o=>new ye(o.x0,o.z0,o.size,o.k)),this.fireAtlas={texture:this.atlas,rects:this.rects},this.flames=new Ti({max:Math.round(3200*r),texture:iy(),blending:"additive",name:"flames",renderOrder:8,emissive:0}),this.smoke=new Ti({max:Math.round(2600*Math.max(r,.7)),texture:hs(128,{power:1.25,noise:.45,seed:21}),lit:1,sort:!0,name:"smoke",renderOrder:9,growth:.85,nearFade:1.2}),this.embers=new Ti({max:Math.round(700*r),texture:hs(32,{power:2}),blending:"additive",name:"embers",renderOrder:8}),t.add(this.flames.mesh,this.smoke.mesh,this.embers.mesh),this.tick=0,this.time=0,this.texTimer=0,this.wind=new D,this.events=[],this.totalWater=0,this.effectiveWater=0}ignite(t,e,n,i=30){let r=this.zones[t];r.active=!0,r.ignitedAt<0&&(r.ignitedAt=this.time);let o=Math.floor((e-r.x0)/r.cell),a=Math.floor((n-r.z0)/r.cell),l=Math.ceil(i/r.cell);for(let c=a-l;c<=a+l;c++)for(let h=o-l;h<=o+l;h++){if(h<1||c<1||h>=te-1||c>=te-1||Math.hypot(h-o,c-a)>l)continue;let u=c*te+h;r.fuel[u]>.1&&(r.heat[u]=Math.max(r.heat[u],.4+we()*.4))}}start(t=1){let e=this.zones[0];this.ignite(0,e.x-60,e.z+80,45),this.ignite(0,e.x+50,e.z+120,25);let n=this.zones[1];this.ignite(1,n.x,n.z,35),this.nextIgnition=300}cellAt(t,e){for(let n of this.zones){let i=Math.floor((t-n.x0)/n.cell),r=Math.floor((e-n.z0)/n.cell);if(i>=0&&r>=0&&i<te&&r<te)return{Z:n,c:r*te+i,i,j:r}}return null}burntAt(t,e){let n=this.cellAt(t,e);return n?Math.max(n.Z.burnt[n.c],n.Z.heat[n.c]>.5?.6:0):0}deposit(t,e,n,i){this.totalWater+=n;let r=this.cellAt(t,e);if(!r)return;let{Z:o}=r,a=o.cell*o.cell;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=r.i+c,u=r.j+l;if(h<0||u<0||h>=te||u>=te)continue;let d=c===0&&l===0?.4:.075,f=u*te+h,p=n*d/a,v=i?2.4:1;o.wet[f]=Math.min(1.5,o.wet[f]+p/2.5*v),i&&(o.foam[f]=Math.min(1,o.foam[f]+p*.5)),o.heat[f]>0&&(this.effectiveWater+=n*d,o.heat[f]=Math.max(0,o.heat[f]-p/2*v*1.3),we()<.3&&this._steam(o,f))}}_cellPos(t,e){let n=e%te,i=Math.floor(e/te);return[t.x0+(n+we())*t.cell,t.hgt[e],t.z0+(i+we())*t.cell]}_steam(t,e){let[n,i,r]=this._cellPos(t,e);this.smoke.spawn(n,i+3,r,this.wind.x*.5,3+we()*3,this.wind.z*.5,{life:10+we()*8,size0:8,size1:40+we()*20,alpha:.35,r:.86,g:.86,b:.86,drag:.3,grav:0,fadeIn:.05,user:.3})}update(t,e,n){this.time=e,this.env.windAt(0,200,0,e,this.wind);let i=this.wind,r=Math.hypot(i.x,i.z)||1,o=i.x/r,a=i.z/r;this.tick+=t;let l=[];if(this.tick>=.25){let d=this.tick;this.tick=0;for(let f of this.zones){if(!f.active)continue;let p=0,v=0,m=0,g=0,S=0,_=f.list||(f.list=new Int32Array(te*te)),x=0,M=f.heat,b=f.fuel,w=f.wet,y=f.burnt,E=f.hgt,A=this._next||(this._next=new Float32Array(te*te));A.set(M);for(let C=1;C<te-1;C++)for(let L=1;L<te-1;L++){let P=C*te+L;w[P]>0&&(w[P]=Math.max(0,w[P]-d*(.0018+M[P]*.02)*(f.foam[P]>.2?.4:1))),y[P]>.5&&v++;let F=M[P];if(F<=.01)continue;p++,F>.08&&(_[x++]=P),m+=L*F,g+=C*F,S+=F;let U=b[P]*(1-J(w[P]*1.4,0,1)),B=F+(U-F)*d*.25;b[P]=Math.max(0,b[P]-F*d*.006),y[P]=Math.min(1,y[P]+F*d*.05),b[P]<.05&&(B*=1-d*.5),w[P]>.3&&(B-=d*.2*w[P]),A[P]=Math.max(0,B);for(let X=-1;X<=1;X++)for(let O=-1;O<=1;O++){if(!O&&!X)continue;let H=P+X*te+O;if(M[H]>.05||b[H]<.12||w[H]>.25)continue;let V=Math.hypot(O,X),ot=(O*o+X*a)/V,rt=(E[H]-E[P])/(V*f.cell),yt=.018*F*b[H]*Math.exp(1.2*ot*J(r/5,.3,2.5))*Math.exp(J(rt,-.5,.8)*3)*(1-w[H]*3)/V;we()<yt*d*4&&(A[H]=Math.max(A[H],.15+.2*we()))}}M.set(A),f.burning=p,f.nList=x,f.burntCells=v,S>0&&(f.cx=f.x0+(m/S+.5)*f.cell,f.cz=f.z0+(g/S+.5)*f.cell),f.intensity=S;let R=f.state;S>45&&(f.wasActive=!0),f.state=p===0?v>0?"spento":"quiete":S<15&&f.wasActive?"contenuto":"attivo",R!==f.state&&(f.state==="spento"||f.state==="contenuto")&&this.events.push({type:"fire",text:`${f.name}: incendio ${f.state.toUpperCase()}`,level:f.state==="spento"?"good":"info"}),p===0&&(f.active=v>0?!1:f.active)}if(this._uploadAtlas(),this.nextIgnition!==void 0&&e>this.nextIgnition){let f=this.zones.filter(p=>!p.active&&p.burntCells===0);if(f.length){let p=f[Math.floor(we()*f.length)];this.ignite(p.k,p.x+(we()-.5)*200,p.z+(we()-.5)*200,30),this.events.push({type:"fire",text:`NUOVO FOCOLAIO: ${p.name}`,level:"warn"})}this.nextIgnition=e+360+we()*240}}for(let d of this.zones)d.intensity>2&&l.push({x:d.cx,z:d.cz,r:120+Math.sqrt(d.intensity)*15,w:J(d.intensity*.06,1,9),top:d.hgt[te*te>>1]+900});this.env.thermals=l;let c=(d,f)=>Math.hypot(d-n.x,f-n.z);for(let d of this.zones){if(!d.burning)continue;let f=c(d.cx,d.cz),p=f>7e3?.15:f>3500?.4:1;if(!d.nList)continue;let v=Math.min(900,d.burning*3.2)*this.q*p,m=Math.floor(v*t+we());for(;m-- >0;){let _=d.list[we()*d.nList|0],x=d.heat[_];if(x<.05)continue;let[M,b,w]=this._cellPos(d,_),y=3+x*9*(.6+we()*.8);this.flames.spawn(M,b+y*.35,w,i.x*.2,2.5+we()*3*x,i.z*.2,{life:.6+we()*.9,size0:y*.6,size1:y,alpha:.75+we()*.25,r:1,g:.55+we()*.25,b:.25,drag:.5,grav:2,fadeIn:.15,rot:(we()-.5)*.3}),we()<.05&&this.embers.spawn(M,b+2,w,i.x*.5+(we()-.5)*3,4+we()*8,i.z*.5+(we()-.5)*3,{life:2+we()*3,size0:.35,size1:.2,alpha:1,r:1,g:.5,b:.12,drag:.6,grav:-1})}let g=Math.min(22,3+d.intensity*.2)*Math.max(.6,this.q)*(p<1?.6:1),S=Math.floor(g*t+we());for(;S-- >0;){let _=d.list[we()*d.nList|0],x=Math.max(d.heat[_],.1),[M,b,w]=this._cellPos(d,_),E=.78-J(x*.8+(1-d.fuel[_])*.2,0,1)*.3+we()*.08;this.smoke.spawn(M,b+10,w,i.x*.4,6+x*10+we()*3,i.z*.4,{life:70+we()*40,size0:16+we()*12,size1:200+we()*160,alpha:.55+x*.25,r:E*1.04,g:E,b:E*.93,drag:.08,grav:0,fadeIn:.04,rotV:(we()-.5)*.05,user:.6+x*.6})}}let h=this.smoke;for(let d=0;d<h.n;d++)h.v[d*3+1]+=t*1.7*Math.max(0,1-h.age[d]/80)*h.user[d];let u=this._windUp||(this._windUp=new D);u.set(i.x*1.25,0,i.z*1.25),h.simulate(t,u,null),this.flames.simulate(t,i,null),this.embers.simulate(t,i,null)}_uploadAtlas(){let t=this.atlasData,e=2*te;for(let n of this.zones){let i=n.k%2*te,r=Math.floor(n.k/2)*te;for(let o=0;o<te;o++)for(let a=0;a<te;a++){let l=o*te+a,c=((r+o)*e+i+a)*4;t[c]=Math.min(255,n.burnt[l]*255),t[c+1]=Math.min(255,n.heat[l]*255),t[c+2]=Math.min(255,n.wet[l]*200),t[c+3]=Math.min(255,n.foam[l]*255)}}this.atlas.needsUpdate=!0}render(t,e){let n=new bt(1,.92,.82).multiplyScalar(1.7),i=new bt(.7,.75,.84);this.smoke.setLighting(e.sunDir,t,n,i,e.scene.fog),this.flames.setLighting(e.sunDir,t,null,null,e.scene.fog),this.embers.setLighting(e.sunDir,t,null,null,e.scene.fog),this.smoke.upload(t,r=>Math.min(1,r*15)*(1-Math.max(0,(r-.5)/.5)**1.5)),this.flames.upload(t,r=>Math.sin(Math.PI*r)),this.embers.upload(t,r=>1-r)}summary(){let t=0,e=0,n=0;for(let i of this.zones)t+=i.burning,e+=i.burntCells*i.cell*i.cell/1e4,i.burning&&n++;return{burning:t,burntHa:e,active:n,zones:this.zones.map(i=>({name:i.name,state:i.state,x:i.cx,z:i.cz,burning:i.burning,intensity:i.intensity}))}}};var ee={name:"Canadair CL-415",length:19.82,span:28.6,height:8.98,wingArea:100.33,chord:3.51,aspect:28.6*28.6/100.33,emptyMass:12900,maxFuel:4650,waterCapacity:6137,foamCapacity:680,mtowLand:19890,mtowWater:17168,maxAfterScoop:21319,enginePower:2e6,propDiameter:3.97,propRPM:1200,propBlades:4,vmo:200,vfe:{10:165,15:145,25:125},vScoopMin:60,vScoopMax:95,vProbeMax:105,flapDetents:[0,10,15,25]},nt={L:19.82,sCG:7.95,hCG:2.2,sStep:8.95,wing:{sLE:6.9,chord:3.51,h:3.78,rootY:1.3,halfSpan:14.3,incidence:2*Et,flapStart:1.35,flapEnd:9.85,ailStart:10.05,ailEnd:13.75,hingeX:.72},engine:{y:3.95,sProp:4.25,h:4.65,sNacEnd:11.6},float:{y:11.4,sFront:6.75,sBack:10.55,hBottom:1.55,width:.78,height:.82},htail:{sLE:16.45,rootChord:2.55,tipChord:1.7,halfSpan:5.6,h:5.05,sweepLE:1,elevHinge:.62,finletY:3.05},vtail:{sRootLE:14,rootChord:5.4,hRoot:3.15,hTip:8.25,sTipLE:17.55,tipChord:2.15,rudderHinge:.66},gear:{nose:{s:2.55,pivotH:.62,legLen:1.08,wheelR:.33,track:.42},main:{s:9.35,pivotY:1.24,pivotH:.6,wheelY:2.32,wheelH:-.32,wheelR:.5,width:.34}},probe:{s:9.32,y:.42,hExt:-.42},doors:[{s:6.95,y:-.36},{s:6.95,y:.36},{s:8.05,y:-.36},{s:8.05,y:.36}],doorSize:{len:.92,wid:.5},tanksH:.95,tankS:7.6};function xn(s,t,e=0,n={x:0,y:0,z:0}){return n.x=e,n.y=t-nt.hCG,n.z=s-nt.sCG,n}var sy=un([[0,1.3],[.22,.86],[.55,.52],[1,.29],[1.6,.13],[2.4,.04],[3.4,0],[nt.sStep,0]]),ry=un([[nt.sStep,.24],[12,.62],[15,1.02],[16.6,1.27],[18,1.72],[19.2,2.32],[19.82,2.62]]);function je(s){return s<nt.sStep?sy(s):ry(s)}var He=un([[0,1.3],[.12,1.66],[.4,2.08],[.85,2.42],[1.15,2.54],[2.05,3.2],[2.6,3.4],[3.4,3.5],[12,3.5],[13.6,3.43],[15.5,3.28],[17.5,3.16],[19,3.07],[19.82,3.02]]),us=un([[0,0],[.06,.2],[.28,.5],[.7,.84],[1.2,1.08],[2,1.21],[3,1.28],[4,1.3],[11.6,1.3],[13,1.24],[14.5,1.08],[16,.86],[17.5,.62],[18.8,.4],[19.82,.15]]),oy=un([[0,52],[1,38],[2.5,27],[5,22],[nt.sStep,20]]),ay=un([[nt.sStep,22],[14,26],[17,30],[19.82,36]]);function di(s){return(s<nt.sStep?oy(s):ay(s))*Et}function Qo(s){let t=je(s),e=us(s),n=He(s);return Math.min(t+e*Math.tan(di(s)),n-.08)}function ap(s,t=22,e=9){let n=je(s),i=He(s),r=Math.max(us(s),5e-4),o=Qo(s),a=Math.max(i-o,.01),l=Math.min(1.25,a*.48),c=i-l,h=[],u=Math.round(t*.7),d=t-u,f=2/2.7;for(let m=0;m<=u;m++){let g=m/u*(Math.PI/2),S=Math.pow(Math.sin(g),f),_=Math.pow(Math.cos(g),f);h.push([r*S,c+l*_])}for(let m=1;m<=d;m++){let g=m/d,S=c+(o-c)*g,_=.035*Math.pow(g,6)*J(r/.6,0,1);h.push([r+_,S])}let p=[],v=r+.035*J(r/.6,0,1);for(let m=0;m<=e;m++){let S=1-m/e,_=v*S,x=n+(o-n)*(S-.07*S*(1-S));p.push([_,x])}return{roof:h,bottom:p,keel:n,top:i,chine:o,halfBeam:r}}function ds(s,t,e,n=24,i=!0){let r=[],o=[];for(let l=0;l<=n;l++){let c=l/n*Math.PI,h=(1-Math.cos(c))/2,u=5*e*(.2969*Math.sqrt(h)-.126*h-.3516*h*h+.2843*h**3-(i?.1036:.1015)*h**4),d=0,f=0;s>0&&(h<t?(d=s/(t*t)*(2*t*h-h*h),f=2*s/(t*t)*(t-h)):(d=s/(1-t)**2*(1-2*t+2*t*h-h*h),f=2*s/(1-t)**2*(t-h)));let p=Math.atan(f);r.push([h-u*Math.sin(p),d+u*Math.cos(p)]),o.push([h+u*Math.sin(p),d-u*Math.cos(p)])}let a=[];for(let l=n;l>=0;l--)a.push(r[l]);for(let l=1;l<=n;l++)a.push(o[l]);return a}function Hi(s,t,e,n=!1){let i=(s.length-1)/2,r=s.slice(0,i+1).reverse(),o=s.slice(i),a=(h,u)=>{for(let d=1;d<h.length;d++)if(h[d][0]>=u){let f=h[d-1],p=h[d],v=(u-f[0])/(p[0]-f[0]||1);return f[1]+(p[1]-f[1])*v}return h[h.length-1][1]},l=[],c=10;for(let h=c;h>=0;h--){let u=t+(e-t)*h/c;l.push([u,a(r,u)])}if(n){let h=a(r,t),u=a(o,t),d=(h+u)/2,f=(h-u)/2;for(let p=1;p<6;p++){let v=Math.PI/2+p/6*Math.PI;l.push([t+Math.cos(v)*f*.9,d+Math.sin(v)*f])}}else{let h=a(r,t),u=a(o,t);for(let d=1;d<4;d++)l.push([t,h+(u-h)*d/4])}for(let h=0;h<=c;h++){let u=t+(e-t)*h/c;l.push([u,a(o,u)])}return l}function Ns(s,{closed:t=!1,capStart:e=!1,capEnd:n=!1,uvU:i=null,uvV:r=null,flip:o=!1}={}){let a=s.length,l=s[0].length,c=[],h=[];for(let v=0;v<a;v++)for(let m=0;m<l;m++){let g=s[v][m];c.push(g.x,g.y,g.z),h.push(i?i[v]:v/(a-1),r?r[m]:m/(l-1))}let u=[],d=t?l:l-1;for(let v=0;v<a-1;v++)for(let m=0;m<d;m++){let g=(m+1)%l,S=v*l+m,_=(v+1)*l+m,x=(v+1)*l+g,M=v*l+g;o?u.push(S,M,_,_,M,x):u.push(S,_,M,_,x,M)}let f=(v,m)=>{let g=new D;s[v].forEach(_=>g.add(_)),g.divideScalar(l);let S=c.length/3;c.push(g.x,g.y,g.z),h.push(i?i[v]:v/(a-1),.5);for(let _=0;_<d;_++){let x=v*l+_,M=v*l+(_+1)%l;m!==o?u.push(S,x,M):u.push(S,M,x)}};e&&f(0,!1),n&&f(a-1,!0);let p=new xe;return p.setAttribute("position",new Zt(c,3)),p.setAttribute("uv",new Zt(h,2)),p.setIndex(u),p.computeVertexNormals(),p}function Ai(s,t,{chordDir:e,upDir:n,uvU:i=null,capStart:r=!1,capEnd:o=!0,foilV:a=null,flip:l=!1}={}){let c=t.map(u=>{let d=e.clone(),f=n.clone();if(u.twist){let v=new D().crossVectors(d,f).normalize();d.applyAxisAngle(v,u.twist),f.applyAxisAngle(v,u.twist)}return(u.foil||s).map(([v,m])=>u.le.clone().addScaledVector(d,v*u.chord).addScaledVector(f,m*u.chord*(u.thick||1)))}),h=a;if(!h){let u=t[0].foil||s,d=(u.length-1)/2;h=u.map((f,p)=>p<=d?.5-.5*f[0]:.5+.5*f[0])}return Ns(c,{uvU:i,uvV:h,capStart:r,capEnd:o,flip:l})}function lp(s,t=24,e=0){let n=s.map(([r,o])=>new ct(Math.max(r,1e-4),o)),i=new To(n,t,e);return i.rotateX(Math.PI/2),i}function jo(s){let t=s.clone();t.scale(-1,1,1);let e=t.index;if(e){let n=e.array;for(let i=0;i<n.length;i+=3){let r=n[i+1];n[i+1]=n[i+2],n[i+2]=r}e.needsUpdate=!0}return t.computeVertexNormals(),t}function fs(s){let t=0,e=0;for(let h of s)t+=h.attributes.position.count,e+=h.index?h.index.count:h.attributes.position.count;let n=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint32Array(e),a=0,l=0;for(let h of s){let u=h.attributes.position.count;if(n.set(h.attributes.position.array,a*3),h.attributes.normal&&i.set(h.attributes.normal.array,a*3),h.attributes.uv&&r.set(h.attributes.uv.array,a*2),h.index){let d=h.index.array;for(let f=0;f<d.length;f++)o[l+f]=d[f]+a;l+=d.length}else{for(let d=0;d<u;d++)o[l+d]=d+a;l+=u}a+=u}let c=new xe;return c.setAttribute("position",new Te(n,3)),c.setAttribute("normal",new Te(i,3)),c.setAttribute("uv",new Te(r,2)),c.setIndex(new Te(o,1)),c.computeBoundingSphere(),c}function Cn(s,t,e,n=e,i=8,r=1){let o=new D().subVectors(t,s),a=o.length(),l=new re(n,e,a,i,1,!1);l.scale(r,1,1),l.translate(0,a/2,0);let c=new qe().setFromUnitVectors(new D(0,1,0),o.normalize());return l.applyQuaternion(c),l.translate(s.x,s.y,s.z),l}var cp={roof:40,bottom:10};function ta(s,t,e,n=0){let i=Math.abs(t),r=He(s);if(s>1.2-n&&s<2.02+n){let a=.93-(s-1.2)*.1+n;if(i>.032-n&&i<a&&e>r-.75)return 1}if(s>1.32-n&&s<2.04+n){let a=.93-(s-1.2)*.1+.075-n;if(i>a&&e>2.43-n&&e<r-.04+n)return 5}let o=us(s);if(i>o*.62){let a=Math.min(r-.3,3.18)+n;if(e>2.43-n&&e<a){if(s>2.13-n&&s<2.66+n)return 2;if(s>2.74-n&&s<3.3+n&&e<a-.03)return 3}}return s>2.12-n&&s<2.6+n&&i>.42-n&&i<.78+n&&e>r-.2?4:0}function hp(s){let t=ap(s,cp.roof,cp.bottom);return{roof:t.roof,bottom:t.bottom,sec:t}}function Fs(s){let{roof:t,bottom:e}=hp(s),n=t.concat(e),i=[0];for(let o=1;o<n.length;o++)i.push(i[o-1]+Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1]));let r=i[i.length-1]||1;return{pts:n,t:i.map(o=>o/r),nRoof:t.length,total:r}}function Ac(s,t){let{pts:e,t:n}=Fs(s);if(t>=e[0][1])return 0;for(let i=1;i<e.length;i++)if(e[i][1]<=t){let r=e[i-1],o=e[i],a=(r[1]-t)/(r[1]-o[1]||1);return n[i-1]+(n[i]-n[i-1])*a}return 1}function Rc(s,t){let{pts:e,t:n}=Fs(s);for(let i=1;i<e.length;i++)if(e[i][0]>=t){let r=e[i-1],o=e[i],a=(t-r[0])/(o[0]-r[0]||1);return n[i-1]+(n[i]-n[i-1])*a}return n[n.length-1]}function ea(s,t){let{pts:e,t:n}=s;for(let i=1;i<e.length;i++)if(n[i]>=t){let r=(t-n[i-1])/(n[i]-n[i-1]||1);return[e[i-1][0]+(e[i][0]-e[i-1][0])*r,e[i-1][1]+(e[i][1]-e[i-1][1])*r]}return e[e.length-1]}function ly(s=0,t=nt.L){let e=[],n=(i,r,o)=>{for(let a=i;a<r-1e-6;a+=o)a>=s-1e-6&&a<=t+1e-6&&e.push(a)};return n(0,.12,.02),n(.12,.6,.04),n(.6,3.6,.045),n(3.6,8.9,.18),n(8.9,9,.05),n(9,15.4,.22),n(15.4,nt.L,.12),e[e.length-1]<Math.min(t,nt.L)-1e-4&&e.push(Math.min(t,nt.L)),s>0&&e[0]>s+1e-4&&e.unshift(s),e}function na({s0:s=0,s1:t=nt.L,inset:e=0,inside:n=!1,cutWindows:i=!0,collectGlass:r=!1,glassMargin:o=0}={}){let a=ly(s,t),l=nt.L,c=[],h={pos:[],idx:[]};for(let d of[1,-1])for(let f of["roof","bottom"]){let p=[],v=[],m=[],g=[],S=0;for(let M of a){let b=Fs(M),w=hp(M),y=f==="roof"?w.roof:w.bottom,E=f==="roof"?0:b.nRoof;S=y.length;for(let A=0;A<y.length;A++){let[R,C]=y[A];if(e){let P=y[Math.max(0,A-1)],F=y[Math.min(y.length-1,A+1)],U=F[1]-P[1],B=-(F[0]-P[0]),X=Math.hypot(U,B)||1;U/=X,B/=X,R-=U*e,C-=B*e,R<0&&(R=0)}let L=b.t[E+A];p.push(d*R,C-nt.hCG,M-nt.sCG),g.push([M,R,C]),v.push(M/l,d>0?.5*L:1-.5*L)}}let _=a.length;for(let M=0;M<_-1;M++)for(let b=0;b<S-1;b++){let w=M*S+b,y=(M+1)*S+b,E=(M+1)*S+b+1,A=M*S+b+1,R=0,C=0;if(i||r){let P=g[w],F=g[E],U=(P[0]+F[0])/2,B=(P[1]+F[1])/2,X=(P[2]+F[2])/2;R=ta(U,B,X),C=o?ta(U,B,X,o):R}let L=d>0?[w,y,A,y,E,A]:[w,A,y,y,A,E];if(n&&(L=[L[0],L[2],L[1],L[3],L[5],L[4]]),C&&r){let P=h.pos.length/3,F=new Map,U=[];for(let B of L)F.has(B)||(F.set(B,P+F.size),h.pos.push(p[B*3],p[B*3+1],p[B*3+2])),U.push(F.get(B));h.idx.push(...U)}R&&i||m.push(...L)}let x=new xe;x.setAttribute("position",new Zt(p,3)),x.setAttribute("uv",new Zt(v,2)),x.setIndex(m),x.computeVertexNormals(),c.push(x)}let u=null;return r&&h.pos.length&&(u=new xe,u.setAttribute("position",new Zt(h.pos,3)),u.setIndex(h.idx),u.computeVertexNormals()),{strips:c,glassGeo:u}}var Ze={yellow:"#f4b000",yellowDark:"#d9a400",red:"#c3141e",white:"#f4f2ea",black:"#17181a",glass:"#0d1418",frame:"#1d1f22"},Du=un([[0,2.2],[.55,2.3],[1.15,2.08],[2,1.72],[3.1,1.46],[6,1.4],[10.6,1.4],[13,1.72],[15.5,2.22],[17.6,2.66],[19.82,2.95]]);function cy(s,t=2.2){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=cs(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=a.data,c=(u,d)=>i[((d+n)%n*e+(u+e)%e)*4]/255;for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=(c(d-1,u)-c(d+1,u))*t,p=(c(d,u-1)-c(d,u+1))*t,v=1/Math.sqrt(f*f+p*p+1),m=(u*e+d)*4;l[m]=(f*v*.5+.5)*255,l[m+1]=(-p*v*.5+.5)*255,l[m+2]=(v*.5+.5)*255,l[m+3]=255}o.putImageData(a,0,0);let h=new an(r);return h.colorSpace=ci,h.anisotropy=8,h}function up({quality:s="medium",number:t="21",reg:e="I-SUSA",text:n="ANTINCENDIO"}={}){let i=s==="high"?4096:s==="low"?1024:2048,r=i/2,o=nt.L,a=cs(i,r),l=a.getContext("2d"),c=cs(i,r),h=c.getContext("2d");h.fillStyle="rgb(128,128,128)",h.fillRect(0,0,i,r);let u=R=>R/o*i,d=new Map,f=(R,C)=>{let L=Math.round(R*1e3)+":"+Math.round(C*1e3),P=d.get(L);return P===void 0&&(P=Ac(R,C),d.set(L,P)),P},p=(R,C)=>R<0?C*r/2:r-C*r/2,v=(R,C,L)=>p(R,f(C,L)),m=[-1,1];l.fillStyle=Ze.yellow,l.fillRect(0,0,i,r);let g=.04;l.fillStyle=Ze.red;for(let R of m){l.beginPath(),l.moveTo(u(0),p(R,1));for(let C=0;C<=o+1e-6;C+=g)l.lineTo(u(C),v(R,C,Du(C)));l.lineTo(u(o),p(R,1)),l.closePath(),l.fill()}let S=(R,C,L,P,F)=>{l.fillStyle=L;for(let U of m){l.beginPath();for(let B=P;B<=F+1e-6;B+=g)l.lineTo(u(B),v(U,B,Du(B)+C));for(let B=F;B>=P-1e-6;B-=g)l.lineTo(u(B),v(U,B,Du(B)+R));l.closePath(),l.fill()}};S(.025,.085,Ze.white,.75,o),S(.28,.36,Ze.red,3.4,17.6),l.fillStyle=Ze.black;for(let R of m){l.beginPath(),l.moveTo(u(.32),p(R,0));for(let C=.32;C<=1.24;C+=.02){let L=hn(.32,.6,C);l.lineTo(u(C),p(R,Rc(C,us(C)*(.25+.55*L))))}l.lineTo(u(1.24),p(R,0)),l.closePath(),l.fill()}{let R=Math.floor(u(.95)),C=Math.ceil(u(3.55)),L=l.getImageData(R,0,C-R,r),P=h.getImageData(R,0,C-R,r),F=L.data,U=P.data,B=[29,31,34],X=[13,20,24];for(let O=R;O<C;O++){let H=(O+.5)/i*o,V=Fs(H);for(let ot=0;ot<r;ot++){let rt=ot<r/2?(ot+.5)/(r/2):(r-ot-.5)/(r/2);if(rt>.75)continue;let[yt,Lt]=ea(V,rt);if(!ta(H,yt,Lt,.075))continue;let K=ta(H,yt,Lt,0),tt=K?X:B,ht=(ot*(C-R)+(O-R))*4;F[ht]=tt[0],F[ht+1]=tt[1],F[ht+2]=tt[2];let zt=K?128:100;U[ht]=U[ht+1]=U[ht+2]=zt}}l.putImageData(L,R,0),h.putImageData(P,R,0)}let _=(R,C,L,P)=>{R.strokeStyle=L,R.lineWidth=P,R.beginPath(),C.forEach(([F,U],B)=>B?R.lineTo(F,U):R.moveTo(F,U)),R.stroke()},x=i/o,M=Math.max(1,x*.006);for(let R of m){for(let P=3.7;P<18.6;P+=.53){let F=[];for(let U=.03;U<=.97;U+=.02)F.push([u(P),p(R,U)]);_(l,F,"rgba(40,30,0,0.16)",M),_(h,F,"rgb(96,96,96)",M*1.4);for(let U=.05;U<.95;U+=.012)h.fillStyle="rgb(150,150,150)",h.fillRect(u(P)+M*2,p(R,U),M*.9,M*.9),h.fillRect(u(P)-M*2.5,p(R,U),M*.9,M*.9)}for(let P of[3.05,2.45,.95]){let F=[];for(let U=2.6;U<18.5;U+=.1)P>je(U)+.2&&P<3.3&&F.push([u(U),v(R,U,P)]);F.length>2&&(_(l,F,"rgba(40,30,0,0.12)",M),_(h,F,"rgb(100,100,100)",M*1.3))}let C=[];for(let P=.4;P<o;P+=.05)C.push([u(P),v(R,P,Qo(P)+.004)]);_(l,C,"rgba(60,0,0,0.45)",M*1.5),_(h,C,"rgb(150,150,150)",M*2);let L=[];for(let P=.6;P<=1;P+=.01)L.push([u(nt.sStep),p(R,P)]);_(l,L,"rgba(20,0,0,0.6)",M*3),_(h,L,"rgb(60,60,60)",M*3)}let b=(R,C,L,P,F,U,B,X,O=!0)=>{let H=[],V=(rt,yt,Lt)=>{for(let Xt=0;Xt<=6;Xt++){let K=Lt+Xt/6*(Math.PI/2);H.push([rt+Math.cos(K)*U,yt+Math.sin(K)*U])}};V(L-U,F-U,0),V(C+U,F-U,Math.PI/2),V(C+U,P+U,Math.PI),V(L-U,P+U,3*Math.PI/2);let ot=H.map(([rt,yt])=>[u(rt),v(R,rt,yt)]);X&&(l.fillStyle=X,l.beginPath(),ot.forEach(([rt,yt],Lt)=>Lt?l.lineTo(rt,yt):l.moveTo(rt,yt)),l.closePath(),l.fill()),l.strokeStyle=B,l.lineWidth=M*2.2,l.beginPath(),ot.forEach(([rt,yt],Lt)=>Lt?l.lineTo(rt,yt):l.moveTo(rt,yt)),l.closePath(),l.stroke(),O&&(h.strokeStyle="rgb(70,70,70)",h.lineWidth=M*2.5,h.beginPath(),ot.forEach(([rt,yt],Lt)=>Lt?h.lineTo(rt,yt):h.moveTo(rt,yt)),h.closePath(),h.stroke())};b(-1,3.58,4.42,1.22,2.92,.12,"rgba(25,20,10,0.75)"),b(-1,3.86,4.16,2.25,2.62,.05,Ze.frame,Ze.glass,!1),b(-1,12.05,12.9,1.32,2.72,.1,"rgba(25,20,10,0.75)");for(let R of m){b(R,5.05,5.62,1.95,2.72,.08,"rgba(25,20,10,0.7)"),b(R,5.18,5.5,2.25,2.55,.06,Ze.frame,Ze.glass,!1);for(let C of[7,9.6,14.6])b(R,C,C+.32,2.42,2.72,.07,Ze.frame,Ze.glass,!1)}b(1,12.1,12.9,1.4,2.6,.1,"rgba(25,20,10,0.7)");for(let R of m)b(R,8.72,9.98,1.28,2.5,.25,"rgba(10,10,10,0.9)","#2a2a2a");l.fillStyle="rgba(40,0,0,0.0)";for(let R of nt.doors){let C=R.y<0?-1:1,L=R.s-nt.doorSize.len/2,P=R.s+nt.doorSize.len/2,F=Math.abs(R.y)-nt.doorSize.wid/2,U=Math.abs(R.y)+nt.doorSize.wid/2,B=[],X=(O,H)=>je(O)+H*Math.tan(di(O));for(let[O,H]of[[L,F],[P,F],[P,U],[L,U],[L,F]])B.push([u(O),v(C,O,X(O,H))]);_(l,B,"rgba(20,0,0,0.85)",M*2.5),_(h,B,"rgb(60,60,60)",M*3)}for(let R of m){let C=nt.probe.s,L=nt.probe.y,P=je(C)+L*Math.tan(di(C));l.fillStyle="rgba(15,10,10,0.9)";let F=u(C-.22),U=v(R,C,P+.05);l.fillRect(F,Math.min(U,v(R,C,P-.05)),u(.44),Math.abs(v(R,C,P-.05)-U)+2)}let w=(R,C,L,P,F,U,{stroke:B=null,font:X="900",family:O="Arial Black, Arial, sans-serif",widthScale:H=1}={})=>{let V=u(L),ot=v(R,L,P),rt=Math.abs(v(R,L,P+.05)-v(R,L,P-.05))/.1,yt=F*rt;l.save(),l.translate(V,ot),R>0&&l.rotate(Math.PI),l.scale(x/rt*H,1),l.font=`${X} ${yt*1.33}px ${O}`,l.textAlign="center",l.textBaseline="middle",B&&(l.lineWidth=yt*.08,l.strokeStyle=B,l.strokeText(C,0,0)),l.fillStyle=U,l.fillText(C,0,0),l.restore()};for(let R of m){w(R,n,8.55,2.06,.5,Ze.red,{stroke:"rgba(90,0,0,0.6)",widthScale:.95}),w(R,t,16.9,2.85,.62,Ze.black,{widthScale:.9}),w(R,e,14,2.68,.2,Ze.black,{font:"bold",family:"Arial, sans-serif"}),w(R,"SOCCORSO",1.85,1.68,.11,Ze.white,{font:"bold",family:"Arial, sans-serif"});let C=15.15,L=2.5,P=["#0b8a3e","#f4f2ea","#c8102e"];for(let F=0;F<3;F++){let U=C+F*.13*(R>0?-1:1);l.fillStyle=P[F];let B=v(R,U,L+.12),X=v(R,U,L-.12);l.fillRect(u(Math.min(U,U+.13*(R>0?-1:1))),Math.min(B,X),u(.13),Math.abs(X-B))}}let y=Rn(1234);l.globalCompositeOperation="multiply";for(let R=0;R<700;R++){let C=y()<.5?-1:1,L=1+y()*17.5,P=.55+y()*.45,F=u(L),U=p(C,P),B=.03+y()*.06;l.fillStyle=`rgba(${120+y()*60},${110+y()*50},${100+y()*40},${B})`,l.fillRect(F,U-(C<0?0:1)*0,2+y()*x*.8,(C<0?1:-1)*(x*(.1+y()*.5)))}for(let R of m)for(let C=.8;C<18;C+=.02){let L=je(C)+.85+Math.sin(C*5.3)*.06;if(L>3)continue;let P=v(R,C,L);l.fillStyle=`rgba(150,150,140,${.05+.05*y()})`,l.fillRect(u(C),P-2,x*.03,4+y()*6)}l.globalCompositeOperation="source-over";for(let R=0;R<2500;R++)l.fillStyle=`rgba(${y()<.5?"255,255,255":"0,0,0"},${.012+y()*.02})`,l.fillRect(y()*i,y()*r,4+y()*x*.6,4+y()*x*.4);let E=Ir(a,{srgb:!0,aniso:8}),A=cy(c,2.5);return{map:E,normalMap:A,canvas:a}}function dp({quality:s="medium"}={}){let t=s==="high"?2048:1024,e=s==="high"?512:256,n=nt.wing.halfSpan,i=nt.wing.chord,r=cs(t,e),o=r.getContext("2d"),a=o.createImageData(t,e),l=a.data,c=_=>[parseInt(_.slice(1,3),16),parseInt(_.slice(3,5),16),parseInt(_.slice(5,7),16)],h=c(Ze.yellow),u=c(Ze.red),d=c(Ze.white),f=[38,39,38],p=Math.tan(30*Math.PI/180),v=Rn(77);for(let _=0;_<e;_++){let x=1-(_+.5)/e,M=x<.5,b=M?1-2*x:2*x-1;for(let w=0;w<t;w++){let y=(w+.5)/t*n,E=h,A=(b-.5)*i*p,R=y-(10.75+A);R>-.6&&R<.6&&(E=Math.abs(R)<.2?d:u),y>13.15+A*.6&&(E=u),M&&y>1.35&&y<2.9&&b>.12&&b<.62&&(E=f);let C=1;if(M){let P=nt.engine.y+.62+(b-.35)*.25,F=.18+b*.55,U=Math.abs(y-P);b>.3&&U<F&&(C*=1-.5*(1-U/F)*hn(.3,.7,b))}let L=(_*t+w)*4;l[L]=E[0]*C,l[L+1]=E[1]*C,l[L+2]=E[2]*C,l[L+3]=255}}o.putImageData(a,0,0);let m=_=>_/n*t,g=(_,x)=>_?(1-(.5-.5*x))*e:(1-(.5+.5*x))*e;o.strokeStyle="rgba(40,30,0,0.28)",o.lineWidth=1;for(let _ of[!0,!1]){for(let x of[.12,.62,.715])o.beginPath(),o.moveTo(0,g(_,x)),o.lineTo(t,g(_,x)),o.stroke();for(let x=1.3;x<n;x+=.58)o.beginPath(),o.moveTo(m(x),g(_,.02)),o.lineTo(m(x),g(_,.98)),o.stroke()}o.fillStyle="rgba(30,30,30,0.6)";for(let _ of[5.6,8.4])o.beginPath(),o.arc(m(_),g(!0,.4),3,0,Math.PI*2),o.fill();return Ir(r,{srgb:!0,aniso:8})}var Ct=(s,t,e=0)=>new D(e,t-nt.hCG,s-nt.sCG),Us=class{constructor(t,e,n){this.pivot=new Qt,this.pivot.position.copy(e),this.axis=new D().subVectors(n,e).normalize(),this.origin=e.clone(),t.add(this.pivot),this.angle=0}add(t){return t.geometry.translate(-this.origin.x,-this.origin.y,-this.origin.z),this.pivot.add(t),t}set(t){t!==this.angle&&(this.angle=t,this.pivot.quaternion.setFromAxisAngle(this.axis,t))}};function Nr(s,t=10){let n=s.length-2*(t+1);return s.map(([i],r)=>r<=t?.5-.5*i:r<t+1+n?.5:.5+.5*i)}var Cc=class{constructor({quality:t="medium"}={}){this.quality=t,this.group=new Qt,this.group.name="CL415",this.time=0,this._mats(),this._fuselage(),this._wing(),this._nacelles(),this._tail(),this._floats(),this._gear(),this._probesDoors(),this._lights(),this._details(),this.group.traverse(e=>{e.isMesh&&!e.userData.noShadow&&!e.userData.shadowOnly&&(e.castShadow=!0,e.receiveShadow=!0),e.userData.noShadow&&e.name==="hull"&&(e.receiveShadow=!0)})}_mats(){let t=this.quality,e=(r,o={})=>new Es({color:r,roughness:.46,metalness:0,clearcoat:.32,clearcoatRoughness:.3,envMapIntensity:.8,...o}),n=up({quality:t}),i=dp({quality:t});this.M={hull:e(16777215,{map:n.map,normalMap:n.normalMap,normalScale:new ct(.45,.45)}),wing:e(16777215,{map:i}),yellow:e(Ze.yellow),red:e(Ze.red),white:e(Ze.white),black:new be({color:1316118,roughness:.55,metalness:.1}),blade:new be({color:1184532,roughness:.5,metalness:.2,transparent:!0}),bladeTip:new be({color:Ze.yellow,roughness:.5,transparent:!0}),spinner:new Es({color:15263972,roughness:.25,metalness:.3,clearcoat:.8}),chrome:new be({color:14212578,roughness:.12,metalness:1}),gray:new be({color:9080208,roughness:.45,metalness:.6}),darkMetal:new be({color:2762276,roughness:.7,metalness:.7}),rubber:new be({color:1381653,roughness:.92,metalness:0}),inlet:new be({color:328965,roughness:1}),glass:new Es({color:1844780,roughness:.02,metalness:0,transparent:!0,opacity:.45,envMapIntensity:1.6,side:sn,depthWrite:!1,clearcoat:1,clearcoatRoughness:.02})}}_fuselage(){let{strips:t,glassGeo:e}=na({cutWindows:!1,collectGlass:!0,glassMargin:.04}),n=fs(t),i=new q(n,this.M.hull);i.name="hull",i.userData.noShadow=!0,i.receiveShadow=!0,this.group.add(i),this.hull=i;let r=new q(fs(na({cutWindows:!0}).strips),new Qe({colorWrite:!1,depthWrite:!1,side:sn}));if(r.castShadow=!0,r.userData.shadowOnly=!0,this.group.add(r),e){let h=e.attributes.position,u=e.attributes.normal;for(let f=0;f<h.count;f++)h.setXYZ(f,h.getX(f)+u.getX(f)*.006,h.getY(f)+u.getY(f)*.006,h.getZ(f)+u.getZ(f)*.006);let d=new q(e,this.M.glass);d.renderOrder=10,d.userData.noShadow=!0,d.name="glass",this.group.add(d),this.glass=d}let o=new q(new mn(.16,10,8),this.M.yellow);o.scale.set(.9,1.6,.5),o.position.copy(Ct(nt.L-.02,2.85)),this.group.add(o);let a=this.M.black,l=[];for(let h=1.18;h<=2.05;h+=.05)l.push(Ct(h,He(h)+.006,0));let c=new ji(new zi(l),16,.035,6,!1);this.group.add(new q(c,a))}_wing(){let t=nt.wing,e=ds(.04,.4,.17,26),n=ds(.04,.4,.135,26),i=t.incidence,r=new D(0,-Math.sin(i),Math.cos(i)),o=new D(0,Math.cos(i),Math.sin(i)),a=t.h+.25*t.chord*Math.sin(i),l=A=>{let R=J(A/t.halfSpan,0,1);return e.map((C,L)=>[C[0],hi(C[1],n[L][1],R)])},c=t.hingeX,h=(A,R)=>({le:Ct(t.sLE,a,A),chord:t.chord,foil:R}),u=[0];for(let A=.4;A<t.halfSpan;A+=.45)u.push(A);u.push(t.halfSpan);let d=A=>A.map(R=>R/t.halfSpan),f=u.map(A=>h(A,Hi(l(A),0,c-.005))),p=Ai(null,f,{chordDir:r,upDir:o,uvU:d(u),capEnd:!0,foilV:Nr(f[0].foil)}),m=[[0,t.flapStart-.02],[t.flapEnd+.02,t.ailStart-.02],[t.ailEnd+.02,t.halfSpan]].map(([A,R])=>{let C=[A,(A+R)/2,R],L=C.map(P=>h(P,Hi(l(P),c-.01,1)));return Ai(null,L,{chordDir:r,upDir:o,uvU:d(C),capStart:!0,capEnd:!0,foilV:Nr(L[0].foil)})}),g=fs([p,...m]),S=jo(g);for(let A of[g,S]){let R=new q(A,this.M.wing);R.name="wing",this.group.add(R)}let _=(A,R,C,L,P)=>{let F=[];for(let H=A;H<=R+1e-6;H+=(R-A)/Math.max(2,Math.round((R-A)/.6)))F.push(H);let U=F.map(H=>h(H,Hi(l(H),C,1,!0))),B=Ai(null,U,{chordDir:r,upDir:o,uvU:d(F),capStart:!0,capEnd:!0,foilV:Nr(U[0].foil)}),X=t.sLE+(C-.01)*t.chord,O=a-(C-.01)*t.chord*Math.sin(i)-P;return{g:B,p0:Ct(X,O,A),p1:Ct(X,O,R)}};this.flaps=[],this.ailerons=[];for(let A of[1,-1]){let R=_(t.flapStart,t.flapEnd,c+.008,this.M.wing,.32),C=_(t.ailStart,t.ailEnd,c+.008,this.M.wing,0);for(let[L,P]of[[R,this.flaps],[C,this.ailerons]]){let F=L.g,U=L.p0,B=L.p1;A<0&&(F=jo(F),U=U.clone().setX(-U.x),B=B.clone().setX(-B.x));let X=new Us(this.group,U,B);X.add(new q(F,this.M.wing)),X.side=A,P.push(X)}}let x=[],M=[6.2,6.6,7.2,8.4,9.6,10.4,11.1],b=[.2,.62,.92,1.05,1.02,.85,.35],w=[3.52,3.68,3.82,3.9,3.86,3.76,3.6];M.forEach((A,R)=>{let C=[];for(let P=0;P<=16;P++){let F=Math.PI*(P/16),U=Math.cos(F)*b[R],B=3.38+(w[R]-3.38)*Math.pow(Math.sin(F),.5);C.push(Ct(A,B,U))}x.push(C)});let y=new q(Ns(x,{capStart:!0,capEnd:!0,flip:!0}),this.M.yellow);this.group.add(y);let E=ds(0,.3,.1,12);for(let A of[1,-1]){let C=[0,.95].map((P,F)=>({le:Ct(t.sLE+.55+P*.5,t.h+.12+P,A*(t.halfSpan+.02+P*.12)),chord:F===0?2.5:1.3})),L=Ai(E,C,{chordDir:new D(0,0,1),upDir:new D(A,0,0),capEnd:!0,flip:A>0});this.group.add(new q(L,this.M.red))}}_nacelles(){let t=nt.engine,e=[4.4,4.5,4.75,5.2,5.9,6.8,7.8,8.8,9.8,10.7,11.3,11.62],n=un(e.map((l,c)=>[l,[4.65,4.645,4.62,4.58,4.55,4.54,4.56,4.6,4.66,4.74,4.8,4.85][c]])),i=un(e.map((l,c)=>[l,[.35,.39,.46,.52,.55,.56,.55,.52,.45,.33,.2,.05][c]])),r=un(e.map((l,c)=>[l,[.35,.4,.5,.6,.66,.67,.64,.58,.48,.34,.2,.05][c]])),o=28,a=2/2.3;this.props=[];for(let l of[-1,1]){let c=l*t.y,h=[],u=[];for(let w=4.4;w<=11.62+1e-6;w+=.18)u.push(Math.min(w,11.62));for(let w of u){let y=[];for(let E=0;E<o;E++){let A=E/o*Math.PI*2,R=Math.cos(A),C=Math.sin(A),L=Math.sign(R)*Math.pow(Math.abs(R),a)*i(w),P=Math.sign(C)*Math.pow(Math.abs(C),a)*r(w);y.push(Ct(w,n(w)+P,c+L))}h.push(y)}let d=Ns(h,{closed:!0,capEnd:!0,flip:!0}),f=new q(d,this.M.yellow);f.name="nacelle",this.group.add(f);let p=[],v=[4.62,4.75,5.1,5.6,6.2,6.7],m=[.2,.24,.26,.25,.2,.08],g=[.26,.3,.3,.26,.16,.04];v.forEach((w,y)=>{let E=[];for(let A=0;A<16;A++){let R=A/16*Math.PI*2;E.push(Ct(w,n(w)-r(w)*.82+Math.sin(R)*g[y]*.5-g[y]*.3,c+Math.cos(R)*m[y]))}p.push(E)}),this.group.add(new q(Ns(p,{closed:!0,capEnd:!0,flip:!0}),this.M.yellow));let S=new q(new Mn(1,16),this.M.inlet);S.scale.set(.2,.135,1),S.position.copy(Ct(4.615,n(4.62)-r(4.62)*.82-.078,c)),S.rotation.y=Math.PI,this.group.add(S);let _=Ct(6.35,4.6,c+l*.5),x=Ct(6.85,4.62,c+l*.82),M=new q(Cn(_,x,.15,.17,12),this.M.darkMetal);this.group.add(M);let b=new q(new Mn(.15,12),this.M.inlet);b.position.copy(x).add(new D(l*.002,0,.001)),b.lookAt(x.clone().add(new D().subVectors(x,_))),this.group.add(b),this.props.push(this._propeller(l,Ct(t.sProp,t.h,c)))}}_propeller(t,e){let n=new Qt;n.position.copy(e),this.group.add(n);let i=new Qt;n.add(i);let r=[];for(let _=0;_<=14;_++){let x=_/14,M=-.72+x*.92,b=.36*Math.pow(Math.sin(x*Math.PI/2),.62);r.push([b,M])}r.push([.36,.22]),r.push([.3,.22]);let o=new q(lp(r,28),this.M.spinner);i.add(o);let a=ee.propDiameter/2,l=ds(.02,.4,.12,9),c=[.3,.42,.55,.75,.95,1.2,1.45,1.68,1.84,1.93,1.985],h=un([[.3,.17],[.45,.25],[.7,.31],[1.1,.3],[1.5,.25],[1.85,.18],[1.985,.06]]),u=un([[.3,2.6],[.45,1.6],[.8,.95],[1.4,.65],[1.985,.45]]),d=_=>(22-34*(_-.3)/(a-.3))*Et;this.blades=this.blades||[];let f=(_,x)=>{let M=c.filter(w=>w>=_-1e-6&&w<=x+1e-6);M[0]>_&&M.unshift(_),M[M.length-1]<x&&M.push(x);let b=M.map(w=>({le:new D(.35*h(w),w,0),chord:h(w),twist:d(w),thick:u(w)}));return Ai(l,b,{chordDir:new D(-1,0,0),upDir:new D(0,0,-1),capEnd:!0})},p=f(.3,1.86),v=f(1.86,1.985),m=[];for(let _=0;_<4;_++){let x=new Qt;x.rotation.z=_*Math.PI/2;let M=new Qt;x.add(M);let b=new q(p,this.M.blade),w=new q(v,this.M.bladeTip);M.add(b,w);let y=new q(new re(.075,.09,.32,10),this.M.black);y.position.y=.38,M.add(y),i.add(x),m.push(M)}let g=(()=>{let _=document.createElement("canvas");_.width=_.height=256;let x=_.getContext("2d"),M=x.createRadialGradient(128,128,20,128,128,128);M.addColorStop(0,"rgba(30,30,30,0.0)"),M.addColorStop(.25,"rgba(25,25,25,0.16)"),M.addColorStop(.85,"rgba(25,25,25,0.10)"),M.addColorStop(.93,"rgba(240,180,0,0.16)"),M.addColorStop(.985,"rgba(240,180,0,0.10)"),M.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=M,x.fillRect(0,0,256,256);for(let w=0;w<4;w++){x.save(),x.translate(128,128),x.rotate(w*Math.PI/2);let y=x.createLinearGradient(0,-20,0,20);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(.5,"rgba(10,10,10,0.08)"),y.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=y,x.beginPath(),x.moveTo(0,0),x.arc(0,0,128,-.35,.05),x.closePath(),x.fill(),x.restore()}let b=new an(_);return b.colorSpace=De,b})(),S=new q(new Mn(a,48),new Qe({map:g,transparent:!0,depthWrite:!1,side:sn,opacity:0,toneMapped:!0}));return S.userData.noShadow=!0,S.renderOrder=11,i.add(S),{grp:n,spin:i,blades:m,disc:S,side:t,angle:Math.random()*6.28,bladeMat:this.M.blade}}_tail(){let t=nt.vtail,e=ds(0,.3,.12,18),n=un([[3,11.3],[3.35,12.4],[3.8,13.45],[4.4,14.25],[5.2,14.85],[8.25,17.55]]),i=_=>19.72+(_-3)*.004,r=18.05,o=new D(0,0,1),a=new D(1,0,0),l=(_,x)=>({le:Ct(n(_),_,0),chord:i(_)-n(_),foil:x}),c=7.35,h=(_,x,M,b,w,y,E,A,R=!1)=>{let C=[];for(let U=0;U<=M;U++)C.push(_+(x-_)*U/M);let L=C.map(U=>l(U,Hi(e,b(U),w(U),R))),P=Ai(null,L,{chordDir:o,upDir:a,capStart:E,capEnd:A,foilV:Nr(L[0].foil),flip:!0});return new q(P,y)},u=_=>(r-n(_))/(i(_)-n(_));this.group.add(h(3,3.6,2,()=>0,()=>1,this.M.yellow,!1,!1)),this.group.add(h(3.6,c,10,()=>0,_=>u(_)-.005,this.M.yellow,!1,!1)),this.group.add(h(c,8.05,3,()=>0,_=>u(_)-.005,this.M.red,!1,!1)),this.group.add(h(8.05,8.25,1,()=>0,()=>1,this.M.red,!1,!0)),this.rudder=new Us(this.group,Ct(r,3.6,0),Ct(r,8.05,0)),this.rudder.add(h(3.6,c,8,_=>u(_)+.003,()=>1,this.M.yellow,!0,!1,!0)),this.rudder.add(h(c,8.05,3,_=>u(_)+.003,()=>1,this.M.red,!1,!0,!0));let d=new q(new Gt(.02,.9,.32),this.M.yellow);d.position.copy(Ct(19.62,4.3,0)),d.geometry.translate(d.position.x,d.position.y,d.position.z),d.position.set(0,0,0),this.rudder.add(d);let f=nt.htail,p=ds(0,.3,.11,18),v=(_,x)=>{let M=Math.abs(_)/f.halfSpan;return{le:Ct(f.sLE+f.sweepLE*M,f.h,_),chord:f.rootChord+(f.tipChord-f.rootChord)*M,foil:x}},m=new D(0,0,1),g=new D(0,1,0),S=[0,.8,1.6,2.4,3.2,4,4.8,f.halfSpan];this.elevators=[];for(let _ of[1,-1]){let x=Ai(null,S.map(H=>v(H,Hi(p,0,.615))),{chordDir:m,upDir:g,capEnd:!0,foilV:Nr(Hi(p,0,.615))}),M=_>0?x:jo(x);this.group.add(new q(M,this.M.red));let b=S.slice(0,-1).concat([f.halfSpan-.05]),w=Ai(null,b.map(H=>v(H,Hi(p,.625,1,!0))),{chordDir:m,upDir:g,capStart:!0,capEnd:!0,foilV:Nr(Hi(p,.625,1,!0))}),y=_>0?w:jo(w),E=v(0,null),A=v(f.halfSpan,null),R=Ct(f.sLE+.62*f.rootChord,f.h,0),C=Ct(f.sLE+f.sweepLE+.62*f.tipChord,f.h,_*f.halfSpan),L=new Us(this.group,R,C);L.add(new q(y,this.M.red)),L.side=_,this.elevators.push(L);let P=f.finletY*_,F=f.finletY/f.halfSpan,U=f.sLE+f.sweepLE*F+.05,B=ds(0,.3,.1,12),X=[{le:Ct(U+.1,f.h-.7,P),chord:1.05},{le:Ct(U-.05,f.h,P),chord:1.55},{le:Ct(U+.45,f.h+1.05,P),chord:.95}],O=Ai(B,X,{chordDir:new D(0,0,1),upDir:new D(1,0,0),capStart:!0,capEnd:!0,flip:!0});this.group.add(new q(O,this.M.red))}}_floats(){let t=nt.float,e=t.sBack-t.sFront,n=un([[0,.48],[.35,.16],[.8,.02],[1.2,0],[2,0],[2.02,.07],[3,.2],[e,.42]]),i=un([[0,.52],[.25,.7],[.8,.82],[3,.8],[e,.62]]),r=un([[0,.04],[.15,.22],[.5,.34],[1,.39],[2.6,.39],[3.4,.28],[e,.16]]),o=25*Et;this.floatGroups=[];for(let a of[-1,1]){let l=a*t.y,c=[],h=[];for(let g=0;g<=e+1e-6;g+=.08){let S=t.sFront+g,_=n(g),x=i(g),M=r(g),b=Math.min(_+M*Math.tan(o),x-.05),w=[],y=[],E=12;for(let A=0;A<=E;A++){let R=Math.PI-A/E*Math.PI,C=Math.cos(R)*M,L=b+.1+(x-b-.1)*Math.pow(Math.sin(R),.55);w.push(Ct(S,t.hBottom+L,l+C))}y.push(Ct(S,t.hBottom+b+.1,l+M)),y.push(Ct(S,t.hBottom+b,l+M)),y.push(Ct(S,t.hBottom+_,l)),y.push(Ct(S,t.hBottom+b,l-M)),y.push(Ct(S,t.hBottom+b+.1,l-M)),c.push(w),h.push(y)}let u=Ns(c,{capStart:!1,capEnd:!1,flip:!1}),d=Ns(h,{capStart:!1,capEnd:!1,flip:!1});this.group.add(new q(u,this.M.yellow)),this.group.add(new q(d,this.M.red));for(let[g,S]of[[c,this.M.yellow],[h,this.M.red]])for(let _ of[0,g.length-1]){let x=g[_],M=new D;x.forEach(A=>M.add(A)),M.divideScalar(x.length);let b=[M.x,M.y,M.z];x.forEach(A=>b.push(A.x,A.y,A.z));let w=[];for(let A=1;A<x.length;A++)_===0?w.push(0,A,A+1):w.push(0,A+1,A);let y=new xe;y.setAttribute("position",new Zt(b,3)),y.setIndex(w),y.computeVertexNormals();let E=new q(y,S);E.material=S.clone(),E.material.side=sn,this.group.add(E)}let f=nt.wing.h-.28,p=[t.sFront+1.05,t.sFront+2.75];for(let g of p){let S=Ct(g,t.hBottom+.78,l),_=Ct(g+.15,f,l-a*.05);this.group.add(new q(Cn(S,_,.09,.075,10,2.4),this.M.yellow))}let v=Ct(t.sFront+1.9,t.hBottom+.8,l),m=Ct(t.sFront+1.7,f+.02,l-a*1.35);this.group.add(new q(Cn(v,m,.045,.045,8),this.M.yellow))}}_gear(){let t=nt.gear.main,e=nt.gear.nose,n=(i,r)=>{let o=new Qi(i-r*.42,r*.5,12,28);return o.scale(1,1,.9),o.rotateY(Math.PI/2),o};this.mainGear=[];for(let i of[-1,1]){let r=Ct(t.s,t.pivotH,i*t.pivotY),o=Ct(t.s,t.wheelH,i*t.wheelY),a=new Qt;a.position.copy(r),this.group.add(a);let l=o.clone().sub(r),c=l.clone().normalize(),h=l.length(),u=new q(Cn(new D,c.clone().multiplyScalar(h*.62),.11,.1,12),this.M.gray);a.add(u);let d=new Qt;a.add(d);let f=new q(Cn(c.clone().multiplyScalar(h*.4),c.clone().multiplyScalar(h-.05),.075,.075,12),this.M.chrome);d.add(f);let p=new Qt;p.position.copy(l),d.add(p);let v=new q(n(t.wheelR,t.width),this.M.rubber);p.add(v);let m=new q(new re(.22,.22,t.width*.85,18),this.M.gray);m.rotation.z=Math.PI/2,p.add(m);let g=new q(new re(.1,.12,t.width*.95,12),this.M.chrome);g.rotation.z=Math.PI/2,p.add(g);let S=new q(Cn(l.clone().add(new D(-i*.25,.05,0)),l.clone(),.06,.06,8),this.M.gray);d.add(S);let _=c.clone().multiplyScalar(h*.5),x=Ct(t.s-.3,1.95,i*1.3).sub(r);a.add(new q(Cn(_,x,.05,.05,8),this.M.gray)),this.mainGear.push({leg:a,slider:d,wheel:p,side:i,dir:c,len:h})}{let i=Ct(e.s,e.pivotH,0),r=new Qt;r.position.copy(i),this.group.add(r),r.add(new q(Cn(new D(0,0,0),new D(0,-e.legLen*.6,0),.07,.065,10),this.M.gray));let o=new Qt;r.add(o),o.add(new q(Cn(new D(0,-e.legLen*.45,0),new D(0,-e.legLen+.02,.03),.05,.05,10),this.M.chrome));let a=new Qt;a.position.set(0,-e.legLen,.03),o.add(a);let l=[];for(let h of[-1,1]){let u=new Qt;u.position.set(h*e.track/2,0,0),u.add(new q(n(e.wheelR,.2),this.M.rubber));let d=new q(new re(.14,.14,.17,14),this.M.gray);d.rotation.z=Math.PI/2,u.add(d),a.add(u),l.push(u)}a.add(new q(new Gt(e.track-.15,.06,.08),this.M.gray));let c=[];for(let h of[-1,1]){let u=Ct(1.35,je(1.35)+.02,h*.3),d=Ct(2.85,je(2.85)+.02,h*.3),f=new Us(this.group,u,d),p=new Gt(.28,.025,1.5),v=Ct(2.1,je(2.1)+.05,h*.16);p.translate(v.x,v.y,v.z),f.add(new q(p,this.M.red)),f.side=h,c.push(f)}this.noseGear={leg:r,slider:o,steer:a,wheels:l,doors:c}}}_probesDoors(){this.probeMeshes=[];for(let t of[-1,1]){let e=nt.probe.s,n=t*nt.probe.y,i=je(e)+nt.probe.y*Math.tan(di(e)),r=new Qt,o=new q(new Gt(.1,.92,.26),this.M.gray);o.geometry.translate(0,-.46,0),r.add(o);let a=new q(new re(.05,.05,.92,10),this.M.gray);a.geometry.translate(0,-.46,-.13),r.add(a);let l=new q(new Gt(.14,.12,.3),this.M.darkMetal);l.position.set(0,-.86,-.05),r.add(l);let c=new q(new We(.11,.09),this.M.inlet);c.position.set(0,-.86,-.205),c.rotation.y=Math.PI,r.add(c),r.position.copy(Ct(e,i+.88,n)),this.group.add(r),this.probeMeshes.push({g:r,base:r.position.clone()})}this.tankDoors=[];for(let t of nt.doors){let e=t.y<0?-1:1,n=Math.abs(t.y),i=t.s-nt.doorSize.len/2,r=t.s+nt.doorSize.len/2,o=n+nt.doorSize.wid/2,a=(p,v)=>je(p)+v*Math.tan(di(p))-.006,l=Ct(i,a(i,o),e*o),c=Ct(r,a(r,o),e*o),h=new Us(this.group,l,c),u=new Gt(nt.doorSize.wid,.025,nt.doorSize.len),d=di(t.s);u.rotateZ(-e*d);let f=Ct(t.s,a(t.s,n)-.008,e*n);u.translate(f.x,f.y,f.z),h.add(new q(u,this.M.red)),h.side=e,this.tankDoors.push(h)}}_lights(){let t=hs(64,{power:2.5}),e=(u,d)=>{let f=new fr({map:t,color:u,transparent:!0,depthWrite:!1,blending:Rs}),p=new lo(f);return p.scale.setScalar(d),p.userData.noShadow=!0,p.renderOrder=12,p},n=u=>new q(new mn(.05,8,6),new Qe({color:u})),i=nt.wing,r=Ct(i.sLE+.45,i.h+.08,-(i.halfSpan+.06)),o=Ct(i.sLE+.45,i.h+.08,i.halfSpan+.06),a=Ct(19.85,3,0);this.lights={navL:e(16722458,1.1),navR:e(2293589,1.1),tail:e(16777215,.9),beaconT:e(16719888,2.2),beaconB:e(16719888,2.2),strobeL:e(16777215,3.2),strobeR:e(16777215,3.2)},this.lights.navL.position.copy(r),this.lights.navR.position.copy(o),this.lights.tail.position.copy(a),this.lights.beaconT.position.copy(Ct(11.2,3.62,0)),this.lights.beaconB.position.copy(Ct(11.5,je(11.5)-.06,0)),this.lights.strobeL.position.copy(r).add(new D(0,0,.5)),this.lights.strobeR.position.copy(o).add(new D(0,0,.5));for(let u in this.lights)this.group.add(this.lights[u]);let l=n(16724e3);l.position.copy(r),this.group.add(l);let c=n(3211104);c.position.copy(o),this.group.add(c);let h=n(16719888);h.position.copy(this.lights.beaconT.position),this.group.add(h),this.landingLights=[];for(let u of[-1,1]){let d=Ct(i.sLE+.02,i.h+.02,u*2.2),f=new q(new Mn(.11,14),new Qe({color:7829367}));f.position.copy(d).add(new D(0,0,-.02)),f.rotation.y=Math.PI,this.group.add(f);let p=new Lo(16774880,0,900,.22,.5,1.5);p.position.copy(d),p.target.position.copy(d).add(new D(u*2,-12,-100)),this.group.add(p,p.target);let v=e(16774365,2.5);v.position.copy(d).add(new D(0,0,-.1)),v.visible=!1,this.group.add(v),this.landingLights.push({lamp:f,spot:p,glow:v})}}_details(){let t=this.group;for(let o of[-1,1]){let a=Ct(1.25,2.05,o*1.06),l=Ct(.85,2.05,o*1.06);t.add(new q(Cn(a,l,.018,.012,6),this.M.chrome));let c=new q(Cn(Ct(1.3,2.05,o*1),a,.03,.02,6),this.M.gray);t.add(c)}let e=(o,a,l,c=0,h=.32,u=this.M.white)=>{let d=new q(new Gt(.015,h,.22),u);d.geometry.translate(0,h/2,0),d.position.copy(Ct(o,a,l)),d.rotation.x=-.35,d.rotation.z=c,t.add(d)};e(4.6,He(4.6),0),e(12.4,He(12.4),0,0,.26),e(13.6,He(13.6),.3,.2,.18,this.M.black),e(6.2,je(6.2)+.02,0,Math.PI,.22,this.M.black),t.add(new q(Cn(Ct(3.9,He(3.9),0),Ct(4.3,He(3.9)+.75,0),.012,.006,5),this.M.black));let n=new uo(new xe().setFromPoints([Ct(4.8,He(4.8)+.05,0),Ct(16.9,7.6,0)]),new mr({color:1118481}));t.add(n);for(let o of[-1,1]){let a=Ct(1.24,He(1.24)+.01,o*.55),l=Ct(1.62,He(1.62)+.02,o*.38);t.add(new q(Cn(a,l,.007,.006,5),this.M.black))}for(let o of[-1,1]){let a=new q(new Gt(.28,.12,.5),this.M.darkMetal);a.position.copy(Ct(11.25,He(11.25)-.02,o*.55)),t.add(a)}this.overflowVents=[Ct(11.3,He(11.3)+.08,-.55),Ct(11.3,He(11.3)+.08,.55)];let i=new q(new re(.14,.14,.02,14),this.M.darkMetal);i.position.copy(Ct(.35,He(.35)-.04,0)),i.rotation.x=-.6,t.add(i);let r=new q(new Gt(.03,.04,.18),this.M.chrome);r.position.copy(Ct(4.3,2.1,-1.31)),t.add(r)}get emitters(){return{doors:nt.doors.map(t=>Ct(t.s,je(t.s)-.05,t.y)),probes:this.probeMeshes.map(t=>t.g),overflow:this.overflowVents,props:this.props.map(t=>t.grp.position),exhausts:[-1,1].map(t=>Ct(6.85,4.62,t*(nt.engine.y+.82)))}}update(t,e,n,i={}){this.time+=t;let r=this.time,o=n.surf;for(let _ of this.flaps)_.set(_.side*e.flapPos*Et);for(let _ of this.ailerons)_.set(-o.ail*Et);for(let _ of this.elevators)_.set(_.side*(-o.elev*Et)*1);this.rudder.set(o.rud*Et);for(let _=0;_<2;_++){let x=this.props[_],M=e.engines[_],b=M.np/100*ee.propRPM*(M.running?1:M.np/100),w=b/60*Math.PI*2,y=J((b-250)/600,0,1);x.angle-=Math.min(w,2*Math.PI*4.5)*t*(y>.95?.6:1),x.spin.rotation.z=x.angle,x.disc.material.opacity=y*.6,x.disc.rotation.z=-r*2.2,x.bladeMat.opacity=1-y*.9,this.M.bladeTip.opacity=1-y*.9;let E=14+M.pf*22+J(n.out.tas/80,0,1)*12;M.reverse>.05&&(E=-12),!M.running&&M.feathered&&(E=84),x.beta=hi(x.beta??E,E,J(t*3,0,1));for(let A of x.blades)A.rotation.y=-x.beta*Et}let a=e.gearPos,l=a*a*(3-2*a);for(let _=0;_<2;_++){let x=this.mainGear[_];x.leg.rotation.z=x.side*(1-l)*112*Et;let M=n.out.gearCompress[1+(x.side>0?1:0)]||0;x.slider.position.copy(x.dir).multiplyScalar(-M*.9),x.wheel.rotation.x-=(n.out.wheelSpeed[1+(x.side>0?1:0)]||0)*t}let c=this.noseGear,h=J((a-.1)/.8,0,1),u=h*h*(3-2*h);c.leg.rotation.x=(1-u)*102*Et,c.slider.position.y=(n.out.gearCompress[0]||0)*.9,c.steer.rotation.y=-(e.noseSteer||0)*(a>.98?1:0);for(let _ of c.wheels)_.rotation.x-=(n.out.wheelSpeed[0]||0)*t*1.5;let d=J(a<.02?0:1,0,1);c.doorAnim=hi(c.doorAnim||0,d,J(t*3,0,1));for(let _ of c.doors)_.set(_.side*c.doorAnim*80*Et);for(let _ of this.probeMeshes)_.g.position.copy(_.base),_.g.position.y-=.88*e.probePos,_.g.position.z+=.12*e.probePos;for(let _=0;_<4;_++){let x=this.tankDoors[_];x.set(x.side*e.doorOpen[_]*82*Et)}let f=this.lights,p=e.lights;f.navL.visible=f.navR.visible=f.tail.visible=p.nav;let v=r*1.1%1,m=p.beacon?Math.max(0,1-Math.abs(v-.1)*8):0;f.beaconT.material.opacity=m,f.beaconB.material.opacity=p.beacon?Math.max(0,1-Math.abs((r*1.1+.5)%1-.1)*8):0;let g=r%1.25,S=p.strobe&&(g<.05||g>.16&&g<.2)?1:0;f.strobeL.material.opacity=f.strobeR.material.opacity=S;for(let _ of this.landingLights)_.spot.intensity=p.landing?900:0,_.glow.visible=p.landing,_.lamp.material.color.setHex(p.landing?16777215:6710886)}setInterior(t){this.M.glass.opacity=.45,this.glass&&(this.glass.visible=!t)}};var Wn=256,Pc=8,_n={asi:s=>{let t=J(s,0,260);return t<40?-160+t/40*20:-140+(t-40)/210*300},radalt:s=>{let t=J(s,0,2500);return t<=500?-150+t/500*180:30+(t-500)/2e3*120},torque:s=>-135+J(s,0,120)/120*270,itt:s=>-135+J(s,0,1e3)/1e3*270,nh:s=>-135+J(s,0,110)/110*270,np:s=>-135+J(s,0,1300)/1300*270,ff:s=>-135+J(s,0,800)/800*270,flaps:s=>-60+J(s,0,25)/25*150,fuel:s=>-120+J(s,0,2400)/2400*240,hyd:s=>-120+J(s,0,4e3)/4e3*240,g:s=>-90+(J(s,-2,4)+2)/6*270-45,trim:s=>J(s,-1,1)*70};_n.vsi=s=>{let t=Math.sign(s),e=Math.abs(s),n;return e<=1e3?n=e/1e3*50:e<=2e3?n=50+(e-1e3)/1e3*40:n=90+(J(e,2e3,6e3)-2e3)/4e3*80,-90+t*n};function Xn(s,t,e,n){let i=(n-90)*Et;return[s+Math.cos(i)*e,t+Math.sin(i)*e]}function Nu(s,t,e,n,i){s.fillStyle="#121314",s.beginPath(),s.arc(t,e,n,0,Math.PI*2),s.fill();let r=i.map;for(let o of i.arcs||[]){s.strokeStyle=o.color,s.lineWidth=o.w||n*.07,s.beginPath();let a=(r(o.from)-90)*Et,l=(r(o.to)-90)*Et;s.arc(t,e,n*(o.r||.86),Math.min(a,l),Math.max(a,l)),s.stroke()}s.strokeStyle="#e8e8e8";for(let o of i.ticks||[]){let[a,l,c]=o,h=r(a),[u,d]=Xn(t,e,n*.93,h),[f,p]=Xn(t,e,n*(.93-l),h);s.lineWidth=c,s.beginPath(),s.moveTo(u,d),s.lineTo(f,p),s.stroke()}s.fillStyle="#f0f0f0",s.textAlign="center",s.textBaseline="middle",s.font=`bold ${Math.round(n*(i.numSize||.2))}px Arial`;for(let[o,a]of i.labels||[]){let[l,c]=Xn(t,e,n*(i.numR||.66),r(o));s.fillText(a,l,c)}if(i.title&&(s.font=`bold ${Math.round(n*.13)}px Arial`,s.fillStyle="#d8d8d8",s.fillText(i.title,t,e+n*(i.titleY||.38))),i.unit&&(s.font=`${Math.round(n*.1)}px Arial`,s.fillStyle="#bdbdbd",s.fillText(i.unit,t,e-n*.34)),i.redline!==void 0){let o=r(i.redline),[a,l]=Xn(t,e,n*.97,o),[c,h]=Xn(t,e,n*.7,o);s.strokeStyle="#ff2a1a",s.lineWidth=n*.05,s.beginPath(),s.moveTo(a,l),s.lineTo(c,h),s.stroke()}}function Be(s,t,e,n,i){let r=[];for(let o=s;o<=t+1e-6;o+=e)r.push([o,n,i]);return r}var fp={asi:{map:_n.asi,ticks:[...Be(40,250,10,.1,2.5),...Be(40,250,5,.05,1.5)],labels:[[40,"40"],[60,"60"],[80,"80"],[100,"100"],[120,"120"],[140,"140"],[160,"160"],[180,"180"],[200,"200"],[220,"220"],[240,"240"]],arcs:[{from:66,to:125,color:"#f2f2f2",r:.78,w:6},{from:85,to:200,color:"#2fbf3a"}],redline:200,title:"NODI",numSize:.15},vsi:{map:_n.vsi,ticks:[...Be(-2e3,2e3,500,.09,2.5),...Be(-6e3,6e3,1e3,.12,3),...Be(-1e3,1e3,100,.05,1.5)],labels:[[0,"0"],[1e3,"1"],[2e3,"2"],[4e3,"4"],[6e3,"6"],[-1e3,"1"],[-2e3,"2"],[-4e3,"4"],[-6e3,"6"]],title:"VERT SPEED",unit:"x1000 FT/MIN",numSize:.2,titleY:.3},radalt:{map:_n.radalt,ticks:[...Be(0,500,50,.08,2),...Be(0,500,100,.13,3),...Be(500,2500,500,.13,3)],labels:[[0,"0"],[100,"1"],[200,"2"],[300,"3"],[400,"4"],[500,"5"],[1e3,"10"],[2e3,"20"]],arcs:[{from:0,to:200,color:"#ffb000",r:.8,w:5}],title:"RAD ALT",unit:"x100 FT",numSize:.17},torque:{map:_n.torque,ticks:[...Be(0,120,10,.1,2),...Be(0,120,5,.05,1.5)],labels:[[0,"0"],[20,"2"],[40,"4"],[60,"6"],[80,"8"],[100,"10"],[120,"12"]],arcs:[{from:0,to:100,color:"#2fbf3a"}],redline:106,title:"TORQUE %",numSize:.2},itt:{map:_n.itt,ticks:[...Be(0,1e3,100,.1,2),...Be(0,1e3,50,.05,1.5)],labels:[[0,"0"],[200,"2"],[400,"4"],[600,"6"],[800,"8"],[1e3,"10"]],arcs:[{from:300,to:765,color:"#2fbf3a"},{from:765,to:800,color:"#ffb000"}],redline:800,title:"ITT \xB0C",numSize:.2},nh:{map:_n.nh,ticks:[...Be(0,110,10,.1,2),...Be(0,110,5,.05,1.5)],labels:[[0,"0"],[20,"20"],[40,"40"],[60,"60"],[80,"80"],[100,"100"]],arcs:[{from:66,to:101,color:"#2fbf3a"}],redline:103,title:"NH %",numSize:.16},np:{map:_n.np,ticks:[...Be(0,1300,100,.1,2)],labels:[[0,"0"],[400,"4"],[800,"8"],[1200,"12"]],arcs:[{from:900,to:1212,color:"#2fbf3a"}],redline:1236,title:"NP RPM",unit:"x100",numSize:.2},ff:{map:_n.ff,ticks:[...Be(0,800,100,.1,2),...Be(0,800,50,.05,1.5)],labels:[[0,"0"],[200,"2"],[400,"4"],[600,"6"],[800,"8"]],title:"FUEL FLOW",unit:"x100 KG/H",numSize:.2},flaps:{map:_n.flaps,ticks:[[0,.15,3],[10,.15,3],[15,.15,3],[25,.15,3],...Be(0,25,5,.07,1.5)],labels:[[0,"0"],[10,"10"],[15,"15"],[25,"25"]],title:"FLAPS",numSize:.2},fuel:{map:_n.fuel,ticks:[...Be(0,2400,400,.12,2.5),...Be(0,2400,200,.06,1.5)],labels:[[0,"0"],[800,"8"],[1600,"16"],[2400,"24"]],arcs:[{from:0,to:400,color:"#ffb000"}],title:"FUEL",unit:"x100 KG",numSize:.18},hyd:{map:_n.hyd,ticks:[...Be(0,4e3,500,.1,2.5)],labels:[[0,"0"],[1e3,"1"],[2e3,"2"],[3e3,"3"],[4e3,"4"]],arcs:[{from:2700,to:3200,color:"#2fbf3a"}],title:"HYD PSI",unit:"x1000",numSize:.18},g:{map:_n.g,ticks:[...Be(-2,4,1,.13,3),...Be(-2,4,.5,.07,1.5)],labels:[[-2,"-2"],[-1,"-1"],[0,"0"],[1,"1"],[2,"2"],[3,"3"],[4,"4"]],arcs:[{from:3.25,to:4,color:"#ff2a1a"}],title:"G",numSize:.18}},Ic=class{constructor(){let t=document.createElement("canvas");t.width=t.height=Wn*Pc,this.canvas=t,this.g=t.getContext("2d"),this.cells={},this.next=0;let e=this.g;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);for(let n of Object.keys(fp))this._cell(n,(i,r,o,a)=>Nu(i,r,o,a,fp[n]));this._cell("alt",(n,i,r,o)=>{Nu(n,i,r,o,{map:a=>a*36,ticks:[...Be(0,9.9,1,.13,3),...Be(0,9.9,.2,.06,1.5)],labels:Array.from({length:10},(a,l)=>[l,String(l)]),numSize:.22,numR:.7}),n.fillStyle="#d8d8d8",n.font=`bold ${o*.11}px Arial`,n.fillText("ALT",i,r-o*.32),n.fillText("FEET",i,r+o*.25),n.fillStyle="#000",n.fillRect(i+o*.22,r-o*.08,o*.4,o*.16),n.fillStyle="#fff",n.font=`${o*.12}px monospace`,n.fillText("1013",i+o*.42,r+o*.005)}),this._cell("clock",(n,i,r,o)=>Nu(n,i,r,o,{map:a=>a*30,ticks:[...Be(0,11.9,1,.14,3),...Be(0,11.9,.2,.05,1)],labels:[[0,"12"],[3,"3"],[6,"6"],[9,"9"]],numSize:.24})),this._cell("hsiCard",(n,i,r,o)=>{n.fillStyle="#121314",n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="#eee",n.fillStyle="#eee",n.textAlign="center",n.textBaseline="middle";for(let l=0;l<360;l+=5){let c=l%30===0?.14:l%10===0?.1:.05,[h,u]=Xn(i,r,o*.95,l),[d,f]=Xn(i,r,o*(.95-c),l);n.lineWidth=l%10===0?2.5:1.5,n.beginPath(),n.moveTo(h,u),n.lineTo(d,f),n.stroke()}let a={0:"N",90:"E",180:"S",270:"W"};for(let l=0;l<360;l+=30){n.save();let[c,h]=Xn(i,r,o*.68,l);n.translate(c,h),n.rotate(l*Et),n.font=`bold ${o*(a[l]?.2:.16)}px Arial`,n.fillStyle=a[l]?"#ffd040":"#eee",n.fillText(a[l]||String(l/10),0,0),n.restore()}}),this._cell("hsiOverlay",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o),n.fillStyle="#ff8c00",n.beginPath(),n.moveTo(i,r-o*.98),n.lineTo(i-o*.06,r-o*.84),n.lineTo(i+o*.06,r-o*.84),n.fill(),n.fillStyle="#f2f2f2",n.fillRect(i-o*.03,r-o*.25,o*.06,o*.5),n.fillRect(i-o*.28,r-o*.06,o*.56,o*.06),n.fillRect(i-o*.12,r+o*.18,o*.24,o*.05)},!0),this._cell("adiOverlay",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o),n.strokeStyle="#f2f2f2";for(let l of[-60,-45,-30,-20,-10,0,10,20,30,45,60]){let c=Math.abs(l)%30===0?.12:.07,[h,u]=Xn(i,r,o*.97,l),[d,f]=Xn(i,r,o*(.97-c),l);n.lineWidth=3,n.beginPath(),n.moveTo(h,u),n.lineTo(d,f),n.stroke()}n.fillStyle="#ffae00",n.strokeStyle="#000",n.lineWidth=2;let a=l=>{n.beginPath(),n.moveTo(i+l*o*.12,r),n.lineTo(i+l*o*.55,r),n.lineTo(i+l*o*.55,r+o*.05),n.lineTo(i+l*o*.18,r+o*.05),n.lineTo(i+l*o*.12,r+o*.12),n.closePath(),n.fill(),n.stroke()};a(-1),a(1),n.fillRect(i-o*.03,r-o*.03,o*.06,o*.06),n.beginPath(),n.moveTo(i,r-o*.83),n.lineTo(i-o*.06,r-o*.72),n.lineTo(i+o*.06,r-o*.72),n.fill()},!0),this._cell("tcFace",(n,i,r,o)=>{n.fillStyle="#121314",n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="#eee",n.lineWidth=4;for(let a of[-90,-70,70,90]){let[l,c]=Xn(i,r,o*.92,a),[h,u]=Xn(i,r,o*.75,a);n.beginPath(),n.moveTo(l,c),n.lineTo(h,u),n.stroke()}n.fillStyle="#eee",n.font=`bold ${o*.16}px Arial`,n.textAlign="center",n.fillText("L",i-o*.72,r+o*.35),n.fillText("R",i+o*.72,r+o*.35),n.font=`${o*.1}px Arial`,n.fillText("2 MIN",i,r+o*.72),n.fillText("TURN COORDINATOR",i,r-o*.45),n.strokeStyle="#ddd",n.lineWidth=o*.16,n.beginPath(),n.arc(i,r-o*.4,o*.9,Math.PI*.36,Math.PI*.64),n.stroke(),n.strokeStyle="#111",n.lineWidth=2;for(let a of[-1,1])n.beginPath(),n.moveTo(i+a*o*.09,r+o*.38),n.lineTo(i+a*o*.09,r+o*.58),n.stroke()}),this._cell("tcPlane",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o),n.fillStyle="#f2f2f2",n.fillRect(i-o*.7,r-o*.03,o*1.4,o*.07),n.beginPath(),n.arc(i,r,o*.1,0,Math.PI*2),n.fill(),n.fillRect(i-o*.025,r-o*.25,o*.05,o*.2)},!0),this._cell("bezel",(n,i,r,o)=>{n.clearRect(i-o,r-o,2*o,2*o);let a=n.createRadialGradient(i,r,o*.82,i,r,o);a.addColorStop(0,"#000"),a.addColorStop(.5,"#2a2b2d"),a.addColorStop(1,"#0c0c0d"),n.fillStyle=a,n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.arc(i,r,o*.86,0,Math.PI*2,!0),n.fill(),n.fillStyle="#555";for(let l of[45,135,225,315]){let[c,h]=Xn(i,r,o*.93,l);n.beginPath(),n.arc(c,h,o*.035,0,Math.PI*2),n.fill()}},!0),this.texture=new an(t),this.texture.colorSpace=De,this.texture.anisotropy=8}_cell(t,e,n=!1){let i=this.next++,r=i%Pc*Wn,o=Math.floor(i/Pc)*Wn;n&&this.g.clearRect(r,o,Wn,Wn),this.g.save(),this.g.beginPath(),this.g.rect(r,o,Wn,Wn),this.g.clip(),e(this.g,r+Wn/2,o+Wn/2,Wn/2-2),this.g.restore(),this.cells[t]={x:r,y:o}}disc(t,e,n=40){let i=this.cells[t],r=new Mn(e,n),o=r.attributes.uv,a=Wn*Pc;for(let l=0;l<o.count;l++){let c=o.getX(l),h=o.getY(l);o.setXY(l,(i.x+c*Wn)/a,1-(i.y+(1-h)*Wn)/a)}return r}};function pp(){return new Ye({uniforms:{pitch:{value:0},roll:{value:0}},vertexShader:`varying vec2 vUv;
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
      }`})}var fi=class{constructor(t,e,n){this.canvas=document.createElement("canvas"),this.canvas.width=t,this.canvas.height=e,this.g=this.canvas.getContext("2d"),this.draw=n,this.texture=new an(this.canvas),this.texture.colorSpace=De,this.last=""}update(t){let e=JSON.stringify(t);e!==this.last&&(this.last=e,this.draw(this.g,this.canvas.width,this.canvas.height,t),this.texture.needsUpdate=!0)}};var hy=[["STALL","w","stall"],["OVERSPEED","w","overspeed"],[`GEAR DN
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
FAIL`,"w","eng2"],["REV","g","rev"]];function mp(s,t,e,n){s.fillStyle="#0c0c0c",s.fillRect(0,0,t,e);let i=4,r=4,o=t/i,a=e/r;hy.forEach(([l,c,h],u)=>{let d=u%i*o,f=Math.floor(u/i)*a,p=!!n[h],v=c==="w"?"#ff2a1a":c==="c"?"#ffb000":"#38e048",m=c==="w"?"#2a0c0a":c==="c"?"#2a2008":"#0c240e";s.fillStyle=p?v:m,s.fillRect(d+3,f+3,o-6,a-6),s.fillStyle=p?"#111":"#444",s.font=`bold ${Math.round(a*.24)}px Arial`,s.textAlign="center",s.textBaseline="middle";let g=l.split(`
`);g.forEach((S,_)=>s.fillText(S,d+o/2,f+a/2+(_-(g.length-1)/2)*a*.28))})}var Un=(s,t=!0)=>`${t?"bold ":""}${s}px "Arial Narrow", Arial, sans-serif`,On=s=>`bold ${s}px "Courier New", monospace`,Fr="#3fe0ff",qn="#3cff5a",vn="#f2f2f2",Yn="#ffb21a",Lc="#ff3a2a",Fu="#ff5cff";function Ur(s,t,e){s.fillStyle="#030405",s.fillRect(0,0,t,e)}function gp(s,t,e,n){Ur(s,t,e);let i=t/2,r=e*.5,o=e*.042;s.save(),s.beginPath(),s.rect(8,8,t-16,e-16),s.clip(),s.translate(i,r),s.rotate(-n.roll*Et),s.translate(0,n.pitch*o),s.fillStyle="#1e8fe0",s.fillRect(-t*2,-e*4,t*4,e*4),s.fillStyle="#9a5a26",s.fillRect(-t*2,0,t*4,e*4),s.strokeStyle=vn,s.lineWidth=3,s.beginPath(),s.moveTo(-t*2,0),s.lineTo(t*2,0),s.stroke(),s.fillStyle=vn,s.font=Un(e*.05),s.textBaseline="middle";for(let c=-30;c<=30;c+=2.5){if(c===0)continue;let h=-c*o;if(Math.abs(c-n.pitch)>16)continue;let u=c%10===0,d=c%5===0,f=u?t*.22:d?t*.12:t*.06;s.lineWidth=2.5,s.beginPath(),s.moveTo(-f/2,h),s.lineTo(f/2,h),s.stroke(),u&&(s.textAlign="right",s.fillText(String(Math.abs(c)),-f/2-6,h),s.textAlign="left",s.fillText(String(Math.abs(c)),f/2+6,h))}s.restore();let a=e*.4;s.save(),s.translate(i,r),s.strokeStyle=vn,s.fillStyle=vn,s.lineWidth=3,s.beginPath(),s.arc(0,0,a,-Math.PI/2-60*Et,-Math.PI/2+60*Et),s.stroke();for(let c of[-60,-45,-30,-20,-10,10,20,30,45,60]){let h=a+(Math.abs(c)%30===0?e*.05:e*.028),u=(c-90)*Et;s.beginPath(),s.moveTo(Math.cos(u)*a,Math.sin(u)*a),s.lineTo(Math.cos(u)*h,Math.sin(u)*h),s.stroke()}s.beginPath(),s.moveTo(0,-a),s.lineTo(-10,-a-16),s.lineTo(10,-a-16),s.closePath(),s.fill(),s.rotate(-n.roll*Et),s.fillStyle=Yn,s.beginPath(),s.moveTo(0,-a+2),s.lineTo(-11,-a+20),s.lineTo(11,-a+20),s.closePath(),s.fill();let l=J(n.slip,-1,1)*22;s.fillRect(-11+l,-a+23,22,6),s.restore(),s.fillStyle="#111",s.strokeStyle=Yn,s.lineWidth=3;for(let c of[-1,1])s.beginPath(),s.moveTo(i+c*t*.36,r-4),s.lineTo(i+c*t*.16,r-4),s.lineTo(i+c*t*.16,r+16),s.lineTo(i+c*t*.13,r+16),s.lineTo(i+c*t*.13,r+4),s.lineTo(i+c*t*.36,r+4),s.closePath(),s.fill(),s.stroke();s.fillRect(i-5,r-5,10,10),s.strokeRect(i-5,r-5,10,10),s.font=On(e*.065),s.textBaseline="alphabetic",s.textAlign="right",n.ra<2500&&(s.fillStyle=n.ra<200?Yn:qn,s.fillText(String(Math.round(n.ra)),t-18,e-18)),s.textAlign="left",s.fillStyle=Fr,s.fillText(String(Math.round(n.ias))+"KT",18,e-18),s.fillStyle=n.dh?Yn:"rgba(0,0,0,0)",s.fillText(n.dh?"DH":"",18,40),s.fillStyle=qn,s.textAlign="right",s.font=On(e*.05),s.fillText("ATT",t-18,40)}function xp(s,t,e,n){Ur(s,t,e);let i=t/2,r=e*.56,o=e*.38;s.save(),s.translate(i,r),s.rotate(-n.hdg*Et),s.strokeStyle=vn,s.fillStyle=vn,s.textAlign="center",s.textBaseline="middle";for(let a=0;a<360;a+=5){let l=(a-90)*Et,c=a%10===0?e*.05:e*.028;if(s.lineWidth=a%10===0?3:2,s.beginPath(),s.moveTo(Math.cos(l)*o,Math.sin(l)*o),s.lineTo(Math.cos(l)*(o-c),Math.sin(l)*(o-c)),s.stroke(),a%30===0){s.save(),s.rotate(a*Et),s.font=Un(e*(a%90===0?.075:.06));let h={0:"N",90:"E",180:"S",270:"W"}[a]||String(a/10);s.fillText(h,0,-o+e*.1),s.restore()}}s.rotate(n.crs*Et),s.strokeStyle=Fu,s.fillStyle=Fu,s.lineWidth=5,s.beginPath(),s.moveTo(0,-o+e*.14),s.lineTo(0,-o*.35),s.moveTo(0,o*.35),s.lineTo(0,o-e*.14),s.stroke(),s.beginPath(),s.moveTo(0,-o+e*.12),s.lineTo(-10,-o+e*.17),s.lineTo(10,-o+e*.17),s.closePath(),s.fill(),s.beginPath(),s.moveTo(n.dev*o*.4,-o*.3),s.lineTo(n.dev*o*.4,o*.3),s.stroke(),s.fillStyle=vn;for(let a of[-2,-1,1,2])s.beginPath(),s.arc(a*o*.2,0,5,0,Math.PI*2),s.fill();s.restore(),s.save(),s.translate(i,r),s.rotate((n.bug-n.hdg)*Et),s.fillStyle=Fr,s.fillRect(-12,-o-2,24,10),s.restore(),s.strokeStyle=Yn,s.lineWidth=4,s.beginPath(),s.moveTo(i,r-26),s.lineTo(i,r+26),s.moveTo(i-22,r-4),s.lineTo(i+22,r-4),s.moveTo(i-10,r+20),s.lineTo(i+10,r+20),s.stroke(),s.fillStyle=Yn,s.beginPath(),s.moveTo(i,r-o+2),s.lineTo(i-10,r-o-16),s.lineTo(i+10,r-o-16),s.closePath(),s.fill(),s.fillStyle="#000",s.strokeStyle=vn,s.lineWidth=2,s.fillRect(i-44,6,88,e*.1),s.strokeRect(i-44,6,88,e*.1),s.fillStyle=qn,s.font=On(e*.075),s.textAlign="center",s.textBaseline="middle",s.fillText(String(Math.round(n.hdg)%360).padStart(3,"0"),i,6+e*.05),s.font=On(e*.05),s.textAlign="left",s.fillStyle=Fr,s.fillText("HDG "+String(Math.round(n.bug)).padStart(3,"0"),14,22),s.fillStyle=Fu,s.fillText("CRS "+String(Math.round(n.crs)).padStart(3,"0"),14,e-22),s.textAlign="right",s.fillStyle=qn,s.fillText("GS "+Math.round(n.gs),t-14,22),s.fillText("VOR1",t-14,e-22)}function _p(s,t,e,n,i,r,o,a=null){s.strokeStyle="#9aa",s.lineWidth=2,s.strokeRect(t,e,n,i);let l=J(r,0,1);s.fillStyle=o,s.fillRect(t+3,e+i-3-(i-6)*l,n-6,(i-6)*l),a!==null&&(s.fillStyle=Lc,s.fillRect(t-4,e+i*(1-a)-2,n+8,4))}function Uu(s,t,e,n,i,r,o,a,l,c,h,u){s.fillStyle=vn,s.font=Un(u*.07),s.textAlign="center",s.fillText(r,t+n*1.6,e-u*.05);for(let d=0;d<2;d++){let f=t+d*n*2.2,p=o[d]/a,v=p>l;_p(s,f,e,n,i,p,v?Lc:qn,l),s.fillStyle=v?Lc:qn,s.font=On(u*.065),s.fillText(c(o[d]),f+n/2,e+i+u*.075)}}function vp(s,t,e,n){Ur(s,t,e);let i=t*.055,r=e*.58,o=e*.17;Uu(s,t*.05,o,i,r,"TRQ %",n.trq,120,100/120,a=>String(Math.round(a)),t,e),Uu(s,t*.375,o,i,r,"ITT \xB0C",n.itt,1e3,800/1e3,a=>String(Math.round(a)),t,e),Uu(s,t*.7,o,i,r,"NP RPM",n.np,1300,1212/1300,a=>String(Math.round(a)),t,e),s.textAlign="left",s.font=Un(e*.06),s.fillStyle=Fr,s.fillText("1",t*.035,e*.97),s.textAlign="right",s.fillText("2",t*.965,e*.97),n.rev&&(s.textAlign="center",s.fillStyle=Yn,s.fillText("BETA / REV",t/2,e*.97))}function yp(s,t,e,n){Ur(s,t,e),s.textBaseline="middle",[["NH %",n.nh,r=>r.toFixed(1),r=>r>103],["FF KG/H",n.ff,r=>String(Math.round(r)),()=>!1],["OIL PSI",n.oilP,r=>String(Math.round(r)),r=>r<40],["OIL \xB0C",n.oilT,r=>String(Math.round(r)),r=>r>125]].forEach(([r,o,a,l],c)=>{let h=e*(.16+c*.225);s.font=Un(e*.11),s.textAlign="center",s.fillStyle=vn,s.fillText(r,t/2,h),s.font=On(e*.13);for(let u=0;u<2;u++)s.fillStyle=l(o[u])?Yn:qn,s.textAlign=u===0?"left":"right",s.fillText(a(o[u]),u===0?t*.04:t*.96,h)})}function Mp(s,t,e,n){Ur(s,t,e),s.textBaseline="middle",s.textAlign="center",s.fillStyle=vn,s.font=Un(e*.07),s.fillText("FUEL KG",t*.2,e*.09);for(let a=0;a<2;a++){let l=t*(.07+a*.16);_p(s,l,e*.16,t*.07,e*.5,n.fuel[a]/2400,n.fuel[a]<300?Yn:qn),s.fillStyle=n.fuel[a]<300?Yn:qn,s.font=On(e*.06),s.fillText(String(Math.round(n.fuel[a])),l+t*.035,e*.74)}s.fillStyle=Fr,s.font=On(e*.065),s.fillText("TOT "+Math.round(n.fuel[0]+n.fuel[1]),t*.2,e*.88),s.fillStyle=vn,s.font=Un(e*.07),s.fillText("HYD PSI",t*.52,e*.09),["1","2"].forEach((a,l)=>{s.fillStyle=n.hyd>2500?qn:Yn,s.font=On(e*.075),s.fillText(String(Math.round(n.hyd/10)*10),t*.52,e*(.24+l*.13)),s.fillStyle=vn,s.font=Un(e*.05),s.fillText("SYS "+a,t*.52,e*(.31+l*.13))}),s.fillStyle=vn,s.font=Un(e*.06),s.fillText("PITCH TRIM",t*.52,e*.62),s.strokeStyle="#9aa",s.lineWidth=2,s.strokeRect(t*.42,e*.68,t*.2,e*.06),s.fillStyle=qn,s.fillRect(t*.52+J(n.trim,-1,1)*t*.095-4,e*.665,8,e*.09),s.font=Un(e*.05),s.fillStyle=vn,s.fillText("DN",t*.4,e*.82),s.fillText("UP",t*.64,e*.82),s.font=Un(e*.07),s.fillText("FLAP",t*.84,e*.09);let i=t*.76,r=e*.22;s.strokeStyle="#9aa",s.beginPath(),s.moveTo(i,r),s.lineTo(i,r+e*.5),s.stroke(),s.font=Un(e*.05),s.textAlign="left";for(let a of[0,10,15,25]){let l=r+a/25*e*.5;s.fillStyle=vn,s.fillRect(i,l-1,12,2),s.fillText(String(a),i+18,l)}s.fillStyle=n.flapMoving?Yn:qn;let o=r+J(n.flap,0,25)/25*e*.5;s.beginPath(),s.moveTo(i-4,o),s.lineTo(i-22,o-9),s.lineTo(i-22,o+9),s.closePath(),s.fill(),s.textAlign="center",s.font=On(e*.075),s.fillText(String(Math.round(n.flap)),t*.84,e*.86)}function Sp(s,t,e,n){Ur(s,t,e),s.textBaseline="middle",s.textAlign="center";for(let i=0;i<4;i++){let r=t*(.04+i*.105),o=t*.075,a=n.tanks[i];s.strokeStyle="#6a8",s.lineWidth=2,s.strokeRect(r,e*.2,o,e*.6),s.fillStyle=n.doors[i]?Lc:n.foam?"#9df":"#2fd04a",s.fillRect(r+3,e*.2+3+(e*.6-6)*(1-a),o-6,(e*.6-6)*a),s.fillStyle=vn,s.font=Un(e*.14),s.fillText(String(i+1),r+o/2,e*.1)}s.fillStyle=n.foam?"#9df":qn,s.font=On(e*.36),s.textAlign="right",s.fillText(String(Math.round(n.total)),t*.86,e*.42),s.font=Un(e*.16),s.textAlign="left",s.fillStyle=vn,s.fillText("LIT",t*.88,e*.42),s.font=On(e*.15),s.textAlign="left",s.fillStyle=n.scoop?Yn:"#2a5a32",s.fillText((n.scoop,"SCOOP"),t*.47,e*.82),s.fillStyle=n.foam?Fr:"#2a4a5a",s.fillText("FOAM "+(n.foam?n.foamPct+"%":"OFF"),t*.66,e*.82)}function bp(s,t,e,n){s.fillStyle="#100604",s.fillRect(0,0,t,e),s.fillStyle="#ff8a1a",s.shadowColor="#ff6a00",s.shadowBlur=8,s.font=On(e*.38),s.textBaseline="middle",s.textAlign="left",s.fillText(n.mode,t*.05,e*.32),s.textAlign="right",s.fillText(String(n.preset).padStart(3," ")+"%",t*.95,e*.32),s.font=On(e*.22),s.textAlign="left",s.fillText(n.armed?"ARM":"SAFE",t*.05,e*.76),s.shadowBlur=0;for(let i=0;i<4;i++){let r=t*(.42+i*.14);s.fillStyle=n.doors[i]?"#ff3a1a":"#3a1a0c",s.fillRect(r,e*.64,t*.1,e*.24)}}function ia(s){let e=288.15-.0065*Math.max(-500,Math.min(11e3,s)),n=101325*Math.pow(e/288.15,5.25588),i=n/(287.053*e);return{T:e,p:n,rho:i,a:Math.sqrt(1.4*287.053*e)}}var Os=[{id:"SALVO",label:"SALVO (4 porte)"},{id:"COPPIE",label:"2 + 2 porte"},{id:"SEQ",label:"SEQUENZA 1-2-3-4"},{id:"SINGOLA",label:"1 porta"}],wp=ee.waterCapacity/4,uy=wp/1e3/1.25,dy=.42,Dc=class{constructor(t){this.index=t,this.lever=0,this.reverseLever=0,this.reverse=0,this.running=!0,this.nh=70,this.np=100,this.pf=.06,this.shaftPower=0,this.torque=0,this.itt=500,this.ff=0,this.oilP=60,this.oilT=70,this.feathered=!1,this.fire=!1}update(t,e,n,i){if(!this.running){this.nh=Ne(this.nh,0,6,t),this.pf=0,this.np=Ne(this.np,this.feathered?0:20,15,t),this.shaftPower=0,this.torque=0,this.itt=Ne(this.itt,e+40,30,t),this.ff=0,this.oilP=Ne(this.oilP,0,20,t);return}let r=i?this.reverseLever:0;this.reverse=Ne(this.reverse,r,.8,t);let o=r>0?.05+.45*r:this.lever,a=.055+.945*J(o,0,1),l=68+32*Math.pow(a,.6),c=l>this.nh?6.5+.12*(this.nh-66):11;this.nh=Ne(this.nh,l,c,t),this.pf=J(Math.pow(J((this.nh-68)/32,0,1),1/.6),0,1);let h=J(1-(1-ia(n).rho/1.225)*.6,.5,1)*(1-Math.max(0,e-30)*.008);this.shaftPower=this.reverse>.02?0:this.pf*ee.enginePower*h,this.np=Ne(this.np,this.pf>.08||!i?100:86,12,t),this.torque=this.pf*h*100/(this.np/100),this.itt=Ne(this.itt,e+470+330*this.pf*(1+(1-h)*.6),120,t),this.ff=115+540*this.pf,this.oilP=Ne(this.oilP,55+10*this.pf,10,t),this.oilT=Ne(this.oilT,62+25*this.pf,.3,t)}},sa=class{constructor(){this.fuel=2300,this.tanks=[0,0,0,0],this.foamConc=ee.foamCapacity,this.foamMix=[0,0,0,0],this.foamArmed=!1,this.flapIndex=0,this.flapPos=0,this.gearDown=!0,this.gearPos=1,this.probesCmd=!1,this.probePos=0,this.doorOpen=[0,0,0,0],this.doorCmd=[!1,!1,!1,!1],this.doorEmptyTime=[0,0,0,0],this.outflow=[0,0,0,0],this.dropMode=0,this.dropQueue=[],this.scoopPreset=1,this.engines=[new Dc(0),new Dc(1)],this.elevTrim=0,this.ailTrim=.15,this.rudTrim=0,this.parkingBrake=!1,this.noseSteer=0,this.lights={nav:!0,beacon:!0,strobe:!0,landing:!1},this.events=[],this.warn={stall:!1,overspeed:!1,flapSpeed:!1,gearWater:!1,gearUpLand:!1,probeSpeed:!1,tanksFull:!1,lowFuel:!1,overweight:!1,master:!1,caution:!1},this.scoopedThisRun=0,this.totalDropped=0,this.overflowRate=0,this.time=0,this._wasScooping=!1,this._fullAnnounced=!1}emit(t,e,n="info"){this.events.push({type:t,text:e,level:n,t:this.time})}waterLiters(){return this.tanks[0]+this.tanks[1]+this.tanks[2]+this.tanks[3]}waterMass(){return this.waterLiters()*1+this.foamConc*1.05}totalMass(){return ee.emptyMass+this.fuel+this.waterMass()}setFlaps(t){let e=ee.flapDetents.length,n=J(this.flapIndex+t,0,e-1);n!==this.flapIndex&&(this.flapIndex=n,this.emit("flaps",`Flap ${ee.flapDetents[n]}\xB0`))}cycleFlaps(){let t=ee.flapDetents.length;this.flapIndex>=t-1?this.flapDir=-1:this.flapIndex<=0?this.flapDir=1:this.flapDir||(this.flapDir=1),this.flapIndex+=this.flapDir,this.emit("flaps",`Flap ${ee.flapDetents[this.flapIndex]}\xB0 ${this.flapDir>0?"\u25BC gi\xF9":"\u25B2 su"}`)}toggleGear(t){if(this.gearDown&&t&&t.out.onGround){this.emit("warn","Carrello bloccato: aereo a terra (sicurezza WOW)","caution");return}this.gearDown=!this.gearDown,this.emit("gear",this.gearDown?"Carrello: ESTRAZIONE":"Carrello: RETRAZIONE")}toggleProbes(t){this.probesCmd=!this.probesCmd,this.probesCmd&&t&&t.out.ias>ee.vProbeMax*.514444&&this.emit("warn","Velocit\xE0 eccessiva per le sonde!","caution"),this.emit("probes",this.probesCmd?"Sonde: ESTESE":"Sonde: RETRATTE")}cycleDropMode(){this.dropMode=(this.dropMode+1)%Os.length,this.emit("mode","Modalit\xE0 sgancio: "+Os[this.dropMode].label)}cycleScoopPreset(){let t=[.25,.5,.75,1],e=(t.indexOf(this.scoopPreset)+1)%t.length;this.scoopPreset=t[e],this.emit("preset",`Quantit\xE0 di pescaggio preselezionata: ${Math.round(this.scoopPreset*100)}% (${Math.round(this.scoopPreset*ee.waterCapacity)} L)`)}toggleFoam(){this.foamArmed=!this.foamArmed,this.emit("foam",this.foamArmed?"Schiumogeno: ARMATO":"Schiumogeno: DISINSERITO")}drop(){if(this.waterLiters()<5){this.emit("warn","Serbatoi vuoti","caution");return}let t=Os[this.dropMode].id,e=this.time,n=[0,1,2,3].filter(i=>this.tanks[i]>5&&!this.doorCmd[i]);if(n.length){if(t==="SALVO")n.forEach(i=>this.dropQueue.push({i,t:e}));else if(t==="COPPIE"){let i=n.filter(a=>a<2),r=n.filter(a=>a>=2);(i.length?i:r).forEach(a=>this.dropQueue.push({i:a,t:e})),i.length&&r.length&&r.forEach(a=>this.dropQueue.push({i:a,t:e+.45}))}else t==="SEQ"?n.forEach((i,r)=>this.dropQueue.push({i,t:e+r*.32})):this.dropQueue.push({i:n[0],t:e});this.emit("drop","SGANCIO!","drop")}}addScoopedWater(t){if(t<=0)return this.overflowRate=0,0;let e=wp,n=this.waterLiters(),i=Math.min(ee.waterCapacity,Math.max(this.scoopPreset*ee.waterCapacity,n)),r=Math.max(0,Math.min(t,ee.waterCapacity-n)),o=0;for(let a=0;a<4;a++){if(this.doorOpen[a]>.1)continue;let l=Math.min(r/4,e-this.tanks[a]);this.tanks[a]+=l,o+=l}return this.overflowRate=(t-o)/Math.max(1e-6,1/240),this.scoopedThisRun+=o,this.waterLiters()>=i-2&&this.probesCmd&&(this.probesCmd=!1,this.emit("scoopdone",`Quantit\xE0 raggiunta: ${Math.round(this.waterLiters())} L \u2014 sonde retratte automaticamente`,"good")),o}update(t,e){this.time+=t;let n=e.out,i=n.onGround||n.onWater,r=ia(e.pos.y).T-273.15+13;for(let p of this.engines)p.update(t,r,e.pos.y,i);let o=ee.flapDetents[this.flapIndex];this.flapPos=Ne(this.flapPos,o,2.2,t),this.gearPos=Ne(this.gearPos,this.gearDown?1:0,1/11,t),this.probePos=Ne(this.probePos,this.probesCmd?1:0,1/1.8,t);for(let p=this.dropQueue.length-1;p>=0;p--){let v=this.dropQueue[p];this.time>=v.t&&(this.doorCmd[v.i]=!0,this.doorEmptyTime[v.i]=0,this.dropQueue.splice(p,1))}let a=Math.max(.05,n.nz)*9.80665;for(let p=0;p<4;p++){if(this.doorOpen[p]=Ne(this.doorOpen[p],this.doorCmd[p]?1:0,this.doorCmd[p]?5:1.6,t),this.outflow[p]=0,this.doorOpen[p]>.02&&this.tanks[p]>0){let v=this.tanks[p]/1e3/uy+.12,m=dy*this.doorOpen[p]*Math.sqrt(2*a*v),g=Math.min(this.tanks[p],m*1e3*t);this.tanks[p]-=g,this.outflow[p]=g/t,this.totalDropped+=g,this.tanks[p]<=.5&&(this.tanks[p]=0,this.foamMix[p]=0)}this.doorCmd[p]&&this.tanks[p]<=.5&&(this.doorEmptyTime[p]+=t,this.doorEmptyTime[p]>1.2&&(this.doorCmd[p]=!1))}if(this.foamArmed&&this.foamConc>0){for(let p=0;p<4;p++)if(this.tanks[p]>50&&this.foamMix[p]<1){let v=this.tanks[p]*.005*(1-this.foamMix[p]),m=Math.min(v,8*t,this.foamConc);this.foamConc-=m,this.foamMix[p]=J(this.foamMix[p]+m/(this.tanks[p]*.005),0,1)}}let l=(this.engines[0].ff+this.engines[1].ff)/3600*t;this.fuel=Math.max(0,this.fuel-l),this.fuel<=0&&this.engines.forEach(p=>p.running=!1);let c=this.warn,h=n.ias/.514444;c.stall=n.stall,c.overspeed=h>ee.vmo;let u=this.flapPos>1?ee.vfe[ee.flapDetents[Math.max(1,this.flapIndex)]]||125:999;c.flapSpeed=h>u+3,c.gearWater=this.gearPos>.5&&n.surfaceUnder==="water"&&n.radAlt<120&&n.vs<-.5&&!n.onGround&&!n.onWater,c.gearUpLand=this.gearPos<.99&&n.surfaceUnder==="land"&&n.radAlt<150&&this.flapPos>20&&n.vs<-.5,c.probeSpeed=this.probePos>.1&&h>ee.vProbeMax;let d=this.waterLiters()>=ee.waterCapacity-3;d&&!this._fullAnnounced&&(this._fullAnnounced=!0,this.emit("full","SERBATOI PIENI \u2014 ritrarre le sonde!","good")),this.waterLiters()<ee.waterCapacity-300&&(this._fullAnnounced=!1),c.tanksFull=d&&this.probePos>.2,c.lowFuel=this.fuel<400,c.overweight=this.totalMass()>ee.maxAfterScoop,c.master=c.stall||c.overspeed||c.gearWater||c.gearUpLand,c.caution=c.flapSpeed||c.probeSpeed||c.lowFuel||c.overweight||c.tanksFull;let f=n.scoopRate>20;f&&!this._wasScooping&&(this.scoopedThisRun=0,this.emit("scoop","Pescaggio in corso\u2026","info")),this._wasScooping=f}};var ie=(s,t,e=0)=>new D(e,t-nt.hCG,s-nt.sCG),me=1.5,ra={s:2.42,h:2.77,y:-.52};function $n(s,{y:t=null,h:e=null},n,i){let r=Fs(s),o=t!==null?Rc(s,t):Ac(s,e),[a,l]=ea(r,o),[c,h]=ea(r,Math.min(1,o+.005)),u=h-l,d=-(c-a),f=Math.hypot(u,d)||1;return ie(s,l-d/f*n,i*(a-u/f*n))}var Nc=class{constructor({quality:t="medium"}={}){this.group=new Qt,this.group.name="cockpit",this.static=new Map,this._mats(),this._shell(),this._frames(),this._floorBulkhead(),this._panel(),this._glareshield(),this._pedestal(),this._overhead(),this._yokes(),this._pedals(),this._seats(),this._details(),this._flush(),this._avatar(),this.group.traverse(n=>{n.isMesh&&(n.receiveShadow=!0,n.castShadow=!1)}),this.seat=-1,this.eye=ie(ra.s,ra.h,ra.y);let e=new Do(16773340,1.6,3.2,1.6);e.position.copy(ie(2.3,3,0)),this.group.add(e),this.fill=e}_mats(){let t=(e,n=.8,i=0,r={})=>new be({color:e,roughness:n,metalness:i,envMapIntensity:.35,...r});this.M={wall:t(9211530,.92),wallDark:t(5593435,.85),panel:t(8093566,.72),hood:t(6251365,.95),black:t(1118739,.6),bezel:t(1447704,.45),button:t(2895665,.5),floor:t(3422268,.95),seat:t(2764081,.9),seatCushion:t(4016732,.95),metal:t(10133926,.35,.8),chrome:t(14080734,.15,1),frame:t(5922400,.65,.1),column:t(7633018,.45,.3),yoke:t(3027252,.5,.1),grip:t(1710876,.75),red:t(11866651,.5),yellowBlack:t(14200832,.5),white:t(15263976,.55),knobRed:t(12587024,.45),knobBlack:t(1052688,.4),visor:new be({color:1060888,roughness:.2,transparent:!0,opacity:.55,side:sn}),needle:new Qe({color:15921906}),needleOrange:new Qe({color:16751120}),cabinDark:new Qe({color:658188,side:nn})}}_add(t,e){this.static.has(e)||this.static.set(e,[]);let n=(t.index,t);n.attributes.uv||n.setAttribute("uv",new Zt(new Float32Array(n.attributes.position.count*2),2)),this.static.get(e).push(n)}_box(t,e,n,i,r,o=null){let a=new Gt(t,e,n);o&&a.applyEuler(o),a.translate(i.x,i.y,i.z),this._add(a,r)}_cyl(t,e,n,i,r,o=null,a=12){let l=new re(e,t,n,a);o&&l.applyEuler(o),l.translate(i.x,i.y,i.z),this._add(l,r)}_flush(){for(let[t,e]of this.static){let n=fs(e.map(r=>(r.index,r)));n.computeVertexNormals();let i=new q(n,t);this.group.add(i)}this.static.clear()}_shell(){let{strips:t}=na({s0:.6,s1:3.98,inset:.05,inside:!0,cutWindows:!0});for(let e of t){let n=new q(e,this.M.wall);n.name="cockpitShell",this.group.add(n)}}_frames(){let e=(i,r=.03)=>{let o=new ji(new zi(i),Math.max(4,i.length*2),r,6,!1);this._add(o,this.M.frame)};for(let i of[-1,1]){let r=m=>.93-(m-1.2)*.1,o=[],a=[],l=[],c=[];for(let m=.05;m<=r(1.2)+1e-6;m+=.05)o.push($n(1.2,{y:m},.035,i));for(let m=.05;m<=r(2.02)+1e-6;m+=.05)a.push($n(2.02,{y:m},.035,i));for(let m=1.2;m<=2.02+1e-6;m+=.05)l.push($n(m,{y:r(m)+.038},.035+.005,i));for(let m=1.2;m<=2.02+1e-6;m+=.05)c.push($n(m,{y:.032},.035,i));e(o,.025),e(a,.03),e(l,.062),e(c,.022);let h=[],u=[];for(let m=1.32;m<=2.04+1e-6;m+=.04)h.push($n(m,{h:2.43},.035,i));for(let m=2.43;m<=He(2.04)-.04+1e-6;m+=.05)u.push($n(2.04,{h:m},.035,i));let d=[];for(let m=1.32;m<=2.04+1e-6;m+=.04)d.push($n(m,{h:He(m)-.04},.035,i));e(h,.03),e(u,.034),e(d,.04);let f=m=>Math.min(He(m)-.3,3.18);for(let[m,g]of[[2.13,2.66],[2.74,3.3]]){let S=[],_=[],x=[],M=[];for(let b=m;b<=g+1e-6;b+=.04)S.push($n(b,{h:2.43},.035,i)),_.push($n(b,{h:f(b)},.035,i));for(let b=2.43;b<=f(m)+1e-6;b+=.05)x.push($n(m,{h:b},.035,i));for(let b=2.43;b<=f(g)+1e-6;b+=.05)M.push($n(g,{h:b},.035,i));e(S,.028),e(_,.026),e(x,.028),e(M,.028)}let p=[];for(let[m,g]of[[2.12,.42],[2.12,.78],[2.6,.78],[2.6,.42],[2.12,.42]])p.push($n(m,{y:g},.035,i));let v=[];for(let m=0;m<p.length-1;m++)for(let g=0;g<6;g++)v.push(p[m].clone().lerp(p[m+1],g/6));e(v,.02),this._box(.03,.04,.16,$n(2.4,{h:2.5},.035+.04,i),this.M.metal)}}_floorBulkhead(){let t=new We(2.3,3.2);t.rotateX(-Math.PI/2),t.translate(0,me-nt.hCG,2.35-nt.sCG),this._add(t,this.M.floor),this._box(2.2,.38,.03,ie(1.42,me+.19,0),this.M.wallDark);let e=3.96;this._box(.82,1.9,.04,ie(e,me+.95,-.77),this.M.wall),this._box(.82,1.9,.04,ie(e,me+.95,.77),this.M.wall),this._box(.72,.35,.04,ie(e,me+1.72,0),this.M.wall);let n=new q(new Gt(2.5,2.4,3),this.M.cabinDark);n.position.copy(ie(e+1.52,me+.9,0)),this.group.add(n),this._box(1.6,1.2,.05,ie(e+2.8,me+.3,0),this.M.wallDark),this._cyl(.06,.06,.42,ie(3.85,me+.35,-.95),this.M.red),this._cyl(.02,.02,.08,ie(3.85,me+.6,-.95),this.M.black)}_local(t){let e=new Map,n=(o,a)=>{o.attributes.uv||o.setAttribute("uv",new Zt(new Float32Array(o.attributes.position.count*2),2)),e.has(a)||e.set(a,[]),e.get(a).push(o)};return{add:n,box:(o,a,l,c,h,u,d,f=0)=>{let p=new Gt(o,a,l);f&&p.rotateX(f),p.translate(c,h,u),n(p,d)},flush:()=>{for(let[o,a]of e){let l=fs(a);l.computeVertexNormals(),t.add(new q(l,o))}e.clear()}}}_screen(t,e,n,i,r,o,a,{buttons:l=5,side:c=!1}={}){t.box(o+.014*2,.014,.016,i,r+a/2+.014/2,.016/2,this.M.bezel),t.box(o+.014*2,.014*1.6,.016,i,r-a/2-.014*.8,.016/2,this.M.bezel),t.box(.014,a,.016,i-o/2-.014/2,r,.016/2,this.M.bezel),t.box(.014,a,.016,i+o/2+.014/2,r,.016/2,this.M.bezel),t.box(o,a,.004,i,r,.002,this.M.black);for(let f=0;f<l;f++){let p=i-o/2+o/l*(f+.5);t.box(.012,.008,.006,p,r-a/2-.014*.8,.016+.003,this.M.button)}if(c)for(let f=0;f<4;f++)t.box(.007,.012,.006,i+o/2+.014/2,r+a*.35-f*a*.23,.016+.003,this.M.button);let d=new q(new We(o,a),this.screenMat(n));return d.position.set(i,r,.006),e.add(d),d}screenMat(t){return new Qe({map:t.texture,toneMapped:!1,color:14211288})}_panel(){let t=14*Et,e=ie(1.62,2.16,0),n=new Qt;n.position.copy(e),n.rotation.x=-t,this.group.add(n),this.panelGroup=n;let i=this._local(n),r={asi:[-.76,.13,.056],alt:[-.34,.13,.056],vsi:[-.34,-.05,.05],radalt:[-.76,-.05,.046],adi:[-.55,.14,.17,.14],hsi:[-.55,-.05,.17,.15]},o=(O,H)=>{let V=r[O].slice();return V[0]*=H,V},a=[-.11,.14,.2,.15],l=[-.11,-.04,.18,.1],c=[.11,.14,.2,.15],h=[.11,-.04,.2,.1],u=document.createElement("canvas");u.width=2048,u.height=640;let d=u.getContext("2d");d.fillStyle="#7d817f",d.fillRect(0,0,u.width,u.height);for(let O=0;O<9e3;O++)d.fillStyle=Math.random()<.5?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.04)",d.fillRect(Math.random()*u.width,Math.random()*u.height,2,2);let f=O=>(O+1)/2*u.width,p=O=>(.31-O)/.64*u.height,v=(O,H,V,ot)=>{d.strokeStyle="#4c504f",d.lineWidth=4,d.strokeRect(f(O),p(ot),f(V)-f(O),p(H)-p(ot)),d.strokeStyle="rgba(255,255,255,0.18)",d.lineWidth=2,d.strokeRect(f(O)+3,p(ot)+3,f(V)-f(O)-6,p(H)-p(ot)-6),d.fillStyle="#5b5f5e";for(let[rt,yt]of[[O+.012,H+.012],[V-.012,H+.012],[O+.012,ot-.012],[V-.012,ot-.012]])d.beginPath(),d.arc(f(rt),p(yt),6,0,Math.PI*2),d.fill(),d.strokeStyle="#2e3130",d.lineWidth=2,d.beginPath(),d.moveTo(f(rt)-4,p(yt)),d.lineTo(f(rt)+4,p(yt)),d.stroke()};v(-.965,-.325,-.245,.3),v(.245,-.325,.965,.3),v(-.235,-.325,.235,.3);let m=(O,H,V,ot=20,rt="#f4f4f0")=>{d.fillStyle=rt,d.font=`bold ${ot}px Arial`,d.textAlign="center",d.textBaseline="middle",d.fillText(O,f(H),p(V))};for(let O of[-1,1])m("AIRSPEED",.76*O,.215,15),m("ALTITUDE",.34*O,.215,15),m("EADI",.55*O,.255,16),m("EHSI",.55*O,.05,14),m("RAD ALT",.76*O,.025,14),m("VERT SPEED",.34*O,.025,14),m("CLOCK",.9*O,-.145,12),m("G",.76*O,-.145,12);m("ENGINE",-.11,.255,16),m("SYSTEMS",.11,.255,16),m("STBY ATT",0,-.145,12),m("LANDING GEAR",-.2,-.125,13),m("UP",-.175,-.205,12),m("DN",-.175,-.295,12),m("NOSE  LH  RH",-.2,-.145,11),d.fillStyle="#1c1e1f",d.fillRect(f(.12),p(-.235),f(.22)-f(.12),p(-.305)-p(-.235)),d.fillStyle="#e8e8e0",d.font="bold 11px Arial",d.textAlign="left",["VMO 200 KIAS","VFE 10\xB0 165  15\xB0 145  25\xB0 125","SCOOP 60-95 KIAS","PROBES EXT MAX 105"].forEach((O,H)=>d.fillText(O,f(.125),p(-.245)+H*15)),["NAV","STROBE","BCN","TAXI","LDG L","LDG R","WIPER","PITOT","PROBE HTR","FOAM"].forEach((O,H)=>m(O,-.9+H*.065,-.305,10));let S=new an(u);S.colorSpace=De,S.anisotropy=8;let _=new xr;_.moveTo(-.97,-.33),_.lineTo(.97,-.33),_.lineTo(.97,.18),_.quadraticCurveTo(.95,.31,.8,.31),_.lineTo(-.8,.31),_.quadraticCurveTo(-.95,.31,-.97,.18),_.closePath();let x=new Ao(_,8),M=x.attributes.uv,b=x.attributes.position;for(let O=0;O<M.count;O++)M.setXY(O,(b.getX(O)+1)/2,(b.getY(O)+.33)/.64);n.add(new q(x,new be({map:S,roughness:.75,envMapIntensity:.3}))),i.box(1.94,.64,.12,0,-.01,-.065,this.M.panel);let w=new Ic;this.atlas=w;let y=new Qe({map:w.texture}),E=new Qe({map:w.texture,transparent:!0});this.gauges={};let A=(O,H=.006,V=this.M.needle,ot=.15)=>{let rt=new Gt(H,O*(1+ot),.002);return rt.translate(0,O*(1-ot)/2,0),new q(rt,V)},R=(O,H,V,ot,rt,yt=[])=>{let Lt=new Qt;Lt.position.set(V,ot,.004),n.add(Lt),H&&Lt.add(new q(w.disc(H,rt),y));let Xt=new q(w.disc("bezel",rt*1.16),E);Xt.position.z=.006,Lt.add(Xt);let K=new re(rt*1.16,rt*1.16,.03,24);K.rotateX(Math.PI/2),K.translate(V,ot,-.008),i.add(K,this.M.black),i.box(rt*2.5,rt*2.5,.006,V,ot,.001,this.M.bezel);let tt=yt.map(([zt,_t,Tt])=>{let St=new Qt;return St.position.z=.004,St.add(A(rt*zt,_t,Tt)),Lt.add(St),St}),ht=new q(new Mn(rt*.08,12),this.M.black);return ht.position.z=.006,Lt.add(ht),this.gauges[O]={grp:Lt,ns:tt},this.gauges[O]};this.adiDisplay=new fi(512,424,gp),this.hsiDisplay=new fi(512,452,xp);for(let[O,H]of[["c_",-1],["f_",1]]){let[V,ot,rt]=o("asi",H);R(O+"asi","asi",V,ot,rt,[[.85,.008]]);let[yt,Lt,Xt]=o("alt",H);R(O+"alt","alt",yt,Lt,Xt,[[.86,.007],[.55,.012],[.92,.003,this.M.needleOrange]]);let[K,tt,ht]=o("vsi",H);R(O+"vsi","vsi",K,tt,ht,[[.85,.008]]);let[zt,_t,Tt]=o("radalt",H);R(O+"radalt","radalt",zt,_t,Tt,[[.85,.007]]);let[St,qt,Kt,oe]=o("adi",H);this._screen(i,n,this.adiDisplay,St,qt,Kt,oe,{buttons:0,side:!1});let[Ft,Ht,ce,_e]=o("hsi",H);this._screen(i,n,this.hsiDisplay,Ft,Ht,ce,_e,{buttons:5}),R(O+"clock","clock",.9*H,-.2,.032,[[.6,.006],[.85,.004],[.9,.0025,this.M.needleOrange]]),R(O+"g","g",.76*H,-.2,.034,[[.85,.006]]);for(let ue=0;ue<3;ue++){let ae=new re(.011,.013,.016,14);ae.rotateX(Math.PI/2),ae.translate(.55*H-.05+ue*.05,-.2,.008),i.add(ae,this.M.knobBlack)}}let C=new Qt;C.position.set(0,-.215,.004),n.add(C);let L=pp();C.add(new q(new Mn(.04,40),L));let P=new q(w.disc("adiOverlay",.04),E);P.position.z=.003,C.add(P);let F=new q(w.disc("bezel",.047),E);F.position.z=.006,C.add(F),i.box(.12,.12,.006,0,-.215,.001,this.M.bezel),this.gauges.sby={mat:L},this.engDisplay=new fi(512,384,vp),this.engLower=new fi(512,284,yp),this.sysDisplay=new fi(512,384,Mp),this._screen(i,n,this.engDisplay,...a,{buttons:4}),this._screen(i,n,this.engLower,...l,{buttons:0}),this._screen(i,n,this.sysDisplay,...c,{buttons:4}),this.annunciator=new fi(512,256,mp),this._screen(i,n,this.annunciator,...h,{buttons:0});let U=new Qt;U.position.set(-.2,-.25,.01),n.add(U),i.box(.05,.11,.008,-.2,-.25,.004,this.M.bezel);let B=new Gt(.012,.012,.09);B.translate(0,0,.045),U.add(new q(B,this.M.chrome));let X=new q(new re(.022,.022,.014,16),this.M.white);X.rotation.x=Math.PI/2,X.position.z=.09,U.add(X),this.gearLever=U,this.gearLights=[];for(let O=0;O<3;O++){let H=new q(new Mn(.01,14),new Qe({color:663562,toneMapped:!1}));H.position.set(-.225+O*.025,-.165,.006),n.add(H),this.gearLights.push(H)}for(let O=0;O<10;O++){let H=new re(.004,.006,.03,8);H.rotateX(Math.PI/2+.4),H.translate(-.9+O*.065,-.275,.02),i.add(H,this.M.chrome),i.box(.022,.03,.004,-.9+O*.065,-.275,.002,this.M.bezel)}i.flush()}_glareshield(){let n=new Gt(1.8,.03,.38);n.rotateX(-.235),n.translate(0,2.55-nt.hCG,1.43-nt.sCG),this._add(n,this.M.hood),this._box(1.8,.02,.09,ie(1.565,2.472,0),this.M.hood);let i=new re(.014,.014,1.8,12);i.rotateZ(Math.PI/2),i.translate(0,2.585-nt.hCG,1.618-nt.sCG),this._add(i,this.M.hood);let r=new Qt;r.position.copy(ie(1.605,2.53,0)),r.rotation.x=-.18,this.group.add(r);let o=this._local(r),a=document.createElement("canvas");a.width=2048,a.height=132;let l=a.getContext("2d");l.fillStyle="#6c706f",l.fillRect(0,0,a.width,a.height);let c=p=>(p+1.8/2)/1.8*a.width,h=p=>(.115/2-p)/.115*a.height;l.strokeStyle="#3e4241",l.lineWidth=4;for(let[p,v]of[[-.89,-.47],[-.45,.3],[.32,.45],[.47,.89]])l.strokeRect(c(p),h(.052),c(v)-c(p),h(-.052)-h(.052));let u=(p,v,m,g=14)=>{l.fillStyle="#f2f2ee",l.font=`bold ${g}px Arial`,l.textAlign="center",l.textBaseline="middle",l.fillText(p,c(v),h(m))};for(let p of[-1,1])u("CRS",.84*p,.04,12),u("HDG",.74*p,.04,12),u("MASTER",.58*p,.043,11),u(p<0?"ENG 1 FIRE":"ENG 2 FIRE",.385*p,.043,12),u("PULL",.385*p,-.045,10);u("WATER STATUS",-.205,.045,13),u("WATER DROP CONTROL",.145,.045,13);for(let[p,v]of[["MODE",.03],["QTY",.09],["ARM",.15],["DROP",.21],["FOAM",.27]])u(p,v,-.045,10);u("MAX LAND WT 19890 KG",-.205,-.047,10);let d=new an(a);d.colorSpace=De,d.anisotropy=8,r.add(new q(new We(1.8,.115),new be({map:d,roughness:.8,envMapIntensity:.3}))),o.box(1.8,.115,.05,0,0,-.026,this.M.hood),this.waterStatus=new fi(512,168,Sp),this._screen(o,r,this.waterStatus,-.205,0,.2,.066,{buttons:0}),this.dropCtl=new fi(256,96,bp),this._screen(o,r,this.dropCtl,.15,.012,.13,.047,{buttons:0});for(let p=0;p<5;p++)o.box(.034,.018,.012,.03+p*.06,-.028,.006,p===3?this.M.red:this.M.button);this.masterLights=[];for(let p of[-1,1]){for(let[v,m]of[[0,4198416],[1,4206608]]){let g=new q(new Gt(.05,.034,.014),new Qe({color:m,toneMapped:!1}));g.position.set(p*(.61-v*.06),-.008,.008),r.add(g),this.masterLights.push({m:g,kind:v})}o.box(.05,.05,.008,p*.385,0,.004,this.M.bezel),o.box(.016,.016,.03,p*.385,0,.02,this.M.chrome),o.box(.07,.022,.018,p*.385,0,.04,this.M.knobRed);for(let v of[.84,.74]){let m=new re(.014,.016,.02,16);m.rotateX(Math.PI/2),m.translate(p*v,-.012,.01),o.add(m,this.M.knobBlack)}}o.flush(),this._box(.09,.07,.07,ie(2,He(2)-.16,0),this.M.black);let f=new q(new Mn(.025,16),new Qe({color:13682848}));f.position.copy(ie(2.036,He(2)-.16,0)),this.group.add(f);for(let p of[-1,1]){let v=new q(new We(.42,.2),this.M.visor);v.position.copy(ie(2.05,He(2.05)-.17,p*.48)),v.rotation.x=-1,this.group.add(v)}}_pedestal(){this._box(.4,.5,2.95-1.72,ie((1.72+2.95)/2,me+.25,0),this.M.panel);let i=document.createElement("canvas");i.width=384,i.height=1024;let r=i.getContext("2d");r.fillStyle="#727675",r.fillRect(0,0,i.width,i.height);let o=(b,w,y,E)=>{r.fillStyle="#1d2022",r.fillRect(14,b,356,w),r.strokeStyle="#4a4e4d",r.lineWidth=3,r.strokeRect(14,b,356,w),r.fillStyle="#e4e4e0",r.font="bold 15px Arial",r.textAlign="left",r.fillText(y,26,b+24),E.forEach((A,R)=>{r.fillStyle="#000",r.fillRect(24,b+36+R*28,200,24),r.fillStyle="#ff9a1a",r.font="bold 18px monospace",r.fillText(A,30,b+54+R*28)}),r.fillStyle="#3a3d3f";for(let A=0;A<3;A++)r.beginPath(),r.arc(270+A*34,b+w-26,13,0,Math.PI*2),r.fill()};r.fillStyle="#1d2022",r.fillRect(14,10,356,300),o(330,100,"COM 1        COM 2",["122.80   123.45"]),o(440,100,"NAV 1        ADF",["110.30   353"]),o(550,90,"ATC XPDR",["7000   ALT"]),o(650,140,"TRIM     AIL    RUD",[""]),o(800,110,"WATER SYSTEM",["DROP MODE  PRESEL"]),o(920,90,"AUDIO",["VHF1 VHF2 INT"]);let a=new an(i);a.colorSpace=De,a.anisotropy=4;let l=new q(new We(.4-.01,2.95-1.72),new be({map:a,roughness:.8,envMapIntensity:.3}));l.rotation.x=-Math.PI/2,l.position.copy(ie((1.72+2.95)/2,me+.502,0)),this.group.add(l);let c=ie(2.08,me+.5,0),h=new re(.115,.115,.22,28);h.rotateZ(Math.PI/2),h.translate(c.x,c.y,c.z),this._add(h,this.M.panel);for(let b of[-.045,.045]){let w=new Qi(.116,.006,4,20,Math.PI);w.rotateY(Math.PI/2),w.translate(c.x+b,c.y,c.z),this._add(w,this.M.black)}this.powerLevers=[],this.condLevers=[];for(let[b,w]of[[0,-.045],[1,.045]]){let y=new Qt;y.position.copy(ie(2.08,me+.5,w)),this.group.add(y);let E=new Gt(.012,.23,.02);E.translate(0,.115,0),y.add(new q(E,this.M.chrome));let A=new q(new Gt(.075,.045,.042),this.M.knobBlack);A.position.y=.245,y.add(A);for(let F=0;F<4;F++){let U=new q(new Gt(.078,.005,.046),this.M.grip);U.position.y=.228+F*.011,y.add(U)}let R=new q(new Gt(.03,.012,.03),this.M.chrome);R.position.set(0,.22,-.03),y.add(R),this.powerLevers.push(y);let C=new Qt;C.position.copy(ie(2.24,me+.5,w*3)),this.group.add(C);let L=new Gt(.01,.15,.014);L.translate(0,.075,0),C.add(new q(L,this.M.chrome));let P=new q(new re(.017,.017,.055,14),this.M.white);P.rotation.z=Math.PI/2,P.position.y=.158,C.add(P);for(let F of[-.018,.018]){let U=new q(new re(.0175,.0175,.006,14),this.M.knobBlack);U.rotation.z=Math.PI/2,U.position.set(F,.158,0),C.add(U)}C.rotation.x=-.4,this.condLevers.push(C),this._box(.012,.004,.16,ie(2.24,me+.503,w*3),this.M.black)}let u=new Qt;u.position.copy(ie(2.36,me+.5,0)),u.rotation.x=-1.25,this.group.add(u);let d=new Gt(.014,.14,.014);d.translate(0,.07,0),u.add(new q(d,this.M.yellowBlack));for(let b=0;b<3;b++){let w=new q(new Gt(.016,.012,.016),this.M.knobBlack);w.position.y=.03+b*.035,u.add(w)}let f=new q(new Gt(.05,.025,.03),this.M.yellowBlack);f.position.y=.145,u.add(f),this._box(.012,.03,.012,ie(2.62,me+.515,-.12),this.M.chrome),this._box(.07,.018,.022,ie(2.62,me+.535,-.12),this.M.red);let p=new Qt;p.position.copy(ie(2.5,me+.5,.12)),this.group.add(p);let v=new Gt(.012,.14,.012);v.translate(0,.07,0),p.add(new q(v,this.M.chrome));let m=new q(new Gt(.065,.02,.045),this.M.white);m.position.y=.145,p.add(m),this.flapLever=p,this._box(.012,.004,.18,ie(2.5,me+.503,.12),this.M.black);let g=new Qt;g.position.copy(ie(2.45,me+.36,-.4/2-.02)),this.group.add(g);let S=new q(new re(.155,.155,.035,40),this.M.column);S.rotation.z=Math.PI/2,g.add(S);for(let b=0;b<24;b++){let w=new q(new Gt(.038,.014,.014),this.M.grip),y=b/24*Math.PI*2;w.position.set(0,Math.cos(y)*.155,Math.sin(y)*.155),w.rotation.x=-y,g.add(w)}let _=new q(new Gt(.037,.02,.06),this.M.white);_.position.set(0,.11,0),g.add(_),this.trimWheel=g;let x=new Qt;x.position.copy(ie(2.8,me+.52,-.08)),this.group.add(x),x.add(new q(new re(.022,.026,.03,16),this.M.knobBlack));let M=new q(new Gt(.005,.031,.02),this.M.white);M.position.set(0,.001,-.012),x.add(M),this.dropSelector=x,this._box(.04,.012,.06,ie(2.8,me+.51,.08),this.M.red)}_overhead(){let t=document.createElement("canvas");t.width=1024,t.height=1024;let e=t.getContext("2d");e.fillStyle="#767a79",e.fillRect(0,0,1024,1024);let n=[["ELECTRICAL",40,40],["FUEL",540,40],["ENGINE START",40,300],["ANTI-ICE",540,300],["LIGHTS",40,560],["HYDRAULIC",540,560],["FIRE",40,800],["WATER SYSTEM",540,800]];for(let[h,u,d]of n){e.strokeStyle="#d0d0d0",e.lineWidth=3,e.strokeRect(u,d,440,220),e.fillStyle="#767a79",e.fillRect(u+20,d-12,h.length*15+20,24),e.fillStyle="#e0e0e0",e.font="bold 22px Arial",e.fillText(h,u+30,d+8),e.font="14px Arial";for(let f=0;f<6;f++)e.fillText(["BATT","GEN 1","GEN 2","INV","BUS","EXT"][f],u+30+f*70,d+200)}e.fillStyle="#c01010",e.fillRect(90,850,120,60),e.fillRect(300,850,120,60),e.fillStyle="#fff",e.font="bold 22px Arial",e.fillText("ENG 1",112,888),e.fillText("ENG 2",322,888);let i=new an(t);i.colorSpace=De;let r=new Qt;r.position.copy(ie(2.55,He(2.55)-.12,0)),r.rotation.x=Math.PI/2+.12,this.group.add(r);let o=new q(new We(.6,.72),new be({map:i,roughness:.8,envMapIntensity:.3}));r.add(o);let a=new q(new Gt(.62,.74,.1),this.M.panel);a.position.z=-.052,r.add(a);let l=[];for(let h=0;h<4;h++)for(let u=0;u<6;u++)for(let d of[0,1]){let f=-.27+d*.3+u*.042,p=.3-h*.175-.07,v=new re(.003,.004,.022,6);v.rotateX(Math.PI/2+(Math.random()<.6?.4:-.4)),v.translate(f,p,.012),l.push(v)}let c=new q(fs(l.map(h=>(h.attributes.uv,h))),this.M.chrome);r.add(c)}_yokes(){this.yokes=[];let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle="#2e3134",e.fillRect(0,0,256,128),e.fillStyle="#1f5fbf",e.beginPath(),e.ellipse(128,64,118,52,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="bold 34px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("CANADAIR",128,50),e.font="bold 24px Arial",e.fillText("CL-415",128,84);let n=new an(t);n.colorSpace=De;let i=new be({map:n,roughness:.4}),r=new zi([[-.165,.135],[-.178,.07],[-.16,.005],[-.1,-.03],[0,-.036],[.1,-.03],[.16,.005],[.178,.07],[.165,.135]].map(([a,l])=>new D(a,l,0))),o=new ji(r,48,.016,10,!1);for(let a of[-1,1]){let l=new Qt;l.position.copy(ie(1.86,me+.02,a*.52)),this.group.add(l);let c=new re(.03,.038,.72,14);c.translate(0,.36,0);let h=new q(c,this.M.column);h.rotation.x=.15,l.add(h);let u=new q(new re(.045,.085,.16,14),this.M.black);u.position.y=.08,l.add(u);let d=new q(new Gt(.22,.02,.22),this.M.wallDark);d.position.y=-.01,l.add(d);let f=new Qt;f.position.set(0,.71,.108),l.add(f),f.add(new q(o,this.M.yoke));let p=new q(new Gt(.12,.085,.06),this.M.yoke);p.position.y=-.02,f.add(p);let v=new q(new We(.1,.05),i);v.position.set(0,-.02,.031),f.add(v);for(let M of[-1,1]){let b=new q(new re(.021,.023,.1,12),this.M.grip);b.position.set(M*.174,.075,0),b.rotation.z=M*.08,f.add(b);let w=new q(new mn(.019,12,8),this.M.yoke);w.position.set(M*.166,.138,0),f.add(w)}let m=a,g=new q(new re(.009,.009,.012,12),this.M.knobRed);g.position.set(m*.166,.157,0),f.add(g);let S=new q(new Gt(.012,.012,.014),this.M.yellowBlack);S.position.set(-m*.17,.11,.022),f.add(S);let _=new q(new Gt(.014,.02,.012),this.M.knobBlack);_.position.set(m*.176,.06,-.022),f.add(_);let x=new q(new We(.08,.05),this.M.white);x.position.set(0,.035,.002),f.add(x),this.yokes.push({col:l,wheel:f})}}_pedals(){this.pedals=[];for(let t of[-1,1])for(let e of[-1,1]){let n=new Qt;n.position.copy(ie(1.55,me+.42,t*.52+e*.12)),this.group.add(n);let i=new Gt(.03,.28,.025);i.translate(0,-.14,0),n.add(new q(i,this.M.metal));let r=new q(new Gt(.09,.15,.02),this.M.black);r.position.set(0,-.25,.03),r.rotation.x=-.5,n.add(r),this.pedals.push({pv:n,lr:e,side:t})}}_seats(){for(let t of[-1,1]){let e=t*.52;this._box(.42,.06,.6,ie(2.55,me+.03,e),this.M.metal),this._box(.3,.32,.36,ie(2.5,me+.22,e),this.M.seat);let n=new Gt(.5,.11,.5);n.translate(e,me+.42-nt.hCG,2.4-nt.sCG),this._add(n,this.M.seatCushion);let i=new Gt(.5,.78,.12);i.translate(0,.39,0),i.rotateX(.2),i.translate(e,me+.46-nt.hCG,2.68-nt.sCG),this._add(i,this.M.seatCushion);let r=new Gt(.28,.2,.12);r.translate(0,.9,0),r.rotateX(.2),r.translate(e,me+.46-nt.hCG,2.7-nt.sCG),this._add(r,this.M.seat);for(let o of[-1,1]){let a=new Gt(.06,.06,.36);a.translate(e+o*.26,me+.68-nt.hCG,2.45-nt.sCG),this._add(a,this.M.seat)}for(let o of[-1,1]){let a=ie(2.74,me+1.12,e+o*.1),l=ie(2.62,me+.5,e+o*.16);this._add(Cn(a,l,.022,.022,4,.3),this.M.knobBlack)}}}_details(){for(let i of[-1,1])this._box(.22,.42,1.2,ie(2.55,me+.62,i*.98),this.M.panel);let t=new Qt;t.position.copy(ie(2.2,me+.86,-.95)),this.group.add(t);let e=new q(new re(.07,.07,.02,20),this.M.black);t.add(e);let n=new q(new re(.012,.012,.06,8),this.M.black);n.position.set(.05,.04,0),t.add(n),this.tiller=t;for(let i of[-1,1]){let r=new q(new Qi(.08,.012,6,16,Math.PI),this.M.black);r.position.copy(ie(3.1,2.62,i*1.02)),r.rotation.y=Math.PI/2,this.group.add(r)}this._box(.04,.25,.3,ie(3.05,me+.75,-1.06),this.M.black)}setSeat(t){t!==this.seat&&(this.seat=t,this.eye=ie(ra.s,ra.h,t*.52))}setPeer(t){this.peerView=t,this.avatar.visible=!!t}_avatar(){let t=(f,p=.85)=>new be({color:f,roughness:p,envMapIntensity:.3}),e=t(14177807),n=t(12946534,.7),i=t(15329766,.4),r=t(1381911,.6),o=t(2764081),a=new Qt;a.visible=!1,this.avatar=a,this.group.add(a);let l=(f,p,v,m,g,S=a)=>{let _=new q(f,p);return _.position.set(v,m,g),S.add(_),_},c=l(new mo(.16,.3,6,14),e,0,.93,.14);c.scale.set(1.3,1,.78),c.rotation.x=.2,l(new Gt(.34,.14,.26),e,0,.52,.08);for(let f of[-1,1]){let p=l(new Gt(.035,.5,.01),o,f*.1,.95,-.05);p.rotation.x=.2}let h=new Qt;h.position.set(0,1.4,.2),a.add(h),this.avatarHead=h,l(new mn(.093,18,14),n,0,0,0,h),l(new mn(.108,18,10,0,Math.PI*2,0,Math.PI*.56),i,0,.012,0,h),l(new Gt(.16,.02,.07),r,0,.02,-.095,h);for(let f of[-1,1])l(new re(.04,.04,.03,14),r,f*.105,-.01,.005,h).rotation.z=Math.PI/2;let u=l(new re(.004,.004,.11,6),r,.09,-.04,-.06,h);u.rotation.x=Math.PI/2,l(new mn(.014,8,6),r,.09,-.04,-.115,h),l(new re(.045,.055,.08,10),n,0,-.1,.01,h);let d=(f,p)=>{let v=new q(new re(f,f,1,10),p);return a.add(v),v};this.avatarLimbs={arm:[[d(.05,e),d(.042,e),l(new mn(.04,10,8),n,0,0,0)],[d(.05,e),d(.042,e),l(new mn(.04,10,8),n,0,0,0)]],leg:[[d(.085,e),d(.065,e)],[d(.085,e),d(.065,e)]]},this._tmpA=new D,this._tmpB=new D,this._up=new D(0,1,0)}_seg(t,e,n){let i=this._tmpB.copy(n).sub(e),r=i.length();t.position.copy(e).addScaledVector(i,.5),t.scale.set(1,Math.max(r,.001),1),t.quaternion.setFromUnitVectors(this._up,i.divideScalar(r||1))}_updateAvatar(){let t=this.peerView,e=this.avatar;if(!t||!e.visible)return;let n=-this.seat;e.position.copy(ie(2.5,me,n*.52)),this.avatarHead.rotation.set(t.pitch,t.yaw,0,"YXZ");let i=this.yokes[n<0?0:1];i.col.updateMatrix(),i.wheel.updateMatrix();let r=a=>new D(a*.168,.14,0).applyMatrix4(i.wheel.matrix).applyMatrix4(i.col.matrix).sub(e.position),o=ie(2.12,me+.76,0).sub(e.position);for(let a of[-1,1]){let l=a<0?0:1,c=new D(a*.23,1.12,.12),h=a===-n,u=t.role==="copilot"&&h?o.clone().add(new D(-a*0,0,0)):r(a),d=c.clone().lerp(u,.5).add(new D(a*.07,-.12,.04)),[f,p,v]=this.avatarLimbs.arm[l];this._seg(f,c,d),this._seg(p,d,u),v.position.copy(u);let m=new D(a*.1,.55,.06),g=new D(a*.11,.62,-.38),S=new D(a*.11,.2,-.72),[_,x]=this.avatarLimbs.leg[l];this._seg(_,m,g),this._seg(x,g,S)}}update(t,e,n,i){let r=e.out,o=this.gauges,a=(m,g,S)=>{m&&m.ns[g]&&(m.ns[g].rotation.z=-S*Et)},l=r.ias/.514444,c=r.alt/.3048,h=r.vs/.00508;for(let m of["c_","f_"])a(o[m+"asi"],0,_n.asi(l)),a(o[m+"alt"],0,c%1e3/1e3*360),a(o[m+"alt"],1,c%1e4/1e4*360),a(o[m+"alt"],2,c%1e5/1e5*360),a(o[m+"vsi"],0,_n.vsi(h)),a(o[m+"radalt"],0,_n.radalt(Math.max(0,r.radAlt/.3048))),a(o[m+"g"],0,_n.g(r.nz));o.sby.mat.uniforms.pitch.value=r.pitch,o.sby.mat.uniforms.roll.value=-r.roll;let u=new Date;for(let m of["c_","f_"])a(o[m+"clock"],0,(u.getHours()%12+u.getMinutes()/60)*30),a(o[m+"clock"],1,u.getMinutes()*6),a(o[m+"clock"],2,u.getSeconds()*6);if(this._efisT=(this._efisT||0)+t,this._efisT>.04){this._efisT=0;let m=(r.heading/Et%360+360)%360;this.hdgBug===void 0&&(this.hdgBug=Math.round(m/10)*10%360),this.adiDisplay.update({pitch:Math.round(r.pitch/Et*5)/5,roll:Math.round(r.roll/Et*2)/2,slip:Math.round(J(-r.ny*3.2,-1,1)*20)/20,ra:Math.round(Math.max(0,r.radAlt/.3048)/5)*5,ias:Math.round(l),dh:r.radAlt/.3048<100&&!n.gearDown&&h<-100}),this.hsiDisplay.update({hdg:Math.round(m*2)/2,bug:this.hdgBug,crs:this.hdgBug,dev:0,gs:Math.round(r.gs/.514444)})}this._updateAvatar();let d=e.ctl;for(let m of this.yokes)m.col.rotation.x=d.elevator*12*Et,m.wheel.rotation.z=-d.aileron*70*Et;for(let m of this.pedals)m.pv.position.z=ie(1.55,0,0).z+(m.lr<0?1:-1)*d.rudder*.05;for(let m=0;m<2;m++){let g=n.engines[m];this.powerLevers[m].rotation.x=(g.reverseLever>.02?32+12*g.reverseLever:28-60*g.lever)*Et}this.flapLever.rotation.x=(-22+n.flapIndex/3*48)*Et,this.trimWheel.rotation.x=n.elevTrim*8,this.gearLever.rotation.x=(n.gearDown?-25:25)*Et,this.tiller.rotation.y=-(d.tiller||0)*1.5,this.dropSelector.rotation.y=-n.dropMode*40*Et;let f=n.gearPos,p=f>.02&&f<.98;for(let m of this.gearLights)m.material.color.setHex(p?16719888:f>=.98?2162480:663562);let v=Math.floor(i*3)%2===0;for(let m of this.masterLights){let g=m.kind===0?n.warn.master:n.warn.caution;m.m.material.color.setHex(g&&v?m.kind===0?16719888:16755200:m.kind===0?4198416:4206608)}if(this._dispT=(this._dispT||0)+t,this._dispT>.1){this._dispT=0;let m=ee.waterCapacity/4,g=n.foamMix.reduce((w,y)=>w+y,0)/4,S=n.doorOpen.map(w=>w>.1);this.waterStatus.update({total:Math.round(n.waterLiters()/5)*5,tanks:n.tanks.map(w=>Math.round(w/m*40)/40),doors:S,foam:n.foamArmed,foamPct:Math.round(g*100),scoop:r.scoopRate>20}),this.dropCtl.update({mode:Os[n.dropMode].id,preset:Math.round(n.scoopPreset*100),doors:S,armed:n.waterLiters()>10});let _=n.engines,x=(w,y)=>Math.round(w/y)*y;this.engDisplay.update({trq:_.map(w=>x(w.torque,1)),itt:_.map(w=>x(w.itt,5)),np:_.map(w=>x(w.np/100*ee.propRPM,5)),rev:_.some(w=>w.reverse>.1)}),this.engLower.update({nh:_.map(w=>x(w.nh,.1)),ff:_.map(w=>x(w.ff,5)),oilP:_.map(w=>x(w.oilP,1)),oilT:_.map(w=>x(w.oilT,1))});let M=_[0].running||_[1].running?3e3:0;this.sysDisplay.update({fuel:[x(n.fuel/2,5),x(n.fuel/2-15,5)],hyd:M,trim:Math.round(J(n.elevTrim,-1,1)*50)/50,flap:Math.round(n.flapPos*2)/2,flapMoving:Math.abs(n.flapPos-ee.flapDetents[n.flapIndex])>.3});let b=n.warn;this.annunciator.update({stall:b.stall,overspeed:b.overspeed,gearWater:b.gearWater&&v,gearUpLand:b.gearUpLand&&v,probes:n.probePos>.5,probeSpeed:b.probeSpeed,tanksFull:n.waterLiters()>ee.waterCapacity-5,doors:n.doorOpen.some(w=>w>.1),flapSpeed:b.flapSpeed,lowFuel:b.lowFuel,overweight:b.overweight,foam:n.foamArmed,park:n.parkingBrake,eng1:!n.engines[0].running,eng2:!n.engines[1].running,rev:n.engines.some(w=>w.reverse>.1)})}}};var ne=D,Ep=5.05,fy=-3.9*Et,Tp=4.3,Ap=3,py=Math.PI*(ee.propDiameter/2)**2,Rp=ee.propRPM/60*2*Math.PI,Cp=34e3,Pp=.86,my=95,Ip=s=>1/(1+Math.exp(-s));function gy(s,t,e){let n=.82*e;if(s>n)return n+(e-n)*(1-Math.exp(-(s-n)/(e-n)));let i=.82*t;return s<i?i+(t-i)*(1-Math.exp(-(s-i)/(t-i))):s}function Bu(s,t,e,n,i,r,o,a){let l=i*(s-r)+t,c=r+(e-t)/i+1.8*Et,h=r+(n-t)/i-1.8*Et,u=1.25*Et,d=Ip((s-c)/u),f=Ip((h-s)/u),p=J(d+f,0,1),v=Math.sin(2*s),m=Math.sin(s),g=1.05*v+.3*t*Math.cos(s),S=.06+1.22*m*m,_=gy(l,n,e);return a.cl=(1-p)*_+p*g,a.cd=(1-p)*(o+.006*_*_)+p*S,a.sep=p,a.margin=Math.min(c-s,s-h),a}var Fc=class{constructor(t){this.world=t,this.pos=new ne,this.vel=new ne,this.quat=new qe,this.omega=new ne,this.cg=new ne,this.mass=ee.emptyMass,this.inertia=new ne(17e4,35e4,24e4),this.time=0,this.accum=0,this.dt=1/240,this.surf={elev:0,ail:0,rud:0,flap:0},this.ctl={elevator:0,aileron:0,rudder:0,brakeL:0,brakeR:0,tiller:0},this.sys=null,this.crash=null,this.damage=0,this.out=this._makeOut(),this._buildElements(),this._tmp={f:new ne,m:new ne,r:new ne,v:new ne,w:new ne,a:new ne,b:new ne,c:new ne,d:new ne,n:new ne,q:new qe,qi:new qe,wind:new ne,vAir:new ne,vAirB:new ne,up:new ne,fwd:new ne,right:new ne,coef:{cl:0,cd:0,sep:0}},this.prevCLw=.3,this.sprayPoints=[];for(let e=0;e<64;e++)this.sprayPoints.push({x:0,y:0,z:0,intensity:0,vx:0,vz:0,side:0,s:0});this.sprayCount=0}_makeOut(){return{ias:0,tas:0,gs:0,mach:0,alt:0,agl:0,radAlt:0,vs:0,heading:0,pitch:0,roll:0,alpha:0,beta:0,nz:1,ny:0,slip:0,rho:1.225,onWater:!1,onGround:!1,planing:!1,hullDepth:0,wetLength:0,waterSpeed:0,scoopRate:0,probeImmersion:0,stall:!1,stallMargin:1,thrust:[0,0],gearLoad:[0,0,0],gearCompress:[0,0,0],wheelSpeed:[0,0,0],impact:0,gearInWater:!1,wingtipWater:0,overG:0,turnRate:0,track:0,propWash:[0,0],clWing:0,surfaceUnder:"water",groundBelow:0,waterBelow:0,ge:0}}_buildElements(){let t=nt.wing;this.wingStrips=[];let e=8,n=t.halfSpan-t.rootY;for(let f of[-1,1])for(let p=0;p<e;p++){let v=t.rootY+n*p/e,m=t.rootY+n*(p+1)/e,g=(v+m)/2,S=m-v,_=J((Math.min(m,t.flapEnd)-Math.max(v,t.flapStart))/S,0,1),x=J((Math.min(m,t.ailEnd)-Math.max(v,t.ailStart))/S,0,1),M=p===e-1?.84:p===e-2?.95:1;this.wingStrips.push({side:f,y0:v,y1:m,yc:g,width:S,area:S*t.chord,pos:new ne().copy(xn(t.sLE+.25*t.chord,t.h,f*g)),flapFrac:_,ailFrac:x,tipLoss:M,spoiler:g>5.5&&g<9.6?1:0,slipCov:[0,0]})}let i=.86*ee.propDiameter/2,r=[-nt.engine.y,nt.engine.y];for(let f of this.wingStrips)for(let p=0;p<2;p++){let v=Math.max(f.side*f.y0,f.side*f.y1),m=Math.min(f.side*f.y0,f.side*f.y1),S=Math.min(v,r[p]+i)-Math.max(m,r[p]-i);f.slipCov[p]=J(S/f.width,0,1)}let o=nt.htail;this.htStrips=[];for(let f of[-1,1])for(let p=0;p<2;p++){let v=o.halfSpan*p/2,m=o.halfSpan*(p+1)/2,g=(v+m)/2,S=g/o.halfSpan,_=o.rootChord+(o.tipChord-o.rootChord)*S,x=o.sLE+o.sweepLE*S,M=Math.abs(g-nt.engine.y)<1.9?.75:Math.abs(g-nt.engine.y)<2.6?.35:0;this.htStrips.push({side:f,yc:g,chord:_,area:(m-v)*_,pos:new ne().copy(xn(x+.25*_,o.h,f*g)),slip:M,eng:f<0?0:1})}let a=nt.vtail;this.vtStrips=[];for(let f=0;f<2;f++){let p=a.hRoot+(a.hTip-a.hRoot)*f/2,v=a.hRoot+(a.hTip-a.hRoot)*(f+1)/2,m=(p+v)/2,g=(m-a.hRoot)/(a.hTip-a.hRoot),S=a.rootChord+(a.tipChord-a.rootChord)*g,_=a.sRootLE+(a.sTipLE-a.sRootLE)*g;this.vtStrips.push({area:(v-p)*S*.86,pos:new ne().copy(xn(_+.25*S,m,0)),rudder:1})}for(let f of[-1,1])this.vtStrips.push({area:1.55,pos:new ne().copy(xn(o.sLE+.55+.35,o.h+.2,f*o.finletY)),rudder:0,finlet:f});this.engines=[-1,1].map(f=>({pos:new ne().copy(xn(nt.engine.sProp,nt.engine.h,f*nt.engine.y)),vi:0,thrust:0,side:f})),this.hullSamples=[];let l=.5;for(let f=.35;f<19.3;f+=l){let p=je(f),v=us(f),m=Qo(f),g=di(f),S=(je(f+.05)-je(f-.05))/.1;for(let _ of[-1,1]){let x=xn(f,p+(m-p)*.5,_*v*.5),M=new ne(_*Math.sin(g),-Math.cos(g),S*Math.cos(g)).normalize();this.hullSamples.push({s:f,side:_,ds:l,keel:p,chineRel:Math.max(m-p,.02),hb:v,beta:g,tanb:Math.tan(g),pos:new ne(x.x,x.y,x.z),n:M,fore:f<nt.sStep,depth:0})}}let c=nt.float;this.floatSamples=[];for(let f of[-1,1])for(let p=0;p<3;p++){let v=c.sFront+.6+p*1.15,m=c.width/2,g=25*Et;for(let S of[-1,1]){let _=xn(v,c.hBottom+.12,f*c.y+S*m*.5);this.floatSamples.push({s:v,side:S,fside:f,ds:1.15,keel:c.hBottom,chineRel:m*Math.tan(g),hb:m,beta:g,tanb:Math.tan(g),pos:new ne(_.x,_.y,_.z),n:new ne(S*Math.sin(g),-Math.cos(g),p===0?-.25:0).normalize(),fore:!0,depth:0,sideH:c.height})}}this.structPoints=[];let h=(f,p,v,m)=>this.structPoints.push({pos:new ne().copy(xn(f,p,v)),kind:m});for(let f of[.4,1.2,2.5,4.5,6.5,8.9,10.5,13,15.5,17.5,19.2])h(f,je(f),0,"hull");h(nt.float.sFront+1.5,nt.float.hBottom,-nt.float.y,"float"),h(nt.float.sFront+1.5,nt.float.hBottom,nt.float.y,"float"),h(nt.wing.sLE+1.2,nt.wing.h,-nt.wing.halfSpan,"wingtip"),h(nt.wing.sLE+1.2,nt.wing.h,nt.wing.halfSpan,"wingtip"),h(nt.vtail.sRootLE+4,2.7,0,"tail"),this.propTipLow=nt.engine.h-ee.propDiameter/2;let u=nt.gear.nose,d=nt.gear.main;this.gearPts=[{name:"nose",pos:new ne().copy(xn(u.s,u.pivotH-u.legLen,0)),r:u.wheelR,k:26e4,c:32e3,travel:.3,steer:!0,drag:.32},{name:"left",pos:new ne().copy(xn(d.s,d.wheelH,-d.wheelY)),r:d.wheelR,k:56e4,c:65e3,travel:.35,brake:"L",drag:.55},{name:"right",pos:new ne().copy(xn(d.s,d.wheelH,d.wheelY)),r:d.wheelR,k:56e4,c:65e3,travel:.35,brake:"R",drag:.55}];for(let f of this.gearPts)f.comp=0,f.load=0,f.spin=0;this.probes=[-1,1].map(f=>({side:f,root:new ne().copy(xn(nt.probe.s,je(nt.probe.s)+nt.probe.y*Math.tan(di(nt.probe.s)),f*nt.probe.y)),tip:new ne,immersion:0}))}reset(t,e,n=0,i="air"){this.crash=null,this.damage=0,this.time=0,this.accum=0,this.omega.set(0,0,0),this._updateMass(!0);let r=i==="runway"?.4*Et:i==="water"?1.5*Et:2.5*Et;if(this.quat.setFromEuler(new Dn(r,e,0,"YXZ")),this.pos.copy(t),i==="runway"){let a=this.world.groundHeight(t.x,t.z);this.pos.y=a+nt.hCG+this.cg.y-nt.gear.main.wheelH+nt.gear.main.wheelR-.12}else if(i==="water"){let a=this.world.waterHeight(t.x,t.z,0);this.pos.y=a+nt.hCG+this.cg.y-(n>15?.25:.95)}let o=new ne(0,0,-1).applyQuaternion(this.quat);this.vel.copy(o).multiplyScalar(n),this.vel.y=0;for(let a of this.gearPts)a.comp=0;this.prevCLw=.4}_updateMass(t=!1){let e=this.sys;if(!e)return;let n=e.waterMass(),i=e.fuel,r=ee.emptyMass,o=r+n+i,a=xn(nt.tankS,.25+nt.tanksH*J(n/6800,.15,1)*.6,0),l=xn(nt.wing.sLE+1.6,nt.wing.h,0),c=0,h=(n*a.y+i*l.y)/o,u=(n*a.z+i*l.z)/o,d=this._tmp?this._tmp.c.set(c,h,u):new ne(c,h,u);if(!t){let p=this._tmp.d.copy(d).sub(this.cg).applyQuaternion(this.quat);this.pos.add(p)}this.cg.copy(d),this.mass=o;let f=o/r;this.inertia.set(168e3*(.75+.25*f)+n*1.2,35e4*(.8+.2*f)+i*22+n*1,24e4*(.85+.15*f)+i*25+n*.5)}update(t){this.accum+=Math.min(t,.1);let e=0;for(;this.accum>=this.dt&&e<40;)this.step(this.dt),this.accum-=this.dt,e++}step(t){if(this.crash){this.time+=t;return}let e=this.sys,n=this._tmp,i=this.world;this.time+=t,e.update(t,this),this._updateMass(!1);let r=this.ctl,o=(r.elevator>=0?r.elevator*32:r.elevator*22)+e.elevTrim*11;this.surf.elev=Ne(this.surf.elev,J(o,-26,34),120,t),this.surf.ail=Ne(this.surf.ail,J(r.aileron*27+e.ailTrim*4,-30,30),120,t),this.surf.rud=Ne(this.surf.rud,J(r.rudder*30+e.rudTrim*8,-32,32),100,t),this.surf.flap=e.flapPos;let a=n.f.set(0,0,0),l=n.m.set(0,0,0),c=this.quat,h=n.qi.copy(c).invert(),u=this.out,d=ia(this.pos.y),f=d.rho;i.windAt(this.pos.x,this.pos.y,this.pos.z,this.time,n.wind);let p=n.vAir.copy(this.vel).sub(n.wind),v=n.vAirB.copy(p).applyQuaternion(h),m=p.length();u.rho=f;let g=i.groundHeight(this.pos.x,this.pos.z),S=i.waterHeight(this.pos.x,this.pos.z,this.time),_=Math.max(g,S);u.groundBelow=g,u.waterBelow=S,u.surfaceUnder=S>g?"water":"land";let x=this.pos.y+(nt.wing.h-nt.hCG-this.cg.y)-_,M=J(x/ee.span,.02,2),b=(16*M)**2/(1+(16*M)**2);u.ge=1-b;for(let St=0;St<2;St++){let qt=this.engines[St],Kt=e.engines[St],oe=n.r.copy(qt.pos).sub(this.cg),Ft=n.v.copy(this.omega).cross(oe).add(v),Ht=Math.max(-Ft.z,0),ce=0,_e=Kt.shaftPower;if(Kt.reverse>0)ce=-Cp*.42*Kt.reverse*J(1-Ht/45,.15,1);else if(_e>1){let Ae=_e/ee.enginePower,le=Cp*Math.pow(Ae,2/3),N=Pp*_e/(le*(u.onGround||u.onWater?Math.max(.3,hn(0,.12,Kt.lever)):1));ce=Pp*_e/Math.cbrt(Ht*Ht*Ht+N*N*N),ce-=.5*f*Ht*Ht*.3*Math.pow(1-J(Ae*3,0,1),2)}else ce=-.5*f*Ht*Ht*(Kt.feathered?.05:.3);ce*=f/1.225>.6?1:f/1.225,qt.thrust=ce,u.thrust[St]=ce;let ue=Math.max(ce,0);qt.vi=.5*(-Ht+Math.sqrt(Ht*Ht+2*ue/(f*py))),u.propWash[St]=Ht+2*qt.vi,n.a.set(0,0,-ce),this._addBodyForce(n.a,oe,a,l,c);let ae=_e/Rp;l.z+=ae*.9,l.y+=ue*(.06+.5*J(u.alpha,-.2,.3));let k=my*Rp*(Kt.np/100);n.b.set(0,0,-k),n.a.copy(this.omega).cross(n.b),l.sub(n.a)}let w=this.surf.flap,y=w/25,E=.9*Math.pow(J(y,0,1.2),.85),A=.0011*w+7e-5*w*w,R=this.surf.ail*Et,C=0,L=.5*f*m*m,P=n.coef,F=ee.aspect,U=1/(Math.PI*.8*F),B=b,X=1;for(let St of this.wingStrips){let qt=n.r.copy(St.pos).sub(this.cg),Kt=n.v.copy(this.omega).cross(qt).add(v),oe=St.ailFrac*R*(St.side>0?-1:1),Ft=St.spoiler*J(((St.side>0?1:-1)*this.surf.ail-4)/14,0,1),Ht=St.flapFrac*E+Ep*.42*oe-.45*Ft,ce=(1.6+1*St.flapFrac*E)*St.tipLoss,_e=-1.05;for(let ue=0;ue<2;ue++){let ae=0,k=0;if(ue===0)ae=1-Math.min(1,St.slipCov[0]+St.slipCov[1]);else{let Yt=St.slipCov[0]>0?0:St.slipCov[1]>0?1:-1;if(Yt<0)continue;ae=St.slipCov[Yt],k=1.55*this.engines[Yt].vi}if(ae<=0)continue;let Ae=-Kt.z+k,le=Kt.y,N=Ae*Ae+le*le;if(N<.01)continue;let T=Math.sqrt(N),W=Math.atan2(-le,Ae)+nt.wing.incidence+(St.yc>9?-1.2*Et:0);Bu(W,Ht,ce,_e,Ep*St.tipLoss*(1+.08*(1-B)),fy,.0085+A*St.flapFrac+.03*Ft,P);let Y=.5*f*N*St.area*ae,j=P.cl*P.cl*U*B*(1-P.sep),lt=Y*P.cl,ut=Y*(P.cd+j),et=-le/T,st=Ae/T,dt=-Ae/T,Ot=-le/T,pt=lt*et+ut*dt,ft=lt*st+ut*Ot;n.a.set(0,ft,-pt),this._addBodyForce(n.a,qt,a,l,c);let Bt=-.085-.22*St.flapFrac*E;l.x+=Y*nt.wing.chord*Bt*(1-P.sep*.5),C+=P.cl*St.area*ae*(N/Math.max(m*m,1)),W>0&&T>15&&St.side!==0&&(X=Math.min(X,P.margin))}}let O=C/ee.wingArea;u.clWing=O,this.prevCLw+=(O-this.prevCLw)*J(t*8,0,1);let H=J(2*this.prevCLw/(Math.PI*F)*1.05,-.1,.32)*(.45+.55*B),V=-this.surf.elev*Et,ot=-1.3*Et;for(let St of this.htStrips){let qt=n.r.copy(St.pos).sub(this.cg),Kt=n.v.copy(this.omega).cross(qt).add(v),oe=St.slip*1.25*this.engines[St.eng].vi,Ft=-Kt.z+oe,Ht=Kt.y,ce=Ft*Ft+Ht*Ht;if(ce<.01)continue;let _e=Math.sqrt(ce),ue=Math.atan2(-Ht,Ft)+ot-H;Bu(ue,Tp*.55*V,1.25,-1.25,Tp,0,.009,P);let ae=.5*f*ce*St.area*.95,k=P.cl*P.cl/(Math.PI*.85*5.3),Ae=ae*P.cl,le=ae*(P.cd+k),N=-Ht/_e,T=Ft/_e,W=-Ft/_e,Y=-Ht/_e;n.a.set(0,Ae*T+le*Y,-(Ae*N+le*W)),this._addBodyForce(n.a,qt,a,l,c)}let rt=this.surf.rud*Et;for(let St of this.vtStrips){let qt=n.r.copy(St.pos).sub(this.cg),Kt=n.v.copy(this.omega).cross(qt).add(v),oe=0;St.finlet&&(oe=1.1*this.engines[St.finlet<0?0:1].vi);let Ft=-Kt.z+oe,Ht=Kt.x,ce=Ft*Ft+Ht*Ht;if(ce<.01)continue;let _e=Math.sqrt(ce),ue=Math.atan2(-Ht,Ft);Bu(ue,St.rudder?-Ap*.5*rt:0,1.15,-1.15,Ap,0,.01,P);let ae=.5*f*ce*St.area,k=P.cl*P.cl/(Math.PI*.85*1.8),Ae=ae*P.cl,le=ae*(P.cd+k),N=-Ht/_e,T=Ft/_e,W=-Ft/_e,Y=-Ht/_e;n.a.set(Ae*T+le*Y,0,-(Ae*N+le*W)),this._addBodyForce(n.a,qt,a,l,c)}if(m>.5){let St=-v.z,qt=v.y,Kt=v.x,oe=Math.atan2(-qt,Math.max(St,.1)),Ft=Math.asin(J(Kt/m,-1,1)),Ht=3;Ht*=1+2.5*Math.sin(oe)**2+3*Math.sin(Ft)**2,Ht+=1.25*e.gearPos+.12*e.probePos;for(let ae=0;ae<4;ae++)Ht+=.22*e.doorOpen[ae];n.a.copy(v).normalize().multiplyScalar(-L*Ht),n.r.copy(xn(8,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let ce=-L*8.5*Math.sin(Ft)*Math.cos(Ft);n.a.set(ce,0,0),n.r.copy(xn(5.6,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let _e=L*2.4*Math.sin(oe)*Math.cos(oe);n.a.set(0,_e,0),n.r.copy(xn(3.6,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let ue=-.07*(1-.4*J(this.prevCLw-.5,0,1));l.z-=ue*L*ee.wingArea*ee.span*J(Ft,-.5,.5),u.alpha=oe,u.beta=Ft}else u.alpha=0,u.beta=0;l.x-=.5*f*Math.max(m,5)*40*3.5*3.5*this.omega.x*1.2,l.y-=.5*f*Math.max(m,5)*60*4*4*this.omega.y*.8,l.z-=.5*f*Math.max(m,5)*20*this.omega.z,this.sprayCount=0,this._hydro(a,l,c,h,t),this._ground(a,l,c,h,t);let yt=n.w.copy(a);a.y-=this.mass*9.80665;let Lt=n.a.copy(a).divideScalar(this.mass);this.vel.addScaledVector(Lt,t),this.pos.addScaledVector(this.vel,t);let Xt=this.inertia,K=this.omega,tt=n.b.set(K.x*Xt.x,K.y*Xt.y,K.z*Xt.z),ht=n.c.copy(K).cross(tt);K.x+=(l.x-ht.x)/Xt.x*t,K.y+=(l.y-ht.y)/Xt.y*t,K.z+=(l.z-ht.z)/Xt.z*t;let zt=4;K.lengthSq()>zt*zt&&K.setLength(zt);let _t=n.q.set(K.x*t*.5,K.y*t*.5,K.z*t*.5,1);c.multiply(_t).normalize();let Tt=yt.applyQuaternion(h).divideScalar(this.mass*9.80665);u.nz=Tt.y,u.ny=Tt.x,u.slip=J(-Tt.x*4,-1,1),u.overG=Math.max(u.nz-3.25,-1-u.nz,0),(u.nz>4.6||u.nz<-2.2)&&this._doCrash("Sovraccarico strutturale ("+u.nz.toFixed(1)+" g)"),this._outputs(m,f,d,X)}_addBodyForce(t,e,n,i,r){let o=this._tmp;i.x+=e.y*t.z-e.z*t.y,i.y+=e.z*t.x-e.x*t.z,i.z+=e.x*t.y-e.y*t.x,o.d.copy(t).applyQuaternion(r),n.add(o.d)}_addWorldForce(t,e,n,i,r){let o=this._tmp;n.add(t);let a=o.d.copy(t).applyQuaternion(r);i.x+=e.y*a.z-e.z*a.y,i.y+=e.z*a.x-e.x*a.z,i.z+=e.x*a.y-e.y*a.x}_pointVel(t,e,n){return n.copy(this.omega).cross(t).applyQuaternion(e).add(this.vel),n}_hydro(t,e,n,i,r){let o=this.world,a=this.out,l=this.sys,c=this._h||(this._h={rb:new ne,pw:new ne,vw:new ne,vb:new ne,fw:new ne,fwd:new ne,right:new ne}),{rb:h,pw:u,vw:d,vb:f,fw:p}=c,v=0,m=99,g=-99,S=-9,_=0,x=Math.hypot(this.vel.x,this.vel.z),M=x/Math.sqrt(9.80665*2.6),b=.17*Math.pow(M/2.4,2)*Math.exp(1-Math.pow(M/2.4,2)),w=!1,y=(L,P)=>{h.copy(L.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let F=o.groundHeight(u.x,u.z),U=o.waterHeight(u.x,u.z,this.time);if(U<=F+.15){L.depth=-9;return}let X=U-u.y+.5*L.chineRel;if(L.depth=X,X<=0)return;w=!0,S=Math.max(S,X);let O=L.chineRel,H,V,ot=0;if(X<O){let Tt=X/L.tanb;H=.5*X*Math.min(Tt,L.hb),V=Math.min(Tt,L.hb)/Math.cos(L.beta)}else H=.5*O*L.hb+L.hb*(X-O),V=L.hb/Math.cos(L.beta),ot=X-O;if(P){let Tt=L.sideH||.8;X>Tt&&(H=.5*O*L.hb+L.hb*(Tt-O))}let rt=H*L.ds;v+=rt,P||(m=Math.min(m,L.s),g=Math.max(g,L.s)),p.set(0,998*9.80665*rt,0),this._addWorldForce(p,h,t,e,i),this._pointVel(h,n,d),f.copy(d).applyQuaternion(i);let yt=f.dot(L.n),Lt=f.x-yt*L.n.x,Xt=f.y-yt*L.n.y,K=f.z-yt*L.n.z,tt=Math.sqrt(Lt*Lt+Xt*Xt+K*K),ht=V*L.ds,zt;if(yt>0){let Tt=L.fore?.125:.08;zt=998*ht*(Tt*tt*yt+.55*yt*yt),X<.35&&(_=Math.max(_,-d.y))}else zt=998*ht*.02*tt*yt;if(p.copy(L.n).multiplyScalar(-zt),tt>.01){let Tt=.002+7e-4*hn(3,15,tt),St=.5*998*Tt*(ht+ot*L.ds)*tt;p.x-=St*Lt,p.y-=St*Xt,p.z-=St*K}let _t=(Math.min(X,O)*.7+ot)*L.ds;if(p.x-=.5*998*1.1*_t*Math.abs(f.x)*f.x,p.applyQuaternion(n),x>.3){let Tt=998*9.80665*rt*b;p.x-=Tt*this.vel.x/x,p.z-=Tt*this.vel.z/x}if(this._addWorldForce(p,h,t,e,i),this.sprayCount<this.sprayPoints.length&&tt>3){let Tt=this.sprayPoints[this.sprayCount++];Tt.x=u.x,Tt.y=U,Tt.z=u.z,Tt.intensity=J(tt/30,0,1.5)*J(X/.25,0,1),Tt.vx=d.x,Tt.vz=d.z,Tt.side=L.side,Tt.s=L.s,Tt.float=P?1:0}};for(let L of this.hullSamples)y(L,!1);for(let L of this.floatSamples)y(L,!0);a.onWater=w,a.hullDepth=Math.max(S,0),a.wetLength=g>m?g-m+.5:0,a.displaced=v,a.impact=_,a.planing=w&&x>13&&v*998<this.mass*.45,a.waterSpeed=w?x:0,w&&_>5.2&&this._doCrash(this._gearWaterT>0?"Ammaraggio con carrello estratto: capottamento":"Ammaraggio troppo duro ("+(_/.00508).toFixed(0)+" ft/min)"),a.wingtipWater=0;let E=0,A=0,R=l.probePos;for(let L of this.probes){if(L.tip.copy(L.root),L.tip.y-=.88*R,L.tip.z+=.12*R,L.immersion=0,R<.05)continue;h.copy(L.tip).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let P=o.waterHeight(u.x,u.z,this.time),F=o.groundHeight(u.x,u.z);if(F>u.y&&P<F+.1){x>3&&(this.damage=Math.min(1,this.damage+r*.5));continue}if(P<=F+.3)continue;let U=P-u.y;if(U<=0)continue;let B=J(U/.32,0,1)*J((R-.5)/.5,0,1);L.immersion=B,A=Math.max(A,B),this._pointVel(h,n,d),f.copy(d).applyQuaternion(i);let X=Math.max(-f.z,0),O=.0074*X*B,H=O*998;E+=O;let V=d.length(),ot=H*X,rt=.5*998*.0055*B*V*V;V>.1&&(p.copy(d).multiplyScalar(-(ot+rt)/V),this._addWorldForce(p,h,t,e,i))}let C=l.addScoopedWater(E*1e3*r);a.scoopRate=E*1e3,a.scoopAccepted=C,a.probeImmersion=A}_ground(t,e,n,i,r){let o=this.world,a=this.sys,l=this.out,c=this._h,{rb:h,pw:u,vw:d,fw:f,fwd:p,right:v}=c,m=!1;l.gearInWater=!1;let g=a.gearPos,S=this.vel.length();for(let _=0;_<3;_++){let x=this.gearPts[_];if(x.load=0,g<.98){x.comp=0;continue}h.copy(x.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let M=o.groundHeight(u.x,u.z),b=o.waterHeight(u.x,u.z,this.time);if(this._pointVel(h,n,d),b>M&&b>u.y-x.r){let H=J((b-(u.y-x.r))/(2*x.r),0,1.5),V=d.length();V>.1&&(f.copy(d).multiplyScalar(-.5*998*1*x.drag*H*V),this._addWorldForce(f,h,t,e,i)),H>.2&&V>8&&(l.gearInWater=!0)}let w=u.y-x.r,y=M-w;if(y<=0){x.comp=Math.max(0,x.comp-r*2),x.spin*=.995;continue}m=!0;let E=Math.min(y,x.travel),A=-d.y,R=x.k*E+x.c*A;if(y>x.travel&&(R+=(y-x.travel)*6e6+Math.max(A,0)*2e5,A>3.6&&this._doCrash("Atterraggio troppo duro: carrello collassato")),R=Math.max(R,0),x.comp=E,x.load=R,p.set(0,0,-1).applyQuaternion(n),x.steer){let H=55*Et*J(1-S/30,.12,1),V=J(this.ctl.tiller*1+this.ctl.rudder*.25,-1,1)*H;a.noseSteer=V,p.applyAxisAngle(_y(n),-V)}p.y=0,p.normalize(),v.set(-p.z,0,p.x);let C=d.x*p.x+d.z*p.z,L=d.x*v.x+d.z*v.z;x.spin=C/x.r;let P=0;x.brake==="L"&&(P=this.ctl.brakeL),x.brake==="R"&&(P=this.ctl.brakeR),a.parkingBrake&&(P=1);let F=o.surfaceFriction?o.surfaceFriction(u.x,u.z):1,U=.018*(2-F),B=.55*F,X=-Math.tanh(C/.4)*R*(U+B*P);P>.5&&Math.abs(C)<.6&&(X=-C*R*1.2);let O=-Math.tanh(L/.18)*R*.75*F;f.set(0,R,0),f.addScaledVector(p,X),f.addScaledVector(v,O),this._addWorldForce(f,h,t,e,i)}for(let _=0;_<3;_++)l.gearLoad[_]=this.gearPts[_].load,l.gearCompress[_]=this.gearPts[_].comp,l.wheelSpeed[_]=this.gearPts[_].spin;for(let _ of this.structPoints){h.copy(_.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let x=o.groundHeight(u.x,u.z),M=o.waterHeight(u.x,u.z,this.time);this._pointVel(h,n,d);let b=Math.hypot(d.x,d.z);if(_.kind==="wingtip"&&M>x&&u.y<M+.05&&b>9){l.wingtipWater=1,this._doCrash("Estremit\xE0 alare in acqua: l'aereo ha fatto la 'ruota'");return}let w=x-u.y;if(w<=0)continue;m=!0;let y=d.y;if((_.kind==="wingtip"||_.kind==="tail")&&(b>6||y<-2)){this._doCrash(_.kind==="wingtip"?"Ala contro il terreno":"Coda contro il terreno");return}if(_.kind==="hull"&&M<=x+.3){if(-y>4||b>45*.514444){this._doCrash(g<.98?"Atterraggio sul ventre: carrello non estratto":"Impatto con il terreno");return}this.damage=Math.min(1,this.damage+r*b*.02)}if(-y>7){this._doCrash("Impatto con il terreno");return}let E=Math.max(0,w*3e6-y*25e4);f.set(0,E,0),b>.01&&(f.x-=.45*E*d.x/Math.max(b,.5),f.z-=.45*E*d.z/Math.max(b,.5)),this._addWorldForce(f,h,t,e,i)}for(let _ of this.engines){h.copy(_.pos).sub(this.cg),h.y-=ee.propDiameter/2,u.copy(h).applyQuaternion(n).add(this.pos);let x=o.groundHeight(u.x,u.z),M=o.waterHeight(u.x,u.z,this.time);if(u.y<Math.max(x,M)-.05&&Math.abs(_.thrust)>500){this._doCrash(M>x?"Eliche in acqua":"Eliche contro il terreno");return}}l.onGround=m,this._gearWaterT=l.gearInWater?3:Math.max(0,(this._gearWaterT||0)-r),l.gearInWater&&S>20&&!this.crash&&Math.asin(J(new ne(0,0,-1).applyQuaternion(n).y,-1,1))<-25*Et&&this._doCrash("Ammaraggio con carrello estratto: capottamento")}_doCrash(t){this.crash||(this.crash={reason:t,time:this.time,pos:this.pos.clone(),vel:this.vel.clone()})}_outputs(t,e,n,i){let r=this.out,o=this.quat,a=this._tmp.fwd.set(0,0,-1).applyQuaternion(o),l=this._tmp.up.set(0,1,0).applyQuaternion(o),c=this._tmp.right.set(1,0,0).applyQuaternion(o);r.tas=t,r.ias=t*Math.sqrt(e/1.225),r.gs=Math.hypot(this.vel.x,this.vel.z),r.mach=t/n.a,r.alt=this.pos.y,r.vs=this.vel.y,r.pitch=Math.asin(J(a.y,-1,1)),r.roll=Math.atan2(-c.y,l.y);let h=Math.atan2(a.x,-a.z);h<0&&(h+=2*Math.PI),r.heading=h;let u=Math.atan2(this.vel.x,-this.vel.z);u<0&&(u+=2*Math.PI),r.track=u,r.turnRate=-this.omega.y*l.y;let d=this.pos.y+(-nt.hCG-this.cg.y)*l.y;r.radAlt=d-Math.max(r.groundBelow,r.waterBelow),r.agl=r.radAlt,r.stallMargin=i,r.stall=i<4.2*Et&&!r.onGround&&!r.onWater&&r.ias>10}},xy=new ne;function _y(s){return xy.set(0,1,0).applyQuaternion(s)}var At=Math.random,Uc=class{constructor(t,{quality:e="medium",world:n,onDeposit:i}){this.world=n,this.onDeposit=i;let r=e==="low"?.5:e==="high"?1.5:1;this.q=r;let o=rp(256,3),a=hs(128,{power:1.8,noise:.35,seed:8}),l=hs(64,{power:1.1,noise:.25,seed:13});this.drop=new Ti({max:Math.round(5e3*r),texture:l,lit:.85,stretch:.9,name:"dropCore",renderOrder:6}),this.mist=new Ti({max:Math.round(2600*r),texture:a,lit:.9,name:"mist",renderOrder:7,nearFade:1}),this.spray=new Ti({max:Math.round(6e3*r),texture:o,lit:.75,stretch:.25,name:"spray",renderOrder:6});for(let c of[this.drop,this.mist,this.spray])t.add(c.mesh);this.wake=new ku(t),this._v=new D,this._p=new D,this._w=new D,this._acc={drop:[0,0,0,0],scoop:0,hull:0,overflow:0,prop:[0,0]},this.windVec=new D,this.cameraShake=0,this.windscreenWet=0}_bodyPoint(t,e,n,i){let r=this._w.copy(e).sub(t.cg);i.copy(t.omega).cross(r).applyQuaternion(t.quat).add(t.vel),n.copy(r).applyQuaternion(t.quat).add(t.pos)}update(t,e,n,i,r,o,a){let l=this.world,c=e.out;r.windAt(e.pos.x,30,e.pos.z,a,this.windVec);let h=this.windVec,u=this._p,d=this._v,f=i.emitters,p=new D(0,-1,0).applyQuaternion(e.quat),v=new D(0,0,-1).applyQuaternion(e.quat),m=new D(1,0,0).applyQuaternion(e.quat);for(let w=0;w<4;w++){let y=n.outflow[w];if(y<=.5)continue;let E=n.foamMix[w]>.3;this._bodyPoint(e,f.doors[w],u,d);let A=2.4/this.q;this._acc.drop[w]+=y*t/A;let R=Math.floor(this._acc.drop[w]);this._acc.drop[w]-=R;let C=3+Math.sqrt(y/400)*2.5;for(;R-- >0;){let L=.9+y/2500,P=d.x+p.x*C+(At()-.5)*L*2,F=d.y+p.y*C+(At()-.5)*L,U=d.z+p.z*C+(At()-.5)*L*2,B=(At()-.5)*.5,X=(At()-.5)*.9,O=.05+Math.pow(At(),2.2)*(E?.9:.65);this.drop.spawn(u.x+m.x*B+v.x*X,u.y-.1,u.z+m.z*B+v.z*X,P,F,U,{life:14,size0:.45+At()*.35,size1:(E?5:3.2)+At()*2.2,alpha:E?.8:.68,r:E?.98:.86,g:E?.98:.92,b:.98,drag:O,grav:-9.81,fadeIn:.02,user:A,user2:E?1:0,rotV:(At()-.5)*1.5})}}let g=this.drop;for(let w=0;w<g.n;w++){let y=g.age[w];if(g.drag[w]=Math.min(g.drag[w]*(1+t*.9),1.6),y>.3&&At()<t*(.025+g.drag[w]*.07)*this.q){let E=w*3;this.mist.spawn(g.p[E],g.p[E+1],g.p[E+2],g.v[E]*.35+h.x*.6,g.v[E+1]*.25,g.v[E+2]*.35+h.z*.6,{life:5+At()*5,size0:3+At()*2,size1:12+At()*10,alpha:.22+.1*g.user2[w],r:.92,g:.95,b:.98,drag:.9,grav:-.5,fadeIn:.15,rotV:(At()-.5)*.3})}}let S=(w,y)=>Math.max(l.groundHeight(w,y),l.waterHeight(w,y,a));g.simulate(t,h,S,(w,y)=>{let E=w*3,A=g.p[E],R=g.p[E+2],C=l.waterHeight(A,R,a)>l.groundHeight(A,R);return!C&&this.onDeposit&&this.onDeposit(A,R,g.user[w],g.user2[w]>.5),At()<.05&&this.mist.spawn(A,y+1.5,R,h.x*.5+(At()-.5)*4,1+At()*2,h.z*.5+(At()-.5)*4,{life:4+At()*4,size0:3,size1:10+At()*8,alpha:.18,r:.9,g:.92,b:.94,drag:.8,grav:-.2,fadeIn:.1}),C&&At()<.2&&this._splash(A,y,R,.4),!0});let _=c.scoopRate||0,x=c.gs;if(c.onWater&&n.probePos>.3&&c.probeImmersion>.05){this._acc.scoop+=t*(130+_*.35)*this.q;let w=Math.floor(this._acc.scoop);for(this._acc.scoop-=w;w-- >0;){let y=f.probes[At()<.5?0:1],E=this._w.set(y.position.x,y.position.y-.85,y.position.z);this._bodyPoint(e,E.clone(),u,d);let A=l.waterHeight(u.x,u.z,a),R=.15+At()*.45,C=J(x/32,.4,1.3),L=(3.5+At()*5.5+(At()<.15?3:0))*C,P=(At()-.5)*3.5+Math.sign(y.position.x)*(.5+At()*1.5);this.spray.spawn(u.x,A+.25,u.z,d.x*R+m.x*P,L,d.z*R+m.z*P,{life:1.1+At()*1,size0:.5+At()*.4,size1:(1.8+At()*2.2)*C,alpha:.92,r:.97,g:.98,b:1,drag:.35,grav:-9.81,fadeIn:.02,rotV:(At()-.5)*2}),At()<.06&&this.mist.spawn(u.x-v.x*8,A+2+At()*3,u.z-v.z*8,d.x*.25+h.x,1+At(),d.z*.25+h.z,{life:3+At()*3,size0:3,size1:9+At()*6,alpha:.14,r:.92,g:.94,b:.96,drag:.8,grav:-.3,fadeIn:.1})}this.windscreenWet=Math.min(1,this.windscreenWet+t*.25)}if(n.overflowRate>5&&c.onWater){this._acc.overflow+=t*90*this.q;let w=Math.floor(this._acc.overflow);for(this._acc.overflow-=w;w-- >0;){let y=f.overflow[At()<.5?0:1];this._bodyPoint(e,y,u,d);let E=Math.sign(y.x);this.spray.spawn(u.x,u.y,u.z,d.x*.7+m.x*E*(2+At()*3),3+At()*4,d.z*.7+m.z*E*(2+At()*3),{life:1.2+At()*.8,size0:.3,size1:2+At()*2,alpha:.8,r:.92,g:.95,b:.98,drag:.6,grav:-9.81})}}let M=e.sprayCount;if(M>0){for(let w=0;w<M;w++){let y=e.sprayPoints[w],E=Math.hypot(y.vx,y.vz);if(E<2.5)continue;let A=J(y.intensity,.1,1.2)*(y.float?8:14)*this.q*J(E/15,.2,1.5),R=Math.floor(A*t+At()),C=y.side;for(;R-- >0;){let L=1.5+E*(.06+At()*.1),P=1+E*(.04+At()*.09);this.spray.spawn(y.x+m.x*C*.4,y.y+.15,y.z+m.z*C*.4,y.vx*(.2+At()*.35)+m.x*C*L,P,y.vz*(.2+At()*.35)+m.z*C*L,{life:.6+At()*.7,size0:.4,size1:1+At()*1.8*J(E/20,.4,1.4),alpha:.85,r:.95,g:.97,b:.99,drag:.4,grav:-9.81,fadeIn:.03,rotV:(At()-.5)*2})}}if(x>12&&(this.windscreenWet=Math.min(1,this.windscreenWet+t*.05*J(c.hullDepth*3,0,1))),c.impact>1.2&&(this._lastImpactT||0)<a-.5){this._lastImpactT=a;let w=e.sprayPoints[0],y=Math.min(400,Math.round(c.impact*60*this.q));for(let E=0;E<y;E++){let A=e.sprayPoints[Math.floor(At()*M)],R=At()*Math.PI*2,C=2+At()*c.impact*2.5;this.spray.spawn(A.x,A.y+.1,A.z,A.vx*.3+Math.cos(R)*C,2+At()*c.impact*2.2,A.vz*.3+Math.sin(R)*C,{life:1+At()*1.2,size0:.6,size1:2.5+At()*3,alpha:.85,r:.93,g:.95,b:.97,drag:.3,grav:-9.81})}this.cameraShake=Math.min(1,this.cameraShake+c.impact*.15),this.windscreenWet=Math.min(1,this.windscreenWet+c.impact*.15)}}if(c.radAlt<9&&c.surfaceUnder==="water")for(let w=0;w<2;w++){let y=n.engines[w].pf;if(y<.3)continue;this._acc.prop[w]+=t*y*25*this.q*J(1-c.radAlt/9,0,1);let E=Math.floor(this._acc.prop[w]);this._acc.prop[w]-=E,this._bodyPoint(e,f.props[w],u,d);let A=l.waterHeight(u.x,u.z,a);for(;E-- >0;)this.mist.spawn(u.x-v.x*(4+At()*6)+(At()-.5)*3,A+.4,u.z-v.z*(4+At()*6)+(At()-.5)*3,d.x*.6-v.x*8,.8+At()*1.2,d.z*.6-v.z*8,{life:2+At()*2,size0:1.5,size1:6+At()*4,alpha:.18,r:.9,g:.93,b:.95,drag:.7,grav:0})}this.wake.update(t,e,a);let b=(w,y)=>l.waterHeight(w,y,a)-.3;this.spray.simulate(t,h,(w,y)=>Math.max(l.groundHeight(w,y),l.waterHeight(w,y,a)-.2)),this.mist.simulate(t,h,null),this.windscreenWet=Math.max(0,this.windscreenWet-t*(.06+c.ias*.004)),this.cameraShake=Math.max(0,this.cameraShake-t*1.5)}_splash(t,e,n,i){let r=Math.round(4*i*this.q)+1;for(let o=0;o<r;o++)this.spray.spawn(t,e+.1,n,(At()-.5)*3,2+At()*3,(At()-.5)*3,{life:.8+At()*.6,size0:.4,size1:1.5+At(),alpha:.7,r:.93,g:.95,b:.97,drag:.3,grav:-9.81})}render(t,e){let n=new bt(1,.96,.9).multiplyScalar(2.3),i=new bt(.95,1.02,1.12);for(let r of[this.drop,this.mist,this.spray])r.setLighting(e.sunDir,t,n,i,e.scene.fog);this.drop.upload(t,r=>r<.85?1:1-(r-.85)/.15),this.spray.upload(t,r=>1-r*r),this.mist.upload(t,r=>Math.sin(Math.PI*Math.min(1,r*1.15))*(1-r*.3)),this.wake.mat.uniforms.fogColor.value.copy(e.scene.fog.color),this.wake.mat.uniforms.fogDensity.value=e.scene.fog.density,this.wake.render()}stats(){return{drop:this.drop.n,mist:this.mist.n,spray:this.spray.n}}},ku=class{constructor(t){this.max=900,this.pts=[];let e=new xe;this.pos=new Float32Array(this.max*2*3),this.uv=new Float32Array(this.max*2*2),this.ext=new Float32Array(this.max*2*2),e.setAttribute("position",new Te(this.pos,3).setUsage(ti)),e.setAttribute("uv",new Te(this.uv,2).setUsage(ti)),e.setAttribute("aExt",new Te(this.ext,2).setUsage(ti));let n=[];for(let o=0;o<this.max-1;o++){let a=o*2,l=o*2+1,c=o*2+2,h=o*2+3;n.push(a,c,l,l,c,h)}e.setIndex(n),e.setDrawRange(0,0),this.geo=e;let i=ui(256,12,5,55,.6),r=Ei(256,[i,i,i,1]);this.mat=new Ye({uniforms:{tFoam:{value:r},uTime:{value:0},fogColor:{value:new bt},fogDensity:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`
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
        }`}),this.mesh=new q(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.name="wake",t.add(this.mesh),this.time=0,this.last=null}update(t,e,n){this.time=n;let i=e.out,r=i.onWater&&i.gs>1.5,o=new D(0,(nt.sStep,0),nt.sStep-nt.sCG).sub(e.cg).applyQuaternion(e.quat).add(e.pos);if(r){let a=J(i.hullDepth*2.5+i.gs/25,.2,1)*(i.planing?1:.8);if(!this.last||Math.hypot(o.x-this.last.x,o.z-this.last.z)>2){let l=o.x-(this.last?this.last.x:o.x-e.vel.x*.05),c=o.z-(this.last?this.last.z:o.z-e.vel.z*.05),h=Math.hypot(l,c)||1;this.pts.push({x:o.x,z:o.z,dx:l/h,dz:c/h,t:n,k:a,gap:!this.last}),this.pts.length>this.max&&this.pts.shift(),this.last={x:o.x,z:o.z}}}else this.last=null;for(;this.pts.length&&n-this.pts[0].t>160;)this.pts.shift()}render(){let t=this.pts.length;if(t<2){this.geo.setDrawRange(0,0);return}for(let e=0;e<t;e++){let n=this.pts[e],i=this.time-n.t,r=2.2+i*.9+Math.sqrt(i)*1.5,o=-n.dz,a=n.dx,l=n.gap||e+1<t&&this.pts[e+1].gap?0:n.k;for(let c=0;c<2;c++){let h=c===0?-1:1,u=e*2+c;this.pos[u*3]=n.x+o*r*h,this.pos[u*3+1]=.07,this.pos[u*3+2]=n.z+a*r*h,this.uv[u*2]=c,this.uv[u*2+1]=e,this.ext[u*2]=i,this.ext[u*2+1]=l}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.aExt.needsUpdate=!0,this.geo.setDrawRange(0,(t-1)*6)}};function zu(s,t=2,e="white"){let n=Math.floor(s.sampleRate*t),i=s.createBuffer(1,n,s.sampleRate),r=i.getChannelData(0),o=0,a=0,l=0,c=0;for(let h=0;h<n;h++){let u=Math.random()*2-1;e==="pink"?(o=.99765*o+u*.099046,a=.963*a+u*.2965164,l=.57*l+u*1.0526913,r[h]=(o+a+l+u*.1848)*.18):e==="brown"?(c=(c+.02*u)/1.02,r[h]=c*3.5):r[h]=u*.5}return i}var Oc=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.8,this._prev={}}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=3,this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(n).connect(e.destination),this.cabin=e.createBiquadFilter(),this.cabin.type="lowpass",this.cabin.frequency.value=2200,this.cabin.Q.value=.5,this.cabin.connect(this.master),this.white=zu(e,2,"white"),this.pink=zu(e,3,"pink"),this.brown=zu(e,3,"brown"),this.engines=[0,1].map(i=>this._engine(i)),this.wind=this._noiseVoice(this.pink,"bandpass",700,.6),this.water=this._noiseVoice(this.brown,"lowpass",500,.7),this.scoop=this._noiseVoice(this.white,"bandpass",1800,.5),this.dropSnd=this._noiseVoice(this.pink,"lowpass",1400,.4),this.hyd=this._tone("sawtooth",380,"lowpass",900),this.gearRoll=this._noiseVoice(this.brown,"lowpass",250,.8),this.stallHorn=this._tone("square",420,"lowpass",2e3,!0),this.warnHorn=this._tone("square",880,"lowpass",3e3,!0),this.enabled=!0}_noiseVoice(t,e,n,i){let r=this.ctx,o=r.createBufferSource();o.buffer=t,o.loop=!0,o.playbackRate.value=.9+Math.random()*.2;let a=r.createBiquadFilter();a.type=e,a.frequency.value=n,a.Q.value=i;let l=r.createGain();return l.gain.value=0,o.connect(a).connect(l).connect(this.cabin),o.start(),{src:o,f:a,g:l}}_tone(t,e,n,i,r=!1){let o=this.ctx,a=o.createOscillator();a.type=t,a.frequency.value=e;let l=o.createBiquadFilter();l.type=n,l.frequency.value=i;let c=o.createGain();return c.gain.value=0,a.connect(l).connect(c).connect(r?this.master:this.cabin),a.start(),{o:a,f:l,g:c}}_engine(t){let e=this.ctx,n=e.createStereoPanner?e.createStereoPanner():e.createGain();n.pan&&(n.pan.value=t===0?-.45:.45);let i=e.createGain();i.gain.value=0,i.connect(n).connect(this.cabin);let r=e.createOscillator();r.type="sawtooth";let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=520,o.Q.value=1.2;let a=e.createGain();r.connect(o).connect(a).connect(i);let l=e.createOscillator();l.type="square";let c=e.createGain();c.gain.value=.05,l.connect(o),l.connect(c).connect(i);let h=e.createOscillator();h.type="sine";let u=e.createGain();u.gain.value=.2,h.connect(u).connect(a.gain);let d=e.createOscillator();d.type="sine";let f=e.createGain();d.connect(f).connect(i);let p=e.createOscillator();p.type="triangle";let v=e.createGain();p.connect(v).connect(i);let m=e.createBufferSource();m.buffer=this.pink,m.loop=!0;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=400;let S=e.createGain();m.connect(g).connect(S).connect(i);let _=e.createBufferSource();_.buffer=this.white,_.loop=!0;let x=e.createBiquadFilter();x.type="bandpass",x.frequency.value=2400,x.Q.value=.8;let M=e.createGain();_.connect(x).connect(M).connect(i);for(let b of[r,l,h,d,p])b.start();return m.start(),_.start(),{bus:i,pan:n,prop:r,prop2:l,propF:o,propG:a,lfo:h,whine:d,whineG:f,whine2:p,whine2G:v,roarF:g,roarG:S,hissF:x,hissG:M,detune:t===0?.997:1.004}}click(t=1800,e=.04,n=.25){if(!this.enabled)return;let i=this.ctx,r=i.createBufferSource();r.buffer=this.white;let o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=t;let a=i.createGain(),l=i.currentTime;a.gain.setValueAtTime(n,l),a.gain.exponentialRampToValueAtTime(.001,l+e),r.connect(o).connect(a).connect(this.master),r.start(l,Math.random()),r.stop(l+e+.05)}chime(t=1,e=1320){if(!this.enabled)return;let n=this.ctx;for(let i=0;i<t;i++){let r=n.createOscillator();r.type="sine",r.frequency.value=e;let o=n.createGain(),a=n.currentTime+i*.22;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.01),o.gain.exponentialRampToValueAtTime(1e-4,a+.6),r.connect(o).connect(this.master),r.start(a),r.stop(a+.7)}}thump(t=1,e=!1){if(!this.enabled)return;let n=this.ctx,i=n.createBufferSource();i.buffer=e?this.pink:this.brown;let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=e?1500:220;let o=n.createGain(),a=n.currentTime;o.gain.setValueAtTime(J(t,0,1.5)*(e?.8:1.2),a),o.gain.exponentialRampToValueAtTime(.001,a+(e?1.2:.35)),i.connect(r).connect(o).connect(this.master),i.start(a,Math.random()),i.stop(a+1.5)}update(t,e,n,i){if(!this.enabled)return;let o=this.ctx.currentTime,a=e.out,l=i.inside,c=.08;this.cabin.frequency.setTargetAtTime(l?1900:14e3,o,.1);let h=l?0:i.distance,u=l?1:1/(1+h/35),d=l?1:J(1/(1-J(i.closing/340,-.4,.4)),.7,1.4);for(let w=0;w<2;w++){let y=n.engines[w],E=this.engines[w],A=y.np/100*1200/60,R=A*4*E.detune*d;E.prop.frequency.setTargetAtTime(Math.max(5,R),o,c),E.prop2.frequency.setTargetAtTime(Math.max(5,R*2),o,c),E.lfo.frequency.setTargetAtTime(Math.max(.1,A),o,c);let C=J(y.torque/100,0,1.2),L=y.running?1:J(y.nh/60,0,1);E.propG.gain.setTargetAtTime((.12+.5*C)*L,o,c),E.propF.frequency.setTargetAtTime(280+700*C,o,c);let P=y.nh/100;E.whine.frequency.setTargetAtTime(2600*P*d,o,c),E.whine2.frequency.setTargetAtTime(5200*P*d*1.01,o,c),E.whineG.gain.setTargetAtTime((l?.02:.05)*P*P*L,o,c),E.whine2G.gain.setTargetAtTime((l?.004:.018)*P*L,o,c),E.roarG.gain.setTargetAtTime((.18+.55*C)*L,o,c),E.roarF.frequency.setTargetAtTime(250+600*C,o,c),E.hissG.gain.setTargetAtTime((l?.04:.14)*C*L,o,c),E.hissF.frequency.setTargetAtTime(1800+1500*C,o,c);let F=w===0?-.45:.45;!l&&i.panFn&&(F=i.panFn(w)),E.pan.pan&&E.pan.pan.setTargetAtTime(F,o,.1),E.bus.gain.setTargetAtTime(.55*u,o,c)}let f=a.ias/.514444;this.wind.g.gain.setTargetAtTime(J((f/140)**2,0,1.4)*(l?.35:.6)*u+.01,o,c),this.wind.f.frequency.setTargetAtTime(400+f*9,o,c);let p=a.onWater?J(a.gs/20,0,1.4)*J(.3+a.hullDepth*1.5,0,1.2):0,v=.75+.25*Math.sin(o*7.3)*Math.sin(o*3.1);this.water.g.gain.setTargetAtTime(p*.9*v*u,o,.05),this.water.f.frequency.setTargetAtTime(300+a.gs*22,o,c);let m=J((a.scoopRate||0)/500,0,1.2);this.scoop.g.gain.setTargetAtTime(m*.55*u,o,.05);let g=n.outflow.reduce((w,y)=>w+y,0);this.dropSnd.g.gain.setTargetAtTime(J(g/3e3,0,1)*.9*u,o,.05);let S=Math.abs(n.flapPos-(this._prev.flap??n.flapPos))>1e-4||Math.abs(n.gearPos-(this._prev.gear??n.gearPos))>1e-4||Math.abs(n.probePos-(this._prev.probe??n.probePos))>1e-4;this._prev.flap=n.flapPos,this._prev.gear=n.gearPos,this._prev.probe=n.probePos,this.hyd.g.gain.setTargetAtTime(S?l?.05:.02:0,o,.1);let _=a.onGround?J(a.gs/25,0,1):0;this.gearRoll.g.gain.setTargetAtTime(_*.7,o,.05);let x=n.warn.stall;this.stallHorn.g.gain.setTargetAtTime(x?.12:0,o,.02),this.stallHorn.o.frequency.setTargetAtTime(x?420+60*Math.sin(o*25):420,o,.01);let M=(n.warn.gearWater||n.warn.gearUpLand)&&Math.floor(o*2.5)%2===0;this.warnHorn.g.gain.setTargetAtTime(M?.08:0,o,.01),a.impact>1&&(this._lastImp||0)<o-.6&&(this._lastImp=o,this.thump(a.impact/3,!0));let b=a.gearLoad[1]+a.gearLoad[2];b>1e3&&!this._prev.ground&&this.thump(J(-a.vs/2.5,.3,1.5),!1),this._prev.ground=b>1e3}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}};var Lp=[["W / S  (\u2191 / \u2193)","Cloche avanti / indietro (picchiare / cabrare)"],["A / D  (\u2190 / \u2192)","Alettoni (rollio)"],["Q / E","Pedaliera (timone e ruotino)"],["R / F","Manette + / \u2212 (F tenuto al minimo in acqua o a terra = reverse)"],["Shift+R / Shift+F","Potenza massima / minimo"],["V","Flap: scende 0-10-15-25\xB0, poi risale 25-15-10-0\xB0 (Shift+V = sempre su)"],["G","Carrello (anfibio)"],["P","Sonde di pescaggio (estendi / ritrai)"],["SPAZIO","SGANCIO dell'acqua"],["M","Modalit\xE0 di sgancio (salvo, 2+2, sequenza, 1 porta)"],["N","Quantit\xE0 di pescaggio preselezionata"],["J","Schiumogeno (arma / disarma)"],["T / Shift+T","Trim cabrare / picchiare"],["B (tenuto) / Shift+B","Freni / freno di stazionamento"],["L","Fari di atterraggio"],["C / 1-7","Cambia visuale (cabina, inseguimento, orbita, passaggio, sonde, ala, torre)"],["Mouse (muovi)","Cloche: su = picchiare, gi\xF9 = cabrare, lati = rollio (il cerchio al centro \xE8 il neutro)"],["Rotella del mouse","Manette + / \u2212 (al minimo, in acqua o a terra, continua gi\xF9 = reverse)"],["Tasto destro (trascina) / Shift+rotella","Guarda intorno / zoom \xB7 doppio clic = sguardo avanti"],["Y","Cloche col mouse on/off (spenta: trascina per guardare, rotella = zoom)"],["X","Multiplayer: chiedi al compagno di scambiare i ruoli (o guardalo e usa il pulsante)"],["O","Pannello dati on/off"],["H / F1","Aiuto"],["Esc","Pausa / menu"],["Invio","Riparti dopo un incidente"]],Bc=class{constructor(t){this.dom=t,this.keys=new Set,this.actions=[],this.stick={x:0,y:0},this.rudder=0,this.throttle=0,this.reverse=0,this.brakes=0,this.mouseYoke=!(window.matchMedia&&matchMedia("(pointer: coarse)").matches),this.wheelReverse=0,this.flight=!0,this.yokeEngaged=!1,this.throttleChanged=0,this.look={dx:0,dy:0,wheel:0,dragging:!1},this.gamepad=null,this.touch={active:!1,x:0,y:0,throttle:null},this._mouse={x:0,y:0},this._bind()}_bind(){let t={KeyR:"thrMax",KeyF:"thrIdle",KeyV:"flapUp",KeyB:"parking"},e={KeyV:"flapCycle",BracketRight:"flapDown",BracketLeft:"flapUp",KeyG:"gear",KeyP:"probes",Space:"drop",KeyM:"mode",KeyN:"preset",KeyJ:"foam",KeyL:"lights",KeyC:"camera",KeyO:"hud",KeyH:"help",F1:"help",Escape:"pause",Enter:"restart",KeyY:"mouseYoke",KeyK:"debug",KeyX:"swap"};window.addEventListener("keydown",i=>{if(i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="SELECT"))return;let r=i.code;i.repeat||(i.shiftKey&&t[r]?this.actions.push(t[r]):e[r]&&this.actions.push(e[r]),/^Digit[1-7]$/.test(r)&&this.actions.push("cam"+r.slice(5))),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","F1","Tab"].includes(r)&&i.preventDefault(),this.keys.add(r),this.shift=i.shiftKey}),window.addEventListener("keyup",i=>{this.keys.delete(i.code),this.shift=i.shiftKey}),window.addEventListener("blur",()=>this.keys.clear());let n=this.dom;n.addEventListener("contextmenu",i=>i.preventDefault()),n.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(this.mouseYoke&&this.flight&&!this.hold&&i.button===0||(this.look.dragging=!0,this._mouse.x=i.clientX,this._mouse.y=i.clientY,n.setPointerCapture&&n.setPointerCapture(i.pointerId)))}),n.addEventListener("pointerup",()=>this.look.dragging=!1),window.addEventListener("pointermove",i=>{i.pointerType!=="touch"&&(this.look.dragging&&(this.look.dx+=i.clientX-this._mouse.x,this.look.dy+=i.clientY-this._mouse.y),this._mouse.x=i.clientX,this._mouse.y=i.clientY,this._mouseNorm={x:i.clientX/window.innerWidth*2-1,y:i.clientY/window.innerHeight*2-1},!this.yokeEngaged&&Math.hypot(i.clientX-window.innerWidth/2,i.clientY-window.innerHeight/2)<26&&(this.yokeEngaged=!0))}),n.addEventListener("dblclick",()=>this.actions.push("lookReset")),n.addEventListener("wheel",i=>{if(i.preventDefault(),!this.mouseYoke||!this.flight||this.hold||i.shiftKey||i.ctrlKey){this.look.wheel+=Math.sign(i.deltaY||i.deltaX);return}let r=i.deltaMode===1?i.deltaY:i.deltaMode===2?i.deltaY*20:i.deltaY/33,o=-J(r,-9,9)*(.05/3);o<0&&this.throttle<=0?this.wheelReverse=J(this.wheelReverse-o*2,0,1):o>0&&this.wheelReverse>0?this.wheelReverse=J(this.wheelReverse-o*2,0,1):this.throttle=J(this.throttle+o,0,1),this.throttleChanged=performance.now()},{passive:!1}),window.addEventListener("gamepadconnected",i=>{this.gamepad=i.gamepad.index,this.actions.push("gamepad")})}consumeLook(){let t={dx:this.look.dx,dy:this.look.dy,wheel:this.look.wheel};return this.look.dx=this.look.dy=this.look.wheel=0,t}update(t,e){let n=this.keys,i=(...v)=>v.some(m=>n.has(m)),r=0,o=0,a=0,l=this.flight;l||(this.stick.x=this.stick.y=this.rudder=0),l&&i("KeyA","ArrowLeft")&&(r-=1),l&&i("KeyD","ArrowRight")&&(r+=1),l&&i("KeyS","ArrowDown")&&(o+=1),l&&i("KeyW","ArrowUp")&&(o-=1),l&&i("KeyQ")&&(a-=1),l&&i("KeyE")&&(a+=1);let c=(v,m)=>v===0?3.2:Math.sign(v)!==Math.sign(m)&&m!==0?4:1.6,h=Ne(this.stick.x,r,c(r,this.stick.x),t),u=Ne(this.stick.y,o*.85,c(o,this.stick.y),t),d=Ne(this.rudder,a,c(a,this.rudder),t);if(this.hold)h=Ne(this.stick.x,0,6,t),u=Ne(this.stick.y,0,6,t);else if(l&&this.mouseYoke&&this.yokeEngaged&&this._mouseNorm&&!this.look.dragging){let v=m=>{let g=J((Math.abs(m)*2.2-.04)/.96,0,1);return Math.sign(m)*g*(1.6-.6*g)};r===0&&(h=Ne(this.stick.x,v(this._mouseNorm.x),14,t)),o===0&&(u=Ne(this.stick.y,v(this._mouseNorm.y),14,t))}let f=navigator.getGamepads?navigator.getGamepads():[],p=this.gamepad!==null?f[this.gamepad]:null;if(p){let v=y=>Math.abs(y)<.08?0:(y-Math.sign(y)*.08)/.92,m=v(p.axes[0]||0),g=v(p.axes[1]||0),S=v(p.axes[2]||0),_=v(p.axes[3]||0);(Math.abs(m)>0||Math.abs(g)>0)&&(h=Math.sign(m)*m*m,u=-Math.sign(g)*g*g),Math.abs(S)>0&&(d=S);let x=y=>p.buttons[y]&&p.buttons[y].pressed,M=p.buttons[7]?p.buttons[7].value:0,b=p.buttons[6]?p.buttons[6].value:0;this.throttle=J(this.throttle+(M-b)*t*.6-_*t*.5,0,1),this.brakes=Math.max(this.brakes,x(4)&&x(5)?1:0),this._gpPrev=this._gpPrev||[];let w=(y,E)=>{let A=x(y);A&&!this._gpPrev[y]&&this.actions.push(E),this._gpPrev[y]=A};w(0,"drop"),w(1,"probes"),w(2,"flapDown"),w(3,"flapUp"),w(8,"camera"),w(9,"pause"),w(10,"gear"),w(12,"trimUpPulse"),w(13,"trimDownPulse"),w(14,"mode"),w(15,"lights")}this.touch.active&&(h=this.touch.x,u=this.touch.y),this.touch.throttle!==null&&(this.throttle=this.touch.throttle),this.stick.x=h,this.stick.y=u,this.rudder=d,l&&i("KeyR")&&!this.shift&&(this.throttle=J(this.throttle+t*.45,0,1)),l&&i("KeyF")&&!this.shift?this.throttle>0?this.throttle=J(this.throttle-t*.45,0,1):e&&(this._revHold=(this._revHold||0)+t,this._revHold>.4&&(this.reverse=J(this.reverse+t*.6,0,1))):(this._revHold=0,this.reverse=Ne(this.reverse,this.wheelReverse,1.5,t)),(this.throttle>0||i("KeyR"))&&(this.wheelReverse=0),e||(this.reverse=this.wheelReverse=0),this.brakes=l&&i("KeyB")&&!this.shift?1:Ne(this.brakes,0,4,t),this.trimRate=l&&i("KeyT")?this.shift?-1:1:0}popActions(){let t=this.actions;return this.actions=[],t}};var oa=[{id:"cockpit",name:"Cabina"},{id:"chase",name:"Inseguimento"},{id:"orbit",name:"Orbita libera"},{id:"flyby",name:"Passaggio"},{id:"probe",name:"Sotto lo scafo"},{id:"wing",name:"Ala"},{id:"tower",name:"Torre"}],kc=(s,t,e=0)=>new D(e,t-nt.hCG,s-nt.sCG),zc=class{constructor(t,{towerPos:e}){this.camera=t,this.mode=0,this.head={yaw:0,pitch:-.17,tyaw:0,tpitch:-.17},this.orbit={yaw:Math.PI*.85,pitch:.12,dist:42},this.chase={yaw:0,pitch:.1,dist:34,pos:new D,init:!1},this.flyby={pos:new D,t:-1},this.fov={cockpit:72,other:50},this.zoom=1,this.tower=e.clone(),this._q=new qe,this._v=new D,this._e=new Dn(0,0,0,"YXZ"),this.shake=new D,this.vib=0}get id(){return oa[this.mode].id}get inside(){return this.id==="cockpit"}set(t){this.mode=(t+oa.length)%oa.length,this.chase.init=!1,this.flyby.t=-1,this.zoom=1}lookReset(){this.head.tyaw=0,this.head.tpitch=-.17}update(t,e,n,i){let r=this.camera,o=this.id,a=e.quat,l=e.out;n.wheel&&(this.zoom=J(this.zoom*(n.wheel>0?1.12:.89),.25,3.5));let c=l.onWater?J(l.gs/25,0,1)*J(l.hullDepth*2,.2,1):0,h=l.onGround?J(l.gs/30,0,1):0,u=.0012+c*.012+h*.006+(i.shake||0)*.05+(i.turb||0)*.004,d=performance.now()/1e3;this.shake.set(Math.sin(d*37.1)*Math.sin(d*13.7)*u,Math.sin(d*41.3+1)*Math.sin(d*9.1)*u,Math.sin(d*29.3+2)*u*.5);let f=p=>this._v.copy(p).sub(e.cg).applyQuaternion(a).add(e.pos);if(o==="cockpit"){this.head.tyaw=J(this.head.tyaw-n.dx*.0035,-2.6,2.6),this.head.tpitch=J(this.head.tpitch-n.dy*.0035,-1.2,1.1),this.head.yaw=Ds(this.head.yaw,this.head.tyaw,14,t),this.head.pitch=Ds(this.head.pitch,this.head.tpitch,14,t);let p=J(-l.ny*.02,-.04,.04),v=J(-(l.nz-1)*.012,-.05,.05),m=i.eye.clone().add(new D(p,v,0)).add(this.shake);m.x+=Math.sin(this.head.yaw)*.12,m.z+=(1-Math.cos(this.head.yaw))*.05,r.position.copy(f(m)),this._e.set(this.head.pitch,this.head.yaw,0,"YXZ"),this._q.setFromEuler(this._e),r.quaternion.copy(a).multiply(this._q),r.fov=this.fov.cockpit/this.zoom,r.near=.04}else if(o==="chase"){let p=this.chase;p.yaw=J(p.yaw-n.dx*.005,-Math.PI,Math.PI),p.pitch=J(p.pitch+n.dy*.004,-.4,1.2),!n.dx&&!n.dy&&(p.yaw=Ds(p.yaw,0,.4,t));let v=new D(0,0,-1).applyQuaternion(a),g=Math.atan2(v.x,-v.z)+p.yaw,S=p.dist*this.zoom,_=e.pos.clone().add(new D(0,2.5,0)),x=_.clone().add(new D(-Math.sin(g)*Math.cos(p.pitch)*S,Math.sin(p.pitch)*S+3,Math.cos(g)*Math.cos(p.pitch)*S));p.init||(p.pos.copy(x),p.init=!0),p.pos.x=Ds(p.pos.x,x.x,5,t),p.pos.y=Ds(p.pos.y,x.y,4,t),p.pos.z=Ds(p.pos.z,x.z,5,t);let M=i.groundAt(p.pos.x,p.pos.z)+1.5;p.pos.y<M&&(p.pos.y=M),r.position.copy(p.pos).add(this.shake.clone().multiplyScalar(4)),r.up.set(0,1,0),r.lookAt(_),r.fov=this.fov.other,r.near=.3}else if(o==="orbit"){let p=this.orbit;p.yaw-=n.dx*.005,p.pitch=J(p.pitch+n.dy*.004,-1.2,1.45);let v=p.dist*this.zoom,m=e.pos.clone();r.position.set(m.x+Math.sin(p.yaw)*Math.cos(p.pitch)*v,m.y+Math.sin(p.pitch)*v,m.z+Math.cos(p.yaw)*Math.cos(p.pitch)*v);let g=i.groundAt(r.position.x,r.position.z)+1;r.position.y<g&&(r.position.y=g),r.up.set(0,1,0),r.lookAt(m),r.fov=this.fov.other,r.near=.3}else if(o==="flyby"){let p=this.flyby,v=e.vel.clone(),m=v.length(),g=e.pos.clone().sub(p.pos);if(p.t<0||g.length()>450||g.dot(v)>0&&g.length()>150){let _=m>5?v.clone().normalize():new D(0,0,-1).applyQuaternion(a),x=new D(-_.z,0,_.x).normalize();p.pos.copy(e.pos).addScaledVector(_,J(m*6,60,320)).addScaledVector(x,28+Math.random()*25);let M=i.groundAt(p.pos.x,p.pos.z);p.pos.y=Math.max(e.pos.y-6+Math.random()*10,M+2),p.t=0}p.t+=t,r.position.copy(p.pos),r.up.set(0,1,0),r.lookAt(e.pos);let S=e.pos.distanceTo(p.pos);r.fov=J(2*Math.atan(26/S)/Et,12,60)/this.zoom,r.near=.3}else if(o==="probe"){let p=f(kc(12.2,1.25,2.5));r.position.copy(p).add(this.shake);let v=f(kc(8.6,-.4,.3));r.up.copy(new D(0,1,0).applyQuaternion(a)),r.lookAt(v),r.fov=70/this.zoom,r.near=.05}else if(o==="wing"){let p=f(kc(9.4,4.5,-12.6));r.position.copy(p).add(this.shake);let v=f(kc(3,2.8,0));r.up.copy(new D(0,1,0).applyQuaternion(a)),r.lookAt(v),r.fov=62/this.zoom,r.near=.1}else if(o==="tower"){r.position.copy(this.tower),r.up.set(0,1,0),r.lookAt(e.pos);let p=e.pos.distanceTo(this.tower);r.fov=J(2*Math.atan(30/p)/Et,2,60)/this.zoom,r.near=.5}r.updateProjectionMatrix(),r.updateMatrixWorld()}};var tn=s=>document.getElementById(s),Hc=class{constructor(){this.msgBox=tn("messages"),this.data=tn("data"),this.warnBox=tn("warnings"),this.mapCanvas=tn("minimap"),this.mapCtx=this.mapCanvas.getContext("2d"),this.fireList=tn("fires"),this.camLabel=tn("camlabel"),this.showData=!0,this._mapTimer=0,this._dataTimer=0,this._buildHelp(),this._buildDroplets()}_buildHelp(){let t=tn("helptable");t.innerHTML=Lp.map(([e,n])=>`<tr><td class="k">${e}</td><td>${n}</td></tr>`).join("")}_buildDroplets(){let t=tn("droplets"),e=t.getContext("2d");t.width=1024,t.height=640;let n=Rn(9);for(let i=0;i<520;i++){let r=n()*t.width,o=n()*t.height,a=2+Math.pow(n(),3)*14,l=e.createRadialGradient(r-a*.3,o-a*.3,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(.5,"rgba(200,215,225,0.18)"),l.addColorStop(.85,"rgba(40,50,60,0.25)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.beginPath(),e.ellipse(r,o,a,a*(.8+n()*.5),n()*3,0,Math.PI*2),e.fill(),a>8&&n()<.6&&(e.fillStyle="rgba(210,220,230,0.12)",e.fillRect(r-1,o,2,a*(2+n()*5)))}}message(t,e="info",n=5){n=Math.min(n,2.8);let i=document.createElement("div");for(i.className="msg "+e,i.textContent=t,this.msgBox.prepend(i);this.msgBox.children.length>6;)this.msgBox.lastChild.remove();setTimeout(()=>i.classList.add("fade"),n*1e3),setTimeout(()=>i.remove(),n*1e3+1200)}setCamera(t){this.camLabel.textContent="Visuale: "+oa[t].name,this.camLabel.classList.remove("fade"),clearTimeout(this._camT),this._camT=setTimeout(()=>this.camLabel.classList.add("fade"),1800)}toggleData(){this.showData=!this.showData,this.data.style.display=this.showData?"":"none"}update(t,e,n,i,r,o,a){let l=e.out,c=tn("droplets"),h=o.inside?J(a,0,.9):0;Math.abs((this._wet||0)-h)>.01&&(c.style.opacity=h.toFixed(2),this._wet=h);let u=r.mouseYoke&&r.flight;if(this._myoke!==u){this._myoke=u,tn("myoke").style.display=r.mouseYoke&&r.flight?"block":"none";let _=document.querySelector("canvas");_&&_.classList.toggle("myoke",u)}let d=r.mouseYoke&&!r.yokeEngaged;d!==this._yokeWait&&(this._yokeWait=d,tn("myoke").classList.toggle("wait",d));let f=tn("thrpop"),p=performance.now()-r.throttleChanged<1200;if(p){let _=r.wheelReverse>0?`\u21A9\uFE0F REVERSE ${Math.round(r.wheelReverse*100)}%`:`\u26A1 MANETTE ${Math.round(r.throttle*100)}%`;f.textContent!==_&&(f.textContent=_)}if(p!==this._thrShown&&(this._thrShown=p,f.classList.toggle("show",p)),this._dataTimer+=t,this._dataTimer>.1&&this.showData){this._dataTimer=0;let _=l.ias/.514444,x=n.waterLiters(),M=x/ee.waterCapacity,b=(n.engines[0].lever+n.engines[1].lever)/2,w=n.engines.some(C=>C.reverse>.05),y=(C,L,P="")=>`<div class="cell ${P}"><span>${C}</span><b>${L}</b></div>`,E=n.gearPos>.98?"GI\xD9":n.gearPos<.02?"SU":"IN MOTO",A=n.probePos>.95?"ESTESE":n.probePos<.05?"RETRATTE":"\u2026",R=Math.round(l.heading*wu)%360;R<=0&&(R+=360),this.data.innerHTML=y("IAS",`${_.toFixed(0)} kt`,_>ee.vmo?"bad":"")+y("ALT",`${Math.round(l.alt/.3048)} ft`)+y("RAD ALT",`${Math.max(0,Math.round(l.radAlt/.3048))} ft`,l.radAlt<30&&!l.onWater&&!l.onGround?"warn":"")+y("V/S",`${Math.round(l.vs/.00508)} fpm`)+y("PRUA",`${String(R).padStart(3,"0")}\xB0`)+y("POTENZA",w?"REVERSE":`${Math.round(n.engines[0].torque)}% TQ`)+y("FLAP",`${Math.round(n.flapPos)}\xB0 (${ee.flapDetents[n.flapIndex]}\xB0)`)+y("CARRELLO",E,n.gearPos>.5&&l.surfaceUnder==="water"&&l.radAlt<150?"bad":"")+y("SONDE",A,n.probePos>.5?"warn":"")+y("ACQUA",`${Math.round(x)} L (${Math.round(M*100)}%)`,n.foamArmed?"foam":"")+y("SGANCIO",Os[n.dropMode].id)+y("MASSA",`${Math.round(n.totalMass())} kg`,n.warn.overweight?"warn":"")+y("CARB.",`${Math.round(n.fuel)} kg`,n.warn.lowFuel?"warn":"")+y("TRIM",`${(n.elevTrim*100).toFixed(0)}%`)+y("MANETTE",`${Math.round(b*100)}%`)+y("G",`${l.nz.toFixed(2)}`,l.nz>3?"bad":"")}let v=n.warn,m=[];v.stall&&m.push("STALLO"),v.gearWater&&m.push("CARRELLO ESTRATTO \u2014 AMMARAGGIO!"),v.gearUpLand&&m.push("CARRELLO RETRATTO!"),v.overspeed&&m.push("VELOCIT\xC0 ECCESSIVA"),v.probeSpeed&&m.push("SONDE: VELOCIT\xC0 ECCESSIVA"),v.tanksFull&&m.push("SERBATOI PIENI \u2014 RITRARRE LE SONDE"),l.overG>0&&m.push("SOVRACCARICO "+l.nz.toFixed(1)+" g");let g=m.join("<br>"),S=performance.now();g!==this._warnT?(this.warnBox.innerHTML=g,this._warnT=g,this._warnAt=S,this.warnBox.style.visibility=g?"":"hidden"):g&&S-this._warnAt>3e3&&(this.warnBox.style.visibility="hidden"),this._mapTimer+=t,this._mapTimer>.25&&(this._mapTimer=0,this._drawMap(e,i))}_drawMap(t,e){let n=this.mapCanvas,i=this.mapCtx,r=n.width,o=n.height,a=r/11e3,l=r/2,c=o/2,h=(_,x)=>[l+_*a,c+x*a];if(i.clearRect(0,0,r,o),i.fillStyle="rgba(20,32,22,0.82)",i.fillRect(0,0,r,o),!this._lakePath){let _=[];for(let x=0;x<Math.PI*2;x+=.08){let M=Math.cos(x)*Wt.lake.a,b=Math.sin(x)*Wt.lake.b,w=Wt.lake.cx+M*Math.cos(.35)-b*Math.sin(.35),y=Wt.lake.cz+M*Math.sin(.35)+b*Math.cos(.35);_.push([w,y])}this._lakePath=_}i.fillStyle="#2a5f86",i.beginPath(),this._lakePath.forEach(([_,x],M)=>{let[b,w]=h(_,x);M?i.lineTo(b,w):i.moveTo(b,w)}),i.closePath(),i.fill();let u=Wt.runway;i.strokeStyle="#ddd",i.lineWidth=3,i.beginPath();let d=Math.cos(.35)*u.len/2,f=Math.sin(.35)*u.len/2;i.moveTo(...h(u.cx-d,u.cz-f)),i.lineTo(...h(u.cx+d,u.cz+f)),i.stroke();let p=e.summary();for(let _ of p.zones){if(_.state==="quiete")continue;let[x,M]=h(_.x,_.z),b=3+Math.sqrt(_.burning)*.5;i.fillStyle=_.state==="spento"?"rgba(120,120,120,0.9)":_.state==="contenuto"?"rgba(255,170,0,0.9)":"rgba(255,50,20,0.95)",i.beginPath(),i.arc(x,M,Math.min(b,14),0,Math.PI*2),i.fill()}let[v,m]=h(t.pos.x,t.pos.z),g=t.out.heading;i.save(),i.translate(v,m),i.rotate(g),i.fillStyle="#ffd400",i.beginPath(),i.moveTo(0,-8),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore(),i.fillStyle="#ccc",i.font="10px Arial",i.fillText("N \u2191",6,12);let S=p.zones.filter(_=>_.state!=="quiete").map(_=>{let x=Math.hypot(_.x-t.pos.x,_.z-t.pos.z)/1852,M=Math.atan2(_.x-t.pos.x,-(_.z-t.pos.z))*wu;return M<0&&(M+=360),`<div class="fz ${_.state}"><b>${_.name}</b> \u2014 ${_.state.toUpperCase()}<br><small>${Math.round(M)}\xB0 \xB7 ${x.toFixed(1)} NM</small></div>`}).join("");S!==this._fhtml&&(this.fireList.innerHTML=S+`<div class="fz tot">Area bruciata: ${p.burntHa.toFixed(1)} ha</div>`,this._fhtml=S)}showCrash(t){tn("crash").style.display="flex",tn("crashReason").textContent=t}hideCrash(){tn("crash").style.display="none"}};function Dp(s,t){if(!("ontouchstart"in window||navigator.maxTouchPoints>0))return;let n=tn("touch");n.style.display="block";let i=tn("tstick"),r=tn("tknob"),o=h=>{let u=i.getBoundingClientRect();for(let d of h.targetTouches){let f=(d.clientX-u.left)/u.width*2-1,p=(d.clientY-u.top)/u.height*2-1;s.touch.active=!0,s.touch.x=J(f,-1,1),s.touch.y=J(p,-1,1),r.style.transform=`translate(${J(f,-1,1)*45}px, ${J(p,-1,1)*45}px)`}h.preventDefault()};i.addEventListener("touchstart",o,{passive:!1}),i.addEventListener("touchmove",o,{passive:!1}),i.addEventListener("touchend",()=>{s.touch.active=!1,s.touch.x=s.touch.y=0,r.style.transform=""});let a=tn("tthr"),l=tn("tthrknob"),c=h=>{let u=a.getBoundingClientRect(),d=h.targetTouches[0],f=J(1-(d.clientY-u.top)/u.height,0,1);s.touch.throttle=f,l.style.bottom=`${f*100}%`,h.preventDefault()};a.addEventListener("touchstart",c,{passive:!1}),a.addEventListener("touchmove",c,{passive:!1});for(let h of n.querySelectorAll("button[data-act]"))h.addEventListener("touchstart",u=>{u.preventDefault();let d=h.dataset.act;d==="brakes"?s.brakes=1:d==="more"?tn("tmore").classList.toggle("open"):(t(d),d!=="drop"&&d!=="probes"&&tn("tmore").classList.remove("open"))},{passive:!1})}var Np="cl415",vy=new Set(["parking","trimUpPulse","trimDownPulse","thrMax","thrIdle"]),Fp=new Set(["flapDown","flapUp","flapCycle","gear","probes","drop","mode","preset","foam","lights"]),yy=new Set([...Fp,"parking","trimUpPulse","trimDownPulse","restart"]),Up=["fuel","tanks.0","tanks.1","tanks.2","tanks.3","foamConc","foamMix.0","foamMix.1","foamMix.2","foamMix.3","foamArmed","flapIndex","flapPos","gearDown","gearPos","probesCmd","probePos","doorOpen.0","doorOpen.1","doorOpen.2","doorOpen.3","doorCmd.0","doorCmd.1","doorCmd.2","doorCmd.3","outflow.0","outflow.1","outflow.2","outflow.3","dropMode","scoopPreset","elevTrim","parkingBrake","lights.landing","scoopedThisRun","totalDropped"];for(let s=0;s<2;s++)for(let t of["lever","reverseLever","reverse","running","nh","np","pf","torque","itt","ff","oilP","oilT","feathered","fire","shaftPower"])Up.push(`engines.${s}.${t}`);var Hu=Up.map(s=>s.split(".")),My=(s,t)=>{for(let e of t){if(s==null)return;s=s[e]}return s},Sy=(s,t,e)=>{for(let i=0;i<t.length-1;i++)if(s=s[t[i]],s==null)return;let n=t[t.length-1];s[n]=typeof s[n]=="boolean"?!!e:e};function by(s){return Hu.map(t=>{let e=My(s,t);return typeof e=="boolean"?e?1:0:Math.round((e||0)*1e3)/1e3})}function wy(s,t){!Array.isArray(t)||t.length!==Hu.length||Hu.forEach((e,n)=>Sy(s,e,t[n]))}var ps=s=>Math.round(s*100)/100,Gi=s=>Math.round(s*1e3)/1e3,Gc=s=>Math.round(s*1e5)/1e5,Vc=class{constructor(t){this.room=t,this.code="",this.joined=!1,this.joinedAt=0,this.pref="p",this.ro="p",this.cfg=null,this.isHost=!0,this.active=!1,this.role="solo",this.peer=null,this.acts=[],this.lastAct=new Map,this.snap=null,this.snapSeen=null,this.epoch=0,this.seenEpoch=0,this.sw=0,this.sa=0,this.sd=0,this.seenSw=0,this.pendingIn=null,this.events=[],this.evSeen=0,this.evOut=[],this._pubT=0,this._lastPub="",this.stale=0,this.listeners={},this.full=!1}on(t,e){(this.listeners[t]=this.listeners[t]||[]).push(e)}_emit(t,...e){for(let n of this.listeners[t]||[])n(...e)}async join(t,e,n){this.code=t,this.pref=e,this.ro=e,this.cfg=n,this.joinedAt=Date.now(),this.joined=!0,await this.room.presence({a:Np,k:t,j:this.joinedAt,r:e,ro:e,cfg:n});for(let i=0;i<18&&(await new Promise(r=>setTimeout(r,100)),!this._players().some(r=>!r.isMe));i++);return this._resolve(),{host:this.isHost,cfg:this.isHost?null:this.peer&&this.peer.presence.cfg}}leave(){if(this.joined){this.joined=!1,this.active=!1,this.role="solo";try{this.room.presence({a:null,k:null,j:null,s:null,c:null,h:null,q:null,cfg:null,ro:null,r:null})}catch{}}}_players(){let t=(this.room.peers()||[]).filter(e=>e.presence&&e.presence.a===Np&&e.presence.k===this.code);return t.sort((e,n)=>(e.presence.j||0)-(n.presence.j||0)||(e.peer<n.peer?-1:1)),t}_resolve(){let t=this._players(),e=t.findIndex(a=>a.isMe),n=this.role;this.full=e>1;let i=e<=0;i&&!this.isHost&&this.active&&(this.ro=this._lastLetter||this.ro),this.isHost=i;let r=t.find((a,l)=>!a.isMe&&l<2);this.peer=!this.full&&r?r:null;let o=this.active;if(this.active=!!this.peer,this.active)if(this.isHost)this.role=this.ro==="p"?"pilot":"copilot";else{let a=this.peer.presence.ro||"p";this.ro=a,this.role=a==="p"?"copilot":"pilot"}else this.role="solo";this.active&&(this._lastLetter=this.role==="pilot"?"p":"c"),(this.role!==n||o!==this.active)&&this._emit("role",this.role,n)}update(t,e){if(!this.joined)return null;this._resolve();let n=this.peer,i=n?n.presence:null;if(i&&!this.lastAct.has(n.peer)&&!Array.isArray(i.q)&&this.lastAct.set(n.peer,0),i&&Array.isArray(i.q)){let o=n.peer;this.lastAct.has(o)||this.lastAct.set(o,(i.j||0)<this.joinedAt?i.q.reduce((c,h)=>Math.max(c,h[0]),0):0);let a=this.lastAct.get(o),l=a;for(let[c,h]of i.q)c>a&&(this.isHost&&this._emit("action",h),l=Math.max(l,c));this.lastAct.set(o,l)}if(!this.isHost&&i&&i.s&&i.s!==this.snapSeen){this.snapSeen=i.s;let o=i.s;if(this.snap={p:o.p,q:o.q,v:o.v,w:o.w,sy:o.sy,cr:o.cr,ep:o.ep,ev:o.ev,at:performance.now(),fresh:!0},this.stale=0,o.ep!==this.seenEpoch){let a=this.seenEpoch===0&&!this.hadEpoch;this.seenEpoch=o.ep,this.hadEpoch=!0,a||this._emit("restart")}if(Array.isArray(o.ev)){for(let a of o.ev)a[0]>this.evSeen&&((this.evSeen!==0||!this._firstEv)&&this._emit("hostEvent",{text:a[1],level:a[2],type:a[3]}),this.evSeen=Math.max(this.evSeen,a[0]));this._firstEv=!0}}else this.isHost||(this.stale+=t);this.isHost&&(this.stale=0),i&&(i.sw&&i.sw!==this.seenSw&&i.sw!==this.pendingIn?.id&&(this.pendingIn={id:i.sw,t:performance.now()},this._emit("swapRequest")),this.isHost&&this.sw&&i.sa===this.sw&&(this.sw=0,this._flip()),this.sw&&i.sd===this.sw&&(this.sw=0,this._emit("swapDeclined"))),this.pendingIn&&performance.now()-this.pendingIn.t>15e3&&(this.pendingIn=null,this._emit("swapRequest"));let r=null;if(i&&this.role==="copilot"&&Array.isArray(i.c)){let o=i.c;r={x:o[0],y:o[1],rudder:o[2],throttle:o[3],brakes:o[4],trimRate:o[5],reverse:o[6]}}return this._publish(t,e),r}_flip(){this.ro=this.ro==="p"?"c":"p",this._resolve()}requestSwap(){this.active&&(this.sw=Date.now(),this.room.presence({sw:this.sw}))}answerSwap(t){let e=this.pendingIn;e&&(this.pendingIn=null,this.seenSw=e.id,t?this.isHost?this._flip():(this.sa=e.id,this.room.presence({sa:e.id})):(this.sd=e.id,this.room.presence({sd:e.id})),this._emit("swapRequest"))}sendAction(t){let e=Date.now();this.acts.push([e<=(this._lastId||0)?this._lastId+1:e,t]),this._lastId=this.acts[this.acts.length-1][0],this.acts.length>6&&this.acts.shift(),this.room.presence({q:this.acts})}allowed(t,e=this.role){return e==="pilot"&&Fp.has(t)?"copilot":e==="copilot"&&vy.has(t)?"pilot":!0}needsHost(t){return yy.has(t)}_publish(t,e){if(this._pubT+=t,this._pubT<1/16)return;this._pubT=0;let n={r:this.role==="pilot"?"p":this.role==="copilot"?"c":this.pref};if(this.role==="pilot"&&e.ctl){let i=e.ctl;n.c=[Gi(i.x),Gi(i.y),Gi(i.rudder),Gi(i.throttle),Gi(i.brakes),i.trimRate,Gi(i.reverse)]}else n.c=null;if(e.head&&(n.h=[ps(e.head.yaw),ps(e.head.pitch)]),this.isHost)if(n.ro=this.ro,n.cfg=this.cfg,this.active&&e.fm){let{fm:i,sys:r}=e;n.s={p:[ps(i.pos.x),ps(i.pos.y),ps(i.pos.z)],q:[Gc(i.quat.x),Gc(i.quat.y),Gc(i.quat.z),Gc(i.quat.w)],v:[ps(i.vel.x),ps(i.vel.y),ps(i.vel.z)],w:[Gi(i.omega.x),Gi(i.omega.y),Gi(i.omega.z)],sy:by(r),cr:i.crash?i.crash.reason:null,ep:this.epoch,ev:this.evOut}}else n.s=null;this.room.presence(n)}noteEvents(t){for(let e of t)(e.type==="drop"||e.level!=="info"||e.type==="full"||e.type==="scoopdone"||e.type==="probes"||e.type==="flaps"||e.type==="mode")&&(this._evId=Math.max(Date.now(),(this._evId||0)+1),this.evOut.push([this._evId,e.text,e.level,e.type]),this.evOut.length>4&&this.evOut.shift())}bumpEpoch(){this.epoch=Date.now()}follow(t,e,n){let i=this.snap;if(!i)return;i.fresh&&(i.fresh=!1,wy(n,i.sy));let r=(performance.now()-i.at)/1e3+.07,o=new D(i.w[0],i.w[1],i.w[2]),a=new D(i.p[0]+i.v[0]*r,i.p[1]+i.v[1]*r,i.p[2]+i.v[2]*r),l=new qe(i.q[0],i.q[1],i.q[2],i.q[3]);if(o.lengthSq()>1e-10&&l.multiply(new qe().setFromAxisAngle(o.clone().normalize(),o.length()*r)),a.distanceTo(e.pos)>30||!this._synced)this._synced=!0,e.pos.copy(a),e.quat.copy(l),e.vel.set(i.v[0],i.v[1],i.v[2]),e.omega.copy(o);else{let h=1-Math.exp(-t*5);e.pos.lerp(a,h),e.quat.slerp(l,h),e.vel.lerp(new D(i.v[0],i.v[1],i.v[2]),h),e.omega.lerp(o,h)}i.cr&&!e.crash?e.crash={reason:i.cr,time:e.time,pos:e.pos.clone(),vel:e.vel.clone()}:!i.cr&&e.crash&&(e.crash=null)}peerView(){if(!this.peer)return null;let t=this.peer.presence,e=Array.isArray(t.h)?t.h:[0,0];return{role:this.role==="pilot"?"copilot":"pilot",yaw:J(e[0]||0,-2.6,2.6),pitch:J(e[1]||0,-1.2,1.1)}}};var $t=s=>document.getElementById(s),Ey=()=>new Promise(s=>setTimeout(s,16)),Op=location.hash.includes("test"),Gu=s=>{try{return localStorage.getItem("cl415."+s)}catch{return null}},yn={quality:Gu("quality")||(matchMedia("(pointer: coarse)").matches?"low":"medium"),start:Gu("start")||"air",wind:Gu("wind")||"moderate"};try{for(let s of["quality","start","wind"])$t(s+"Sel").value=yn[s]}catch{}var $e=new Oc,Le=null,It=null,Vu=null;try{window.claude&&window.claude.use&&Promise.race([window.claude.use("room"),new Promise(s=>setTimeout(()=>s(null),6e3))]).then(s=>{s&&(Vu=s,$t("mpBox").style.display="block")}).catch(()=>{})}catch{}$t("mpBtn").addEventListener("click",async()=>{if(!Vu||It)return;let s=($t("mpCode").value||"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,24);if(!s){$t("mpStatus").textContent="Scrivi un codice stanza (lettere e numeri).";return}try{localStorage.setItem("cl415.mpCode",s),localStorage.setItem("cl415.mpRole",$t("mpRole").value)}catch{}$t("mpBtn").disabled=!0,$t("mpStatus").textContent="Connessione alla stanza\u2026";let t=new Vc(Vu);Ty(t);try{let e=await t.join(s,$t("mpRole").value,{start:$t("startSel").value,wind:$t("windSel").value});if(t.full){$t("mpStatus").textContent="Stanza piena: ci sono gi\xE0 due piloti.",t.leave(),$t("mpBtn").disabled=!1;return}It=t,!e.host&&e.cfg?($t("startSel").value=e.cfg.start,$t("windSel").value=e.cfg.wind,$t("mpStatus").textContent="Compagno trovato: entro nella sua partita\u2026"):$t("mpStatus").textContent="Partita creata. Il compagno pu\xF2 entrare con lo stesso codice.",$t("startBtn").click()}catch(e){$t("mpStatus").textContent="Connessione non riuscita: "+(e&&e.message?e.message:e),$t("mpBtn").disabled=!1}});try{$t("mpCode").value=localStorage.getItem("cl415.mpCode")||"canadair",$t("mpRole").value=localStorage.getItem("cl415.mpRole")||"p"}catch{}function Ty(s){s.on("role",(t,e)=>Bp(t,e)),s.on("action",t=>{let e=s.role==="pilot"?"copilot":s.role==="copilot"?"pilot":null;(!e||t==="restart"||s.allowed(t,e)===!0)&&Hp(t,!0)}),s.on("restart",()=>Le&&la(yn.start)),s.on("hostEvent",t=>{Le&&(Le.hud.message(t.text,t.level==="caution"?"warn":t.level,t.type==="drop"?2.5:5),(t.type==="full"||t.type==="scoopdone")&&$e.chime(2,1046),t.level==="caution"&&$e.chime(1,880))}),s.on("swapRequest",kp),s.on("swapDeclined",()=>Le&&Le.hud.message("Il compagno ha rifiutato lo scambio","warn",3))}function Ay(s){return s==="pilot"?"PILOTA":s==="copilot"?"COPILOTA":"SOLO"}function Bp(s,t){if(!Le)return;let{input:e,sys:n,cockpit:i,hud:r}=Le;e.flight=s!=="copilot",i.setSeat(s==="copilot"?1:-1),e.throttle=n.engines[0].lever,e.reverse=e.wheelReverse=0,e.yokeEngaged=!1,e.stick.x=e.stick.y=0,e.rudder=0,Le.rig.lookReset(),s==="pilot"?r.message("\u{1F468}\u200D\u2708\uFE0F Sei il PILOTA (sedile sinistro): cloche, pedali e manette. Flap, carrello, sonde e sgancio li gestisce il copilota.","info",8):s==="copilot"?r.message("\u{1F9D1}\u200D\u2708\uFE0F Sei il COPILOTA (sedile destro): carrello (G), flap (V), sonde (P), sgancio (SPAZIO), modo (M), quantit\xE0 (N), schiuma (J).","info",8):(t==="pilot"||t==="copilot")&&r.message("Il compagno \xE8 uscito: ora hai tutti i comandi.","warn",5);let o=$t("fade");o.style.opacity=1,setTimeout(()=>o.style.opacity=0,220),kp()}function kp(){if(!It)return;let s=$t("swapPrompt");if(It.pendingIn){let t=It.role==="pilot"?"COPILOTA":"PILOTA";$t("swapText").textContent=`\u{1F504} Il compagno vuole scambiare i ruoli: tu diventeresti ${t}.`,s.style.display="flex"}else s.style.display="none"}$t("swapYes").addEventListener("click",()=>It&&It.answerSwap(!0));$t("swapNo").addEventListener("click",()=>It&&It.answerSwap(!1));$t("swapBtn").addEventListener("click",()=>{!It||!It.active||It.sw||(It.requestSwap(),Le&&Le.hud.message("Richiesta di scambio inviata al compagno\u2026","info",3))});var zp=()=>{It&&It.active&&!It.isHost?(It.sendAction("restart"),Le.hud.message("Richiesta di ripartenza inviata all'host\u2026","info",3)):la(yn.start)};$t("startBtn").addEventListener("click",async()=>{yn.quality=$t("qualitySel").value,yn.start=$t("startSel").value,yn.wind=$t("windSel").value;try{for(let s of["quality","start","wind"])localStorage.setItem("cl415."+s,yn[s])}catch{}$e.start(),$t("menu").style.display="none",Le?la(yn.start):await Cy(),Le.paused=!1});function Ry(){try{let t=document.createElement("canvas").getContext("webgl2");return!!(t&&t.getExtension("EXT_clip_control"))}catch{return!1}}async function Cy(){let s=$t("loading"),t=$t("loadStatus");s.style.display="flex";let e=async y=>{t.textContent=y,await Ey()},n=yn.quality;await e("Preparazione del motore grafico\u2026");let i=Ry(),r=new mc({antialias:n!=="low",powerPreference:"high-performance",reverseDepthBuffer:i,logarithmicDepthBuffer:!i});r.setPixelRatio(Math.min(window.devicePixelRatio,n==="high"?2:n==="low"?1:1.25)),r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Uo,r.toneMappingExposure=.52,r.shadowMap.enabled=!0,r.shadowMap.type=As,$t("app").prepend(r.domElement),r.domElement.id="gl";let o=new Ss,a=new fn(70,window.innerWidth/window.innerHeight,.05,95e3);a.layers.enable(1),await e("Cielo e atmosfera\u2026");let l=new _c(o,r,{quality:n});l.wind.speed=yn.wind==="calm"?1.5:yn.wind==="strong"?9:4.6,l.wind.gust=yn.wind==="calm"?.6:yn.wind==="strong"?5:2.2,l.wind.turb=yn.wind==="calm"?.3:yn.wind==="strong"?2.2:1,l.updateWindBase(),await e("Generazione del terreno (valle, lago, montagne)\u2026");let c=new Mc({quality:n});await e("Incendi boschivi\u2026");let h=new Tc(o,c,l,{quality:n});await e("Superficie del terreno\u2026"),o.add(c.buildMesh(h.fireAtlas)),await e("Aeroporto e rampa idrovolanti\u2026");let u=op(c);o.add(u),await e("Vegetazione\u2026");let d=new wc(c,o,{quality:n});d.meshes.forEach(y=>y.layers.set(1)),d.burnFn=(y,E)=>h.burntAt(y,E),await e("Lago con riflessi\u2026");let f=new Ec({terrain:c,sunDir:l.sunDir,quality:n,renderer:r});o.add(f.mesh),await e("Canadair CL-415: fusoliera, ali, livrea\u2026");let p=new Cc({quality:n});o.add(p.group),await e("Cabina di pilotaggio e strumenti\u2026");let v=new Nc({quality:n});p.group.add(v.group);let m={groundHeight:(y,E)=>Math.abs(y)>Wt.half-50||Math.abs(E)>Wt.half-50?2e3:c.heightAt(y,E),waterHeight:(y,E,A)=>f.heightAt(y,E,A),windAt:(y,E,A,R,C)=>l.windAt(y,E,A,R,C,Math.max(c.heightAt(y,A),0)),surfaceFriction:(y,E)=>c.surfaceFriction(y,E)},g=new Fc(m),S=new sa;g.sys=S;let _=new Uc(o,{quality:n,world:m,onDeposit:(y,E,A,R)=>h.deposit(y,E,A,R)}),x=new Bc(r.domElement),M=new D(Wt.runway.cx+Re.x*55+Me.x*200,Wt.runway.elev+17,Wt.runway.cz+Re.z*55+Me.z*200),b=new zc(a,{towerPos:M}),w=new Hc;Dp(x,y=>x.actions.push(y)),Le={renderer:r,scene:o,camera:a,env:l,terrain:c,fires:h,veg:d,water:f,model:p,cockpit:v,world:m,fm:g,sys:S,fx:_,input:x,rig:b,hud:w,paused:!0,time:0,crashShown:!1,airfield:u},h.start(),la(yn.start),await e("Pronto."),s.style.display="none",$t("hud").style.display="block",w.message("Benvenuto a bordo del CL-415. Premi H per i comandi.","info",8),x.mouseYoke&&w.message("\u{1F5B1}\uFE0F Porta il mouse nel cerchio al centro per prendere la cloche \xB7 rotella = manette \xB7 tasto destro = guardati intorno","info",8),w.message("Incendi attivi sui versanti a sud del lago: guarda la mappa in alto a destra.","warn",10),w.setCamera(b.mode),It&&Bp(It.role,"solo"),window.addEventListener("resize",Py),Le.last=performance.now(),window.__cl415=Le,Op?window.__advance=(y,E=30,A=!0)=>{let R=Math.max(1,Math.round(y*E));for(let C=0;C<R;C++)Wu(Le.last+1e3/E,A&&C===R-1);return!0}:requestAnimationFrame(Wu)}function Py(){let{renderer:s,camera:t,water:e}=Le;s.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight,yn.quality)}function la(s){let{fm:t,sys:e,input:n,hud:i,rig:r}=Le,o=new sa;for(let c of Object.keys(o))c!=="events"&&(e[c]=o[c]);e.engines=o.engines,e.fuel=2300,n.throttle=0,n.reverse=0,n.wheelReverse=0,n.yokeEngaged=!1,n.stick.x=n.stick.y=0,n.rudder=0;let a=Wt.lake,l=Math.atan2(Re.x,-Re.z);if(s==="water"){let c=Cu(-2600,-280);e.gearDown=!1,e.gearPos=0,e.flapIndex=2,e.flapPos=15,t.reset(new D(c.x,0,c.z),-l,0,"water"),n.throttle=0}else if(s==="runway"){let c=Wt.runway,h=c.cx-Re.x*(c.len/2-60),u=c.cz-Re.z*(c.len/2-60);e.gearDown=!0,e.gearPos=1,e.flapIndex=1,e.flapPos=10,e.parkingBrake=!1,t.reset(new D(h,0,u),-l,0,"runway")}else{let c=Cu(-5200,0);e.gearDown=!1,e.gearPos=0,e.flapIndex=0,e.flapPos=0,t.reset(new D(c.x,330,c.z),-l,135*.514444,"air"),n.throttle=.55,e.engines.forEach(h=>{h.lever=.55,h.nh=92}),e.elevTrim=.1}Le.crashShown=!1,i.hideCrash(),r.lookReset(),It&&It.joined&&It.isHost&&It.bumpEpoch()}function Hp(s,t=!1){let{sys:e,fm:n,hud:i,rig:r,input:o}=Le;if(It&&It.active){if(s==="restart"&&It.pendingIn)return It.answerSwap(!0);if(s==="swap")return It.requestSwap();if(!t){let a=It.allowed(s);if(a!==!0){i.message(a==="copilot"?"Questo lo gestisce il COPILOTA":"Questo lo gestisce il PILOTA","warn",2);return}if(!It.isHost&&It.needsHost(s)){It.sendAction(s),$e.click(900,.06,.3);return}}}switch(s){case"flapDown":e.setFlaps(1),$e.click(900,.06,.3);break;case"flapUp":e.setFlaps(-1),$e.click(900,.06,.3);break;case"flapCycle":e.cycleFlaps(),$e.click(900,.06,.3);break;case"gear":e.toggleGear(n),$e.click(600,.08,.4);break;case"probes":e.toggleProbes(n),$e.click(1200,.05,.3);break;case"drop":e.drop(),$e.click(2e3,.03,.4);break;case"mode":e.cycleDropMode(),$e.click(2400,.03,.3);break;case"preset":e.cycleScoopPreset(),$e.click(2400,.03,.3);break;case"foam":e.toggleFoam(),$e.click(1600,.04,.3);break;case"lights":e.lights.landing=!e.lights.landing,i.message("Fari di atterraggio: "+(e.lights.landing?"ACCESI":"SPENTI")),$e.click();break;case"parking":e.parkingBrake=!e.parkingBrake,i.message("Freno di stazionamento: "+(e.parkingBrake?"INSERITO":"DISINSERITO"));break;case"thrMax":o.throttle=1;break;case"thrIdle":o.throttle=0;break;case"camera":r.set(r.mode+1),i.setCamera(r.mode);break;case"hud":i.toggleData();break;case"help":Xu("help");break;case"pause":qu();break;case"lookReset":r.lookReset();break;case"mouseYoke":o.mouseYoke=!o.mouseYoke,o.yokeEngaged=!1,i.message("Cloche col mouse: "+(o.mouseYoke?"ATTIVA":"DISATTIVA"));break;case"gamepad":i.message("Gamepad collegato","good");break;case"restart":(n.crash||t)&&la(yn.start);break;case"trimUpPulse":e.elevTrim=J(e.elevTrim+.05,-1,1);break;case"trimDownPulse":e.elevTrim=J(e.elevTrim-.05,-1,1);break;case"swap":break;case"debug":Le.debug=!Le.debug,$t("debug").style.display=Le.debug?"block":"none";break;default:s.startsWith("cam")&&(r.set(parseInt(s.slice(3),10)-1),i.setCamera(r.mode))}}function Xu(s){let t=$t(s);t.style.display=t.style.display==="flex"?"none":"flex"}function qu(){if(It&&It.active){let s=$t("pause");s.style.display=s.style.display==="flex"?"none":"flex";return}Le.paused=!Le.paused,Le.input.yokeEngaged=!1,$t("pause").style.display=Le.paused?"flex":"none",Le.paused&&$e.ctx?$e.ctx.suspend():$e.ctx&&$e.ctx.resume()}$t("resumeBtn").addEventListener("click",()=>qu());$t("restartBtn").addEventListener("click",()=>{zp(),qu()});$t("menuBtn").addEventListener("click",()=>{$t("pause").style.display="none",$t("menu").style.display="flex"});$t("crashBtn").addEventListener("click",()=>zp());$t("helpClose").addEventListener("click",()=>Xu("help"));for(let s of document.querySelectorAll("[data-help]"))s.addEventListener("click",()=>Xu("help"));var aa=new D;function Wu(s,t=!0){Op||requestAnimationFrame(Wu);let e=Le,n=Math.min(.05,(s-e.last)/1e3);e.last=s;let{fm:i,sys:r,input:o,rig:a,hud:l,model:c,cockpit:h,fx:u,fires:d,veg:f,env:p,water:v,camera:m,renderer:g}=e;for(let C of o.popActions())Hp(C);if(e.paused){t&&g.render(e.scene,m);return}e.time+=n;let S=i.out,_=S.onGround||S.onWater;o.update(n,_);let x={x:o.stick.x,y:o.stick.y,rudder:o.rudder,throttle:o.throttle,brakes:o.brakes,trimRate:o.trimRate,reverse:o.reverse};if(It&&It.joined){o.hold=$t("pause").style.display==="flex"||It.active&&e.swapVisible;let C=It.update(n,{ctl:x,head:a.head,fm:i,sys:r});It.active&&It.role==="copilot"&&(x=C||{x:0,y:0,rudder:0,throttle:r.engines[0].lever,brakes:0,trimRate:0,reverse:0}),Iy(n,e)}i.ctl.elevator=x.y,i.ctl.aileron=x.x,i.ctl.rudder=x.rudder,i.ctl.tiller=x.rudder;let M=x.brakes;i.ctl.brakeL=J(M*(1+Math.max(0,-x.rudder)*.6-Math.max(0,x.rudder)*.5),0,1),i.ctl.brakeR=J(M*(1+Math.max(0,x.rudder)*.6-Math.max(0,-x.rudder)*.5),0,1);for(let C of r.engines)C.lever=x.throttle,C.reverseLever=x.reverse;r.elevTrim=J(r.elevTrim+x.trimRate*n*.12,-1,1),e.autopilot&&e.autopilot(n,e),i.update(n),It&&It.active&&!It.isHost&&It.follow(n,i,r),It&&It.active&&It.isHost&&It.noteEvents(r.events),It&&It.active&&!It.isHost&&(r.events.length=0);for(let C of r.events){let L=C.level==="caution"?"warn":C.level;l.message(C.text,L,C.type==="drop"?2.5:5),(C.type==="full"||C.type==="scoopdone")&&$e.chime(2,1046),C.level==="caution"&&$e.chime(1,880)}r.events.length=0;for(let C of d.events)l.message(C.text,C.level==="good"?"good":"warn",7),C.level==="good"&&$e.chime(3,1318);d.events.length=0,i.crash&&!e.crashShown&&(e.crashShown=!0,l.showCrash(i.crash.reason),$e.thump(1.5,S.surfaceUnder==="water")),c.group.quaternion.copy(i.quat),c.group.position.copy(i.cg).negate().applyQuaternion(i.quat).add(i.pos),c.update(n,r,i),c.group.updateMatrixWorld(!0);let b=a.inside;h.group.visible=b,c.setInterior(b),It&&It.joined&&h.setPeer(It.active&&b?It.peerView():null),b&&h.update(n,i,r,e.time);let w=o.consumeLook();p.windAt(i.pos.x,i.pos.y,i.pos.z,e.time,aa),a.update(n,i,w,{eye:h.eye,groundAt:(C,L)=>Math.max(e.world.groundHeight(C,L),.3),shake:u.cameraShake,turb:p.thermals.length?.5:0}),e.camOverride&&e.camOverride(m),d.update(n,e.time,m.position),u.update(n,i,r,c,p,m,e.time),f.update(m.position,n),e._vegT=(e._vegT||0)+n,e._vegT>2.5&&(e._vegT=0,f.refreshColors()),p.update(n,i.pos,m.position),v.update(n,e.time,p),e.terrain.material.userData.uniforms.uTime.value=e.time;let y=e.airfield.userData.windsock;if(y){let C=Math.atan2(aa.x,aa.z);y.rotation.y=C-Math.PI/2,y.userData.sock.rotation.y=0,y.userData.sock.rotation.z=Math.PI/2-J(Math.hypot(aa.x,aa.z)/8,.1,1)*1.3+Math.PI/2-Math.PI/2}let E=i.pos.clone().sub(m.position),A=E.length(),R=A>1?-i.vel.dot(E)/A:0;if($e.update(n,i,r,{inside:b,distance:A,closing:R}),l.update(n,i,r,d,o,a,u.windscreenWet),!!t&&(u.render(m,p),d.render(m,p),g.render(e.scene,m),e.debug)){let C=g.info;$t("debug").textContent=`fps ${(1/Math.max(n,.001)).toFixed(0)} | draw ${C.render.calls} | tri ${(C.render.triangles/1e6).toFixed(2)}M | part ${JSON.stringify(u.stats())} | alpha ${(S.alpha/Et).toFixed(1)} beta ${(S.beta/Et).toFixed(1)} | wet ${S.wetLength.toFixed(1)} depth ${S.hullDepth.toFixed(2)} | scoop ${S.scoopRate.toFixed(0)} L/s`}}function Iy(s,t){let{rig:e,input:n}=t;t._mpT=(t._mpT||0)+s;let r=It.active&&e.inside&&(It.role==="pilot"?e.head.tyaw<-.5:e.head.tyaw>.5)&&!It.pendingIn;if(r!==t.swapVisible&&(t.swapVisible=r,$t("swapBtn").style.display=r?"block":"none"),r){let o=It.sw?"\u23F3 In attesa del compagno\u2026":`\u{1F504} Scambia ruolo (diventi ${It.role==="pilot"?"COPILOTA":"PILOTA"})`;$t("swapBtn").textContent!==o&&($t("swapBtn").textContent=o)}if(t._mpT>.25){t._mpT=0;let o=$t("mpbar"),a;It.active?a=`\u{1F465} Tu: ${Ay(It.role)} \xB7 ${It.isHost?"host":"ospite"}${It.stale>2.5?" \xB7 \u26A0\uFE0F segnale debole":""}`:a=`\u{1F465} Stanza \xAB${It.code}\xBB \xB7 aspetto il compagno\u2026 (hai tutti i comandi)`,o.textContent!==a&&(o.textContent=a),o.style.display="block"}}$t("menu").style.display="flex";})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
