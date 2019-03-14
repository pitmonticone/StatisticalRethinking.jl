var documenterSearchIndex = {"docs": [

{
    "location": "intro/#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "intro/#StatisticalRethinking-1",
    "page": "Home",
    "title": "StatisticalRethinking",
    "category": "section",
    "text": ""
},

{
    "location": "intro/#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "This package contains Julia versions of selected code snippets and mcmc models contained in the R package \"rethinking\" associated with the book Statistical Rethinking by Richard McElreath.In the book and associated R package rethinking, statistical models are defined as illustrated below:flist <- alist(\n  height ~ dnorm( mu , sigma ) ,\n  mu <- a + b*weight ,\n  a ~ dnorm( 156 , 100 ) ,\n  b ~ dnorm( 0 , 10 ) ,\n  sigma ~ dunif( 0 , 50 )\n)Posterior values can be approximated by# Simulate quadratic approximation (for simpler models)\nm4.31 <- quad(flist, data=d2)or generated using Stan by:# Generate a Stan model and run a simulation\nm4.32 <- ulam(flist, data=d2)The author of the book states: \"If that (the statistical model) doesn\'t make much sense, good. ... you\'re holding the right textbook, since this book teaches you how to read and write these mathematical descriptions\" (page 77).The StatisticalRethinkingJulia Github organization is intended to allow experimenting with this learning process using four available mcmc options in Julia:CmdStan\nDynamicHMC\nTuringLang\nMambaAt least one other package is available for mcmc in Julia:KlaraTime constraints prevented this option to be in StatisticalRethinkingJulia.A secondary objective of StatisticalRethinkingJulia is to compare definition and execution of a variety of models in the above four mcmc packages.Model scripts using Turing, Mamba, CmdStan or DynamicHMC can be found in TuringModels, StanModels, DynamicHMCModels and MambaModels, part of the StatisticalRethinkingJulia Github organization set of packages."
},

{
    "location": "layout/#",
    "page": "Layout",
    "title": "Layout",
    "category": "page",
    "text": ""
},

{
    "location": "layout/#Layout-of-the-package-1",
    "page": "Layout",
    "title": "Layout of the package",
    "category": "section",
    "text": "Instead of having all snippets in a single file, the snippets are organized by chapter and grouped in clips by related snippets. E.g. chapter 0 of the R package has snippets 0.1 to 0.5. Those have been combined into 2 clips:clip-01-03.jl - contains snippets 0.1 through 0.3\nclip-04-05.jl - contains snippets 0.4 and 0.5.These 2 files are in scripts/00 and later on processed by Literate.jl to create 3 derived versions, e.g. from clip_01_03.jl in scripts/00:clip-01-03.md - included in the documentation\nclip-01-03.ipynb - stored in the notebooks/chapter directory\nclip-01-03.jl - stored in the chapters/chapter directoryOccasionally lines in scripts are suppressed when Literate processes input source files, e.g. in Turing scripts the statement #nb Turing.turnprogress(false); is only inserted in the generated notebook but not in the corresponding chapter .jl script. Similarly #src ... will only be included in the .jl scripts in the chapters subdirectories.A single snippet clip will be referred to as 03/clip-02.jl. Models with names such as 08/m8.1t.jl, 04/m4.1s.jl, 04/m4.4m.jl and 04/m4.5d.jl generate mcmc samples using Turing.jl, CmdStan.jl, Mamba.jl or DynamicHMC.jl respectively. In some cases the results of the mcmc chains have been stored and retrieved (or regenerated if missing) in other clips, e.g. 04/clip-30s.jl."
},

{
    "location": "versions/#",
    "page": "Versions",
    "title": "Versions",
    "category": "page",
    "text": ""
},

{
    "location": "versions/#Versions-and-notes-1",
    "page": "Versions",
    "title": "Versions & notes",
    "category": "section",
    "text": "Developing rethinking must have been an on-going process over several years, StatisticalRethinkinh.jl will likely follow a similar path.The initial version (v1) of StatisticalRethinking is really just a first attempt to capture the models and show ways of setting up those models, execute the models and post-process the results using Julia.\nAs mentioned above, a second objective of v1 is to experiment and compare the four selected mcmc options in Julia in terms of results, performance, ease of expressing models, etc.\nThe R package rethinking, in the experimental branch on Github, contains 2 functions quap and ulam (previously called map and map2stan) which are not in v1 of Statisticalrethinking.jl. It is my intention to study those and possibly include quap or ulam (or both) in a future of Statisticalrethinking.\nSeveral other interesting approaches that could become a good basis for such an endeavour are being explored in Julia, e.g. Soss.jl and Omega.jl.\nMany other R functions such as precis(), link(), shade(), etc. are not in v1, although some very early versions are being tested. Expect significant refactoring of those in future versions.\nThe Mamba examples should really use @everywhere using Mamba in stead of using Mamba. This was done to get around a limitation in Literate.jl to test the notebooks when running in distributed mode. \nIn the src directory of all packages is a file scriptentry.jl which defines an object script_dict which is used to control the generation of documentation, notebooks and .jl scripts in chapters and testing of the notebooks. See ?ScriptEntry or enter e.g. script_dict[\"02\"] in the REPL. In the model packages this file is suffixed by an indication of the used mcmc option. e.g. script_dict_d in DynamicHMCModels.\nA utility function, generate() is part of each package to regenerate notebooks and chapter scripts, please see ?generate. Again, e.g. generate_t in TuringModels generates all model notebooks and chapter scripts for Turing models.\nIn a similar fashion, borrowed from DynamicHMCExamples I define several variations on rel_path(). By itself, rel_path() points at the scr directory of StatisticalRethinking.jl and e.g. rel_path_s() points to the src directory of StanModels. The rel_path() version is typically used to read in data files. All others are used to locate directorres to read from or store generated files into."
},

{
    "location": "acknowledgements/#",
    "page": "Acknowledgements",
    "title": "Acknowledgements",
    "category": "page",
    "text": ""
},

{
    "location": "acknowledgements/#Acknowledgements-1",
    "page": "Acknowledgements",
    "title": "Acknowledgements",
    "category": "section",
    "text": ""
},

{
    "location": "acknowledgements/#Acknowledgements-2",
    "page": "Acknowledgements",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Richard Torkar has taken the lead in developing the Turing versions of the models in chapter 8 and subsequent chapters. Tamas Papp has been very helpful during the development of the DynamicHMC versions of the models.The TuringLang team and #turing contributors on Slack have been extremely helpful! The Turing examples by Cameron Pfiffer are followed closely in several example scripts.The  documentation has been generated using Literate.jl and Documenter.jl based on several ideas demonstrated by Tamas Papp in  DynamicHMCExamples.jl."
},

{
    "location": "references/#",
    "page": "References",
    "title": "References",
    "category": "page",
    "text": ""
},

{
    "location": "references/#References-1",
    "page": "References",
    "title": "References",
    "category": "section",
    "text": "There is no shortage of good books on Bayesian statistics. A few of my favorites are:Bolstad: Introduction to Bayesian statistics\nBolstad: Understanding Computational Bayesian Statistics\nGelman, Hill: Data Analysis using regression and multileve,/hierachical models\nMcElreath: Statistical Rethinking\nKruschke: Doing Bayesian Data Analysis\nLee, Wagenmakers: Bayesian Cognitive Modeling\nGelman, Carlin, and others: Bayesian Data Analysisand a great read (and implementation in DynamicHMC.jl):Betancourt: A Conceptual Introduction to Hamiltonian Monte Carlo"
},

{
    "location": "00/clip-01-03/#",
    "page": "clip-01-03",
    "title": "clip-01-03",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/00/clip-01-03.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking"
},

{
    "location": "00/clip-01-03/#snippet-0.1-1",
    "page": "clip-01-03",
    "title": "snippet 0.1",
    "category": "section",
    "text": "println( \"All models are wrong, but some are useful.\" );"
},

{
    "location": "00/clip-01-03/#snippet-0.2-1",
    "page": "clip-01-03",
    "title": "snippet 0.2",
    "category": "section",
    "text": "This is a StepRange, not a vectorx = 1:3Below still preserves the StepRangex = x*10Broadcast log to steprange elements in x, this returms a vector! Notice the log.(x) notation.x = log.(x)We can sum the vector xx = sum(x)Etc.x = exp(x)\nx = x*10\nx = log(x)\nx = sum(x)\nx = exp(x)"
},

{
    "location": "00/clip-01-03/#snippet-0.3-1",
    "page": "clip-01-03",
    "title": "snippet 0.3",
    "category": "section",
    "text": "[log(0.01^200) 200 * log(0.01)]This page was generated using Literate.jl."
},

{
    "location": "00/clip-04-05/#",
    "page": "clip-04-05",
    "title": "clip-04-05",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/00/clip-04-05.jl\"Load Julia packages (libraries) needed"
},

{
    "location": "00/clip-04-05/#snippet-0.5-is-replaced-by-below-using-StatisticalRethinking.-1",
    "page": "clip-04-05",
    "title": "snippet 0.5 is replaced by below using StatisticalRethinking.",
    "category": "section",
    "text": "using StatisticalRethinking, GLM\ngr(size=(500, 500));"
},

{
    "location": "00/clip-04-05/#snippet-0.4-1",
    "page": "clip-04-05",
    "title": "snippet 0.4",
    "category": "section",
    "text": "Below dataset(...) provides access to often used R datasets. If this is not a common R dataset, see the chapter 4 snippets.cars = dataset(\"datasets\", \"cars\");\nfirst(cars, 5)Fit a linear regression of distance on speedm = lm(@formula(Dist ~ Speed), cars)estimated coefficients from the modelcoef(m)Plot residuals against speedscatter( cars[:Speed], residuals(m), xlab=\"Speed\",\nylab=\"Model residual values\", lab=\"Model residuals\")End of clip_04_05.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip-01-02/#",
    "page": "clip-01-02",
    "title": "clip-01-02",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/02/clip-01-02.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking"
},

{
    "location": "02/clip-01-02/#snippet-2.1-1",
    "page": "clip-01-02",
    "title": "snippet 2.1",
    "category": "section",
    "text": "ways  = [0, 3, 8, 9, 0];ways/sum(ways)"
},

{
    "location": "02/clip-01-02/#snippet-2.2-1",
    "page": "clip-01-02",
    "title": "snippet 2.2",
    "category": "section",
    "text": "Create a distribution with n = 9 (e.g. tosses) and p = 0.5.d = Binomial(9, 0.5)Probability density for 6 waters holding n = 9 and p = 0.5.pdf(d, 6)End of clip_01_02.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip-03-05/#",
    "page": "clip-03-05",
    "title": "clip-03-05",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/02/clip-03-05.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking\ngr(size=(600,300));"
},

{
    "location": "02/clip-03-05/#snippet-2.3-1",
    "page": "clip-03-05",
    "title": "snippet 2.3",
    "category": "section",
    "text": "Define a gridN = 20\np_grid = range( 0 , stop=1 , length=N )Define the (uniform) priorprior = ones( 20 );Compute likelihood at each value in gridlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]\nlikelihood[1:5]Compute product of likelihood and priorunstd_posterior = likelihood .* prior;Standardize the posterior, so it sums to 1posterior = unstd_posterior  ./ sum(unstd_posterior);"
},

{
    "location": "02/clip-03-05/#snippet-2.4-1",
    "page": "clip-03-05",
    "title": "snippet 2.4",
    "category": "section",
    "text": "p1 = plot( p_grid , posterior ,\n    xlab=\"probability of water\" , ylab=\"posterior probability\",\n    lab = \"interpolated\", title=\"20 points\" )\np2 = scatter!( p1, p_grid , posterior, lab=\"computed\" )"
},

{
    "location": "02/clip-03-05/#snippet-2.5-1",
    "page": "clip-03-05",
    "title": "snippet 2.5",
    "category": "section",
    "text": "prior1 = [p < 0.5 ? 0 : 1 for p in p_grid]\nprior2 = [exp( -5*abs( p - 0.5 ) ) for p in p_grid]\n\np3 = plot(p_grid, prior1,\n  xlab=\"probability of water\" , ylab=\"posterior probability\",\n  lab = \"semi_uniform\", title=\"Other priors\" )\nscatter!(p3, p_grid, prior1, lab = \"semi_uniform grid point\")\nplot!(p3, p_grid, prior2,  lab = \"double_exponential\" )\nscatter!(p3, p_grid, prior2,  lab = \"double_exponential grid point\" )End of clip_03_05.jlThis page was generated using Literate.jl."
},

{
    "location": "02/clip-06-07/#",
    "page": "clip-06-07",
    "title": "clip-06-07",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/02/clip-06-07.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking, Optim\ngr(size=(600,300));"
},

{
    "location": "02/clip-06-07/#snippet-2.6-(see-snippet-3_2-for-explanations)-1",
    "page": "clip-06-07",
    "title": "snippet 2.6 (see snippet 3_2 for explanations)",
    "category": "section",
    "text": "p_grid = range(0, step=0.001, stop=1)\nprior = ones(length(p_grid))\nlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]\nposterior = likelihood .* prior\nposterior = posterior / sum(posterior)\nsamples = sample(p_grid, Weights(posterior), length(p_grid));\nsamples[1:5]p = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))"
},

{
    "location": "02/clip-06-07/#snippet-2.7-1",
    "page": "clip-06-07",
    "title": "snippet 2.7",
    "category": "section",
    "text": "analytical calculationw = 6; n = 9; x = 0:0.01:1\nscatter( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationscatter!( x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")End of clip_06_07.jlThis page was generated using Literate.jl."
},

{
    "location": "02/m2.1s/#",
    "page": "m2.1s",
    "title": "m2.1s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/02/m2.1s.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"02\")\ncd(ProjDir)Define the Stan language modelbinomialstanmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  int<lower=0> k[N];\n  int<lower=1> n[N];\n}\nparameters {\n  real<lower=0,upper=1> theta;\n  real<lower=0,upper=1> thetaprior;\n}\nmodel {\n  // Prior Distribution for Rate Theta\n  theta ~ beta(1, 1);\n  thetaprior ~ beta(1, 1);\n\n  // Observed Counts\n  k ~ binomial(n, theta);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"binomial\", monitors = [\"theta\"], model=binomialstanmodel,\n  output_format=:mcmcchain);Use 16 observationsN2 = 15\nd = Binomial(9, 0.66)\nn2 = Int.(9 * ones(Int, N2));Show first 5 (generated) observationsk2 = rand(d, N2);\nk2[1:min(5, N2)]Input data for cmdstanbinomialdata = Dict(\"N\" => length(n2), \"n\" => n2, \"k\" => k2);Sample using cmdstanrc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Allocate array of Normal fitsfits = Vector{Normal{Float64}}(undef, 4)\nfor i in 1:4\n  fits[i] = fit_mle(Normal, convert.(Float64, chn.value[:, 1, i]))\n  println(fits[i])\nendPlot the 4 chainsmu_avg = sum([fits[i].μ for i in 1:4]) / 4.0;\nsigma_avg = sum([fits[i].σ for i in 1:4]) / 4.0;\n\nif rc == 0\n  p = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\n  x = 0:0.001:1\n  for i in 1:4\n    vals = convert.(Float64, chn.value[:, 1, i])\n    μ = round(fits[i].μ, digits=2)\n    σ = round(fits[i].σ, digits=2)\n    p[i] = density(vals, lab=\"Chain $i density\",\n       xlim=(0.45, 1.0), title=\"$(N2) data points\")\n    plot!(p[i], x, pdf.(Normal(fits[i].μ, fits[i].σ), x), lab=\"Fitted Normal($μ, $σ)\")\n  end\n  plot(p..., layout=(4, 1))\nendCompute at hpd regionbnds = MCMCChain.hpd(chn[:, 1, :], alpha=0.055);Show hpd regionprintln(\"hpd bounds = $bnds\\n\")quadratic approximationCompute MAP, compare with CmndStan & MLEtmp = convert(Array{Float64,3}, chn.value)\ndraws = reshape(tmp, (size(tmp, 1)*size(tmp, 3)),)Compute MAPusing Optim\n\nx0 = [0.5]\nlower = [0.2]\nupper = [1.0]\n\ninner_optimizer = GradientDescent()\n\nfunction loglik(x)\n  ll = 0.0\n  ll += log.(pdf.(Beta(1, 1), x[1]))\n  ll += sum(log.(pdf.(Binomial(9, x[1]), k2)))\n  -ll\nend\n\nres = optimize(loglik, lower, upper, x0, Fminbox(inner_optimizer))Summarize mean and sd estimatesCmdStan mean and sd:[mean(chn.value), std(chn.value)]MAP estimate and associated sd:[Optim.minimizer(res)[1], std(draws, mean=mean(chn.value))]MLE of mean and sd:[mu_avg, sigma_avg]Turing Chain &  89% hpd region boundariesplot( x, pdf.(Normal( mu_avg , sigma_avg  ) , x ),\nxlim=(0.0, 1.2), lab=\"Normal approximation using MLE\")\nplot!( x, pdf.(Normal( Optim.minimizer(res)[1] , std(draws, mean=mean(chn.value))) , x),\nlab=\"Normal approximation using MAP\")\ndensity!(draws, lab=\"CmdStan chain\")\nvline!([bnds.value[1]], line=:dash, lab=\"hpd lower bound\")\nvline!([bnds.value[2]], line=:dash, lab=\"hpd upper bound\")End of clip_08s.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip-01/#",
    "page": "clip-01",
    "title": "clip-01",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/03/clip-01.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking"
},

{
    "location": "03/clip-01/#snippet-3.1-1",
    "page": "clip-01",
    "title": "snippet 3.1",
    "category": "section",
    "text": "PrPV = 0.95\nPrPM = 0.01\nPrV = 0.001\nPrP = PrPV*PrV + PrPM*(1-PrV)\nPrVP = PrPV*PrV / PrPEnd of clip_01.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip-02-05/#",
    "page": "clip-02-05",
    "title": "clip-02-05",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/03/clip-02-05.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))"
},

{
    "location": "03/clip-02-05/#snippet-3.2-1",
    "page": "clip-02-05",
    "title": "snippet 3.2",
    "category": "section",
    "text": "Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1)all priors = 1.0prior = ones(length(p_grid));Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid];As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* prior;Scale posterior such that they become probabilitiesposterior = posterior / sum(posterior)"
},

{
    "location": "03/clip-02-05/#snippet-3.3-1",
    "page": "clip-02-05",
    "title": "snippet 3.3",
    "category": "section",
    "text": "Sample using the computed posterior values as weightsIn this example we keep the number of samples equal to the length of p_grid, but that is not required.N = 10000\nsamples = sample(p_grid, Weights(posterior), N)\nfitnormal= fit_mle(Normal, samples)"
},

{
    "location": "03/clip-02-05/#snippet-3.4-1",
    "page": "clip-02-05",
    "title": "snippet 3.4",
    "category": "section",
    "text": "Create a vector to hold the plots so we can later combine themp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:N, samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")"
},

{
    "location": "03/clip-02-05/#snippet-3.5-1",
    "page": "clip-02-05",
    "title": "snippet 3.5",
    "category": "section",
    "text": "Analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")Add quadratic approximationplot!( p[2], x, pdf.(Normal( fitnormal.μ, fitnormal.σ ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))End of clip_02_05.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip-05s/#",
    "page": "clip-05s",
    "title": "clip-05s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/03/clip-05s.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,800));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"03\")\ncd(ProjDir)Define the Stan language modelbinomialstanmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  int<lower=0> k[N];\n  int<lower=1> n[N];\n}\nparameters {\n  real<lower=0,upper=1> theta;\n  real<lower=0,upper=1> thetaprior;\n}\nmodel {\n  // Prior Distribution for Rate Theta\n  theta ~ beta(1, 1);\n  thetaprior ~ beta(1, 1);\n\n  // Observed Counts\n  k ~ binomial(n, theta);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"binomial\", monitors = [\"theta\"], model=binomialstanmodel,\n  output_format=:mcmcchain);Use 16 observationsN2 = 4^2\nd = Binomial(9, 0.66)\nn2 = Int.(9 * ones(Int, N2))\nk2 = rand(d, N2);Input data for cmdstanbinomialdata = Dict(\"N\" => length(n2), \"n\" => n2, \"k\" => k2);Sample using cmdstanrc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Plot the 4 chainsif rc == 0\n  plot(chn)\nendEnd of clip_05s.jlThis page was generated using Literate.jl."
},

{
    "location": "03/clip-06-16s/#",
    "page": "clip-06-16s",
    "title": "clip-06-16s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/03/clip-06-16s.jl\"Load Julia packages (libraries) neededusing StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"03\")\ncd(ProjDir)Define the Stan language modelbinomialstanmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  int<lower=0> k[N];\n  int<lower=1> n[N];\n}\nparameters {\n  real<lower=0,upper=1> theta;\n  real<lower=0,upper=1> thetaprior;\n}\nmodel {\n  // Prior Distribution for Rate Theta\n  theta ~ beta(1, 1);\n  thetaprior ~ beta(1, 1);\n\n  // Observed Counts\n  k ~ binomial(n, theta);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"binomial\", monitors = [\"theta\"], model=binomialstanmodel,\n  output_format=:mcmcchain);Use 16 observationsN2 = 4\nn2 = Int.(9 * ones(Int, N2))\nk2 = [6, 5, 7, 6]Input data for cmdstanbinomialdata = Dict(\"N\" => length(n2), \"n\" => n2, \"k\" => k2);Sample using cmdstanrc, chn, cnames = stan(stanmodel, binomialdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Look at area of hpdMCMCChain.hpd(chn)Plot the 4 chainsif rc == 0\n  mixeddensity(chn, xlab=\"height [cm]\", ylab=\"density\")\n  bnds = MCMCChain.hpd(convert(Vector{Float64}, chn.value[:,1,1]))\n  vline!([bnds[1]], line=:dash)\n  vline!([bnds[2]], line=:dash)\nendEnd of clip_06_16s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/m4.1s/#",
    "page": "m4.1s",
    "title": "m4.1s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/m4.1s.jl\"using StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));\n\nProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)\n\nhowell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);\n\ndf2 = filter(row -> row[:age] >= 18, df)\nfirst(df2, 5)\n\nheightsmodel = \"\n// Inferring a Rate\ndata {\n  int N;\n  real<lower=0> h[N];\n}\nparameters {\n  real<lower=0> sigma;\n  real<lower=0,upper=250> mu;\n}\nmodel {\n  // Priors for mu and sigma\n  mu ~ normal(178, 20);\n  sigma ~ uniform( 0 , 50 );\n\n  // Observed heights\n  h ~ normal(mu, sigma);\n}\n\";\n\nstanmodel = Stanmodel(name=\"heights\", monitors = [\"mu\", \"sigma\"],model=heightsmodel,\n  output_format=:mcmcchain);\n\nheightsdata = Dict(\"N\" => length(df2[:height]), \"h\" => df2[:height]);\n\nrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  CmdStanDir=CMDSTAN_HOME);\n\ndescribe(chn)\n\nserialize(\"m4.1s.jls\", chn)\nchn2 = deserialize(\"m4.1s.jls\")\n\ndescribe(chn2)end of m4.1s#- This page was generated using Literate.jl."
},

{
    "location": "04/clip-01-06/#",
    "page": "clip-01-06",
    "title": "clip-01-06",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-01-06.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300));"
},

{
    "location": "04/clip-01-06/#snippet-4.1-1",
    "page": "clip-01-06",
    "title": "snippet 4.1",
    "category": "section",
    "text": "No attempt has been made to condense this too fewer lines of codenoofsteps = 20;\nnoofwalks = 15;\npos = Array{Float64, 2}(rand(Uniform(-1, 1), noofsteps, noofwalks));\npos[1, :] = zeros(noofwalks);\ncsum = cumsum(pos, dims=1);f = Plots.font(\"DejaVu Sans\", 6)\nmx = minimum(csum) * 0.9Plot and annotate the random walksp1 = plot(csum, leg=false, title=\"Random walks ($(noofwalks))\")\nplot!(p1, csum[:, Int(floor(noofwalks/2))], leg=false, title=\"Random walks ($(noofwalks))\", color=:black)\nplot!(p1, [5], seriestype=\"vline\")\nannotate!(5, mx, text(\"step 4\", f, :left))\nplot!(p1, [9], seriestype=\"vline\")\nannotate!(9, mx, text(\"step 8\", f, :left))\nplot!(p1, [17], seriestype=\"vline\")\nannotate!(17, mx, text(\"step 16\", f, :left))Generate 3 plots of densities at 3 different step numbers (4, 8 and 16)p2 = Vector{Plots.Plot{Plots.GRBackend}}(undef, 3);\nplt = 1\nfor step in [4, 8, 16]\n  indx = step + 1 # We aadded the first line of zeros\n  global plt\n  fit = fit_mle(Normal, csum[indx, :])\n  x = (fit.μ-4*fit.σ):0.01:(fit.μ+4*fit.σ)\n  p2[plt] = density(csum[indx, :], legend=false, title=\"$(step) steps\")\n  plot!( p2[plt], x, pdf.(Normal( fit.μ , fit.σ ) , x ), fill=(0, .5,:orange))\n  plt += 1\nend\np3 = plot(p2..., layout=(1, 3))\nplot(p1, p3, layout=(2,1))"
},

{
    "location": "04/clip-01-06/#snippet-4.2-1",
    "page": "clip-01-06",
    "title": "snippet 4.2",
    "category": "section",
    "text": "prod(1 .+ rand(Uniform(0, 0.1), 10))"
},

{
    "location": "04/clip-01-06/#snippet-4.3-1",
    "page": "clip-01-06",
    "title": "snippet 4.3",
    "category": "section",
    "text": "growth = [prod(1 .+ rand(Uniform(0, 0.1), 10)) for i in 1:10000];\nfit = fit_mle(Normal, growth)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(growth, lab=\"\'sample\' distribution\")"
},

{
    "location": "04/clip-01-06/#snippet-4.4-1",
    "page": "clip-01-06",
    "title": "snippet 4.4",
    "category": "section",
    "text": "big = [prod(1 .+ rand(Uniform(0, 0.5), 12)) for i in 1:10000];\nsmall = [prod(1 .+ rand(Uniform(0, 0.01), 12)) for i in 1:10000];\nfitb = fit_mle(Normal, big)\nfits = fit_mle(Normal, small)\np1 = plot(Normal(fitb.μ , fitb.σ ), lab=\"Big normal distribution\", fill=(0, .5,:orange))\np2 = plot(Normal(fits.μ , fits.σ ), lab=\"Small normal distribution\", fill=(0, .5,:orange))\ndensity!(p1, big, lab=\"\'big\' distribution\")\ndensity!(p2, small, lab=\"\'small\' distribution\")\nplot(p1, p2, layout=(1, 2))"
},

{
    "location": "04/clip-01-06/#snippet-4.5-1",
    "page": "clip-01-06",
    "title": "snippet 4.5",
    "category": "section",
    "text": "log_big = [log(prod(1 .+ rand(Uniform(0, 0.5), 12))) for i in 1:10000];\nfit = fit_mle(Normal, log_big)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(log_big, lab=\"\'sample\' distribution\")"
},

{
    "location": "04/clip-01-06/#snippet-4.6-1",
    "page": "clip-01-06",
    "title": "snippet 4.6",
    "category": "section",
    "text": "Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1);all priors = 1.0prior = ones(length(p_grid));Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid];As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* prior;Scale posterior such that they become probabilitiesposterior = posterior / sum(posterior);Sample using the computed posterior values as weights In this example we keep the number of samples equal to the length of p_grid, but that is not required.samples = sample(p_grid, Weights(posterior), length(p_grid));\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\", fill=(0, .5,:orange))\nplot(p..., layout=(1, 2))End of clip-01-06.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-07-13s/#",
    "page": "clip-07-13s",
    "title": "clip-07-13s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-07-13s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-07-13s/#snippet-4.7-1",
    "page": "clip-07-13s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);"
},

{
    "location": "04/clip-07-13s/#snippet-4.8-1",
    "page": "clip-07-13s",
    "title": "snippet 4.8",
    "category": "section",
    "text": "Show first 5 rows of DataFrame dffirst(df, 5)"
},

{
    "location": "04/clip-07-13s/#snippet-4.9-1",
    "page": "clip-07-13s",
    "title": "snippet 4.9",
    "category": "section",
    "text": "Show first 5 heigth values in dfdf[:height][1:5]"
},

{
    "location": "04/clip-07-13s/#snippet-4.10-1",
    "page": "clip-07-13s",
    "title": "snippet 4.10",
    "category": "section",
    "text": "Use only adultsdf2 = filter(row -> row[:age] >= 18, df);Our model:m4_1 = \"\n  height ~ Normal(μ, σ) # likelihood\n  μ ~ Normal(178,20) # prior\n  σ ~ Uniform(0, 50) # prior\n\";Plot the densities.p = Vector{Plots.Plot{Plots.GRBackend}}(undef, 3)\np[1] = density(df2[:height], xlim=(100,250), lab=\"All heights\", xlab=\"height [cm]\", ylab=\"density\")"
},

{
    "location": "04/clip-07-13s/#snippet-4.10-2",
    "page": "clip-07-13s",
    "title": "snippet 4.10",
    "category": "section",
    "text": "Show  μ priord1 = Normal(178, 20)\np[2] = plot(100:250, [pdf(d1, μ) for μ in 100:250], lab=\"Prior on mu\")"
},

{
    "location": "04/clip-07-13s/#snippet-4.11-1",
    "page": "clip-07-13s",
    "title": "snippet 4.11",
    "category": "section",
    "text": "Show σ  priord2 = Uniform(0, 50)\np[3] = plot(0:0.1:50, [pdf(d2, σ) for σ in 0:0.1:50], lab=\"Prior on sigma\")\n\nplot(p..., layout=(3,1))"
},

{
    "location": "04/clip-07-13s/#snippet-4.13-1",
    "page": "clip-07-13s",
    "title": "snippet 4.13",
    "category": "section",
    "text": "sample_mu = rand(d1, 10000)\nsample_sigma = rand(d2, 10000)\nprior_height = [rand(Normal(sample_mu[i], sample_sigma[i]), 1)[1] for i in 1:10000]\ndf2 = DataFrame(mu = sample_mu, sigma=sample_sigma, prior_height=prior_height);\nfirst(df2, 5)Show density of prior_heightdensity(prior_height, lab=\"prior_height\")Use data from m4.1s to show CmdStan resultsCheck if the m4.1s.jls file is present. If not, run the model.!isfile(joinpath(ProjDir, \"m4.1s.jls\")) && include(joinpath(ProjDir, \"m4.1s.jl\"))\n\nchn = deserialize(joinpath(ProjDir, \"m4.1s.jls\"))Describe the drawsdescribe(chn)Plot the density of posterior drawsdensity(chn)End of clip-07-13s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-14-20/#",
    "page": "clip-14-20",
    "title": "clip-14-20",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-14-20.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-14-20/#snippet-4.7-1",
    "page": "clip-14-20",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);"
},

{
    "location": "04/clip-14-20/#snippet-4.8-1",
    "page": "clip-14-20",
    "title": "snippet 4.8",
    "category": "section",
    "text": "Use only adultsdf2 = filter(row -> row[:age] >= 18, df);Show first 5 rows of DataFrame dffirst(df2, 5)"
},

{
    "location": "04/clip-14-20/#Snippet-4.14-1",
    "page": "clip-14-20",
    "title": "Snippet 4.14",
    "category": "section",
    "text": "Generate approximate probabilitiesstruct Post\n  mu::Float64\n  sigma::Float64\n  ll:: Float64\n  prod::Float64\n  prob::Float64\nend\n\nmu_list = repeat(range(140, 160, length=200), 200);\nsigma_list = repeat(range(4, 9, length=200), inner=200);\n\nll = zeros(40000);\nfor i in 1:40000\n    d1 = Normal(mu_list[i], sigma_list[i])\n    ll[i] = sum(log.(pdf.(d1, df2[:height])))\nend\n\nd2 = Normal(178.0, 20.0)\nd3 = Uniform(0, 50)\nprod = ll + log.(pdf.(d2, mu_list)) + log.(pdf.(d3, sigma_list))\nprob = exp.(prod .- maximum(prod))\npost = DataFrame(mu=mu_list, sigma=sigma_list, ll=ll, prod=prod, prob=prob)\nfirst(post, 10)"
},

{
    "location": "04/clip-14-20/#Snippet-4.15-1",
    "page": "clip-14-20",
    "title": "Snippet 4.15",
    "category": "section",
    "text": "Sample postsamples = post[sample(1:size(post, 1), Weights(post[:prob]), 10000, replace=true), :]"
},

{
    "location": "04/clip-14-20/#Snippet-4.19-1",
    "page": "clip-14-20",
    "title": "Snippet 4.19",
    "category": "section",
    "text": "Density of mudensity(samples[:mu])Density of sigmadensity(samples[:sigma])"
},

{
    "location": "04/clip-14-20/#Snippet-4.20-1",
    "page": "clip-14-20",
    "title": "Snippet 4.20",
    "category": "section",
    "text": "Hdp muMCMCChain.hpd(samples[:mu])Hdp sigmaMCMCChain.hpd(samples[:sigma])End of clip-14-20.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-21-23/#",
    "page": "clip-21-23",
    "title": "clip-21-23",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-21-23.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);\ndf2 = filter(row -> row[:age] >= 18, df);\nfirst(df2, 5)"
},

{
    "location": "04/clip-21-23/#Snippet-4.21-1",
    "page": "clip-21-23",
    "title": "Snippet 4.21",
    "category": "section",
    "text": "Sample 20 random heightsn = size(df2, 1)\nselected_ind = sample(1:n, 20, replace=false);\ndf3 = df2[selected_ind, :];"
},

{
    "location": "04/clip-21-23/#Snippet-4.22-1",
    "page": "clip-21-23",
    "title": "Snippet 4.22",
    "category": "section",
    "text": "Generate approximate probabilitiesstruct Post\n  mu::Float64\n  sigma::Float64\n  ll:: Float64\n  prod::Float64\n  prob::Float64\nend\n\nmu_list = repeat(range(140, 170, length=200), 200);\nsigma_list = repeat(range(4, 20, length=200), inner=200);\n\nll = zeros(40000);\nfor i in 1:40000\n    d1 = Normal(mu_list[i], sigma_list[i])\n    ll[i] = sum(log.(pdf.(d1, df3[:height])))\nend\n\nd2 = Normal(178.0, 20.0)\nd3 = Uniform(0, 50)\nprod = ll + log.(pdf.(d2, mu_list)) + log.(pdf.(d3, sigma_list))\nprob = exp.(prod .- maximum(prod))\npost = DataFrame(mu=mu_list, sigma=sigma_list, ll=ll, prod=prod, prob=prob)\nfirst(post, 10)Sample postsamples = post[sample(1:size(post, 1), Weights(post[:prob]), 10000, replace=true), :]"
},

{
    "location": "04/clip-21-23/#Snippet-4.23-1",
    "page": "clip-21-23",
    "title": "Snippet 4.23",
    "category": "section",
    "text": "Density of sigmadensity(samples[:sigma])End of clip-21-23.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-24-29s/#",
    "page": "clip-24-29s",
    "title": "clip-24-29s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-24-29s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, Optim\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-24-29s/#snippet-4.24-1",
    "page": "clip-24-29s",
    "title": "snippet 4.24",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);\ndf2 = filter(row -> row[:age] >= 18, df);\nfirst(df2, 5)"
},

{
    "location": "04/clip-24-29s/#snippet-4.25-1",
    "page": "clip-24-29s",
    "title": "snippet 4.25",
    "category": "section",
    "text": "Our first model:m4_1 = \"\n  height ~ Normal(μ, σ) # likelihood\n  μ ~ Normal(178,20) # prior\n  σ ~ Uniform(0, 50) # prior\n\""
},

{
    "location": "04/clip-24-29s/#snippet-4.26-1",
    "page": "clip-24-29s",
    "title": "snippet 4.26",
    "category": "section",
    "text": "Compute MAPobs = df2[:height]\n\nfunction loglik(x)\n  ll = 0.0\n  ll += log(pdf(Normal(178, 20), x[1]))\n  ll += log(pdf(Uniform(0, 50), x[2]))\n  ll += sum(log.(pdf.(Normal(x[1], x[2]), obs)))\n  -ll\nend"
},

{
    "location": "04/clip-24-29s/#snippet-4.28-1",
    "page": "clip-24-29s",
    "title": "snippet 4.28",
    "category": "section",
    "text": "x0 = [ 178, 10.0]\nlower = [0.0, 0.0]\nupper = [250.0, 50.0]"
},

{
    "location": "04/clip-24-29s/#snippet-4.27-1",
    "page": "clip-24-29s",
    "title": "snippet 4.27",
    "category": "section",
    "text": "inner_optimizer = GradientDescent()\n\noptimize(loglik, lower, upper, x0, Fminbox(inner_optimizer))Our second model:m4_2 = \"\n  height ~ Normal(μ, σ) # likelihood\n  μ ~ Normal(178, 0.1) # prior\n  σ ~ Uniform(0, 50) # prior\n\""
},

{
    "location": "04/clip-24-29s/#snippet-4.29-1",
    "page": "clip-24-29s",
    "title": "snippet 4.29",
    "category": "section",
    "text": "Compute MAPobs = df2[:height]\n\nfunction loglik2(x)\n  ll = 0.0\n  ll += log(pdf(Normal(178, 0.1), x[1]))\n  ll += log(pdf(Uniform(0, 50), x[2]))\n  ll += sum(log.(pdf.(Normal(x[1], x[2]), obs)))\n  -ll\nend\n\noptimize(loglik2, lower, upper, x0, Fminbox(inner_optimizer))End of clip-24-29s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-30s/#",
    "page": "clip-30s",
    "title": "clip-30s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-30s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking, CmdStan, StanMCMCChain, LinearAlgebra\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-30s/#snippet-4.7-1",
    "page": "clip-30s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);\nfirst(df2, 5)Use data from m4.1sCheck if the m4.1s.jls file is present. If not, run the model.!isfile(joinpath(ProjDir, \"m4.1s.jls\")) && include(joinpath(ProjDir, \"m4.1s.jl\"))\n\nchn = deserialize(joinpath(ProjDir, \"m4.1s.jls\"))Describe the drawsdescribe(chn)Plot the density of posterior drawsdensity(chn, lab=\"All heights\", xlab=\"height [cm]\", ylab=\"density\")Compute cormu_sigma = hcat(chn.value[:, 2, 1], chn.value[:,1, 1])\nLinearAlgebra.diag(cov(mu_sigma))Compute covcor(mu_sigma)End of clip_07.0s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-38s/#",
    "page": "clip-38s",
    "title": "clip-38s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-38s.jl\""
},

{
    "location": "04/clip-38s/#Linear-Regression-1",
    "page": "clip-38s",
    "title": "Linear Regression",
    "category": "section",
    "text": ""
},

{
    "location": "04/clip-38s/#Added-snippet-used-as-a-reference-for-all-models-1",
    "page": "clip-38s",
    "title": "Added snippet used as a reference for all models",
    "category": "section",
    "text": "This model is based on the TuringTutorial example LinearRegression by Cameron Pfiffer.Turing is powerful when applied to complex hierarchical models, but it can also be put to task at common statistical procedures, like linear regression. This tutorial covers how to implement a linear regression model in Turing.We begin by importing all the necessary libraries.using StatisticalRethinking, CmdStan, StanMCMCChain, GLM\ngr(size=(500,500))\n\nProjDir = rel_path(\"..\", \"scripts\", \"00\")\ncd(ProjDir)Import the dataset.howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdata = filter(row -> row[:age] >= 18, df)Show the first six rows of the dataset.first(data, 6)The next step is to get our data ready for testing. We\'ll split the mtcars dataset into two subsets, one for training our model and one for evaluating our model. Then, we separate the labels we want to learn (MPG, in this case) and standardize the datasets by subtracting each column\'s means and dividing by the standard deviation of that column.The resulting data is not very familiar looking, but this standardization process helps the sampler converge far easier. We also create a function called unstandardize, which returns the standardized values to their original form. We will use this function later on when we make predictions.Split our dataset 70%/30% into training/test sets.n = size(data, 1)\ntest_ind = sample(1:n, Int(floor(0.3*n)), replace=false);\ntrain_ind = [(i) for i=1:n if !(i in test_ind)];\ntest = data[test_ind, :];\ntrain = data[train_ind, :];Save dataframe versions of our dataset.train_cut = DataFrame(train)\ntest_cut = DataFrame(test)Create our labels. These are the values we are trying to predict.train_label = train[:, :height]\ntest_label = test[:, :height]Get the list of columns to keep.remove_names = filter(x->!in(x, [:height, :age, :male]), names(data))Filter the test and train sets.train = Matrix(train[:, remove_names]);\ntest = Matrix(test[:, remove_names]);A handy helper function to rescale our dataset.function standardize(x)\n    return (x .- mean(x, dims=1)) ./ std(x, dims=1), x\nendAnother helper function to unstandardize our datasets.function unstandardize(x, orig)\n    return x .* std(orig, dims=1) .+ mean(orig, dims=1)\nendStandardize our dataset.(train, train_orig) = standardize(train)\n(test, test_orig) = standardize(test)\n(train_label, train_l_orig) = standardize(train_label)\n(test_label, test_l_orig) = standardize(test_label);Design matrixdmat = [ones(size(train, 1)) train]Bayesian linear regression.lrmodel = \"\ndata {\n  int N; //the number of observations\n  int K; //the number of columns in the model matrix\n  real y[N]; //the response\n  matrix[N,K] X; //the model matrix\n}\nparameters {\n  vector[K] beta; //the regression parameters\n  real sigma; //the standard deviation\n}\ntransformed parameters {\n  vector[N] linpred;\n  linpred <- X*beta;\n}\nmodel {\n  beta[1] ~ cauchy(0,10); //prior for the intercept following Gelman 2008\n\n  for(i in 2:K)\n   beta[i] ~ cauchy(0,2.5);//prior for the slopes following Gelman 2008\n\n  y ~ normal(linpred,sigma);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"linear_regression\",\n  monitors = [\"beta.1\", \"beta.2\", \"sigma\"],\n  model=lrmodel);Input data for cmdstanlrdata = Dict(\"N\" => size(train, 1), \"K\" => size(dmat, 2), \"y\" => train_label, \"X\" => dmat);Sample using cmdstanrc, sim, cnames = stan(stanmodel, lrdata, ProjDir, diagnostics=false,\n  summary=false, CmdStanDir=CMDSTAN_HOME);Convert to a MCMCChain Chain objectcnames = [\"intercept\", \"beta[1]\", \"sigma\"]\nchain = convert_a3d(sim, cnames, Val(:mcmcchain))Describe the chains.describe(chain)Perform multivariate OLS.ols = lm(@formula(height ~ weight), train_cut)Store our predictions in the original dataframe.train_cut.OLSPrediction = predict(ols);\ntest_cut.OLSPrediction = predict(ols, test_cut);Make a prediction given an input vector.function prediction(chain, x)\n    α = chain[:, 1, :].value\n    β = [chain[:, i, :].value for i in 2:2]\n    return  mean(α) .+ x * mean.(β)\nendCalculate the predictions for the training and testing sets.train_cut.BayesPredictions = unstandardize(prediction(chain, train), train_l_orig);\ntest_cut.BayesPredictions = unstandardize(prediction(chain, test), test_l_orig);Show the first side rows of the modified dataframe.remove_names = filter(x->!in(x, [:age, :male]), names(test_cut));\ntest_cut = test_cut[remove_names];\nfirst(test_cut, 6)\n\nbayes_loss1 = sum((train_cut.BayesPredictions - train_cut.height).^2);\nols_loss1 = sum((train_cut.OLSPrediction - train_cut.height).^2);\n\nbayes_loss2 = sum((test_cut.BayesPredictions - test_cut.height).^2);\nols_loss2 = sum((test_cut.OLSPrediction - test_cut.height).^2);\n\nprintln(\"\\nTraining set:\")\nprintln(\"  Bayes loss: $bayes_loss1\")\nprintln(\"  OLS loss: $ols_loss1\")\n\nprintln(\"Test set:\")\nprintln(\"  Bayes loss: $bayes_loss2\")\nprintln(\"  OLS loss: $ols_loss2\")Plot the chains.plot(chain)This page was generated using Literate.jl."
},

{
    "location": "04/clip-43s/#",
    "page": "clip-43s",
    "title": "clip-43s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-43s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-43s/#snippet-4.7-1",
    "page": "clip-43s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);\nmean_weight = mean(df2[:weight]);\ndf2[:weight_c] = df2[:weight] .- mean_weight;\nfirst(df2, 5)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight_c]);Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  summary=false, CmdStanDir=CMDSTAN_HOME);Describe the drawsdescribe(chn)Plot the density of posterior drawsplot(chn)Plot regression line using means and observationsscatter(df2[:weight_c], df2[:height], lab=\"Observations\",\n  ylab=\"height [cm]\", xlab=\"weight[kg]\")\nxi = -16.0:0.1:18.0\nrws, vars, chns = size(chn[:, 1, :])\nalpha_vals = convert(Vector{Float64}, reshape(chn.value[:, 1, :], (rws*chns)));\nbeta_vals = convert(Vector{Float64}, reshape(chn.value[:, 2, :], (rws*chns)));\nyi = mean(alpha_vals) .+ mean(beta_vals)*xi;\nplot!(xi, yi, lab=\"Regression line\")End of clip-43s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-45-47s/#",
    "page": "clip-45-47s",
    "title": "clip-45-47s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-45-47s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-45-47s/#snippet-4.7-1",
    "page": "clip-45-47s",
    "title": "snippet 4.7",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);\nfirst(df2, 5)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\ngenerated quantities {\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstanheightsdata = Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height],\n  \"weight\" => df2[:weight]);Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  summary=false, CmdStanDir=CMDSTAN_HOME)Show first 5 individual draws of correlated parameter values in chain 1chn.value[1:5,:,1]Plot estimates using the N = [10, 50, 150, 352] observationsp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\nnvals = [10, 50, 150, 352];for i in 1:length(nvals)\n  N = nvals[i]\n  heightsdataN = [\n    Dict(\"N\" => N, \"height\" => df2[1:N, :height], \"weight\" => df2[1:N, :weight])\n  ]\n  rc, chnN, cnames = stan(stanmodel, heightsdataN, ProjDir, diagnostics=false,\n    summary=false, CmdStanDir=CMDSTAN_HOME)\n\n  xi = 30.0:0.1:65.0\n  rws, vars, chns = size(chnN[:, 1, :])\n  alpha_vals = convert(Vector{Float64}, reshape(chnN.value[:, 1, :], (rws*chns)))\n  beta_vals = convert(Vector{Float64}, reshape(chnN.value[:, 2, :], (rws*chns)))\n\n  p[i] = scatter(df2[1:N, :weight], df2[1:N, :height], leg=false,\n    color=:darkblue, xlab=\"weight\")\n  for j in 1:N\n    yi = alpha_vals[j] .+ beta_vals[j]*xi\n    plot!(p[i], xi, yi, title=\"N = $N\", color=:lightgrey)\n  end\n  scatter!(p[i], df2[1:N, :weight], df2[1:N, :height], leg=false,\n    color=:darkblue, xlab=\"weight\")\nend\nplot(p..., layout=(2, 2))End of clip_45_47s.jlThis page was generated using Literate.jl."
},

{
    "location": "04/clip-48-54s/#",
    "page": "clip-48-54s",
    "title": "clip-48-54s",
    "category": "page",
    "text": "EditURL = \"https://github.com/StatisticalRethinkingJulia/StatisticalRethinking.jl/blob/master/scripts/04/clip-48-54s.jl\"Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\nusing CmdStan, StanMCMCChain\ngr(size=(500,500));CmdStan uses a tmp directory to store the output of cmdstanProjDir = rel_path(\"..\", \"scripts\", \"04\")\ncd(ProjDir)"
},

{
    "location": "04/clip-48-54s/#Preliminary-snippets-1",
    "page": "clip-48-54s",
    "title": "Preliminary snippets",
    "category": "section",
    "text": "howell1 = CSV.read(rel_path(\"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1);Use only adultsdf2 = filter(row -> row[:age] >= 18, df);Center weight and store as weight_cmean_weight = mean(df2[:weight])\ndf2 = hcat(df2, df2[:weight] .- mean_weight)\nrename!(df2, :x1 => :weight_c); # Rename our col :x1 => :weight_c\nfirst(df2, 5)Define the Stan language modelweightsmodel = \"\ndata {\n int < lower = 1 > N; // Sample size\n vector[N] height; // Predictor\n vector[N] weight; // Outcome\n}\n\nparameters {\n real alpha; // Intercept\n real beta; // Slope (regression coefficients)\n real < lower = 0 > sigma; // Error SD\n}\n\nmodel {\n height ~ normal(alpha + weight * beta , sigma);\n}\n\";Define the Stanmodel and set the output format to :mcmcchain.stanmodel = Stanmodel(name=\"weights\", monitors = [\"alpha\", \"beta\", \"sigma\"],model=weightsmodel,\n  output_format=:mcmcchain);Input data for cmdstan.heightsdata = Dict(\"N\" => length(df2[:height]), \"height\" => df2[:height], \"weight\" => df2[:weight_c]);Sample using cmdstanrc, chn, cnames = stan(stanmodel, heightsdata, ProjDir, diagnostics=false,\n  summary=false, CmdStanDir=CMDSTAN_HOME);"
},

{
    "location": "04/clip-48-54s/#Snippet-4.47-1",
    "page": "clip-48-54s",
    "title": "Snippet 4.47",
    "category": "section",
    "text": "Show first 5 draws of correlated parameter values in chain 1chn.value[1:5,:,1]"
},

{
    "location": "04/clip-48-54s/#Snippets-4.48-and-4.49-1",
    "page": "clip-48-54s",
    "title": "Snippets 4.48 & 4.49",
    "category": "section",
    "text": "Plot estimates using the N = [10, 50, 150, 352] observationsnvals = [10, 50, 150, 352];Create the 4 nvals plotsp = Vector{Plots.Plot{Plots.GRBackend}}(undef, 4)\nfor i in 1:length(nvals)\n  N = nvals[i]\n  heightsdataN = [\n    Dict(\"N\" => N, \"height\" => df2[1:N, :height], \"weight\" => df2[1:N, :weight_c])\n  ]\n  rc, chnN, cnames = stan(stanmodel, heightsdataN, ProjDir, diagnostics=false,\n    summary=false, CmdStanDir=CMDSTAN_HOME)\n\n  rws, vars, chns = size(chnN[:, 1, :])\n  xi = -15.0:0.1:15.0\n  alpha_vals = convert(Vector{Float64}, reshape(chnN.value[:, 1, :], (rws*chns)))\n  beta_vals = convert(Vector{Float64}, reshape(chnN.value[:, 2, :], (rws*chns)))\n\n  p[i] = scatter(df2[1:N, :weight_c], df2[1:N, :height], leg=false, xlab=\"weight_c\")\n  for j in 1:N\n    yi = alpha_vals[j] .+ beta_vals[j]*xi\n    plot!(p[i], xi, yi, title=\"N = $N\")\n  end\nend\nplot(p..., layout=(2, 2))"
},

{
    "location": "04/clip-48-54s/#Snippet-4.50-1",
    "page": "clip-48-54s",
    "title": "Snippet 4.50",
    "category": "section",
    "text": "Get dimensions of chainsrws, vars, chns = size(chn[:, 1, :])\nmu_at_50 = link(50:10:50, chn, [1, 2], mean_weight);\ndensity(mu_at_50)"
},

{
    "location": "04/clip-48-54s/#Snippet-4.54-1",
    "page": "clip-48-54s",
    "title": "Snippet 4.54",
    "category": "section",
    "text": "Show posterior density for 6 mu_bar valuesmu = link(25:10:75, chn, [1, 2], mean_weight);\n\nq = Vector{Plots.Plot{Plots.GRBackend}}(undef, size(mu, 1))\nfor i in 1:size(mu, 1)\n  q[i] = density(mu[i], ylim=(0.0, 1.5),\n    leg=false, title=\"mu_bar = $(round(mean(mu[i]), digits=1))\")\nend\nplot(q..., layout=(2, 3), ticks=(3))End of clip_48_54s.jlThis page was generated using Literate.jl."
},

{
    "location": "#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": "CurrentModule = StatisticalRethinking"
},

{
    "location": "#StatisticalRethinking.link-NTuple{4,Any}",
    "page": "Functions",
    "title": "StatisticalRethinking.link",
    "category": "method",
    "text": "link\n\nCompute the link function\n\nMethod\n\nlink(xrange, chain, vars, xbar) \n\nRequired arguments\n\n* `xrange::Turing model`  : Range over which link values are computed\n* `chain::Float64`             : Chain samples used\n* `vars::Float64`               : Variables in chain used\n* `xbar::Float64`               : Mean value of observed predictor\n\nReturn values\n\n* `result`                       : Vector of link values\n\n\n\n\n\n"
},

{
    "location": "#link-1",
    "page": "Functions",
    "title": "link",
    "category": "section",
    "text": "link(xrange, chain, vars, xbar) "
},

{
    "location": "#StatisticalRethinking.rel_path-Tuple",
    "page": "Functions",
    "title": "StatisticalRethinking.rel_path",
    "category": "method",
    "text": "rel_path\n\nRelative path using the StatisticalRethinking src/ directory. Copied from DynamicHMCExamples.jl\n\nExample to get access to the data subdirectory\n\nrel_path(\"..\", \"data\")\n\n\n\n\n\n"
},

{
    "location": "#rel_path-1",
    "page": "Functions",
    "title": "rel_path",
    "category": "section",
    "text": "rel_path(parts...)"
},

{
    "location": "#StatisticalRethinking.generate-Tuple{}",
    "page": "Functions",
    "title": "StatisticalRethinking.generate",
    "category": "method",
    "text": "generate\n\nUtility function to generate all notebooks and chapters from scripts in the scripts directory.\n\nMethod\n\ngenerate(sd = script_dict)\n\nRequired arguments\n\nNone, all notebooks/.. and chapters/.. files are regenerated.\n\n\n\n\n\n"
},

{
    "location": "#StatisticalRethinking.generate-Tuple{AbstractString}",
    "page": "Functions",
    "title": "StatisticalRethinking.generate",
    "category": "method",
    "text": "generate\n\nGenerate notebooks and scripts in a single chapter.\n\nMethod\n\ngenerate(chapter::AbstractString)\n\nRequired arguments\n\nGenerate notebooks and scripts in a single chapter, e.g. generate(\"04\")\n\n\n\n\n\n"
},

{
    "location": "#StatisticalRethinking.generate-Tuple{AbstractString,AbstractString}",
    "page": "Functions",
    "title": "StatisticalRethinking.generate",
    "category": "method",
    "text": "generate\n\nGenerate a single notebook and script\n\nMethod\n\ngenerate(chapter::AbstractString, file::AbstractString)\n\nRequired arguments\n\nGenerate notebook and script file in chapter, e.g. generate(\"04\", \"m4.1d.jl\") or  generate(\"04/m4.1d.jl\")\n\n\n\n\n\n"
},

{
    "location": "#generate-1",
    "page": "Functions",
    "title": "generate",
    "category": "section",
    "text": "generate(; sd=script_dict)\ngenerate(chapter::AbstractString; sd=script_dict)\ngenerate(chapter::AbstractString, scriptfile::AbstractString; sd=script_dict)"
},

{
    "location": "#StatisticalRethinking.ScriptEntry",
    "page": "Functions",
    "title": "StatisticalRethinking.ScriptEntry",
    "category": "type",
    "text": "ScriptEntry\n\nDefine processing requirements for chapter scripts\n\nConstructor\n\nscriptentry(scriptfile;; nb=true, exe=true, doc=true)\n\nRequired arguments\n\n* `scriptfile::AbstractString`        : Script file\n\nOptional arguments\n\n* `nb::Bool`      : Generate a notebook version in notebooks directory\n* `exe::Bool`     : Execute the notebook (for testing or documentation purposes)\n* `doc::Bool`     : Insert documention into Github pages\n\nIf exe = false and doc = true it is assumed the appropriate .md files have been manually created and stored in docs/src/nn/... (Travis will terminate if runs take too long).\n\n\n\n\n\n"
},

{
    "location": "#ScriptEntry-1",
    "page": "Functions",
    "title": "ScriptEntry",
    "category": "section",
    "text": "ScriptEntry"
},

{
    "location": "#StatisticalRethinking.scriptentry-Tuple{Any}",
    "page": "Functions",
    "title": "StatisticalRethinking.scriptentry",
    "category": "method",
    "text": "scriptentry\n\nConstructor for ScriptEntry objects.\n\nConstructor\n\nscriptentry(scriptfile;; nb=true, exe=true, doc=true)\n\nRequired arguments\n\n* `scriptfile::AbstractString`        : Script file\n\nOptional arguments\n\n* `nb::Bool`      : Generate a notebook version in notebooks directory\n* `exe::Bool`     : Execute the notebook (for testing or documentation purposes)\n* `doc::Bool`     : Insert documention into Github pages\n\nIf exe = false and doc = true it is assumed the appropriate .md files have been manually created and stored in docs/src/nn/... (Travis will terminate if runs take too long).\n\n\n\n\n\n"
},

{
    "location": "#scriptentry-1",
    "page": "Functions",
    "title": "scriptentry",
    "category": "section",
    "text": "scriptentry(scriptfile; nb = true, exe = true, doc = true)"
},

]}