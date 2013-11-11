<?php

/**    
* Replacement function bb-tags   
* @param string 
* @return string   
*/
    function bb_tags($text)
    {   
        $pattern1 = '/\[:(gallery-)(\d{1,3})\]/';
        $pattern2 = '<div class="$1$2"></div>';
        $replace = preg_replace($pattern1, $pattern2, $text);
        return $replace;    
    } 
?>