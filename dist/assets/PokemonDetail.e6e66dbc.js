import{u as v,c as s,a as f,b as p,d as e,_ as y,t as o,e as t,f as P,o as g,g as D}from"./index.c9245a63.js";const S={class:"pokemon-detail-container"},A={class:"pokemon-detail"},b=e("h2",null,"Types",-1),T=e("div",{class:"pokemon-info pokemon-types"},[e("span",null,"TBD"),e("span",null,"TBD")],-1),w=e("h2",null,null,-1),B={class:"pokemon-info"},M=e("span",null,"Height",-1),x=e("span",null,"Weight",-1),N=e("span",null,"Ability",-1),V={class:"pokemon-ability"},q=e("h2",null,"Stats",-1),H={class:"pokemon-info"},$=e("span",null,"HP",-1),E=e("span",null,"Attack",-1),W=e("span",null,"Defense",-1),j=e("span",null,"Spc. Attack",-1),z=e("span",null,"Spc. Defense",-1),C=e("span",null,"Speed",-1),F=P('<h2>Moves</h2><div class="pokemon-info"><div class="pokemon-move"><h3>Move</h3><p>Accuracy</p><p>PP</p><p>Power</p><p>Type</p></div><div class="pokemon-move"><h3>Move</h3><p>Accuracy</p><p>PP</p><p>Power</p><p>Type</p></div><div class="pokemon-move"><h3>Move</h3><p>Accuracy</p><p>PP</p><p>Power</p><p>Type</p></div></div>',2),K={name:"PokemonDetail",props:{id:{type:String,required:!0},name:{type:String,required:!0}},setup(l){const a=l,n=v();n.getPokemonData(a.id);const c=s(()=>n.height),i=s(()=>n.weight),d=s(()=>n.ability),u=s(()=>n.hp),_=s(()=>n.attack),h=s(()=>n.defense),m=s(()=>n.speed),r=s(()=>n.specialAttack),k=s(()=>n.specialDefense);return(G,I)=>(g(),f("div",S,[p(D),e("div",A,[p(y,{"pokemon-id":l.id,"pokemon-name":l.name},null,8,["pokemon-id","pokemon-name"]),b,T,w,e("div",B,[e("p",null,[M,e("span",null,o(t(c))+" inches",1)]),e("p",null,[x,e("span",null,o(t(i))+" lbs",1)]),e("p",null,[N,e("span",V,o(t(d)),1)])]),q,e("div",H,[e("p",null,[$,e("span",null,o(t(u)),1)]),e("p",null,[E,e("span",null,o(t(_)),1)]),e("p",null,[W,e("span",null,o(t(h)),1)]),e("p",null,[j,e("span",null,o(t(r)),1)]),e("p",null,[z,e("span",null,o(t(k)),1)]),e("p",null,[C,e("span",null,o(t(m)),1)])]),F])]))}};export{K as default};
