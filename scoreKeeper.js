var score = Array();
score[1] = 0;
score[2] = 0;

function updateScore(teamNumber, add) {
			var scoreId = "score" + teamNumber;
			/*var currentScore = +document.getElementById(scoreId).innerHTML;
			currentScore += add;
			document.getElementById(scoreId).innerHTML = currentScore;*/

			score[teamNumber] += add;
			document.getElementById(scoreId).innerHTML = score[teamNumber];
		}
		function makeInactive(teamNumber) {
			var teamId = "team" + teamNumber;
			$("#" + teamId + " .power").addClass("hidden");
			$("#" + teamId + " .neg").addClass("hidden");
			$("#" + teamId + " .player").addClass("player-inactive").removeClass("player");
		}
		function bonus(teamNumber) {
			// Hide current stuff
			var teamId = "team" + teamNumber;
			$("#" + teamId + " .power").addClass("hidden");
			$("#" + teamId + " .neg").addClass("hidden");
			$("#" + teamId + " .player").addClass("hidden");

			// Show bonus stuff
			$("#" + teamId + " .bonus").removeClass("hidden");
		}
		function tossup() {
			$(".power, .player, .neg").removeClass("hidden");
			$(".player-inactive").addClass("player").removeClass("player-inactive");
			$(".bonus").addClass("hidden");
		}
		$("#team1 .power").click(function() {
			var score = +this.innerHTML;
			updateScore(1, score);
			makeInactive(2);
			bonus(1);
		});
		$("#team1 .player").click(function() {
			if (!$(this).is(".player-inactive")) {
				updateScore(1, 10);
				makeInactive(2);
				bonus(1);
			}
		});
		$("#team1 .neg").click(function() {
			updateScore(1, -5);
		});
		$("#team2 .power").click(function() {
			updateScore(2, 15);
			makeInactive(1);
			bonus(2);
		});
		$("#team2 .player").click(function() {
			if (!$(this).is(".player-inactive")) {
				updateScore(2, 10);
				makeInactive(1);
				bonus(2);
			}
		});
		$("#team2 .neg").click(function() {
			updateScore(2, -5);
		});
		$("#team1 .bonus").click(function() {
			var score = +this.innerHTML;
			updateScore(1, score);
			tossup();
		});
		$("#team2 .bonus").click(function() {
			var score = +this.innerHTML;
			updateScore(2, score);
			tossup();
		});