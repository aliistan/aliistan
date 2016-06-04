

<script>
			window.onload = init;
			function init() {


			<script type="text/javascript">


			window.onload = init;
			function init() {
			

			var submit = document.getElementById("addTodo");
			submit.onclick = handleButtonClick;
		
			function handleButtonClick () {
			var creatTask = document.getElementById("addTaskNew");
			var writeUp = creatTask.value;	
			if (writeUp == "") {
				alert("Creat task");
			} else {
				var li = document.createElement("li");
			var ol = document.getElementById("addCreatTask");	
				var iElem = document.createElement("i");	
			li.innerHTML = writeUp + "i"; 
			
			li.setAttribute("data-toggle", "modal");
        	li.setAttribute("data-target", "#modal-1");
			ol.appendChild(li);
			li.appendChild(iElem);
			cross();
			save(writeUp);

function cross() {
    var nodeList = document.getElementsByTagName("i");
    var i;
    for (i = 0; i < nodeList.length; i++) {
        nodeList[i].setAttribute("class", "fa fa-times");
        nodeList[i].onclick = removeParent;
            function removeParent(evt) {
            evt.stopPropagation();
            evt.target.parentNode.remove();
        }    
    }
};
function popup(e) {
	var content = document.getElementById("content");
	content.value = e.target.innertext;
button.addEventListener("click", writeUp, false);

}
		}

}


}			



    </script>