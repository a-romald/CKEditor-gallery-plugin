CKEDITOR.plugins.add('gallery', {
  init : function(editor) {
    var self = this;
    
    var command = editor.addCommand('gallery', new CKEDITOR.dialogCommand('gallery'));
    command.modes = {wysiwyg:1, source:1};
    command.canUndo = true;

    editor.ui.addButton('Gallery', {
      label : 'Choose gallery',
      command : 'gallery',
      icon: self.path+'images/icon.png'
    });

    CKEDITOR.dialog.add('gallery', this.path + 'dialogs/gallery.js');
  }
});