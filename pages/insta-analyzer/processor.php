<?php
error_reporting(E_ALL);
error_reporting(-1);
ini_set('error_reporting', E_ALL);

$followersFile = file_get_contents($_FILES['followers']['tmp_name']);
$followingFile = file_get_contents($_FILES['following']['tmp_name']);



// Read JSON files
// $file1 = file_get_contents('followers_1.json');
// $file2 = file_get_contents('following.json');
// // $file3 = file_get_contents('old-following.json');


// Decode JSON data
$data1 = json_decode($followersFile, true);
$data2 = json_decode($followingFile, true);
// $data3 = json_decode($file3, true);

$data2 = $data2['relationships_following'];

// echo "<pre>"; print_r($data2); die;

// Extract "value" from each string_list_data
$values1 = array_map(function ($item) {
    return $item['string_list_data'][0]['value'];
}, $data1);

$values2 = array_map(function ($item) {
    return $item['string_list_data'][0]['value'];
}, $data2);

/* $values3 = array_map(function ($item) {
    return $item['string_list_data'][0]['value'];
}, $data3); */



// Find mismatches
$mismatchesInFile1 = array_diff($values1, $values2);
$mismatchesInFile2 = array_diff($values2, $values1);

// Display mismatches
/* echo "Mismatches in followers_1:\n";
print_r($mismatchesInFile1);

echo "\nMismatches in following but not follower:\n";
print_r($mismatchesInFile2); */


/* Download */
header('Content-Type: text/plain');  // Specify content type as plain text
header('Content-Disposition: attachment; filename="account-list.txt"');  // Trigger download

ob_start();  // Start capturing output
$opString = "These are the accounts you follow and they don't follow you back.". PHP_EOL;
$opString .= "==================================================================". PHP_EOL. PHP_EOL;

foreach ($mismatchesInFile2 as $element) {
    $opString .= $element . PHP_EOL;
}
echo $opString;

$fileContents = ob_get_contents();  // Retrieve buffered content
ob_end_clean();  // Clear buffer
echo $fileContents;  // Send the content to the browser for download
exit();  // Prevent further execution and potential errors

die('Done');
// File path
// $filePath = 'output.txt';

// // Open the file for writing
// $file = fopen($filePath, 'w');

// // Write each element to a new line
// foreach ($mismatchesInFile2 as $element) {
//     fwrite($file, $element . PHP_EOL);
// }

// // Close the file
// fclose($file);

// echo 'Array elements written to ' . $filePath;


?>
