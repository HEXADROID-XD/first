var num=26
 rev_a=[]
    
    var temp=Math.abs(num);
    while(temp>0){
        rev_a.push(temp%16)
        temp=Math.floor(temp/16)
    }
    for(var i=rev_a.length;i<8;i++){
        rev_a.push(0)
    }
    
    var a=[]
    
    for(var i=7;i>=0;i--){
        a.push(rev_a[i])
        
    }console.log(a)
    
    if(num<0){
        for(var i=7;i>=0;i--){
            a[i]=15-a[i]       
    }   
}
if(num<0){
    var c=1
    for(var i=7;i>=0;i--){
        if((a[i]+c)<16){
            a[i]+=1
            break;
        }
        
    }
} 
    
    
    var ans=''
    for(var i=0;i<a.length;i++){
        if(a[i]<10 && a[i]>0){
            ans+=a[i]
        }if(a[i]==10){
            ans+='a'
        }if(a[i]==11){
            ans+='b'
        }if(a[i]==12){
            ans+='c'
        }if(a[i]==13){
            ans+='d'
        }if(a[i]==14){
            ans+='e'
        }if(a[i]==15){
            ans+='f'
        }
    }
    console.log(ans)
    
    