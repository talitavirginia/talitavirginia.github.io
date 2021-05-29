<?php $time = $_GET['time'];?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body class="interview">
	<div id="play-button">
		Start Interview
	</div>
	<div id="subtitle-container">
		
	</div>

	<div id="video-container">
		<video loop src="audioplastivore.mp3" data-start-time="<?php echo $time;?>">
			<track label="English" kind="subtitles" src="captionsplastivore.vtt" srclang="en" default>
		</video>
	</div>

	<div id="interview-information">
		<p>
			An interview with <em>Dr. Linsey Haram</em><br/>
			about the Plasticene Lexicon
		</p>
	</div>

	<nav>
		<a href="index.html">Return</a>
	</nav>

	<div class="media-container">
		<div id="media-item-1">
			<img src="media/plastivore/68585644_10157510362245600_3539432404890419200_n.jpeg
">
		</div>
		<div id="media-item-2">
			<img src="media/plastivore/19D_PLASTIVORE_worms_2_rotate_crop-695x1024-e1562475493608.jpeg">
		</div>
		<div id="media-item-3">
			<img src="media/plastivore/header-plastic-poop.jpeg">
		</div>
		<div id="media-item-4">
			<img src="media/plastivore/68403816_10157510362225600_7252851362256388096_n.jpeg">
		</div>
		<div id="media-item-5">
			<img src="media/plastivore/Plastivore_Laysan_albatross_ClaireFacklerNOAA.jpeg">
		</div>
		<div id="media-item-6">
			<img src="media/plastivore/shutterstock_589542551.jpeg">
		</div>
		<div id="media-item-7">
			<img src="media/plastivore/csm_Plastivore_Britt_Duppen_e04abb8ec9.jpeg">
		</div>
		<div id="media-item-8">
			<img src="media/plastivore/stomaximus_small_1000.jpeg">
		</div>
		<div id="media-item-9">
			<img src="media/plastivore/Waxworm4-HaraldGrove-300x200.png">
		</div>
		<div id="media-item-10">
			<img src="media/plastivore/baby_verde1.jpeg">
		</div>
		<div id="media-item-11">
			<video autoplay loop muted playsinline src="media/cut.mp4"></video>
		</div>
	</div>
	<script type="text/javascript" src="script.js"></script>	

</body>
</html>

