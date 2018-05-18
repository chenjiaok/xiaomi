$(window).resize(function() {
  	ready();
});

window.onload = ready(); 
function ready(){//当可视区域变化时，实时调整页面宽度
	var h = $(window).width();
	if(h<1225.6){
		$('.header').css('width','1225.6px');
		$('.topnav').css('width','1225.6px');
		$('.center').css('width','1225.6px');
		$('.Bbanner').css('width','1225.6px');
		$('.star').css('width','1225.6px');
		$('.appliance').css('width','1225.6px'); 
		$('.intelligence').css('width','1225.6px'); 
		$('.collocations').css('width','1225.6px'); 
		$('.assy').css('width','1225.6px'); 
		$('.source').css('width','1225.6px'); 
		$('.recommend').css('width','1225.6px');
		$('.discuss').css('width','1225.6px');
		$('.content').css('width','1225.6px');
		$('.video').css('width','1225.6px');
		$('.aftersale').css('width','1225.6px');
		$('.footer').css('width','1225.6px');      
	}
	else if(h>1225.5){
		$('.header').css('width','100%');
		$('.topnav').css('width','100%');
		$('.center').css('width','100%');
		$('.Bbanner').css('width','100%');
		$('.star').css('width','100%');
		$('.appliance').css('width','100%'); 
		$('.intelligence').css('width','100%'); 
		$('.collocations').css('width','100%'); 
		$('.assy').css('width','100%'); 
		$('.source').css('width','100%'); 
		$('.recommend').css('width','100%');
		$('.discuss').css('width','100%');
		$('.content').css('width','100%');
		$('.video').css('width','100%');
		$('.aftersale').css('width','100%');
		$('.footer').css('width','100%');      
	}
}

//每一区域热点标题hover特效
var $titlechecked = $('div .con .title p i');
$titlechecked.hover(function(){
	$titlechecked.removeClass('checked');
	$(this).addClass('checked');
});

//vedio hover 特效
var $vedio = $('.video .con ul li');
$vedio.hover(function(){
	$(this).find('p').css({
		'background':'#f00',
		'border-color':'#f00'
	});
},function(){
	$(this).find('p').css({
		'background':'none',
		'border-color':'#fff'
	});
});


//个人中心特效
var $toprightli1 = $('.header .top .topright li:first');

$toprightli1.hover(function(){
	$toprightli1.css('background','#fff');
	$(this).find('a').css('color','#f00');
	$(this).find('i').css('border-color','#f00');
	$(this).find('div').css({
		visibility:'visible',
	});
},function(){
	$toprightli1.css('background','#333');
	$(this).find('a').css('color','#ccc');
	$(this).find('i').css('border-color','#ccc');
	$(this).find('.user').css({
		visibility:'hidden'
	});
});

//购物车特效
var $toprightli4 = $('.header .top .topright li:nth-child(4)');
$toprightli4.hover(function(){
	$toprightli4.css('background','#fff');
	$(this).find('a').css('color','#f00');
	$(this).find('div').css({
		visibility:'visible',
		});
},function(){
	$toprightli4.css('background','#333');
	$(this).find('a').css('color','#ccc');
	$(this).find('div').css({
		visibility:'hidden',
	});

});


//topnav hover特效
var $topnavbarB = $('.topnav .nav .navbar .main .mainB');
$topnavbarB.hover(function(){//移入事件
	$topnavbarB.find('.des').css({
		'visibility':'hidden',
		'z-index':'-1'
	});
    $(this).find('.des').css({
		'visibility':'visible',
		'z-index':'10'
	});

});
//topnav hover特效
var $topnavbar = $('.topnav .nav .navbar .main')
$topnavbar.hover(function(){//移入事件  

},function(){//移出事件
	$(this).find('.des').css({
	'visibility':'hidden',
	'z-index':'-1'
	});
});

//搜索按钮hover特效
var $searchbutton = $('.nav .searchbar .searchbutton'); 
$searchbutton.hover(function(){//移入事件
	$searchbutton.css('background','#f60');
	$searchbutton.find('i').css('border-color','#fff');
	$searchbutton.find('b').css('border-color','#fff');
    
},function(){
	$searchbutton.css('background','#fff');
	$searchbutton.find('i').css('border-color','#777');
	$searchbutton.find('b').css('border-color','#777');
});


//leftnav hover特效
var $navleft = $('.center .centerbanner .leftnav ul li');
$navleft.hover(function(){
	$(this).find('ul').css({
		visibility:'visible',
	});
},function() {
	$(this).find('ul').css({
		visibility:'hidden',
	});
});

//中间banner hover特效
var $topBanner = $('.center .banner .dic');
$topBanner.hover(function(){ 
	imgbannerT = window.clearInterval(imgbannerT);
	$(this).find('li').css({
		'visibility':'visible',
	});
},function(){   
	$(this).find('li').css({
		'visibility':'hidden',
	});   
	imgbannerT = setInterval(function (){
		currentSign();
		topBannerAnimate();
	},3000); 
});

	//轮播特效
	var j;

	var $topleftsign 	= $('.center .banner .sign li');  //小圆点符号
	var topleft 		= $('.center .banner .pic li');//区域图片
	var tLength 		= topleft.length;   	

	
	var $topleftsignleft  = $('.center .banner .dic .left');  //向左符号
	var $topleftsignright  = $('.center .banner .dic .right');  //向右符号


  //点击效果选中某一图片效果
	$topleftsignleft.click(function(){
		currentSign();
		j =( (j + tLength) - 1) % tLength;
		j--;   
		topBannerAnimate(); 
	});

	$topleftsignright.click(function(){
		currentSign();
		j =( (j + tLength) -1 )%tLength;
		j++;   
		topBannerAnimater(); 
	});

		//网页初始轮播位置
	j = topleft.index(this.find('.signchecked'));     


	//定时更新banner
	var imgbannerT = setInterval(function (){
		currentSign();
		topBannerAnimate();
	},3000); 
	

	
	//点击效果选中某一图片效果
	$topleftsign.click(function(){
		imgbannerT = window.clearInterval(imgbannerT);
		j = $topleftsign.index(this);
		j --;   
		topBannerAnimate(); 
	});

   
   //中上banner默认轮播效果
function topBannerAnimate(){
	j = j > tLength - 1 ? 0 : j;
	var j1 = ( j + 1 ) % tLength;
	topleft.stop().animate({
		width:'0',
		'z-index':'-2', 
	},800);  

	topleft.eq(j1).css({
		left:'76.6em',
		'z-index':'0',
		width:'0',

	}).stop().animate({
		left:'0',
		'z-index':j+1,
		width:'76.6em',
	},200);
	$topleftsign.removeClass('signchecked').eq(j1).addClass('signchecked');  
		j ++;
}
function topBannerAnimater(){
	j = j > tLength - 1 ? 0 : j;  
	var j1 = ( j + 1 ) % tLength;
	topleft.stop().animate({
		left:'76em',
		width:'0',
		'z-index':'-2',        
	},800);  

	topleft.eq(j1).css({
		left:'76em',
		'z-index':'0',
		width:'0',

	}).stop().animate({
		left:'0',
		'z-index':j+1,
		width:'76.6em',
	},200);
	$topleftsign.removeClass('signchecked').eq(j1).addClass('signchecked');  
	j ++; 
} 

	//程序中断后获取轮播位置
function currentSign(){
	for(var i = 0; i < tLength; i ++){
		if(($topleftsign.eq(i)).hasClass('signchecked')){ j=i; }
	}

}


