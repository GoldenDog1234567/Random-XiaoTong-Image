function print(a) {
	console.log(a)
}
url = "https://api.github.com/repos/GoldenDog1234567/Random-XiaoTong-Image/contents/img"
var ImgList = ["./img/Tong6-2.png", "./img/Tong6-1.png"]
/**/
Rdata=[]
mui.ajax(url, {
	data: {
	},
	dataType: 'json', //服务器返回json格式数据
	type: 'get', //HTTP请求类型
	timeout: 10000, //超时时间设置为10秒；
	headers: {},
	success: function (data) {
		print(data)
		Rdata = []
		for (var i = 0; i < data.length; i++) {
			Rdata.push(data[i].download_url)
		}
		print(Rdata)

		window.Rdata = Rdata
	},
	error: function (xhr, type, errorThrown) {
		print(xhr, type, errorThrown)
	}
});
/**/
print(Rdata)
DivW = document.body.clientWidth * 0.9
DivH = document.body.clientHeight * 0.8
if (Rdata.length==0){
	Rdata = ["./img/Tong6-2.png", "./img/Tong6-1.png", "./img/Tong4.png", "./img/Tong3.png", "./img/Tong3-1.png", "./img/Tong1.png"]
}
	
function RandomImgLeft() {
	ImgList = Rdata
	var b = Math.random() * (ImgList.length - 1)
	var RNum = Math.round(b)
	var img = document.getElementById('Img');
	img.style = "animation: RouteAndOutLeft 1s ease-in-out forwards;"
	setTimeout(function () {
		document.getElementById("ImgDiv").innerHTML = '<img onclick="FromMainToDetailTheImg(this)" id="Img" src="' + ImgList[RNum] + '" style="animation: ImgIn 1s ease-in-out forwards;">'
	}, 1000);

}
function RandomImgRight() {
	ImgList = Rdata
	var b = Math.random() * (ImgList.length - 1)
	var RNum = Math.round(b)
	var img = document.getElementById('Img');
	img.style = "animation: RouteAndOut 1s ease-in-out forwards;"
	setTimeout(function () {
		document.getElementById("ImgDiv").innerHTML = '<img onclick="FromMainToDetailTheImg(this)" id="Img" src="' + ImgList[RNum] + '" style="animation: ImgIn 1s ease-in-out forwards;">'
	}, 1000);
}
function GalleryImageSet() {
	var out = ""
	var place = document.getElementById("GalleryStuff")
	var j = 0
	/*for (var i = 0; i < Rdata.length; i = i + 3) {
		var out = out + '<div style="left: 5.5rem; top: calc(5.5rem + ' + j + ' * (26rem + 5.5rem));"><img id="Img" src="' + Rdata[i] + '"></div >' + '<div style="left: 37rem; top: calc(5.5rem + ' + j + ' * (26rem + 5.5rem));"><img id="Img" src="' + Rdata[i + 1] + '"></div >' + '<div style="right: 5.5rem; top: calc(5.5rem + ' + j + ' * (26rem + 5.5rem));"><img id="Img" src="' + Rdata[i + 2] + '"></div >'
		j++
	}*/
	for (var i = 0; i < Rdata.length; i++) {
		var out = out + '<div><img onclick="DetailTheImg(this)" src="' + Rdata[i] + '"></div>'
	}
	place.innerHTML = out
	//document.getElementById("GalleryStuff").style = 'height: calc(' + j + ' * (26rem + 5.5rem) + 5.5rem);'

}
function ToGallery() {
	var main = document.getElementById("MainDiv")
	var gallery = document.getElementById("GalleryDiv")
	main.style = "animation: DivOut 1s ease-in-out forwards;"
	setTimeout(function () {
		main.style = "display:none;"
	}, 1000);
	gallery.style = "display: block;animation: GalleryIn 1s ease-in-out forwards;"
}
function BackToMain() {
	var main = document.getElementById("MainDiv")
	var gallery = document.getElementById("GalleryDiv")
	gallery.style = "animation: DivOut 1s ease-in-out forwards;"
	setTimeout(function () {
		gallery.style = "display:none;"
	}, 1000);
	main.style = "display: block;animation: GalleryIn 1s ease-in-out forwards;"
}
function GetImgRadio() {
	var img_url = document.getElementById("DetailImg").src
	var img = new Image();
	// var DivW = document.getElementById("ImgBox").clientWidth
	// var DivH = document.getElementById("ImgBox").clientHeight
	img.src = img_url;
	if (img.width <= img.height + (img.height * 0.1)) {
		document.getElementById("DetailImg").style = "width: 100%;height: auto;"
		var scale = img.width / DivW
		print(scale)
		if (img.height / scale > DivH)
			document.getElementById("ImgBox").style = "display: block;"
	}
	else if (img.width > img.height + (img.height * 0.1)) {
		document.getElementById("DetailImg").style = "width: auto;height: 100%;"
		document.getElementById("ImgBox").style = "display: flex;"
	}
}
function DetailTheImg(a) {
	print(a)
	print(a.src)
	document.getElementById("DetailImg").src = a.src
	document.getElementById("FromGallery").style = "display: flex;"
	GetImgRadio()
	var main = document.getElementById("GalleryDiv")
	var gallery = document.getElementById("DetailViwer")
	main.style = "animation: DivOut 1s ease-in-out forwards;"
	setTimeout(function () {
		main.style = "display:none;"
	}, 1000);
	gallery.style = "display: block;animation: GalleryIn 1s ease-in-out forwards;"
}
function FromMainToDetailTheImg(a) {
	print(a)
	print(a.src)
	document.getElementById("DetailImg").src = a.src
	document.getElementById("FromMain").style = "display: flex;"
	GetImgRadio()
	var main = document.getElementById("MainDiv")
	var gallery = document.getElementById("DetailViwer")
	main.style = "animation: DivOut 1s ease-in-out forwards;"
	setTimeout(function () {
		main.style = "display:none;"
	}, 1000);
	gallery.style = "display: block;animation: GalleryIn 1s ease-in-out forwards;"
}
function BackToGallery() {
	var gallery = document.getElementById("GalleryDiv")
	var main = document.getElementById("DetailViwer")
	main.style = "animation: DivOut 1s ease-in-out forwards;"
	setTimeout(function () {
		main.style = "display:none;"
	}, 1000);
	gallery.style = "display: block;animation: GalleryIn 1s ease-in-out forwards;"
}
function DetailBackToMain() {
	var main = document.getElementById("MainDiv")
	var gallery = document.getElementById("DetailViwer")
	gallery.style = "animation: DivOut 1s ease-in-out forwards;"
	setTimeout(function () {
		gallery.style = "display:none;"
	}, 1000);
	main.style = "display: block;animation: GalleryIn 1s ease-in-out forwards;"
}
function download(href) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('download', "File.png");
    a.click();
}
function GetDownloadLink() {
	var file = document.querySelector("#DetailImg").src
	download(file)
}
