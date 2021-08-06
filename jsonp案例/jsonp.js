;(function(){
     var searchInput=document.getElementsByClassName('J_searchInput')[0]
     wdlist=document.getElementsByClassName('J_wdList')[0]
     listTpl=document.getElementById('J_listTpl').innerHTML
     console.log(listTpl);

    function init(){
      bindEvent()
    }
    init()
    function bindEvent(){
       searchInput.addEventListener('input',typeInput,false)
    }
    function typeInput(){
        var val=_trimSpace(this.value)
        if(val.length>0){
            getDatas(val,'setDatas')
        }
    }
    // https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=34298,34323,34364,31253,34376,34004,34072,34092,34107,34111,26350,34368&wd=1&req=2&csor=1&cb=jQuery110205033525351672179_1628240184445&_=1628240184446
    function getDatas(val,cb){
      var oScript=document.createElement('script')
      oScript.src="https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=34298,34323,34364,31253,34376,34004,34072,34092,34107,34111,26350,34368&wd="+val+"&req=2&csor=1&cb="+cb
      document.body.appendChild(oScript)
      document.body.removeChild(oScript)
    }
    window.setDatas=function(data){
        rendList(data)
    }
    function rendList(data){
       var data=data.g
       len=''
       list=''
       try{
         len=data.length
       }catch(e){
         len=0
       }
       if(len>0){
        data.forEach(item=>{
          list+=listTpl.replace(/{{(.*?)}}/gim,function(node,key){
          return{
            wd:item.q,
            wdLink:item.q
          }[key]
          }) 
         })
         wdlist.innerHTML=list
       }
    }
    function _trimSpace(str){
        return str.replace(/\s+/,'')
    }

})();