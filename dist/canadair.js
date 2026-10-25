(()=>{var Rd=0,Th=1,Cd=2;var ws=1,Pd=2,_r=3,es=0,Ke=1,Qe=2,yi=0,ns=1,Es=2,Ah=3,Rh=4,Id=5;var Ts=100,Ld=101,Dd=102,Nd=103,Fd=104,Ud=200,Od=201,Bd=202,zd=203,Ch=204,Ph=205,kd=206,Hd=207,Gd=208,Vd=209,Wd=210,Xd=211,qd=212,Yd=213,Zd=214,Fa=0,Ua=1,Oa=2,rr=3,Ba=4,za=5,ka=6,Ha=7,_l=0,$d=1,Jd=2,oi=0,Ih=1,Lh=2,Dh=3,Lo=4,Nh=5,Fh=6,Uh=7;var Oh=300,is=301,As=302,vl=303,yl=304,Do=306,_s=1e3,Kn=1001,Ga=1002,dn=1003,Kd=1004;var No=1005;var Xe=1006,Ml=1007;var Mi=1008;var Ln=1009,Bh=1010,zh=1011,vr=1012,Sl=1013,ai=1014,Qn=1015,Gn=1016,bl=1017,wl=1018,yr=1020,kh=35902,Hh=35899,Gh=1021,Vh=1022,wn=1023,xi=1026,ss=1027,El=1028,Tl=1029,rs=1030,Al=1031;var Rl=1033,Fo=33776,Uo=33777,Oo=33778,Bo=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Nl=37492,Fl=37496,Ul=37488,Ol=37489,zo=37490,Bl=37491,zl=37808,kl=37809,Hl=37810,Gl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,$l=37818,Jl=37819,Kl=37820,Ql=37821,jl=36492,tc=36494,ec=36495,nc=36283,ic=36284,ko=36285,sc=36286;var Yr=2300,Va=2301,Da=2302,fh=2303,ph=2400,mh=2401,gh=2402;var Qd=3200;var Ho=0,jd=1,li="",Pe="srgb",Zr="srgb-linear",$r="linear",Ce="srgb";var Na=7680;var tf=519,ef=512,nf=513,sf=514,rc=515,rf=516,of=517,oc=518,af=519,Wh=35044,jn=35048;var Xh="300 es",si=2e3,or=2001;function Np(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Jr("canvas");return i.style.display="block",i}var $u={},ar=null;function Kr(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function cf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=cf(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=cf(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xs(...i){let t=i.join(" ");t in $u||($u[t]=!0,$t(...i))}function hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uf={[Fa]:Ua,[Oa]:ka,[Ba]:Ha,[rr]:za,[Ua]:Fa,[ka]:Oa,[Ha]:Ba,[za]:rr},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zc=Math.PI/180,Qr=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Up(i,t){return(i%t+t)%t}function kc(i,t,e){return(1-e)*i+e*t}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kh=class Kh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kh.prototype.isVector2=!0;var ct=Kh,en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),_=Math.sin(S);g=Math.sin(g*S)/_,a=Math.sin(a*S)/_,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+v*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+v*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qh=class Qh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hc.copy(this).projectOnVector(t),this.sub(Hc)}reflect(t){return this.sub(Hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qh.prototype.isVector3=!0;var D=Qh,Hc=new D,Ju=new en,jh=class jh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],S=s[1],_=s[4],x=s[7],M=s[2],b=s[5],w=s[8];return r[0]=o*v+a*S+l*M,r[3]=o*m+a*_+l*b,r[6]=o*g+a*x+l*w,r[1]=c*v+h*S+u*M,r[4]=c*m+h*_+u*b,r[7]=c*g+h*x+u*w,r[2]=d*v+f*S+p*M,r[5]=d*m+f*_+p*b,r[8]=d*g+f*x+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;var ee=jh,Gc=new ee,Ku=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let i={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zr]:{primaries:t,whitePoint:n,transfer:$r,toXYZ:Ku,fromXYZ:Qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Ku,fromXYZ:Qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var me=Op();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,Wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zs===void 0&&(zs=Jr("canvas")),zs.width=t.width,zs.height=t.height;let s=zs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vc(s[o].image)):r.push(Vc(s[o]))}else r=Vc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var zp=0,Wc=new D,Pn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=Xe,o=Mi,a=wn,l=Ln,c=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ni(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Oh;Pn.DEFAULT_ANISOTROPY=1;var tu=class tu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(f+1)/2,M=(g+1)/2,b=(h+d)/4,w=(u+v)/4,y=(p+m)/4;return _>x&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=w/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tu.prototype.isVector4=!0;var ge=tu,Xa=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Pn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Xa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xl=class xl{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Hp)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Wi.crossVectors(n,Un),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Wi.crossVectors(n,Un)),Wi.normalize(),oa.crossVectors(Un,Wi),s[0]=Wi.x,s[4]=oa.x,s[8]=Un.x,s[1]=Wi.y,s[5]=oa.y,s[9]=Un.y,s[2]=Wi.z,s[6]=oa.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],S=n[3],_=n[7],x=n[11],M=n[15],b=s[0],w=s[4],y=s[8],E=s[12],R=s[1],A=s[5],C=s[9],L=s[13],P=s[2],F=s[6],U=s[10],B=s[14],X=s[3],O=s[7],H=s[11],V=s[15];return r[0]=o*b+a*R+l*P+c*X,r[4]=o*w+a*A+l*F+c*O,r[8]=o*y+a*C+l*U+c*H,r[12]=o*E+a*L+l*B+c*V,r[1]=h*b+u*R+d*P+f*X,r[5]=h*w+u*A+d*F+f*O,r[9]=h*y+u*C+d*U+f*H,r[13]=h*E+u*L+d*B+f*V,r[2]=p*b+v*R+m*P+g*X,r[6]=p*w+v*A+m*F+g*O,r[10]=p*y+v*C+m*U+g*H,r[14]=p*E+v*L+m*B+g*V,r[3]=S*b+_*R+x*P+M*X,r[7]=S*w+_*A+x*F+M*O,r[11]=S*y+_*C+x*U+M*H,r[15]=S*E+_*L+x*B+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],S=l*f-c*d,_=a*f-c*u,x=a*d-l*u,M=o*f-c*h,b=o*d-l*h,w=o*u-a*h;return e*(v*S-m*_+g*x)-n*(p*S-m*M+g*b)+s*(p*_-v*M+g*w)-r*(p*x-v*b+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],S=e*a-n*o,_=e*l-s*o,x=e*c-r*o,M=n*l-s*a,b=n*c-r*a,w=s*c-r*l,y=h*v-u*p,E=h*m-d*p,R=h*g-f*p,A=u*m-d*v,C=u*g-f*v,L=d*g-f*m,P=S*L-_*C+x*A+M*R-b*E+w*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return t[0]=(a*L-l*C+c*A)*F,t[1]=(s*C-n*L-r*A)*F,t[2]=(v*w-m*b+g*M)*F,t[3]=(d*b-u*w-f*M)*F,t[4]=(l*R-o*L-c*E)*F,t[5]=(e*L-s*R+r*E)*F,t[6]=(m*x-p*w-g*_)*F,t[7]=(h*w-d*x+f*_)*F,t[8]=(o*C-a*R+c*y)*F,t[9]=(n*R-e*C-r*y)*F,t[10]=(p*b-v*x+g*S)*F,t[11]=(u*x-h*b-f*S)*F,t[12]=(a*E-o*A-l*y)*F,t[13]=(e*A-n*E+s*y)*F,t[14]=(v*_-p*M-m*S)*F,t[15]=(h*M-u*_+d*S)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,v=o*h,m=o*u,g=a*u,S=l*c,_=l*h,x=l*u,M=n.x,b=n.y,w=n.z;return s[0]=(1-(v+g))*M,s[1]=(f+x)*M,s[2]=(p-_)*M,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(d+g))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(p+_)*w,s[9]=(m-S)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let c=1/o,h=1/a,u=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=si,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===si)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===or)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===si)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===or)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};xl.prototype.isMatrix4=!0;var ye=xl,ks=new D,ei=new ye,kp=new D(0,0,0),Hp=new D(1,1,1),Wi=new D,oa=new D,Un=new D,ju=new ye,td=new en,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return td.setFromEuler(this),this.setFromQuaternion(td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gp=0,ed=new D,Hs=new en,Ri=new ye,aa=new D,Nr=new D,Vp=new D,Wp=new en,nd=new D(1,0,0),id=new D(0,1,0),sd=new D(0,0,1),rd={type:"added"},Xp={type:"removed"},Gs={type:"childadded",child:null},Xc={type:"childremoved",child:null},qe=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new In,n=new en,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new ee}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(nd,t)}rotateY(t){return this.rotateOnAxis(id,t)}rotateZ(t){return this.rotateOnAxis(sd,t)}translateOnAxis(t,e){return ed.copy(t).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nd,t)}translateY(t){return this.translateOnAxis(id,t)}translateZ(t){return this.translateOnAxis(sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Nr,aa,this.up):Ri.lookAt(aa,Nr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),Xc.child=t,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new D(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},la={h:0,s:0,l:0};function qc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Up(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qc(o,r,t+1/3),this.g=qc(o,r,t),this.b=qc(o,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return me.workingToColorSpace(Sn.copy(this),t),Math.round(de(Sn.r*255,0,255))*65536+Math.round(de(Sn.g*255,0,255))*256+Math.round(de(Sn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Pe){me.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(la);let n=kc(Xi.h,la.h,e),s=kc(Xi.s,la.s,e),r=kc(Xi.l,la.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new bt;bt.NAMES=df;var eo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vs=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ni=new D,Ci=new D,Yc=new D,Pi=new D,Vs=new D,Ws=new D,od=new D,Zc=new D,$c=new D,Jc=new D,Kc=new ge,Qc=new ge,jc=new ge,Di=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ni.subVectors(s,e),Ci.subVectors(n,e),Yc.subVectors(t,e);let o=ni.dot(ni),a=ni.dot(Ci),l=ni.dot(Yc),c=Ci.dot(Ci),h=Ci.dot(Yc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kc.setScalar(0),Qc.setScalar(0),jc.setScalar(0),Kc.fromBufferAttribute(t,e),Qc.fromBufferAttribute(t,n),jc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector(Qc,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(t,e,n,s){return ni.subVectors(n,e),Ci.subVectors(t,e),ni.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Ws.subVectors(r,n),Zc.subVectors(t,n);let l=Vs.dot(Zc),c=Ws.dot(Zc);if(l<=0&&c<=0)return e.copy(n);$c.subVectors(t,s);let h=Vs.dot($c),u=Ws.dot($c);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vs,o);Jc.subVectors(t,r);let f=Vs.dot(Jc),p=Ws.dot(Jc);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ws,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return od.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(od,a);let g=1/(m+v+d);return o=v*g,a=d*g,e.copy(n).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),ha.subVectors(this.max,Fr),Xs.subVectors(t.a,Fr),qs.subVectors(t.b,Fr),Ys.subVectors(t.c,Fr),qi.subVectors(qs,Xs),Yi.subVectors(Ys,qs),fs.subVectors(Xs,Ys);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-fs.z,fs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,fs.z,0,-fs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-fs.y,fs.x,0];return!th(e,Xs,qs,Ys,ha)||(e=[1,0,0,0,1,0,0,0,1],!th(e,Xs,qs,Ys,ha))?!1:(ua.crossVectors(qi,Yi),e=[ua.x,ua.y,ua.z],th(e,Xs,qs,Ys,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new D,new D,new D,new D,new D,new D,new D,new D],ii=new D,ca=new vi,Xs=new D,qs=new D,Ys=new D,qi=new D,Yi=new D,fs=new D,Fr=new D,ha=new D,ua=new D,ps=new D;function th(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tn=new D,da=new ct,Yp=0,we=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var no=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var io=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zp=new vi,Ur=new D,eh=new D,Ui=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(eh)),this.expandByPoint(Ur.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$p=0,Jn=new ye,nh=new qe,Zs=new D,On=new vi,Or=new vi,hn=new D,xe=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Np(t)?io:no)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(On.min,Or.min),On.expandByPoint(hn),hn.addVectors(On.max,Or.max),On.expandByPoint(hn)):(On.expandByPoint(Or.min),On.expandByPoint(Or.max))}On.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),hn.add(Zs)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new D,l[y]=new D;let c=new D,h=new D,u=new D,d=new ct,f=new ct,p=new ct,v=new D,m=new D;function g(y,E,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(A),a[y].add(v),a[E].add(v),a[R].add(v),l[y].add(m),l[E].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,E=S.length;y<E;++y){let R=S[y],A=R.start,C=R.count;for(let L=A,P=A+C;L<P;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new D,x=new D,M=new D,b=new D;function w(y){M.fromBufferAttribute(s,y),b.copy(M);let E=a[y];_.copy(E),_.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(b,E);let A=x.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,A)}for(let y=0,E=S.length;y<E;++y){let R=S[y],A=R.start,C=R.count;for(let L=A,P=A+C;L<P;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new we(d,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ya=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Cn=new D,so=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ih=new D,Jp=new D,Kp=new ee,Bn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ih.subVectors(n,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ih),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kp.getNormalMatrix(t),s=this.coplanarPoint(ih).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qp=0,ri=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=ns,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hr=class extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,Br=new D,Js=new D,Ks=new D,Qs=new ct,zr=new ct,ff=new ye,fa=new D,kr=new D,pa=new D,ad=new ct,sh=new ct,ld=new ct,ro=class extends qe{constructor(t=new hr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ya(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new so(n,3,0,!1)),$s.setAttribute("uv",new so(n,2,3,!1))}this.geometry=$s,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ma(fa.set(-.5,-.5,0),Ks,o,Js,s,r),ma(kr.set(.5,-.5,0),Ks,o,Js,s,r),ma(pa.set(.5,.5,0),Ks,o,Js,s,r),ad.set(0,0),sh.set(1,0),ld.set(1,1);let a=t.ray.intersectTriangle(fa,kr,pa,!1,Br);if(a===null&&(ma(kr.set(-.5,.5,0),Ks,o,Js,s,r),sh.set(0,1),a=t.ray.intersectTriangle(fa,pa,kr,!1,Br),a===null))return;let l=t.ray.origin.distanceTo(Br);l<t.near||l>t.far||e.push({distance:l,point:Br.clone(),uv:Di.getInterpolation(Br,fa,kr,pa,ad,sh,ld,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ma(i,t,e,n,s,r){Qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*Qs.x-s*Qs.y,zr.y=s*Qs.x+r*Qs.y):zr.copy(Qs),i.copy(t),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(ff)}var Li=new D,rh=new D,ga=new D,xa=new D,oo=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rh.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),xa.copy(this.origin).sub(rh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ga),a=xa.dot(this.direction),l=-xa.dot(ga),c=xa.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rh).addScaledVector(ga,d),f}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,S=n.y-o.y,_=n.z-o.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(h),w,y,E,R,A,C,L,P,F,U,B,X;if(x>=M&&x>=b?(E=l,C=u,F=p,X=g,l>=0?(w=c,y=h,R=d,A=f,L=v,P=m,U=S,B=_):(w=h,y=c,R=f,A=d,L=m,P=v,U=_,B=S)):M>=b?(E=c,C=d,F=v,X=S,c>=0?(w=h,y=l,R=f,A=u,L=m,P=p,U=_,B=g):(w=l,y=h,R=u,A=f,L=p,P=m,U=g,B=_)):(E=h,C=f,F=m,X=_,h>=0?(w=l,y=c,R=u,A=d,L=p,P=v,U=g,B=S):(w=c,y=l,R=d,A=u,L=v,P=p,U=S,B=g)),E===0)return null;let O=w/E,H=y/E,V=1/E,ot=R-O*C,rt=A-H*C,yt=L-O*F,It=P-H*F,Vt=U-O*X,J=B-H*X,tt=Vt*It-J*yt,ht=ot*J-rt*Vt,zt=yt*rt-It*ot;if(s){if(tt<0||ht<0||zt<0)return null}else if((tt<0||ht<0||zt<0)&&(tt>0||ht>0||zt>0))return null;let _t=tt+ht+zt;if(_t===0)return null;let Tt=V*(tt*C+ht*F+zt*X);return(_t>0?Tt<0:Tt>0)?null:this.at(Tt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cd=new ye,ms=new oo,_a=new Ui,hd=new D,va=new D,ya=new D,Ma=new D,oh=new D,Sa=new D,ud=new D,ba=new D,$=class extends qe{constructor(t=new xe,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(oh.fromBufferAttribute(u,t),o?Sa.addScaledVector(oh,h):Sa.addScaledVector(oh.sub(e),h))}e.add(Sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(_a.containsPoint(ms.origin)===!1&&(ms.intersectSphere(_a,hd)===null||ms.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(cd.copy(r).invert(),ms.copy(t.ray).applyMatrix4(cd),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=_;x<M;x+=3){let b=a.getX(x),w=a.getX(x+1),y=a.getX(x+2);s=wa(this,g,t,n,c,h,u,b,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let S=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=wa(this,o,t,n,c,h,u,S,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=_;x<M;x+=3){let b=x,w=x+1,y=x+2;s=wa(this,g,t,n,c,h,u,b,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let S=m,_=m+1,x=m+2;s=wa(this,o,t,n,c,h,u,S,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jp(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===es,a),l===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ba);return c<e.near||c>e.far?null:{distance:c,point:ba.clone(),object:i}}function wa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,va),i.getVertexPosition(l,ya),i.getVertexPosition(c,Ma);let h=jp(i,t,e,n,va,ya,Ma,ud);if(h){let u=new D;Di.getBarycoord(ud,va,ya,Ma,u),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Di.getNormal(va,ya,Ma,d.normal),h.face=d,h.barycoord=u}return h}var Oi=class extends Pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=dn,h=dn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},js=new ye,dd=new ye,Ea=[],fd=new vi,t0=new ye,Hr=new $,Gr=new Ui,ao=class extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),fd.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(fd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),Gr.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),dd.multiplyMatrices(n,js),Hr.matrixWorld=dd,Hr.raycast(t,Ea);for(let o=0,a=Ea.length;o<a;o++){let l=Ea[o];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oi(new Float32Array(s*this.count),s,this.count,El,Qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Ui,e0=new ct(.5,.5),Ta=new D,ur=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],S=r[12],_=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,g-p,M-S).normalize(),s[1].setComponents(c+o,f+h,g+p,M+S).normalize(),s[2].setComponents(c+a,f+u,g+v,M+_).normalize(),s[3].setComponents(c-a,f-u,g-v,M-_).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,g-m,M-x).normalize();else if(s[4].setComponents(c-l,f-d,g-m,M-x).normalize(),e===si)s[5].setComponents(c+l,f+d,g+m,M+x).normalize();else if(e===or)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=e0.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Za=new D,$a=new D,pd=new ye,Vr=new oo,Aa=new Ui,ah=new D,md=new D,lo=class extends qe{constructor(t=new xe,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Za.fromBufferAttribute(e,s-1),$a.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Za.distanceTo($a);t.setAttribute("lineDistance",new Zt(n,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;pd.copy(s).invert(),Vr.copy(t.ray).applyMatrix4(pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=h.getX(v),S=h.getX(v+1),_=Ra(this,t,Vr,l,g,S,v);_&&e.push(_)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=Ra(this,t,Vr,l,v,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=Ra(this,t,Vr,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){let v=Ra(this,t,Vr,l,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ra(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),$a.fromBufferAttribute(a,r),e.distanceSqToSegment(Za,$a,ah,md)>n)return;ah.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ah);if(!(c<t.near||c>t.far))return{distance:c,point:md.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var co=class extends Pn{constructor(t=[],e=is,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nn=class extends Pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Pn{constructor(t,e,n=ai,s,r,o,a=dn,l=dn,c,h=xi,u=1){if(h!==xi&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends $i{constructor(t,e=ai,n=is,s,r,o=dn,a=dn,l,c=xi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ho=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qt=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function p(v,m,g,S,_,x,M,b,w,y,E){let R=x/w,A=M/y,C=x/2,L=M/2,P=b/2,F=w+1,U=y+1,B=0,X=0,O=new D;for(let H=0;H<U;H++){let V=H*A-L;for(let ot=0;ot<F;ot++){let rt=ot*R-C;O[v]=rt*S,O[m]=V*_,O[g]=P,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[g]=b>0?1:-1,h.push(O.x,O.y,O.z),u.push(ot/w),u.push(1-H/y),B+=1}}for(let H=0;H<y;H++)for(let V=0;V<w;V++){let ot=d+V+F*H,rt=d+V+F*(H+1),yt=d+(V+1)+F*(H+1),It=d+(V+1)+F*H;l.push(ot,rt,It),l.push(rt,yt,It),X+=6}a.addGroup(f,X,E),f+=X,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _n=class i extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=n/2,g=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function S(){let x=new D,M=new D,b=0,w=(e-t)/n;for(let y=0;y<=r;y++){let E=[],R=y/r,A=R*(e-t)+t;for(let C=0;C<=s;C++){let L=C/s,P=L*l+a,F=Math.sin(P),U=Math.cos(P);M.x=A*F,M.y=-R*n+m,M.z=A*U,u.push(M.x,M.y,M.z),x.set(F,w,U).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-R),E.push(p++)}v.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let R=v[E][y],A=v[E+1][y],C=v[E+1][y+1],L=v[E][y+1];(t>0||E!==0)&&(h.push(R,A,L),b+=3),(e>0||E!==r-1)&&(h.push(A,C,L),b+=3)}c.addGroup(g,b,0),g+=b}function _(x){let M=p,b=new ct,w=new D,y=0,E=x===!0?t:e,R=x===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let A=p;for(let C=0;C<=s;C++){let P=C/s*l+a,F=Math.cos(P),U=Math.sin(P);w.x=E*U,w.y=m*R,w.z=E*F,u.push(w.x,w.y,w.z),d.push(0,R,0),b.x=F*.5+.5,b.y=U*.5*R+.5,f.push(b.x,b.y),p++}for(let C=0;C<s;C++){let L=M+C,P=A+C;x===!0?h.push(P,P+1,L):h.push(P+1,P,L),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ys=class i extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ka=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new D,x=new D,M=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],x),f(e[b+2],M),l(_,x,M,S)}function l(S,_,x,M){let b=M+1,w=[];for(let y=0;y<=b;y++){w[y]=[];let E=S.clone().lerp(x,y/b),R=_.clone().lerp(x,y/b),A=b-y;for(let C=0;C<=A;C++)C===0&&y===b?w[y][C]=E:w[y][C]=E.clone().lerp(R,C/A)}for(let y=0;y<b;y++)for(let E=0;E<2*(b-y)-1;E++){let R=Math.floor(E/2);E%2===0?(d(w[y][R+1]),d(w[y+1][R]),d(w[y][R])):(d(w[y][R+1]),d(w[y+1][R+1]),d(w[y+1][R]))}}function c(S){let _=new D;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(S),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let S=new D;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let x=m(S)/2/Math.PI+.5,M=g(S)/Math.PI+.5;o.push(x,1-M)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){let _=o[S+0],x=o[S+2],M=o[S+4],b=Math.max(_,x,M),w=Math.min(_,x,M);b>.9&&w<.1&&(_<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,_){let x=S*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function p(){let S=new D,_=new D,x=new D,M=new D,b=new ct,w=new ct,y=new ct;for(let E=0,R=0;E<r.length;E+=9,R+=6){S.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(o[R+0],o[R+1]),w.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),M.copy(S).add(_).add(x).divideScalar(3);let A=m(M);v(b,R+0,S,A),v(w,R+2,_,A),v(y,R+4,x,A)}}function v(S,_,x,M){M<0&&S.x===1&&(o[_]=S.x-1),x.x===0&&x.z===0&&(o[_]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new ye;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(de(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(de(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qa=class extends fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var gd=new D,xd=new D,lh=new qh,ch=new qh,hh=new qh,zi=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xd.subVectors(s[0],s[1]).add(s[0]),c=xd);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(gd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),lh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,m),ch.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,m),hh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ch.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),hh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(lh.calc(l),ch.calc(l),hh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _d(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function n0(i,t){let e=1-i;return e*e*t}function i0(i,t){return 2*(1-i)*i*t}function s0(i,t){return i*i*t}function Xr(i,t,e,n){return n0(i,t)+i0(i,e)+s0(i,n)}function r0(i,t){let e=1-i;return e*e*e*t}function o0(i,t){let e=1-i;return 3*e*e*i*t}function a0(i,t){return 3*(1-i)*i*i*t}function l0(i,t){return i*i*i*t}function qr(i,t,e,n,s){return r0(i,t)+o0(i,e)+a0(i,n)+l0(i,s)}var uo=class extends zn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,s.x,r.x,o.x,a.x),qr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends zn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,s.x,r.x,o.x,a.x),qr(t,s.y,r.y,o.y,a.y),qr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fo=class extends zn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends zn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends zn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends zn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y),Xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(_d(a,l.x,c.x,h.x,u.x),_d(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},xh=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:zi,CubicBezierCurve:uo,CubicBezierCurve3:ja,EllipseCurve:fr,LineCurve:fo,LineCurve3:tl,QuadraticBezierCurve:po,QuadraticBezierCurve3:mo,SplineCurve:go}),el=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xh[s.type]().fromJSON(s))}return this}},xo=class extends el{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new po(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new uo(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new fr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},pr=class extends xo{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xo().fromJSON(s))}return this}};function c0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=pf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=p0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return _o(r,o,e,a,l,c,0),o}function pf(i,t,e,n,s){let r;if(s===E0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=vd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=vd(o/n|0,i[o],i[o+1],r);return r&&mr(r,r.next)&&(yo(r),r=r.next),r}function Ms(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||Ge(e.prev,e,e.next)===0)){if(yo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _o(i,t,e,n,s,r,o){if(!i)return;!o&&r&&v0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?u0(i,n,s,r):h0(i)){t.push(l.i,i.i,c.i),yo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=d0(Ms(i),t),_o(i,t,e,n,s,r,2)):o===2&&f0(i,t,e,n,s,r):_o(Ms(i),t,e,n,s,r,1);break}}}function h0(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Wr(s,a,r,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ge(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),v=Math.max(a,l,c),m=Math.max(h,u,d),g=_h(f,p,t,e,n),S=_h(v,m,t,e,n),_=i.prevZ,x=i.nextZ;for(;_&&_.z>=g&&x&&x.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Wr(a,h,l,u,c,d,_.x,_.y)&&Ge(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Wr(a,h,l,u,c,d,x.x,x.y)&&Ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Wr(a,h,l,u,c,d,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Wr(a,h,l,u,c,d,x.x,x.y)&&Ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function d0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!mr(n,s)&&gf(n,e,e.next,s)&&vo(n,s)&&vo(s,n)&&(t.push(n.i,e.i,s.i),yo(e),yo(e.next),e=i=s),e=e.next}while(e!==i);return Ms(e)}function f0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S0(o,a)){let l=xf(o,a);o=Ms(o,o.next),l=Ms(l,l.next),_o(o,t,e,n,s,r,0),_o(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=pf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(M0(c))}s.sort(m0);for(let r=0;r<s.length;r++)e=g0(s[r],e);return e}function m0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function g0(i,t){let e=x0(i,t);if(!e)return t;let n=xf(e,i);return Ms(n,n.next),Ms(e,e.next)}function x0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(mr(i,e))return e;do{if(mr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&mf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);vo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _0(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function v0(i,t,e,n){let s=i;do s.z===0&&(s.z=_h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y0(s)}function y0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function _h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function M0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&mf(i,t,e,n,s,r,o,a)}function S0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!b0(i,t)&&(vo(i,t)&&vo(t,i)&&w0(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||mr(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function gf(i,t,e,n){let s=Pa(Ge(i,t,e)),r=Pa(Ge(i,t,n)),o=Pa(Ge(e,n,i)),a=Pa(Ge(e,n,t));return!!(s!==r&&o!==a||s===0&&Ca(i,e,t)||r===0&&Ca(i,n,t)||o===0&&Ca(e,i,n)||a===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pa(i){return i>0?1:i<0?-1:0}function b0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vo(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function w0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xf(i,t){let e=vh(i.i,i.x,i.y),n=vh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vd(i,t,e,n){let s=vh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yh=class{static triangulate(t,e,n=2){return c0(t,e,n)}},sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yd(t),Md(n,t);let o=t.length;e.forEach(yd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Md(n,e[l]);let a=yh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Md(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mo=class i extends Ka{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},So=class i extends xe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,d=new ct,f=new D,p=new D,v=new D,m=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let S=0;S<=e;S++){let _=n+S*h*s,x=Math.sin(_),M=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*M,o.push(u.x,u.y,u.z),d.x=S/e,d.y=b/(t.length-1),a.push(d.x,d.y);let w=l[3*b+0]*x,y=l[3*b+1],E=l[3*b+0]*M;c.push(w,y,E)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){let x=_+S*t.length,M=x,b=x+t.length,w=x+t.length+1,y=x+1;r.push(M,b,y),r.push(w,y,b)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ke=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let S=g*d-o;for(let _=0;_<c;_++){let x=_*u-r;p.push(x,-S,0),v.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let _=S+c*g,x=S+c*(g+1),M=S+1+c*(g+1),b=S+1+c*g;f.push(_,x,b),f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var bo=class i extends xe{constructor(t=new pr([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;sr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let S=p[m];sr.isClockWise(S)===!0&&(p[m]=S.reverse())}let v=sr.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let S=p[m];f=f.concat(S)}for(let m=0,g=f.length;m<g;m++){let S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,g=v.length;m<g;m++){let S=v[m],_=S[0]+u,x=S[1]+u,M=S[2]+u;n.push(_,x,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return T0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function T0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var kn=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,d=new D,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let S=[],_=g/n,x=o+_*a,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M),w=0;g===0&&o===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){let E=y/e,R=s+E*r;u.x=-b*Math.cos(R),u.y=M,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+w,1-_),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){let _=h[g][S+1],x=h[g][S],M=h[g+1][S],b=h[g+1][S+1];(g!==0||o>0)&&f.push(_,x,b),(g!==n-1||l<Math.PI)&&f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ji=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,f=new D,p=new D;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=s;g++){let S=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,_=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(g,S,x),l.push(S,_,x)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ki=class i extends xe{constructor(t=new mo(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ct,h=new D,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),S(),g()}function m(_){h=t.getPointAt(_/e,h);let x=o.normals[_],M=o.binormals[_];for(let b=0;b<=s;b++){let w=b/s*Math.PI*2,y=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+y*M.x,l.y=E*x.y+y*M.y,l.z=E*x.z+y*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){let M=(s+1)*(_-1)+(x-1),b=(s+1)*_+(x-1),w=(s+1)*_+x,y=(s+1)*(_-1)+x;p.push(M,b,y),p.push(b,w,y)}}function S(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)c.x=_/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new xh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Sd(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Sd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function A0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Mr={clone:Rs,merge:En},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=A0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nl=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},be=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ss=class extends be{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var wo=class extends ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},il=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mh:r=t,a=2*e-n;break;case gh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mh:o=t,l=2*n-e;break;case gh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,_=(-1-f)*m+(1.5+f)*v+.5*p,x=f*m-f*v;for(let M=0;M!==a;++M)r[M]=g*o[h+M]+S*o[c+M]+_*o[l+M]+x*o[u+M];return r}},ol=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},al=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ll=class extends Qi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=f*d+p*2,S=u[g],_=u[g+1],x=t*d+p*2,M=h[x],b=h[x+1],w=I0(n,e,S,M,s);r[p]=_f(w,v,_,b,m)}return r}};function _f(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function P0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function I0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=_f(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=P0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),uh(t.settings)&&(n.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case fh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;uh(this.settings)&&(bd(this.settings.inTangents,t),bd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,uh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Va;var ji=class extends Hn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Yr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};cl.prototype.ValueTypeName="color";var hl=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};hl.prototype.ValueTypeName="number";var ul=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},Eo=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Hn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Yr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};dl.prototype.ValueTypeName="vector";var fl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vf=new fl,pl=class{constructor(t){this.manager=t!==void 0?t:vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},To=class extends bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},dh=new ye,wd=new D,Ed=new D,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(wd),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(dh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ia=new D,La=new en,mi=new D,Ao=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,La,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ia,La,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new D,Td=new ct,Ad=new ct,un=class extends Ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Td,Ad),e.subVectors(Ad,Td)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mh=class extends gr{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Qr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ro=class extends bs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Sh=class extends gr{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Co=class extends bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xr=class extends Ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bh=class extends gr{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Io=class extends xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var er=-90,nr=1,ml=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new un(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new un(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new un(er,nr,t,e);a.layers=this.layers,this.add(a);let l=new un(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new un(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gl=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zh="\\[\\]\\.:\\/",L0=new RegExp("["+Zh+"]","g"),$h="[^"+Zh+"]",D0="[^"+Zh.replace("\\.","")+"]",N0=/((?:WC+[\/:])*)/.source.replace("WC",$h),F0=/(WCOD+)?/.source.replace("WCOD",D0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),B0=new RegExp("^"+N0+F0+U0+O0+"$"),z0=["material","materials","bones","map"],wh=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let e=B0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=wh;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cy=new Float32Array(1);var eu=class eu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};eu.prototype.isMatrix2=!0;var Eh=eu;function Jh(i,t,e,n){let s=k0(n);switch(e){case Gh:return i*t;case El:return i*t/s.components*s.byteLength;case Tl:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case Al:return i*t*2/s.components*s.byteLength;case Vh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Rl:return i*t*4/s.components*s.byteLength;case Fo:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Ll:return Math.max(i,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(i,8)*Math.max(t,8)/2;case Dl:case Nl:case Ul:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fl:case zo:case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jl:case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case Ln:case Bh:return{byteLength:1,components:1};case vr:case zh:case Gn:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case ai:case Sl:case Qn:return{byteLength:4,components:1};case kh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function G0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Hm=`uniform sampler2D dfgLUT;
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
}`,Gm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,dx=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:V0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:Z0,aomap_fragment:$0,aomap_pars_fragment:J0,batching_pars_vertex:K0,batching_vertex:Q0,begin_vertex:j0,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:_m,colorspace_fragment:vm,colorspace_pars_fragment:ym,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:bm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Fm,envmap_vertex:Em,fog_vertex:Tm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Nm,lights_toon_fragment:Um,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:km,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:$m,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:xg,packing:_g,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Lg,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:Fg,tonemapping_pars_fragment:Ug,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Hg,worldpos_vertex:Gg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Zg,depth_vert:$g,depth_frag:Jg,distance_vert:Kg,distance_frag:Qg,equirect_vert:jg,equirect_frag:tx,linedashed_vert:ex,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:xx,points_frag:_x,shadow_vert:vx,shadow_frag:yx,sprite_vert:Mx,sprite_frag:Sx},xt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},bi={basic:{uniforms:En([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:En([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:En([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:En([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:En([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new bt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:En([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:En([xt.points,xt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:En([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:En([xt.common,xt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:En([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:En([xt.sprite,xt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:En([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:En([xt.lights,xt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};bi.physical={uniforms:En([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var ac={r:0,b:0,g:0},bx=new ye,Gf=new ee;Gf.set(-1,0,0,0,1,0,0,0,1);function wx(i,t,e,n,s,r){let o=new bt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let _=S.isScene===!0?S.background:null;if(_&&_.isTexture){let x=S.backgroundBlurriness>0;_=t.get(_,x)}return _}function p(S){let _=!1,x=f(S);x===null?m(o,a):x&&x.isColor&&(m(x,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,_){let x=f(_);x&&(x.isCubeTexture||x.mapping===Do)?(c===void 0&&(c=new $(new qt(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Rs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gf),c.material.toneMapped=me.getTransfer(x.colorSpace)!==Ce,(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $(new ke(2,2),new Ve({name:"BackgroundMaterial",uniforms:Rs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=me.getTransfer(x.colorSpace)!==Ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,_){S.getRGB(ac,Yh(i)),e.buffers.color.setClear(ac.r,ac.g,ac.b,_,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Ex(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(A,C,L,P,F){let U=!1,B=u(A,P,L,C);r!==B&&(r=B,c(r.object)),U=f(A,P,L,F),U&&p(A,P,L,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(A,C,L,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,C,L,P){let F=P.wireframe===!0,U=n[C.id];U===void 0&&(U={},n[C.id]=U);let B=A.isInstancedMesh===!0?A.id:0,X=U[B];X===void 0&&(X={},U[B]=X);let O=X[L.id];O===void 0&&(O={},X[L.id]=O);let H=O[F];return H===void 0&&(H=d(l()),O[F]=H),H}function d(A){let C=[],L=[],P=[];for(let F=0;F<e;F++)C[F]=0,L[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:P,object:A,attributes:{},index:null}}function f(A,C,L,P){let F=r.attributes,U=C.attributes,B=0,X=L.getAttributes();for(let O in X)if(X[O].location>=0){let V=F[O],ot=U[O];if(ot===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(ot=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(ot=A.instanceColor)),V===void 0||V.attribute!==ot||ot&&V.data!==ot.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function p(A,C,L,P){let F={},U=C.attributes,B=0,X=L.getAttributes();for(let O in X)if(X[O].location>=0){let V=U[O];V===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(V=A.instanceColor));let ot={};ot.attribute=V,V&&V.data&&(ot.data=V.data),F[O]=ot,B++}r.attributes=F,r.attributesNum=B,r.index=P}function v(){let A=r.newAttributes;for(let C=0,L=A.length;C<L;C++)A[C]=0}function m(A){g(A,0)}function g(A,C){let L=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;L[A]=1,P[A]===0&&(i.enableVertexAttribArray(A),P[A]=1),F[A]!==C&&(i.vertexAttribDivisor(A,C),F[A]=C)}function S(){let A=r.newAttributes,C=r.enabledAttributes;for(let L=0,P=C.length;L<P;L++)C[L]!==A[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function _(A,C,L,P,F,U,B){B===!0?i.vertexAttribIPointer(A,C,L,F,U):i.vertexAttribPointer(A,C,L,P,F,U)}function x(A,C,L,P){v();let F=P.attributes,U=L.getAttributes(),B=C.defaultAttributeValues;for(let X in U){let O=U[X];if(O.location>=0){let H=F[X];if(H===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(H=A.instanceColor)),H!==void 0){let V=H.normalized,ot=H.itemSize,rt=t.get(H);if(rt===void 0)continue;let yt=rt.buffer,It=rt.type,Vt=rt.bytesPerElement,J=It===i.INT||It===i.UNSIGNED_INT||H.gpuType===Sl;if(H.isInterleavedBufferAttribute){let tt=H.data,ht=tt.stride,zt=H.offset;if(tt.isInstancedInterleavedBuffer){for(let _t=0;_t<O.locationSize;_t++)g(O.location+_t,tt.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let _t=0;_t<O.locationSize;_t++)m(O.location+_t);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let _t=0;_t<O.locationSize;_t++)_(O.location+_t,ot/O.locationSize,It,V,ht*Vt,(zt+ot/O.locationSize*_t)*Vt,J)}else{if(H.isInstancedBufferAttribute){for(let tt=0;tt<O.locationSize;tt++)g(O.location+tt,H.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let tt=0;tt<O.locationSize;tt++)m(O.location+tt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let tt=0;tt<O.locationSize;tt++)_(O.location+tt,ot/O.locationSize,It,V,ot*Vt,ot/O.locationSize*tt*Vt,J)}}else if(B!==void 0){let V=B[X];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}S()}function M(){E();for(let A in n){let C=n[A];for(let L in C){let P=C[L];for(let F in P){let U=P[F];for(let B in U)h(U[B].object),delete U[B];delete P[F]}}delete n[A]}}function b(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let L in C){let P=C[L];for(let F in P){let U=P[F];for(let B in U)h(U[B].object),delete U[B];delete P[F]}}delete n[A.id]}function w(A){for(let C in n){let L=n[C];for(let P in L){let F=L[P];if(F[A.id]===void 0)continue;let U=F[A.id];for(let B in U)h(U[B].object),delete U[B];delete F[A.id]}}}function y(A){for(let C in n){let L=n[C],P=A.isInstancedMesh===!0?A.id:0,F=L[P];if(F!==void 0){for(let U in F){let B=F[U];for(let X in B)h(B[X].object),delete B[X];delete F[U]}delete L[P],Object.keys(L).length===0&&delete n[C]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Tx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ax(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ln&&w!==Qn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:x,maxSamples:M,samples:b}}function Rx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Bn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,_=S*4,x=g.clippingState||null;l.value=x,x=h(p,d,_,f);for(let M=0;M!==_;++M)x[M]=e[M];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var br=4,Cx=6,Px=20,Ix=256,Go=new xr,yf=new bt,nu=null,iu=0,su=0,ru=!1,Lx=new D,Cs=new D,Er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Lx}=r;nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Gn,format:wn,colorSpace:Zr,depthBuffer:!1},s=Mf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dx(r)),this._blurMaterial=Fx(r,t,e),this._ggxMaterial=Nx(r,t,e)}return s}_compileMaterial(t){let e=new $(new xe,t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s,r){let l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(yf),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $(new qt,new Ye({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,g=!0):(m.color.copy(yf),g=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let M=this._cubeSize;Sr(s,x*M,_>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(v,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-br?n-p+br:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Sr(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(a,Go),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Sr(t,m,g,3*v,2*v),s.setRenderTarget(t),s.render(a,Go)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-br?s-this._lodMax+br:0),d=4*(this._cubeSize-h);Sr(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,Go)}};function Dx(i){let t=[],e=[],n=i,s=i-br+1+Cx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let g=0;g<u;g++){let S=g%3*2/3-1,_=g>2?0:-1,x=[S,_,0,S+2/3,_,0,S+2/3,_+1,0,S,_,0,S+2/3,_+1,0,S,_+1,0];p.set(x,f*d*g);for(let M=0;M<d;M++){let b=h[M*2]*2-1,w=h[M*2+1]*2-1;g===0?Cs.set(1,w,b):g===1?Cs.set(-b,1,-w):g===2?Cs.set(-b,w,1):g===3?Cs.set(-1,w,-b):g===4?Cs.set(-b,-1,w):Cs.set(b,w,-1),Cs.toArray(v,(g*d+M)*f)}}let m=new xe;m.setAttribute("position",new we(p,f)),m.setAttribute("outputDirection",new we(v,f)),e.push(new $(m,null)),n>br&&n--}return{lodMeshes:e,sizeLods:t}}function Mf(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nx(i,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Fx(i,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Sf(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bf(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var cc=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:yi});r.uniforms.tEquirect.value=e;let o=new $(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Xe),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===vl||f===yl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new cc(p.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===vl||f===yl,v=f===is||f===As;if(p||v){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Er(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Er(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===vl?d.mapping=is:f===yl&&(d.mapping=As),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ox(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function Bx(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let _=0,x=S.length;_<x;_+=3){let M=S[_+0],b=S[_+1],w=S[_+2];d.push(M,b,b,w,w,M)}}else{let S=p.array;v=p.version;for(let _=0,x=S.length/3-1;_<x;_+=3){let M=_+0,b=_+1,w=_+2;d.push(M,b,b,w,w,M)}}let m=new(p.count>=65535?io:no)(d,1);m.version=v;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hx(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*M*4*u),w=new jr(b,x,M,u);w.type=Qn,w.needsUpdate=!0;let y=_*4;for(let R=0;R<u;R++){let A=m[R],C=g[R],L=S[R],P=x*M*4*R;for(let F=0;F<A.count;F++){let U=F*y;f===!0&&(s.fromBufferAttribute(A,F),b[P+U+0]=s.x,b[P+U+1]=s.y,b[P+U+2]=s.z,b[P+U+3]=0),p===!0&&(s.fromBufferAttribute(C,F),b[P+U+4]=s.x,b[P+U+5]=s.y,b[P+U+6]=s.z,b[P+U+7]=0),v===!0&&(s.fromBufferAttribute(L,F),b[P+U+8]=s.x,b[P+U+9]=s.y,b[P+U+10]=s.z,b[P+U+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new ct(x,M)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Vx={[Ih]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Uh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function Wx(i,t,e,n,s,r){let o=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new xe;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $(c,h),d=new xr(-1,1,1,-1,0,1),f=null,p=null,v=!1,m,g=null,S=[],_=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<S.length;b++){let w=S[b];w.setSize&&w.setSize(x,M)}},this.setEffects=function(x){S=x,_=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new bn(M,b,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(M,b,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let y=S[w];y.setSize&&y.setSize(M,b)}},this.begin=function(x,M){if(v||x.toneMapping===oi&&S.length===0)return!1;if(g=M,M!==null){let b=M.width,w=M.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return _===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return _},this.end=function(x,M){x.toneMapping=m,v=!0;let b=o,w=a;for(let y=0;y<S.length;y++){let E=S[y];E.enabled!==!1&&(E.render(x,w,b,M),E.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},me.getTransfer(f)===Ce&&(h.defines.SRGB_TRANSFER="");let y=Vx[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(u,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Vf=new Pn,lu=new $i(1,1),Wf=new jr,Xf=new qa,qf=new co,wf=[],Ef=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function Tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dc(i,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function $x(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Rf.set(n),i.uniformMatrix2fv(this.addr,!1,Rf),rn(e,n)}}function Jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Af.set(n),i.uniformMatrix3fv(this.addr,!1,Af),rn(e,n)}}function Kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),rn(e,n)}}function Qx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function n_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function o_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=e.isReversedDepthBuffer()?oc:rc,r=lu):r=Vf,e.setTexture2D(t||r,s)}function a_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xf,s)}function l_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qf,s)}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wf,s)}function h_(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return $x;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return jx;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(i,t){i.uniform1fv(this.addr,t)}function d_(i,t){let e=Tr(t,this.size,2);i.uniform2fv(this.addr,e)}function f_(i,t){let e=Tr(t,this.size,3);i.uniform3fv(this.addr,e)}function p_(i,t){let e=Tr(t,this.size,4);i.uniform4fv(this.addr,e)}function m_(i,t){let e=Tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g_(i,t){let e=Tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x_(i,t){let e=Tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function __(i,t){i.uniform1iv(this.addr,t)}function v_(i,t){i.uniform2iv(this.addr,t)}function y_(i,t){i.uniform3iv(this.addr,t)}function M_(i,t){i.uniform4iv(this.addr,t)}function S_(i,t){i.uniform1uiv(this.addr,t)}function b_(i,t){i.uniform2uiv(this.addr,t)}function w_(i,t){i.uniform3uiv(this.addr,t)}function E_(i,t){i.uniform4uiv(this.addr,t)}function T_(i,t,e){let n=this.cache,s=t.length,r=dc(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lu:o=Vf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function A_(i,t,e){let n=this.cache,s=t.length,r=dc(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xf,r[o])}function R_(i,t,e){let n=this.cache,s=t.length,r=dc(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,r[o])}function C_(i,t,e){let n=this.cache,s=t.length,r=dc(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wf,r[o])}function P_(i){switch(i){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return w_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}var cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}},hu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}},uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function Cf(i,t){i.seq.push(t),i.map[t.id]=t}function I_(i,t,e){let n=i.name,s=n.length;for(ou.lastIndex=0;;){let r=ou.exec(n),o=ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cf(e,c===void 0?new cu(a,i,t):new hu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new uu(a),Cf(e,u)),e=u}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);I_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Pf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var L_=37297,D_=0;function N_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var If=new ee;function F_(i){me._getMatrix(If,me.workingColorSpace,i);let t=`mat3( ${If.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(t),a)}else return r}function U_(i,t){let e=F_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var O_={[Ih]:"Linear",[Lh]:"Reinhard",[Dh]:"Cineon",[Lo]:"ACESFilmic",[Fh]:"AgX",[Uh]:"Neutral",[Nh]:"Custom"};function B_(i,t){let e=O_[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lc=new D;function z_(){me.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),t=lc.y.toFixed(4),e=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function H_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wo(i){return i!==""}function Df(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(V_,X_)}var W_=new Map;function X_(i,t){let e=ue[t];if(e===void 0){let n=W_.get(t);if(n!==void 0)e=ue[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return du(e)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(i){return i.replace(q_,Y_)}function Y_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Z_={[ws]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function $_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J_={[is]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};function K_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Q_={[As]:"ENVMAP_MODE_REFRACTION"};function j_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tv={[_l]:"ENVMAP_BLENDING_MULTIPLY",[$d]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function ev(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tv[i.combine]||"ENVMAP_BLENDING_NONE"}function nv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function iv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$_(e),c=K_(e),h=j_(e),u=ev(e),d=nv(e),f=k_(e),p=H_(r),v=s.createProgram(),m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wo).join(`
`),g.length>0&&(g+=`
`)):(m=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),g=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?ue.tonemapping_pars_fragment:"",e.toneMapping!==oi?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),o=du(o),o=Df(o,e),o=Nf(o,e),a=du(a),a=Df(a,e),a=Nf(a,e),o=Ff(o),a=Ff(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=S+m+o,x=S+g+a,M=Pf(s,s.VERTEX_SHADER,_),b=Pf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(M)||"",P=s.getShaderInfoLog(b)||"",F=C.trim(),U=L.trim(),B=P.trim(),X=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,b);else{let H=Lf(s,M,"vertex"),V=Lf(s,b,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+H+`
`+V)}else F!==""?$t("WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(O=!1);O&&(A.diagnostics={runnable:X,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:g}})}s.deleteShader(M),s.deleteShader(b),y=new wr(s,v),E=G_(s,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,L_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}var sv=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pu(t),e.set(t,n)),n}},pu=class{constructor(t){this.id=sv++,this.code=t,this.usedTimes=0}};function rv(i){return i===rs||i===zo||i===ko}function ov(i,t,e,n,s,r){let o=new to,a=new fu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,E,R,A,C,L){let P=A.fog,F=C.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=t.get(y.envMap||U,B),O=X&&X.mapping===Do?X.image.height:null,H=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&$t("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=V!==void 0?V.length:0,rt=0;F.morphAttributes.position!==void 0&&(rt=1),F.morphAttributes.normal!==void 0&&(rt=2),F.morphAttributes.color!==void 0&&(rt=3);let yt,It,Vt,J;if(H){let Fe=bi[H];yt=Fe.vertexShader,It=Fe.fragmentShader}else{yt=y.vertexShader,It=y.fragmentShader;let Fe=a.getVertexShaderStage(y),Ae=a.getFragmentShaderStage(y);a.update(y,Fe,Ae),Vt=Fe.id,J=Ae.id}let tt=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),zt=C.isInstancedMesh===!0,_t=C.isBatchedMesh===!0,Tt=!!y.map,St=!!y.matcap,Wt=!!X,Yt=!!y.aoMap,ne=!!y.lightMap,Nt=!!y.bumpMap&&y.wireframe===!1,kt=!!y.normalMap,oe=!!y.displacementMap,pe=!!y.emissiveMap,le=!!y.metalnessMap,ie=!!y.roughnessMap,z=y.anisotropy>0,Ee=y.clearcoat>0,se=y.dispersion>0,N=y.retroreflectivity>0,T=y.iridescence>0,W=y.sheen>0,q=y.transmission>0,j=z&&!!y.anisotropyMap,lt=Ee&&!!y.clearcoatMap,ut=Ee&&!!y.clearcoatNormalMap,et=Ee&&!!y.clearcoatRoughnessMap,st=T&&!!y.iridescenceMap,dt=T&&!!y.iridescenceThicknessMap,Ut=W&&!!y.sheenColorMap,pt=W&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Ot=!!y.specularColorMap,Xt=!!y.specularIntensityMap,ae=q&&!!y.transmissionMap,G=q&&!!y.thicknessMap,mt=!!y.gradientMap,it=!!y.alphaMap,gt=y.alphaTest>0,wt=!!y.alphaHash,at=!!y.extensions,Ht=oi;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Ft={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:yt,fragmentShader:It,defines:y.defines,customVertexShaderID:Vt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_t,batchingColor:_t&&C._colorsTexture!==null,instancing:zt,instancingColor:zt&&C.instanceColor!==null,instancingMorph:zt&&C.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:St,envMap:Wt,envMapMode:Wt&&X.mapping,envMapCubeUVHeight:O,aoMap:Yt,lightMap:ne,bumpMap:Nt,normalMap:kt,displacementMap:oe,emissiveMap:pe,normalMapObjectSpace:kt&&y.normalMapType===jd,normalMapTangentSpace:kt&&y.normalMapType===Ho,packedNormalMap:kt&&y.normalMapType===Ho&&rv(y.normalMap.format),metalnessMap:le,roughnessMap:ie,anisotropy:z,anisotropyMap:j,clearcoat:Ee,clearcoatMap:lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:et,dispersion:se,retroreflection:N,iridescence:T,iridescenceMap:st,iridescenceThicknessMap:dt,sheen:W,sheenColorMap:Ut,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:Ot,specularIntensityMap:Xt,transmission:q,transmissionMap:ae,thicknessMap:G,gradientMap:mt,opaque:y.transparent===!1&&y.blending===ns&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:gt,alphaHash:wt,combine:y.combine,mapUv:Tt&&p(y.map.channel),aoMapUv:Yt&&p(y.aoMap.channel),lightMapUv:ne&&p(y.lightMap.channel),bumpMapUv:Nt&&p(y.bumpMap.channel),normalMapUv:kt&&p(y.normalMap.channel),displacementMapUv:oe&&p(y.displacementMap.channel),emissiveMapUv:pe&&p(y.emissiveMap.channel),metalnessMapUv:le&&p(y.metalnessMap.channel),roughnessMapUv:ie&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:lt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&p(y.sheenRoughnessMap.channel),specularMapUv:ft&&p(y.specularMap.channel),specularColorMapUv:Ot&&p(y.specularColorMap.channel),specularIntensityMapUv:Xt&&p(y.specularIntensityMap.channel),transmissionMapUv:ae&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:it&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(kt||z),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(Tt||it),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&kt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ht,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:rt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Ce,decodeVideoTextureEmissive:pe&&y.emissiveMap.isVideoTexture===!0&&me.getTransfer(y.emissiveMap.colorSpace)===Ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(E,y),S(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let E=f[y.type],R;if(E){let A=bi[E];R=Mr.clone(A.uniforms)}else R=y.uniforms;return R}function x(y,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new iv(i,E,y,s),c.push(R),h.set(E,R)),R}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function av(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,v,m,g){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,v,m,g,S){S.reversedDepth===!0&&(m=-m);let _=a(d,f,p,v,m,g);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function c(d,f,p,v,m,g){let S=a(d,f,p,v,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||lv),n.length>1&&n.sort(f||Of),s.length>1&&s.sort(f||Of)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bf,i.set(n,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new bt};break;case"SpotLight":e={position:new D,direction:new D,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function uv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var dv=0;function fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pv(i){let t=new hv,e=uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ye,o=new ye;function a(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,S=0,_=0,x=0,M=0,b=0,w=0,y=0,E=0,R=0;c.sort(fv);for(let C=0,L=c.length;C<L;C++){let P=c[C],F=P.color,U=P.intensity,B=P.distance,X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rs?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],U);R++}else if(P.isSunLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=X;let ot=H.getViewportCount();for(let rt=0;rt<ot;rt++)n.sunShadowMatrix[v+rt]=H.getMatrix(rt),n.sunShadowCascade[v+rt]=H._cascadeData[rt];v+=ot,p++}n.sun[f]=O,f++}else if(P.isDirectionalLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,M++}n.directional[m]=O,m++}else if(P.isSpotLight){let O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(F).multiplyScalar(U),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[S]=O;let H=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,H.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[S]=H.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=X,w++}S++}else if(P.isRectAreaLight){let O=t.get(P);O.color.copy(F).multiplyScalar(U),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=O,_++}else if(P.isPointLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let H=P.shadow,V=e.get(P);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=O,g++}else if(P.isHemisphereLight){let O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(U),O.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[x]=O,x++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.sunLength!==f||A.directionalLength!==m||A.pointLength!==g||A.spotLength!==S||A.rectAreaLength!==_||A.hemiLength!==x||A.numSunShadows!==p||A.numDirectionalShadows!==M||A.numPointShadows!==b||A.numSpotShadows!==w||A.numSpotMaps!==y||A.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=_,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,A.sunLength=f,A.directionalLength=m,A.pointLength=g,A.spotLength=S,A.rectAreaLength=_,A.hemiLength=x,A.numSunShadows=p,A.numDirectionalShadows=M,A.numPointShadows=b,A.numSpotShadows=w,A.numSpotMaps=y,A.numLightProbes=R,n.version=dv++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let S=0,_=c.length;S<_;S++){let x=c[S];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function zf(i){let t=new pv(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function mv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zf(i),t.set(s,[a])):r>=o.length?(a=new zf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`,_v=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],vv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],kf=new ye,Vo=new D,au=new D;function yv(i,t,e){let n=new ur,s=new ct,r=new ct,o=new ge,a=new il,l=new sl,c={},h=e.maxTextureSize,u={[es]:Ke,[Ke]:es,[Qe]:Qe},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new xe;p.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new $(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let g=this.type;this.render=function(b,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Pd&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(yi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=g!==this.type;L&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=b.length;P<F;P++){let U=b[P],B=U.shadow;if(B===void 0){$t("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let X=B.getFrameExtents();s.multiply(X),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,B.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_r){if(U.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new bn(s.x,s.y,{format:rs,type:Gn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new $i(s.x,s.y,Qn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=xi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn}else U.isPointLight?(B.map=new cc(s.x),B.map.depthTexture=new Ja(s.x,ai)):(B.map=new bn(s.x,s.y),B.map.depthTexture=new $i(s.x,s.y,ai)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=xi,this.type===ws?(B.map.depthTexture.compareFunction=O?oc:rc,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let H=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,y);for(let V=0;V<H;V++){let ot=B.getCamera(V);if(U.isPointLight){let rt=B.camera,yt=B.matrix,It=U.distance||rt.far;It!==rt.far&&(rt.far=It,rt.updateProjectionMatrix()),Vo.setFromMatrixPosition(U.matrixWorld),rt.position.copy(Vo),au.copy(rt.position),au.add(_v[V]),rt.up.copy(vv[V]),rt.lookAt(au),rt.updateMatrixWorld(),yt.makeTranslation(-Vo.x,-Vo.y,-Vo.z),kf.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(kf,rt.coordinateSystem,rt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,V),i.clear();else{V===0&&(i.setRenderTarget(B.map),i.clear());let rt=B.getViewport(V);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),C.viewport(o)}n=B.getFrustum(V),x(w,y,ot,U,this.type)}B.isPointLightShadow!==!0&&this.type===_r&&S(B,y),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,A)};function S(b,w){let y=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new bn(s.x,s.y,{format:rs,type:Gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,y,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,y,f,v,null)}function _(b,w,y,E){let R=null,A=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)R=A;else if(R=y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=R.uuid,L=w.uuid,P=c[C];P===void 0&&(P={},c[C]=P);let F=P[L];F===void 0&&(F=R.clone(),P[L]=F,w.addEventListener("dispose",M)),R=F}if(R.visible=w.visible,R.wireframe=w.wireframe,E===_r?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=i.properties.get(R);C.light=y}return R}function x(b,w,y,E,R){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===_r)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let L=t.update(b),P=b.material;if(Array.isArray(P)){let F=L.groups;for(let U=0,B=F.length;U<B;U++){let X=F[U],O=P[X.materialIndex];if(O&&O.visible){let H=_(b,O,E,R);b.onBeforeShadow(i,b,w,y,L,H,X),i.renderBufferDirect(y,null,L,H,b,X),b.onAfterShadow(i,b,w,y,L,H,X)}}}else if(P.visible){let F=_(b,P,E,R);b.onBeforeShadow(i,b,w,y,L,F,null),i.renderBufferDirect(y,null,L,F,b,null),b.onAfterShadow(i,b,w,y,L,F,null)}}let C=b.children;for(let L=0,P=C.length;L<P;L++)x(C[L],w,y,E,R)}function M(b){b.target.removeEventListener("dispose",M);for(let y in c){let E=c[y],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Mv(i,t){function e(){let G=!1,mt=new ge,it=null,gt=new ge(0,0,0,0);return{setMask:function(wt){it!==wt&&!G&&(i.colorMask(wt,wt,wt,wt),it=wt)},setLocked:function(wt){G=wt},setClear:function(wt,at,Ht,Ft,Fe){Fe===!0&&(wt*=Ft,at*=Ft,Ht*=Ft),mt.set(wt,at,Ht,Ft),gt.equals(mt)===!1&&(i.clearColor(wt,at,Ht,Ft),gt.copy(mt))},reset:function(){G=!1,it=null,gt.set(-1,0,0,0)}}}function n(){let G=!1,mt=!1,it=null,gt=null,wt=null;return{setReversed:function(at){if(mt!==at){let Ht=t.get("EXT_clip_control");at?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),mt=at;let Ft=wt;wt=null,this.setClear(Ft)}},getReversed:function(){return mt},setTest:function(at){at?tt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(at){it!==at&&!G&&(i.depthMask(at),it=at)},setFunc:function(at){if(mt&&(at=uf[at]),gt!==at){switch(at){case Fa:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=at}},setLocked:function(at){G=at},setClear:function(at){wt!==at&&(wt=at,mt&&(at=1-at),i.clearDepth(at))},reset:function(){G=!1,it=null,gt=null,wt=null,mt=!1}}}function s(){let G=!1,mt=null,it=null,gt=null,wt=null,at=null,Ht=null,Ft=null,Fe=null;return{setTest:function(Ae){G||(Ae?tt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Ae){mt!==Ae&&!G&&(i.stencilMask(Ae),mt=Ae)},setFunc:function(Ae,ti,fi){(it!==Ae||gt!==ti||wt!==fi)&&(i.stencilFunc(Ae,ti,fi),it=Ae,gt=ti,wt=fi)},setOp:function(Ae,ti,fi){(at!==Ae||Ht!==ti||Ft!==fi)&&(i.stencilOp(Ae,ti,fi),at=Ae,Ht=ti,Ft=fi)},setLocked:function(Ae){G=Ae},setClear:function(Ae){Fe!==Ae&&(i.clearStencil(Ae),Fe=Ae)},reset:function(){G=!1,mt=null,it=null,gt=null,wt=null,at=null,Ht=null,Ft=null,Fe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,S=null,_=null,x=null,M=null,b=null,w=null,y=new bt(0,0,0),E=0,R=!1,A=null,C=null,L=null,P=null,F=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=X>=2);let H=null,V={},ot=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),yt=new ge().fromArray(ot),It=new ge().fromArray(rt);function Vt(G,mt,it,gt){let wt=new Uint8Array(4),at=i.createTexture();i.bindTexture(G,at),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<it;Ht++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(mt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return at}let J={};J[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(rr),Nt(!1),kt(Th),tt(i.CULL_FACE),Yt(yi);function tt(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ht(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function zt(G,mt){return d[G]!==mt?(i.bindFramebuffer(G,mt),d[G]=mt,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function _t(G,mt){let it=p,gt=!1;if(G){it=f.get(mt),it===void 0&&(it=[],f.set(mt,it));let wt=G.textures;if(it.length!==wt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ht=wt.length;at<Ht;at++)it[at]=i.COLOR_ATTACHMENT0+at;it.length=wt.length,gt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,gt=!0);gt&&i.drawBuffers(it)}function Tt(G){return v!==G?(i.useProgram(G),v=G,!0):!1}let St={[Ts]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};St[Nd]=i.MIN,St[Fd]=i.MAX;let Wt={[Ud]:i.ZERO,[Od]:i.ONE,[Bd]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[Wd]:i.SRC_ALPHA_SATURATE,[Gd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[Ph]:i.ONE_MINUS_SRC_ALPHA,[Vd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Xd]:i.CONSTANT_COLOR,[qd]:i.ONE_MINUS_CONSTANT_COLOR,[Yd]:i.CONSTANT_ALPHA,[Zd]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(G,mt,it,gt,wt,at,Ht,Ft,Fe,Ae){if(G===yi){m===!0&&(ht(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),G!==Id){if(G!==g||Ae!==R){if((S!==Ts||M!==Ts)&&(i.blendEquation(i.FUNC_ADD),S=Ts,M=Ts),Ae)switch(G){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",G);break}else switch(G){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ah:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",G);break}_=null,x=null,b=null,w=null,y.set(0,0,0),E=0,g=G,R=Ae}return}wt=wt||mt,at=at||it,Ht=Ht||gt,(mt!==S||wt!==M)&&(i.blendEquationSeparate(St[mt],St[wt]),S=mt,M=wt),(it!==_||gt!==x||at!==b||Ht!==w)&&(i.blendFuncSeparate(Wt[it],Wt[gt],Wt[at],Wt[Ht]),_=it,x=gt,b=at,w=Ht),(Ft.equals(y)===!1||Fe!==E)&&(i.blendColor(Ft.r,Ft.g,Ft.b,Fe),y.copy(Ft),E=Fe),g=G,R=!1}function ne(G,mt){G.side===Qe?ht(i.CULL_FACE):tt(i.CULL_FACE);let it=G.side===Ke;mt&&(it=!it),Nt(it),G.blending===ns&&G.transparent===!1?Yt(yi):Yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let gt=G.stencilWrite;a.setTest(gt),gt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function kt(G){G!==Rd?(tt(i.CULL_FACE),G!==C&&(G===Th?i.cullFace(i.BACK):G===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),C=G}function oe(G){G!==L&&(B&&i.lineWidth(G),L=G)}function pe(G,mt,it){G?(tt(i.POLYGON_OFFSET_FILL),(P!==mt||F!==it)&&(P=mt,F=it,o.getReversed()&&(mt=-mt),i.polygonOffset(mt,it))):ht(i.POLYGON_OFFSET_FILL)}function le(G){G?tt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function ie(G){G===void 0&&(G=i.TEXTURE0+U-1),H!==G&&(i.activeTexture(G),H=G)}function z(G,mt,it){it===void 0&&(H===null?it=i.TEXTURE0+U-1:it=H);let gt=V[it];gt===void 0&&(gt={type:void 0,texture:void 0},V[it]=gt),(gt.type!==G||gt.texture!==mt)&&(H!==it&&(i.activeTexture(it),H=it),i.bindTexture(G,mt||J[G]),gt.type=G,gt.texture=mt)}function Ee(){let G=V[H];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(G){Jt("WebGLState:",G)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(G){Jt("WebGLState:",G)}}function T(){try{i.texSubImage2D(...arguments)}catch(G){Jt("WebGLState:",G)}}function W(){try{i.texSubImage3D(...arguments)}catch(G){Jt("WebGLState:",G)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Jt("WebGLState:",G)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Jt("WebGLState:",G)}}function lt(){try{i.texStorage2D(...arguments)}catch(G){Jt("WebGLState:",G)}}function ut(){try{i.texStorage3D(...arguments)}catch(G){Jt("WebGLState:",G)}}function et(){try{i.texImage2D(...arguments)}catch(G){Jt("WebGLState:",G)}}function st(){try{i.texImage3D(...arguments)}catch(G){Jt("WebGLState:",G)}}function dt(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function Ut(G,mt){u[G]!==mt&&(i.pixelStorei(G,mt),u[G]=mt)}function pt(G){yt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function ft(G){It.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),It.copy(G))}function Ot(G,mt){let it=c.get(mt);it===void 0&&(it=new WeakMap,c.set(mt,it));let gt=it.get(G);gt===void 0&&(gt=i.getUniformBlockIndex(mt,G.name),it.set(G,gt))}function Xt(G,mt){let gt=c.get(mt).get(G);l.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,G.__bindingPointIndex),l.set(mt,gt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,V={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,S=null,_=null,x=null,M=null,b=null,w=null,y=new bt(0,0,0),E=0,R=!1,A=null,C=null,L=null,P=null,F=null,yt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:ht,bindFramebuffer:zt,drawBuffers:_t,useProgram:Tt,setBlending:Yt,setMaterial:ne,setFlipSided:Nt,setCullFace:kt,setLineWidth:oe,setPolygonOffset:pe,setScissorTest:le,activeTexture:ie,bindTexture:z,unbindTexture:Ee,compressedTexImage2D:se,compressedTexImage3D:N,texImage2D:et,texImage3D:st,pixelStorei:Ut,getParameter:dt,updateUBOMapping:Ot,uniformBlockBinding:Xt,texStorage2D:lt,texStorage3D:ut,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:pt,viewport:ft,reset:ae}}function Sv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,T){return p?new OffscreenCanvas(N,T):Jr("canvas")}function m(N,T,W){let q=1,j=se(N);if((j.width>W||j.height>W)&&(q=W/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let lt=Math.floor(q*j.width),ut=Math.floor(q*j.height);d===void 0&&(d=v(lt,ut));let et=T?v(lt,ut):d;return et.width=lt,et.height=ut,et.getContext("2d").drawImage(N,0,0,lt,ut),$t("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+lt+"x"+ut+")."),et}else return"data"in N&&$t("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),N;return N}function g(N){return N.generateMipmaps}function S(N){i.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,T,W,q,j,lt=!1){if(N!==null){if(i[N]!==void 0)return i[N];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut;q&&(ut=t.get("EXT_texture_norm16"),ut||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=T;if(T===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8),W===i.UNSIGNED_SHORT&&ut&&(et=ut.R16_EXT),W===i.SHORT&&ut&&(et=ut.R16_SNORM_EXT)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),T===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8),W===i.UNSIGNED_SHORT&&ut&&(et=ut.RG16_EXT),W===i.SHORT&&ut&&(et=ut.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_SHORT&&ut&&(et=ut.RGB16_EXT),W===i.SHORT&&ut&&(et=ut.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),T===i.RGBA){let st=lt?$r:me.getTransfer(j);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=st===Ce?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ut&&(et=ut.RGBA16_EXT),W===i.SHORT&&ut&&(et=ut.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(N,T){let W;return N?T===null||T===ai||T===yr?W=i.DEPTH24_STENCIL8:T===Qn?W=i.DEPTH32F_STENCIL8:T===vr&&(W=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ai||T===yr?W=i.DEPTH_COMPONENT24:T===Qn?W=i.DEPTH_COMPONENT32F:T===vr&&(W=i.DEPTH_COMPONENT16),W}function b(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==Xe?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){let T=N.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function y(N){let T=N.target;T.removeEventListener("dispose",y),A(T)}function E(N){let T=n.get(N);if(T.__webglInit===void 0)return;let W=N.source,q=f.get(W);if(q){let j=q[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(N),Object.keys(q).length===0&&f.delete(W)}n.remove(N)}function R(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let W=N.source,q=f.get(W);delete q[T.__cacheKey],o.memory.textures--}function A(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let j=0;j<T.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(T.__webglFramebuffer[q][j]);else i.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)i.deleteFramebuffer(T.__webglFramebuffer[q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=N.textures;for(let q=0,j=W.length;q<j;q++){let lt=n.get(W[q]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(W[q])}n.remove(N)}let C=0;function L(){C=0}function P(){return C}function F(N){C=N}function U(){let N=C;return N>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function B(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function X(N,T){let W=n.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let q=N.image;if(q===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function O(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ht(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function H(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ht(W,N,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function V(N,T){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){zt(W,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}let ot={[_s]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},rt={[dn]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[No]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},yt={[ef]:i.NEVER,[af]:i.ALWAYS,[nf]:i.LESS,[rc]:i.LEQUAL,[sf]:i.EQUAL,[oc]:i.GEQUAL,[rf]:i.GREATER,[of]:i.NOTEQUAL};function It(N,T){if(T.type===Qn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xe||T.magFilter===Ml||T.magFilter===No||T.magFilter===Mi||T.minFilter===Xe||T.minFilter===Ml||T.minFilter===No||T.minFilter===Mi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ot[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ot[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ot[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,rt[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==No&&T.minFilter!==Mi||T.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Vt(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",w));let q=T.source,j=f.get(q);j===void 0&&(j={},f.set(q,j));let lt=B(T);if(lt!==N.__cacheKey){j[lt]===void 0&&(j[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),j[lt].usedTimes++;let ut=j[N.__cacheKey];ut!==void 0&&(j[N.__cacheKey].usedTimes--,ut.usedTimes===0&&R(T)),N.__cacheKey=lt,N.__webglTexture=j[lt].texture}return W}function J(N,T,W){return Math.floor(Math.floor(N/W)/T)}function tt(N,T,W,q){let lt=N.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,q,T.data);else{lt.sort((Ut,pt)=>Ut.start-pt.start);let ut=0;for(let Ut=1;Ut<lt.length;Ut++){let pt=lt[ut],ft=lt[Ut],Ot=pt.start+pt.count,Xt=J(ft.start,T.width,4),ae=J(pt.start,T.width,4);ft.start<=Ot+1&&Xt===ae&&J(ft.start+ft.count-1,T.width,4)===Xt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++ut,lt[ut]=ft)}lt.length=ut+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ut=0,pt=lt.length;Ut<pt;Ut++){let ft=lt[Ut],Ot=Math.floor(ft.start/4),Xt=Math.ceil(ft.count/4),ae=Ot%T.width,G=Math.floor(Ot/T.width),mt=Xt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ae,G,mt,it,W,q,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function ht(N,T,W){let q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=i.TEXTURE_3D);let j=Vt(N,T),lt=T.source;e.bindTexture(q,N.__webglTexture,i.TEXTURE0+W);let ut=n.get(lt);if(lt.version!==ut.__version||j===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let it=me.getPrimaries(me.workingColorSpace),gt=T.colorSpace===li?null:me.getPrimaries(T.colorSpace),wt=T.colorSpace===li||it===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let st=m(T.image,!1,s.maxTextureSize);st=Ee(T,st);let dt=r.convert(T.format,T.colorSpace),Ut=r.convert(T.type),pt=x(T.internalFormat,dt,Ut,T.normalized,T.colorSpace,T.isVideoTexture);It(q,T);let ft,Ot=T.mipmaps,Xt=T.isVideoTexture!==!0,ae=ut.__version===void 0||j===!0,G=lt.dataReady,mt=b(T,st);if(T.isDepthTexture)pt=M(T.format===ss,T.type),ae&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,pt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,pt,st.width,st.height,0,dt,Ut,null));else if(T.isDataTexture)if(Ot.length>0){Xt&&ae&&e.texStorage2D(i.TEXTURE_2D,mt,pt,Ot[0].width,Ot[0].height);for(let it=0,gt=Ot.length;it<gt;it++)ft=Ot[it],Xt?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,dt,Ut,ft.data):e.texImage2D(i.TEXTURE_2D,it,pt,ft.width,ft.height,0,dt,Ut,ft.data);T.generateMipmaps=!1}else Xt?(ae&&e.texStorage2D(i.TEXTURE_2D,mt,pt,st.width,st.height),G&&tt(T,st,dt,Ut)):e.texImage2D(i.TEXTURE_2D,0,pt,st.width,st.height,0,dt,Ut,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,Ot[0].width,Ot[0].height,st.depth);for(let it=0,gt=Ot.length;it<gt;it++)if(ft=Ot[it],T.format!==wn)if(dt!==null)if(Xt){if(G)if(T.layerUpdates.size>0){let wt=Jh(ft.width,ft.height,T.format,T.type);for(let at of T.layerUpdates){let Ht=ft.data.subarray(at*wt/ft.data.BYTES_PER_ELEMENT,(at+1)*wt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,at,ft.width,ft.height,1,dt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,st.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,pt,ft.width,ft.height,st.depth,0,ft.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,st.depth,dt,Ut,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,pt,ft.width,ft.height,st.depth,0,dt,Ut,ft.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Xt&&ae&&e.texStorage2D(i.TEXTURE_2D,mt,pt,Ot[0].width,Ot[0].height);for(let it=0,gt=Ot.length;it<gt;it++)ft=Ot[it],T.format!==wn?dt!==null?Xt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,it,pt,ft.width,ft.height,0,ft.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,dt,Ut,ft.data):e.texImage2D(i.TEXTURE_2D,it,pt,ft.width,ft.height,0,dt,Ut,ft.data)}else if(T.isDataArrayTexture)if(Xt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,st.width,st.height,st.depth),G)if(T.layerUpdates.size>0){let it=Jh(st.width,st.height,T.format,T.type);for(let gt of T.layerUpdates){let wt=st.data.subarray(gt*it/st.data.BYTES_PER_ELEMENT,(gt+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,st.width,st.height,1,dt,Ut,wt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,st.width,st.height,st.depth,0,dt,Ut,st.data);else if(T.isData3DTexture)Xt?(ae&&e.texStorage3D(i.TEXTURE_3D,mt,pt,st.width,st.height,st.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,pt,st.width,st.height,st.depth,0,dt,Ut,st.data);else if(T.isFramebufferTexture){if(ae)if(Xt)e.texStorage2D(i.TEXTURE_2D,mt,pt,st.width,st.height);else{let it=st.width,gt=st.height;for(let wt=0;wt<mt;wt++)e.texImage2D(i.TEXTURE_2D,wt,pt,it,gt,0,dt,Ut,null),it>>=1,gt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),u.add(T),it.onpaint=gt=>{let wt=gt.changedElements;for(let at of u)wt.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let wt=i.RGBA,at=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,at,Ht,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Xt&&ae){let it=se(Ot[0]);e.texStorage2D(i.TEXTURE_2D,mt,pt,it.width,it.height)}for(let it=0,gt=Ot.length;it<gt;it++)ft=Ot[it],Xt?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt,Ut,ft):e.texImage2D(i.TEXTURE_2D,it,pt,dt,Ut,ft);T.generateMipmaps=!1}else if(Xt){if(ae){let it=se(st);e.texStorage2D(i.TEXTURE_2D,mt,pt,it.width,it.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,pt,dt,Ut,st);g(T)&&S(q),ut.__version=lt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function zt(N,T,W){if(T.image.length!==6)return;let q=Vt(N,T),j=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let lt=n.get(j);if(j.version!==lt.__version||q===!0){e.activeTexture(i.TEXTURE0+W);let ut=me.getPrimaries(me.workingColorSpace),et=T.colorSpace===li?null:me.getPrimaries(T.colorSpace),st=T.colorSpace===li||ut===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ut=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let at=0;at<6;at++)!dt&&!Ut?pt[at]=m(T.image[at],!0,s.maxCubemapSize):pt[at]=Ut?T.image[at].image:T.image[at],pt[at]=Ee(T,pt[at]);let ft=pt[0],Ot=r.convert(T.format,T.colorSpace),Xt=r.convert(T.type),ae=x(T.internalFormat,Ot,Xt,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,mt=lt.__version===void 0||q===!0,it=j.dataReady,gt=b(T,ft);It(i.TEXTURE_CUBE_MAP,T);let wt;if(dt){G&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ae,ft.width,ft.height);for(let at=0;at<6;at++){wt=pt[at].mipmaps;for(let Ht=0;Ht<wt.length;Ht++){let Ft=wt[Ht];T.format!==wn?Ot!==null?G?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,0,0,Ft.width,Ft.height,Ot,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,ae,Ft.width,Ft.height,0,Ft.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,0,0,Ft.width,Ft.height,Ot,Xt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,ae,Ft.width,Ft.height,0,Ot,Xt,Ft.data)}}}else{if(wt=T.mipmaps,G&&mt){wt.length>0&&gt++;let at=se(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ae,at.width,at.height)}for(let at=0;at<6;at++)if(Ut){G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,pt[at].width,pt[at].height,Ot,Xt,pt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ae,pt[at].width,pt[at].height,0,Ot,Xt,pt[at].data);for(let Ht=0;Ht<wt.length;Ht++){let Fe=wt[Ht].image[at].image;G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,0,0,Fe.width,Fe.height,Ot,Xt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,ae,Fe.width,Fe.height,0,Ot,Xt,Fe.data)}}else{G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,Xt,pt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ae,Ot,Xt,pt[at]);for(let Ht=0;Ht<wt.length;Ht++){let Ft=wt[Ht];G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,0,0,Ot,Xt,Ft.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,ae,Ot,Xt,Ft.image[at])}}}g(T)&&S(i.TEXTURE_CUBE_MAP),lt.__version=j.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _t(N,T,W,q,j,lt){let ut=r.convert(W.format,W.colorSpace),et=r.convert(W.type),st=x(W.internalFormat,ut,et,W.normalized,W.colorSpace),dt=n.get(T),Ut=n.get(W);if(Ut.__renderTarget=T,!dt.__hasExternalTextures){let pt=Math.max(1,T.width>>lt),ft=Math.max(1,T.height>>lt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,lt,st,pt,ft,T.depth,0,ut,et,null):e.texImage2D(j,lt,st,pt,ft,0,ut,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,Ut.__webglTexture,0,le(T)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,Ut.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(N,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let q=T.depthTexture,j=q&&q.isDepthTexture?q.type:null,lt=M(T.stencilBuffer,j),ut=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(T),lt,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(T),lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,lt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,N)}else{let q=T.textures;for(let j=0;j<q.length;j++){let lt=q[j],ut=r.convert(lt.format,lt.colorSpace),et=r.convert(lt.type),st=x(lt.internalFormat,ut,et,lt.normalized,lt.colorSpace);ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(T),st,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(T),st,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,st,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(N,T,W){let q=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(T.depthTexture);if(j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),It(i.TEXTURE_CUBE_MAP,T.depthTexture);let dt=r.convert(T.depthTexture.format),Ut=r.convert(T.depthTexture.type),pt;T.depthTexture.format===xi?pt=i.DEPTH_COMPONENT24:T.depthTexture.format===ss&&(pt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,T.width,T.height,0,dt,Ut,null)}}else X(T.depthTexture,0);let lt=j.__webglTexture,ut=le(T),et=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,st=T.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===xi)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,lt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,lt,0);else if(T.depthTexture.format===ss)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,lt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(N){let T=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){let j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=q}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)St(T.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?St(T.__webglFramebuffer[0],N,0):St(T.__webglFramebuffer,N,0)}else if(W){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=i.createRenderbuffer(),Tt(T.__webglDepthbuffer[q],N,!1);else{let j=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,lt)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Tt(T.__webglDepthbuffer,N,!1);else{let j=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(N,T,W){let q=n.get(N);T!==void 0&&_t(q.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Wt(N)}function ne(N){let T=N.texture,W=n.get(N),q=n.get(T);N.addEventListener("dispose",y);let j=N.textures,lt=N.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=T.version,o.memory.textures++),lt){W.__webglFramebuffer=[];for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[et]=[];for(let st=0;st<T.mipmaps.length;st++)W.__webglFramebuffer[et][st]=i.createFramebuffer()}else W.__webglFramebuffer[et]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let et=0;et<T.mipmaps.length;et++)W.__webglFramebuffer[et]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ut)for(let et=0,st=j.length;et<st;et++){let dt=n.get(j[et]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ie(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){let st=j[et];W.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let dt=r.convert(st.format,st.colorSpace),Ut=r.convert(st.type),pt=x(st.internalFormat,dt,Ut,st.normalized,st.colorSpace,N.isXRRenderTarget===!0),ft=le(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,pt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,W.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(W.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),It(i.TEXTURE_CUBE_MAP,T);for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)_t(W.__webglFramebuffer[et][st],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else _t(W.__webglFramebuffer[et],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(T)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let et=0,st=j.length;et<st;et++){let dt=j[et],Ut=n.get(dt),pt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Ut.__webglTexture),It(pt,dt),_t(W.__webglFramebuffer,N,dt,i.COLOR_ATTACHMENT0+et,pt,0),g(dt)&&S(pt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(et=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,q.__webglTexture),It(et,T),T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)_t(W.__webglFramebuffer[st],N,T,i.COLOR_ATTACHMENT0,et,st);else _t(W.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,et,0);g(T)&&S(et),e.unbindTexture()}N.depthBuffer&&Wt(N)}function Nt(N){let T=N.textures;for(let W=0,q=T.length;W<q;W++){let j=T[W];if(g(j)){let lt=_(N),ut=n.get(j).__webglTexture;e.bindTexture(lt,ut),S(lt),e.unbindTexture()}}}let kt=[],oe=[];function pe(N){if(N.samples>0){if(ie(N)===!1){let T=N.textures,W=N.width,q=N.height,j=i.COLOR_BUFFER_BIT,lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(N),et=T.length>1;if(et)for(let dt=0;dt<T.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let st=N.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Ut=n.get(T[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,W,q,0,0,W,q,j,i.NEAREST),l===!0&&(kt.length=0,oe.length=0,kt.push(i.COLOR_ATTACHMENT0+dt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(kt.push(lt),oe.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let dt=0;dt<T.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Ut=n.get(T[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function le(N){return Math.min(s.maxSamples,N.samples)}function ie(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function Ee(N,T){let W=N.colorSpace,q=N.format,j=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Zr&&W!==li&&(me.getTransfer(W)===Ce?(q!==wn||j!==Ln)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",W)),T}function se(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Yt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bv(i,t){function e(n,s=li){let r,o=me.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return i.BYTE;if(n===zh)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===wn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===Rl)return i.RGBA_INTEGER;if(n===Fo||n===Uo||n===Oo||n===Bo)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Fl||n===Ul||n===Ol||n===zo||n===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Nl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return r.COMPRESSED_R11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zo)return r.COMPRESSED_RG11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===tc||n===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===ko||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ho(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:wv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new mu,g={},S=e.getContextAttributes(),_=null,x=null,M=[],b=[],w=new ct,y=null,E=null,R=new un;R.viewport=new ge;let A=new un;A.viewport=new ge;let C=[R,A],L=new gl,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=M[J];return tt===void 0&&(tt=new cr,M[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=M[J];return tt===void 0&&(tt=new cr,M[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=M[J];return tt===void 0&&(tt=new cr,M[J]=tt),tt.getHandSpace()};function U(J){let tt=b.indexOf(J.inputSource);if(tt===-1)return;let ht=M[tt];ht!==void 0&&(ht.update(J.inputSource,J.frame,c||o),ht.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let J=0;J<M.length;J++){let tt=b[J];tt!==null&&(b[J]=null,M[J].disconnect(tt))}P=null,F=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(_),f=null,d=null,u=null,s=null,x=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,zt=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=S.stencil?ss:xi,zt=S.stencil?yr:ai);let Tt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new bn(d.textureWidth,d.textureHeight,{format:wn,type:Ln,depthTexture:new $i(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ht={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new bn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(J){for(let tt=0;tt<J.removed.length;tt++){let ht=J.removed[tt],zt=b.indexOf(ht);zt>=0&&(b[zt]=null,M[zt].disconnect(ht))}for(let tt=0;tt<J.added.length;tt++){let ht=J.added[tt],zt=b.indexOf(ht);if(zt===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=b.length){b.push(ht),zt=Tt;break}else if(b[Tt]===null){b[Tt]=ht,zt=Tt;break}if(zt===-1)break}let _t=M[zt];_t&&_t.connect(ht)}}let O=new D,H=new D;function V(J,tt,ht){O.setFromMatrixPosition(tt.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);let zt=O.distanceTo(H),_t=tt.projectionMatrix.elements,Tt=ht.projectionMatrix.elements,St=_t[14]/(_t[10]-1),Wt=_t[14]/(_t[10]+1),Yt=(_t[9]+1)/_t[5],ne=(_t[9]-1)/_t[5],Nt=(_t[8]-1)/_t[0],kt=(Tt[8]+1)/Tt[0],oe=St*Nt,pe=St*kt,le=zt/(-Nt+kt),ie=le*-Nt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ie),J.translateZ(le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_t[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let z=St+le,Ee=Wt+le,se=oe-ie,N=pe+(zt-ie),T=Yt*Wt/Ee*z,W=ne*Wt/Ee*z;J.projectionMatrix.makePerspective(se,N,T,W,z,Ee),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ot(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,ht=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),L.near=A.near=R.near=tt,L.far=A.far=R.far=ht,(P!==L.near||F!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,F=L.far),L.layers.mask=J.layers.mask|6,R.layers.mask=L.layers.mask&-5,A.layers.mask=L.layers.mask&-3;let zt=J.parent,_t=L.cameras;ot(L,zt);for(let Tt=0;Tt<_t.length;Tt++)ot(_t[Tt],zt);_t.length===2?V(L,R,A):L.projectionMatrix.copy(R.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),rt(J,L,zt)};function rt(J,tt,ht){ht===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(ht.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(J){return g[J]};let yt=null;function It(J,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let zt=!1;ht.length!==L.cameras.length&&(L.cameras.length=0,zt=!0);for(let Wt=0;Wt<ht.length;Wt++){let Yt=ht[Wt],ne=null;if(f!==null)ne=f.getViewport(Yt);else{let kt=u.getViewSubImage(d,Yt);ne=kt.viewport,Wt===0&&(t.setRenderTargetTextures(x,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(x))}let Nt=C[Wt];Nt===void 0&&(Nt=new un,Nt.layers.enable(Wt),Nt.viewport=new ge,C[Wt]=Nt),Nt.matrix.fromArray(Yt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Yt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(ne.x,ne.y,ne.width,ne.height),Wt===0&&(L.matrix.copy(Nt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),zt===!0&&L.cameras.push(Nt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Wt=u.getDepthInformation(ht[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(_t&&_t.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<ht.length;Wt++){let Yt=ht[Wt].camera;if(Yt){let ne=g[Yt];ne||(ne=new ho,g[Yt]=ne);let Nt=u.getCameraImage(Yt);ne.sourceTexture=Nt}}}}for(let ht=0;ht<M.length;ht++){let zt=b[ht],_t=M[ht];zt!==null&&_t!==void 0&&_t.update(zt,tt,c||o)}yt&&yt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let Vt=new Hf;Vt.setAnimationLoop(It),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}},Tv=new ye,Yf=new ee;Yf.set(-1,0,0,0,1,0,0,0,1);function Av(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Yh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,_,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ke&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ke&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),_=S.envMap,x=S.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=s[x.id];b===void 0&&(m(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",S));let w=M.program;n.updateUBOMapping(x,w);let y=t.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let b=i.createBuffer(),w=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=s[x.id],b=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,E=b.length;y<E;y++){let R=b[y];if(Array.isArray(R))for(let A=0,C=R.length;A<C;A++)f(R[A],y,A,w);else f(R,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,b,w){if(v(x,M,b,w)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let A=0;A<E.length;A++){let C=E[A],L=g(C);p(C,x.__data,R),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function v(x,M,b,w){let y=x.value,E=M+"_"+b;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{let R=w[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){let M=x.uniforms,b=0,w=16;for(let E=0,R=M.length;E<R;E++){let A=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,L=A.length;C<L;C++){let P=A[C],F=Array.isArray(P.value)?P.value:[P.value];for(let U=0,B=F.length;U<B;U++){let X=F[U],O=g(X),H=b%w,V=H%O.boundary,ot=H+V;b+=V,ot!==0&&w-ot<O.storage&&(b+=w-ot),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=O.storage}}}let y=b%w;return y>0&&(b+=w-y),x.__size=b,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function _(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}var Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Pv(){return Si===null&&(Si=new Oi(Cv,16,16,rs,Gn),Si.name="DFG_LUT",Si.minFilter=Xe,Si.magFilter=Xe,Si.wrapS=Kn,Si.wrapT=Kn,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var hc=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ln}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,m=new Set([Rl,Al,Tl]),g=new Set([Ln,ai,vr,yr,bl,wl]),S=new Uint32Array(4),_=new Int32Array(4),x=new D,M=null,b=null,w=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,A=!1,C=null,L=null,P=null,F=null;this._outputColorSpace=Pe;let U=0,B=0,X=null,O=-1,H=null,V=new ge,ot=new ge,rt=null,yt=new bt(0),It=0,Vt=e.width,J=e.height,tt=1,ht=null,zt=null,_t=new ge(0,0,Vt,J),Tt=new ge(0,0,Vt,J),St=!1,Wt=new ur,Yt=!1,ne=!1,Nt=new ye,kt=new D,oe=new ge,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ie(){return X===null?tt:1}let z=n;function Ee(I,k){return e.getContext(I,k)}let se,N,T,W,q,j,lt,ut,et,st,dt,Ut,pt,ft,Ot,Xt,ae,G,mt,it,gt,wt,at;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",ti,!1),z===null){let k="webgl2";if(z=Ee(k,I),z===null)throw Ee(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(I){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",ti,!1),Jt("WebGLRenderer: "+I.message),I}function Ht(){se=new Ox(z),se.init(),gt=new bv(z,se),N=new Ax(z,se,t,gt),T=new Mv(z,se),N.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),L=z.createFramebuffer(),P=z.createFramebuffer(),F=z.createFramebuffer(),W=new kx(z),q=new av,j=new Sv(z,se,T,q,N,gt,W),lt=new Ux(R),ut=new G0(z),wt=new Ex(z,ut),et=new Bx(z,ut,W,wt),st=new Gx(z,et,ut,wt,W),G=new Hx(z,N,j),Ot=new Rx(q),dt=new ov(R,lt,se,N,wt,Ot),Ut=new Av(R,q),pt=new cv,ft=new mv(se),ae=new wx(R,lt,T,st,p,l),Xt=new yv(R,st,N),at=new Rv(z,W,N,T),mt=new Tx(z,se,W),it=new zx(z,se,W),W.programs=dt.programs,R.capabilities=N,R.extensions=se,R.properties=q,R.renderLists=pt,R.shadowMap=Xt,R.state=T,R.info=W}v!==Ln&&(E=new Wx(v,e.width,e.height,a,s,r));let Ft=new gu(R,z);this.xr=Ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let I=se.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=se.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(I){I!==void 0&&(tt=I,this.setSize(Vt,J,!1))},this.getSize=function(I){return I.set(Vt,J)},this.setSize=function(I,k,Q=!0){if(Ft.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=I,J=k,e.width=Math.floor(I*tt),e.height=Math.floor(k*tt),Q===!0&&(e.style.width=I+"px",e.style.height=k+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,I,k)},this.getDrawingBufferSize=function(I){return I.set(Vt*tt,J*tt).floor()},this.setDrawingBufferSize=function(I,k,Q){Vt=I,J=k,tt=Q,e.width=Math.floor(I*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,I,k)},this.setEffects=function(I){if(v===Ln){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let k=0;k<I.length;k++)if(I[k].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(_t)},this.setViewport=function(I,k,Q,Y){I.isVector4?_t.set(I.x,I.y,I.z,I.w):_t.set(I,k,Q,Y),T.viewport(V.copy(_t).multiplyScalar(tt).round())},this.getScissor=function(I){return I.copy(Tt)},this.setScissor=function(I,k,Q,Y){I.isVector4?Tt.set(I.x,I.y,I.z,I.w):Tt.set(I,k,Q,Y),T.scissor(ot.copy(Tt).multiplyScalar(tt).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(I){T.setScissorTest(St=I)},this.setOpaqueSort=function(I){ht=I},this.setTransparentSort=function(I){zt=I},this.getClearColor=function(I){return I.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(I=!0,k=!0,Q=!0){let Y=0;if(I){let Z=!1;if(X!==null){let Mt=X.texture.format;Z=m.has(Mt)}if(Z){let Mt=X.texture.type,Pt=g.has(Mt),vt=ae.getClearColor(),Lt=ae.getClearAlpha(),Bt=vt.r,he=vt.g,fe=vt.b;Pt?(S[0]=Bt,S[1]=he,S[2]=fe,S[3]=Lt,z.clearBufferuiv(z.COLOR,0,S)):(_[0]=Bt,_[1]=he,_[2]=fe,_[3]=Lt,z.clearBufferiv(z.COLOR,0,_))}else Y|=z.COLOR_BUFFER_BIT}k&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),C=I},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",ti,!1),ae.dispose(),pt.dispose(),ft.dispose(),q.dispose(),lt.dispose(),st.dispose(),wt.dispose(),at.dispose(),dt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",ku),Ft.removeEventListener("sessionend",Hu),ds.stop()};function Fe(I){I.preventDefault(),Kr("WebGLRenderer: Context Lost."),A=!0}function Ae(){Kr("WebGLRenderer: Context Restored."),A=!1;let I=W.autoReset,k=Xt.enabled,Q=Xt.autoUpdate,Y=Xt.needsUpdate,Z=Xt.type;Ht(),W.autoReset=I,Xt.enabled=k,Xt.autoUpdate=Q,Xt.needsUpdate=Y,Xt.type=Z}function ti(I){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function fi(I){let k=I.target;k.removeEventListener("dispose",fi),Ap(k)}function Ap(I){Rp(I),q.remove(I)}function Rp(I){let k=q.get(I).programs;k!==void 0&&(k.forEach(function(Q){dt.releaseProgram(Q)}),I.isShaderMaterial&&dt.releaseShaderCache(I))}this.renderBufferDirect=function(I,k,Q,Y,Z,Mt){k===null&&(k=pe);let Pt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,vt=Ip(I,k,Q,Y,Z);T.setMaterial(Y,Pt);let Lt=Q.index,Bt=1;if(Y.wireframe===!0){if(Lt=et.getWireframeAttribute(Q),Lt===void 0)return;Bt=2}let he=Q.drawRange,fe=Q.attributes.position,Dt=he.start*Bt,Re=(he.start+he.count)*Bt;Mt!==null&&(Dt=Math.max(Dt,Mt.start*Bt),Re=Math.min(Re,(Mt.start+Mt.count)*Bt)),Lt!==null?(Dt=Math.max(Dt,0),Re=Math.min(Re,Lt.count)):fe!=null&&(Dt=Math.max(Dt,0),Re=Math.min(Re,fe.count));let je=Re-Dt;if(je<0||je===1/0)return;wt.setup(Z,Y,vt,Q,Lt);let Be,De=mt;if(Lt!==null&&(Be=ut.get(Lt),De=it,De.setIndex(Be)),Z.isMesh)Y.wireframe===!0?(T.setLineWidth(Y.wireframeLinewidth*ie()),De.setMode(z.LINES)):De.setMode(z.TRIANGLES);else if(Z.isLine){let yn=Y.linewidth;yn===void 0&&(yn=1),T.setLineWidth(yn*ie()),Z.isLineSegments?De.setMode(z.LINES):Z.isLineLoop?De.setMode(z.LINE_LOOP):De.setMode(z.LINE_STRIP)}else Z.isPoints?De.setMode(z.POINTS):Z.isSprite&&De.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(se.get("WEBGL_multi_draw"))De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let yn=Z._multiDrawStarts,Rt=Z._multiDrawCounts,Rn=Z._multiDrawCount,Se=Lt?ut.get(Lt).bytesPerElement:1,$n=q.get(Y).currentProgram.getUniforms();for(let pi=0;pi<Rn;pi++)$n.setValue(z,"_gl_DrawID",pi),De.render(yn[pi]/Se,Rt[pi])}else if(Z.isInstancedMesh)De.renderInstances(Dt,je,Z.count);else if(Q.isInstancedBufferGeometry){let yn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Rt=Math.min(Q.instanceCount,yn);De.renderInstances(Dt,je,Rt)}else De.render(Dt,je)};function zu(I,k,Q,Y){C!==null&&I.isNodeMaterial&&C.setObject(Y,I),Yt===!0&&Ot.setState(I,Q,!1),I.transparent===!0&&I.side===Qe&&I.forceSinglePass===!1?(I.side=Ke,I.needsUpdate=!0,ra(I,k,Y),I.side=es,I.needsUpdate=!0,ra(I,k,Y),I.side=Qe):ra(I,k,Y)}this.compile=function(I,k,Q=null){Q===null&&(Q=I),C!==null&&C.renderStart(I,k,Q),b=ft.get(Q),b.init(k),y.push(b),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),I!==Q&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),C!==null&&C.updateLights(b.state.lightsArray),ne=this.localClippingEnabled,Yt=Ot.init(this.clippingPlanes,ne),Yt===!0&&Ot.setGlobalState(this.clippingPlanes,k),C!==null&&Xt.render(b.state.shadowsArray,Q,k);let Y=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let vt=Mt[Pt];zu(vt,Q,k,Z),Y.add(vt)}else zu(Mt,Q,k,Z),Y.add(Mt)}),b=y.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(I,k,Q=null){let Y=this.compile(I,k,Q);return new Promise(Z=>{function Mt(){if(Y.forEach(function(Pt){let Lt=q.get(Pt).currentProgram;(Lt===void 0||Lt.isReady())&&Y.delete(Pt)}),Y.size===0){Z(I);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Oc=null;function Cp(I){Oc&&Oc(I)}function ku(){ds.stop()}function Hu(){ds.start()}let ds=new Hf;ds.setAnimationLoop(Cp),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(I){Oc=I,Ft.setAnimationLoop(I),I===null?ds.stop():ds.start()},Ft.addEventListener("sessionstart",ku),Ft.addEventListener("sessionend",Hu),this.render=function(I,k){if(k!==void 0&&k.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(I,k);let Q=Ft.enabled===!0&&Ft.isPresenting===!0,Y=E!==null&&(X===null||Q)&&E.begin(R,X);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(k),k=Ft.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,k,X),b=ft.get(I,y.length),b.init(k),b.state.textureUnits=j.getTextureUnits(),y.push(b),Nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Wt.setFromProjectionMatrix(Nt,si,k.reversedDepth),ne=this.localClippingEnabled,Yt=Ot.init(this.clippingPlanes,ne),M=pt.get(I,w.length),M.init(),w.push(M),Ft.enabled===!0&&Ft.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&Bc(Pt,k,-1/0,R.sortObjects)}Bc(I,k,0,R.sortObjects),M.finish(),C!==null&&C.updateLights(b.state.lightsArray),R.sortObjects===!0&&M.sort(ht,zt),le=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,le&&ae.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Ot.beginShadows();let Z=b.state.shadowsArray;if(Xt.render(Z,I,k),Yt===!0&&Ot.endShadows(),(Y&&E.hasRenderPass())===!1){let Pt=M.opaque,vt=M.transmissive;if(b.setupLights(),k.isArrayCamera){let Lt=k.cameras;if(vt.length>0)for(let Bt=0,he=Lt.length;Bt<he;Bt++){let fe=Lt[Bt];Vu(Pt,vt,I,fe)}le&&ae.render(I);for(let Bt=0,he=Lt.length;Bt<he;Bt++){let fe=Lt[Bt];Gu(M,I,fe,fe.viewport)}}else vt.length>0&&Vu(Pt,vt,I,k),le&&ae.render(I),Gu(M,I,k)}X!==null&&B===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),Y&&E.end(R),I.isScene===!0&&I.onAfterRender(R,I,k),wt.resetDefaultState(),O=-1,H=null,y.pop(),y.length>0?(b=y[y.length-1],j.setTextureUnits(b.state.textureUnits),Yt===!0&&Ot.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,C!==null&&C.renderEnd()};function Bc(I,k,Q,Y){if(I.visible===!1)return;if(I.layers.test(k.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(k);else if(I.isLightProbeGrid)b.pushLightProbeGrid(I);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Wt)){Y&&oe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Nt);let Pt=st.update(I),vt=I.material;vt.visible&&M.push(I,Pt,vt,Q,oe.z,null,k)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Wt))){let Pt=st.update(I),vt=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),oe.copy(I.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),oe.copy(Pt.boundingSphere.center)),oe.applyMatrix4(I.matrixWorld).applyMatrix4(Nt)),Array.isArray(vt)){let Lt=Pt.groups;for(let Bt=0,he=Lt.length;Bt<he;Bt++){let fe=Lt[Bt],Dt=vt[fe.materialIndex];Dt&&Dt.visible&&M.push(I,Pt,Dt,Q,oe.z,fe,k)}}else vt.visible&&M.push(I,Pt,vt,Q,oe.z,null,k)}}let Mt=I.children;for(let Pt=0,vt=Mt.length;Pt<vt;Pt++)Bc(Mt[Pt],k,Q,Y)}function Gu(I,k,Q,Y){let{opaque:Z,transmissive:Mt,transparent:Pt}=I;b.setupLightsView(Q),Yt===!0&&Ot.setGlobalState(R.clippingPlanes,Q),Y&&T.viewport(V.copy(Y)),Z.length>0&&sa(Z,k,Q),Mt.length>0&&sa(Mt,k,Q),Pt.length>0&&sa(Pt,k,Q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Vu(I,k,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let Dt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new bn(1,1,{generateMipmaps:!0,type:Dt?Gn:Ln,minFilter:Mi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||V;Mt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let vt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(yt),It=R.getClearAlpha(),It<1&&R.setClearColor(16777215,.5),R.clear(),le&&ae.render(Q);let he=R.toneMapping;R.toneMapping=oi;let fe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),Yt===!0&&Ot.setGlobalState(R.clippingPlanes,Y),sa(I,Q,Y),j.updateMultisampleRenderTarget(Mt),j.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Re=0,je=k.length;Re<je;Re++){let Be=k[Re],{object:De,geometry:yn,material:Rt,group:Rn}=Be;if(Rt.side===Qe&&De.layers.test(Y.layers)){let Se=Rt.side;Rt.side=Ke,Rt.needsUpdate=!0,Wu(De,Q,Y,yn,Rt,Rn),Rt.side=Se,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(j.updateMultisampleRenderTarget(Mt),j.updateRenderTargetMipmap(Mt))}R.setRenderTarget(vt,Lt,Bt),R.setClearColor(yt,It),fe!==void 0&&(Y.viewport=fe),R.toneMapping=he}function sa(I,k,Q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Mt=I.length;Z<Mt;Z++){let Pt=I[Z],{object:vt,geometry:Lt,group:Bt}=Pt,he=Pt.material;he.allowOverride===!0&&Y!==null&&(he=Y),vt.layers.test(Q.layers)&&Wu(vt,k,Q,Lt,he,Bt)}}function Wu(I,k,Q,Y,Z,Mt){C!==null&&Z.isNodeMaterial&&C.setObject(I,Z),I.onBeforeRender(R,k,Q,Y,Z,Mt),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(R,k,Q,Y,I,Mt),Z.transparent===!0&&Z.side===Qe&&Z.forceSinglePass===!1?(Z.side=Ke,Z.needsUpdate=!0,R.renderBufferDirect(Q,k,Y,Z,I,Mt),Z.side=es,Z.needsUpdate=!0,R.renderBufferDirect(Q,k,Y,Z,I,Mt),Z.side=Qe):R.renderBufferDirect(Q,k,Y,Z,I,Mt),I.onAfterRender(R,k,Q,Y,Z,Mt)}function ra(I,k,Q){k.isScene!==!0&&(k=pe);let Y=q.get(I),Z=b.state.lights,Mt=b.state.shadowsArray,Pt=Z.state.version,vt=dt.getParameters(I,Z.state,Mt,k,Q,b.state.lightProbeGridArray),Lt=dt.getProgramCacheKey(vt),Bt=Y.programs;Y.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let he=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Y.envMap=lt.get(I.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&I.envMap===null?k.environmentRotation:I.envMapRotation,Bt===void 0&&(I.addEventListener("dispose",fi),Bt=new Map,Y.programs=Bt);let fe=Bt.get(Lt);if(fe!==void 0){if(Y.currentProgram===fe&&Y.lightsStateVersion===Pt)return qu(I,vt),fe}else vt.uniforms=dt.getUniforms(I),C!==null&&I.isNodeMaterial&&C.build(I,Q,vt),I.onBeforeCompile(vt,R),fe=dt.acquireProgram(vt,Lt),Bt.set(Lt,fe),Y.uniforms=vt.uniforms;let Dt=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),qu(I,vt),Y.needsLights=Dp(I),Y.lightsStateVersion=Pt,Y.needsLights&&(Dt.ambientLightColor.value=Z.state.ambient,Dt.lightProbe.value=Z.state.probe,Dt.sunLights.value=Z.state.sun,Dt.sunLightShadows.value=Z.state.sunShadow,Dt.directionalLights.value=Z.state.directional,Dt.directionalLightShadows.value=Z.state.directionalShadow,Dt.spotLights.value=Z.state.spot,Dt.spotLightShadows.value=Z.state.spotShadow,Dt.rectAreaLights.value=Z.state.rectArea,Dt.ltc_1.value=Z.state.rectAreaLTC1,Dt.ltc_2.value=Z.state.rectAreaLTC2,Dt.pointLights.value=Z.state.point,Dt.pointLightShadows.value=Z.state.pointShadow,Dt.hemisphereLights.value=Z.state.hemi,Dt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Dt.sunShadowCascade.value=Z.state.sunShadowCascade,Dt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=Z.state.spotLightMatrix,Dt.spotLightMap.value=Z.state.spotLightMap,Dt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=fe,Y.uniformsList=null,fe}function Xu(I){if(I.uniformsList===null){let k=I.currentProgram.getUniforms();I.uniformsList=wr.seqWithValue(k.seq,I.uniforms)}return I.uniformsList}function qu(I,k){let Q=q.get(I);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Pp(I,k){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let Q=0,Y=I.length;Q<Y;Q++){let Z=I[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function Ip(I,k,Q,Y,Z){k.isScene!==!0&&(k=pe),j.resetTextureUnits();let Mt=k.fog,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,vt=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:me.workingColorSpace,Lt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Bt=lt.get(Y.envMap||Pt,Lt),he=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,fe=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!Q.morphAttributes.position,Re=!!Q.morphAttributes.normal,je=!!Q.morphAttributes.color,Be=oi;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Be=R.toneMapping);let De=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yn=De!==void 0?De.length:0,Rt=q.get(Y),Rn=b.state.lights;if(Yt===!0&&(ne===!0||I!==H)){let Ue=I===H&&Y.id===O;Ot.setState(Y,I,Ue)}let Se=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Rn.state.version||Rt.outputColorSpace!==vt||Z.isBatchedMesh&&Rt.batching===!1||!Z.isBatchedMesh&&Rt.batching===!0||Z.isBatchedMesh&&Rt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Rt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Rt.instancing===!1||!Z.isInstancedMesh&&Rt.instancing===!0||Z.isSkinnedMesh&&Rt.skinning===!1||!Z.isSkinnedMesh&&Rt.skinning===!0||Z.isInstancedMesh&&Rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Rt.instancingMorph===!1&&Z.morphTexture!==null||Rt.envMap!==Bt||Y.fog===!0&&Rt.fog!==Mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ot.numPlanes||Rt.numIntersection!==Ot.numIntersection)||Rt.vertexAlphas!==he||Rt.vertexTangents!==fe||Rt.morphTargets!==Dt||Rt.morphNormals!==Re||Rt.morphColors!==je||Rt.toneMapping!==Be||Rt.morphTargetsCount!==yn||!!Rt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Rt.__version=Y.version);let $n=Rt.currentProgram;Se===!0&&($n=ra(Y,k,Z),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,$n,Rt));let pi=!1,Hi=!1,Os=!1,Ie=$n.getUniforms(),Je=Rt.uniforms;if(T.useProgram($n.program)&&(pi=!0,Hi=!0,Os=!0),Y.id!==O&&(O=Y.id,Hi=!0),Rt.needsLights){let Ue=Pp(b.state.lightProbeGridArray,Z);Rt.lightProbeGrid!==Ue&&(Rt.lightProbeGrid=Ue,Hi=!0)}if(pi||H!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ie.setValue(z,"projectionMatrix",I.projectionMatrix),Ie.setValue(z,"viewMatrix",I.matrixWorldInverse);let Vi=Ie.map.cameraPosition;Vi!==void 0&&Vi.setValue(z,kt.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),H!==I&&(H=I,Hi=!0,Os=!0)}if(Rt.needsLights&&(Rn.state.sunShadowMap.length>0&&Ie.setValue(z,"sunShadowMap",Rn.state.sunShadowMap,j),Rn.state.directionalShadowMap.length>0&&Ie.setValue(z,"directionalShadowMap",Rn.state.directionalShadowMap,j),Rn.state.spotShadowMap.length>0&&Ie.setValue(z,"spotShadowMap",Rn.state.spotShadowMap,j),Rn.state.pointShadowMap.length>0&&Ie.setValue(z,"pointShadowMap",Rn.state.pointShadowMap,j)),Z.isSkinnedMesh){Ie.setOptional(z,Z,"bindMatrix"),Ie.setOptional(z,Z,"bindMatrixInverse");let Ue=Z.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ie.setValue(z,"boneTexture",Ue.boneTexture,j))}Z.isBatchedMesh&&(Ie.setOptional(z,Z,"batchingTexture"),Ie.setValue(z,"batchingTexture",Z._matricesTexture,j),Ie.setOptional(z,Z,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",Z._indirectTexture,j),Ie.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",Z._colorsTexture,j));let Gi=Q.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&G.update(Z,Q,$n),(Hi||Rt.receiveShadow!==Z.receiveShadow)&&(Rt.receiveShadow=Z.receiveShadow,Ie.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Je.envMapIntensity.value=k.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Pv()),Hi){if(Ie.setValue(z,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&Lp(Je,Os),Mt&&Y.fog===!0&&Ut.refreshFogUniforms(Je,Mt),Ut.refreshMaterialUniforms(Je,Y,tt,J,b.state.transmissionRenderTarget[I.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ue=Rt.lightProbeGrid;Je.probesSH.value=Ue.texture,Je.probesMin.value.copy(Ue.boundingBox.min),Je.probesMax.value.copy(Ue.boundingBox.max),Je.probesResolution.value.copy(Ue.resolution)}wr.upload(z,Xu(Rt),Je,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wr.upload(z,Xu(Rt),Je,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ie.setValue(z,"center",Z.center),Ie.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(z,"normalMatrix",Z.normalMatrix),Ie.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ue=Y.uniformsGroups;for(let Vi=0,Bs=Ue.length;Vi<Bs;Vi++){let Zu=Ue[Vi];at.update(Zu,$n),at.bind(Zu,$n)}}return $n}function Lp(I,k){I.ambientLightColor.needsUpdate=k,I.lightProbe.needsUpdate=k,I.sunLights.needsUpdate=k,I.sunLightShadows.needsUpdate=k,I.directionalLights.needsUpdate=k,I.directionalLightShadows.needsUpdate=k,I.pointLights.needsUpdate=k,I.pointLightShadows.needsUpdate=k,I.spotLights.needsUpdate=k,I.spotLightShadows.needsUpdate=k,I.rectAreaLights.needsUpdate=k,I.hemisphereLights.needsUpdate=k}function Dp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(I,k,Q){let Y=q.get(I);Y.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(I.texture).__webglTexture=k,q.get(I.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,k){let Q=q.get(I);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(I,k=0,Q=0){X=I,U=k,B=Q;let Y=null,Z=!1,Mt=!1;if(I){let vt=q.get(I);if(vt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(z.FRAMEBUFFER,vt.__webglFramebuffer),V.copy(I.viewport),ot.copy(I.scissor),rt=I.scissorTest,T.viewport(V),T.scissor(ot),T.setScissorTest(rt),O=-1;return}else if(vt.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(vt.__hasExternalTextures)j.rebindTextures(I,q.get(I.texture).__webglTexture,q.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let he=I.depthTexture;if(vt.__boundDepthTexture!==he){if(he!==null&&q.has(he)&&(I.width!==he.image.width||I.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}let Lt=I.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Mt=!0);let Bt=q.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?Y=Bt[k][Q]:Y=Bt[k],Z=!0):I.samples>0&&j.useMultisampledRTT(I)===!1?Y=q.get(I).__webglMultisampledFramebuffer:Array.isArray(Bt)?Y=Bt[Q]:Y=Bt,V.copy(I.viewport),ot.copy(I.scissor),rt=I.scissorTest}else V.copy(_t).multiplyScalar(tt).floor(),ot.copy(Tt).multiplyScalar(tt).floor(),rt=St;if(Q!==0&&(Y=L),T.bindFramebuffer(z.FRAMEBUFFER,Y)&&T.drawBuffers(I,Y),T.viewport(V),T.scissor(ot),T.setScissorTest(rt),Z){let vt=q.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,vt.__webglTexture,Q)}else if(Mt){let vt=k;for(let Lt=0;Lt<I.textures.length;Lt++){let Bt=q.get(I.textures[Lt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Lt,Bt.__webglTexture,Q,vt)}}else if(I!==null&&Q!==0){let vt=q.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vt.__webglTexture,Q)}O=-1};function Yu(I){let k=q.get(I);return(k.__readFormat!==I.format||k.__readType!==I.type)&&(k.__readFormat=I.format,k.__readType=I.type,k.__formatReadable=N.textureFormatReadable(I.format),k.__typeReadable=N.textureTypeReadable(I.type)),k}this.readRenderTargetPixels=function(I,k,Q,Y,Z,Mt,Pt,vt=0){if(!(I&&I.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt){T.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Bt=I.textures[vt],he=Bt.format,fe=Bt.type;I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+vt);let Dt=Yu(Bt);if(Dt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=I.width-Y&&Q>=0&&Q<=I.height-Z&&z.readPixels(k,Q,Y,Z,gt.convert(he),gt.convert(fe),Mt)}finally{let Bt=X!==null?q.get(X).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(I,k,Q,Y,Z,Mt,Pt,vt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt)if(k>=0&&k<=I.width-Y&&Q>=0&&Q<=I.height-Z){T.bindFramebuffer(z.FRAMEBUFFER,Lt);let Bt=I.textures[vt],he=Bt.format,fe=Bt.type;I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+vt);let Dt=Yu(Bt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Re),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(k,Q,Y,Z,gt.convert(he),gt.convert(fe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let je=X!==null?q.get(X).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,je);let Be=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await hf(z,Be,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Re),z.deleteSync(Be),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,k=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(I.image.width*Y),Mt=Math.floor(I.image.height*Y),Pt=k!==null?k.x:0,vt=k!==null?k.y:0;j.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Pt,vt,Z,Mt),T.unbindTexture()},this.copyTextureToTexture=function(I,k,Q=null,Y=null,Z=0,Mt=0){let Pt,vt,Lt,Bt,he,fe,Dt,Re,je,Be=I.isCompressedTexture?I.mipmaps[Mt]:I.image;if(Q!==null)Pt=Q.max.x-Q.min.x,vt=Q.max.y-Q.min.y,Lt=Q.isBox3?Q.max.z-Q.min.z:1,Bt=Q.min.x,he=Q.min.y,fe=Q.isBox3?Q.min.z:0;else{let Je=Math.pow(2,-Z);Pt=Math.floor(Be.width*Je),vt=Math.floor(Be.height*Je),I.isDataArrayTexture?Lt=Be.depth:I.isData3DTexture?Lt=Math.floor(Be.depth*Je):Lt=1,Bt=0,he=0,fe=0}Y!==null?(Dt=Y.x,Re=Y.y,je=Y.z):(Dt=0,Re=0,je=0);let De=gt.convert(k.format),yn=gt.convert(k.type),Rt;k.isData3DTexture?(j.setTexture3D(k,0),Rt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),Rt=z.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),Rt=z.TEXTURE_2D),T.activeTexture(z.TEXTURE0),T.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Rn=T.getParameter(z.UNPACK_ROW_LENGTH),Se=T.getParameter(z.UNPACK_IMAGE_HEIGHT),$n=T.getParameter(z.UNPACK_SKIP_PIXELS),pi=T.getParameter(z.UNPACK_SKIP_ROWS),Hi=T.getParameter(z.UNPACK_SKIP_IMAGES);T.pixelStorei(z.UNPACK_ROW_LENGTH,Be.width),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Be.height),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Bt),T.pixelStorei(z.UNPACK_SKIP_ROWS,he),T.pixelStorei(z.UNPACK_SKIP_IMAGES,fe);let Os=I.isDataArrayTexture||I.isData3DTexture,Ie=k.isDataArrayTexture||k.isData3DTexture;if(I.isDepthTexture){let Je=q.get(I),Gi=q.get(k),Ue=q.get(Je.__renderTarget),Vi=q.get(Gi.__renderTarget);T.bindFramebuffer(z.READ_FRAMEBUFFER,Ue.__webglFramebuffer),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Bs=0;Bs<Lt;Bs++)Os&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(I).__webglTexture,Z,fe+Bs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Mt,je+Bs)),z.blitFramebuffer(Bt,he,Pt,vt,Dt,Re,Pt,vt,z.DEPTH_BUFFER_BIT,z.NEAREST);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||q.has(I)){let Je=q.get(I),Gi=q.get(k);T.bindFramebuffer(z.READ_FRAMEBUFFER,P),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Ue=0;Ue<Lt;Ue++)Os?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Je.__webglTexture,Z,fe+Ue):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Je.__webglTexture,Z),Ie?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gi.__webglTexture,Mt,je+Ue):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Gi.__webglTexture,Mt),Z!==0?z.blitFramebuffer(Bt,he,Pt,vt,Dt,Re,Pt,vt,z.COLOR_BUFFER_BIT,z.NEAREST):Ie?z.copyTexSubImage3D(Rt,Mt,Dt,Re,je+Ue,Bt,he,Pt,vt):z.copyTexSubImage2D(Rt,Mt,Dt,Re,Bt,he,Pt,vt);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ie?I.isDataTexture||I.isData3DTexture?z.texSubImage3D(Rt,Mt,Dt,Re,je,Pt,vt,Lt,De,yn,Be.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Rt,Mt,Dt,Re,je,Pt,vt,Lt,De,Be.data):z.texSubImage3D(Rt,Mt,Dt,Re,je,Pt,vt,Lt,De,yn,Be):I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,Dt,Re,Pt,vt,De,yn,Be.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,Dt,Re,Be.width,Be.height,De,Be.data):z.texSubImage2D(z.TEXTURE_2D,Mt,Dt,Re,Pt,vt,De,yn,Be);T.pixelStorei(z.UNPACK_ROW_LENGTH,Rn),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),T.pixelStorei(z.UNPACK_SKIP_PIXELS,$n),T.pixelStorei(z.UNPACK_SKIP_ROWS,pi),T.pixelStorei(z.UNPACK_SKIP_IMAGES,Hi),Mt===0&&k.generateMipmaps&&z.generateMipmap(Rt),T.unbindTexture()},this.initRenderTarget=function(I){q.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){U=0,B=0,X=null,T.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Ar=class i extends ${constructor(){let t=i.SkyShader,e=new Ve({name:t.name,uniforms:Mr.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ke,depthWrite:!1});super(new qt(1,1,1),e),this.isSky=!0}};Ar.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Et=Math.PI/180,xu=180/Math.PI,K=(i,t,e)=>i<t?t:i>e?e:i,ci=(i,t,e)=>i+(t-i)*e,Iv=(i,t,e)=>K((e-i)/(t-i),0,1),on=(i,t,e)=>{let n=Iv(i,t,e);return n*n*(3-2*n)};var He=(i,t,e,n)=>{let s=t-i,r=e*n;return Math.abs(s)<=r?t:i+Math.sign(s)*r},Ps=(i,t,e,n)=>ci(i,t,1-Math.exp(-e*n));function Tn(i=1){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function os(i=1){let t=Tn(i),e=new Uint8Array(512),n=new Uint8Array(256);for(let a=0;a<256;a++)n[a]=a;for(let a=255;a>0;a--){let l=Math.floor(t()*(a+1)),c=n[a];n[a]=n[l],n[l]=c}for(let a=0;a<512;a++)e[a]=n[a&255];let s=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return function(l,c){let h=(l+c)*r,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*o,p=l-(u-f),v=c-(d-f),m=p>v?1:0,g=p>v?0:1,S=p-m+o,_=v-g+o,x=p-1+2*o,M=v-1+2*o,b=u&255,w=d&255,y=0,E=0,R=0,A=.5-p*p-v*v;if(A>0){let P=s[e[b+e[w]]&7];A*=A,y=A*A*(P[0]*p+P[1]*v)}let C=.5-S*S-_*_;if(C>0){let P=s[e[b+m+e[w+g]]&7];C*=C,E=C*C*(P[0]*S+P[1]*_)}let L=.5-x*x-M*M;if(L>0){let P=s[e[b+1+e[w+1]]&7];L*=L,R=L*L*(P[0]*x+P[1]*M)}return 70*(y+E+R)}}function Xo(i,t,e,n=5,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*i(t*a,e*a),c+=o,o*=r,a*=s;return l/c}function Zf(i,t,e,n=5,s=2,r=.5){let o=1,a=1,l=0,c=0,h=1;for(let u=0;u<n;u++){let d=1-Math.abs(i(t*a,e*a));d*=d,d*=h,h=K(d*2,0,1),l+=o*d,c+=o,o*=r,a*=s}return l/c}function an(i){let t=i.length,e=i.map(o=>o[0]),n=i.map(o=>o[1]),s=new Array(t-1),r=new Array(t);for(let o=0;o<t-1;o++)s[o]=(n[o+1]-n[o])/(e[o+1]-e[o]);r[0]=s[0],r[t-1]=s[t-2];for(let o=1;o<t-1;o++)s[o-1]*s[o]<=0?r[o]=0:r[o]=(s[o-1]+s[o])/2;for(let o=0;o<t-1;o++){if(s[o]===0){r[o]=0,r[o+1]=0;continue}let a=r[o]/s[o],l=r[o+1]/s[o],c=a*a+l*l;if(c>9){let h=3/Math.sqrt(c);r[o]=h*a*s[o],r[o+1]=h*l*s[o]}}return function(o){if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0,l=t-1;for(;l-a>1;){let f=a+l>>1;e[f]>o?l=f:a=f}let c=e[l]-e[a],h=(o-e[a])/c,u=h*h,d=u*h;return(2*d-3*u+1)*n[a]+(d-2*u+h)*c*r[a]+(-2*d+3*u)*n[l]+(d-u)*c*r[l]}}var fc=class{constructor(t,e,{quality:n="medium"}={}){this.scene=t,this.renderer=e,this.quality=n,this.sunElevation=41*Et,this.sunAzimuth=228*Et,this.sunDir=new D,this._computeSunDir();let s=new Ar;s.scale.setScalar(8e4);let r=s.material.uniforms;r.turbidity.value=4.2,r.rayleigh.value=1.25,r.mieCoefficient.value=.0045,r.mieDirectionalG.value=.82,r.sunPosition.value.copy(this.sunDir).multiplyScalar(1e3),s.frustumCulled=!1,s.renderOrder=-10,t.add(s),this.sky=s,this.fogColor=new bt(.62,.7,.78),this.skyColor=new bt(.35,.5,.7),this.fogDensity=46e-6,t.fog=new eo(this.fogColor.clone(),this.fogDensity);let o=new Po(16773596,3.9);o.castShadow=!0;let a=n==="high"?4096:n==="low"?1024:2048;o.shadow.mapSize.set(a,a);let l=o.shadow.camera;l.left=-22,l.right=22,l.top=22,l.bottom=-22,l.near=1,l.far=3e3,o.shadow.bias=-12e-5,o.shadow.normalBias=.025,o.shadow.radius=2,t.add(o),t.add(o.target),this.sun=o;let c=new To(12439778,6050368,.42);t.add(c),this.hemi=c,this._buildEnvMap(),this.wind={fromDeg:250,speed:4.6,gust:2.2,turb:1},this.noise=os(4242),this.thermals=[],this._windBase=new D,this.updateWindBase()}_computeSunDir(){let t=this.sunElevation,e=this.sunAzimuth;this.sunDir.set(Math.cos(t)*Math.sin(e),Math.sin(t),-Math.cos(t)*Math.cos(e)).normalize()}_buildEnvMap(){let t=new Er(this.renderer),e=new vs,n=new Ar;n.scale.setScalar(1e3);let s=n.material.uniforms,r=this.sky.material.uniforms;for(let l of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])s[l].value=r[l].value;s.sunPosition.value.copy(this.sunDir),s.showSunDisc&&(s.showSunDisc.value=!1),e.add(n);let o=new $(new kn(500,32,16,0,Math.PI*2,Math.PI/2+.02,Math.PI/2),new Ye({color:3881516,side:Ke}));e.add(o);let a=t.fromScene(e,0,.1,2e3);this.envMap=a.texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.55,t.dispose()}updateWindBase(){let t=this.wind.fromDeg*Et;this._windBase.set(-Math.sin(t),0,Math.cos(t)).multiplyScalar(this.wind.speed)}windAt(t,e,n,s,r,o=0){let a=Math.max(0,e-o),l=K(Math.log(1+a/.3)/Math.log(1+100/.3),.25,1.35);r.copy(this._windBase).multiplyScalar(l);let c=this.noise,h=this.wind.gust*(.5+.5*c(s*.07,3.1)),u=this.wind.turb;r.x+=h*c(t/180+s*.35,n/180)*.8+u*c(t/31+s*.9,n/29+e/40)*.6,r.z+=h*c(n/170-s*.31,t/190+9)*.8+u*c(n/33-s*.85,t/27+5)*.6,r.y+=u*.5*c(t/45+7,n/45+s*.6)*K(a/60,.1,1);for(let d of this.thermals){let f=t-d.x,p=n-d.z,v=f*f+p*p,m=d.r*d.r;if(v<m*4&&e<d.top){let g=Math.exp(-v/m);r.y+=d.w*g,r.x+=d.w*.3*g*c(s*2.3+t/20,n/20),r.z+=d.w*.3*g*c(n/20,s*2.1+t/20)}}return r}update(t,e,n){let s=this.sun;s.target.position.copy(e),s.position.copy(e).addScaledVector(this.sunDir,400),s.target.updateMatrixWorld(),this.sky.position.copy(n)}setFogDensity(t){this.fogDensity=t,this.scene.fog.density=t}};function hi(i,t,e=5,n=1,s=.5){let r=new Float32Array(i*i),o=Tn(n),a=1,l=0;for(let c=0;c<e;c++){let h=t<<c,u=new Float32Array(h*h);for(let d=0;d<u.length;d++)u[d]=o();for(let d=0;d<i;d++){let f=d/i*h,p=Math.floor(f),v=f-p,m=v*v*(3-2*v),g=p%h*h,S=(p+1)%h*h;for(let _=0;_<i;_++){let x=_/i*h,M=Math.floor(x),b=x-M,w=b*b*(3-2*b),y=M%h,E=(M+1)%h,R=(u[g+y]*(1-w)+u[g+E]*w)*(1-m)+(u[S+y]*(1-w)+u[S+E]*w)*m;r[d*i+_]+=R*a}}l+=a,a*=s}for(let c=0;c<r.length;c++)r[c]/=l;return r}function $f(i,t,e=2){let n=Tn(e),s=[];for(let c=0;c<t;c++)s.push([n()*i,n()*i,.7+n()*.6]);let r=new Float32Array(i*i),o=Math.ceil(Math.sqrt(t)),a=i/o,l=Array.from({length:o*o},()=>[]);s.forEach((c,h)=>l[Math.floor(c[1]/a)%o*o+Math.floor(c[0]/a)%o].push(h));for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=Math.floor(h/a),d=Math.floor(c/a),f=1e9,p=1e9;for(let v=-1;v<=1;v++)for(let m=-1;m<=1;m++){let g=(u+m+o)%o,S=(d+v+o)%o;for(let _ of l[S*o+g]){let x=s[_],M=Math.abs(h-x[0]),b=Math.abs(c-x[1]);M>i/2&&(M=i-M),b>i/2&&(b=i-b);let w=Math.sqrt(M*M+b*b)/x[2];w<f?(p=f,f=w):w<p&&(p=w)}}r[c*i+h]=Math.min(1,f/a)}return r}function wi(i,t,{repeat:e=!0,srgb:n=!1}={}){let s=new Uint8Array(i*i*4);for(let o=0;o<i*i;o++)for(let a=0;a<4;a++){let l=t[a],c=l===void 0?1:typeof l=="number"?l:l[o];s[o*4+a]=Math.max(0,Math.min(255,Math.round(c*255)))}let r=new Oi(s,i,i,wn);return r.wrapS=r.wrapT=e?_s:Kn,r.magFilter=Xe,r.minFilter=Mi,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=Pe),r.needsUpdate=!0,r}function _u(i,t,e=2){let n=new Float32Array(t*t),s=new Float32Array(t*t),r=new Float32Array(t*t);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=i[o*t+(a-1+t)%t],c=i[o*t+(a+1)%t],h=i[(o-1+t)%t*t+a],u=i[(o+1)%t*t+a],d=(l-c)*e,f=(h-u)*e,p=1,v=1/Math.sqrt(d*d+f*f+p*p),m=o*t+a;n[m]=d*v*.5+.5,s[m]=f*v*.5+.5,r[m]=p*v*.5+.5}return wi(t,[n,s,r,1])}function Jf(i=512,t=7){let e=Tn(t),n=new Float32Array(i*i),s=[];for(let o=0;o<28;o++){let a=Math.round((e()*2-1)*(3+o*.9)),l=Math.round((e()*2-1)*(3+o*.9));if(a===0&&l===0)continue;let c=Math.hypot(a,l);s.push([a,l,1/Math.pow(c,1.15),e()*Math.PI*2])}let r=hi(i,16,4,t+3,.55);for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=0,c=a/i*Math.PI*2,h=o/i*Math.PI*2;for(let u of s){let d=u[0]*c+u[1]*h+u[3];l+=u[2]*(Math.sin(d)+.25*Math.sin(2*d+1))}n[o*i+a]=l*.22+(r[o*i+a]-.5)*.35}return _u(n,i,9)}function Rr(i,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let s=new nn(i);return t&&(s.colorSpace=Pe),s.anisotropy=n,e&&(s.wrapS=s.wrapT=_s),s.needsUpdate=!0,s}function as(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function ls(i=128,{power:t=2.2,noise:e=0,seed:n=5}={}){let s=e>0?hi(i,6,4,n):null,r=new Float32Array(i*i);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=(l+.5)/i*2-1,h=(a+.5)/i*2-1,u=Math.sqrt(c*c+h*h);s&&(u+=(s[a*i+l]-.5)*e);let d=Math.max(0,1-u);r[a*i+l]=Math.pow(d,t)*(u<1?1:0)}return wi(i,[1,1,1,r],{repeat:!1})}function Kf(i=256,t=17){let e=Tn(t),n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d");s.clearRect(0,0,i,i);let r=i/2,o=i/2,a=s.createRadialGradient(r,o,0,r,o,i/2);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(.55,"rgba(255,255,255,0.1)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=a,s.fillRect(0,0,i,i);for(let h=0;h<1400;h++){let u=e()*Math.PI*2,d=Math.pow(e(),.85)*i*.46,f=r+Math.cos(u)*d,p=o+Math.sin(u)*d,v=.6+Math.pow(e(),3)*i*.05,m=Math.min(1,(1-d/(i*.5))*(.5+e()*.8));s.fillStyle=`rgba(255,255,255,${m.toFixed(3)})`,s.beginPath(),s.arc(f,p,v,0,Math.PI*2),s.fill()}let l=s.getImageData(0,0,i,i).data,c=new Float32Array(i*i);for(let h=0;h<i*i;h++)c[h]=l[h*4+3]/255;return wi(i,[1,1,1,c],{repeat:!1})}var Mu=.35,Cr=Math.cos(Mu),Pr=Math.sin(Mu),Te={x:Cr,z:Pr},ve={x:-Pr,z:Cr},Gt={half:12e3,lake:{cx:0,cz:0,a:3400,b:900},runway:{len:1800,wid:30,elev:9,cx:0,cz:0,angle:Mu},apron:{len:260,wid:110},ramp:{wid:24},island:{u:1500,v:170,r:160},fireZones:[]};Gt.runway.cx=-ve.x*1750+Te.x*250;Gt.runway.cz=-ve.z*1750+Te.z*250;Gt.apron.cx=Gt.runway.cx+ve.x*115;Gt.apron.cz=Gt.runway.cz+ve.z*115;Gt.ramp.x0=Gt.apron.cx+ve.x*55;Gt.ramp.z0=Gt.apron.cz+ve.z*55;Gt.ramp.x1=Gt.ramp.x0+ve.x*900;Gt.ramp.z1=Gt.ramp.z0+ve.z*900;Gt.fireZones=[{x:ve.x*2350-Te.x*900,z:ve.z*2350-Te.z*900,size:768,name:"Versante Sud \u2014 Pineta"},{x:ve.x*2700+Te.x*1800,z:ve.z*2700+Te.z*1800,size:768,name:"Collina di Monte Rosso"},{x:-ve.x*2900+Te.x*3300,z:-ve.z*2900+Te.z*3300,size:768,name:"Bosco del Nord-Est"},{x:ve.x*2200-Te.x*4300,z:ve.z*2200-Te.z*4300,size:768,name:"Valle Ovest"}];function Lv(i,t){let e=i-Gt.lake.cx,n=t-Gt.lake.cz;return{u:e*Cr+n*Pr,v:-e*Pr+n*Cr}}function Su(i,t){return{x:Gt.lake.cx+i*Cr-t*Pr,z:Gt.lake.cz+i*Pr+t*Cr}}function vu(i,t,e,n,s,r){let o=s-e,a=r-n,l=K(((i-e)*o+(t-n)*a)/(o*o+a*a),0,1),c=i-(e+o*l),h=t-(n+a*l);return{d:Math.hypot(c,h),t:l}}var yu=class{constructor(t=1415){this.noise=os(t),this.noise2=os(t+11),this.noise3=os(t+23)}lakeE(t,e){let{u:n,v:s}=Lv(t,e),r=Gt.lake,o=Math.sqrt((n/r.a)**2+(s/r.b)**2);o+=.07*this.noise(t/800,e/800)+.03*this.noise2(t/230,e/230);let a=Math.hypot((n+1600)/520,(s-820)/380);return o=Math.min(o,a*.98+.02),{e:o,u:n,v:s}}raw(t,e){let n=this.noise,s=this.noise2,r=this.noise3,{e:o,u:a,v:l}=this.lakeE(t,e),c=on(700,2900,Math.abs(l)+.25*Math.max(0,Math.abs(a)-5500)),h=on(1.05,3.6,o),u=Zf(n,t/3800+10,e/3800-7,5),d=(.18+.82*c)*Math.pow(h,1.25)*(300+520*u),f=38*Xo(s,t/950,e/950,4)+14*Xo(r,t/260,e/260,3)+4*r(t/60,e/60),p=on(1,1.7,o),v=3.5+7*p+(f+22)*p*.75+d,m=-1.5-26*on(.98,.45,o)+2.5*Xo(r,t/400,e/400,3),g;if(o<.97)g=m;else if(o<1.06){let x=on(.97,1.06,o);g=ci(m,v,x)}else g=v;let S=Gt.island,_=Math.hypot(a-S.u,l-S.v)/S.r;return _<1.6&&(g=Math.max(g,ci(14+6*n(t/80,e/80),-3,on(.2,1.4,_)))),g}height(t,e){let n=this.raw(t,e),s=Gt.runway,r=t-s.cx,o=e-s.cz,a=r*Te.x+o*Te.z,l=r*ve.x+o*ve.z,c=1-on(s.len/2+120,s.len/2+420,Math.abs(a)),h=1-on(s.wid/2+70,s.wid/2+260,Math.abs(l-(l>0?Math.min(l,180):0))),u=c*h;u>0&&(n=ci(n,s.elev,u));let d=Gt.ramp,f=vu(t,e,d.x0,d.z0,d.x1,d.z1),p=1-on(d.wid/2+4,d.wid/2+60,f.d);if(p>0){let v=Math.hypot(d.x1-d.x0,d.z1-d.z0),m=f.t*v,g=this._rampShore||(this._rampShore=this._findRampShore()),S=m<g-110?s.elev:ci(s.elev,-3.2,K((m-(g-110))/170,0,1));n=ci(n,S,p)}return n}_findRampShore(){let t=Gt.ramp,e=Math.hypot(t.x1-t.x0,t.z1-t.z0);for(let n=0;n<e;n+=2){let s=t.x0+(t.x1-t.x0)*n/e,r=t.z0+(t.z1-t.z0)*n/e;if(this.raw(s,r)<.5)return n}return e*.7}forest(t,e,n,s){if(n<2.5)return 0;let r=Gt.runway,o=t-r.cx,a=e-r.cz,l=o*Te.x+a*Te.z,c=o*ve.x+a*ve.z;if(Math.abs(l)<r.len/2+450&&c>-260&&c<420)return 0;let h=Gt.ramp;if(vu(t,e,h.x0,h.z0,h.x1,h.z1).d<70)return 0;let u=.55+.6*Xo(this.noise2,t/1400+3,e/1400-5,4)+.25*this.noise3(t/300,e/300);return u*=on(2.5,9,n),u*=1-on(780,1050,n),u*=1-on(.55,.8,s),K(u,0,1)}};function Dv(i,t,e){let n=new Float64Array(i);for(let s=0;s<i;s++){let r=s/(i-1)*2-1,o=Math.abs(r);n[s]=Math.sign(r)*t*(e*o+(1-e)*o*o*o)}return n}function pc(i,t){let e=0,n=i.length-1;if(t<=i[0])return 0;if(t>=i[n])return n-1;for(;n-e>1;){let s=e+n>>1;i[s]>t?n=s:e=s}return e}var gc=class{constructor({quality:t="medium",seed:e=1415}={}){this.hf=new yu(e);let n=t==="low"?360:t==="high"?760:560;this.N=n,this.xs=Dv(n,Gt.half,.3),this.zs=this.xs,this.heights=new Float32Array(n*n);for(let s=0;s<n;s++)for(let r=0;r<n;r++)this.heights[s*n+r]=this.hf.height(this.xs[r],this.zs[s])}heightAt(t,e){let n=this.N,s=this.xs,r=this.zs,o=this.heights,a=pc(s,t),l=pc(r,e),c=K((t-s[a])/(s[a+1]-s[a]),0,1),h=K((e-r[l])/(r[l+1]-r[l]),0,1),u=o[l*n+a],d=o[(l+1)*n+a],f=o[(l+1)*n+a+1],p=o[l*n+a+1];return c+h<=1?u+(p-u)*c+(d-u)*h:f+(d-f)*(1-c)+(p-f)*(1-h)}normalAt(t,e,n=new D){let r=this.heightAt(t+4,e)-this.heightAt(t-4,e),o=this.heightAt(t,e+4)-this.heightAt(t,e-4);return n.set(-r,8,-o).normalize()}isRunway(t,e){let n=Gt.runway,s=t-n.cx,r=e-n.cz,o=s*Te.x+r*Te.z,a=s*ve.x+r*ve.z;if(Math.abs(o)<n.len/2&&Math.abs(a)<n.wid/2+3)return!0;let l=Gt.apron,c=t-l.cx,h=e-l.cz;if(Math.abs(c*Te.x+h*Te.z)<l.len/2&&Math.abs(c*ve.x+h*ve.z)<l.wid/2)return!0;let u=Gt.ramp;return vu(t,e,u.x0,u.z0,u.x1,u.z1).d<u.wid/2||Math.abs(o)<15&&a>0&&a<70}surfaceFriction(t,e){return this.isRunway(t,e)?1:.55}buildMesh(t){let e=this.N,n=new Float32Array(e*e*3),s=new Float32Array(e*e);for(let u=0;u<e;u++)for(let d=0;d<e;d++){let f=u*e+d;n[f*3]=this.xs[d],n[f*3+1]=this.heights[f],n[f*3+2]=this.zs[u]}let r=new xe;r.setAttribute("position",new we(n,3));let o=new Uint32Array((e-1)*(e-1)*6),a=0;for(let u=0;u<e-1;u++)for(let d=0;d<e-1;d++){let f=u*e+d,p=(u+1)*e+d,v=(u+1)*e+d+1,m=u*e+d+1;o[a++]=f,o[a++]=p,o[a++]=m,o[a++]=p,o[a++]=v,o[a++]=m}r.setIndex(new we(o,1)),r.computeVertexNormals();let l=r.attributes.normal.array;for(let u=0;u<e*e;u++)s[u]=this.hf.forest(n[u*3],n[u*3+2],n[u*3+1],1-l[u*3+1]);this.forestGrid=s,r.setAttribute("aForest",new we(s,1)),r.computeBoundingSphere();let c=Fv(t),h=new $(r,c);return h.receiveShadow=!0,h.name="terrain",this.mesh=h,this.material=c,h}forestAt(t,e){let n=this.N,s=pc(this.xs,t),r=pc(this.zs,e);return this.forestGrid?this.forestGrid[r*n+s]:0}},mc=null;function Nv(){if(mc)return mc;let i=512,t=hi(i,8,6,31,.55),e=hi(i,32,3,37,.5),n=$f(i,900,41),s=new Float32Array(i*i);for(let a=0;a<s.length;a++)s[a]=Math.sqrt(Math.max(0,1-n[a]*1.05))*(.7+.6*e[a]);let r=wi(i,[t,e,s,1]),o=_u(s,i,5);return mc={noiseTex:r,crownNormal:o},mc}function Fv(i){let{noiseTex:t,crownNormal:e}=Nv(),n=new be({color:16777215,roughness:.95,metalness:0}),s={tNoise:{value:t},tCrown:{value:e},tBurn:{value:i?i.texture:null},burnRects:{value:i?i.rects:[new ge,new ge,new ge,new ge]},uTime:{value:0}};return n.userData.uniforms=s,n.onBeforeCompile=r=>{Object.assign(r.uniforms,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n}function Qf(i){let t=new Kt;t.name="airfield";let e=Gt.runway,n=(Math.atan2(Te.x,-Te.z)*180/Math.PI+360)%360,s=Math.round(n/10)%36||36,r=(s+17)%36+1,o=16,a=e.wid*o,l=4096,c=as(a,l),h=c.getContext("2d");h.fillStyle="#45433f",h.fillRect(0,0,a,l);let u=Tn(77);for(let V=0;V<26e3;V++){let ot=40+u()*30;h.fillStyle=`rgba(${ot},${ot},${ot+2},${.25+u()*.3})`,h.fillRect(u()*a,u()*l,1+u()*3,1+u()*3)}for(let V=0;V<2;V++)for(let ot=0;ot<260;ot++){let rt=V===0?300+u()*900:l-300-u()*900,yt=a/2+(u()-.5)*8*o;h.fillStyle=`rgba(15,15,15,${.08+u()*.12})`,h.fillRect(yt,rt,2+u()*4,60+u()*200)}let d=l/e.len;h.fillStyle="#e8e8e2",h.fillRect(.5*o,0,.9*o,l),h.fillRect(a-1.4*o,0,.9*o,l);for(let V=70;V<e.len-70;V+=50)V>110&&V<e.len-110&&h.fillRect(a/2-.45*o,V*d,.9*o,30*d);let f=(V,ot)=>{h.save(),V&&(h.translate(a,l),h.rotate(Math.PI));for(let rt=0;rt<12;rt++){let yt=2.5*o+rt*2.1*o+(rt>=6?3.2*o:0);h.fillRect(yt,6*d,1.5*o,30*d)}h.font=`bold ${Math.round(9*d)}px Arial`,h.textAlign="center",h.textBaseline="middle",h.save(),h.translate(a/2,62*d),h.rotate(Math.PI),h.scale(1.6,2.4),h.fillText(String(ot).padStart(2,"0"),0,0),h.restore();for(let rt of[150,300,450])h.fillRect(a/2-9*o,rt*d,1.8*o,22*d),h.fillRect(a/2+7.2*o,rt*d,1.8*o,22*d);h.fillRect(a/2-10*o,300*d,4*o,45*d),h.fillRect(a/2+6*o,300*d,4*o,45*d),h.restore()};f(!1,r),f(!0,s);let p=Rr(c,{srgb:!0,aniso:16}),v=new ke(e.wid,e.len,1,64);v.rotateX(-Math.PI/2);let m=new be({map:p,roughness:.88,metalness:0}),g=new $(v,m);g.receiveShadow=!0,g.position.set(e.cx,e.elev+.07,e.cz),g.rotation.y=Math.atan2(-Te.x,-Te.z),t.add(g);let S=as(512,512),_=S.getContext("2d");_.fillStyle="#8d8c86",_.fillRect(0,0,512,512);for(let V=0;V<9e3;V++){let ot=120+u()*40;_.fillStyle=`rgba(${ot},${ot},${ot-4},0.35)`,_.fillRect(u()*512,u()*512,2,2)}_.strokeStyle="rgba(60,60,58,0.7)",_.lineWidth=2;for(let V=0;V<=512;V+=64)_.beginPath(),_.moveTo(V,0),_.lineTo(V,512),_.stroke(),_.beginPath(),_.moveTo(0,V),_.lineTo(512,V),_.stroke();let x=Rr(S,{srgb:!0,repeat:!0});x.repeat.set(Gt.apron.len/40,Gt.apron.wid/40);let M=new be({map:x,roughness:.92}),b=Gt.apron,w=new ke(b.len,b.wid);w.rotateX(-Math.PI/2);let y=new $(w,M);y.position.set(b.cx,e.elev+.06,b.cz),y.rotation.y=g.rotation.y+Math.PI/2,y.receiveShadow=!0,t.add(y);let E=new ke(22,72);E.rotateX(-Math.PI/2);let R=new $(E,M.clone());R.material.map=x.clone(),R.material.map.repeat.set(.6,2),R.position.set(e.cx+ve.x*52,e.elev+.055,e.cz+ve.z*52),R.rotation.y=g.rotation.y+Math.PI/2,R.receiveShadow=!0,t.add(R);let A=Gt.ramp,C=Math.hypot(A.x1-A.x0,A.z1-A.z0),L=90,P=new ke(A.wid,C,1,L);P.rotateX(-Math.PI/2);let F=P.attributes.position,U=Math.atan2(ve.x,ve.z),B=Math.cos(U),X=Math.sin(U);for(let V=0;V<F.count;V++){let ot=F.getX(V),yt=.5-F.getZ(V)/C,It=A.x0+(A.x1-A.x0)*yt+ot*ve.z,Vt=A.z0+(A.z1-A.z0)*yt-ot*ve.x;F.setXYZ(V,It,i.heightAt(It,Vt)+.08,Vt)}P.computeVertexNormals();let O=M.clone();O.map=x.clone(),O.map.repeat.set(1,C/30);let H=new $(P,O);return H.receiveShadow=!0,t.add(H),Uv(t,i,g.rotation.y),t}function Uv(i,t,e){let n=Gt.runway,s=(M,b,w)=>{let y=n.cx+Te.x*b+ve.x*w,E=n.cz+Te.z*b+ve.z*w;return M.position.set(y,n.elev,E),M.rotation.y=e,i.add(M),M},r=new be({color:14209732,roughness:.85}),o=new be({color:8007458,roughness:.7}),a=new be({color:11186357,roughness:.45,metalness:.6}),l=new be({color:2764080,roughness:.6}),c=new be({color:11541782,roughness:.5}),h=new be({color:2240576,roughness:.1,metalness:.8});for(let M=0;M<2;M++){let b=new Kt,w=new ce(18,18,40,28,1,!0,-Math.PI/2,Math.PI);w.rotateZ(Math.PI/2),w.scale(1,.62,1);let y=new $(w,a);y.rotation.y=Math.PI/2,y.castShadow=!0,y.receiveShadow=!0,b.add(y);let E=new $(new _n(18,28,0,Math.PI),r);E.scale.y=.62,E.position.z=20,E.rotation.y=Math.PI,b.add(E);let R=new $(new ke(30,10),l);R.position.set(0,5,-20),R.rotation.y=Math.PI,b.add(R),s(b,-125+M*46,205).rotation.y=e+Math.PI/2}let u=new Kt,d=new $(new qt(6,14,6),r);d.position.y=7,d.castShadow=!0,u.add(d);let f=new $(new ce(4.6,4,3.4,8),h);f.position.y=15.7,u.add(f);let p=new $(new ce(5.2,5.2,.6,8),l);p.position.y=17.7,u.add(p),s(u,55,200);let v=new Kt,m=new $(new qt(36,7,16),r);m.position.y=3.5,m.castShadow=!0,v.add(m);let g=new $(new qt(37,.6,17),o);g.position.y=7.3,v.add(g);for(let M=0;M<4;M++){let b=new $(new ke(6,5),c);b.position.set(-12+M*8,2.6,-8.05),b.rotation.y=Math.PI,v.add(b)}s(v,120,190);for(let M=0;M<2;M++){let b=new $(new ce(4,4,7,20),new be({color:14737628,roughness:.5}));b.position.y=3.5,b.castShadow=!0;let w=new Kt;w.add(b),s(w,170+M*11,215)}let S=new Kt,_=new $(new ce(.08,.1,6,6),a);_.position.y=3,S.add(_);let x=new $(new ys(.45,3.2,12,1,!0),new be({color:16734746,roughness:.8,side:Qe}));x.rotation.z=Math.PI/2,x.position.set(1.7,5.8,0),S.add(x),S.userData.sock=x,s(S,-n.len/2+250,-45),i.userData.windsock=S}var Dn=400;function qo(i,t){let e=i.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){let r=t(e.getX(s),e.getY(s),e.getZ(s),s);n[s*3]=r[0],n[s*3+1]=r[1],n[s*3+2]=r[2]}return i.setAttribute("color",new we(n,3)),i}function bu(i){let t=i.map(l=>l.index?l.toNonIndexed():l),e=0;t.forEach(l=>e+=l.attributes.position.count);let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),s.set(l.attributes.normal.array,o*3),r.set(l.attributes.color.array,o*3),o+=l.attributes.position.count;let a=new xe;return a.setAttribute("position",new we(n,3)),a.setAttribute("normal",new we(s,3)),a.setAttribute("color",new we(r,3)),a.computeBoundingSphere(),a}function xc(i,t,e){let n=Tn(e),s=i.attributes.position,r=new Map;for(let o=0;o<s.count;o++){let a=`${s.getX(o).toFixed(3)},${s.getY(o).toFixed(3)},${s.getZ(o).toFixed(3)}`,l=r.get(a);l||(l=[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t],r.set(a,l)),s.setXYZ(o,s.getX(o)+l[0],s.getY(o)+l[1],s.getZ(o)+l[2])}return i.computeVertexNormals(),i}var Ov=[.11,.07,.04];function wu(i,t,e){let n=new ce(e,t,i,5,1,!0);return n.translate(0,i/2,0),qo(n,()=>Ov)}function _c(i,t=.25){return(e,n,s,r)=>{let o=.75+t*Math.sin(r*12.9898)*.5+.25*K(n/10,0,1);return[i[0]*o,i[1]*o,i[2]*o]}}function Bv(){let i=wu(7.2,.32,.2),t=new kn(1,8,5);t.scale(4.4,1.55,4),t.translate(.3,8,0),xc(t,.9,3),qo(t,_c([.035,.065,.02]));let e=new kn(1,7,4);return e.scale(2.6,1.1,2.4),e.translate(-1.9,7.3,1.1),xc(e,.6,4),qo(e,_c([.03,.06,.018])),bu([i,t,e])}function zv(){let t=[wu(3,.25,.18)];return[[2.5,4.6,2.2],[2,4,5],[1.35,3.4,7.6],[.7,2.6,9.8]].forEach(([n,s,r],o)=>{let a=new ys(n,s,7,1,!0);a.translate(0,r,0),xc(a,.35,10+o),qo(a,_c([.022,.05,.022],.35)),t.push(a)}),bu(t)}function kv(){let t=[wu(3.6,.3,.22)];return[[0,5.2,0,2.9],[1.6,4.6,.9,2.1],[-1.4,4.4,-.8,2.2],[.3,6.4,-.6,1.9]].forEach(([n,s,r,o],a)=>{let l=new Mo(o,1);l.translate(n,s,r),xc(l,.7,20+a),qo(l,_c([.04,.06,.02],.35)),t.push(l)}),bu(t)}var vc=class{constructor(t,e,{quality:n="medium"}={}){this.terrain=t,this.radius=n==="low"?800:n==="high"?2200:1500,this.maxPerType=n==="low"?9e3:n==="high"?45e3:26e3,this.chunks=new Map,this.noise=os(99),this.time={value:0},this.burnFn=null;let s=[Bv(),zv(),kv()];this.meshes=s.map((r,o)=>{let a=new wo({vertexColors:!0});a.onBeforeCompile=c=>{c.uniforms.uTime=this.time,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
            #ifdef USE_INSTANCING
              vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
              float sway = sin(uTime * 1.3 + ip.x * 0.05 + ip.z * 0.04) * 0.5 + sin(uTime * 2.7 + ip.x * 0.11) * 0.25;
              float hh = max(position.y - 2.5, 0.0) / 9.0;
              transformed.x += sway * hh * hh * 0.35;
              transformed.z += sway * hh * hh * 0.2;
            #endif`)};let l=new ao(r,a,this.maxPerType);return l.count=0,l.frustumCulled=!1,l.instanceMatrix.setUsage(jn),l.setColorAt(0,new bt(1,1,1)),l.instanceColor.setUsage(jn),l.name="trees"+o,e.add(l),l}),this.lastCenter=new D(1e9,0,1e9),this.visible=[[],[],[]],this._m=new ye,this._q=new en,this._s=new D,this._p=new D,this._c=new bt,this._pending=[]}_genChunk(t,e){let n=t+","+e,s=this.chunks.get(n);if(s)return s;let r=Tn(t*73856093^e*19349663),o=[],a=9.5,l=t*Dn,c=e*Dn,h=this.terrain;for(let u=0;u<Dn;u+=a)for(let d=0;d<Dn;d+=a){let f=l+d+(r()-.5)*a*.9,p=c+u+(r()-.5)*a*.9,v=h.forestAt(f,p);if(v<=.02)continue;let m=K(v*1.25+.25*this.noise(f/60,p/60),0,1);if(r()>m)continue;let g=h.heightAt(f,p);if(g<2.5)continue;let S=this.noise(f/700+5,p/700),_=0,x=r();g>350||S>.35?_=x<.7?1:2:S<-.25?_=x<.75?2:0:_=x<.6?0:x<.8?2:1;let M=.7+r()*.65;o.push({x:f,y:g-.2,z:p,type:_,s:M,rot:r()*Math.PI*2,tint:.8+r()*.45,hue:r(),rank:r()})}return s={list:o},this.chunks.set(n,s),s}update(t,e,n=!1){this.time.value+=e;let s=t.x-this.lastCenter.x,r=t.z-this.lastCenter.z,o=K(1+(t.y-300)/1500,1,2.2);if(!n&&s*s+r*r<19600&&Math.abs(o-(this._altF||1))<.2)return;this._altF=o,this.lastCenter.copy(t);let a=this.radius*o,l=Math.floor((t.x-a)/Dn),c=Math.floor((t.x+a)/Dn),h=Math.floor((t.z-a)/Dn),u=Math.floor((t.z+a)/Dn),d=[0,0,0],f=[[],[],[]],p=Gt.half-200;for(let v=h;v<=u;v++)for(let m=l;m<=c;m++){if(Math.abs(m*Dn)>p||Math.abs(v*Dn)>p)continue;let g=(m+.5)*Dn-t.x,S=(v+.5)*Dn-t.z;if(g*g+S*S>(a+Dn)*(a+Dn))continue;let _=this._genChunk(m,v);for(let x of _.list){let M=Math.hypot(x.x-t.x,x.z-t.z);if(M>a)continue;let b=M<a*.3?1:1-(M-a*.3)/(a*.7)*.8;x.rank>b||f[x.type].push(x)}}for(let v=0;v<3;v++){let m=f[v];m.length>this.maxPerType&&(m.sort((S,_)=>(S.x-t.x)**2+(S.z-t.z)**2-((_.x-t.x)**2+(_.z-t.z)**2)),m=m.slice(0,this.maxPerType)),this.visible[v]=m;let g=this.meshes[v];for(let S=0;S<m.length;S++){let _=m[S];this._q.setFromAxisAngle(qe.DEFAULT_UP,_.rot),this._s.set(_.s,_.s*(.9+_.hue*.25),_.s),this._p.set(_.x,_.y,_.z),this._m.compose(this._p,this._q,this._s),g.setMatrixAt(S,this._m)}g.count=m.length,g.instanceMatrix.needsUpdate=!0,d[v]=m.length}this.refreshColors(),this.counts=d}refreshColors(){for(let t=0;t<3;t++){let e=this.visible[t],n=this.meshes[t];for(let s=0;s<e.length;s++){let r=e[s],o=this.burnFn?this.burnFn(r.x,r.z):0,a=r.tint*(1-o*.93);this._c.setRGB(a*(.9+.2*r.hue),a,a*(.85+.2*(1-r.hue))),n.setColorAt(s,this._c)}n.instanceColor&&(n.instanceColor.needsUpdate=!0)}}};var Yo=class i extends ${constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new bt(e.color):new bt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Bn,u=new D,d=new D,f=new D,p=new ye,v=new D(0,0,-1),m=new ge,g=new D,S=new D,_=new ge,x=new ye,M=new bn(r,o,{samples:c,type:Gn}),b=new Ve({name:l.name!==void 0?l.name:"unspecified",uniforms:Mr.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=M.texture,b.uniforms.color.value=s,b.uniforms.textureMatrix.value=x,this.material=b,this.onBeforeRender=function(w,y,E){let R=this.getReflectionCamera(E);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),p.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),g.subVectors(d,f),g.dot(u)>0===!0&&this.forceUpdate===!1)return;g.reflect(u).negate(),g.add(d),p.extractRotation(E.matrixWorld),v.set(0,0,-1),v.applyMatrix4(p),v.add(f),S.subVectors(d,v),S.reflect(u).negate(),S.add(d),R.position.copy(g),R.up.set(0,1,0),R.up.applyMatrix4(p),R.up.reflect(u),R.lookAt(S),R.far=E.far,R.updateMatrixWorld(),R.projectionMatrix.copy(E.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(R.projectionMatrix),x.multiply(R.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let C=R.projectionMatrix;R.isOrthographicCamera?(_.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],_.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],_.z=-E.far,_.w=1):(_.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],_.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],_.z=-1,_.w=(1+C.elements[10])/C.elements[14]),m.multiplyScalar(2/m.dot(_)),C.elements[2]=m.x,C.elements[6]=m.y,R.isOrthographicCamera?(C.elements[10]=m.z-a,C.elements[14]=m.w-1):(C.elements[10]=m.z+1-a,C.elements[14]=m.w),n.visible=!1;let L=w.getRenderTarget(),P=w.xr.enabled,F=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(M),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(y,R),w.xr.enabled=P,w.shadowMap.autoUpdate=F,w.setRenderTarget(L);let U=E.viewport;U!==void 0&&w.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()},this.getReflectionCamera=function(w){let y=this._reflectionCameras.get(w);return y===void 0&&(y=w.clone(),this._reflectionCameras.set(w,y)),y}}};Yo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Eu=class{constructor(){this.amp=.09,this.waves=[{kx:.52,kz:.21,a:.45,w:2.2,p:0},{kx:.31,kz:-.44,a:.3,w:1.7,p:1.3},{kx:.95,kz:.6,a:.15,w:3,p:2.1},{kx:-.2,kz:.83,a:.1,w:2.8,p:.6}]}height(t,e,n){let s=0;for(let r of this.waves)s+=r.a*Math.sin(r.kx*t+r.kz*e-r.w*n+r.p);return s*this.amp}},yc=class{constructor({terrain:t,sunDir:e,quality:n="medium",renderer:s}){this.waves=new Eu;let r=Gt.lake,o=2*(r.a+900),a=new ke(o,o,1,1),l=n==="low"?.35:n==="high"?.75:.5,c=Math.round(window.innerWidth*l*Math.min(window.devicePixelRatio,1.5)),h=Math.round(window.innerHeight*l*Math.min(window.devicePixelRatio,1.5)),u=512,d=new Float32Array(u*u),f=r.cx-o/2,p=r.cz-o/2;for(let x=0;x<u;x++)for(let M=0;M<u;M++){let b=f+(M+.5)/u*o,w=p+(x+.5)/u*o,y=t.heightAt(b,w);d[x*u+M]=Math.max(0,Math.min(1,-y/25))}let v=wi(u,[d,0,0,1],{repeat:!1});v.flipY=!1,v.needsUpdate=!0;let m=hi(256,16,4,91,.6),g=wi(256,[m,m,m,1]);this.normalTex=Jf(512,7);let S={name:"LakeWater",uniforms:{color:{value:new bt},tDiffuse:{value:null},textureMatrix:{value:null},tNormal:{value:this.normalTex},tDepth:{value:v},tFoam:{value:g},depthRect:{value:new ge(f,p,1/o,1/o)},uTime:{value:0},sunDir:{value:e.clone()},sunColor:{value:new bt(1,.93,.82).multiplyScalar(3.2)},skyColor:{value:new bt(.32,.45,.6)},deepColor:{value:new bt(.006,.03,.035)},shallowColor:{value:new bt(.06,.13,.11)},windDir:{value:new ct(.86,.5)},fogColor:{value:new bt(.6,.68,.75)},fogDensity:{value:5e-5},reflStrength:{value:1}},vertexShader:`
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
        }`},_=new Yo(a,{textureWidth:c,textureHeight:h,clipBias:.02,shader:S,multisample:n==="high"?4:0});_.rotation.x=-Math.PI/2,_.position.set(r.cx,0,r.cz),_.material.transparent=!0,_.material.depthWrite=!0,_.renderOrder=1,_.name="water",this.mesh=_,this.uniforms=_.material.uniforms}heightAt(t,e,n){return this.waves.height(t,e,n)}update(t,e,n){let s=this.uniforms;s.uTime.value=e,n&&(s.sunDir.value.copy(n.sunDir),s.fogColor.value.copy(n.fogColor),s.fogDensity.value=n.fogDensity,s.skyColor.value.copy(n.skyColor))}setSize(t,e,n){let s=n==="low"?.35:n==="high"?.75:.5,r=Math.min(window.devicePixelRatio,1.5);this.mesh.getRenderTarget().setSize(Math.round(t*s*r),Math.round(e*s*r))}};var Hv=(()=>{let i=new Io;return i.setAttribute("position",new Zt([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),i.setAttribute("uv",new Zt([0,0,1,0,1,1,0,1],2)),i.setIndex([0,1,2,0,2,3]),i})(),Ei=class{constructor({max:t=2e3,texture:e,blending:n="normal",lit:s=0,sort:r=!1,stretch:o=0,renderOrder:a=5,name:l="particles",depthTest:c=!0,fog:h=!0,emissive:u=0,growth:d=.5,nearFade:f=0}){this.growth=d,this.max=t,this.n=0,this.sort=r;let p=(g=1)=>new Float32Array(t*g);this.p=p(3),this.v=p(3),this.age=p(),this.life=p(),this.s0=p(),this.s1=p(),this.a0=p(),this.col=p(3),this.rot=p(),this.rotV=p(),this.drag=p(),this.grav=p(),this.fadeIn=p(),this.user=p(),this.user2=p();let v=Hv.clone();this.aPos=new Bi(new Float32Array(t*3),3).setUsage(jn),this.aCol=new Bi(new Float32Array(t*4),4).setUsage(jn),this.aExt=new Bi(new Float32Array(t*4),4).setUsage(jn),v.setAttribute("iPos",this.aPos),v.setAttribute("iCol",this.aCol),v.setAttribute("iExt",this.aExt),v.instanceCount=0,this.geometry=v,this.uniforms={map:{value:e},sunDirView:{value:new D(0,1,0)},sunColor:{value:new bt(1,.96,.9)},ambColor:{value:new bt(.55,.62,.72)},lit:{value:s},stretch:{value:o},emissive:{value:u},fogColor:{value:new bt},fogDensity:{value:0},nearFade:{value:f}};let m=new Ve({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Qe,depthTest:c,blending:n==="additive"?Es:ns,vertexShader:`
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
        }`});this.material=m,this.mesh=new $(v,m),this.mesh.frustumCulled=!1,this.mesh.renderOrder=a,this.mesh.name=l,this._order=new Uint32Array(t),this._depth=new Float32Array(t),this._v=new D}spawn(t,e,n,s,r,o,{life:a=2,size0:l=1,size1:c=2,alpha:h=1,r:u=1,g:d=1,b:f=1,rot:p=Math.random()*6.28,rotV:v=0,drag:m=.5,grav:g=0,fadeIn:S=.1,user:_=0,user2:x=0}={}){if(this.n>=this.max)return-1;let M=this.n++;return this.p[M*3]=t,this.p[M*3+1]=e,this.p[M*3+2]=n,this.v[M*3]=s,this.v[M*3+1]=r,this.v[M*3+2]=o,this.age[M]=0,this.life[M]=a,this.s0[M]=l,this.s1[M]=c,this.a0[M]=h,this.col[M*3]=u,this.col[M*3+1]=d,this.col[M*3+2]=f,this.rot[M]=p,this.rotV[M]=v,this.drag[M]=m,this.grav[M]=g,this.fadeIn[M]=S,this.user[M]=_,this.user2[M]=x,M}kill(t){let e=--this.n;if(t===e)return;let n=s=>{s[t*3]=s[e*3],s[t*3+1]=s[e*3+1],s[t*3+2]=s[e*3+2]};n(this.p),n(this.v),n(this.col),this.age[t]=this.age[e],this.life[t]=this.life[e],this.s0[t]=this.s0[e],this.s1[t]=this.s1[e],this.a0[t]=this.a0[e],this.rot[t]=this.rot[e],this.rotV[t]=this.rotV[e],this.drag[t]=this.drag[e],this.grav[t]=this.grav[e],this.fadeIn[t]=this.fadeIn[e],this.user[t]=this.user[e],this.user2[t]=this.user2[e]}simulate(t,e,n,s){let r=this.p,o=this.v,a=e?e.x:0,l=e?e.y:0,c=e?e.z:0;for(let h=this.n-1;h>=0;h--){if(this.age[h]+=t,this.age[h]>=this.life[h]){this.kill(h);continue}let u=Math.min(1,this.drag[h]*t);if(o[h*3]+=(a-o[h*3])*u,o[h*3+1]+=(l-o[h*3+1])*u+this.grav[h]*t,o[h*3+2]+=(c-o[h*3+2])*u,r[h*3]+=o[h*3]*t,r[h*3+1]+=o[h*3+1]*t,r[h*3+2]+=o[h*3+2]*t,this.rot[h]+=this.rotV[h]*t,n){let d=n(r[h*3],r[h*3+2]);if(r[h*3+1]<d&&(!s||s(h,d))){this.kill(h);continue}}}}upload(t,e){let n=this.n,s=this.aPos.array,r=this.aCol.array,o=this.aExt.array,a=t.matrixWorldInverse.elements,l=null;if(this.sort&&n>1){l=this._order;let h=this._depth;for(let d=0;d<n;d++){let f=this.p[d*3],p=this.p[d*3+1],v=this.p[d*3+2];h[d]=a[2]*f+a[6]*p+a[10]*v+a[14],l[d]=d}l.subarray(0,n).sort((d,f)=>h[d]-h[f])}let c=this.uniforms.stretch.value>0;for(let h=0;h<n;h++){let u=l?l[h]:h,d=this.age[u]/this.life[u];s[h*3]=this.p[u*3],s[h*3+1]=this.p[u*3+1],s[h*3+2]=this.p[u*3+2];let f=this.a0[u],p=this.fadeIn[u];d<p&&(f*=d/p),f*=e?e(d,u):1-d*d,r[h*4]=this.col[u*3],r[h*4+1]=this.col[u*3+1],r[h*4+2]=this.col[u*3+2],r[h*4+3]=f;let v=this.s0[u]+(this.s1[u]-this.s0[u])*(this.growth===.5?Math.sqrt(d):Math.pow(d,this.growth));if(o[h*4]=v,o[h*4+1]=this.rot[u],c){let m=this.v[u*3],g=this.v[u*3+1],S=this.v[u*3+2],_=a[0]*m+a[4]*g+a[8]*S,x=a[1]*m+a[5]*g+a[9]*S;o[h*4+2]=_*.02,o[h*4+3]=x*.02}else o[h*4+2]=0,o[h*4+3]=0}this.geometry.instanceCount=n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aExt.needsUpdate=!0,this.aPos.clearUpdateRanges&&this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange&&(this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange(0,n*3),this.aCol.clearUpdateRanges(),this.aCol.addUpdateRange(0,n*4),this.aExt.clearUpdateRanges(),this.aExt.addUpdateRange(0,n*4))}setLighting(t,e,n,s,r){this._v.copy(t).transformDirection(e.matrixWorldInverse),this.uniforms.sunDirView.value.copy(this._v),n&&this.uniforms.sunColor.value.copy(n),s&&this.uniforms.ambColor.value.copy(s),r&&(this.uniforms.fogColor.value.copy(r.color),this.uniforms.fogDensity.value=r.density)}};var Qt=96,Me=Math.random;function Gv(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128),s=hi(128,8,4,71,.55);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=(a+.5)/128*2-1,c=(o+.5)/128,h=.25+.6*Math.pow(c,.7),u=Math.max(0,1-Math.abs(l)/h);u*=Math.pow(c,.6)*(1-Math.pow(c,6)),u*=.6+.8*s[o*128+a],u=Math.min(1,u*1.4);let d=(o*128+a)*4,f=Math.pow(c,2)*(1-Math.abs(l));n.data[d]=255,n.data[d+1]=120+135*f,n.data[d+2]=40+160*f*f,n.data[d+3]=u*255}e.putImageData(n,0,0);let r=new nn(t);return r.colorSpace=Pe,r}var Mc=class{constructor(t,e,n,{quality:s="medium"}={}){this.terrain=e,this.env=n;let r=s==="low"?.5:s==="high"?1.4:1;this.q=r,this.zones=Gt.fireZones.map((o,a)=>{let l=o.size,c=l/Qt,h=o.x-l/2,u=o.z-l/2,d=new Float32Array(Qt*Qt),f=new Float32Array(Qt*Qt),p=new Float32Array(Qt*Qt),v=new Float32Array(Qt*Qt),m=new Float32Array(Qt*Qt),g=new Float32Array(Qt*Qt);for(let S=0;S<Qt;S++)for(let _=0;_<Qt;_++){let x=h+(_+.5)*c,M=u+(S+.5)*c,b=e.forestAt(x,M),w=e.heightAt(x,M);g[S*Qt+_]=w,d[S*Qt+_]=w<1?0:K(.25+.85*b,0,1)}return{...o,k:a,size:l,cell:c,x0:h,z0:u,fuel:d,heat:f,burnt:p,wet:v,foam:m,hgt:g,active:!1,burning:0,burntCells:0,state:"quiete",cx:o.x,cz:o.z,intensity:0,ignitedAt:-1}}),this.atlasData=new Uint8Array(2*Qt*2*Qt*4),this.atlas=new Oi(this.atlasData,2*Qt,2*Qt,wn),this.atlas.magFilter=Xe,this.atlas.minFilter=Xe,this.atlas.needsUpdate=!0,this.rects=this.zones.map(o=>new ge(o.x0,o.z0,o.size,o.k)),this.fireAtlas={texture:this.atlas,rects:this.rects},this.flames=new Ei({max:Math.round(3200*r),texture:Gv(),blending:"additive",name:"flames",renderOrder:8,emissive:0}),this.smoke=new Ei({max:Math.round(2600*Math.max(r,.7)),texture:ls(128,{power:1.25,noise:.45,seed:21}),lit:1,sort:!0,name:"smoke",renderOrder:9,growth:.85,nearFade:1.2}),this.embers=new Ei({max:Math.round(700*r),texture:ls(32,{power:2}),blending:"additive",name:"embers",renderOrder:8}),t.add(this.flames.mesh,this.smoke.mesh,this.embers.mesh),this.tick=0,this.time=0,this.texTimer=0,this.wind=new D,this.events=[],this.totalWater=0,this.effectiveWater=0}ignite(t,e,n,s=30){let r=this.zones[t];r.active=!0,r.ignitedAt<0&&(r.ignitedAt=this.time);let o=Math.floor((e-r.x0)/r.cell),a=Math.floor((n-r.z0)/r.cell),l=Math.ceil(s/r.cell);for(let c=a-l;c<=a+l;c++)for(let h=o-l;h<=o+l;h++){if(h<1||c<1||h>=Qt-1||c>=Qt-1||Math.hypot(h-o,c-a)>l)continue;let u=c*Qt+h;r.fuel[u]>.1&&(r.heat[u]=Math.max(r.heat[u],.4+Me()*.4))}}start(t=1){let e=this.zones[0];this.ignite(0,e.x-60,e.z+80,45),this.ignite(0,e.x+50,e.z+120,25);let n=this.zones[1];this.ignite(1,n.x,n.z,35),this.nextIgnition=300}cellAt(t,e){for(let n of this.zones){let s=Math.floor((t-n.x0)/n.cell),r=Math.floor((e-n.z0)/n.cell);if(s>=0&&r>=0&&s<Qt&&r<Qt)return{Z:n,c:r*Qt+s,i:s,j:r}}return null}burntAt(t,e){let n=this.cellAt(t,e);return n?Math.max(n.Z.burnt[n.c],n.Z.heat[n.c]>.5?.6:0):0}deposit(t,e,n,s){this.totalWater+=n;let r=this.cellAt(t,e);if(!r)return;let{Z:o}=r,a=o.cell*o.cell;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=r.i+c,u=r.j+l;if(h<0||u<0||h>=Qt||u>=Qt)continue;let d=c===0&&l===0?.4:.075,f=u*Qt+h,p=n*d/a,v=s?2.4:1;o.wet[f]=Math.min(1.5,o.wet[f]+p/2.5*v),s&&(o.foam[f]=Math.min(1,o.foam[f]+p*.5)),o.heat[f]>0&&(this.effectiveWater+=n*d,o.heat[f]=Math.max(0,o.heat[f]-p/2*v*1.3),Me()<.3&&this._steam(o,f))}}_cellPos(t,e){let n=e%Qt,s=Math.floor(e/Qt);return[t.x0+(n+Me())*t.cell,t.hgt[e],t.z0+(s+Me())*t.cell]}_steam(t,e){let[n,s,r]=this._cellPos(t,e);this.smoke.spawn(n,s+3,r,this.wind.x*.5,3+Me()*3,this.wind.z*.5,{life:10+Me()*8,size0:8,size1:40+Me()*20,alpha:.35,r:.86,g:.86,b:.86,drag:.3,grav:0,fadeIn:.05,user:.3})}update(t,e,n){this.time=e,this.env.windAt(0,200,0,e,this.wind);let s=this.wind,r=Math.hypot(s.x,s.z)||1,o=s.x/r,a=s.z/r;this.tick+=t;let l=[];if(this.tick>=.25){let d=this.tick;this.tick=0;for(let f of this.zones){if(!f.active)continue;let p=0,v=0,m=0,g=0,S=0,_=f.list||(f.list=new Int32Array(Qt*Qt)),x=0,M=f.heat,b=f.fuel,w=f.wet,y=f.burnt,E=f.hgt,R=this._next||(this._next=new Float32Array(Qt*Qt));R.set(M);for(let C=1;C<Qt-1;C++)for(let L=1;L<Qt-1;L++){let P=C*Qt+L;w[P]>0&&(w[P]=Math.max(0,w[P]-d*(.0018+M[P]*.02)*(f.foam[P]>.2?.4:1))),y[P]>.5&&v++;let F=M[P];if(F<=.01)continue;p++,F>.08&&(_[x++]=P),m+=L*F,g+=C*F,S+=F;let U=b[P]*(1-K(w[P]*1.4,0,1)),B=F+(U-F)*d*.25;b[P]=Math.max(0,b[P]-F*d*.006),y[P]=Math.min(1,y[P]+F*d*.05),b[P]<.05&&(B*=1-d*.5),w[P]>.3&&(B-=d*.2*w[P]),R[P]=Math.max(0,B);for(let X=-1;X<=1;X++)for(let O=-1;O<=1;O++){if(!O&&!X)continue;let H=P+X*Qt+O;if(M[H]>.05||b[H]<.12||w[H]>.25)continue;let V=Math.hypot(O,X),ot=(O*o+X*a)/V,rt=(E[H]-E[P])/(V*f.cell),yt=.018*F*b[H]*Math.exp(1.2*ot*K(r/5,.3,2.5))*Math.exp(K(rt,-.5,.8)*3)*(1-w[H]*3)/V;Me()<yt*d*4&&(R[H]=Math.max(R[H],.15+.2*Me()))}}M.set(R),f.burning=p,f.nList=x,f.burntCells=v,S>0&&(f.cx=f.x0+(m/S+.5)*f.cell,f.cz=f.z0+(g/S+.5)*f.cell),f.intensity=S;let A=f.state;S>45&&(f.wasActive=!0),f.state=p===0?v>0?"spento":"quiete":S<15&&f.wasActive?"contenuto":"attivo",A!==f.state&&(f.state==="spento"||f.state==="contenuto")&&this.events.push({type:"fire",text:`${f.name}: incendio ${f.state.toUpperCase()}`,level:f.state==="spento"?"good":"info"}),p===0&&(f.active=v>0?!1:f.active)}if(this._uploadAtlas(),this.nextIgnition!==void 0&&e>this.nextIgnition){let f=this.zones.filter(p=>!p.active&&p.burntCells===0);if(f.length){let p=f[Math.floor(Me()*f.length)];this.ignite(p.k,p.x+(Me()-.5)*200,p.z+(Me()-.5)*200,30),this.events.push({type:"fire",text:`NUOVO FOCOLAIO: ${p.name}`,level:"warn"})}this.nextIgnition=e+360+Me()*240}}for(let d of this.zones)d.intensity>2&&l.push({x:d.cx,z:d.cz,r:120+Math.sqrt(d.intensity)*15,w:K(d.intensity*.06,1,9),top:d.hgt[Qt*Qt>>1]+900});this.env.thermals=l;let c=(d,f)=>Math.hypot(d-n.x,f-n.z);for(let d of this.zones){if(!d.burning)continue;let f=c(d.cx,d.cz),p=f>7e3?.15:f>3500?.4:1;if(!d.nList)continue;let v=Math.min(900,d.burning*3.2)*this.q*p,m=Math.floor(v*t+Me());for(;m-- >0;){let _=d.list[Me()*d.nList|0],x=d.heat[_];if(x<.05)continue;let[M,b,w]=this._cellPos(d,_),y=3+x*9*(.6+Me()*.8);this.flames.spawn(M,b+y*.35,w,s.x*.2,2.5+Me()*3*x,s.z*.2,{life:.6+Me()*.9,size0:y*.6,size1:y,alpha:.75+Me()*.25,r:1,g:.55+Me()*.25,b:.25,drag:.5,grav:2,fadeIn:.15,rot:(Me()-.5)*.3}),Me()<.05&&this.embers.spawn(M,b+2,w,s.x*.5+(Me()-.5)*3,4+Me()*8,s.z*.5+(Me()-.5)*3,{life:2+Me()*3,size0:.35,size1:.2,alpha:1,r:1,g:.5,b:.12,drag:.6,grav:-1})}let g=Math.min(22,3+d.intensity*.2)*Math.max(.6,this.q)*(p<1?.6:1),S=Math.floor(g*t+Me());for(;S-- >0;){let _=d.list[Me()*d.nList|0],x=Math.max(d.heat[_],.1),[M,b,w]=this._cellPos(d,_),E=.78-K(x*.8+(1-d.fuel[_])*.2,0,1)*.3+Me()*.08;this.smoke.spawn(M,b+10,w,s.x*.4,6+x*10+Me()*3,s.z*.4,{life:70+Me()*40,size0:16+Me()*12,size1:200+Me()*160,alpha:.55+x*.25,r:E*1.04,g:E,b:E*.93,drag:.08,grav:0,fadeIn:.04,rotV:(Me()-.5)*.05,user:.6+x*.6})}}let h=this.smoke;for(let d=0;d<h.n;d++)h.v[d*3+1]+=t*1.7*Math.max(0,1-h.age[d]/80)*h.user[d];let u=this._windUp||(this._windUp=new D);u.set(s.x*1.25,0,s.z*1.25),h.simulate(t,u,null),this.flames.simulate(t,s,null),this.embers.simulate(t,s,null)}_uploadAtlas(){let t=this.atlasData,e=2*Qt;for(let n of this.zones){let s=n.k%2*Qt,r=Math.floor(n.k/2)*Qt;for(let o=0;o<Qt;o++)for(let a=0;a<Qt;a++){let l=o*Qt+a,c=((r+o)*e+s+a)*4;t[c]=Math.min(255,n.burnt[l]*255),t[c+1]=Math.min(255,n.heat[l]*255),t[c+2]=Math.min(255,n.wet[l]*200),t[c+3]=Math.min(255,n.foam[l]*255)}}this.atlas.needsUpdate=!0}render(t,e){let n=new bt(1,.92,.82).multiplyScalar(1.7),s=new bt(.7,.75,.84);this.smoke.setLighting(e.sunDir,t,n,s,e.scene.fog),this.flames.setLighting(e.sunDir,t,null,null,e.scene.fog),this.embers.setLighting(e.sunDir,t,null,null,e.scene.fog),this.smoke.upload(t,r=>Math.min(1,r*15)*(1-Math.max(0,(r-.5)/.5)**1.5)),this.flames.upload(t,r=>Math.sin(Math.PI*r)),this.embers.upload(t,r=>1-r)}summary(){let t=0,e=0,n=0;for(let s of this.zones)t+=s.burning,e+=s.burntCells*s.cell*s.cell/1e4,s.burning&&n++;return{burning:t,burntHa:e,active:n,zones:this.zones.map(s=>({name:s.name,state:s.state,x:s.cx,z:s.cz,burning:s.burning,intensity:s.intensity}))}}};var te={name:"Canadair CL-415",length:19.82,span:28.6,height:8.98,wingArea:100.33,chord:3.51,aspect:28.6*28.6/100.33,emptyMass:12900,maxFuel:4650,waterCapacity:6137,foamCapacity:680,mtowLand:19890,mtowWater:17168,maxAfterScoop:21319,enginePower:1775e3,propDiameter:3.97,propRPM:1200,propBlades:4,vmo:200,vfe:{10:165,15:145,25:125},vScoopMin:60,vScoopMax:95,vProbeMax:105,flapDetents:[0,10,15,25]},nt={L:19.82,sCG:7.95,hCG:2.2,sStep:8.95,wing:{sLE:6.9,chord:3.51,h:3.78,rootY:1.3,halfSpan:14.3,incidence:2*Et,flapStart:1.35,flapEnd:9.85,ailStart:10.05,ailEnd:13.75,hingeX:.72},engine:{y:3.95,sProp:4.25,h:4.65,sNacEnd:11.6},float:{y:11.4,sFront:6.75,sBack:10.55,hBottom:1.55,width:.78,height:.82},htail:{sLE:16.45,rootChord:2.55,tipChord:1.7,halfSpan:5.6,h:5.05,sweepLE:1,elevHinge:.62,finletY:3.05},vtail:{sRootLE:14,rootChord:5.4,hRoot:3.15,hTip:8.25,sTipLE:17.55,tipChord:2.15,rudderHinge:.66},gear:{nose:{s:2.55,pivotH:.62,legLen:1.08,wheelR:.33,track:.42},main:{s:9.35,pivotY:1.24,pivotH:.6,wheelY:2.32,wheelH:-.32,wheelR:.5,width:.34}},probe:{s:9.32,y:.42,hExt:-.42},doors:[{s:6.95,y:-.36},{s:6.95,y:.36},{s:8.05,y:-.36},{s:8.05,y:.36}],doorSize:{len:.92,wid:.5},tanksH:.95,tankS:7.6};function fn(i,t,e=0,n={x:0,y:0,z:0}){return n.x=e,n.y=t-nt.hCG,n.z=i-nt.sCG,n}var Vv=an([[0,1.3],[.22,.86],[.55,.52],[1,.29],[1.6,.13],[2.4,.04],[3.4,0],[nt.sStep,0]]),Wv=an([[nt.sStep,.24],[12,.62],[15,1.02],[16.6,1.27],[18,1.72],[19.2,2.32],[19.82,2.62]]);function Ze(i){return i<nt.sStep?Vv(i):Wv(i)}var Oe=an([[0,1.3],[.12,1.66],[.4,2.08],[.85,2.42],[1.15,2.54],[2.05,3.2],[2.6,3.4],[3.4,3.5],[12,3.5],[13.6,3.43],[15.5,3.28],[17.5,3.16],[19,3.07],[19.82,3.02]]),cs=an([[0,0],[.06,.2],[.28,.5],[.7,.84],[1.2,1.08],[2,1.21],[3,1.28],[4,1.3],[11.6,1.3],[13,1.24],[14.5,1.08],[16,.86],[17.5,.62],[18.8,.4],[19.82,.15]]),Xv=an([[0,52],[1,38],[2.5,27],[5,22],[nt.sStep,20]]),qv=an([[nt.sStep,22],[14,26],[17,30],[19.82,36]]);function ui(i){return(i<nt.sStep?Xv(i):qv(i))*Et}function Zo(i){let t=Ze(i),e=cs(i),n=Oe(i);return Math.min(t+e*Math.tan(ui(i)),n-.08)}function jf(i,t=22,e=9){let n=Ze(i),s=Oe(i),r=Math.max(cs(i),5e-4),o=Zo(i),a=Math.max(s-o,.01),l=Math.min(1.25,a*.48),c=s-l,h=[],u=Math.round(t*.7),d=t-u,f=2/2.7;for(let m=0;m<=u;m++){let g=m/u*(Math.PI/2),S=Math.pow(Math.sin(g),f),_=Math.pow(Math.cos(g),f);h.push([r*S,c+l*_])}for(let m=1;m<=d;m++){let g=m/d,S=c+(o-c)*g,_=.035*Math.pow(g,6)*K(r/.6,0,1);h.push([r+_,S])}let p=[],v=r+.035*K(r/.6,0,1);for(let m=0;m<=e;m++){let S=1-m/e,_=v*S,x=n+(o-n)*(S-.07*S*(1-S));p.push([_,x])}return{roof:h,bottom:p,keel:n,top:s,chine:o,halfBeam:r}}function hs(i,t,e,n=24,s=!0){let r=[],o=[];for(let l=0;l<=n;l++){let c=l/n*Math.PI,h=(1-Math.cos(c))/2,u=5*e*(.2969*Math.sqrt(h)-.126*h-.3516*h*h+.2843*h**3-(s?.1036:.1015)*h**4),d=0,f=0;i>0&&(h<t?(d=i/(t*t)*(2*t*h-h*h),f=2*i/(t*t)*(t-h)):(d=i/(1-t)**2*(1-2*t+2*t*h-h*h),f=2*i/(1-t)**2*(t-h)));let p=Math.atan(f);r.push([h-u*Math.sin(p),d+u*Math.cos(p)]),o.push([h+u*Math.sin(p),d-u*Math.cos(p)])}let a=[];for(let l=n;l>=0;l--)a.push(r[l]);for(let l=1;l<=n;l++)a.push(o[l]);return a}function ki(i,t,e,n=!1){let s=(i.length-1)/2,r=i.slice(0,s+1).reverse(),o=i.slice(s),a=(h,u)=>{for(let d=1;d<h.length;d++)if(h[d][0]>=u){let f=h[d-1],p=h[d],v=(u-f[0])/(p[0]-f[0]||1);return f[1]+(p[1]-f[1])*v}return h[h.length-1][1]},l=[],c=10;for(let h=c;h>=0;h--){let u=t+(e-t)*h/c;l.push([u,a(r,u)])}if(n){let h=a(r,t),u=a(o,t),d=(h+u)/2,f=(h-u)/2;for(let p=1;p<6;p++){let v=Math.PI/2+p/6*Math.PI;l.push([t+Math.cos(v)*f*.9,d+Math.sin(v)*f])}}else{let h=a(r,t),u=a(o,t);for(let d=1;d<4;d++)l.push([t,h+(u-h)*d/4])}for(let h=0;h<=c;h++){let u=t+(e-t)*h/c;l.push([u,a(o,u)])}return l}function Is(i,{closed:t=!1,capStart:e=!1,capEnd:n=!1,uvU:s=null,uvV:r=null,flip:o=!1}={}){let a=i.length,l=i[0].length,c=[],h=[];for(let v=0;v<a;v++)for(let m=0;m<l;m++){let g=i[v][m];c.push(g.x,g.y,g.z),h.push(s?s[v]:v/(a-1),r?r[m]:m/(l-1))}let u=[],d=t?l:l-1;for(let v=0;v<a-1;v++)for(let m=0;m<d;m++){let g=(m+1)%l,S=v*l+m,_=(v+1)*l+m,x=(v+1)*l+g,M=v*l+g;o?u.push(S,M,_,_,M,x):u.push(S,_,M,_,x,M)}let f=(v,m)=>{let g=new D;i[v].forEach(_=>g.add(_)),g.divideScalar(l);let S=c.length/3;c.push(g.x,g.y,g.z),h.push(s?s[v]:v/(a-1),.5);for(let _=0;_<d;_++){let x=v*l+_,M=v*l+(_+1)%l;m!==o?u.push(S,x,M):u.push(S,M,x)}};e&&f(0,!1),n&&f(a-1,!0);let p=new xe;return p.setAttribute("position",new Zt(c,3)),p.setAttribute("uv",new Zt(h,2)),p.setIndex(u),p.computeVertexNormals(),p}function Ti(i,t,{chordDir:e,upDir:n,uvU:s=null,capStart:r=!1,capEnd:o=!0,foilV:a=null,flip:l=!1}={}){let c=t.map(u=>{let d=e.clone(),f=n.clone();if(u.twist){let v=new D().crossVectors(d,f).normalize();d.applyAxisAngle(v,u.twist),f.applyAxisAngle(v,u.twist)}return(u.foil||i).map(([v,m])=>u.le.clone().addScaledVector(d,v*u.chord).addScaledVector(f,m*u.chord*(u.thick||1)))}),h=a;if(!h){let u=t[0].foil||i,d=(u.length-1)/2;h=u.map((f,p)=>p<=d?.5-.5*f[0]:.5+.5*f[0])}return Is(c,{uvU:s,uvV:h,capStart:r,capEnd:o,flip:l})}function tp(i,t=24,e=0){let n=i.map(([r,o])=>new ct(Math.max(r,1e-4),o)),s=new So(n,t,e);return s.rotateX(Math.PI/2),s}function $o(i){let t=i.clone();t.scale(-1,1,1);let e=t.index;if(e){let n=e.array;for(let s=0;s<n.length;s+=3){let r=n[s+1];n[s+1]=n[s+2],n[s+2]=r}e.needsUpdate=!0}return t.computeVertexNormals(),t}function us(i){let t=0,e=0;for(let h of i)t+=h.attributes.position.count,e+=h.index?h.index.count:h.attributes.position.count;let n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=new Uint32Array(e),a=0,l=0;for(let h of i){let u=h.attributes.position.count;if(n.set(h.attributes.position.array,a*3),h.attributes.normal&&s.set(h.attributes.normal.array,a*3),h.attributes.uv&&r.set(h.attributes.uv.array,a*2),h.index){let d=h.index.array;for(let f=0;f<d.length;f++)o[l+f]=d[f]+a;l+=d.length}else{for(let d=0;d<u;d++)o[l+d]=d+a;l+=u}a+=u}let c=new xe;return c.setAttribute("position",new we(n,3)),c.setAttribute("normal",new we(s,3)),c.setAttribute("uv",new we(r,2)),c.setIndex(new we(o,1)),c.computeBoundingSphere(),c}function An(i,t,e,n=e,s=8,r=1){let o=new D().subVectors(t,i),a=o.length(),l=new ce(n,e,a,s,1,!1);l.scale(r,1,1),l.translate(0,a/2,0);let c=new en().setFromUnitVectors(new D(0,1,0),o.normalize());return l.applyQuaternion(c),l.translate(i.x,i.y,i.z),l}var ep={roof:40,bottom:10};function Jo(i,t,e,n=0){let s=Math.abs(t),r=Oe(i);if(i>1.2-n&&i<2.02+n){let a=.93-(i-1.2)*.1+n;if(s>.032-n&&s<a&&e>r-.75)return 1}if(i>1.32-n&&i<2.04+n){let a=.93-(i-1.2)*.1+.075-n;if(s>a&&e>2.43-n&&e<r-.04+n)return 5}let o=cs(i);if(s>o*.62){let a=Math.min(r-.3,3.18)+n;if(e>2.43-n&&e<a){if(i>2.13-n&&i<2.66+n)return 2;if(i>2.74-n&&i<3.3+n&&e<a-.03)return 3}}return i>2.12-n&&i<2.6+n&&s>.42-n&&s<.78+n&&e>r-.2?4:0}function np(i){let t=jf(i,ep.roof,ep.bottom);return{roof:t.roof,bottom:t.bottom,sec:t}}function Ls(i){let{roof:t,bottom:e}=np(i),n=t.concat(e),s=[0];for(let o=1;o<n.length;o++)s.push(s[o-1]+Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1]));let r=s[s.length-1]||1;return{pts:n,t:s.map(o=>o/r),nRoof:t.length,total:r}}function Sc(i,t){let{pts:e,t:n}=Ls(i);if(t>=e[0][1])return 0;for(let s=1;s<e.length;s++)if(e[s][1]<=t){let r=e[s-1],o=e[s],a=(r[1]-t)/(r[1]-o[1]||1);return n[s-1]+(n[s]-n[s-1])*a}return 1}function bc(i,t){let{pts:e,t:n}=Ls(i);for(let s=1;s<e.length;s++)if(e[s][0]>=t){let r=e[s-1],o=e[s],a=(t-r[0])/(o[0]-r[0]||1);return n[s-1]+(n[s]-n[s-1])*a}return n[n.length-1]}function Ko(i,t){let{pts:e,t:n}=i;for(let s=1;s<e.length;s++)if(n[s]>=t){let r=(t-n[s-1])/(n[s]-n[s-1]||1);return[e[s-1][0]+(e[s][0]-e[s-1][0])*r,e[s-1][1]+(e[s][1]-e[s-1][1])*r]}return e[e.length-1]}function Yv(i=0,t=nt.L){let e=[],n=(s,r,o)=>{for(let a=s;a<r-1e-6;a+=o)a>=i-1e-6&&a<=t+1e-6&&e.push(a)};return n(0,.12,.02),n(.12,.6,.04),n(.6,3.6,.045),n(3.6,8.9,.18),n(8.9,9,.05),n(9,15.4,.22),n(15.4,nt.L,.12),e[e.length-1]<Math.min(t,nt.L)-1e-4&&e.push(Math.min(t,nt.L)),i>0&&e[0]>i+1e-4&&e.unshift(i),e}function Qo({s0:i=0,s1:t=nt.L,inset:e=0,inside:n=!1,cutWindows:s=!0,collectGlass:r=!1,glassMargin:o=0}={}){let a=Yv(i,t),l=nt.L,c=[],h={pos:[],idx:[]};for(let d of[1,-1])for(let f of["roof","bottom"]){let p=[],v=[],m=[],g=[],S=0;for(let M of a){let b=Ls(M),w=np(M),y=f==="roof"?w.roof:w.bottom,E=f==="roof"?0:b.nRoof;S=y.length;for(let R=0;R<y.length;R++){let[A,C]=y[R];if(e){let P=y[Math.max(0,R-1)],F=y[Math.min(y.length-1,R+1)],U=F[1]-P[1],B=-(F[0]-P[0]),X=Math.hypot(U,B)||1;U/=X,B/=X,A-=U*e,C-=B*e,A<0&&(A=0)}let L=b.t[E+R];p.push(d*A,C-nt.hCG,M-nt.sCG),g.push([M,A,C]),v.push(M/l,d>0?.5*L:1-.5*L)}}let _=a.length;for(let M=0;M<_-1;M++)for(let b=0;b<S-1;b++){let w=M*S+b,y=(M+1)*S+b,E=(M+1)*S+b+1,R=M*S+b+1,A=0,C=0;if(s||r){let P=g[w],F=g[E],U=(P[0]+F[0])/2,B=(P[1]+F[1])/2,X=(P[2]+F[2])/2;A=Jo(U,B,X),C=o?Jo(U,B,X,o):A}let L=d>0?[w,y,R,y,E,R]:[w,R,y,y,R,E];if(n&&(L=[L[0],L[2],L[1],L[3],L[5],L[4]]),C&&r){let P=h.pos.length/3,F=new Map,U=[];for(let B of L)F.has(B)||(F.set(B,P+F.size),h.pos.push(p[B*3],p[B*3+1],p[B*3+2])),U.push(F.get(B));h.idx.push(...U)}A&&s||m.push(...L)}let x=new xe;x.setAttribute("position",new Zt(p,3)),x.setAttribute("uv",new Zt(v,2)),x.setIndex(m),x.computeVertexNormals(),c.push(x)}let u=null;return r&&h.pos.length&&(u=new xe,u.setAttribute("position",new Zt(h.pos,3)),u.setIndex(h.idx),u.computeVertexNormals()),{strips:c,glassGeo:u}}var We={yellow:"#f4b000",yellowDark:"#d9a400",red:"#c3141e",white:"#f4f2ea",black:"#17181a",glass:"#0d1418",frame:"#1d1f22"},Tu=an([[0,2.2],[.55,2.3],[1.15,2.08],[2,1.72],[3.1,1.46],[6,1.4],[10.6,1.4],[13,1.72],[15.5,2.22],[17.6,2.66],[19.82,2.95]]);function Zv(i,t=2.2){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=as(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=a.data,c=(u,d)=>s[((d+n)%n*e+(u+e)%e)*4]/255;for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=(c(d-1,u)-c(d+1,u))*t,p=(c(d,u-1)-c(d,u+1))*t,v=1/Math.sqrt(f*f+p*p+1),m=(u*e+d)*4;l[m]=(f*v*.5+.5)*255,l[m+1]=(-p*v*.5+.5)*255,l[m+2]=(v*.5+.5)*255,l[m+3]=255}o.putImageData(a,0,0);let h=new nn(r);return h.colorSpace=li,h.anisotropy=8,h}function ip({quality:i="medium",number:t="21",reg:e="I-SUSA",text:n="ANTINCENDIO"}={}){let s=i==="high"?4096:i==="low"?1024:2048,r=s/2,o=nt.L,a=as(s,r),l=a.getContext("2d"),c=as(s,r),h=c.getContext("2d");h.fillStyle="rgb(128,128,128)",h.fillRect(0,0,s,r);let u=A=>A/o*s,d=new Map,f=(A,C)=>{let L=Math.round(A*1e3)+":"+Math.round(C*1e3),P=d.get(L);return P===void 0&&(P=Sc(A,C),d.set(L,P)),P},p=(A,C)=>A<0?C*r/2:r-C*r/2,v=(A,C,L)=>p(A,f(C,L)),m=[-1,1];l.fillStyle=We.yellow,l.fillRect(0,0,s,r);let g=.04;l.fillStyle=We.red;for(let A of m){l.beginPath(),l.moveTo(u(0),p(A,1));for(let C=0;C<=o+1e-6;C+=g)l.lineTo(u(C),v(A,C,Tu(C)));l.lineTo(u(o),p(A,1)),l.closePath(),l.fill()}let S=(A,C,L,P,F)=>{l.fillStyle=L;for(let U of m){l.beginPath();for(let B=P;B<=F+1e-6;B+=g)l.lineTo(u(B),v(U,B,Tu(B)+C));for(let B=F;B>=P-1e-6;B-=g)l.lineTo(u(B),v(U,B,Tu(B)+A));l.closePath(),l.fill()}};S(.025,.085,We.white,.75,o),S(.28,.36,We.red,3.4,17.6),l.fillStyle=We.black;for(let A of m){l.beginPath(),l.moveTo(u(.32),p(A,0));for(let C=.32;C<=1.24;C+=.02){let L=on(.32,.6,C);l.lineTo(u(C),p(A,bc(C,cs(C)*(.25+.55*L))))}l.lineTo(u(1.24),p(A,0)),l.closePath(),l.fill()}{let A=Math.floor(u(.95)),C=Math.ceil(u(3.55)),L=l.getImageData(A,0,C-A,r),P=h.getImageData(A,0,C-A,r),F=L.data,U=P.data,B=[29,31,34],X=[13,20,24];for(let O=A;O<C;O++){let H=(O+.5)/s*o,V=Ls(H);for(let ot=0;ot<r;ot++){let rt=ot<r/2?(ot+.5)/(r/2):(r-ot-.5)/(r/2);if(rt>.75)continue;let[yt,It]=Ko(V,rt);if(!Jo(H,yt,It,.075))continue;let J=Jo(H,yt,It,0),tt=J?X:B,ht=(ot*(C-A)+(O-A))*4;F[ht]=tt[0],F[ht+1]=tt[1],F[ht+2]=tt[2];let zt=J?128:100;U[ht]=U[ht+1]=U[ht+2]=zt}}l.putImageData(L,A,0),h.putImageData(P,A,0)}let _=(A,C,L,P)=>{A.strokeStyle=L,A.lineWidth=P,A.beginPath(),C.forEach(([F,U],B)=>B?A.lineTo(F,U):A.moveTo(F,U)),A.stroke()},x=s/o,M=Math.max(1,x*.006);for(let A of m){for(let P=3.7;P<18.6;P+=.53){let F=[];for(let U=.03;U<=.97;U+=.02)F.push([u(P),p(A,U)]);_(l,F,"rgba(40,30,0,0.16)",M),_(h,F,"rgb(96,96,96)",M*1.4);for(let U=.05;U<.95;U+=.012)h.fillStyle="rgb(150,150,150)",h.fillRect(u(P)+M*2,p(A,U),M*.9,M*.9),h.fillRect(u(P)-M*2.5,p(A,U),M*.9,M*.9)}for(let P of[3.05,2.45,.95]){let F=[];for(let U=2.6;U<18.5;U+=.1)P>Ze(U)+.2&&P<3.3&&F.push([u(U),v(A,U,P)]);F.length>2&&(_(l,F,"rgba(40,30,0,0.12)",M),_(h,F,"rgb(100,100,100)",M*1.3))}let C=[];for(let P=.4;P<o;P+=.05)C.push([u(P),v(A,P,Zo(P)+.004)]);_(l,C,"rgba(60,0,0,0.45)",M*1.5),_(h,C,"rgb(150,150,150)",M*2);let L=[];for(let P=.6;P<=1;P+=.01)L.push([u(nt.sStep),p(A,P)]);_(l,L,"rgba(20,0,0,0.6)",M*3),_(h,L,"rgb(60,60,60)",M*3)}let b=(A,C,L,P,F,U,B,X,O=!0)=>{let H=[],V=(rt,yt,It)=>{for(let Vt=0;Vt<=6;Vt++){let J=It+Vt/6*(Math.PI/2);H.push([rt+Math.cos(J)*U,yt+Math.sin(J)*U])}};V(L-U,F-U,0),V(C+U,F-U,Math.PI/2),V(C+U,P+U,Math.PI),V(L-U,P+U,3*Math.PI/2);let ot=H.map(([rt,yt])=>[u(rt),v(A,rt,yt)]);X&&(l.fillStyle=X,l.beginPath(),ot.forEach(([rt,yt],It)=>It?l.lineTo(rt,yt):l.moveTo(rt,yt)),l.closePath(),l.fill()),l.strokeStyle=B,l.lineWidth=M*2.2,l.beginPath(),ot.forEach(([rt,yt],It)=>It?l.lineTo(rt,yt):l.moveTo(rt,yt)),l.closePath(),l.stroke(),O&&(h.strokeStyle="rgb(70,70,70)",h.lineWidth=M*2.5,h.beginPath(),ot.forEach(([rt,yt],It)=>It?h.lineTo(rt,yt):h.moveTo(rt,yt)),h.closePath(),h.stroke())};b(-1,3.58,4.42,1.22,2.92,.12,"rgba(25,20,10,0.75)"),b(-1,3.86,4.16,2.25,2.62,.05,We.frame,We.glass,!1),b(-1,12.05,12.9,1.32,2.72,.1,"rgba(25,20,10,0.75)");for(let A of m){b(A,5.05,5.62,1.95,2.72,.08,"rgba(25,20,10,0.7)"),b(A,5.18,5.5,2.25,2.55,.06,We.frame,We.glass,!1);for(let C of[7,9.6,14.6])b(A,C,C+.32,2.42,2.72,.07,We.frame,We.glass,!1)}b(1,12.1,12.9,1.4,2.6,.1,"rgba(25,20,10,0.7)");for(let A of m)b(A,8.72,9.98,1.28,2.5,.25,"rgba(10,10,10,0.9)","#2a2a2a");l.fillStyle="rgba(40,0,0,0.0)";for(let A of nt.doors){let C=A.y<0?-1:1,L=A.s-nt.doorSize.len/2,P=A.s+nt.doorSize.len/2,F=Math.abs(A.y)-nt.doorSize.wid/2,U=Math.abs(A.y)+nt.doorSize.wid/2,B=[],X=(O,H)=>Ze(O)+H*Math.tan(ui(O));for(let[O,H]of[[L,F],[P,F],[P,U],[L,U],[L,F]])B.push([u(O),v(C,O,X(O,H))]);_(l,B,"rgba(20,0,0,0.85)",M*2.5),_(h,B,"rgb(60,60,60)",M*3)}for(let A of m){let C=nt.probe.s,L=nt.probe.y,P=Ze(C)+L*Math.tan(ui(C));l.fillStyle="rgba(15,10,10,0.9)";let F=u(C-.22),U=v(A,C,P+.05);l.fillRect(F,Math.min(U,v(A,C,P-.05)),u(.44),Math.abs(v(A,C,P-.05)-U)+2)}let w=(A,C,L,P,F,U,{stroke:B=null,font:X="900",family:O="Arial Black, Arial, sans-serif",widthScale:H=1}={})=>{let V=u(L),ot=v(A,L,P),rt=Math.abs(v(A,L,P+.05)-v(A,L,P-.05))/.1,yt=F*rt;l.save(),l.translate(V,ot),A>0&&l.rotate(Math.PI),l.scale(x/rt*H,1),l.font=`${X} ${yt*1.33}px ${O}`,l.textAlign="center",l.textBaseline="middle",B&&(l.lineWidth=yt*.08,l.strokeStyle=B,l.strokeText(C,0,0)),l.fillStyle=U,l.fillText(C,0,0),l.restore()};for(let A of m){w(A,n,8.55,2.06,.5,We.red,{stroke:"rgba(90,0,0,0.6)",widthScale:.95}),w(A,t,16.9,2.85,.62,We.black,{widthScale:.9}),w(A,e,14,2.68,.2,We.black,{font:"bold",family:"Arial, sans-serif"}),w(A,"SOCCORSO",1.85,1.68,.11,We.white,{font:"bold",family:"Arial, sans-serif"});let C=15.15,L=2.5,P=["#0b8a3e","#f4f2ea","#c8102e"];for(let F=0;F<3;F++){let U=C+F*.13*(A>0?-1:1);l.fillStyle=P[F];let B=v(A,U,L+.12),X=v(A,U,L-.12);l.fillRect(u(Math.min(U,U+.13*(A>0?-1:1))),Math.min(B,X),u(.13),Math.abs(X-B))}}let y=Tn(1234);l.globalCompositeOperation="multiply";for(let A=0;A<700;A++){let C=y()<.5?-1:1,L=1+y()*17.5,P=.55+y()*.45,F=u(L),U=p(C,P),B=.03+y()*.06;l.fillStyle=`rgba(${120+y()*60},${110+y()*50},${100+y()*40},${B})`,l.fillRect(F,U-(C<0?0:1)*0,2+y()*x*.8,(C<0?1:-1)*(x*(.1+y()*.5)))}for(let A of m)for(let C=.8;C<18;C+=.02){let L=Ze(C)+.85+Math.sin(C*5.3)*.06;if(L>3)continue;let P=v(A,C,L);l.fillStyle=`rgba(150,150,140,${.05+.05*y()})`,l.fillRect(u(C),P-2,x*.03,4+y()*6)}l.globalCompositeOperation="source-over";for(let A=0;A<2500;A++)l.fillStyle=`rgba(${y()<.5?"255,255,255":"0,0,0"},${.012+y()*.02})`,l.fillRect(y()*s,y()*r,4+y()*x*.6,4+y()*x*.4);let E=Rr(a,{srgb:!0,aniso:8}),R=Zv(c,2.5);return{map:E,normalMap:R,canvas:a}}function sp({quality:i="medium"}={}){let t=i==="high"?2048:1024,e=i==="high"?512:256,n=nt.wing.halfSpan,s=nt.wing.chord,r=as(t,e),o=r.getContext("2d"),a=o.createImageData(t,e),l=a.data,c=_=>[parseInt(_.slice(1,3),16),parseInt(_.slice(3,5),16),parseInt(_.slice(5,7),16)],h=c(We.yellow),u=c(We.red),d=c(We.white),f=[38,39,38],p=Math.tan(30*Math.PI/180),v=Tn(77);for(let _=0;_<e;_++){let x=1-(_+.5)/e,M=x<.5,b=M?1-2*x:2*x-1;for(let w=0;w<t;w++){let y=(w+.5)/t*n,E=h,R=(b-.5)*s*p,A=y-(10.75+R);A>-.6&&A<.6&&(E=Math.abs(A)<.2?d:u),y>13.15+R*.6&&(E=u),M&&y>1.35&&y<2.9&&b>.12&&b<.62&&(E=f);let C=1;if(M){let P=nt.engine.y+.62+(b-.35)*.25,F=.18+b*.55,U=Math.abs(y-P);b>.3&&U<F&&(C*=1-.5*(1-U/F)*on(.3,.7,b))}let L=(_*t+w)*4;l[L]=E[0]*C,l[L+1]=E[1]*C,l[L+2]=E[2]*C,l[L+3]=255}}o.putImageData(a,0,0);let m=_=>_/n*t,g=(_,x)=>_?(1-(.5-.5*x))*e:(1-(.5+.5*x))*e;o.strokeStyle="rgba(40,30,0,0.28)",o.lineWidth=1;for(let _ of[!0,!1]){for(let x of[.12,.62,.715])o.beginPath(),o.moveTo(0,g(_,x)),o.lineTo(t,g(_,x)),o.stroke();for(let x=1.3;x<n;x+=.58)o.beginPath(),o.moveTo(m(x),g(_,.02)),o.lineTo(m(x),g(_,.98)),o.stroke()}o.fillStyle="rgba(30,30,30,0.6)";for(let _ of[5.6,8.4])o.beginPath(),o.arc(m(_),g(!0,.4),3,0,Math.PI*2),o.fill();return Rr(r,{srgb:!0,aniso:8})}var Ct=(i,t,e=0)=>new D(e,t-nt.hCG,i-nt.sCG),Ds=class{constructor(t,e,n){this.pivot=new Kt,this.pivot.position.copy(e),this.axis=new D().subVectors(n,e).normalize(),this.origin=e.clone(),t.add(this.pivot),this.angle=0}add(t){return t.geometry.translate(-this.origin.x,-this.origin.y,-this.origin.z),this.pivot.add(t),t}set(t){t!==this.angle&&(this.angle=t,this.pivot.quaternion.setFromAxisAngle(this.axis,t))}};function Ir(i,t=10){let n=i.length-2*(t+1);return i.map(([s],r)=>r<=t?.5-.5*s:r<t+1+n?.5:.5+.5*s)}var wc=class{constructor({quality:t="medium"}={}){this.quality=t,this.group=new Kt,this.group.name="CL415",this.time=0,this._mats(),this._fuselage(),this._wing(),this._nacelles(),this._tail(),this._floats(),this._gear(),this._probesDoors(),this._lights(),this._details(),this.group.traverse(e=>{e.isMesh&&!e.userData.noShadow&&!e.userData.shadowOnly&&(e.castShadow=!0,e.receiveShadow=!0),e.userData.noShadow&&e.name==="hull"&&(e.receiveShadow=!0)})}_mats(){let t=this.quality,e=(r,o={})=>new Ss({color:r,roughness:.46,metalness:0,clearcoat:.32,clearcoatRoughness:.3,envMapIntensity:.8,...o}),n=ip({quality:t}),s=sp({quality:t});this.M={hull:e(16777215,{map:n.map,normalMap:n.normalMap,normalScale:new ct(.45,.45)}),wing:e(16777215,{map:s}),yellow:e(We.yellow),red:e(We.red),white:e(We.white),black:new be({color:1316118,roughness:.55,metalness:.1}),blade:new be({color:1184532,roughness:.5,metalness:.2,transparent:!0}),bladeTip:new be({color:We.yellow,roughness:.5,transparent:!0}),spinner:new Ss({color:15263972,roughness:.25,metalness:.3,clearcoat:.8}),chrome:new be({color:14212578,roughness:.12,metalness:1}),gray:new be({color:9080208,roughness:.45,metalness:.6}),darkMetal:new be({color:2762276,roughness:.7,metalness:.7}),rubber:new be({color:1381653,roughness:.92,metalness:0}),inlet:new be({color:328965,roughness:1}),glass:new Ss({color:1844780,roughness:.02,metalness:0,transparent:!0,opacity:.45,envMapIntensity:1.6,side:Qe,depthWrite:!1,clearcoat:1,clearcoatRoughness:.02})}}_fuselage(){let{strips:t,glassGeo:e}=Qo({cutWindows:!1,collectGlass:!0,glassMargin:.04}),n=us(t),s=new $(n,this.M.hull);s.name="hull",s.userData.noShadow=!0,s.receiveShadow=!0,this.group.add(s),this.hull=s;let r=new $(us(Qo({cutWindows:!0}).strips),new Ye({colorWrite:!1,depthWrite:!1,side:Qe}));if(r.castShadow=!0,r.userData.shadowOnly=!0,this.group.add(r),e){let h=e.attributes.position,u=e.attributes.normal;for(let f=0;f<h.count;f++)h.setXYZ(f,h.getX(f)+u.getX(f)*.006,h.getY(f)+u.getY(f)*.006,h.getZ(f)+u.getZ(f)*.006);let d=new $(e,this.M.glass);d.renderOrder=10,d.userData.noShadow=!0,d.name="glass",this.group.add(d),this.glass=d}let o=new $(new kn(.16,10,8),this.M.yellow);o.scale.set(.9,1.6,.5),o.position.copy(Ct(nt.L-.02,2.85)),this.group.add(o);let a=this.M.black,l=[];for(let h=1.18;h<=2.05;h+=.05)l.push(Ct(h,Oe(h)+.006,0));let c=new Ki(new zi(l),16,.035,6,!1);this.group.add(new $(c,a))}_wing(){let t=nt.wing,e=hs(.04,.4,.17,26),n=hs(.04,.4,.135,26),s=t.incidence,r=new D(0,-Math.sin(s),Math.cos(s)),o=new D(0,Math.cos(s),Math.sin(s)),a=t.h+.25*t.chord*Math.sin(s),l=R=>{let A=K(R/t.halfSpan,0,1);return e.map((C,L)=>[C[0],ci(C[1],n[L][1],A)])},c=t.hingeX,h=(R,A)=>({le:Ct(t.sLE,a,R),chord:t.chord,foil:A}),u=[0];for(let R=.4;R<t.halfSpan;R+=.45)u.push(R);u.push(t.halfSpan);let d=R=>R.map(A=>A/t.halfSpan),f=u.map(R=>h(R,ki(l(R),0,c-.005))),p=Ti(null,f,{chordDir:r,upDir:o,uvU:d(u),capEnd:!0,foilV:Ir(f[0].foil)}),m=[[0,t.flapStart-.02],[t.flapEnd+.02,t.ailStart-.02],[t.ailEnd+.02,t.halfSpan]].map(([R,A])=>{let C=[R,(R+A)/2,A],L=C.map(P=>h(P,ki(l(P),c-.01,1)));return Ti(null,L,{chordDir:r,upDir:o,uvU:d(C),capStart:!0,capEnd:!0,foilV:Ir(L[0].foil)})}),g=us([p,...m]),S=$o(g);for(let R of[g,S]){let A=new $(R,this.M.wing);A.name="wing",this.group.add(A)}let _=(R,A,C,L,P)=>{let F=[];for(let H=R;H<=A+1e-6;H+=(A-R)/Math.max(2,Math.round((A-R)/.6)))F.push(H);let U=F.map(H=>h(H,ki(l(H),C,1,!0))),B=Ti(null,U,{chordDir:r,upDir:o,uvU:d(F),capStart:!0,capEnd:!0,foilV:Ir(U[0].foil)}),X=t.sLE+(C-.01)*t.chord,O=a-(C-.01)*t.chord*Math.sin(s)-P;return{g:B,p0:Ct(X,O,R),p1:Ct(X,O,A)}};this.flaps=[],this.ailerons=[];for(let R of[1,-1]){let A=_(t.flapStart,t.flapEnd,c+.008,this.M.wing,.32),C=_(t.ailStart,t.ailEnd,c+.008,this.M.wing,0);for(let[L,P]of[[A,this.flaps],[C,this.ailerons]]){let F=L.g,U=L.p0,B=L.p1;R<0&&(F=$o(F),U=U.clone().setX(-U.x),B=B.clone().setX(-B.x));let X=new Ds(this.group,U,B);X.add(new $(F,this.M.wing)),X.side=R,P.push(X)}}let x=[],M=[6.2,6.6,7.2,8.4,9.6,10.4,11.1],b=[.2,.62,.92,1.05,1.02,.85,.35],w=[3.52,3.68,3.82,3.9,3.86,3.76,3.6];M.forEach((R,A)=>{let C=[];for(let P=0;P<=16;P++){let F=Math.PI*(P/16),U=Math.cos(F)*b[A],B=3.38+(w[A]-3.38)*Math.pow(Math.sin(F),.5);C.push(Ct(R,B,U))}x.push(C)});let y=new $(Is(x,{capStart:!0,capEnd:!0,flip:!0}),this.M.yellow);this.group.add(y);let E=hs(0,.3,.1,12);for(let R of[1,-1]){let C=[0,.95].map((P,F)=>({le:Ct(t.sLE+.55+P*.5,t.h+.12+P,R*(t.halfSpan+.02+P*.12)),chord:F===0?2.5:1.3})),L=Ti(E,C,{chordDir:new D(0,0,1),upDir:new D(R,0,0),capEnd:!0,flip:R>0});this.group.add(new $(L,this.M.red))}}_nacelles(){let t=nt.engine,e=[4.4,4.5,4.75,5.2,5.9,6.8,7.8,8.8,9.8,10.7,11.3,11.62],n=an(e.map((l,c)=>[l,[4.65,4.645,4.62,4.58,4.55,4.54,4.56,4.6,4.66,4.74,4.8,4.85][c]])),s=an(e.map((l,c)=>[l,[.35,.39,.46,.52,.55,.56,.55,.52,.45,.33,.2,.05][c]])),r=an(e.map((l,c)=>[l,[.35,.4,.5,.6,.66,.67,.64,.58,.48,.34,.2,.05][c]])),o=28,a=2/2.3;this.props=[];for(let l of[-1,1]){let c=l*t.y,h=[],u=[];for(let w=4.4;w<=11.62+1e-6;w+=.18)u.push(Math.min(w,11.62));for(let w of u){let y=[];for(let E=0;E<o;E++){let R=E/o*Math.PI*2,A=Math.cos(R),C=Math.sin(R),L=Math.sign(A)*Math.pow(Math.abs(A),a)*s(w),P=Math.sign(C)*Math.pow(Math.abs(C),a)*r(w);y.push(Ct(w,n(w)+P,c+L))}h.push(y)}let d=Is(h,{closed:!0,capEnd:!0,flip:!0}),f=new $(d,this.M.yellow);f.name="nacelle",this.group.add(f);let p=[],v=[4.62,4.75,5.1,5.6,6.2,6.7],m=[.2,.24,.26,.25,.2,.08],g=[.26,.3,.3,.26,.16,.04];v.forEach((w,y)=>{let E=[];for(let R=0;R<16;R++){let A=R/16*Math.PI*2;E.push(Ct(w,n(w)-r(w)*.82+Math.sin(A)*g[y]*.5-g[y]*.3,c+Math.cos(A)*m[y]))}p.push(E)}),this.group.add(new $(Is(p,{closed:!0,capEnd:!0,flip:!0}),this.M.yellow));let S=new $(new _n(1,16),this.M.inlet);S.scale.set(.2,.135,1),S.position.copy(Ct(4.615,n(4.62)-r(4.62)*.82-.078,c)),S.rotation.y=Math.PI,this.group.add(S);let _=Ct(6.35,4.6,c+l*.5),x=Ct(6.85,4.62,c+l*.82),M=new $(An(_,x,.15,.17,12),this.M.darkMetal);this.group.add(M);let b=new $(new _n(.15,12),this.M.inlet);b.position.copy(x).add(new D(l*.002,0,.001)),b.lookAt(x.clone().add(new D().subVectors(x,_))),this.group.add(b),this.props.push(this._propeller(l,Ct(t.sProp,t.h,c)))}}_propeller(t,e){let n=new Kt;n.position.copy(e),this.group.add(n);let s=new Kt;n.add(s);let r=[];for(let _=0;_<=14;_++){let x=_/14,M=-.72+x*.92,b=.36*Math.pow(Math.sin(x*Math.PI/2),.62);r.push([b,M])}r.push([.36,.22]),r.push([.3,.22]);let o=new $(tp(r,28),this.M.spinner);s.add(o);let a=te.propDiameter/2,l=hs(.02,.4,.12,9),c=[.3,.42,.55,.75,.95,1.2,1.45,1.68,1.84,1.93,1.985],h=an([[.3,.17],[.45,.25],[.7,.31],[1.1,.3],[1.5,.25],[1.85,.18],[1.985,.06]]),u=an([[.3,2.6],[.45,1.6],[.8,.95],[1.4,.65],[1.985,.45]]),d=_=>(22-34*(_-.3)/(a-.3))*Et;this.blades=this.blades||[];let f=(_,x)=>{let M=c.filter(w=>w>=_-1e-6&&w<=x+1e-6);M[0]>_&&M.unshift(_),M[M.length-1]<x&&M.push(x);let b=M.map(w=>({le:new D(.35*h(w),w,0),chord:h(w),twist:d(w),thick:u(w)}));return Ti(l,b,{chordDir:new D(-1,0,0),upDir:new D(0,0,-1),capEnd:!0})},p=f(.3,1.86),v=f(1.86,1.985),m=[];for(let _=0;_<4;_++){let x=new Kt;x.rotation.z=_*Math.PI/2;let M=new Kt;x.add(M);let b=new $(p,this.M.blade),w=new $(v,this.M.bladeTip);M.add(b,w);let y=new $(new ce(.075,.09,.32,10),this.M.black);y.position.y=.38,M.add(y),s.add(x),m.push(M)}let g=(()=>{let _=document.createElement("canvas");_.width=_.height=256;let x=_.getContext("2d"),M=x.createRadialGradient(128,128,20,128,128,128);M.addColorStop(0,"rgba(30,30,30,0.0)"),M.addColorStop(.25,"rgba(25,25,25,0.16)"),M.addColorStop(.85,"rgba(25,25,25,0.10)"),M.addColorStop(.93,"rgba(240,180,0,0.16)"),M.addColorStop(.985,"rgba(240,180,0,0.10)"),M.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=M,x.fillRect(0,0,256,256);for(let w=0;w<4;w++){x.save(),x.translate(128,128),x.rotate(w*Math.PI/2);let y=x.createLinearGradient(0,-20,0,20);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(.5,"rgba(10,10,10,0.08)"),y.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=y,x.beginPath(),x.moveTo(0,0),x.arc(0,0,128,-.35,.05),x.closePath(),x.fill(),x.restore()}let b=new nn(_);return b.colorSpace=Pe,b})(),S=new $(new _n(a,48),new Ye({map:g,transparent:!0,depthWrite:!1,side:Qe,opacity:0,toneMapped:!0}));return S.userData.noShadow=!0,S.renderOrder=11,s.add(S),{grp:n,spin:s,blades:m,disc:S,side:t,angle:Math.random()*6.28,bladeMat:this.M.blade}}_tail(){let t=nt.vtail,e=hs(0,.3,.12,18),n=an([[3,11.3],[3.35,12.4],[3.8,13.45],[4.4,14.25],[5.2,14.85],[8.25,17.55]]),s=_=>19.72+(_-3)*.004,r=18.05,o=new D(0,0,1),a=new D(1,0,0),l=(_,x)=>({le:Ct(n(_),_,0),chord:s(_)-n(_),foil:x}),c=7.35,h=(_,x,M,b,w,y,E,R,A=!1)=>{let C=[];for(let U=0;U<=M;U++)C.push(_+(x-_)*U/M);let L=C.map(U=>l(U,ki(e,b(U),w(U),A))),P=Ti(null,L,{chordDir:o,upDir:a,capStart:E,capEnd:R,foilV:Ir(L[0].foil),flip:!0});return new $(P,y)},u=_=>(r-n(_))/(s(_)-n(_));this.group.add(h(3,3.6,2,()=>0,()=>1,this.M.yellow,!1,!1)),this.group.add(h(3.6,c,10,()=>0,_=>u(_)-.005,this.M.yellow,!1,!1)),this.group.add(h(c,8.05,3,()=>0,_=>u(_)-.005,this.M.red,!1,!1)),this.group.add(h(8.05,8.25,1,()=>0,()=>1,this.M.red,!1,!0)),this.rudder=new Ds(this.group,Ct(r,3.6,0),Ct(r,8.05,0)),this.rudder.add(h(3.6,c,8,_=>u(_)+.003,()=>1,this.M.yellow,!0,!1,!0)),this.rudder.add(h(c,8.05,3,_=>u(_)+.003,()=>1,this.M.red,!1,!0,!0));let d=new $(new qt(.02,.9,.32),this.M.yellow);d.position.copy(Ct(19.62,4.3,0)),d.geometry.translate(d.position.x,d.position.y,d.position.z),d.position.set(0,0,0),this.rudder.add(d);let f=nt.htail,p=hs(0,.3,.11,18),v=(_,x)=>{let M=Math.abs(_)/f.halfSpan;return{le:Ct(f.sLE+f.sweepLE*M,f.h,_),chord:f.rootChord+(f.tipChord-f.rootChord)*M,foil:x}},m=new D(0,0,1),g=new D(0,1,0),S=[0,.8,1.6,2.4,3.2,4,4.8,f.halfSpan];this.elevators=[];for(let _ of[1,-1]){let x=Ti(null,S.map(H=>v(H,ki(p,0,.615))),{chordDir:m,upDir:g,capEnd:!0,foilV:Ir(ki(p,0,.615))}),M=_>0?x:$o(x);this.group.add(new $(M,this.M.red));let b=S.slice(0,-1).concat([f.halfSpan-.05]),w=Ti(null,b.map(H=>v(H,ki(p,.625,1,!0))),{chordDir:m,upDir:g,capStart:!0,capEnd:!0,foilV:Ir(ki(p,.625,1,!0))}),y=_>0?w:$o(w),E=v(0,null),R=v(f.halfSpan,null),A=Ct(f.sLE+.62*f.rootChord,f.h,0),C=Ct(f.sLE+f.sweepLE+.62*f.tipChord,f.h,_*f.halfSpan),L=new Ds(this.group,A,C);L.add(new $(y,this.M.red)),L.side=_,this.elevators.push(L);let P=f.finletY*_,F=f.finletY/f.halfSpan,U=f.sLE+f.sweepLE*F+.05,B=hs(0,.3,.1,12),X=[{le:Ct(U+.1,f.h-.7,P),chord:1.05},{le:Ct(U-.05,f.h,P),chord:1.55},{le:Ct(U+.45,f.h+1.05,P),chord:.95}],O=Ti(B,X,{chordDir:new D(0,0,1),upDir:new D(1,0,0),capStart:!0,capEnd:!0,flip:!0});this.group.add(new $(O,this.M.red))}}_floats(){let t=nt.float,e=t.sBack-t.sFront,n=an([[0,.48],[.35,.16],[.8,.02],[1.2,0],[2,0],[2.02,.07],[3,.2],[e,.42]]),s=an([[0,.52],[.25,.7],[.8,.82],[3,.8],[e,.62]]),r=an([[0,.04],[.15,.22],[.5,.34],[1,.39],[2.6,.39],[3.4,.28],[e,.16]]),o=25*Et;this.floatGroups=[];for(let a of[-1,1]){let l=a*t.y,c=[],h=[];for(let g=0;g<=e+1e-6;g+=.08){let S=t.sFront+g,_=n(g),x=s(g),M=r(g),b=Math.min(_+M*Math.tan(o),x-.05),w=[],y=[],E=12;for(let R=0;R<=E;R++){let A=Math.PI-R/E*Math.PI,C=Math.cos(A)*M,L=b+.1+(x-b-.1)*Math.pow(Math.sin(A),.55);w.push(Ct(S,t.hBottom+L,l+C))}y.push(Ct(S,t.hBottom+b+.1,l+M)),y.push(Ct(S,t.hBottom+b,l+M)),y.push(Ct(S,t.hBottom+_,l)),y.push(Ct(S,t.hBottom+b,l-M)),y.push(Ct(S,t.hBottom+b+.1,l-M)),c.push(w),h.push(y)}let u=Is(c,{capStart:!1,capEnd:!1,flip:!1}),d=Is(h,{capStart:!1,capEnd:!1,flip:!1});this.group.add(new $(u,this.M.yellow)),this.group.add(new $(d,this.M.red));for(let[g,S]of[[c,this.M.yellow],[h,this.M.red]])for(let _ of[0,g.length-1]){let x=g[_],M=new D;x.forEach(R=>M.add(R)),M.divideScalar(x.length);let b=[M.x,M.y,M.z];x.forEach(R=>b.push(R.x,R.y,R.z));let w=[];for(let R=1;R<x.length;R++)_===0?w.push(0,R,R+1):w.push(0,R+1,R);let y=new xe;y.setAttribute("position",new Zt(b,3)),y.setIndex(w),y.computeVertexNormals();let E=new $(y,S);E.material=S.clone(),E.material.side=Qe,this.group.add(E)}let f=nt.wing.h-.28,p=[t.sFront+1.05,t.sFront+2.75];for(let g of p){let S=Ct(g,t.hBottom+.78,l),_=Ct(g+.15,f,l-a*.05);this.group.add(new $(An(S,_,.09,.075,10,2.4),this.M.yellow))}let v=Ct(t.sFront+1.9,t.hBottom+.8,l),m=Ct(t.sFront+1.7,f+.02,l-a*1.35);this.group.add(new $(An(v,m,.045,.045,8),this.M.yellow))}}_gear(){let t=nt.gear.main,e=nt.gear.nose,n=(s,r)=>{let o=new Ji(s-r*.42,r*.5,12,28);return o.scale(1,1,.9),o.rotateY(Math.PI/2),o};this.mainGear=[];for(let s of[-1,1]){let r=Ct(t.s,t.pivotH,s*t.pivotY),o=Ct(t.s,t.wheelH,s*t.wheelY),a=new Kt;a.position.copy(r),this.group.add(a);let l=o.clone().sub(r),c=l.clone().normalize(),h=l.length(),u=new $(An(new D,c.clone().multiplyScalar(h*.62),.11,.1,12),this.M.gray);a.add(u);let d=new Kt;a.add(d);let f=new $(An(c.clone().multiplyScalar(h*.4),c.clone().multiplyScalar(h-.05),.075,.075,12),this.M.chrome);d.add(f);let p=new Kt;p.position.copy(l),d.add(p);let v=new $(n(t.wheelR,t.width),this.M.rubber);p.add(v);let m=new $(new ce(.22,.22,t.width*.85,18),this.M.gray);m.rotation.z=Math.PI/2,p.add(m);let g=new $(new ce(.1,.12,t.width*.95,12),this.M.chrome);g.rotation.z=Math.PI/2,p.add(g);let S=new $(An(l.clone().add(new D(-s*.25,.05,0)),l.clone(),.06,.06,8),this.M.gray);d.add(S);let _=c.clone().multiplyScalar(h*.5),x=Ct(t.s-.3,1.95,s*1.3).sub(r);a.add(new $(An(_,x,.05,.05,8),this.M.gray)),this.mainGear.push({leg:a,slider:d,wheel:p,side:s,dir:c,len:h})}{let s=Ct(e.s,e.pivotH,0),r=new Kt;r.position.copy(s),this.group.add(r),r.add(new $(An(new D(0,0,0),new D(0,-e.legLen*.6,0),.07,.065,10),this.M.gray));let o=new Kt;r.add(o),o.add(new $(An(new D(0,-e.legLen*.45,0),new D(0,-e.legLen+.02,.03),.05,.05,10),this.M.chrome));let a=new Kt;a.position.set(0,-e.legLen,.03),o.add(a);let l=[];for(let h of[-1,1]){let u=new Kt;u.position.set(h*e.track/2,0,0),u.add(new $(n(e.wheelR,.2),this.M.rubber));let d=new $(new ce(.14,.14,.17,14),this.M.gray);d.rotation.z=Math.PI/2,u.add(d),a.add(u),l.push(u)}a.add(new $(new qt(e.track-.15,.06,.08),this.M.gray));let c=[];for(let h of[-1,1]){let u=Ct(1.35,Ze(1.35)+.02,h*.3),d=Ct(2.85,Ze(2.85)+.02,h*.3),f=new Ds(this.group,u,d),p=new qt(.28,.025,1.5),v=Ct(2.1,Ze(2.1)+.05,h*.16);p.translate(v.x,v.y,v.z),f.add(new $(p,this.M.red)),f.side=h,c.push(f)}this.noseGear={leg:r,slider:o,steer:a,wheels:l,doors:c}}}_probesDoors(){this.probeMeshes=[];for(let t of[-1,1]){let e=nt.probe.s,n=t*nt.probe.y,s=Ze(e)+nt.probe.y*Math.tan(ui(e)),r=new Kt,o=new $(new qt(.1,.92,.26),this.M.gray);o.geometry.translate(0,-.46,0),r.add(o);let a=new $(new ce(.05,.05,.92,10),this.M.gray);a.geometry.translate(0,-.46,-.13),r.add(a);let l=new $(new qt(.14,.12,.3),this.M.darkMetal);l.position.set(0,-.86,-.05),r.add(l);let c=new $(new ke(.11,.09),this.M.inlet);c.position.set(0,-.86,-.205),c.rotation.y=Math.PI,r.add(c),r.position.copy(Ct(e,s+.88,n)),this.group.add(r),this.probeMeshes.push({g:r,base:r.position.clone()})}this.tankDoors=[];for(let t of nt.doors){let e=t.y<0?-1:1,n=Math.abs(t.y),s=t.s-nt.doorSize.len/2,r=t.s+nt.doorSize.len/2,o=n+nt.doorSize.wid/2,a=(p,v)=>Ze(p)+v*Math.tan(ui(p))-.006,l=Ct(s,a(s,o),e*o),c=Ct(r,a(r,o),e*o),h=new Ds(this.group,l,c),u=new qt(nt.doorSize.wid,.025,nt.doorSize.len),d=ui(t.s);u.rotateZ(-e*d);let f=Ct(t.s,a(t.s,n)-.008,e*n);u.translate(f.x,f.y,f.z),h.add(new $(u,this.M.red)),h.side=e,this.tankDoors.push(h)}}_lights(){let t=ls(64,{power:2.5}),e=(u,d)=>{let f=new hr({map:t,color:u,transparent:!0,depthWrite:!1,blending:Es}),p=new ro(f);return p.scale.setScalar(d),p.userData.noShadow=!0,p.renderOrder=12,p},n=u=>new $(new kn(.05,8,6),new Ye({color:u})),s=nt.wing,r=Ct(s.sLE+.45,s.h+.08,-(s.halfSpan+.06)),o=Ct(s.sLE+.45,s.h+.08,s.halfSpan+.06),a=Ct(19.85,3,0);this.lights={navL:e(16722458,1.1),navR:e(2293589,1.1),tail:e(16777215,.9),beaconT:e(16719888,2.2),beaconB:e(16719888,2.2),strobeL:e(16777215,3.2),strobeR:e(16777215,3.2)},this.lights.navL.position.copy(r),this.lights.navR.position.copy(o),this.lights.tail.position.copy(a),this.lights.beaconT.position.copy(Ct(11.2,3.62,0)),this.lights.beaconB.position.copy(Ct(11.5,Ze(11.5)-.06,0)),this.lights.strobeL.position.copy(r).add(new D(0,0,.5)),this.lights.strobeR.position.copy(o).add(new D(0,0,.5));for(let u in this.lights)this.group.add(this.lights[u]);let l=n(16724e3);l.position.copy(r),this.group.add(l);let c=n(3211104);c.position.copy(o),this.group.add(c);let h=n(16719888);h.position.copy(this.lights.beaconT.position),this.group.add(h),this.landingLights=[];for(let u of[-1,1]){let d=Ct(s.sLE+.02,s.h+.02,u*2.2),f=new $(new _n(.11,14),new Ye({color:7829367}));f.position.copy(d).add(new D(0,0,-.02)),f.rotation.y=Math.PI,this.group.add(f);let p=new Ro(16774880,0,900,.22,.5,1.5);p.position.copy(d),p.target.position.copy(d).add(new D(u*2,-12,-100)),this.group.add(p,p.target);let v=e(16774365,2.5);v.position.copy(d).add(new D(0,0,-.1)),v.visible=!1,this.group.add(v),this.landingLights.push({lamp:f,spot:p,glow:v})}}_details(){let t=this.group;for(let o of[-1,1]){let a=Ct(1.25,2.05,o*1.06),l=Ct(.85,2.05,o*1.06);t.add(new $(An(a,l,.018,.012,6),this.M.chrome));let c=new $(An(Ct(1.3,2.05,o*1),a,.03,.02,6),this.M.gray);t.add(c)}let e=(o,a,l,c=0,h=.32,u=this.M.white)=>{let d=new $(new qt(.015,h,.22),u);d.geometry.translate(0,h/2,0),d.position.copy(Ct(o,a,l)),d.rotation.x=-.35,d.rotation.z=c,t.add(d)};e(4.6,Oe(4.6),0),e(12.4,Oe(12.4),0,0,.26),e(13.6,Oe(13.6),.3,.2,.18,this.M.black),e(6.2,Ze(6.2)+.02,0,Math.PI,.22,this.M.black),t.add(new $(An(Ct(3.9,Oe(3.9),0),Ct(4.3,Oe(3.9)+.75,0),.012,.006,5),this.M.black));let n=new lo(new xe().setFromPoints([Ct(4.8,Oe(4.8)+.05,0),Ct(16.9,7.6,0)]),new dr({color:1118481}));t.add(n);for(let o of[-1,1]){let a=Ct(1.24,Oe(1.24)+.01,o*.55),l=Ct(1.62,Oe(1.62)+.02,o*.38);t.add(new $(An(a,l,.007,.006,5),this.M.black))}for(let o of[-1,1]){let a=new $(new qt(.28,.12,.5),this.M.darkMetal);a.position.copy(Ct(11.25,Oe(11.25)-.02,o*.55)),t.add(a)}this.overflowVents=[Ct(11.3,Oe(11.3)+.08,-.55),Ct(11.3,Oe(11.3)+.08,.55)];let s=new $(new ce(.14,.14,.02,14),this.M.darkMetal);s.position.copy(Ct(.35,Oe(.35)-.04,0)),s.rotation.x=-.6,t.add(s);let r=new $(new qt(.03,.04,.18),this.M.chrome);r.position.copy(Ct(4.3,2.1,-1.31)),t.add(r)}get emitters(){return{doors:nt.doors.map(t=>Ct(t.s,Ze(t.s)-.05,t.y)),probes:this.probeMeshes.map(t=>t.g),overflow:this.overflowVents,props:this.props.map(t=>t.grp.position),exhausts:[-1,1].map(t=>Ct(6.85,4.62,t*(nt.engine.y+.82)))}}update(t,e,n,s={}){this.time+=t;let r=this.time,o=n.surf;for(let _ of this.flaps)_.set(_.side*e.flapPos*Et);for(let _ of this.ailerons)_.set(-o.ail*Et);for(let _ of this.elevators)_.set(_.side*(-o.elev*Et)*1);this.rudder.set(o.rud*Et);for(let _=0;_<2;_++){let x=this.props[_],M=e.engines[_],b=M.np/100*te.propRPM*(M.running?1:M.np/100),w=b/60*Math.PI*2,y=K((b-250)/600,0,1);x.angle-=Math.min(w,2*Math.PI*4.5)*t*(y>.95?.6:1),x.spin.rotation.z=x.angle,x.disc.material.opacity=y*.6,x.disc.rotation.z=-r*2.2,x.bladeMat.opacity=1-y*.9,this.M.bladeTip.opacity=1-y*.9;let E=14+M.pf*22+K(n.out.tas/80,0,1)*12;M.reverse>.05&&(E=-12),!M.running&&M.feathered&&(E=84),x.beta=ci(x.beta??E,E,K(t*3,0,1));for(let R of x.blades)R.rotation.y=-x.beta*Et}let a=e.gearPos,l=a*a*(3-2*a);for(let _=0;_<2;_++){let x=this.mainGear[_];x.leg.rotation.z=x.side*(1-l)*112*Et;let M=n.out.gearCompress[1+(x.side>0?1:0)]||0;x.slider.position.copy(x.dir).multiplyScalar(-M*.9),x.wheel.rotation.x-=(n.out.wheelSpeed[1+(x.side>0?1:0)]||0)*t}let c=this.noseGear,h=K((a-.1)/.8,0,1),u=h*h*(3-2*h);c.leg.rotation.x=(1-u)*102*Et,c.slider.position.y=(n.out.gearCompress[0]||0)*.9,c.steer.rotation.y=-(e.noseSteer||0)*(a>.98?1:0);for(let _ of c.wheels)_.rotation.x-=(n.out.wheelSpeed[0]||0)*t*1.5;let d=K(a<.02?0:1,0,1);c.doorAnim=ci(c.doorAnim||0,d,K(t*3,0,1));for(let _ of c.doors)_.set(_.side*c.doorAnim*80*Et);for(let _ of this.probeMeshes)_.g.position.copy(_.base),_.g.position.y-=.88*e.probePos,_.g.position.z+=.12*e.probePos;for(let _=0;_<4;_++){let x=this.tankDoors[_];x.set(x.side*e.doorOpen[_]*82*Et)}let f=this.lights,p=e.lights;f.navL.visible=f.navR.visible=f.tail.visible=p.nav;let v=r*1.1%1,m=p.beacon?Math.max(0,1-Math.abs(v-.1)*8):0;f.beaconT.material.opacity=m,f.beaconB.material.opacity=p.beacon?Math.max(0,1-Math.abs((r*1.1+.5)%1-.1)*8):0;let g=r%1.25,S=p.strobe&&(g<.05||g>.16&&g<.2)?1:0;f.strobeL.material.opacity=f.strobeR.material.opacity=S;for(let _ of this.landingLights)_.spot.intensity=p.landing?900:0,_.glow.visible=p.landing,_.lamp.material.color.setHex(p.landing?16777215:6710886)}setInterior(t){this.M.glass.opacity=.45,this.glass&&(this.glass.visible=!t)}};var Vn=256,Ec=8,pn={asi:i=>{let t=K(i,0,260);return t<40?-160+t/40*20:-140+(t-40)/210*300},radalt:i=>{let t=K(i,0,2500);return t<=500?-150+t/500*180:30+(t-500)/2e3*120},torque:i=>-135+K(i,0,120)/120*270,itt:i=>-135+K(i,0,1e3)/1e3*270,nh:i=>-135+K(i,0,110)/110*270,np:i=>-135+K(i,0,1300)/1300*270,ff:i=>-135+K(i,0,800)/800*270,flaps:i=>-60+K(i,0,25)/25*150,fuel:i=>-120+K(i,0,2400)/2400*240,hyd:i=>-120+K(i,0,4e3)/4e3*240,g:i=>-90+(K(i,-2,4)+2)/6*270-45,trim:i=>K(i,-1,1)*70};pn.vsi=i=>{let t=Math.sign(i),e=Math.abs(i),n;return e<=1e3?n=e/1e3*50:e<=2e3?n=50+(e-1e3)/1e3*40:n=90+(K(e,2e3,6e3)-2e3)/4e3*80,-90+t*n};function Wn(i,t,e,n){let s=(n-90)*Et;return[i+Math.cos(s)*e,t+Math.sin(s)*e]}function Au(i,t,e,n,s){i.fillStyle="#121314",i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.fill();let r=s.map;for(let o of s.arcs||[]){i.strokeStyle=o.color,i.lineWidth=o.w||n*.07,i.beginPath();let a=(r(o.from)-90)*Et,l=(r(o.to)-90)*Et;i.arc(t,e,n*(o.r||.86),Math.min(a,l),Math.max(a,l)),i.stroke()}i.strokeStyle="#e8e8e8";for(let o of s.ticks||[]){let[a,l,c]=o,h=r(a),[u,d]=Wn(t,e,n*.93,h),[f,p]=Wn(t,e,n*(.93-l),h);i.lineWidth=c,i.beginPath(),i.moveTo(u,d),i.lineTo(f,p),i.stroke()}i.fillStyle="#f0f0f0",i.textAlign="center",i.textBaseline="middle",i.font=`bold ${Math.round(n*(s.numSize||.2))}px Arial`;for(let[o,a]of s.labels||[]){let[l,c]=Wn(t,e,n*(s.numR||.66),r(o));i.fillText(a,l,c)}if(s.title&&(i.font=`bold ${Math.round(n*.13)}px Arial`,i.fillStyle="#d8d8d8",i.fillText(s.title,t,e+n*(s.titleY||.38))),s.unit&&(i.font=`${Math.round(n*.1)}px Arial`,i.fillStyle="#bdbdbd",i.fillText(s.unit,t,e-n*.34)),s.redline!==void 0){let o=r(s.redline),[a,l]=Wn(t,e,n*.97,o),[c,h]=Wn(t,e,n*.7,o);i.strokeStyle="#ff2a1a",i.lineWidth=n*.05,i.beginPath(),i.moveTo(a,l),i.lineTo(c,h),i.stroke()}}function Ne(i,t,e,n,s){let r=[];for(let o=i;o<=t+1e-6;o+=e)r.push([o,n,s]);return r}var rp={asi:{map:pn.asi,ticks:[...Ne(40,250,10,.1,2.5),...Ne(40,250,5,.05,1.5)],labels:[[40,"40"],[60,"60"],[80,"80"],[100,"100"],[120,"120"],[140,"140"],[160,"160"],[180,"180"],[200,"200"],[220,"220"],[240,"240"]],arcs:[{from:66,to:125,color:"#f2f2f2",r:.78,w:6},{from:85,to:200,color:"#2fbf3a"}],redline:200,title:"NODI",numSize:.15},vsi:{map:pn.vsi,ticks:[...Ne(-2e3,2e3,500,.09,2.5),...Ne(-6e3,6e3,1e3,.12,3),...Ne(-1e3,1e3,100,.05,1.5)],labels:[[0,"0"],[1e3,"1"],[2e3,"2"],[4e3,"4"],[6e3,"6"],[-1e3,"1"],[-2e3,"2"],[-4e3,"4"],[-6e3,"6"]],title:"VERT SPEED",unit:"x1000 FT/MIN",numSize:.2,titleY:.3},radalt:{map:pn.radalt,ticks:[...Ne(0,500,50,.08,2),...Ne(0,500,100,.13,3),...Ne(500,2500,500,.13,3)],labels:[[0,"0"],[100,"1"],[200,"2"],[300,"3"],[400,"4"],[500,"5"],[1e3,"10"],[2e3,"20"]],arcs:[{from:0,to:200,color:"#ffb000",r:.8,w:5}],title:"RAD ALT",unit:"x100 FT",numSize:.17},torque:{map:pn.torque,ticks:[...Ne(0,120,10,.1,2),...Ne(0,120,5,.05,1.5)],labels:[[0,"0"],[20,"2"],[40,"4"],[60,"6"],[80,"8"],[100,"10"],[120,"12"]],arcs:[{from:0,to:100,color:"#2fbf3a"}],redline:106,title:"TORQUE %",numSize:.2},itt:{map:pn.itt,ticks:[...Ne(0,1e3,100,.1,2),...Ne(0,1e3,50,.05,1.5)],labels:[[0,"0"],[200,"2"],[400,"4"],[600,"6"],[800,"8"],[1e3,"10"]],arcs:[{from:300,to:765,color:"#2fbf3a"},{from:765,to:800,color:"#ffb000"}],redline:800,title:"ITT \xB0C",numSize:.2},nh:{map:pn.nh,ticks:[...Ne(0,110,10,.1,2),...Ne(0,110,5,.05,1.5)],labels:[[0,"0"],[20,"20"],[40,"40"],[60,"60"],[80,"80"],[100,"100"]],arcs:[{from:66,to:101,color:"#2fbf3a"}],redline:103,title:"NH %",numSize:.16},np:{map:pn.np,ticks:[...Ne(0,1300,100,.1,2)],labels:[[0,"0"],[400,"4"],[800,"8"],[1200,"12"]],arcs:[{from:900,to:1212,color:"#2fbf3a"}],redline:1236,title:"NP RPM",unit:"x100",numSize:.2},ff:{map:pn.ff,ticks:[...Ne(0,800,100,.1,2),...Ne(0,800,50,.05,1.5)],labels:[[0,"0"],[200,"2"],[400,"4"],[600,"6"],[800,"8"]],title:"FUEL FLOW",unit:"x100 KG/H",numSize:.2},flaps:{map:pn.flaps,ticks:[[0,.15,3],[10,.15,3],[15,.15,3],[25,.15,3],...Ne(0,25,5,.07,1.5)],labels:[[0,"0"],[10,"10"],[15,"15"],[25,"25"]],title:"FLAPS",numSize:.2},fuel:{map:pn.fuel,ticks:[...Ne(0,2400,400,.12,2.5),...Ne(0,2400,200,.06,1.5)],labels:[[0,"0"],[800,"8"],[1600,"16"],[2400,"24"]],arcs:[{from:0,to:400,color:"#ffb000"}],title:"FUEL",unit:"x100 KG",numSize:.18},hyd:{map:pn.hyd,ticks:[...Ne(0,4e3,500,.1,2.5)],labels:[[0,"0"],[1e3,"1"],[2e3,"2"],[3e3,"3"],[4e3,"4"]],arcs:[{from:2700,to:3200,color:"#2fbf3a"}],title:"HYD PSI",unit:"x1000",numSize:.18},g:{map:pn.g,ticks:[...Ne(-2,4,1,.13,3),...Ne(-2,4,.5,.07,1.5)],labels:[[-2,"-2"],[-1,"-1"],[0,"0"],[1,"1"],[2,"2"],[3,"3"],[4,"4"]],arcs:[{from:3.25,to:4,color:"#ff2a1a"}],title:"G",numSize:.18}},Tc=class{constructor(){let t=document.createElement("canvas");t.width=t.height=Vn*Ec,this.canvas=t,this.g=t.getContext("2d"),this.cells={},this.next=0;let e=this.g;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);for(let n of Object.keys(rp))this._cell(n,(s,r,o,a)=>Au(s,r,o,a,rp[n]));this._cell("alt",(n,s,r,o)=>{Au(n,s,r,o,{map:a=>a*36,ticks:[...Ne(0,9.9,1,.13,3),...Ne(0,9.9,.2,.06,1.5)],labels:Array.from({length:10},(a,l)=>[l,String(l)]),numSize:.22,numR:.7}),n.fillStyle="#d8d8d8",n.font=`bold ${o*.11}px Arial`,n.fillText("ALT",s,r-o*.32),n.fillText("FEET",s,r+o*.25),n.fillStyle="#000",n.fillRect(s+o*.22,r-o*.08,o*.4,o*.16),n.fillStyle="#fff",n.font=`${o*.12}px monospace`,n.fillText("1013",s+o*.42,r+o*.005)}),this._cell("clock",(n,s,r,o)=>Au(n,s,r,o,{map:a=>a*30,ticks:[...Ne(0,11.9,1,.14,3),...Ne(0,11.9,.2,.05,1)],labels:[[0,"12"],[3,"3"],[6,"6"],[9,"9"]],numSize:.24})),this._cell("hsiCard",(n,s,r,o)=>{n.fillStyle="#121314",n.beginPath(),n.arc(s,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="#eee",n.fillStyle="#eee",n.textAlign="center",n.textBaseline="middle";for(let l=0;l<360;l+=5){let c=l%30===0?.14:l%10===0?.1:.05,[h,u]=Wn(s,r,o*.95,l),[d,f]=Wn(s,r,o*(.95-c),l);n.lineWidth=l%10===0?2.5:1.5,n.beginPath(),n.moveTo(h,u),n.lineTo(d,f),n.stroke()}let a={0:"N",90:"E",180:"S",270:"W"};for(let l=0;l<360;l+=30){n.save();let[c,h]=Wn(s,r,o*.68,l);n.translate(c,h),n.rotate(l*Et),n.font=`bold ${o*(a[l]?.2:.16)}px Arial`,n.fillStyle=a[l]?"#ffd040":"#eee",n.fillText(a[l]||String(l/10),0,0),n.restore()}}),this._cell("hsiOverlay",(n,s,r,o)=>{n.clearRect(s-o,r-o,2*o,2*o),n.fillStyle="#ff8c00",n.beginPath(),n.moveTo(s,r-o*.98),n.lineTo(s-o*.06,r-o*.84),n.lineTo(s+o*.06,r-o*.84),n.fill(),n.fillStyle="#f2f2f2",n.fillRect(s-o*.03,r-o*.25,o*.06,o*.5),n.fillRect(s-o*.28,r-o*.06,o*.56,o*.06),n.fillRect(s-o*.12,r+o*.18,o*.24,o*.05)},!0),this._cell("adiOverlay",(n,s,r,o)=>{n.clearRect(s-o,r-o,2*o,2*o),n.strokeStyle="#f2f2f2";for(let l of[-60,-45,-30,-20,-10,0,10,20,30,45,60]){let c=Math.abs(l)%30===0?.12:.07,[h,u]=Wn(s,r,o*.97,l),[d,f]=Wn(s,r,o*(.97-c),l);n.lineWidth=3,n.beginPath(),n.moveTo(h,u),n.lineTo(d,f),n.stroke()}n.fillStyle="#ffae00",n.strokeStyle="#000",n.lineWidth=2;let a=l=>{n.beginPath(),n.moveTo(s+l*o*.12,r),n.lineTo(s+l*o*.55,r),n.lineTo(s+l*o*.55,r+o*.05),n.lineTo(s+l*o*.18,r+o*.05),n.lineTo(s+l*o*.12,r+o*.12),n.closePath(),n.fill(),n.stroke()};a(-1),a(1),n.fillRect(s-o*.03,r-o*.03,o*.06,o*.06),n.beginPath(),n.moveTo(s,r-o*.83),n.lineTo(s-o*.06,r-o*.72),n.lineTo(s+o*.06,r-o*.72),n.fill()},!0),this._cell("tcFace",(n,s,r,o)=>{n.fillStyle="#121314",n.beginPath(),n.arc(s,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="#eee",n.lineWidth=4;for(let a of[-90,-70,70,90]){let[l,c]=Wn(s,r,o*.92,a),[h,u]=Wn(s,r,o*.75,a);n.beginPath(),n.moveTo(l,c),n.lineTo(h,u),n.stroke()}n.fillStyle="#eee",n.font=`bold ${o*.16}px Arial`,n.textAlign="center",n.fillText("L",s-o*.72,r+o*.35),n.fillText("R",s+o*.72,r+o*.35),n.font=`${o*.1}px Arial`,n.fillText("2 MIN",s,r+o*.72),n.fillText("TURN COORDINATOR",s,r-o*.45),n.strokeStyle="#ddd",n.lineWidth=o*.16,n.beginPath(),n.arc(s,r-o*.4,o*.9,Math.PI*.36,Math.PI*.64),n.stroke(),n.strokeStyle="#111",n.lineWidth=2;for(let a of[-1,1])n.beginPath(),n.moveTo(s+a*o*.09,r+o*.38),n.lineTo(s+a*o*.09,r+o*.58),n.stroke()}),this._cell("tcPlane",(n,s,r,o)=>{n.clearRect(s-o,r-o,2*o,2*o),n.fillStyle="#f2f2f2",n.fillRect(s-o*.7,r-o*.03,o*1.4,o*.07),n.beginPath(),n.arc(s,r,o*.1,0,Math.PI*2),n.fill(),n.fillRect(s-o*.025,r-o*.25,o*.05,o*.2)},!0),this._cell("bezel",(n,s,r,o)=>{n.clearRect(s-o,r-o,2*o,2*o);let a=n.createRadialGradient(s,r,o*.82,s,r,o);a.addColorStop(0,"#000"),a.addColorStop(.5,"#2a2b2d"),a.addColorStop(1,"#0c0c0d"),n.fillStyle=a,n.beginPath(),n.arc(s,r,o,0,Math.PI*2),n.arc(s,r,o*.86,0,Math.PI*2,!0),n.fill(),n.fillStyle="#555";for(let l of[45,135,225,315]){let[c,h]=Wn(s,r,o*.93,l);n.beginPath(),n.arc(c,h,o*.035,0,Math.PI*2),n.fill()}},!0),this.texture=new nn(t),this.texture.colorSpace=Pe,this.texture.anisotropy=8}_cell(t,e,n=!1){let s=this.next++,r=s%Ec*Vn,o=Math.floor(s/Ec)*Vn;n&&this.g.clearRect(r,o,Vn,Vn),this.g.save(),this.g.beginPath(),this.g.rect(r,o,Vn,Vn),this.g.clip(),e(this.g,r+Vn/2,o+Vn/2,Vn/2-2),this.g.restore(),this.cells[t]={x:r,y:o}}disc(t,e,n=40){let s=this.cells[t],r=new _n(e,n),o=r.attributes.uv,a=Vn*Ec;for(let l=0;l<o.count;l++){let c=o.getX(l),h=o.getY(l);o.setXY(l,(s.x+c*Vn)/a,1-(s.y+(1-h)*Vn)/a)}return r}};function op(){return new Ve({uniforms:{pitch:{value:0},roll:{value:0}},vertexShader:`varying vec2 vUv;
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
      }`})}var di=class{constructor(t,e,n){this.canvas=document.createElement("canvas"),this.canvas.width=t,this.canvas.height=e,this.g=this.canvas.getContext("2d"),this.draw=n,this.texture=new nn(this.canvas),this.texture.colorSpace=Pe,this.last=""}update(t){let e=JSON.stringify(t);e!==this.last&&(this.last=e,this.draw(this.g,this.canvas.width,this.canvas.height,t),this.texture.needsUpdate=!0)}};var $v=[["STALL","w","stall"],["OVERSPEED","w","overspeed"],[`GEAR DN
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
FAIL`,"w","eng2"],["REV","g","rev"]];function ap(i,t,e,n){i.fillStyle="#0c0c0c",i.fillRect(0,0,t,e);let s=4,r=4,o=t/s,a=e/r;$v.forEach(([l,c,h],u)=>{let d=u%s*o,f=Math.floor(u/s)*a,p=!!n[h],v=c==="w"?"#ff2a1a":c==="c"?"#ffb000":"#38e048",m=c==="w"?"#2a0c0a":c==="c"?"#2a2008":"#0c240e";i.fillStyle=p?v:m,i.fillRect(d+3,f+3,o-6,a-6),i.fillStyle=p?"#111":"#444",i.font=`bold ${Math.round(a*.24)}px Arial`,i.textAlign="center",i.textBaseline="middle";let g=l.split(`
`);g.forEach((S,_)=>i.fillText(S,d+o/2,f+a/2+(_-(g.length-1)/2)*a*.28))})}var Nn=(i,t=!0)=>`${t?"bold ":""}${i}px "Arial Narrow", Arial, sans-serif`,Fn=i=>`bold ${i}px "Courier New", monospace`,Lr="#3fe0ff",Xn="#3cff5a",mn="#f2f2f2",qn="#ffb21a",Ac="#ff3a2a",Ru="#ff5cff";function Dr(i,t,e){i.fillStyle="#030405",i.fillRect(0,0,t,e)}function lp(i,t,e,n){Dr(i,t,e);let s=t/2,r=e*.5,o=e*.042;i.save(),i.beginPath(),i.rect(8,8,t-16,e-16),i.clip(),i.translate(s,r),i.rotate(-n.roll*Et),i.translate(0,n.pitch*o),i.fillStyle="#1e8fe0",i.fillRect(-t*2,-e*4,t*4,e*4),i.fillStyle="#9a5a26",i.fillRect(-t*2,0,t*4,e*4),i.strokeStyle=mn,i.lineWidth=3,i.beginPath(),i.moveTo(-t*2,0),i.lineTo(t*2,0),i.stroke(),i.fillStyle=mn,i.font=Nn(e*.05),i.textBaseline="middle";for(let c=-30;c<=30;c+=2.5){if(c===0)continue;let h=-c*o;if(Math.abs(c-n.pitch)>16)continue;let u=c%10===0,d=c%5===0,f=u?t*.22:d?t*.12:t*.06;i.lineWidth=2.5,i.beginPath(),i.moveTo(-f/2,h),i.lineTo(f/2,h),i.stroke(),u&&(i.textAlign="right",i.fillText(String(Math.abs(c)),-f/2-6,h),i.textAlign="left",i.fillText(String(Math.abs(c)),f/2+6,h))}i.restore();let a=e*.4;i.save(),i.translate(s,r),i.strokeStyle=mn,i.fillStyle=mn,i.lineWidth=3,i.beginPath(),i.arc(0,0,a,-Math.PI/2-60*Et,-Math.PI/2+60*Et),i.stroke();for(let c of[-60,-45,-30,-20,-10,10,20,30,45,60]){let h=a+(Math.abs(c)%30===0?e*.05:e*.028),u=(c-90)*Et;i.beginPath(),i.moveTo(Math.cos(u)*a,Math.sin(u)*a),i.lineTo(Math.cos(u)*h,Math.sin(u)*h),i.stroke()}i.beginPath(),i.moveTo(0,-a),i.lineTo(-10,-a-16),i.lineTo(10,-a-16),i.closePath(),i.fill(),i.rotate(-n.roll*Et),i.fillStyle=qn,i.beginPath(),i.moveTo(0,-a+2),i.lineTo(-11,-a+20),i.lineTo(11,-a+20),i.closePath(),i.fill();let l=K(n.slip,-1,1)*22;i.fillRect(-11+l,-a+23,22,6),i.restore(),i.fillStyle="#111",i.strokeStyle=qn,i.lineWidth=3;for(let c of[-1,1])i.beginPath(),i.moveTo(s+c*t*.36,r-4),i.lineTo(s+c*t*.16,r-4),i.lineTo(s+c*t*.16,r+16),i.lineTo(s+c*t*.13,r+16),i.lineTo(s+c*t*.13,r+4),i.lineTo(s+c*t*.36,r+4),i.closePath(),i.fill(),i.stroke();i.fillRect(s-5,r-5,10,10),i.strokeRect(s-5,r-5,10,10),i.font=Fn(e*.065),i.textBaseline="alphabetic",i.textAlign="right",n.ra<2500&&(i.fillStyle=n.ra<200?qn:Xn,i.fillText(String(Math.round(n.ra)),t-18,e-18)),i.textAlign="left",i.fillStyle=Lr,i.fillText(String(Math.round(n.ias))+"KT",18,e-18),i.fillStyle=n.dh?qn:"rgba(0,0,0,0)",i.fillText(n.dh?"DH":"",18,40),i.fillStyle=Xn,i.textAlign="right",i.font=Fn(e*.05),i.fillText("ATT",t-18,40)}function cp(i,t,e,n){Dr(i,t,e);let s=t/2,r=e*.56,o=e*.38;i.save(),i.translate(s,r),i.rotate(-n.hdg*Et),i.strokeStyle=mn,i.fillStyle=mn,i.textAlign="center",i.textBaseline="middle";for(let a=0;a<360;a+=5){let l=(a-90)*Et,c=a%10===0?e*.05:e*.028;if(i.lineWidth=a%10===0?3:2,i.beginPath(),i.moveTo(Math.cos(l)*o,Math.sin(l)*o),i.lineTo(Math.cos(l)*(o-c),Math.sin(l)*(o-c)),i.stroke(),a%30===0){i.save(),i.rotate(a*Et),i.font=Nn(e*(a%90===0?.075:.06));let h={0:"N",90:"E",180:"S",270:"W"}[a]||String(a/10);i.fillText(h,0,-o+e*.1),i.restore()}}i.rotate(n.crs*Et),i.strokeStyle=Ru,i.fillStyle=Ru,i.lineWidth=5,i.beginPath(),i.moveTo(0,-o+e*.14),i.lineTo(0,-o*.35),i.moveTo(0,o*.35),i.lineTo(0,o-e*.14),i.stroke(),i.beginPath(),i.moveTo(0,-o+e*.12),i.lineTo(-10,-o+e*.17),i.lineTo(10,-o+e*.17),i.closePath(),i.fill(),i.beginPath(),i.moveTo(n.dev*o*.4,-o*.3),i.lineTo(n.dev*o*.4,o*.3),i.stroke(),i.fillStyle=mn;for(let a of[-2,-1,1,2])i.beginPath(),i.arc(a*o*.2,0,5,0,Math.PI*2),i.fill();i.restore(),i.save(),i.translate(s,r),i.rotate((n.bug-n.hdg)*Et),i.fillStyle=Lr,i.fillRect(-12,-o-2,24,10),i.restore(),i.strokeStyle=qn,i.lineWidth=4,i.beginPath(),i.moveTo(s,r-26),i.lineTo(s,r+26),i.moveTo(s-22,r-4),i.lineTo(s+22,r-4),i.moveTo(s-10,r+20),i.lineTo(s+10,r+20),i.stroke(),i.fillStyle=qn,i.beginPath(),i.moveTo(s,r-o+2),i.lineTo(s-10,r-o-16),i.lineTo(s+10,r-o-16),i.closePath(),i.fill(),i.fillStyle="#000",i.strokeStyle=mn,i.lineWidth=2,i.fillRect(s-44,6,88,e*.1),i.strokeRect(s-44,6,88,e*.1),i.fillStyle=Xn,i.font=Fn(e*.075),i.textAlign="center",i.textBaseline="middle",i.fillText(String(Math.round(n.hdg)%360).padStart(3,"0"),s,6+e*.05),i.font=Fn(e*.05),i.textAlign="left",i.fillStyle=Lr,i.fillText("HDG "+String(Math.round(n.bug)).padStart(3,"0"),14,22),i.fillStyle=Ru,i.fillText("CRS "+String(Math.round(n.crs)).padStart(3,"0"),14,e-22),i.textAlign="right",i.fillStyle=Xn,i.fillText("GS "+Math.round(n.gs),t-14,22),i.fillText("VOR1",t-14,e-22)}function hp(i,t,e,n,s,r,o,a=null){i.strokeStyle="#9aa",i.lineWidth=2,i.strokeRect(t,e,n,s);let l=K(r,0,1);i.fillStyle=o,i.fillRect(t+3,e+s-3-(s-6)*l,n-6,(s-6)*l),a!==null&&(i.fillStyle=Ac,i.fillRect(t-4,e+s*(1-a)-2,n+8,4))}function Cu(i,t,e,n,s,r,o,a,l,c,h,u){i.fillStyle=mn,i.font=Nn(u*.07),i.textAlign="center",i.fillText(r,t+n*1.6,e-u*.05);for(let d=0;d<2;d++){let f=t+d*n*2.2,p=o[d]/a,v=p>l;hp(i,f,e,n,s,p,v?Ac:Xn,l),i.fillStyle=v?Ac:Xn,i.font=Fn(u*.065),i.fillText(c(o[d]),f+n/2,e+s+u*.075)}}function up(i,t,e,n){Dr(i,t,e);let s=t*.055,r=e*.58,o=e*.17;Cu(i,t*.05,o,s,r,"TRQ %",n.trq,120,100/120,a=>String(Math.round(a)),t,e),Cu(i,t*.375,o,s,r,"ITT \xB0C",n.itt,1e3,800/1e3,a=>String(Math.round(a)),t,e),Cu(i,t*.7,o,s,r,"NP RPM",n.np,1300,1212/1300,a=>String(Math.round(a)),t,e),i.textAlign="left",i.font=Nn(e*.06),i.fillStyle=Lr,i.fillText("1",t*.035,e*.97),i.textAlign="right",i.fillText("2",t*.965,e*.97),n.rev&&(i.textAlign="center",i.fillStyle=qn,i.fillText("BETA / REV",t/2,e*.97))}function dp(i,t,e,n){Dr(i,t,e),i.textBaseline="middle",[["NH %",n.nh,r=>r.toFixed(1),r=>r>103],["FF KG/H",n.ff,r=>String(Math.round(r)),()=>!1],["OIL PSI",n.oilP,r=>String(Math.round(r)),r=>r<40],["OIL \xB0C",n.oilT,r=>String(Math.round(r)),r=>r>125]].forEach(([r,o,a,l],c)=>{let h=e*(.16+c*.225);i.font=Nn(e*.11),i.textAlign="center",i.fillStyle=mn,i.fillText(r,t/2,h),i.font=Fn(e*.13);for(let u=0;u<2;u++)i.fillStyle=l(o[u])?qn:Xn,i.textAlign=u===0?"left":"right",i.fillText(a(o[u]),u===0?t*.04:t*.96,h)})}function fp(i,t,e,n){Dr(i,t,e),i.textBaseline="middle",i.textAlign="center",i.fillStyle=mn,i.font=Nn(e*.07),i.fillText("FUEL KG",t*.2,e*.09);for(let a=0;a<2;a++){let l=t*(.07+a*.16);hp(i,l,e*.16,t*.07,e*.5,n.fuel[a]/2400,n.fuel[a]<300?qn:Xn),i.fillStyle=n.fuel[a]<300?qn:Xn,i.font=Fn(e*.06),i.fillText(String(Math.round(n.fuel[a])),l+t*.035,e*.74)}i.fillStyle=Lr,i.font=Fn(e*.065),i.fillText("TOT "+Math.round(n.fuel[0]+n.fuel[1]),t*.2,e*.88),i.fillStyle=mn,i.font=Nn(e*.07),i.fillText("HYD PSI",t*.52,e*.09),["1","2"].forEach((a,l)=>{i.fillStyle=n.hyd>2500?Xn:qn,i.font=Fn(e*.075),i.fillText(String(Math.round(n.hyd/10)*10),t*.52,e*(.24+l*.13)),i.fillStyle=mn,i.font=Nn(e*.05),i.fillText("SYS "+a,t*.52,e*(.31+l*.13))}),i.fillStyle=mn,i.font=Nn(e*.06),i.fillText("PITCH TRIM",t*.52,e*.62),i.strokeStyle="#9aa",i.lineWidth=2,i.strokeRect(t*.42,e*.68,t*.2,e*.06),i.fillStyle=Xn,i.fillRect(t*.52+K(n.trim,-1,1)*t*.095-4,e*.665,8,e*.09),i.font=Nn(e*.05),i.fillStyle=mn,i.fillText("DN",t*.4,e*.82),i.fillText("UP",t*.64,e*.82),i.font=Nn(e*.07),i.fillText("FLAP",t*.84,e*.09);let s=t*.76,r=e*.22;i.strokeStyle="#9aa",i.beginPath(),i.moveTo(s,r),i.lineTo(s,r+e*.5),i.stroke(),i.font=Nn(e*.05),i.textAlign="left";for(let a of[0,10,15,25]){let l=r+a/25*e*.5;i.fillStyle=mn,i.fillRect(s,l-1,12,2),i.fillText(String(a),s+18,l)}i.fillStyle=n.flapMoving?qn:Xn;let o=r+K(n.flap,0,25)/25*e*.5;i.beginPath(),i.moveTo(s-4,o),i.lineTo(s-22,o-9),i.lineTo(s-22,o+9),i.closePath(),i.fill(),i.textAlign="center",i.font=Fn(e*.075),i.fillText(String(Math.round(n.flap)),t*.84,e*.86)}function pp(i,t,e,n){Dr(i,t,e),i.textBaseline="middle",i.textAlign="center";for(let s=0;s<4;s++){let r=t*(.04+s*.105),o=t*.075,a=n.tanks[s];i.strokeStyle="#6a8",i.lineWidth=2,i.strokeRect(r,e*.2,o,e*.6),i.fillStyle=n.doors[s]?Ac:n.foam?"#9df":"#2fd04a",i.fillRect(r+3,e*.2+3+(e*.6-6)*(1-a),o-6,(e*.6-6)*a),i.fillStyle=mn,i.font=Nn(e*.14),i.fillText(String(s+1),r+o/2,e*.1)}i.fillStyle=n.foam?"#9df":Xn,i.font=Fn(e*.36),i.textAlign="right",i.fillText(String(Math.round(n.total)),t*.86,e*.42),i.font=Nn(e*.16),i.textAlign="left",i.fillStyle=mn,i.fillText("LIT",t*.88,e*.42),i.font=Fn(e*.15),i.textAlign="left",i.fillStyle=n.scoop?qn:"#2a5a32",i.fillText((n.scoop,"SCOOP"),t*.47,e*.82),i.fillStyle=n.foam?Lr:"#2a4a5a",i.fillText("FOAM "+(n.foam?n.foamPct+"%":"OFF"),t*.66,e*.82)}function mp(i,t,e,n){i.fillStyle="#100604",i.fillRect(0,0,t,e),i.fillStyle="#ff8a1a",i.shadowColor="#ff6a00",i.shadowBlur=8,i.font=Fn(e*.38),i.textBaseline="middle",i.textAlign="left",i.fillText(n.mode,t*.05,e*.32),i.textAlign="right",i.fillText(String(n.preset).padStart(3," ")+"%",t*.95,e*.32),i.font=Fn(e*.22),i.textAlign="left",i.fillText(n.armed?"ARM":"SAFE",t*.05,e*.76),i.shadowBlur=0;for(let s=0;s<4;s++){let r=t*(.42+s*.14);i.fillStyle=n.doors[s]?"#ff3a1a":"#3a1a0c",i.fillRect(r,e*.64,t*.1,e*.24)}}function jo(i){let e=288.15-.0065*Math.max(-500,Math.min(11e3,i)),n=101325*Math.pow(e/288.15,5.25588),s=n/(287.053*e);return{T:e,p:n,rho:s,a:Math.sqrt(1.4*287.053*e)}}var Ns=[{id:"SALVO",label:"SALVO (4 porte)"},{id:"COPPIE",label:"2 + 2 porte"},{id:"SEQ",label:"SEQUENZA 1-2-3-4"},{id:"SINGOLA",label:"1 porta"}],gp=te.waterCapacity/4,Jv=gp/1e3/1.25,Kv=.42,Rc=class{constructor(t){this.index=t,this.lever=0,this.reverseLever=0,this.reverse=0,this.running=!0,this.nh=70,this.np=100,this.pf=.06,this.shaftPower=0,this.torque=0,this.itt=500,this.ff=0,this.oilP=60,this.oilT=70,this.feathered=!1,this.fire=!1}update(t,e,n,s){if(!this.running){this.nh=He(this.nh,0,6,t),this.pf=0,this.np=He(this.np,this.feathered?0:20,15,t),this.shaftPower=0,this.torque=0,this.itt=He(this.itt,e+40,30,t),this.ff=0,this.oilP=He(this.oilP,0,20,t);return}let r=s?this.reverseLever:0;this.reverse=He(this.reverse,r,.8,t);let o=r>0?.05+.45*r:this.lever,a=.055+.945*K(o,0,1),l=68+32*Math.pow(a,.6),c=l>this.nh?6.5+.12*(this.nh-66):11;this.nh=He(this.nh,l,c,t),this.pf=K(Math.pow(K((this.nh-68)/32,0,1),1/.6),0,1);let h=K(1-(1-jo(n).rho/1.225)*.6,.5,1)*(1-Math.max(0,e-30)*.008);this.shaftPower=this.reverse>.02?0:this.pf*te.enginePower*h,this.np=He(this.np,this.pf>.08||!s?100:86,12,t),this.torque=this.pf*h*100/(this.np/100),this.itt=He(this.itt,e+470+330*this.pf*(1+(1-h)*.6),120,t),this.ff=115+540*this.pf,this.oilP=He(this.oilP,55+10*this.pf,10,t),this.oilT=He(this.oilT,62+25*this.pf,.3,t)}},ta=class{constructor(){this.fuel=2300,this.tanks=[0,0,0,0],this.foamConc=te.foamCapacity,this.foamMix=[0,0,0,0],this.foamArmed=!1,this.flapIndex=0,this.flapPos=0,this.gearDown=!0,this.gearPos=1,this.probesCmd=!1,this.probePos=0,this.doorOpen=[0,0,0,0],this.doorCmd=[!1,!1,!1,!1],this.doorEmptyTime=[0,0,0,0],this.outflow=[0,0,0,0],this.dropMode=0,this.dropQueue=[],this.scoopPreset=1,this.engines=[new Rc(0),new Rc(1)],this.elevTrim=0,this.ailTrim=.15,this.rudTrim=0,this.parkingBrake=!1,this.noseSteer=0,this.lights={nav:!0,beacon:!0,strobe:!0,landing:!1},this.events=[],this.warn={stall:!1,overspeed:!1,flapSpeed:!1,gearWater:!1,gearUpLand:!1,probeSpeed:!1,tanksFull:!1,lowFuel:!1,overweight:!1,master:!1,caution:!1},this.scoopedThisRun=0,this.totalDropped=0,this.overflowRate=0,this.time=0,this._wasScooping=!1,this._fullAnnounced=!1}emit(t,e,n="info"){this.events.push({type:t,text:e,level:n,t:this.time})}waterLiters(){return this.tanks[0]+this.tanks[1]+this.tanks[2]+this.tanks[3]}waterMass(){return this.waterLiters()*1+this.foamConc*1.05}totalMass(){return te.emptyMass+this.fuel+this.waterMass()}setFlaps(t){let e=te.flapDetents.length,n=K(this.flapIndex+t,0,e-1);n!==this.flapIndex&&(this.flapIndex=n,this.emit("flaps",`Flap ${te.flapDetents[n]}\xB0`))}toggleGear(t){if(this.gearDown&&t&&t.out.onGround){this.emit("warn","Carrello bloccato: aereo a terra (sicurezza WOW)","caution");return}this.gearDown=!this.gearDown,this.emit("gear",this.gearDown?"Carrello: ESTRAZIONE":"Carrello: RETRAZIONE")}toggleProbes(t){this.probesCmd=!this.probesCmd,this.probesCmd&&t&&t.out.ias>te.vProbeMax*.514444&&this.emit("warn","Velocit\xE0 eccessiva per le sonde!","caution"),this.emit("probes",this.probesCmd?"Sonde: ESTESE":"Sonde: RETRATTE")}cycleDropMode(){this.dropMode=(this.dropMode+1)%Ns.length,this.emit("mode","Modalit\xE0 sgancio: "+Ns[this.dropMode].label)}cycleScoopPreset(){let t=[.25,.5,.75,1],e=(t.indexOf(this.scoopPreset)+1)%t.length;this.scoopPreset=t[e],this.emit("preset",`Quantit\xE0 di pescaggio preselezionata: ${Math.round(this.scoopPreset*100)}% (${Math.round(this.scoopPreset*te.waterCapacity)} L)`)}toggleFoam(){this.foamArmed=!this.foamArmed,this.emit("foam",this.foamArmed?"Schiumogeno: ARMATO":"Schiumogeno: DISINSERITO")}drop(){if(this.waterLiters()<5){this.emit("warn","Serbatoi vuoti","caution");return}let t=Ns[this.dropMode].id,e=this.time,n=[0,1,2,3].filter(s=>this.tanks[s]>5&&!this.doorCmd[s]);if(n.length){if(t==="SALVO")n.forEach(s=>this.dropQueue.push({i:s,t:e}));else if(t==="COPPIE"){let s=n.filter(a=>a<2),r=n.filter(a=>a>=2);(s.length?s:r).forEach(a=>this.dropQueue.push({i:a,t:e})),s.length&&r.length&&r.forEach(a=>this.dropQueue.push({i:a,t:e+.45}))}else t==="SEQ"?n.forEach((s,r)=>this.dropQueue.push({i:s,t:e+r*.32})):this.dropQueue.push({i:n[0],t:e});this.emit("drop","SGANCIO!","drop")}}addScoopedWater(t){if(t<=0)return this.overflowRate=0,0;let e=gp,n=this.waterLiters(),s=Math.min(te.waterCapacity,Math.max(this.scoopPreset*te.waterCapacity,n)),r=Math.max(0,Math.min(t,te.waterCapacity-n)),o=0;for(let a=0;a<4;a++){if(this.doorOpen[a]>.1)continue;let l=Math.min(r/4,e-this.tanks[a]);this.tanks[a]+=l,o+=l}return this.overflowRate=(t-o)/Math.max(1e-6,1/240),this.scoopedThisRun+=o,this.waterLiters()>=s-2&&this.probesCmd&&(this.probesCmd=!1,this.emit("scoopdone",`Quantit\xE0 raggiunta: ${Math.round(this.waterLiters())} L \u2014 sonde retratte automaticamente`,"good")),o}update(t,e){this.time+=t;let n=e.out,s=n.onGround||n.onWater,r=jo(e.pos.y).T-273.15+13;for(let p of this.engines)p.update(t,r,e.pos.y,s);let o=te.flapDetents[this.flapIndex];this.flapPos=He(this.flapPos,o,2.2,t),this.gearPos=He(this.gearPos,this.gearDown?1:0,1/11,t),this.probePos=He(this.probePos,this.probesCmd?1:0,1/1.8,t);for(let p=this.dropQueue.length-1;p>=0;p--){let v=this.dropQueue[p];this.time>=v.t&&(this.doorCmd[v.i]=!0,this.doorEmptyTime[v.i]=0,this.dropQueue.splice(p,1))}let a=Math.max(.05,n.nz)*9.80665;for(let p=0;p<4;p++){if(this.doorOpen[p]=He(this.doorOpen[p],this.doorCmd[p]?1:0,this.doorCmd[p]?5:1.6,t),this.outflow[p]=0,this.doorOpen[p]>.02&&this.tanks[p]>0){let v=this.tanks[p]/1e3/Jv+.12,m=Kv*this.doorOpen[p]*Math.sqrt(2*a*v),g=Math.min(this.tanks[p],m*1e3*t);this.tanks[p]-=g,this.outflow[p]=g/t,this.totalDropped+=g,this.tanks[p]<=.5&&(this.tanks[p]=0,this.foamMix[p]=0)}this.doorCmd[p]&&this.tanks[p]<=.5&&(this.doorEmptyTime[p]+=t,this.doorEmptyTime[p]>1.2&&(this.doorCmd[p]=!1))}if(this.foamArmed&&this.foamConc>0){for(let p=0;p<4;p++)if(this.tanks[p]>50&&this.foamMix[p]<1){let v=this.tanks[p]*.005*(1-this.foamMix[p]),m=Math.min(v,8*t,this.foamConc);this.foamConc-=m,this.foamMix[p]=K(this.foamMix[p]+m/(this.tanks[p]*.005),0,1)}}let l=(this.engines[0].ff+this.engines[1].ff)/3600*t;this.fuel=Math.max(0,this.fuel-l),this.fuel<=0&&this.engines.forEach(p=>p.running=!1);let c=this.warn,h=n.ias/.514444;c.stall=n.stall,c.overspeed=h>te.vmo;let u=this.flapPos>1?te.vfe[te.flapDetents[Math.max(1,this.flapIndex)]]||125:999;c.flapSpeed=h>u+3,c.gearWater=this.gearPos>.5&&n.surfaceUnder==="water"&&n.radAlt<120&&n.vs<-.5&&!n.onGround&&!n.onWater,c.gearUpLand=this.gearPos<.99&&n.surfaceUnder==="land"&&n.radAlt<150&&this.flapPos>20&&n.vs<-.5,c.probeSpeed=this.probePos>.1&&h>te.vProbeMax;let d=this.waterLiters()>=te.waterCapacity-3;d&&!this._fullAnnounced&&(this._fullAnnounced=!0,this.emit("full","SERBATOI PIENI \u2014 ritrarre le sonde!","good")),this.waterLiters()<te.waterCapacity-300&&(this._fullAnnounced=!1),c.tanksFull=d&&this.probePos>.2,c.lowFuel=this.fuel<400,c.overweight=this.totalMass()>te.maxAfterScoop,c.master=c.stall||c.overspeed||c.gearWater||c.gearUpLand,c.caution=c.flapSpeed||c.probeSpeed||c.lowFuel||c.overweight||c.tanksFull;let f=n.scoopRate>20;f&&!this._wasScooping&&(this.scoopedThisRun=0,this.emit("scoop","Pescaggio in corso\u2026","info")),this._wasScooping=f}};var re=(i,t,e=0)=>new D(e,t-nt.hCG,i-nt.sCG),_e=1.5,Pu={s:2.42,h:2.77,y:-.52};function Zn(i,{y:t=null,h:e=null},n,s){let r=Ls(i),o=t!==null?bc(i,t):Sc(i,e),[a,l]=Ko(r,o),[c,h]=Ko(r,Math.min(1,o+.005)),u=h-l,d=-(c-a),f=Math.hypot(u,d)||1;return re(i,l-d/f*n,s*(a-u/f*n))}var Cc=class{constructor({quality:t="medium"}={}){this.group=new Kt,this.group.name="cockpit",this.static=new Map,this._mats(),this._shell(),this._frames(),this._floorBulkhead(),this._panel(),this._glareshield(),this._pedestal(),this._overhead(),this._yokes(),this._pedals(),this._seats(),this._details(),this._flush(),this.group.traverse(n=>{n.isMesh&&(n.receiveShadow=!0,n.castShadow=!1)}),this.eye=re(Pu.s,Pu.h,Pu.y);let e=new Co(16773340,1.6,3.2,1.6);e.position.copy(re(2.3,3,0)),this.group.add(e),this.fill=e}_mats(){let t=(e,n=.8,s=0,r={})=>new be({color:e,roughness:n,metalness:s,envMapIntensity:.35,...r});this.M={wall:t(9211530,.92),wallDark:t(5593435,.85),panel:t(8093566,.72),hood:t(6251365,.95),black:t(1118739,.6),bezel:t(1447704,.45),button:t(2895665,.5),floor:t(3422268,.95),seat:t(2764081,.9),seatCushion:t(4016732,.95),metal:t(10133926,.35,.8),chrome:t(14080734,.15,1),frame:t(5922400,.65,.1),column:t(7633018,.45,.3),yoke:t(3027252,.5,.1),grip:t(1710876,.75),red:t(11866651,.5),yellowBlack:t(14200832,.5),white:t(15263976,.55),knobRed:t(12587024,.45),knobBlack:t(1052688,.4),visor:new be({color:1060888,roughness:.2,transparent:!0,opacity:.55,side:Qe}),needle:new Ye({color:15921906}),needleOrange:new Ye({color:16751120}),cabinDark:new Ye({color:658188,side:Ke})}}_add(t,e){this.static.has(e)||this.static.set(e,[]);let n=(t.index,t);n.attributes.uv||n.setAttribute("uv",new Zt(new Float32Array(n.attributes.position.count*2),2)),this.static.get(e).push(n)}_box(t,e,n,s,r,o=null){let a=new qt(t,e,n);o&&a.applyEuler(o),a.translate(s.x,s.y,s.z),this._add(a,r)}_cyl(t,e,n,s,r,o=null,a=12){let l=new ce(e,t,n,a);o&&l.applyEuler(o),l.translate(s.x,s.y,s.z),this._add(l,r)}_flush(){for(let[t,e]of this.static){let n=us(e.map(r=>(r.index,r)));n.computeVertexNormals();let s=new $(n,t);this.group.add(s)}this.static.clear()}_shell(){let{strips:t}=Qo({s0:.6,s1:3.98,inset:.05,inside:!0,cutWindows:!0});for(let e of t){let n=new $(e,this.M.wall);n.name="cockpitShell",this.group.add(n)}}_frames(){let e=(s,r=.03)=>{let o=new Ki(new zi(s),Math.max(4,s.length*2),r,6,!1);this._add(o,this.M.frame)};for(let s of[-1,1]){let r=m=>.93-(m-1.2)*.1,o=[],a=[],l=[],c=[];for(let m=.05;m<=r(1.2)+1e-6;m+=.05)o.push(Zn(1.2,{y:m},.035,s));for(let m=.05;m<=r(2.02)+1e-6;m+=.05)a.push(Zn(2.02,{y:m},.035,s));for(let m=1.2;m<=2.02+1e-6;m+=.05)l.push(Zn(m,{y:r(m)+.038},.035+.005,s));for(let m=1.2;m<=2.02+1e-6;m+=.05)c.push(Zn(m,{y:.032},.035,s));e(o,.025),e(a,.03),e(l,.062),e(c,.022);let h=[],u=[];for(let m=1.32;m<=2.04+1e-6;m+=.04)h.push(Zn(m,{h:2.43},.035,s));for(let m=2.43;m<=Oe(2.04)-.04+1e-6;m+=.05)u.push(Zn(2.04,{h:m},.035,s));let d=[];for(let m=1.32;m<=2.04+1e-6;m+=.04)d.push(Zn(m,{h:Oe(m)-.04},.035,s));e(h,.03),e(u,.034),e(d,.04);let f=m=>Math.min(Oe(m)-.3,3.18);for(let[m,g]of[[2.13,2.66],[2.74,3.3]]){let S=[],_=[],x=[],M=[];for(let b=m;b<=g+1e-6;b+=.04)S.push(Zn(b,{h:2.43},.035,s)),_.push(Zn(b,{h:f(b)},.035,s));for(let b=2.43;b<=f(m)+1e-6;b+=.05)x.push(Zn(m,{h:b},.035,s));for(let b=2.43;b<=f(g)+1e-6;b+=.05)M.push(Zn(g,{h:b},.035,s));e(S,.028),e(_,.026),e(x,.028),e(M,.028)}let p=[];for(let[m,g]of[[2.12,.42],[2.12,.78],[2.6,.78],[2.6,.42],[2.12,.42]])p.push(Zn(m,{y:g},.035,s));let v=[];for(let m=0;m<p.length-1;m++)for(let g=0;g<6;g++)v.push(p[m].clone().lerp(p[m+1],g/6));e(v,.02),this._box(.03,.04,.16,Zn(2.4,{h:2.5},.035+.04,s),this.M.metal)}}_floorBulkhead(){let t=new ke(2.3,3.2);t.rotateX(-Math.PI/2),t.translate(0,_e-nt.hCG,2.35-nt.sCG),this._add(t,this.M.floor),this._box(2.2,.38,.03,re(1.42,_e+.19,0),this.M.wallDark);let e=3.96;this._box(.82,1.9,.04,re(e,_e+.95,-.77),this.M.wall),this._box(.82,1.9,.04,re(e,_e+.95,.77),this.M.wall),this._box(.72,.35,.04,re(e,_e+1.72,0),this.M.wall);let n=new $(new qt(2.5,2.4,3),this.M.cabinDark);n.position.copy(re(e+1.52,_e+.9,0)),this.group.add(n),this._box(1.6,1.2,.05,re(e+2.8,_e+.3,0),this.M.wallDark),this._cyl(.06,.06,.42,re(3.85,_e+.35,-.95),this.M.red),this._cyl(.02,.02,.08,re(3.85,_e+.6,-.95),this.M.black)}_local(t){let e=new Map,n=(o,a)=>{o.attributes.uv||o.setAttribute("uv",new Zt(new Float32Array(o.attributes.position.count*2),2)),e.has(a)||e.set(a,[]),e.get(a).push(o)};return{add:n,box:(o,a,l,c,h,u,d,f=0)=>{let p=new qt(o,a,l);f&&p.rotateX(f),p.translate(c,h,u),n(p,d)},flush:()=>{for(let[o,a]of e){let l=us(a);l.computeVertexNormals(),t.add(new $(l,o))}e.clear()}}}_screen(t,e,n,s,r,o,a,{buttons:l=5,side:c=!1}={}){t.box(o+.014*2,.014,.016,s,r+a/2+.014/2,.016/2,this.M.bezel),t.box(o+.014*2,.014*1.6,.016,s,r-a/2-.014*.8,.016/2,this.M.bezel),t.box(.014,a,.016,s-o/2-.014/2,r,.016/2,this.M.bezel),t.box(.014,a,.016,s+o/2+.014/2,r,.016/2,this.M.bezel),t.box(o,a,.004,s,r,.002,this.M.black);for(let f=0;f<l;f++){let p=s-o/2+o/l*(f+.5);t.box(.012,.008,.006,p,r-a/2-.014*.8,.016+.003,this.M.button)}if(c)for(let f=0;f<4;f++)t.box(.007,.012,.006,s+o/2+.014/2,r+a*.35-f*a*.23,.016+.003,this.M.button);let d=new $(new ke(o,a),this.screenMat(n));return d.position.set(s,r,.006),e.add(d),d}screenMat(t){return new Ye({map:t.texture,toneMapped:!1,color:14211288})}_panel(){let t=14*Et,e=re(1.62,2.16,0),n=new Kt;n.position.copy(e),n.rotation.x=-t,this.group.add(n),this.panelGroup=n;let s=this._local(n),r={asi:[-.76,.13,.056],alt:[-.34,.13,.056],vsi:[-.34,-.05,.05],radalt:[-.76,-.05,.046],adi:[-.55,.14,.17,.14],hsi:[-.55,-.05,.17,.15]},o=(O,H)=>{let V=r[O].slice();return V[0]*=H,V},a=[-.11,.14,.2,.15],l=[-.11,-.04,.18,.1],c=[.11,.14,.2,.15],h=[.11,-.04,.2,.1],u=document.createElement("canvas");u.width=2048,u.height=640;let d=u.getContext("2d");d.fillStyle="#7d817f",d.fillRect(0,0,u.width,u.height);for(let O=0;O<9e3;O++)d.fillStyle=Math.random()<.5?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.04)",d.fillRect(Math.random()*u.width,Math.random()*u.height,2,2);let f=O=>(O+1)/2*u.width,p=O=>(.31-O)/.64*u.height,v=(O,H,V,ot)=>{d.strokeStyle="#4c504f",d.lineWidth=4,d.strokeRect(f(O),p(ot),f(V)-f(O),p(H)-p(ot)),d.strokeStyle="rgba(255,255,255,0.18)",d.lineWidth=2,d.strokeRect(f(O)+3,p(ot)+3,f(V)-f(O)-6,p(H)-p(ot)-6),d.fillStyle="#5b5f5e";for(let[rt,yt]of[[O+.012,H+.012],[V-.012,H+.012],[O+.012,ot-.012],[V-.012,ot-.012]])d.beginPath(),d.arc(f(rt),p(yt),6,0,Math.PI*2),d.fill(),d.strokeStyle="#2e3130",d.lineWidth=2,d.beginPath(),d.moveTo(f(rt)-4,p(yt)),d.lineTo(f(rt)+4,p(yt)),d.stroke()};v(-.965,-.325,-.245,.3),v(.245,-.325,.965,.3),v(-.235,-.325,.235,.3);let m=(O,H,V,ot=20,rt="#f4f4f0")=>{d.fillStyle=rt,d.font=`bold ${ot}px Arial`,d.textAlign="center",d.textBaseline="middle",d.fillText(O,f(H),p(V))};for(let O of[-1,1])m("AIRSPEED",.76*O,.215,15),m("ALTITUDE",.34*O,.215,15),m("EADI",.55*O,.255,16),m("EHSI",.55*O,.05,14),m("RAD ALT",.76*O,.025,14),m("VERT SPEED",.34*O,.025,14),m("CLOCK",.9*O,-.145,12),m("G",.76*O,-.145,12);m("ENGINE",-.11,.255,16),m("SYSTEMS",.11,.255,16),m("STBY ATT",0,-.145,12),m("LANDING GEAR",-.2,-.125,13),m("UP",-.175,-.205,12),m("DN",-.175,-.295,12),m("NOSE  LH  RH",-.2,-.145,11),d.fillStyle="#1c1e1f",d.fillRect(f(.12),p(-.235),f(.22)-f(.12),p(-.305)-p(-.235)),d.fillStyle="#e8e8e0",d.font="bold 11px Arial",d.textAlign="left",["VMO 200 KIAS","VFE 10\xB0 165  15\xB0 145  25\xB0 125","SCOOP 60-95 KIAS","PROBES EXT MAX 105"].forEach((O,H)=>d.fillText(O,f(.125),p(-.245)+H*15)),["NAV","STROBE","BCN","TAXI","LDG L","LDG R","WIPER","PITOT","PROBE HTR","FOAM"].forEach((O,H)=>m(O,-.9+H*.065,-.305,10));let S=new nn(u);S.colorSpace=Pe,S.anisotropy=8;let _=new pr;_.moveTo(-.97,-.33),_.lineTo(.97,-.33),_.lineTo(.97,.18),_.quadraticCurveTo(.95,.31,.8,.31),_.lineTo(-.8,.31),_.quadraticCurveTo(-.95,.31,-.97,.18),_.closePath();let x=new bo(_,8),M=x.attributes.uv,b=x.attributes.position;for(let O=0;O<M.count;O++)M.setXY(O,(b.getX(O)+1)/2,(b.getY(O)+.33)/.64);n.add(new $(x,new be({map:S,roughness:.75,envMapIntensity:.3}))),s.box(1.94,.64,.12,0,-.01,-.065,this.M.panel);let w=new Tc;this.atlas=w;let y=new Ye({map:w.texture}),E=new Ye({map:w.texture,transparent:!0});this.gauges={};let R=(O,H=.006,V=this.M.needle,ot=.15)=>{let rt=new qt(H,O*(1+ot),.002);return rt.translate(0,O*(1-ot)/2,0),new $(rt,V)},A=(O,H,V,ot,rt,yt=[])=>{let It=new Kt;It.position.set(V,ot,.004),n.add(It),H&&It.add(new $(w.disc(H,rt),y));let Vt=new $(w.disc("bezel",rt*1.16),E);Vt.position.z=.006,It.add(Vt);let J=new ce(rt*1.16,rt*1.16,.03,24);J.rotateX(Math.PI/2),J.translate(V,ot,-.008),s.add(J,this.M.black),s.box(rt*2.5,rt*2.5,.006,V,ot,.001,this.M.bezel);let tt=yt.map(([zt,_t,Tt])=>{let St=new Kt;return St.position.z=.004,St.add(R(rt*zt,_t,Tt)),It.add(St),St}),ht=new $(new _n(rt*.08,12),this.M.black);return ht.position.z=.006,It.add(ht),this.gauges[O]={grp:It,ns:tt},this.gauges[O]};this.adiDisplay=new di(512,424,lp),this.hsiDisplay=new di(512,452,cp);for(let[O,H]of[["c_",-1],["f_",1]]){let[V,ot,rt]=o("asi",H);A(O+"asi","asi",V,ot,rt,[[.85,.008]]);let[yt,It,Vt]=o("alt",H);A(O+"alt","alt",yt,It,Vt,[[.86,.007],[.55,.012],[.92,.003,this.M.needleOrange]]);let[J,tt,ht]=o("vsi",H);A(O+"vsi","vsi",J,tt,ht,[[.85,.008]]);let[zt,_t,Tt]=o("radalt",H);A(O+"radalt","radalt",zt,_t,Tt,[[.85,.007]]);let[St,Wt,Yt,ne]=o("adi",H);this._screen(s,n,this.adiDisplay,St,Wt,Yt,ne,{buttons:0,side:!1});let[Nt,kt,oe,pe]=o("hsi",H);this._screen(s,n,this.hsiDisplay,Nt,kt,oe,pe,{buttons:5}),A(O+"clock","clock",.9*H,-.2,.032,[[.6,.006],[.85,.004],[.9,.0025,this.M.needleOrange]]),A(O+"g","g",.76*H,-.2,.034,[[.85,.006]]);for(let le=0;le<3;le++){let ie=new ce(.011,.013,.016,14);ie.rotateX(Math.PI/2),ie.translate(.55*H-.05+le*.05,-.2,.008),s.add(ie,this.M.knobBlack)}}let C=new Kt;C.position.set(0,-.215,.004),n.add(C);let L=op();C.add(new $(new _n(.04,40),L));let P=new $(w.disc("adiOverlay",.04),E);P.position.z=.003,C.add(P);let F=new $(w.disc("bezel",.047),E);F.position.z=.006,C.add(F),s.box(.12,.12,.006,0,-.215,.001,this.M.bezel),this.gauges.sby={mat:L},this.engDisplay=new di(512,384,up),this.engLower=new di(512,284,dp),this.sysDisplay=new di(512,384,fp),this._screen(s,n,this.engDisplay,...a,{buttons:4}),this._screen(s,n,this.engLower,...l,{buttons:0}),this._screen(s,n,this.sysDisplay,...c,{buttons:4}),this.annunciator=new di(512,256,ap),this._screen(s,n,this.annunciator,...h,{buttons:0});let U=new Kt;U.position.set(-.2,-.25,.01),n.add(U),s.box(.05,.11,.008,-.2,-.25,.004,this.M.bezel);let B=new qt(.012,.012,.09);B.translate(0,0,.045),U.add(new $(B,this.M.chrome));let X=new $(new ce(.022,.022,.014,16),this.M.white);X.rotation.x=Math.PI/2,X.position.z=.09,U.add(X),this.gearLever=U,this.gearLights=[];for(let O=0;O<3;O++){let H=new $(new _n(.01,14),new Ye({color:663562,toneMapped:!1}));H.position.set(-.225+O*.025,-.165,.006),n.add(H),this.gearLights.push(H)}for(let O=0;O<10;O++){let H=new ce(.004,.006,.03,8);H.rotateX(Math.PI/2+.4),H.translate(-.9+O*.065,-.275,.02),s.add(H,this.M.chrome),s.box(.022,.03,.004,-.9+O*.065,-.275,.002,this.M.bezel)}s.flush()}_glareshield(){let n=new qt(1.8,.03,.38);n.rotateX(-.235),n.translate(0,2.55-nt.hCG,1.43-nt.sCG),this._add(n,this.M.hood),this._box(1.8,.02,.09,re(1.565,2.472,0),this.M.hood);let s=new ce(.014,.014,1.8,12);s.rotateZ(Math.PI/2),s.translate(0,2.585-nt.hCG,1.618-nt.sCG),this._add(s,this.M.hood);let r=new Kt;r.position.copy(re(1.605,2.53,0)),r.rotation.x=-.18,this.group.add(r);let o=this._local(r),a=document.createElement("canvas");a.width=2048,a.height=132;let l=a.getContext("2d");l.fillStyle="#6c706f",l.fillRect(0,0,a.width,a.height);let c=p=>(p+1.8/2)/1.8*a.width,h=p=>(.115/2-p)/.115*a.height;l.strokeStyle="#3e4241",l.lineWidth=4;for(let[p,v]of[[-.89,-.47],[-.45,.3],[.32,.45],[.47,.89]])l.strokeRect(c(p),h(.052),c(v)-c(p),h(-.052)-h(.052));let u=(p,v,m,g=14)=>{l.fillStyle="#f2f2ee",l.font=`bold ${g}px Arial`,l.textAlign="center",l.textBaseline="middle",l.fillText(p,c(v),h(m))};for(let p of[-1,1])u("CRS",.84*p,.04,12),u("HDG",.74*p,.04,12),u("MASTER",.58*p,.043,11),u(p<0?"ENG 1 FIRE":"ENG 2 FIRE",.385*p,.043,12),u("PULL",.385*p,-.045,10);u("WATER STATUS",-.205,.045,13),u("WATER DROP CONTROL",.145,.045,13);for(let[p,v]of[["MODE",.03],["QTY",.09],["ARM",.15],["DROP",.21],["FOAM",.27]])u(p,v,-.045,10);u("MAX LAND WT 19890 KG",-.205,-.047,10);let d=new nn(a);d.colorSpace=Pe,d.anisotropy=8,r.add(new $(new ke(1.8,.115),new be({map:d,roughness:.8,envMapIntensity:.3}))),o.box(1.8,.115,.05,0,0,-.026,this.M.hood),this.waterStatus=new di(512,168,pp),this._screen(o,r,this.waterStatus,-.205,0,.2,.066,{buttons:0}),this.dropCtl=new di(256,96,mp),this._screen(o,r,this.dropCtl,.15,.012,.13,.047,{buttons:0});for(let p=0;p<5;p++)o.box(.034,.018,.012,.03+p*.06,-.028,.006,p===3?this.M.red:this.M.button);this.masterLights=[];for(let p of[-1,1]){for(let[v,m]of[[0,4198416],[1,4206608]]){let g=new $(new qt(.05,.034,.014),new Ye({color:m,toneMapped:!1}));g.position.set(p*(.61-v*.06),-.008,.008),r.add(g),this.masterLights.push({m:g,kind:v})}o.box(.05,.05,.008,p*.385,0,.004,this.M.bezel),o.box(.016,.016,.03,p*.385,0,.02,this.M.chrome),o.box(.07,.022,.018,p*.385,0,.04,this.M.knobRed);for(let v of[.84,.74]){let m=new ce(.014,.016,.02,16);m.rotateX(Math.PI/2),m.translate(p*v,-.012,.01),o.add(m,this.M.knobBlack)}}o.flush(),this._box(.09,.07,.07,re(2,Oe(2)-.16,0),this.M.black);let f=new $(new _n(.025,16),new Ye({color:13682848}));f.position.copy(re(2.036,Oe(2)-.16,0)),this.group.add(f);for(let p of[-1,1]){let v=new $(new ke(.42,.2),this.M.visor);v.position.copy(re(2.05,Oe(2.05)-.17,p*.48)),v.rotation.x=-1,this.group.add(v)}}_pedestal(){this._box(.4,.5,2.95-1.72,re((1.72+2.95)/2,_e+.25,0),this.M.panel);let s=document.createElement("canvas");s.width=384,s.height=1024;let r=s.getContext("2d");r.fillStyle="#727675",r.fillRect(0,0,s.width,s.height);let o=(b,w,y,E)=>{r.fillStyle="#1d2022",r.fillRect(14,b,356,w),r.strokeStyle="#4a4e4d",r.lineWidth=3,r.strokeRect(14,b,356,w),r.fillStyle="#e4e4e0",r.font="bold 15px Arial",r.textAlign="left",r.fillText(y,26,b+24),E.forEach((R,A)=>{r.fillStyle="#000",r.fillRect(24,b+36+A*28,200,24),r.fillStyle="#ff9a1a",r.font="bold 18px monospace",r.fillText(R,30,b+54+A*28)}),r.fillStyle="#3a3d3f";for(let R=0;R<3;R++)r.beginPath(),r.arc(270+R*34,b+w-26,13,0,Math.PI*2),r.fill()};r.fillStyle="#1d2022",r.fillRect(14,10,356,300),o(330,100,"COM 1        COM 2",["122.80   123.45"]),o(440,100,"NAV 1        ADF",["110.30   353"]),o(550,90,"ATC XPDR",["7000   ALT"]),o(650,140,"TRIM     AIL    RUD",[""]),o(800,110,"WATER SYSTEM",["DROP MODE  PRESEL"]),o(920,90,"AUDIO",["VHF1 VHF2 INT"]);let a=new nn(s);a.colorSpace=Pe,a.anisotropy=4;let l=new $(new ke(.4-.01,2.95-1.72),new be({map:a,roughness:.8,envMapIntensity:.3}));l.rotation.x=-Math.PI/2,l.position.copy(re((1.72+2.95)/2,_e+.502,0)),this.group.add(l);let c=re(2.08,_e+.5,0),h=new ce(.115,.115,.22,28);h.rotateZ(Math.PI/2),h.translate(c.x,c.y,c.z),this._add(h,this.M.panel);for(let b of[-.045,.045]){let w=new Ji(.116,.006,4,20,Math.PI);w.rotateY(Math.PI/2),w.translate(c.x+b,c.y,c.z),this._add(w,this.M.black)}this.powerLevers=[],this.condLevers=[];for(let[b,w]of[[0,-.045],[1,.045]]){let y=new Kt;y.position.copy(re(2.08,_e+.5,w)),this.group.add(y);let E=new qt(.012,.23,.02);E.translate(0,.115,0),y.add(new $(E,this.M.chrome));let R=new $(new qt(.075,.045,.042),this.M.knobBlack);R.position.y=.245,y.add(R);for(let F=0;F<4;F++){let U=new $(new qt(.078,.005,.046),this.M.grip);U.position.y=.228+F*.011,y.add(U)}let A=new $(new qt(.03,.012,.03),this.M.chrome);A.position.set(0,.22,-.03),y.add(A),this.powerLevers.push(y);let C=new Kt;C.position.copy(re(2.24,_e+.5,w*3)),this.group.add(C);let L=new qt(.01,.15,.014);L.translate(0,.075,0),C.add(new $(L,this.M.chrome));let P=new $(new ce(.017,.017,.055,14),this.M.white);P.rotation.z=Math.PI/2,P.position.y=.158,C.add(P);for(let F of[-.018,.018]){let U=new $(new ce(.0175,.0175,.006,14),this.M.knobBlack);U.rotation.z=Math.PI/2,U.position.set(F,.158,0),C.add(U)}C.rotation.x=-.4,this.condLevers.push(C),this._box(.012,.004,.16,re(2.24,_e+.503,w*3),this.M.black)}let u=new Kt;u.position.copy(re(2.36,_e+.5,0)),u.rotation.x=-1.25,this.group.add(u);let d=new qt(.014,.14,.014);d.translate(0,.07,0),u.add(new $(d,this.M.yellowBlack));for(let b=0;b<3;b++){let w=new $(new qt(.016,.012,.016),this.M.knobBlack);w.position.y=.03+b*.035,u.add(w)}let f=new $(new qt(.05,.025,.03),this.M.yellowBlack);f.position.y=.145,u.add(f),this._box(.012,.03,.012,re(2.62,_e+.515,-.12),this.M.chrome),this._box(.07,.018,.022,re(2.62,_e+.535,-.12),this.M.red);let p=new Kt;p.position.copy(re(2.5,_e+.5,.12)),this.group.add(p);let v=new qt(.012,.14,.012);v.translate(0,.07,0),p.add(new $(v,this.M.chrome));let m=new $(new qt(.065,.02,.045),this.M.white);m.position.y=.145,p.add(m),this.flapLever=p,this._box(.012,.004,.18,re(2.5,_e+.503,.12),this.M.black);let g=new Kt;g.position.copy(re(2.45,_e+.36,-.4/2-.02)),this.group.add(g);let S=new $(new ce(.155,.155,.035,40),this.M.column);S.rotation.z=Math.PI/2,g.add(S);for(let b=0;b<24;b++){let w=new $(new qt(.038,.014,.014),this.M.grip),y=b/24*Math.PI*2;w.position.set(0,Math.cos(y)*.155,Math.sin(y)*.155),w.rotation.x=-y,g.add(w)}let _=new $(new qt(.037,.02,.06),this.M.white);_.position.set(0,.11,0),g.add(_),this.trimWheel=g;let x=new Kt;x.position.copy(re(2.8,_e+.52,-.08)),this.group.add(x),x.add(new $(new ce(.022,.026,.03,16),this.M.knobBlack));let M=new $(new qt(.005,.031,.02),this.M.white);M.position.set(0,.001,-.012),x.add(M),this.dropSelector=x,this._box(.04,.012,.06,re(2.8,_e+.51,.08),this.M.red)}_overhead(){let t=document.createElement("canvas");t.width=1024,t.height=1024;let e=t.getContext("2d");e.fillStyle="#767a79",e.fillRect(0,0,1024,1024);let n=[["ELECTRICAL",40,40],["FUEL",540,40],["ENGINE START",40,300],["ANTI-ICE",540,300],["LIGHTS",40,560],["HYDRAULIC",540,560],["FIRE",40,800],["WATER SYSTEM",540,800]];for(let[h,u,d]of n){e.strokeStyle="#d0d0d0",e.lineWidth=3,e.strokeRect(u,d,440,220),e.fillStyle="#767a79",e.fillRect(u+20,d-12,h.length*15+20,24),e.fillStyle="#e0e0e0",e.font="bold 22px Arial",e.fillText(h,u+30,d+8),e.font="14px Arial";for(let f=0;f<6;f++)e.fillText(["BATT","GEN 1","GEN 2","INV","BUS","EXT"][f],u+30+f*70,d+200)}e.fillStyle="#c01010",e.fillRect(90,850,120,60),e.fillRect(300,850,120,60),e.fillStyle="#fff",e.font="bold 22px Arial",e.fillText("ENG 1",112,888),e.fillText("ENG 2",322,888);let s=new nn(t);s.colorSpace=Pe;let r=new Kt;r.position.copy(re(2.55,Oe(2.55)-.12,0)),r.rotation.x=Math.PI/2+.12,this.group.add(r);let o=new $(new ke(.6,.72),new be({map:s,roughness:.8,envMapIntensity:.3}));r.add(o);let a=new $(new qt(.62,.74,.1),this.M.panel);a.position.z=-.052,r.add(a);let l=[];for(let h=0;h<4;h++)for(let u=0;u<6;u++)for(let d of[0,1]){let f=-.27+d*.3+u*.042,p=.3-h*.175-.07,v=new ce(.003,.004,.022,6);v.rotateX(Math.PI/2+(Math.random()<.6?.4:-.4)),v.translate(f,p,.012),l.push(v)}let c=new $(us(l.map(h=>(h.attributes.uv,h))),this.M.chrome);r.add(c)}_yokes(){this.yokes=[];let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle="#2e3134",e.fillRect(0,0,256,128),e.fillStyle="#1f5fbf",e.beginPath(),e.ellipse(128,64,118,52,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="bold 34px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("CANADAIR",128,50),e.font="bold 24px Arial",e.fillText("CL-415",128,84);let n=new nn(t);n.colorSpace=Pe;let s=new be({map:n,roughness:.4}),r=new zi([[-.165,.135],[-.178,.07],[-.16,.005],[-.1,-.03],[0,-.036],[.1,-.03],[.16,.005],[.178,.07],[.165,.135]].map(([a,l])=>new D(a,l,0))),o=new Ki(r,48,.016,10,!1);for(let a of[-1,1]){let l=new Kt;l.position.copy(re(1.86,_e+.02,a*.52)),this.group.add(l);let c=new ce(.03,.038,.72,14);c.translate(0,.36,0);let h=new $(c,this.M.column);h.rotation.x=.15,l.add(h);let u=new $(new ce(.045,.085,.16,14),this.M.black);u.position.y=.08,l.add(u);let d=new $(new qt(.22,.02,.22),this.M.wallDark);d.position.y=-.01,l.add(d);let f=new Kt;f.position.set(0,.71,.108),l.add(f),f.add(new $(o,this.M.yoke));let p=new $(new qt(.12,.085,.06),this.M.yoke);p.position.y=-.02,f.add(p);let v=new $(new ke(.1,.05),s);v.position.set(0,-.02,.031),f.add(v);for(let M of[-1,1]){let b=new $(new ce(.021,.023,.1,12),this.M.grip);b.position.set(M*.174,.075,0),b.rotation.z=M*.08,f.add(b);let w=new $(new kn(.019,12,8),this.M.yoke);w.position.set(M*.166,.138,0),f.add(w)}let m=a,g=new $(new ce(.009,.009,.012,12),this.M.knobRed);g.position.set(m*.166,.157,0),f.add(g);let S=new $(new qt(.012,.012,.014),this.M.yellowBlack);S.position.set(-m*.17,.11,.022),f.add(S);let _=new $(new qt(.014,.02,.012),this.M.knobBlack);_.position.set(m*.176,.06,-.022),f.add(_);let x=new $(new ke(.08,.05),this.M.white);x.position.set(0,.035,.002),f.add(x),this.yokes.push({col:l,wheel:f})}}_pedals(){this.pedals=[];for(let t of[-1,1])for(let e of[-1,1]){let n=new Kt;n.position.copy(re(1.55,_e+.42,t*.52+e*.12)),this.group.add(n);let s=new qt(.03,.28,.025);s.translate(0,-.14,0),n.add(new $(s,this.M.metal));let r=new $(new qt(.09,.15,.02),this.M.black);r.position.set(0,-.25,.03),r.rotation.x=-.5,n.add(r),this.pedals.push({pv:n,lr:e,side:t})}}_seats(){for(let t of[-1,1]){let e=t*.52;this._box(.42,.06,.6,re(2.55,_e+.03,e),this.M.metal),this._box(.3,.32,.36,re(2.5,_e+.22,e),this.M.seat);let n=new qt(.5,.11,.5);n.translate(e,_e+.42-nt.hCG,2.4-nt.sCG),this._add(n,this.M.seatCushion);let s=new qt(.5,.78,.12);s.translate(0,.39,0),s.rotateX(.2),s.translate(e,_e+.46-nt.hCG,2.68-nt.sCG),this._add(s,this.M.seatCushion);let r=new qt(.28,.2,.12);r.translate(0,.9,0),r.rotateX(.2),r.translate(e,_e+.46-nt.hCG,2.7-nt.sCG),this._add(r,this.M.seat);for(let o of[-1,1]){let a=new qt(.06,.06,.36);a.translate(e+o*.26,_e+.68-nt.hCG,2.45-nt.sCG),this._add(a,this.M.seat)}for(let o of[-1,1]){let a=re(2.74,_e+1.12,e+o*.1),l=re(2.62,_e+.5,e+o*.16);this._add(An(a,l,.022,.022,4,.3),this.M.knobBlack)}}}_details(){for(let s of[-1,1])this._box(.22,.42,1.2,re(2.55,_e+.62,s*.98),this.M.panel);let t=new Kt;t.position.copy(re(2.2,_e+.86,-.95)),this.group.add(t);let e=new $(new ce(.07,.07,.02,20),this.M.black);t.add(e);let n=new $(new ce(.012,.012,.06,8),this.M.black);n.position.set(.05,.04,0),t.add(n),this.tiller=t;for(let s of[-1,1]){let r=new $(new Ji(.08,.012,6,16,Math.PI),this.M.black);r.position.copy(re(3.1,2.62,s*1.02)),r.rotation.y=Math.PI/2,this.group.add(r)}this._box(.04,.25,.3,re(3.05,_e+.75,-1.06),this.M.black)}update(t,e,n,s){let r=e.out,o=this.gauges,a=(m,g,S)=>{m&&m.ns[g]&&(m.ns[g].rotation.z=-S*Et)},l=r.ias/.514444,c=r.alt/.3048,h=r.vs/.00508;for(let m of["c_","f_"])a(o[m+"asi"],0,pn.asi(l)),a(o[m+"alt"],0,c%1e3/1e3*360),a(o[m+"alt"],1,c%1e4/1e4*360),a(o[m+"alt"],2,c%1e5/1e5*360),a(o[m+"vsi"],0,pn.vsi(h)),a(o[m+"radalt"],0,pn.radalt(Math.max(0,r.radAlt/.3048))),a(o[m+"g"],0,pn.g(r.nz));o.sby.mat.uniforms.pitch.value=r.pitch,o.sby.mat.uniforms.roll.value=-r.roll;let u=new Date;for(let m of["c_","f_"])a(o[m+"clock"],0,(u.getHours()%12+u.getMinutes()/60)*30),a(o[m+"clock"],1,u.getMinutes()*6),a(o[m+"clock"],2,u.getSeconds()*6);if(this._efisT=(this._efisT||0)+t,this._efisT>.04){this._efisT=0;let m=(r.heading/Et%360+360)%360;this.hdgBug===void 0&&(this.hdgBug=Math.round(m/10)*10%360),this.adiDisplay.update({pitch:Math.round(r.pitch/Et*5)/5,roll:Math.round(r.roll/Et*2)/2,slip:Math.round(K(-r.ny*3.2,-1,1)*20)/20,ra:Math.round(Math.max(0,r.radAlt/.3048)/5)*5,ias:Math.round(l),dh:r.radAlt/.3048<100&&!n.gearDown&&h<-100}),this.hsiDisplay.update({hdg:Math.round(m*2)/2,bug:this.hdgBug,crs:this.hdgBug,dev:0,gs:Math.round(r.gs/.514444)})}let d=e.ctl;for(let m of this.yokes)m.col.rotation.x=d.elevator*12*Et,m.wheel.rotation.z=-d.aileron*70*Et;for(let m of this.pedals)m.pv.position.z=re(1.55,0,0).z+(m.lr<0?1:-1)*d.rudder*.05;for(let m=0;m<2;m++){let g=n.engines[m];this.powerLevers[m].rotation.x=(g.reverseLever>.02?32+12*g.reverseLever:28-60*g.lever)*Et}this.flapLever.rotation.x=(-22+n.flapIndex/3*48)*Et,this.trimWheel.rotation.x=n.elevTrim*8,this.gearLever.rotation.x=(n.gearDown?-25:25)*Et,this.tiller.rotation.y=-(d.tiller||0)*1.5,this.dropSelector.rotation.y=-n.dropMode*40*Et;let f=n.gearPos,p=f>.02&&f<.98;for(let m of this.gearLights)m.material.color.setHex(p?16719888:f>=.98?2162480:663562);let v=Math.floor(s*3)%2===0;for(let m of this.masterLights){let g=m.kind===0?n.warn.master:n.warn.caution;m.m.material.color.setHex(g&&v?m.kind===0?16719888:16755200:m.kind===0?4198416:4206608)}if(this._dispT=(this._dispT||0)+t,this._dispT>.1){this._dispT=0;let m=te.waterCapacity/4,g=n.foamMix.reduce((w,y)=>w+y,0)/4,S=n.doorOpen.map(w=>w>.1);this.waterStatus.update({total:Math.round(n.waterLiters()/5)*5,tanks:n.tanks.map(w=>Math.round(w/m*40)/40),doors:S,foam:n.foamArmed,foamPct:Math.round(g*100),scoop:r.scoopRate>20}),this.dropCtl.update({mode:Ns[n.dropMode].id,preset:Math.round(n.scoopPreset*100),doors:S,armed:n.waterLiters()>10});let _=n.engines,x=(w,y)=>Math.round(w/y)*y;this.engDisplay.update({trq:_.map(w=>x(w.torque,1)),itt:_.map(w=>x(w.itt,5)),np:_.map(w=>x(w.np/100*te.propRPM,5)),rev:_.some(w=>w.reverse>.1)}),this.engLower.update({nh:_.map(w=>x(w.nh,.1)),ff:_.map(w=>x(w.ff,5)),oilP:_.map(w=>x(w.oilP,1)),oilT:_.map(w=>x(w.oilT,1))});let M=_[0].running||_[1].running?3e3:0;this.sysDisplay.update({fuel:[x(n.fuel/2,5),x(n.fuel/2-15,5)],hyd:M,trim:Math.round(K(n.elevTrim,-1,1)*50)/50,flap:Math.round(n.flapPos*2)/2,flapMoving:Math.abs(n.flapPos-te.flapDetents[n.flapIndex])>.3});let b=n.warn;this.annunciator.update({stall:b.stall,overspeed:b.overspeed,gearWater:b.gearWater&&v,gearUpLand:b.gearUpLand&&v,probes:n.probePos>.5,probeSpeed:b.probeSpeed,tanksFull:n.waterLiters()>te.waterCapacity-5,doors:n.doorOpen.some(w=>w>.1),flapSpeed:b.flapSpeed,lowFuel:b.lowFuel,overweight:b.overweight,foam:n.foamArmed,park:n.parkingBrake,eng1:!n.engines[0].running,eng2:!n.engines[1].running,rev:n.engines.some(w=>w.reverse>.1)})}}};var jt=D,xp=5.05,Qv=-3.9*Et,_p=4.3,vp=3,jv=Math.PI*(te.propDiameter/2)**2,yp=te.propRPM/60*2*Math.PI,Mp=30500,Sp=.86,ty=95,bp=i=>1/(1+Math.exp(-i));function ey(i,t,e){let n=.82*e;if(i>n)return n+(e-n)*(1-Math.exp(-(i-n)/(e-n)));let s=.82*t;return i<s?s+(t-s)*(1-Math.exp(-(i-s)/(t-s))):i}function Lu(i,t,e,n,s,r,o,a){let l=s*(i-r)+t,c=r+(e-t)/s+1.8*Et,h=r+(n-t)/s-1.8*Et,u=1.25*Et,d=bp((i-c)/u),f=bp((h-i)/u),p=K(d+f,0,1),v=Math.sin(2*i),m=Math.sin(i),g=1.05*v+.3*t*Math.cos(i),S=.06+1.22*m*m,_=ey(l,n,e);return a.cl=(1-p)*_+p*g,a.cd=(1-p)*(o+.006*_*_)+p*S,a.sep=p,a.margin=Math.min(c-i,i-h),a}var Pc=class{constructor(t){this.world=t,this.pos=new jt,this.vel=new jt,this.quat=new en,this.omega=new jt,this.cg=new jt,this.mass=te.emptyMass,this.inertia=new jt(17e4,35e4,24e4),this.time=0,this.accum=0,this.dt=1/240,this.surf={elev:0,ail:0,rud:0,flap:0},this.ctl={elevator:0,aileron:0,rudder:0,brakeL:0,brakeR:0,tiller:0},this.sys=null,this.crash=null,this.damage=0,this.out=this._makeOut(),this._buildElements(),this._tmp={f:new jt,m:new jt,r:new jt,v:new jt,w:new jt,a:new jt,b:new jt,c:new jt,d:new jt,n:new jt,q:new en,qi:new en,wind:new jt,vAir:new jt,vAirB:new jt,up:new jt,fwd:new jt,right:new jt,coef:{cl:0,cd:0,sep:0}},this.prevCLw=.3,this.sprayPoints=[];for(let e=0;e<64;e++)this.sprayPoints.push({x:0,y:0,z:0,intensity:0,vx:0,vz:0,side:0,s:0});this.sprayCount=0}_makeOut(){return{ias:0,tas:0,gs:0,mach:0,alt:0,agl:0,radAlt:0,vs:0,heading:0,pitch:0,roll:0,alpha:0,beta:0,nz:1,ny:0,slip:0,rho:1.225,onWater:!1,onGround:!1,planing:!1,hullDepth:0,wetLength:0,waterSpeed:0,scoopRate:0,probeImmersion:0,stall:!1,stallMargin:1,thrust:[0,0],gearLoad:[0,0,0],gearCompress:[0,0,0],wheelSpeed:[0,0,0],impact:0,gearInWater:!1,wingtipWater:0,overG:0,turnRate:0,track:0,propWash:[0,0],clWing:0,surfaceUnder:"water",groundBelow:0,waterBelow:0,ge:0}}_buildElements(){let t=nt.wing;this.wingStrips=[];let e=8,n=t.halfSpan-t.rootY;for(let f of[-1,1])for(let p=0;p<e;p++){let v=t.rootY+n*p/e,m=t.rootY+n*(p+1)/e,g=(v+m)/2,S=m-v,_=K((Math.min(m,t.flapEnd)-Math.max(v,t.flapStart))/S,0,1),x=K((Math.min(m,t.ailEnd)-Math.max(v,t.ailStart))/S,0,1),M=p===e-1?.84:p===e-2?.95:1;this.wingStrips.push({side:f,y0:v,y1:m,yc:g,width:S,area:S*t.chord,pos:new jt().copy(fn(t.sLE+.25*t.chord,t.h,f*g)),flapFrac:_,ailFrac:x,tipLoss:M,spoiler:g>5.5&&g<9.6?1:0,slipCov:[0,0]})}let s=.86*te.propDiameter/2,r=[-nt.engine.y,nt.engine.y];for(let f of this.wingStrips)for(let p=0;p<2;p++){let v=Math.max(f.side*f.y0,f.side*f.y1),m=Math.min(f.side*f.y0,f.side*f.y1),S=Math.min(v,r[p]+s)-Math.max(m,r[p]-s);f.slipCov[p]=K(S/f.width,0,1)}let o=nt.htail;this.htStrips=[];for(let f of[-1,1])for(let p=0;p<2;p++){let v=o.halfSpan*p/2,m=o.halfSpan*(p+1)/2,g=(v+m)/2,S=g/o.halfSpan,_=o.rootChord+(o.tipChord-o.rootChord)*S,x=o.sLE+o.sweepLE*S,M=Math.abs(g-nt.engine.y)<1.9?.75:Math.abs(g-nt.engine.y)<2.6?.35:0;this.htStrips.push({side:f,yc:g,chord:_,area:(m-v)*_,pos:new jt().copy(fn(x+.25*_,o.h,f*g)),slip:M,eng:f<0?0:1})}let a=nt.vtail;this.vtStrips=[];for(let f=0;f<2;f++){let p=a.hRoot+(a.hTip-a.hRoot)*f/2,v=a.hRoot+(a.hTip-a.hRoot)*(f+1)/2,m=(p+v)/2,g=(m-a.hRoot)/(a.hTip-a.hRoot),S=a.rootChord+(a.tipChord-a.rootChord)*g,_=a.sRootLE+(a.sTipLE-a.sRootLE)*g;this.vtStrips.push({area:(v-p)*S*.86,pos:new jt().copy(fn(_+.25*S,m,0)),rudder:1})}for(let f of[-1,1])this.vtStrips.push({area:1.55,pos:new jt().copy(fn(o.sLE+.55+.35,o.h+.2,f*o.finletY)),rudder:0,finlet:f});this.engines=[-1,1].map(f=>({pos:new jt().copy(fn(nt.engine.sProp,nt.engine.h,f*nt.engine.y)),vi:0,thrust:0,side:f})),this.hullSamples=[];let l=.5;for(let f=.35;f<19.3;f+=l){let p=Ze(f),v=cs(f),m=Zo(f),g=ui(f),S=(Ze(f+.05)-Ze(f-.05))/.1;for(let _ of[-1,1]){let x=fn(f,p+(m-p)*.5,_*v*.5),M=new jt(_*Math.sin(g),-Math.cos(g),S*Math.cos(g)).normalize();this.hullSamples.push({s:f,side:_,ds:l,keel:p,chineRel:Math.max(m-p,.02),hb:v,beta:g,tanb:Math.tan(g),pos:new jt(x.x,x.y,x.z),n:M,fore:f<nt.sStep,depth:0})}}let c=nt.float;this.floatSamples=[];for(let f of[-1,1])for(let p=0;p<3;p++){let v=c.sFront+.6+p*1.15,m=c.width/2,g=25*Et;for(let S of[-1,1]){let _=fn(v,c.hBottom+.12,f*c.y+S*m*.5);this.floatSamples.push({s:v,side:S,fside:f,ds:1.15,keel:c.hBottom,chineRel:m*Math.tan(g),hb:m,beta:g,tanb:Math.tan(g),pos:new jt(_.x,_.y,_.z),n:new jt(S*Math.sin(g),-Math.cos(g),p===0?-.25:0).normalize(),fore:!0,depth:0,sideH:c.height})}}this.structPoints=[];let h=(f,p,v,m)=>this.structPoints.push({pos:new jt().copy(fn(f,p,v)),kind:m});for(let f of[.4,1.2,2.5,4.5,6.5,8.9,10.5,13,15.5,17.5,19.2])h(f,Ze(f),0,"hull");h(nt.float.sFront+1.5,nt.float.hBottom,-nt.float.y,"float"),h(nt.float.sFront+1.5,nt.float.hBottom,nt.float.y,"float"),h(nt.wing.sLE+1.2,nt.wing.h,-nt.wing.halfSpan,"wingtip"),h(nt.wing.sLE+1.2,nt.wing.h,nt.wing.halfSpan,"wingtip"),h(nt.vtail.sRootLE+4,2.7,0,"tail"),this.propTipLow=nt.engine.h-te.propDiameter/2;let u=nt.gear.nose,d=nt.gear.main;this.gearPts=[{name:"nose",pos:new jt().copy(fn(u.s,u.pivotH-u.legLen,0)),r:u.wheelR,k:26e4,c:32e3,travel:.3,steer:!0,drag:.32},{name:"left",pos:new jt().copy(fn(d.s,d.wheelH,-d.wheelY)),r:d.wheelR,k:56e4,c:65e3,travel:.35,brake:"L",drag:.55},{name:"right",pos:new jt().copy(fn(d.s,d.wheelH,d.wheelY)),r:d.wheelR,k:56e4,c:65e3,travel:.35,brake:"R",drag:.55}];for(let f of this.gearPts)f.comp=0,f.load=0,f.spin=0;this.probes=[-1,1].map(f=>({side:f,root:new jt().copy(fn(nt.probe.s,Ze(nt.probe.s)+nt.probe.y*Math.tan(ui(nt.probe.s)),f*nt.probe.y)),tip:new jt,immersion:0}))}reset(t,e,n=0,s="air"){this.crash=null,this.damage=0,this.time=0,this.accum=0,this.omega.set(0,0,0),this._updateMass(!0);let r=s==="runway"?.4*Et:s==="water"?1.5*Et:2.5*Et;if(this.quat.setFromEuler(new In(r,e,0,"YXZ")),this.pos.copy(t),s==="runway"){let a=this.world.groundHeight(t.x,t.z);this.pos.y=a+nt.hCG+this.cg.y-nt.gear.main.wheelH+nt.gear.main.wheelR-.12}else if(s==="water"){let a=this.world.waterHeight(t.x,t.z,0);this.pos.y=a+nt.hCG+this.cg.y-(n>15?.25:.95)}let o=new jt(0,0,-1).applyQuaternion(this.quat);this.vel.copy(o).multiplyScalar(n),this.vel.y=0;for(let a of this.gearPts)a.comp=0;this.prevCLw=.4}_updateMass(t=!1){let e=this.sys;if(!e)return;let n=e.waterMass(),s=e.fuel,r=te.emptyMass,o=r+n+s,a=fn(nt.tankS,.25+nt.tanksH*K(n/6800,.15,1)*.6,0),l=fn(nt.wing.sLE+1.6,nt.wing.h,0),c=0,h=(n*a.y+s*l.y)/o,u=(n*a.z+s*l.z)/o,d=this._tmp?this._tmp.c.set(c,h,u):new jt(c,h,u);if(!t){let p=this._tmp.d.copy(d).sub(this.cg).applyQuaternion(this.quat);this.pos.add(p)}this.cg.copy(d),this.mass=o;let f=o/r;this.inertia.set(168e3*(.75+.25*f)+n*1.2,35e4*(.8+.2*f)+s*22+n*1,24e4*(.85+.15*f)+s*25+n*.5)}update(t){this.accum+=Math.min(t,.1);let e=0;for(;this.accum>=this.dt&&e<40;)this.step(this.dt),this.accum-=this.dt,e++}step(t){if(this.crash){this.time+=t;return}let e=this.sys,n=this._tmp,s=this.world;this.time+=t,e.update(t,this),this._updateMass(!1);let r=this.ctl,o=(r.elevator>=0?r.elevator*26:r.elevator*17)+e.elevTrim*11;this.surf.elev=He(this.surf.elev,K(o,-20,28),70,t),this.surf.ail=He(this.surf.ail,K(r.aileron*18+e.ailTrim*4,-20,20),70,t),this.surf.rud=He(this.surf.rud,K(r.rudder*25+e.rudTrim*8,-27,27),60,t),this.surf.flap=e.flapPos;let a=n.f.set(0,0,0),l=n.m.set(0,0,0),c=this.quat,h=n.qi.copy(c).invert(),u=this.out,d=jo(this.pos.y),f=d.rho;s.windAt(this.pos.x,this.pos.y,this.pos.z,this.time,n.wind);let p=n.vAir.copy(this.vel).sub(n.wind),v=n.vAirB.copy(p).applyQuaternion(h),m=p.length();u.rho=f;let g=s.groundHeight(this.pos.x,this.pos.z),S=s.waterHeight(this.pos.x,this.pos.z,this.time),_=Math.max(g,S);u.groundBelow=g,u.waterBelow=S,u.surfaceUnder=S>g?"water":"land";let x=this.pos.y+(nt.wing.h-nt.hCG-this.cg.y)-_,M=K(x/te.span,.02,2),b=(16*M)**2/(1+(16*M)**2);u.ge=1-b;for(let St=0;St<2;St++){let Wt=this.engines[St],Yt=e.engines[St],ne=n.r.copy(Wt.pos).sub(this.cg),Nt=n.v.copy(this.omega).cross(ne).add(v),kt=Math.max(-Nt.z,0),oe=0,pe=Yt.shaftPower;if(Yt.reverse>0)oe=-Mp*.42*Yt.reverse*K(1-kt/45,.15,1);else if(pe>1){let Ee=pe/te.enginePower,se=Mp*Math.pow(Ee,2/3),N=Sp*pe/(se*(u.onGround||u.onWater?Math.max(.3,on(0,.12,Yt.lever)):1));oe=Sp*pe/Math.cbrt(kt*kt*kt+N*N*N),oe-=.5*f*kt*kt*.3*Math.pow(1-K(Ee*3,0,1),2)}else oe=-.5*f*kt*kt*(Yt.feathered?.05:.3);oe*=f/1.225>.6?1:f/1.225,Wt.thrust=oe,u.thrust[St]=oe;let le=Math.max(oe,0);Wt.vi=.5*(-kt+Math.sqrt(kt*kt+2*le/(f*jv))),u.propWash[St]=kt+2*Wt.vi,n.a.set(0,0,-oe),this._addBodyForce(n.a,ne,a,l,c);let ie=pe/yp;l.z+=ie*.9,l.y+=le*(.06+.5*K(u.alpha,-.2,.3));let z=ty*yp*(Yt.np/100);n.b.set(0,0,-z),n.a.copy(this.omega).cross(n.b),l.sub(n.a)}let w=this.surf.flap,y=w/25,E=.9*Math.pow(K(y,0,1.2),.85),R=.0011*w+7e-5*w*w,A=this.surf.ail*Et,C=0,L=.5*f*m*m,P=n.coef,F=te.aspect,U=1/(Math.PI*.8*F),B=b,X=1;for(let St of this.wingStrips){let Wt=n.r.copy(St.pos).sub(this.cg),Yt=n.v.copy(this.omega).cross(Wt).add(v),ne=St.ailFrac*A*(St.side>0?-1:1),Nt=St.spoiler*K(((St.side>0?1:-1)*this.surf.ail-4)/14,0,1),kt=St.flapFrac*E+xp*.42*ne-.45*Nt,oe=(1.6+1*St.flapFrac*E)*St.tipLoss,pe=-1.05;for(let le=0;le<2;le++){let ie=0,z=0;if(le===0)ie=1-Math.min(1,St.slipCov[0]+St.slipCov[1]);else{let Xt=St.slipCov[0]>0?0:St.slipCov[1]>0?1:-1;if(Xt<0)continue;ie=St.slipCov[Xt],z=1.55*this.engines[Xt].vi}if(ie<=0)continue;let Ee=-Yt.z+z,se=Yt.y,N=Ee*Ee+se*se;if(N<.01)continue;let T=Math.sqrt(N),W=Math.atan2(-se,Ee)+nt.wing.incidence+(St.yc>9?-1.2*Et:0);Lu(W,kt,oe,pe,xp*St.tipLoss*(1+.08*(1-B)),Qv,.0085+R*St.flapFrac+.03*Nt,P);let q=.5*f*N*St.area*ie,j=P.cl*P.cl*U*B*(1-P.sep),lt=q*P.cl,ut=q*(P.cd+j),et=-se/T,st=Ee/T,dt=-Ee/T,Ut=-se/T,pt=lt*et+ut*dt,ft=lt*st+ut*Ut;n.a.set(0,ft,-pt),this._addBodyForce(n.a,Wt,a,l,c);let Ot=-.085-.22*St.flapFrac*E;l.x+=q*nt.wing.chord*Ot*(1-P.sep*.5),C+=P.cl*St.area*ie*(N/Math.max(m*m,1)),W>0&&T>15&&St.side!==0&&(X=Math.min(X,P.margin))}}let O=C/te.wingArea;u.clWing=O,this.prevCLw+=(O-this.prevCLw)*K(t*8,0,1);let H=K(2*this.prevCLw/(Math.PI*F)*1.05,-.1,.32)*(.45+.55*B),V=-this.surf.elev*Et,ot=-1.3*Et;for(let St of this.htStrips){let Wt=n.r.copy(St.pos).sub(this.cg),Yt=n.v.copy(this.omega).cross(Wt).add(v),ne=St.slip*1.25*this.engines[St.eng].vi,Nt=-Yt.z+ne,kt=Yt.y,oe=Nt*Nt+kt*kt;if(oe<.01)continue;let pe=Math.sqrt(oe),le=Math.atan2(-kt,Nt)+ot-H;Lu(le,_p*.55*V,1.25,-1.25,_p,0,.009,P);let ie=.5*f*oe*St.area*.95,z=P.cl*P.cl/(Math.PI*.85*5.3),Ee=ie*P.cl,se=ie*(P.cd+z),N=-kt/pe,T=Nt/pe,W=-Nt/pe,q=-kt/pe;n.a.set(0,Ee*T+se*q,-(Ee*N+se*W)),this._addBodyForce(n.a,Wt,a,l,c)}let rt=this.surf.rud*Et;for(let St of this.vtStrips){let Wt=n.r.copy(St.pos).sub(this.cg),Yt=n.v.copy(this.omega).cross(Wt).add(v),ne=0;St.finlet&&(ne=1.1*this.engines[St.finlet<0?0:1].vi);let Nt=-Yt.z+ne,kt=Yt.x,oe=Nt*Nt+kt*kt;if(oe<.01)continue;let pe=Math.sqrt(oe),le=Math.atan2(-kt,Nt);Lu(le,St.rudder?-vp*.5*rt:0,1.15,-1.15,vp,0,.01,P);let ie=.5*f*oe*St.area,z=P.cl*P.cl/(Math.PI*.85*1.8),Ee=ie*P.cl,se=ie*(P.cd+z),N=-kt/pe,T=Nt/pe,W=-Nt/pe,q=-kt/pe;n.a.set(Ee*T+se*q,0,-(Ee*N+se*W)),this._addBodyForce(n.a,Wt,a,l,c)}if(m>.5){let St=-v.z,Wt=v.y,Yt=v.x,ne=Math.atan2(-Wt,Math.max(St,.1)),Nt=Math.asin(K(Yt/m,-1,1)),kt=3;kt*=1+2.5*Math.sin(ne)**2+3*Math.sin(Nt)**2,kt+=1.25*e.gearPos+.12*e.probePos;for(let ie=0;ie<4;ie++)kt+=.22*e.doorOpen[ie];n.a.copy(v).normalize().multiplyScalar(-L*kt),n.r.copy(fn(8,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let oe=-L*8.5*Math.sin(Nt)*Math.cos(Nt);n.a.set(oe,0,0),n.r.copy(fn(5.6,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let pe=L*2.4*Math.sin(ne)*Math.cos(ne);n.a.set(0,pe,0),n.r.copy(fn(3.6,1.9,0)).sub(this.cg),this._addBodyForce(n.a,n.r,a,l,c);let le=-.11*(1-.4*K(this.prevCLw-.5,0,1));l.z-=le*L*te.wingArea*te.span*K(Nt,-.5,.5),u.alpha=ne,u.beta=Nt}else u.alpha=0,u.beta=0;l.x-=.5*f*Math.max(m,5)*40*3.5*3.5*this.omega.x*1.2,l.y-=.5*f*Math.max(m,5)*60*4*4*this.omega.y*.8,l.z-=.5*f*Math.max(m,5)*20*this.omega.z,this.sprayCount=0,this._hydro(a,l,c,h,t),this._ground(a,l,c,h,t);let yt=n.w.copy(a);a.y-=this.mass*9.80665;let It=n.a.copy(a).divideScalar(this.mass);this.vel.addScaledVector(It,t),this.pos.addScaledVector(this.vel,t);let Vt=this.inertia,J=this.omega,tt=n.b.set(J.x*Vt.x,J.y*Vt.y,J.z*Vt.z),ht=n.c.copy(J).cross(tt);J.x+=(l.x-ht.x)/Vt.x*t,J.y+=(l.y-ht.y)/Vt.y*t,J.z+=(l.z-ht.z)/Vt.z*t;let zt=4;J.lengthSq()>zt*zt&&J.setLength(zt);let _t=n.q.set(J.x*t*.5,J.y*t*.5,J.z*t*.5,1);c.multiply(_t).normalize();let Tt=yt.applyQuaternion(h).divideScalar(this.mass*9.80665);u.nz=Tt.y,u.ny=Tt.x,u.slip=K(-Tt.x*4,-1,1),u.overG=Math.max(u.nz-3.25,-1-u.nz,0),(u.nz>4.6||u.nz<-2.2)&&this._doCrash("Sovraccarico strutturale ("+u.nz.toFixed(1)+" g)"),this._outputs(m,f,d,X)}_addBodyForce(t,e,n,s,r){let o=this._tmp;s.x+=e.y*t.z-e.z*t.y,s.y+=e.z*t.x-e.x*t.z,s.z+=e.x*t.y-e.y*t.x,o.d.copy(t).applyQuaternion(r),n.add(o.d)}_addWorldForce(t,e,n,s,r){let o=this._tmp;n.add(t);let a=o.d.copy(t).applyQuaternion(r);s.x+=e.y*a.z-e.z*a.y,s.y+=e.z*a.x-e.x*a.z,s.z+=e.x*a.y-e.y*a.x}_pointVel(t,e,n){return n.copy(this.omega).cross(t).applyQuaternion(e).add(this.vel),n}_hydro(t,e,n,s,r){let o=this.world,a=this.out,l=this.sys,c=this._h||(this._h={rb:new jt,pw:new jt,vw:new jt,vb:new jt,fw:new jt,fwd:new jt,right:new jt}),{rb:h,pw:u,vw:d,vb:f,fw:p}=c,v=0,m=99,g=-99,S=-9,_=0,x=Math.hypot(this.vel.x,this.vel.z),M=x/Math.sqrt(9.80665*2.6),b=.17*Math.pow(M/2.4,2)*Math.exp(1-Math.pow(M/2.4,2)),w=!1,y=(L,P)=>{h.copy(L.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let F=o.groundHeight(u.x,u.z),U=o.waterHeight(u.x,u.z,this.time);if(U<=F+.15){L.depth=-9;return}let X=U-u.y+.5*L.chineRel;if(L.depth=X,X<=0)return;w=!0,S=Math.max(S,X);let O=L.chineRel,H,V,ot=0;if(X<O){let Tt=X/L.tanb;H=.5*X*Math.min(Tt,L.hb),V=Math.min(Tt,L.hb)/Math.cos(L.beta)}else H=.5*O*L.hb+L.hb*(X-O),V=L.hb/Math.cos(L.beta),ot=X-O;if(P){let Tt=L.sideH||.8;X>Tt&&(H=.5*O*L.hb+L.hb*(Tt-O))}let rt=H*L.ds;v+=rt,P||(m=Math.min(m,L.s),g=Math.max(g,L.s)),p.set(0,998*9.80665*rt,0),this._addWorldForce(p,h,t,e,s),this._pointVel(h,n,d),f.copy(d).applyQuaternion(s);let yt=f.dot(L.n),It=f.x-yt*L.n.x,Vt=f.y-yt*L.n.y,J=f.z-yt*L.n.z,tt=Math.sqrt(It*It+Vt*Vt+J*J),ht=V*L.ds,zt;if(yt>0){let Tt=L.fore?.125:.08;zt=998*ht*(Tt*tt*yt+.55*yt*yt),X<.35&&(_=Math.max(_,-d.y))}else zt=998*ht*.02*tt*yt;if(p.copy(L.n).multiplyScalar(-zt),tt>.01){let Tt=.002+7e-4*on(3,15,tt),St=.5*998*Tt*(ht+ot*L.ds)*tt;p.x-=St*It,p.y-=St*Vt,p.z-=St*J}let _t=(Math.min(X,O)*.7+ot)*L.ds;if(p.x-=.5*998*1.1*_t*Math.abs(f.x)*f.x,p.applyQuaternion(n),x>.3){let Tt=998*9.80665*rt*b;p.x-=Tt*this.vel.x/x,p.z-=Tt*this.vel.z/x}if(this._addWorldForce(p,h,t,e,s),this.sprayCount<this.sprayPoints.length&&tt>3){let Tt=this.sprayPoints[this.sprayCount++];Tt.x=u.x,Tt.y=U,Tt.z=u.z,Tt.intensity=K(tt/30,0,1.5)*K(X/.25,0,1),Tt.vx=d.x,Tt.vz=d.z,Tt.side=L.side,Tt.s=L.s,Tt.float=P?1:0}};for(let L of this.hullSamples)y(L,!1);for(let L of this.floatSamples)y(L,!0);a.onWater=w,a.hullDepth=Math.max(S,0),a.wetLength=g>m?g-m+.5:0,a.displaced=v,a.impact=_,a.planing=w&&x>13&&v*998<this.mass*.45,a.waterSpeed=w?x:0,w&&_>5.2&&this._doCrash(this._gearWaterT>0?"Ammaraggio con carrello estratto: capottamento":"Ammaraggio troppo duro ("+(_/.00508).toFixed(0)+" ft/min)"),a.wingtipWater=0;let E=0,R=0,A=l.probePos;for(let L of this.probes){if(L.tip.copy(L.root),L.tip.y-=.88*A,L.tip.z+=.12*A,L.immersion=0,A<.05)continue;h.copy(L.tip).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let P=o.waterHeight(u.x,u.z,this.time),F=o.groundHeight(u.x,u.z);if(F>u.y&&P<F+.1){x>3&&(this.damage=Math.min(1,this.damage+r*.5));continue}if(P<=F+.3)continue;let U=P-u.y;if(U<=0)continue;let B=K(U/.32,0,1)*K((A-.5)/.5,0,1);L.immersion=B,R=Math.max(R,B),this._pointVel(h,n,d),f.copy(d).applyQuaternion(s);let X=Math.max(-f.z,0),O=.0074*X*B,H=O*998;E+=O;let V=d.length(),ot=H*X,rt=.5*998*.0055*B*V*V;V>.1&&(p.copy(d).multiplyScalar(-(ot+rt)/V),this._addWorldForce(p,h,t,e,s))}let C=l.addScoopedWater(E*1e3*r);a.scoopRate=E*1e3,a.scoopAccepted=C,a.probeImmersion=R}_ground(t,e,n,s,r){let o=this.world,a=this.sys,l=this.out,c=this._h,{rb:h,pw:u,vw:d,fw:f,fwd:p,right:v}=c,m=!1;l.gearInWater=!1;let g=a.gearPos,S=this.vel.length();for(let _=0;_<3;_++){let x=this.gearPts[_];if(x.load=0,g<.98){x.comp=0;continue}h.copy(x.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let M=o.groundHeight(u.x,u.z),b=o.waterHeight(u.x,u.z,this.time);if(this._pointVel(h,n,d),b>M&&b>u.y-x.r){let H=K((b-(u.y-x.r))/(2*x.r),0,1.5),V=d.length();V>.1&&(f.copy(d).multiplyScalar(-.5*998*1*x.drag*H*V),this._addWorldForce(f,h,t,e,s)),H>.2&&V>8&&(l.gearInWater=!0)}let w=u.y-x.r,y=M-w;if(y<=0){x.comp=Math.max(0,x.comp-r*2),x.spin*=.995;continue}m=!0;let E=Math.min(y,x.travel),R=-d.y,A=x.k*E+x.c*R;if(y>x.travel&&(A+=(y-x.travel)*6e6+Math.max(R,0)*2e5,R>3.6&&this._doCrash("Atterraggio troppo duro: carrello collassato")),A=Math.max(A,0),x.comp=E,x.load=A,p.set(0,0,-1).applyQuaternion(n),x.steer){let H=55*Et*K(1-S/30,.12,1),V=K(this.ctl.tiller*1+this.ctl.rudder*.25,-1,1)*H;a.noseSteer=V,p.applyAxisAngle(iy(n),-V)}p.y=0,p.normalize(),v.set(-p.z,0,p.x);let C=d.x*p.x+d.z*p.z,L=d.x*v.x+d.z*v.z;x.spin=C/x.r;let P=0;x.brake==="L"&&(P=this.ctl.brakeL),x.brake==="R"&&(P=this.ctl.brakeR),a.parkingBrake&&(P=1);let F=o.surfaceFriction?o.surfaceFriction(u.x,u.z):1,U=.018*(2-F),B=.55*F,X=-Math.tanh(C/.4)*A*(U+B*P);P>.5&&Math.abs(C)<.6&&(X=-C*A*1.2);let O=-Math.tanh(L/.18)*A*.75*F;f.set(0,A,0),f.addScaledVector(p,X),f.addScaledVector(v,O),this._addWorldForce(f,h,t,e,s)}for(let _=0;_<3;_++)l.gearLoad[_]=this.gearPts[_].load,l.gearCompress[_]=this.gearPts[_].comp,l.wheelSpeed[_]=this.gearPts[_].spin;for(let _ of this.structPoints){h.copy(_.pos).sub(this.cg),u.copy(h).applyQuaternion(n).add(this.pos);let x=o.groundHeight(u.x,u.z),M=o.waterHeight(u.x,u.z,this.time);this._pointVel(h,n,d);let b=Math.hypot(d.x,d.z);if(_.kind==="wingtip"&&M>x&&u.y<M+.05&&b>9){l.wingtipWater=1,this._doCrash("Estremit\xE0 alare in acqua: l'aereo ha fatto la 'ruota'");return}let w=x-u.y;if(w<=0)continue;m=!0;let y=d.y;if((_.kind==="wingtip"||_.kind==="tail")&&(b>6||y<-2)){this._doCrash(_.kind==="wingtip"?"Ala contro il terreno":"Coda contro il terreno");return}if(_.kind==="hull"&&M<=x+.3){if(-y>4||b>45*.514444){this._doCrash(g<.98?"Atterraggio sul ventre: carrello non estratto":"Impatto con il terreno");return}this.damage=Math.min(1,this.damage+r*b*.02)}if(-y>7){this._doCrash("Impatto con il terreno");return}let E=Math.max(0,w*3e6-y*25e4);f.set(0,E,0),b>.01&&(f.x-=.45*E*d.x/Math.max(b,.5),f.z-=.45*E*d.z/Math.max(b,.5)),this._addWorldForce(f,h,t,e,s)}for(let _ of this.engines){h.copy(_.pos).sub(this.cg),h.y-=te.propDiameter/2,u.copy(h).applyQuaternion(n).add(this.pos);let x=o.groundHeight(u.x,u.z),M=o.waterHeight(u.x,u.z,this.time);if(u.y<Math.max(x,M)-.05&&Math.abs(_.thrust)>500){this._doCrash(M>x?"Eliche in acqua":"Eliche contro il terreno");return}}l.onGround=m,this._gearWaterT=l.gearInWater?3:Math.max(0,(this._gearWaterT||0)-r),l.gearInWater&&S>20&&!this.crash&&Math.asin(K(new jt(0,0,-1).applyQuaternion(n).y,-1,1))<-25*Et&&this._doCrash("Ammaraggio con carrello estratto: capottamento")}_doCrash(t){this.crash||(this.crash={reason:t,time:this.time,pos:this.pos.clone(),vel:this.vel.clone()})}_outputs(t,e,n,s){let r=this.out,o=this.quat,a=this._tmp.fwd.set(0,0,-1).applyQuaternion(o),l=this._tmp.up.set(0,1,0).applyQuaternion(o),c=this._tmp.right.set(1,0,0).applyQuaternion(o);r.tas=t,r.ias=t*Math.sqrt(e/1.225),r.gs=Math.hypot(this.vel.x,this.vel.z),r.mach=t/n.a,r.alt=this.pos.y,r.vs=this.vel.y,r.pitch=Math.asin(K(a.y,-1,1)),r.roll=Math.atan2(-c.y,l.y);let h=Math.atan2(a.x,-a.z);h<0&&(h+=2*Math.PI),r.heading=h;let u=Math.atan2(this.vel.x,-this.vel.z);u<0&&(u+=2*Math.PI),r.track=u,r.turnRate=-this.omega.y*l.y;let d=this.pos.y+(-nt.hCG-this.cg.y)*l.y;r.radAlt=d-Math.max(r.groundBelow,r.waterBelow),r.agl=r.radAlt,r.stallMargin=s,r.stall=s<4.2*Et&&!r.onGround&&!r.onWater&&r.ias>10}},ny=new jt;function iy(i){return ny.set(0,1,0).applyQuaternion(i)}var At=Math.random,Ic=class{constructor(t,{quality:e="medium",world:n,onDeposit:s}){this.world=n,this.onDeposit=s;let r=e==="low"?.5:e==="high"?1.5:1;this.q=r;let o=Kf(256,3),a=ls(128,{power:1.8,noise:.35,seed:8}),l=ls(64,{power:1.1,noise:.25,seed:13});this.drop=new Ei({max:Math.round(5e3*r),texture:l,lit:.85,stretch:.9,name:"dropCore",renderOrder:6}),this.mist=new Ei({max:Math.round(2600*r),texture:a,lit:.9,name:"mist",renderOrder:7,nearFade:1}),this.spray=new Ei({max:Math.round(6e3*r),texture:o,lit:.75,stretch:.25,name:"spray",renderOrder:6});for(let c of[this.drop,this.mist,this.spray])t.add(c.mesh);this.wake=new Du(t),this._v=new D,this._p=new D,this._w=new D,this._acc={drop:[0,0,0,0],scoop:0,hull:0,overflow:0,prop:[0,0]},this.windVec=new D,this.cameraShake=0,this.windscreenWet=0}_bodyPoint(t,e,n,s){let r=this._w.copy(e).sub(t.cg);s.copy(t.omega).cross(r).applyQuaternion(t.quat).add(t.vel),n.copy(r).applyQuaternion(t.quat).add(t.pos)}update(t,e,n,s,r,o,a){let l=this.world,c=e.out;r.windAt(e.pos.x,30,e.pos.z,a,this.windVec);let h=this.windVec,u=this._p,d=this._v,f=s.emitters,p=new D(0,-1,0).applyQuaternion(e.quat),v=new D(0,0,-1).applyQuaternion(e.quat),m=new D(1,0,0).applyQuaternion(e.quat);for(let w=0;w<4;w++){let y=n.outflow[w];if(y<=.5)continue;let E=n.foamMix[w]>.3;this._bodyPoint(e,f.doors[w],u,d);let R=2.4/this.q;this._acc.drop[w]+=y*t/R;let A=Math.floor(this._acc.drop[w]);this._acc.drop[w]-=A;let C=3+Math.sqrt(y/400)*2.5;for(;A-- >0;){let L=.9+y/2500,P=d.x+p.x*C+(At()-.5)*L*2,F=d.y+p.y*C+(At()-.5)*L,U=d.z+p.z*C+(At()-.5)*L*2,B=(At()-.5)*.5,X=(At()-.5)*.9,O=.05+Math.pow(At(),2.2)*(E?.9:.65);this.drop.spawn(u.x+m.x*B+v.x*X,u.y-.1,u.z+m.z*B+v.z*X,P,F,U,{life:14,size0:.45+At()*.35,size1:(E?5:3.2)+At()*2.2,alpha:E?.8:.68,r:E?.98:.86,g:E?.98:.92,b:.98,drag:O,grav:-9.81,fadeIn:.02,user:R,user2:E?1:0,rotV:(At()-.5)*1.5})}}let g=this.drop;for(let w=0;w<g.n;w++){let y=g.age[w];if(g.drag[w]=Math.min(g.drag[w]*(1+t*.9),1.6),y>.3&&At()<t*(.025+g.drag[w]*.07)*this.q){let E=w*3;this.mist.spawn(g.p[E],g.p[E+1],g.p[E+2],g.v[E]*.35+h.x*.6,g.v[E+1]*.25,g.v[E+2]*.35+h.z*.6,{life:5+At()*5,size0:3+At()*2,size1:12+At()*10,alpha:.22+.1*g.user2[w],r:.92,g:.95,b:.98,drag:.9,grav:-.5,fadeIn:.15,rotV:(At()-.5)*.3})}}let S=(w,y)=>Math.max(l.groundHeight(w,y),l.waterHeight(w,y,a));g.simulate(t,h,S,(w,y)=>{let E=w*3,R=g.p[E],A=g.p[E+2],C=l.waterHeight(R,A,a)>l.groundHeight(R,A);return!C&&this.onDeposit&&this.onDeposit(R,A,g.user[w],g.user2[w]>.5),At()<.05&&this.mist.spawn(R,y+1.5,A,h.x*.5+(At()-.5)*4,1+At()*2,h.z*.5+(At()-.5)*4,{life:4+At()*4,size0:3,size1:10+At()*8,alpha:.18,r:.9,g:.92,b:.94,drag:.8,grav:-.2,fadeIn:.1}),C&&At()<.2&&this._splash(R,y,A,.4),!0});let _=c.scoopRate||0,x=c.gs;if(c.onWater&&n.probePos>.3&&c.probeImmersion>.05){this._acc.scoop+=t*(130+_*.35)*this.q;let w=Math.floor(this._acc.scoop);for(this._acc.scoop-=w;w-- >0;){let y=f.probes[At()<.5?0:1],E=this._w.set(y.position.x,y.position.y-.85,y.position.z);this._bodyPoint(e,E.clone(),u,d);let R=l.waterHeight(u.x,u.z,a),A=.15+At()*.45,C=K(x/32,.4,1.3),L=(3.5+At()*5.5+(At()<.15?3:0))*C,P=(At()-.5)*3.5+Math.sign(y.position.x)*(.5+At()*1.5);this.spray.spawn(u.x,R+.25,u.z,d.x*A+m.x*P,L,d.z*A+m.z*P,{life:1.1+At()*1,size0:.5+At()*.4,size1:(1.8+At()*2.2)*C,alpha:.92,r:.97,g:.98,b:1,drag:.35,grav:-9.81,fadeIn:.02,rotV:(At()-.5)*2}),At()<.06&&this.mist.spawn(u.x-v.x*8,R+2+At()*3,u.z-v.z*8,d.x*.25+h.x,1+At(),d.z*.25+h.z,{life:3+At()*3,size0:3,size1:9+At()*6,alpha:.14,r:.92,g:.94,b:.96,drag:.8,grav:-.3,fadeIn:.1})}this.windscreenWet=Math.min(1,this.windscreenWet+t*.25)}if(n.overflowRate>5&&c.onWater){this._acc.overflow+=t*90*this.q;let w=Math.floor(this._acc.overflow);for(this._acc.overflow-=w;w-- >0;){let y=f.overflow[At()<.5?0:1];this._bodyPoint(e,y,u,d);let E=Math.sign(y.x);this.spray.spawn(u.x,u.y,u.z,d.x*.7+m.x*E*(2+At()*3),3+At()*4,d.z*.7+m.z*E*(2+At()*3),{life:1.2+At()*.8,size0:.3,size1:2+At()*2,alpha:.8,r:.92,g:.95,b:.98,drag:.6,grav:-9.81})}}let M=e.sprayCount;if(M>0){for(let w=0;w<M;w++){let y=e.sprayPoints[w],E=Math.hypot(y.vx,y.vz);if(E<2.5)continue;let R=K(y.intensity,.1,1.2)*(y.float?8:14)*this.q*K(E/15,.2,1.5),A=Math.floor(R*t+At()),C=y.side;for(;A-- >0;){let L=1.5+E*(.06+At()*.1),P=1+E*(.04+At()*.09);this.spray.spawn(y.x+m.x*C*.4,y.y+.15,y.z+m.z*C*.4,y.vx*(.2+At()*.35)+m.x*C*L,P,y.vz*(.2+At()*.35)+m.z*C*L,{life:.6+At()*.7,size0:.4,size1:1+At()*1.8*K(E/20,.4,1.4),alpha:.85,r:.95,g:.97,b:.99,drag:.4,grav:-9.81,fadeIn:.03,rotV:(At()-.5)*2})}}if(x>12&&(this.windscreenWet=Math.min(1,this.windscreenWet+t*.05*K(c.hullDepth*3,0,1))),c.impact>1.2&&(this._lastImpactT||0)<a-.5){this._lastImpactT=a;let w=e.sprayPoints[0],y=Math.min(400,Math.round(c.impact*60*this.q));for(let E=0;E<y;E++){let R=e.sprayPoints[Math.floor(At()*M)],A=At()*Math.PI*2,C=2+At()*c.impact*2.5;this.spray.spawn(R.x,R.y+.1,R.z,R.vx*.3+Math.cos(A)*C,2+At()*c.impact*2.2,R.vz*.3+Math.sin(A)*C,{life:1+At()*1.2,size0:.6,size1:2.5+At()*3,alpha:.85,r:.93,g:.95,b:.97,drag:.3,grav:-9.81})}this.cameraShake=Math.min(1,this.cameraShake+c.impact*.15),this.windscreenWet=Math.min(1,this.windscreenWet+c.impact*.15)}}if(c.radAlt<9&&c.surfaceUnder==="water")for(let w=0;w<2;w++){let y=n.engines[w].pf;if(y<.3)continue;this._acc.prop[w]+=t*y*25*this.q*K(1-c.radAlt/9,0,1);let E=Math.floor(this._acc.prop[w]);this._acc.prop[w]-=E,this._bodyPoint(e,f.props[w],u,d);let R=l.waterHeight(u.x,u.z,a);for(;E-- >0;)this.mist.spawn(u.x-v.x*(4+At()*6)+(At()-.5)*3,R+.4,u.z-v.z*(4+At()*6)+(At()-.5)*3,d.x*.6-v.x*8,.8+At()*1.2,d.z*.6-v.z*8,{life:2+At()*2,size0:1.5,size1:6+At()*4,alpha:.18,r:.9,g:.93,b:.95,drag:.7,grav:0})}this.wake.update(t,e,a);let b=(w,y)=>l.waterHeight(w,y,a)-.3;this.spray.simulate(t,h,(w,y)=>Math.max(l.groundHeight(w,y),l.waterHeight(w,y,a)-.2)),this.mist.simulate(t,h,null),this.windscreenWet=Math.max(0,this.windscreenWet-t*(.06+c.ias*.004)),this.cameraShake=Math.max(0,this.cameraShake-t*1.5)}_splash(t,e,n,s){let r=Math.round(4*s*this.q)+1;for(let o=0;o<r;o++)this.spray.spawn(t,e+.1,n,(At()-.5)*3,2+At()*3,(At()-.5)*3,{life:.8+At()*.6,size0:.4,size1:1.5+At(),alpha:.7,r:.93,g:.95,b:.97,drag:.3,grav:-9.81})}render(t,e){let n=new bt(1,.96,.9).multiplyScalar(2.3),s=new bt(.95,1.02,1.12);for(let r of[this.drop,this.mist,this.spray])r.setLighting(e.sunDir,t,n,s,e.scene.fog);this.drop.upload(t,r=>r<.85?1:1-(r-.85)/.15),this.spray.upload(t,r=>1-r*r),this.mist.upload(t,r=>Math.sin(Math.PI*Math.min(1,r*1.15))*(1-r*.3)),this.wake.mat.uniforms.fogColor.value.copy(e.scene.fog.color),this.wake.mat.uniforms.fogDensity.value=e.scene.fog.density,this.wake.render()}stats(){return{drop:this.drop.n,mist:this.mist.n,spray:this.spray.n}}},Du=class{constructor(t){this.max=900,this.pts=[];let e=new xe;this.pos=new Float32Array(this.max*2*3),this.uv=new Float32Array(this.max*2*2),this.ext=new Float32Array(this.max*2*2),e.setAttribute("position",new we(this.pos,3).setUsage(jn)),e.setAttribute("uv",new we(this.uv,2).setUsage(jn)),e.setAttribute("aExt",new we(this.ext,2).setUsage(jn));let n=[];for(let o=0;o<this.max-1;o++){let a=o*2,l=o*2+1,c=o*2+2,h=o*2+3;n.push(a,c,l,l,c,h)}e.setIndex(n),e.setDrawRange(0,0),this.geo=e;let s=hi(256,12,5,55,.6),r=wi(256,[s,s,s,1]);this.mat=new Ve({uniforms:{tFoam:{value:r},uTime:{value:0},fogColor:{value:new bt},fogDensity:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`
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
        }`}),this.mesh=new $(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.name="wake",t.add(this.mesh),this.time=0,this.last=null}update(t,e,n){this.time=n;let s=e.out,r=s.onWater&&s.gs>1.5,o=new D(0,(nt.sStep,0),nt.sStep-nt.sCG).sub(e.cg).applyQuaternion(e.quat).add(e.pos);if(r){let a=K(s.hullDepth*2.5+s.gs/25,.2,1)*(s.planing?1:.8);if(!this.last||Math.hypot(o.x-this.last.x,o.z-this.last.z)>2){let l=o.x-(this.last?this.last.x:o.x-e.vel.x*.05),c=o.z-(this.last?this.last.z:o.z-e.vel.z*.05),h=Math.hypot(l,c)||1;this.pts.push({x:o.x,z:o.z,dx:l/h,dz:c/h,t:n,k:a,gap:!this.last}),this.pts.length>this.max&&this.pts.shift(),this.last={x:o.x,z:o.z}}}else this.last=null;for(;this.pts.length&&n-this.pts[0].t>160;)this.pts.shift()}render(){let t=this.pts.length;if(t<2){this.geo.setDrawRange(0,0);return}for(let e=0;e<t;e++){let n=this.pts[e],s=this.time-n.t,r=2.2+s*.9+Math.sqrt(s)*1.5,o=-n.dz,a=n.dx,l=n.gap||e+1<t&&this.pts[e+1].gap?0:n.k;for(let c=0;c<2;c++){let h=c===0?-1:1,u=e*2+c;this.pos[u*3]=n.x+o*r*h,this.pos[u*3+1]=.07,this.pos[u*3+2]=n.z+a*r*h,this.uv[u*2]=c,this.uv[u*2+1]=e,this.ext[u*2]=s,this.ext[u*2+1]=l}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.aExt.needsUpdate=!0,this.geo.setDrawRange(0,(t-1)*6)}};function Nu(i,t=2,e="white"){let n=Math.floor(i.sampleRate*t),s=i.createBuffer(1,n,i.sampleRate),r=s.getChannelData(0),o=0,a=0,l=0,c=0;for(let h=0;h<n;h++){let u=Math.random()*2-1;e==="pink"?(o=.99765*o+u*.099046,a=.963*a+u*.2965164,l=.57*l+u*1.0526913,r[h]=(o+a+l+u*.1848)*.18):e==="brown"?(c=(c+.02*u)/1.02,r[h]=c*3.5):r[h]=u*.5}return s}var Lc=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.8,this._prev={}}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=3,this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(n).connect(e.destination),this.cabin=e.createBiquadFilter(),this.cabin.type="lowpass",this.cabin.frequency.value=2200,this.cabin.Q.value=.5,this.cabin.connect(this.master),this.white=Nu(e,2,"white"),this.pink=Nu(e,3,"pink"),this.brown=Nu(e,3,"brown"),this.engines=[0,1].map(s=>this._engine(s)),this.wind=this._noiseVoice(this.pink,"bandpass",700,.6),this.water=this._noiseVoice(this.brown,"lowpass",500,.7),this.scoop=this._noiseVoice(this.white,"bandpass",1800,.5),this.dropSnd=this._noiseVoice(this.pink,"lowpass",1400,.4),this.hyd=this._tone("sawtooth",380,"lowpass",900),this.gearRoll=this._noiseVoice(this.brown,"lowpass",250,.8),this.stallHorn=this._tone("square",420,"lowpass",2e3,!0),this.warnHorn=this._tone("square",880,"lowpass",3e3,!0),this.enabled=!0}_noiseVoice(t,e,n,s){let r=this.ctx,o=r.createBufferSource();o.buffer=t,o.loop=!0,o.playbackRate.value=.9+Math.random()*.2;let a=r.createBiquadFilter();a.type=e,a.frequency.value=n,a.Q.value=s;let l=r.createGain();return l.gain.value=0,o.connect(a).connect(l).connect(this.cabin),o.start(),{src:o,f:a,g:l}}_tone(t,e,n,s,r=!1){let o=this.ctx,a=o.createOscillator();a.type=t,a.frequency.value=e;let l=o.createBiquadFilter();l.type=n,l.frequency.value=s;let c=o.createGain();return c.gain.value=0,a.connect(l).connect(c).connect(r?this.master:this.cabin),a.start(),{o:a,f:l,g:c}}_engine(t){let e=this.ctx,n=e.createStereoPanner?e.createStereoPanner():e.createGain();n.pan&&(n.pan.value=t===0?-.45:.45);let s=e.createGain();s.gain.value=0,s.connect(n).connect(this.cabin);let r=e.createOscillator();r.type="sawtooth";let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=520,o.Q.value=1.2;let a=e.createGain();r.connect(o).connect(a).connect(s);let l=e.createOscillator();l.type="square";let c=e.createGain();c.gain.value=.05,l.connect(o),l.connect(c).connect(s);let h=e.createOscillator();h.type="sine";let u=e.createGain();u.gain.value=.2,h.connect(u).connect(a.gain);let d=e.createOscillator();d.type="sine";let f=e.createGain();d.connect(f).connect(s);let p=e.createOscillator();p.type="triangle";let v=e.createGain();p.connect(v).connect(s);let m=e.createBufferSource();m.buffer=this.pink,m.loop=!0;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=400;let S=e.createGain();m.connect(g).connect(S).connect(s);let _=e.createBufferSource();_.buffer=this.white,_.loop=!0;let x=e.createBiquadFilter();x.type="bandpass",x.frequency.value=2400,x.Q.value=.8;let M=e.createGain();_.connect(x).connect(M).connect(s);for(let b of[r,l,h,d,p])b.start();return m.start(),_.start(),{bus:s,pan:n,prop:r,prop2:l,propF:o,propG:a,lfo:h,whine:d,whineG:f,whine2:p,whine2G:v,roarF:g,roarG:S,hissF:x,hissG:M,detune:t===0?.997:1.004}}click(t=1800,e=.04,n=.25){if(!this.enabled)return;let s=this.ctx,r=s.createBufferSource();r.buffer=this.white;let o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=t;let a=s.createGain(),l=s.currentTime;a.gain.setValueAtTime(n,l),a.gain.exponentialRampToValueAtTime(.001,l+e),r.connect(o).connect(a).connect(this.master),r.start(l,Math.random()),r.stop(l+e+.05)}chime(t=1,e=1320){if(!this.enabled)return;let n=this.ctx;for(let s=0;s<t;s++){let r=n.createOscillator();r.type="sine",r.frequency.value=e;let o=n.createGain(),a=n.currentTime+s*.22;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.01),o.gain.exponentialRampToValueAtTime(1e-4,a+.6),r.connect(o).connect(this.master),r.start(a),r.stop(a+.7)}}thump(t=1,e=!1){if(!this.enabled)return;let n=this.ctx,s=n.createBufferSource();s.buffer=e?this.pink:this.brown;let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=e?1500:220;let o=n.createGain(),a=n.currentTime;o.gain.setValueAtTime(K(t,0,1.5)*(e?.8:1.2),a),o.gain.exponentialRampToValueAtTime(.001,a+(e?1.2:.35)),s.connect(r).connect(o).connect(this.master),s.start(a,Math.random()),s.stop(a+1.5)}update(t,e,n,s){if(!this.enabled)return;let o=this.ctx.currentTime,a=e.out,l=s.inside,c=.08;this.cabin.frequency.setTargetAtTime(l?1900:14e3,o,.1);let h=l?0:s.distance,u=l?1:1/(1+h/35),d=l?1:K(1/(1-K(s.closing/340,-.4,.4)),.7,1.4);for(let w=0;w<2;w++){let y=n.engines[w],E=this.engines[w],R=y.np/100*1200/60,A=R*4*E.detune*d;E.prop.frequency.setTargetAtTime(Math.max(5,A),o,c),E.prop2.frequency.setTargetAtTime(Math.max(5,A*2),o,c),E.lfo.frequency.setTargetAtTime(Math.max(.1,R),o,c);let C=K(y.torque/100,0,1.2),L=y.running?1:K(y.nh/60,0,1);E.propG.gain.setTargetAtTime((.12+.5*C)*L,o,c),E.propF.frequency.setTargetAtTime(280+700*C,o,c);let P=y.nh/100;E.whine.frequency.setTargetAtTime(2600*P*d,o,c),E.whine2.frequency.setTargetAtTime(5200*P*d*1.01,o,c),E.whineG.gain.setTargetAtTime((l?.02:.05)*P*P*L,o,c),E.whine2G.gain.setTargetAtTime((l?.004:.018)*P*L,o,c),E.roarG.gain.setTargetAtTime((.18+.55*C)*L,o,c),E.roarF.frequency.setTargetAtTime(250+600*C,o,c),E.hissG.gain.setTargetAtTime((l?.04:.14)*C*L,o,c),E.hissF.frequency.setTargetAtTime(1800+1500*C,o,c);let F=w===0?-.45:.45;!l&&s.panFn&&(F=s.panFn(w)),E.pan.pan&&E.pan.pan.setTargetAtTime(F,o,.1),E.bus.gain.setTargetAtTime(.55*u,o,c)}let f=a.ias/.514444;this.wind.g.gain.setTargetAtTime(K((f/140)**2,0,1.4)*(l?.35:.6)*u+.01,o,c),this.wind.f.frequency.setTargetAtTime(400+f*9,o,c);let p=a.onWater?K(a.gs/20,0,1.4)*K(.3+a.hullDepth*1.5,0,1.2):0,v=.75+.25*Math.sin(o*7.3)*Math.sin(o*3.1);this.water.g.gain.setTargetAtTime(p*.9*v*u,o,.05),this.water.f.frequency.setTargetAtTime(300+a.gs*22,o,c);let m=K((a.scoopRate||0)/500,0,1.2);this.scoop.g.gain.setTargetAtTime(m*.55*u,o,.05);let g=n.outflow.reduce((w,y)=>w+y,0);this.dropSnd.g.gain.setTargetAtTime(K(g/3e3,0,1)*.9*u,o,.05);let S=Math.abs(n.flapPos-(this._prev.flap??n.flapPos))>1e-4||Math.abs(n.gearPos-(this._prev.gear??n.gearPos))>1e-4||Math.abs(n.probePos-(this._prev.probe??n.probePos))>1e-4;this._prev.flap=n.flapPos,this._prev.gear=n.gearPos,this._prev.probe=n.probePos,this.hyd.g.gain.setTargetAtTime(S?l?.05:.02:0,o,.1);let _=a.onGround?K(a.gs/25,0,1):0;this.gearRoll.g.gain.setTargetAtTime(_*.7,o,.05);let x=n.warn.stall;this.stallHorn.g.gain.setTargetAtTime(x?.12:0,o,.02),this.stallHorn.o.frequency.setTargetAtTime(x?420+60*Math.sin(o*25):420,o,.01);let M=(n.warn.gearWater||n.warn.gearUpLand)&&Math.floor(o*2.5)%2===0;this.warnHorn.g.gain.setTargetAtTime(M?.08:0,o,.01),a.impact>1&&(this._lastImp||0)<o-.6&&(this._lastImp=o,this.thump(a.impact/3,!0));let b=a.gearLoad[1]+a.gearLoad[2];b>1e3&&!this._prev.ground&&this.thump(K(-a.vs/2.5,.3,1.5),!1),this._prev.ground=b>1e3}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}};var wp=[["W / S  (\u2191 / \u2193)","Cloche avanti / indietro (picchiare / cabrare)"],["A / D  (\u2190 / \u2192)","Alettoni (rollio)"],["Q / E","Pedaliera (timone e ruotino)"],["R / F","Manette + / \u2212 (F tenuto al minimo in acqua o a terra = reverse)"],["Shift+R / Shift+F","Potenza massima / minimo"],["V / Shift+V","Flap gi\xF9 / su (0-10-15-25\xB0)"],["G","Carrello (anfibio)"],["P","Sonde di pescaggio (estendi / ritrai)"],["SPAZIO","SGANCIO dell'acqua"],["M","Modalit\xE0 di sgancio (salvo, 2+2, sequenza, 1 porta)"],["N","Quantit\xE0 di pescaggio preselezionata"],["J","Schiumogeno (arma / disarma)"],["T / Shift+T","Trim cabrare / picchiare"],["B (tenuto) / Shift+B","Freni / freno di stazionamento"],["L","Fari di atterraggio"],["C / 1-7","Cambia visuale (cabina, inseguimento, orbita, passaggio, sonde, ala, torre)"],["Mouse (trascina) / rotella","Guarda intorno / zoom"],["Y","Cloche col mouse (on/off)"],["O","Pannello dati on/off"],["H / F1","Aiuto"],["Esc","Pausa / menu"],["Invio","Riparti dopo un incidente"]],Dc=class{constructor(t){this.dom=t,this.keys=new Set,this.actions=[],this.stick={x:0,y:0},this.rudder=0,this.throttle=0,this.reverse=0,this.brakes=0,this.mouseYoke=!1,this.look={dx:0,dy:0,wheel:0,dragging:!1},this.gamepad=null,this.touch={active:!1,x:0,y:0,throttle:null},this._mouse={x:0,y:0},this._bind()}_bind(){let t={KeyR:"thrMax",KeyF:"thrIdle",KeyV:"flapUp",KeyB:"parking"},e={KeyV:"flapDown",BracketRight:"flapDown",BracketLeft:"flapUp",KeyG:"gear",KeyP:"probes",Space:"drop",KeyM:"mode",KeyN:"preset",KeyJ:"foam",KeyL:"lights",KeyC:"camera",KeyO:"hud",KeyH:"help",F1:"help",Escape:"pause",Enter:"restart",KeyY:"mouseYoke",KeyK:"debug"};window.addEventListener("keydown",s=>{if(s.target&&(s.target.tagName==="INPUT"||s.target.tagName==="SELECT"))return;let r=s.code;s.repeat||(s.shiftKey&&t[r]?this.actions.push(t[r]):e[r]&&this.actions.push(e[r]),/^Digit[1-7]$/.test(r)&&this.actions.push("cam"+r.slice(5))),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","F1","Tab"].includes(r)&&s.preventDefault(),this.keys.add(r),this.shift=s.shiftKey}),window.addEventListener("keyup",s=>{this.keys.delete(s.code),this.shift=s.shiftKey}),window.addEventListener("blur",()=>this.keys.clear());let n=this.dom;n.addEventListener("contextmenu",s=>s.preventDefault()),n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(this.look.dragging=!0,this._mouse.x=s.clientX,this._mouse.y=s.clientY,n.setPointerCapture&&n.setPointerCapture(s.pointerId))}),n.addEventListener("pointerup",()=>this.look.dragging=!1),n.addEventListener("pointermove",s=>{s.pointerType!=="touch"&&(this.look.dragging&&(this.look.dx+=s.clientX-this._mouse.x,this.look.dy+=s.clientY-this._mouse.y),this._mouse.x=s.clientX,this._mouse.y=s.clientY,this._mouseNorm={x:s.clientX/window.innerWidth*2-1,y:s.clientY/window.innerHeight*2-1})}),n.addEventListener("dblclick",()=>this.actions.push("lookReset")),n.addEventListener("wheel",s=>{this.look.wheel+=Math.sign(s.deltaY),s.preventDefault()},{passive:!1}),window.addEventListener("gamepadconnected",s=>{this.gamepad=s.gamepad.index,this.actions.push("gamepad")})}consumeLook(){let t={dx:this.look.dx,dy:this.look.dy,wheel:this.look.wheel};return this.look.dx=this.look.dy=this.look.wheel=0,t}update(t,e){let n=this.keys,s=(...p)=>p.some(v=>n.has(v)),r=0,o=0,a=0;s("KeyA","ArrowLeft")&&(r-=1),s("KeyD","ArrowRight")&&(r+=1),s("KeyS","ArrowDown")&&(o+=1),s("KeyW","ArrowUp")&&(o-=1),s("KeyQ")&&(a-=1),s("KeyE")&&(a+=1);let l=(p,v)=>p===0?3.2:Math.sign(p)!==Math.sign(v)&&v!==0?4:1.6,c=He(this.stick.x,r,l(r,this.stick.x),t),h=He(this.stick.y,o*.85,l(o,this.stick.y),t),u=He(this.rudder,a,l(a,this.rudder),t);this.mouseYoke&&this._mouseNorm&&!this.look.dragging&&(c=K(this._mouseNorm.x*1.4,-1,1),h=K(-this._mouseNorm.y*1.4,-1,1));let d=navigator.getGamepads?navigator.getGamepads():[],f=this.gamepad!==null?d[this.gamepad]:null;if(f){let p=w=>Math.abs(w)<.08?0:(w-Math.sign(w)*.08)/.92,v=p(f.axes[0]||0),m=p(f.axes[1]||0),g=p(f.axes[2]||0),S=p(f.axes[3]||0);(Math.abs(v)>0||Math.abs(m)>0)&&(c=Math.sign(v)*v*v,h=-Math.sign(m)*m*m),Math.abs(g)>0&&(u=g);let _=w=>f.buttons[w]&&f.buttons[w].pressed,x=f.buttons[7]?f.buttons[7].value:0,M=f.buttons[6]?f.buttons[6].value:0;this.throttle=K(this.throttle+(x-M)*t*.6-S*t*.5,0,1),this.brakes=Math.max(this.brakes,_(4)&&_(5)?1:0),this._gpPrev=this._gpPrev||[];let b=(w,y)=>{let E=_(w);E&&!this._gpPrev[w]&&this.actions.push(y),this._gpPrev[w]=E};b(0,"drop"),b(1,"probes"),b(2,"flapDown"),b(3,"flapUp"),b(8,"camera"),b(9,"pause"),b(10,"gear"),b(12,"trimUpPulse"),b(13,"trimDownPulse"),b(14,"mode"),b(15,"lights")}this.touch.active&&(c=this.touch.x,h=this.touch.y),this.touch.throttle!==null&&(this.throttle=this.touch.throttle),this.stick.x=c,this.stick.y=h,this.rudder=u,s("KeyR")&&!this.shift&&(this.throttle=K(this.throttle+t*.45,0,1)),s("KeyF")&&!this.shift?this.throttle>0?this.throttle=K(this.throttle-t*.45,0,1):e&&(this._revHold=(this._revHold||0)+t,this._revHold>.4&&(this.reverse=K(this.reverse+t*.6,0,1))):(this._revHold=0,this.reverse=He(this.reverse,0,1.5,t)),e||(this.reverse=0),this.brakes=s("KeyB")&&!this.shift?1:He(this.brakes,0,4,t),this.trimRate=s("KeyT")?this.shift?-1:1:0}popActions(){let t=this.actions;return this.actions=[],t}};var ea=[{id:"cockpit",name:"Cabina"},{id:"chase",name:"Inseguimento"},{id:"orbit",name:"Orbita libera"},{id:"flyby",name:"Passaggio"},{id:"probe",name:"Sotto lo scafo"},{id:"wing",name:"Ala"},{id:"tower",name:"Torre"}],Nc=(i,t,e=0)=>new D(e,t-nt.hCG,i-nt.sCG),Fc=class{constructor(t,{towerPos:e}){this.camera=t,this.mode=0,this.head={yaw:0,pitch:-.17,tyaw:0,tpitch:-.17},this.orbit={yaw:Math.PI*.85,pitch:.12,dist:42},this.chase={yaw:0,pitch:.1,dist:34,pos:new D,init:!1},this.flyby={pos:new D,t:-1},this.fov={cockpit:72,other:50},this.zoom=1,this.tower=e.clone(),this._q=new en,this._v=new D,this._e=new In(0,0,0,"YXZ"),this.shake=new D,this.vib=0}get id(){return ea[this.mode].id}get inside(){return this.id==="cockpit"}set(t){this.mode=(t+ea.length)%ea.length,this.chase.init=!1,this.flyby.t=-1,this.zoom=1}lookReset(){this.head.tyaw=0,this.head.tpitch=-.17}update(t,e,n,s){let r=this.camera,o=this.id,a=e.quat,l=e.out;n.wheel&&(this.zoom=K(this.zoom*(n.wheel>0?1.12:.89),.25,3.5));let c=l.onWater?K(l.gs/25,0,1)*K(l.hullDepth*2,.2,1):0,h=l.onGround?K(l.gs/30,0,1):0,u=.0012+c*.012+h*.006+(s.shake||0)*.05+(s.turb||0)*.004,d=performance.now()/1e3;this.shake.set(Math.sin(d*37.1)*Math.sin(d*13.7)*u,Math.sin(d*41.3+1)*Math.sin(d*9.1)*u,Math.sin(d*29.3+2)*u*.5);let f=p=>this._v.copy(p).sub(e.cg).applyQuaternion(a).add(e.pos);if(o==="cockpit"){this.head.tyaw=K(this.head.tyaw-n.dx*.0035,-2.6,2.6),this.head.tpitch=K(this.head.tpitch-n.dy*.0035,-1.2,1.1),this.head.yaw=Ps(this.head.yaw,this.head.tyaw,14,t),this.head.pitch=Ps(this.head.pitch,this.head.tpitch,14,t);let p=K(-l.ny*.02,-.04,.04),v=K(-(l.nz-1)*.012,-.05,.05),m=s.eye.clone().add(new D(p,v,0)).add(this.shake);m.x+=Math.sin(this.head.yaw)*.12,m.z+=(1-Math.cos(this.head.yaw))*.05,r.position.copy(f(m)),this._e.set(this.head.pitch,this.head.yaw,0,"YXZ"),this._q.setFromEuler(this._e),r.quaternion.copy(a).multiply(this._q),r.fov=this.fov.cockpit/this.zoom,r.near=.04}else if(o==="chase"){let p=this.chase;p.yaw=K(p.yaw-n.dx*.005,-Math.PI,Math.PI),p.pitch=K(p.pitch+n.dy*.004,-.4,1.2),!n.dx&&!n.dy&&(p.yaw=Ps(p.yaw,0,.4,t));let v=new D(0,0,-1).applyQuaternion(a),g=Math.atan2(v.x,-v.z)+p.yaw,S=p.dist*this.zoom,_=e.pos.clone().add(new D(0,2.5,0)),x=_.clone().add(new D(-Math.sin(g)*Math.cos(p.pitch)*S,Math.sin(p.pitch)*S+3,Math.cos(g)*Math.cos(p.pitch)*S));p.init||(p.pos.copy(x),p.init=!0),p.pos.x=Ps(p.pos.x,x.x,5,t),p.pos.y=Ps(p.pos.y,x.y,4,t),p.pos.z=Ps(p.pos.z,x.z,5,t);let M=s.groundAt(p.pos.x,p.pos.z)+1.5;p.pos.y<M&&(p.pos.y=M),r.position.copy(p.pos).add(this.shake.clone().multiplyScalar(4)),r.up.set(0,1,0),r.lookAt(_),r.fov=this.fov.other,r.near=.3}else if(o==="orbit"){let p=this.orbit;p.yaw-=n.dx*.005,p.pitch=K(p.pitch+n.dy*.004,-1.2,1.45);let v=p.dist*this.zoom,m=e.pos.clone();r.position.set(m.x+Math.sin(p.yaw)*Math.cos(p.pitch)*v,m.y+Math.sin(p.pitch)*v,m.z+Math.cos(p.yaw)*Math.cos(p.pitch)*v);let g=s.groundAt(r.position.x,r.position.z)+1;r.position.y<g&&(r.position.y=g),r.up.set(0,1,0),r.lookAt(m),r.fov=this.fov.other,r.near=.3}else if(o==="flyby"){let p=this.flyby,v=e.vel.clone(),m=v.length(),g=e.pos.clone().sub(p.pos);if(p.t<0||g.length()>450||g.dot(v)>0&&g.length()>150){let _=m>5?v.clone().normalize():new D(0,0,-1).applyQuaternion(a),x=new D(-_.z,0,_.x).normalize();p.pos.copy(e.pos).addScaledVector(_,K(m*6,60,320)).addScaledVector(x,28+Math.random()*25);let M=s.groundAt(p.pos.x,p.pos.z);p.pos.y=Math.max(e.pos.y-6+Math.random()*10,M+2),p.t=0}p.t+=t,r.position.copy(p.pos),r.up.set(0,1,0),r.lookAt(e.pos);let S=e.pos.distanceTo(p.pos);r.fov=K(2*Math.atan(26/S)/Et,12,60)/this.zoom,r.near=.3}else if(o==="probe"){let p=f(Nc(12.2,1.25,2.5));r.position.copy(p).add(this.shake);let v=f(Nc(8.6,-.4,.3));r.up.copy(new D(0,1,0).applyQuaternion(a)),r.lookAt(v),r.fov=70/this.zoom,r.near=.05}else if(o==="wing"){let p=f(Nc(9.4,4.5,-12.6));r.position.copy(p).add(this.shake);let v=f(Nc(3,2.8,0));r.up.copy(new D(0,1,0).applyQuaternion(a)),r.lookAt(v),r.fov=62/this.zoom,r.near=.1}else if(o==="tower"){r.position.copy(this.tower),r.up.set(0,1,0),r.lookAt(e.pos);let p=e.pos.distanceTo(this.tower);r.fov=K(2*Math.atan(30/p)/Et,2,60)/this.zoom,r.near=.5}r.updateProjectionMatrix(),r.updateMatrixWorld()}};var ln=i=>document.getElementById(i),Uc=class{constructor(){this.msgBox=ln("messages"),this.data=ln("data"),this.warnBox=ln("warnings"),this.mapCanvas=ln("minimap"),this.mapCtx=this.mapCanvas.getContext("2d"),this.fireList=ln("fires"),this.camLabel=ln("camlabel"),this.showData=!0,this._mapTimer=0,this._dataTimer=0,this._buildHelp(),this._buildDroplets()}_buildHelp(){let t=ln("helptable");t.innerHTML=wp.map(([e,n])=>`<tr><td class="k">${e}</td><td>${n}</td></tr>`).join("")}_buildDroplets(){let t=ln("droplets"),e=t.getContext("2d");t.width=1024,t.height=640;let n=Tn(9);for(let s=0;s<520;s++){let r=n()*t.width,o=n()*t.height,a=2+Math.pow(n(),3)*14,l=e.createRadialGradient(r-a*.3,o-a*.3,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(.5,"rgba(200,215,225,0.18)"),l.addColorStop(.85,"rgba(40,50,60,0.25)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.beginPath(),e.ellipse(r,o,a,a*(.8+n()*.5),n()*3,0,Math.PI*2),e.fill(),a>8&&n()<.6&&(e.fillStyle="rgba(210,220,230,0.12)",e.fillRect(r-1,o,2,a*(2+n()*5)))}}message(t,e="info",n=5){n=Math.min(n,2.8);let s=document.createElement("div");for(s.className="msg "+e,s.textContent=t,this.msgBox.prepend(s);this.msgBox.children.length>6;)this.msgBox.lastChild.remove();setTimeout(()=>s.classList.add("fade"),n*1e3),setTimeout(()=>s.remove(),n*1e3+1200)}setCamera(t){this.camLabel.textContent="Visuale: "+ea[t].name,this.camLabel.classList.remove("fade"),clearTimeout(this._camT),this._camT=setTimeout(()=>this.camLabel.classList.add("fade"),1800)}toggleData(){this.showData=!this.showData,this.data.style.display=this.showData?"":"none"}update(t,e,n,s,r,o,a){let l=e.out,c=ln("droplets"),h=o.inside?K(a,0,.9):0;if(Math.abs((this._wet||0)-h)>.01&&(c.style.opacity=h.toFixed(2),this._wet=h),this._dataTimer+=t,this._dataTimer>.1&&this.showData){this._dataTimer=0;let v=l.ias/.514444,m=n.waterLiters(),g=m/te.waterCapacity,S=(n.engines[0].lever+n.engines[1].lever)/2,_=n.engines.some(y=>y.reverse>.05),x=(y,E,R="")=>`<div class="cell ${R}"><span>${y}</span><b>${E}</b></div>`,M=n.gearPos>.98?"GI\xD9":n.gearPos<.02?"SU":"IN MOTO",b=n.probePos>.95?"ESTESE":n.probePos<.05?"RETRATTE":"\u2026",w=Math.round(l.heading*xu)%360;w<=0&&(w+=360),this.data.innerHTML=x("IAS",`${v.toFixed(0)} kt`,v>te.vmo?"bad":"")+x("ALT",`${Math.round(l.alt/.3048)} ft`)+x("RAD ALT",`${Math.max(0,Math.round(l.radAlt/.3048))} ft`,l.radAlt<30&&!l.onWater&&!l.onGround?"warn":"")+x("V/S",`${Math.round(l.vs/.00508)} fpm`)+x("PRUA",`${String(w).padStart(3,"0")}\xB0`)+x("POTENZA",_?"REVERSE":`${Math.round(n.engines[0].torque)}% TQ`)+x("FLAP",`${Math.round(n.flapPos)}\xB0 (${te.flapDetents[n.flapIndex]}\xB0)`)+x("CARRELLO",M,n.gearPos>.5&&l.surfaceUnder==="water"&&l.radAlt<150?"bad":"")+x("SONDE",b,n.probePos>.5?"warn":"")+x("ACQUA",`${Math.round(m)} L (${Math.round(g*100)}%)`,n.foamArmed?"foam":"")+x("SGANCIO",Ns[n.dropMode].id)+x("MASSA",`${Math.round(n.totalMass())} kg`,n.warn.overweight?"warn":"")+x("CARB.",`${Math.round(n.fuel)} kg`,n.warn.lowFuel?"warn":"")+x("TRIM",`${(n.elevTrim*100).toFixed(0)}%`)+x("MANETTE",`${Math.round(S*100)}%`)+x("G",`${l.nz.toFixed(2)}`,l.nz>3?"bad":"")}let u=n.warn,d=[];u.stall&&d.push("STALLO"),u.gearWater&&d.push("CARRELLO ESTRATTO \u2014 AMMARAGGIO!"),u.gearUpLand&&d.push("CARRELLO RETRATTO!"),u.overspeed&&d.push("VELOCIT\xC0 ECCESSIVA"),u.probeSpeed&&d.push("SONDE: VELOCIT\xC0 ECCESSIVA"),u.tanksFull&&d.push("SERBATOI PIENI \u2014 RITRARRE LE SONDE"),l.overG>0&&d.push("SOVRACCARICO "+l.nz.toFixed(1)+" g");let f=d.join("<br>"),p=performance.now();f!==this._warnT?(this.warnBox.innerHTML=f,this._warnT=f,this._warnAt=p,this.warnBox.style.visibility=f?"":"hidden"):f&&p-this._warnAt>3e3&&(this.warnBox.style.visibility="hidden"),this._mapTimer+=t,this._mapTimer>.25&&(this._mapTimer=0,this._drawMap(e,s))}_drawMap(t,e){let n=this.mapCanvas,s=this.mapCtx,r=n.width,o=n.height,a=r/11e3,l=r/2,c=o/2,h=(_,x)=>[l+_*a,c+x*a];if(s.clearRect(0,0,r,o),s.fillStyle="rgba(20,32,22,0.82)",s.fillRect(0,0,r,o),!this._lakePath){let _=[];for(let x=0;x<Math.PI*2;x+=.08){let M=Math.cos(x)*Gt.lake.a,b=Math.sin(x)*Gt.lake.b,w=Gt.lake.cx+M*Math.cos(.35)-b*Math.sin(.35),y=Gt.lake.cz+M*Math.sin(.35)+b*Math.cos(.35);_.push([w,y])}this._lakePath=_}s.fillStyle="#2a5f86",s.beginPath(),this._lakePath.forEach(([_,x],M)=>{let[b,w]=h(_,x);M?s.lineTo(b,w):s.moveTo(b,w)}),s.closePath(),s.fill();let u=Gt.runway;s.strokeStyle="#ddd",s.lineWidth=3,s.beginPath();let d=Math.cos(.35)*u.len/2,f=Math.sin(.35)*u.len/2;s.moveTo(...h(u.cx-d,u.cz-f)),s.lineTo(...h(u.cx+d,u.cz+f)),s.stroke();let p=e.summary();for(let _ of p.zones){if(_.state==="quiete")continue;let[x,M]=h(_.x,_.z),b=3+Math.sqrt(_.burning)*.5;s.fillStyle=_.state==="spento"?"rgba(120,120,120,0.9)":_.state==="contenuto"?"rgba(255,170,0,0.9)":"rgba(255,50,20,0.95)",s.beginPath(),s.arc(x,M,Math.min(b,14),0,Math.PI*2),s.fill()}let[v,m]=h(t.pos.x,t.pos.z),g=t.out.heading;s.save(),s.translate(v,m),s.rotate(g),s.fillStyle="#ffd400",s.beginPath(),s.moveTo(0,-8),s.lineTo(5,6),s.lineTo(0,3),s.lineTo(-5,6),s.closePath(),s.fill(),s.restore(),s.fillStyle="#ccc",s.font="10px Arial",s.fillText("N \u2191",6,12);let S=p.zones.filter(_=>_.state!=="quiete").map(_=>{let x=Math.hypot(_.x-t.pos.x,_.z-t.pos.z)/1852,M=Math.atan2(_.x-t.pos.x,-(_.z-t.pos.z))*xu;return M<0&&(M+=360),`<div class="fz ${_.state}"><b>${_.name}</b> \u2014 ${_.state.toUpperCase()}<br><small>${Math.round(M)}\xB0 \xB7 ${x.toFixed(1)} NM</small></div>`}).join("");S!==this._fhtml&&(this.fireList.innerHTML=S+`<div class="fz tot">Area bruciata: ${p.burntHa.toFixed(1)} ha</div>`,this._fhtml=S)}showCrash(t){ln("crash").style.display="flex",ln("crashReason").textContent=t}hideCrash(){ln("crash").style.display="none"}};function Ep(i,t){if(!("ontouchstart"in window||navigator.maxTouchPoints>0))return;let n=ln("touch");n.style.display="block";let s=ln("tstick"),r=ln("tknob"),o=h=>{let u=s.getBoundingClientRect();for(let d of h.targetTouches){let f=(d.clientX-u.left)/u.width*2-1,p=(d.clientY-u.top)/u.height*2-1;i.touch.active=!0,i.touch.x=K(f,-1,1),i.touch.y=K(p,-1,1),r.style.transform=`translate(${K(f,-1,1)*45}px, ${K(p,-1,1)*45}px)`}h.preventDefault()};s.addEventListener("touchstart",o,{passive:!1}),s.addEventListener("touchmove",o,{passive:!1}),s.addEventListener("touchend",()=>{i.touch.active=!1,i.touch.x=i.touch.y=0,r.style.transform=""});let a=ln("tthr"),l=ln("tthrknob"),c=h=>{let u=a.getBoundingClientRect(),d=h.targetTouches[0],f=K(1-(d.clientY-u.top)/u.height,0,1);i.touch.throttle=f,l.style.bottom=`${f*100}%`,h.preventDefault()};a.addEventListener("touchstart",c,{passive:!1}),a.addEventListener("touchmove",c,{passive:!1});for(let h of n.querySelectorAll("button[data-act]"))h.addEventListener("touchstart",u=>{u.preventDefault();let d=h.dataset.act;d==="brakes"?i.brakes=1:d==="more"?ln("tmore").classList.toggle("open"):(t(d),d!=="drop"&&d!=="probes"&&ln("tmore").classList.remove("open"))},{passive:!1})}var $e=i=>document.getElementById(i),sy=()=>new Promise(i=>setTimeout(i,16)),Tp=location.hash.includes("test"),Fu=i=>{try{return localStorage.getItem("cl415."+i)}catch{return null}},gn={quality:Fu("quality")||(matchMedia("(pointer: coarse)").matches?"low":"medium"),start:Fu("start")||"air",wind:Fu("wind")||"moderate"};try{for(let i of["quality","start","wind"])$e(i+"Sel").value=gn[i]}catch{}var cn=new Lc,xn=null;$e("startBtn").addEventListener("click",async()=>{gn.quality=$e("qualitySel").value,gn.start=$e("startSel").value,gn.wind=$e("windSel").value;try{for(let i of["quality","start","wind"])localStorage.setItem("cl415."+i,gn[i])}catch{}cn.start(),$e("menu").style.display="none",xn?ia(gn.start):await oy(),xn.paused=!1});function ry(){try{let t=document.createElement("canvas").getContext("webgl2");return!!(t&&t.getExtension("EXT_clip_control"))}catch{return!1}}async function oy(){let i=$e("loading"),t=$e("loadStatus");i.style.display="flex";let e=async y=>{t.textContent=y,await sy()},n=gn.quality;await e("Preparazione del motore grafico\u2026");let s=ry(),r=new hc({antialias:n!=="low",powerPreference:"high-performance",reverseDepthBuffer:s,logarithmicDepthBuffer:!s});r.setPixelRatio(Math.min(window.devicePixelRatio,n==="high"?2:n==="low"?1:1.25)),r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Lo,r.toneMappingExposure=.52,r.shadowMap.enabled=!0,r.shadowMap.type=ws,$e("app").prepend(r.domElement),r.domElement.id="gl";let o=new vs,a=new un(70,window.innerWidth/window.innerHeight,.05,95e3);a.layers.enable(1),await e("Cielo e atmosfera\u2026");let l=new fc(o,r,{quality:n});l.wind.speed=gn.wind==="calm"?1.5:gn.wind==="strong"?9:4.6,l.wind.gust=gn.wind==="calm"?.6:gn.wind==="strong"?5:2.2,l.wind.turb=gn.wind==="calm"?.3:gn.wind==="strong"?2.2:1,l.updateWindBase(),await e("Generazione del terreno (valle, lago, montagne)\u2026");let c=new gc({quality:n});await e("Incendi boschivi\u2026");let h=new Mc(o,c,l,{quality:n});await e("Superficie del terreno\u2026"),o.add(c.buildMesh(h.fireAtlas)),await e("Aeroporto e rampa idrovolanti\u2026");let u=Qf(c);o.add(u),await e("Vegetazione\u2026");let d=new vc(c,o,{quality:n});d.meshes.forEach(y=>y.layers.set(1)),d.burnFn=(y,E)=>h.burntAt(y,E),await e("Lago con riflessi\u2026");let f=new yc({terrain:c,sunDir:l.sunDir,quality:n,renderer:r});o.add(f.mesh),await e("Canadair CL-415: fusoliera, ali, livrea\u2026");let p=new wc({quality:n});o.add(p.group),await e("Cabina di pilotaggio e strumenti\u2026");let v=new Cc({quality:n});p.group.add(v.group);let m={groundHeight:(y,E)=>Math.abs(y)>Gt.half-50||Math.abs(E)>Gt.half-50?2e3:c.heightAt(y,E),waterHeight:(y,E,R)=>f.heightAt(y,E,R),windAt:(y,E,R,A,C)=>l.windAt(y,E,R,A,C,Math.max(c.heightAt(y,R),0)),surfaceFriction:(y,E)=>c.surfaceFriction(y,E)},g=new Pc(m),S=new ta;g.sys=S;let _=new Ic(o,{quality:n,world:m,onDeposit:(y,E,R,A)=>h.deposit(y,E,R,A)}),x=new Dc(r.domElement),M=new D(Gt.runway.cx+Te.x*55+ve.x*200,Gt.runway.elev+17,Gt.runway.cz+Te.z*55+ve.z*200),b=new Fc(a,{towerPos:M}),w=new Uc;Ep(x,y=>x.actions.push(y)),xn={renderer:r,scene:o,camera:a,env:l,terrain:c,fires:h,veg:d,water:f,model:p,cockpit:v,world:m,fm:g,sys:S,fx:_,input:x,rig:b,hud:w,paused:!0,time:0,crashShown:!1,airfield:u},h.start(),ia(gn.start),await e("Pronto."),i.style.display="none",$e("hud").style.display="block",w.message("Benvenuto a bordo del CL-415. Premi H per i comandi.","info",8),w.message("Incendi attivi sui versanti a sud del lago: guarda la mappa in alto a destra.","warn",10),w.setCamera(b.mode),window.addEventListener("resize",ay),xn.last=performance.now(),window.__cl415=xn,Tp?window.__advance=(y,E=30,R=!0)=>{let A=Math.max(1,Math.round(y*E));for(let C=0;C<A;C++)Uu(xn.last+1e3/E,R&&C===A-1);return!0}:requestAnimationFrame(Uu)}function ay(){let{renderer:i,camera:t,water:e}=xn;i.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight,gn.quality)}function ia(i){let{fm:t,sys:e,input:n,hud:s,rig:r}=xn,o=new ta;for(let c of Object.keys(o))c!=="events"&&(e[c]=o[c]);e.engines=o.engines,e.fuel=2300,n.throttle=0,n.reverse=0,n.stick.x=n.stick.y=0,n.rudder=0;let a=Gt.lake,l=Math.atan2(Te.x,-Te.z);if(i==="water"){let c=Su(-2600,-280);e.gearDown=!1,e.gearPos=0,e.flapIndex=2,e.flapPos=15,t.reset(new D(c.x,0,c.z),-l,0,"water"),n.throttle=0}else if(i==="runway"){let c=Gt.runway,h=c.cx-Te.x*(c.len/2-60),u=c.cz-Te.z*(c.len/2-60);e.gearDown=!0,e.gearPos=1,e.flapIndex=1,e.flapPos=10,e.parkingBrake=!1,t.reset(new D(h,0,u),-l,0,"runway")}else{let c=Su(-5200,0);e.gearDown=!1,e.gearPos=0,e.flapIndex=0,e.flapPos=0,t.reset(new D(c.x,330,c.z),-l,135*.514444,"air"),n.throttle=.55,e.engines.forEach(h=>{h.lever=.55,h.nh=92}),e.elevTrim=.1}xn.crashShown=!1,s.hideCrash(),r.lookReset()}function ly(i){let{sys:t,fm:e,hud:n,rig:s,input:r}=xn;switch(i){case"flapDown":t.setFlaps(1),cn.click(900,.06,.3);break;case"flapUp":t.setFlaps(-1),cn.click(900,.06,.3);break;case"gear":t.toggleGear(e),cn.click(600,.08,.4);break;case"probes":t.toggleProbes(e),cn.click(1200,.05,.3);break;case"drop":t.drop(),cn.click(2e3,.03,.4);break;case"mode":t.cycleDropMode(),cn.click(2400,.03,.3);break;case"preset":t.cycleScoopPreset(),cn.click(2400,.03,.3);break;case"foam":t.toggleFoam(),cn.click(1600,.04,.3);break;case"lights":t.lights.landing=!t.lights.landing,n.message("Fari di atterraggio: "+(t.lights.landing?"ACCESI":"SPENTI")),cn.click();break;case"parking":t.parkingBrake=!t.parkingBrake,n.message("Freno di stazionamento: "+(t.parkingBrake?"INSERITO":"DISINSERITO"));break;case"thrMax":r.throttle=1;break;case"thrIdle":r.throttle=0;break;case"camera":s.set(s.mode+1),n.setCamera(s.mode);break;case"hud":n.toggleData();break;case"help":Ou("help");break;case"pause":Bu();break;case"lookReset":s.lookReset();break;case"mouseYoke":r.mouseYoke=!r.mouseYoke,n.message("Cloche col mouse: "+(r.mouseYoke?"ATTIVA":"DISATTIVA"));break;case"gamepad":n.message("Gamepad collegato","good");break;case"restart":e.crash&&ia(gn.start);break;case"trimUpPulse":t.elevTrim=K(t.elevTrim+.05,-1,1);break;case"trimDownPulse":t.elevTrim=K(t.elevTrim-.05,-1,1);break;case"debug":xn.debug=!xn.debug,$e("debug").style.display=xn.debug?"block":"none";break;default:i.startsWith("cam")&&(s.set(parseInt(i.slice(3),10)-1),n.setCamera(s.mode))}}function Ou(i){let t=$e(i);t.style.display=t.style.display==="flex"?"none":"flex"}function Bu(){xn.paused=!xn.paused,$e("pause").style.display=xn.paused?"flex":"none",xn.paused&&cn.ctx?cn.ctx.suspend():cn.ctx&&cn.ctx.resume()}$e("resumeBtn").addEventListener("click",()=>Bu());$e("restartBtn").addEventListener("click",()=>{ia(gn.start),Bu()});$e("menuBtn").addEventListener("click",()=>{$e("pause").style.display="none",$e("menu").style.display="flex"});$e("crashBtn").addEventListener("click",()=>ia(gn.start));$e("helpClose").addEventListener("click",()=>Ou("help"));for(let i of document.querySelectorAll("[data-help]"))i.addEventListener("click",()=>Ou("help"));var na=new D;function Uu(i,t=!0){Tp||requestAnimationFrame(Uu);let e=xn,n=Math.min(.05,(i-e.last)/1e3);e.last=i;let{fm:s,sys:r,input:o,rig:a,hud:l,model:c,cockpit:h,fx:u,fires:d,veg:f,env:p,water:v,camera:m,renderer:g}=e;for(let A of o.popActions())ly(A);if(e.paused){t&&g.render(e.scene,m);return}e.time+=n;let S=s.out,_=S.onGround||S.onWater;o.update(n,_),s.ctl.elevator=o.stick.y,s.ctl.aileron=o.stick.x,s.ctl.rudder=o.rudder,s.ctl.tiller=o.rudder;let x=o.brakes;s.ctl.brakeL=K(x*(1+Math.max(0,-o.rudder)*.6-Math.max(0,o.rudder)*.5),0,1),s.ctl.brakeR=K(x*(1+Math.max(0,o.rudder)*.6-Math.max(0,-o.rudder)*.5),0,1);for(let A of r.engines)A.lever=o.throttle,A.reverseLever=o.reverse;r.elevTrim=K(r.elevTrim+o.trimRate*n*.12,-1,1),e.autopilot&&e.autopilot(n,e),s.update(n);for(let A of r.events){let C=A.level==="caution"?"warn":A.level;l.message(A.text,C,A.type==="drop"?2.5:5),(A.type==="full"||A.type==="scoopdone")&&cn.chime(2,1046),A.level==="caution"&&cn.chime(1,880)}r.events.length=0;for(let A of d.events)l.message(A.text,A.level==="good"?"good":"warn",7),A.level==="good"&&cn.chime(3,1318);d.events.length=0,s.crash&&!e.crashShown&&(e.crashShown=!0,l.showCrash(s.crash.reason),cn.thump(1.5,S.surfaceUnder==="water")),c.group.quaternion.copy(s.quat),c.group.position.copy(s.cg).negate().applyQuaternion(s.quat).add(s.pos),c.update(n,r,s),c.group.updateMatrixWorld(!0);let M=a.inside;h.group.visible=M,c.setInterior(M),M&&h.update(n,s,r,e.time);let b=o.consumeLook();p.windAt(s.pos.x,s.pos.y,s.pos.z,e.time,na),a.update(n,s,b,{eye:h.eye,groundAt:(A,C)=>Math.max(e.world.groundHeight(A,C),.3),shake:u.cameraShake,turb:p.thermals.length?.5:0}),e.camOverride&&e.camOverride(m),d.update(n,e.time,m.position),u.update(n,s,r,c,p,m,e.time),f.update(m.position,n),e._vegT=(e._vegT||0)+n,e._vegT>2.5&&(e._vegT=0,f.refreshColors()),p.update(n,s.pos,m.position),v.update(n,e.time,p),e.terrain.material.userData.uniforms.uTime.value=e.time;let w=e.airfield.userData.windsock;if(w){let A=Math.atan2(na.x,na.z);w.rotation.y=A-Math.PI/2,w.userData.sock.rotation.y=0,w.userData.sock.rotation.z=Math.PI/2-K(Math.hypot(na.x,na.z)/8,.1,1)*1.3+Math.PI/2-Math.PI/2}let y=s.pos.clone().sub(m.position),E=y.length(),R=E>1?-s.vel.dot(y)/E:0;if(cn.update(n,s,r,{inside:M,distance:E,closing:R}),l.update(n,s,r,d,o,a,u.windscreenWet),!!t&&(u.render(m,p),d.render(m,p),g.render(e.scene,m),e.debug)){let A=g.info;$e("debug").textContent=`fps ${(1/Math.max(n,.001)).toFixed(0)} | draw ${A.render.calls} | tri ${(A.render.triangles/1e6).toFixed(2)}M | part ${JSON.stringify(u.stats())} | alpha ${(S.alpha/Et).toFixed(1)} beta ${(S.beta/Et).toFixed(1)} | wet ${S.wetLength.toFixed(1)} depth ${S.hullDepth.toFixed(2)} | scoop ${S.scoopRate.toFixed(0)} L/s`}}$e("menu").style.display="flex";})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
