var bg_img_arr=["assets/images/613695873_ac44ee4bbc_o.png","assets/images/614539630_a4130c104e_o.png","assets/images/613695975_819365cafc_o.png","assets/images/613696045_baf83b57aa_o.png","assets/images/613696881_b734791496_o.png","assets/images/614539594_dacee21443_o.png"],img=bg_img_arr[Math.floor(Math.random()*6)],html_tag=document.getElementsByTagName("html")[0],rv;
if(navigator.appName=="Microsoft Internet Explorer"){var ua=navigator.userAgent,re=/MSIE ([0-9]{1,}[.0-9]{0,})/;if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1)}if(rv<=8){var body_tag=document.getElementsByTagName("body")[0],bg_img=document.createElement("img");bg_img.src=img;bg_img.setAttribute("id","background");body_tag.appendChild(bg_img)}else html_tag.style.backgroundImage="url('"+img+"')";
