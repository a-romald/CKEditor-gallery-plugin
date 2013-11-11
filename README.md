A plugin for CKEditor HTML text editor that allows to select a desirable gallery from the list.

Requires to include jQuery

Usage

    Place gallery folder into catalog plugins in ckeditor folder in your project.
    Add in the very end of CKEditor config.js file or if it is absent create it
    the following lines:
    
    // Tell CKEditor that it must load our plugin
    config.extraPlugins = 'gallery'; 
    // Add button of our plugin
    config.Toolbar_Example = ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About', '-', 'Gallery'];
    // Now configure CKEditor'ó to use the necessary toolbar
    config.toolbar = 'Example';
    
Requires PHP-code in get_galleries.php file to get list of galleries with Json format.
After select in list of galleries you get bb-code in textfield like:
    
    some text ... [:gallery-1] ... some text ... [:gallery-3] and some text ...

This text will be stored in datatable and when it is rendered at the page it should
be processed with the function bb_tags($text) in bb_code.php file to get instead of this code like:

    some text ... <div class="gallery-1"></div> ... some text ... <div class="gallery-3"></div> and some text ...


Then these div-tags will be processed with jQuery code in gallery.js file and all the links
into images will be given via AJAX.