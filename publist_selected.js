
/***********************Preprints*********************/
var selectedList = [
	pubEntry('Contexts can be Cheap: Solving Stochastic Contextual Bandits with Linear Bandit Algorithms',
	'2023',
	'COLT',
	'Osama Hanna, Christina Fragouli',
	'https://arxiv.org/abs/2211.05632'
	),
	pubEntry('Does Sparsity Help in Learning Misspecified Linear Bandits?',
	'2023',
	'ICML',
	'Jialin Dong',
	'https://arxiv.org/abs/2303.16998'
	),
	pubEntry('Near-Optimal Sample Complexity Bounds for Constrained MDPs',
	'2022',
	'NeurIPS',
	'Sharan Vaswani,  Csaba Szepesvari',
	'https://arxiv.org/abs/2206.06270'
	),

	pubEntry(' Settling the Horizon-Dependence of Sample Complexity in Reinforcement Learning',
	'2021',
	'FOCS',
	'Yuanzhi Li, Ruosong Wang',
	'https://arxiv.org/abs/2111.00633'
	),	



  pubEntry('Reinforcement Learning with General Value Function Approximation: Provably Efficient Approach via Bounded Eluder Dimension',
		'2020',
		'NeurIPS',
		'Ruosong Wang, Ruslan Salakhutdinov',
		'https://arxiv.org/abs/2005.10804v3'
	),



  pubEntry('Model-Based Reinforcement Learning with Value-Targeted Regression',
		'2020',
		'ICML',
		'Alex Ayoub, Zeyu Jia, Csaba Szepesvari, Mengdi Wang',
		'https://arxiv.org/abs/2006.01107'
	),
  
  pubEntry('Reinforcement Learning in Feature Space: Matrix Bandit, Kernels, and Regret Bound',
		'2020',
		'ICML',
		'Mengdi Wang',
		'https://arxiv.org/pdf/1905.10389.pdf'
	),
  
  pubEntry('Model-Based Reinforcement Learning with a Generative Model is Minimax Optimal',
		'2020',
		'COLT',
		'Alekh Agarwal, Sham Kakade',
		'https://arxiv.org/abs/1906.03804'
	),
  
	pubEntry('Is A Good Representation Sufficient for Sample Efficient Reinforcement Learning?',
		'2020',
		'ICLR',
		'Simon S. Du, Sham M Kakade, Ruosong Wang <br><b>Spotlight Presentation</b>',
		'https://arxiv.org/pdf/1910.03016.pdf'
	),	

	pubEntry('Sample-Optimal Parametric Q-Learning with Linear Transition Models',
	'2019',
	'ICML',
	'Mengdi Wang',
	'https://arxiv.org/abs/1902.04779'
),

]

function pubEntry(title, year, journual, coAuthors, pdfLink, intro = ""){
	return '<article> \
				<div class="inner"> \
				<ul class="nobullet"> \
					<li><i>' + title + ' (<b style="color:#000000";>' + journual + '</b>, '  + year + ')</i></li> \
					<li>With ' + coAuthors + '</li><li>' 
          +
					(pdfLink == "" ? "" : '<a href="'+pdfLink + '">PDF</a> ')
          +
					(intro == "" ? "" : '<details><summary>Summary </summary><p><b>'+intro + '</b></p></details>') 
          +
				'</li></ul> \
				</div> \
			</article>'
};


document.write('\
	<div class="features" id="pub-astro">	\
		<h4>Selected Publications</h4> \
');

for (i = 0; i < selectedList.length; i++) { 
	document.write(selectedList[i]);
}
document.write('\
</div> \
');

