CKEDITOR.dialog.add('gallery', function(editor) {
   
   $.ajax({
	  type: "POST",
	  url: "get_galleries.php",
      dataType: 'json',
	  success: function(data){ 
		 
		  galleries =[];
          for (var i in data)
		  {
			 galleries.push([data[i]['title'], data[i]['id']]);
		  }
		  //console.log(galleries);
      },
	async: false
			  
	}); 
    
  return {
    
    title : 'Galleries',
    minWidth : 250,
    minHeight : 200,
    onOk: function() {
        var Obj = this.getContentElement( 'tab1', 'gallery' ).getValue();
        CKEDITOR.instances.editor1.insertHtml('[:gallery-' + Obj + ']');
        //editor1 - id of <textarea name="content" id="editor1"></textarea>
    },
    contents : [{
      id : 'tab1',
      label : 'Galleries',
      elements : [{
        id : 'gallery',
        type : 'select',
        label : 'Choose gallery',
        items : galleries,
        'default' : 'Galleries',
      }]
    }]
    
  };
  
  
});
