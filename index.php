<!-- grades heroku config var -->
<?php 
$env = getenv('API_KEY');
$js_out = json_encode($env);
?>
<!-- exports to index.js -->
<input type="hidden" id="myPhpValue" value="<?php echo $js_out ?>" />
<!-- gives heroku access to static file -->
<?php
include_once("index.html"); 
?>