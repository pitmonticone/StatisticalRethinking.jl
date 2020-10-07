var documenterSearchIndex = {"docs":
[{"location":"references.html#References","page":"References","title":"References","text":"","category":"section"},{"location":"references.html","page":"References","title":"References","text":"This package is based on:","category":"page"},{"location":"references.html","page":"References","title":"References","text":"McElreath: Statistical Rethinking 2nd edition","category":"page"},{"location":"references.html","page":"References","title":"References","text":"There is no shortage of additional good books on Bayesian statistics. A few of my favorites are:","category":"page"},{"location":"references.html","page":"References","title":"References","text":"Bolstad: Introduction to Bayesian statistics\nBolstad: Understanding Computational Bayesian Statistics\nGelman, Hill: Data Analysis using regression and multileve,/hierachical models\nKruschke: Doing Bayesian Data Analysis\nLee, Wagenmakers: Bayesian Cognitive Modeling\nGelman, Carlin, and others: Bayesian Data Analysis\nCausal Inference in Statistics - A Primer","category":"page"},{"location":"references.html","page":"References","title":"References","text":"and a great read (and implementation in DynamicHMC.jl):","category":"page"},{"location":"references.html","page":"References","title":"References","text":"Betancourt: A Conceptual Introduction to Hamiltonian Monte Carlo","category":"page"},{"location":"intro.html#Purpose-of-this-package","page":"Introduction","title":"Purpose of this package","text":"","category":"section"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"This package contains Julia versions of selected code snippets and mcmc models contained in the R package \"rethinking\" associated with the book Statistical Rethinking by Richard McElreath.","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"As stated many times by the author in his online lectures, this package is not intended to take away the hands-on component of the course. The clips are just meant to get you going but learning means experimenting, in this case using Julia and Stan.","category":"page"},{"location":"intro.html#Time-line-considerations","page":"Introduction","title":"Time line considerations","text":"","category":"section"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"The 2nd edition of the book is going to print in March 2020. This was also the target date for completion of v2 of StatisticalRethinking.jl but I opted to apply a major refactoring of the setup to minimize load/compilation times. I'm now targetting mid May 2020. Still, I do think the currrent version is useful. Feedback is welcome!","category":"page"},{"location":"intro.html#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"In the book and associated R package rethinking, statistical models are defined as illustrated below:","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"flist <- alist(\n  height ~ dnorm( mu , sigma ) ,\n  mu <- a + b*weight ,\n  a ~ dnorm( 156 , 100 ) ,\n  b ~ dnorm( 0 , 10 ) ,\n  sigma ~ dunif( 0 , 50 )\n)","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"The author of the book states: \"If that (the statistical model) doesn't make much sense, good. ... you're holding the right textbook, since this book teaches you how to read and write these mathematical descriptions\" (page 77).","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"StatisticalRethinkingJulia is intended to allow experimenting with this learning process using Stan and Julia.","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"In the R package rethinking, posterior values can be approximated by","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"# Simulate quadratic approximation (for simpler models)\nm4.31 <- quap(flist, data=d2)","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"or generated using Stan by:","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"# Generate a Stan model and run a simulation\nm4.32 <- ulam(flist, data=d2)","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"In v2.x of StatisticalRethinking.jl, R's ulam() has been replaced by StanSample.jl. This means that much earlier on than in the book, StatisticalRethinking.jl introduces the reader to the Stan language.","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"To help out with this, in the subdirectory scripts/03/intro-stan the Stan language is introduced and the execution of Stan language programs illustrated. Chapter 9 of the book contains a nice introduction to translating the alist R models to the Stan language (just before section 9.5).","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"The equivalent of the R function quap() in StatisticalRethinking.jl v2.0 uses the MAP density of the Stan samples as the mean of the Normal distribution and reports the approximation as a NamedTuple. e.g. from ./scripts/04-part-1/clip-31.jl:","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"if success(rc)\n  println()\n  df = read_samples(sm; output_format=:dataframe)\n  q = quap(df)\n  q |> display\nend","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"returns:","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"(mu = 178.0 ± 0.1, sigma = 24.5 ± 0.94)","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"To obtain the mu quap:","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"q.mu","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"Examples and comparisons of different ways of computing a quap approximation can be found in scripts/03/intro-stan/intro-part-4.jl. ","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"The increasing use of Particles to represent quap approximations is possible thanks to the package MonteCarloMeasurements.jl. Soss.jl and related write-ups introduced me to that option.","category":"page"},{"location":"future.html#Future-plans","page":"Future","title":"Future plans","text":"","category":"section"},{"location":"future.html","page":"Future","title":"Future","text":"There is a plan to release a version of StatisticalRethinking.jl that will be based on DynamicHMC.jl. No firm timeline has been set for this.","category":"page"},{"location":"acknowledgements.html#Acknowledgements","page":"Acknowledgements","title":"Acknowledgements","text":"","category":"section"},{"location":"acknowledgements.html","page":"Acknowledgements","title":"Acknowledgements","text":"Of course, without this excellent textbook by Richard McElreath, this package would not have been possible. The author has also been supportive of this work and gave permission to use the datasets.","category":"page"},{"location":"acknowledgements.html","page":"Acknowledgements","title":"Acknowledgements","text":"Richard Torkar has taken the lead in developing the Turing versions of the models in chapter 8 and subsequent chapters. ","category":"page"},{"location":"acknowledgements.html","page":"Acknowledgements","title":"Acknowledgements","text":"Tamas Papp has been very helpful during the development of the DynamicHMC versions of the models.","category":"page"},{"location":"acknowledgements.html","page":"Acknowledgements","title":"Acknowledgements","text":"The TuringLang team and #turing contributors on Slack have been extremely helpful! The Turing examples by Cameron Pfiffer are followed closely in several example scripts.","category":"page"},{"location":"acknowledgements.html","page":"Acknowledgements","title":"Acknowledgements","text":"The increasing use of Particles to represent quap approximations is possible thanks to the package MonteCarloMeasurements.jl. Soss.jl and related write-ups introduced me to that option.","category":"page"},{"location":"acknowledgements.html","page":"Acknowledgements","title":"Acknowledgements","text":"The initial approach of using Literate.jl to generate .md files and Jupyter notebooks has been dropped in this version. Please let me know if that functionality is missed.","category":"page"},{"location":"installation.html#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation.html","page":"Installation","title":"Installation","text":"This package can be installed from the REPL as follows:","category":"page"},{"location":"installation.html","page":"Installation","title":"Installation","text":"] add StatisticalRethinking\n[del] ","category":"page"},{"location":"installation.html","page":"Installation","title":"Installation","text":"While working through the book/snippets I suggest:","category":"page"},{"location":"installation.html","page":"Installation","title":"Installation","text":"] dev StatisticalRethinking","category":"page"},{"location":"installation.html","page":"Installation","title":"Installation","text":"This puts the package source code in your development subdirectory which I find is easier to use from within an editor.","category":"page"},{"location":"installation.html","page":"Installation","title":"Installation","text":"In scripts/00/install_packages.jl is a scripts that installs all additional library packages needed to run all scripts in StatisticalRethinking.","category":"page"},{"location":"installation.html","page":"Installation","title":"Installation","text":"The installation of the necessary glue code for some of these packages is managed by Requires.jl. Again this is not ideal in that the documentation for the glue code functions is only available online (e.g. in the REPL). Over time this will be fixed.","category":"page"},{"location":"layout.html#Layout-of-the-package","page":"Layout","title":"Layout of the package","text":"","category":"section"},{"location":"layout.html","page":"Layout","title":"Layout","text":"Instead of having all snippets in a single file, the snippets are organized by chapter and grouped in clips by related snippets. E.g. chapter 0 of the R package has snippets 0.1 to 0.5. Those have been combined into 2 clips:","category":"page"},{"location":"layout.html","page":"Layout","title":"Layout","text":"clip-01-03.jl - contains snippets 0.1 through 0.3\nclip-04-05.jl - contains snippets 0.4 and 0.5.","category":"page"},{"location":"layout.html","page":"Layout","title":"Layout","text":"A single snippet clip will be referred to as 03/clip-02.jl. ","category":"page"},{"location":"layout.html","page":"Layout","title":"Layout","text":"Several chapters have intro sections to bridge differences between rethinking and StatisticalRethinking.jl.","category":"page"},{"location":"index.html","page":"Functions","title":"Functions","text":"CurrentModule = StatisticalRethinking","category":"page"},{"location":"index.html#rel_path","page":"Functions","title":"rel_path","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"rel_path(parts...)","category":"page"},{"location":"index.html#StatisticalRethinking.rel_path-Tuple","page":"Functions","title":"StatisticalRethinking.rel_path","text":"rel_path\n\nRelative path using the StatisticalRethinking src/ directory.\n\nExample to get access to the data subdirectory\n\nrel_path(\"..\", \"data\")\n\n\n\n\n\n","category":"method"},{"location":"index.html#link","page":"Functions","title":"link","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"link(dfa::DataFrame, vars, xrange)","category":"page"},{"location":"index.html#StatisticalRethinking.link-Tuple{DataFrame,Any,Any}","page":"Functions","title":"StatisticalRethinking.link","text":"link\n\nCompute the link function for standardized variables.\n\nlink(dfa, vars, xrange)\n\n\nExtended help\n\nRequired arguments\n\n* `df::DataFrame`                      : Chain samples converted to a DataFrame\n* `vars::Vector{Symbol}`               : Variables in DataFrame (2 variables)\n* `xrange::range`                      : Range over which link values are computed\n\nOptional arguments\n\n* `xbar::Float64`                      : Mean value of observed predictor\n* `ybar::Float64`                      : Mean value of observed outcome (requires xbar argument)\n\nReturn values\n\n* `result`                             : Vector of link values\n\n\n\n\n\n","category":"method"},{"location":"index.html#rescale","page":"Functions","title":"rescale","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"rescale(x::Vector{Float64}, xbar::Float64, xstd::Float64)","category":"page"},{"location":"index.html#StatisticalRethinking.rescale-Tuple{Array{Float64,1},Float64,Float64}","page":"Functions","title":"StatisticalRethinking.rescale","text":"rescale\n\nRescale a vector to \"un-standardize\", the opposite of scale!().\n\nrescale(x, xbar, xstd)\n\n\nExtended help\n\nRequired arguments\n\n* `x::Vector{Float64}`                 : Vector to be rescaled\n* `xbar`                               : Mean value for rescaling\n* `xstd`                               : Std for rescaling\n\nReturn values\n\n* `result::AbstractVector`             : Rescaled vector\n\n\n\n\n\n","category":"method"},{"location":"index.html#quap","page":"Functions","title":"quap","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"quap(df::DataFrame)","category":"page"},{"location":"index.html#StatisticalRethinking.quap-Tuple{DataFrame}","page":"Functions","title":"StatisticalRethinking.quap","text":"quap\n\nQuadratic approximation of a posterior distribution\n\nMethod\n\nquap(df) \n\nRequired arguments\n\n* `df::DataFrame`                      : Dataframe generated from samples (chains)\n\nReturn values\n\n* `result::NamedTuple`                 : NamedTuple representing the quadratic approximation\n\nTo convert to a Dict use:\n\ndct = Dict(pairs(result))\n\nExample\n\n\n# Run stan_sample() on a SampleModel\n\nif success(rc)\n\t\n\tdf = read_samples(sm; output_format=:dataframe)\n\tq = quap(df)\n\nend\n\n\n\n\n\n\n","category":"method"},{"location":"index.html#sample","page":"Functions","title":"sample","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"sample(df::DataFrame, n; replace=true, ordered=false)","category":"page"},{"location":"index.html#StatsBase.sample-Tuple{DataFrame,Any}","page":"Functions","title":"StatsBase.sample","text":"sample\n\nSample rows from a DataFrame\n\nMethod\n\nsample(df, n; replace, ordered) \n\nRequired arguments\n\n* `df::DataFrame`                      : DataFrame\n* `n::Int`                             : Number of samples\n\nOptional argument\n\n* `rng::AbstractRNG`                   : Random number generator\n* `replace::Bool=true`                 : Sample with replace \n* `ordered::Bool=false`                : Sort sample \n\nReturn values\n\n* `result`                             : Array of samples\n\n\n\n\n\n","category":"method"},{"location":"index.html#hpdi","page":"Functions","title":"hpdi","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"hpdi(x::Vector{T}; alpha::Real=0.05) where {T<:Real}","category":"page"},{"location":"index.html#StatisticalRethinking.hpdi-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:Real","page":"Functions","title":"StatisticalRethinking.hpdi","text":"hpdi\n\nCompute high density region.\n\nhpdi(x; alpha)\n\n\nDerived from hpd in MCMCChains.jl.\n\nAlpha represents the 2-sided tail area, i.e. p < 0.055% and p > 0.945%.\n\n\n\n\n\n","category":"method"},{"location":"index.html#plotcoef","page":"Functions","title":"plotcoef","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"plotcoef(models::Vector{SampleModel}, pars::Vector{Symbol}, fig::AbstractString, title=\"\", func=nothing)\nplotcoef(model::SampleModel, pars::Vector{Symbol}, fig::AbstractString, title=\"\", func=nothing)","category":"page"},{"location":"index.html#StatisticalRethinking.plotcoef","page":"Functions","title":"StatisticalRethinking.plotcoef","text":"plotcoef\n\nMultiple regression coefficient plot.\n\nplotcoef(models, pars, fig)\nplotcoef(models, pars, fig, title)\nplotcoef(models, pars, fig, title, func)\n\n\nRequired arguments\n\n* `models`                             : Vector of `SampleModel`s to compare\n* `pars`                               : Vector of parameters to include in comparison\n* `fig`                                : File to store the produce plot\n\nOptional arguments\n\n* `title=\"\"`                           : Title for plot\n* `func=nothing`                       : Optional funtion to apply to sample dataframe\n\nCurrently the only function available is quap.\n\nThe function will be called with a single argument, a dataframe constructed from all samples in all chains in the SampleModels. \n\nIt return a Partcles type NamedTuple. e.g.:\n\n(a = 0.000527 ± 0.1, bM = -0.0628 ± 0.16, bA = -0.608 ± 0.16, sigma = 0.828 ± 0.089)\n\nAn example can be found in scipts/05/clip-13.jl.\n\nReturn values\n\n* `result::NamedTuple`                 : Vector{NamedTuple} of estimates (Particles or Quap)\n\n\n\n\n\n","category":"function"},{"location":"index.html#StatisticalRethinking.plotcoef-2","page":"Functions","title":"StatisticalRethinking.plotcoef","text":"plotcoef\n\nMultiple regression coefficient plot.\n\nplotcoef(model, pars, fig)\nplotcoef(model, pars, fig, title)\nplotcoef(model, pars, fig, title, func)\n\n\nRequired arguments\n\n* `model`                              : SampleModel to display\n* `pars`                               : Vector of parameters to include in comparison\n* `fig`                                : File to store the produced plot\n\nOptional arguments\n\n* `title=\"\"`                           : Title for plot\n* `func=nothing`                       : Optional funtion to apply to sample dataframe\n\nCurrently the only function available is quap.\n\nThe function will be called with a single argument, a dataframe constructed from all samples in all chains in the SampleModel.\n\nIt returns a Particles type NamedTuple. e.g.:\n\n(a = 0.000527 ± 0.1, bM = -0.0628 ± 0.16, bA = -0.608 ± 0.16, sigma = 0.828 ± 0.089)\n\nAn examples can be found in scipts/06/clip-12-05.jl.\n\nReturn values\n\n* `result::NamedTuple`                 : NamedTuple of estimates (Particles or Quap)\n\n\n\n\n\n","category":"function"},{"location":"index.html#pairsplot","page":"Functions","title":"pairsplot","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"pairsplot(df::DataFrame, vars::Vector{Symbol}, fig::AbstractString)","category":"page"},{"location":"index.html#StatisticalRethinking.pairsplot-Tuple{DataFrame,Array{Symbol,1},AbstractString}","page":"Functions","title":"StatisticalRethinking.pairsplot","text":"pairsplot\n\nA simple version of StatsPlots' cornerplot.\n\npairsplot(df, vars, fig)\n\n\nRequired arguments\n\n* `df::DataFrame`                      : DataFrame containing the variables (as columns)\n* `vars::Vector{Symbol}`               : Vector of variables to include in plot\n* `fig::AbstractString`                : File to store the produced plot\n\n\n\n\n\n","category":"method"},{"location":"index.html#plotbounds","page":"Functions","title":"plotbounds","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"plotbounds(\n  df::DataFrame, \n  xvar::Symbol,\n  yvar::Symbol, \n  dfs::DataFrame, \n  linkvars::Vector{Symbol};\n  fig::AbstractString=\"\",\n  bounds::Vector{Symbol}=[:range, :hpdi],\n  title::AbstractString=\"\",\n  xlab::AbstractString=String(xvar),\n  ylab::AbstractString=String(yvar),\n  alpha::Float64=0.11,\n  colors::Vector{Symbol}=[:lightgrey, :grey],\n  stepsize::Float64=0.01\n)","category":"page"},{"location":"index.html#StatisticalRethinking.plotbounds-Tuple{DataFrame,Symbol,Symbol,DataFrame,Array{Symbol,1}}","page":"Functions","title":"StatisticalRethinking.plotbounds","text":"plotbounds\n\nPlot regression line and intervals based on Stan samples of coeffficients.\n\nplotbounds(df, xvar, yvar, dfs, linkvars; fig, bounds, title, xlab, ylab, alpha, colors, stepsize, rescale_axis)\n\n\nRequired arguments\n\n* `df::DataFrame`                      : DataFrame with observed variables and scaled variables\n* `xvar::Symbol`                       : X variable in df\n* `yvar::Symbol`                       : Y variable in df\n* `dfs::DataFrame`                     : DataFrame with Stan samples\n* `linkvars::Vector{Symbol}`           : Initial 2 Symbols are regression coefficients,\n                                         3rd - only for :predict bounds indicates σ.\n\nOptional arguments\n\n* `fig::AbstractString=\"\"`             : File to store the plot. If \"\", a plot is returned\n* `bounds::Vector{Symbol}`             : Bounds to display, see below\n* `title::AbstractString=\"\"`           : Title for plot\n* `title::AbstractString=String(xvar)` : X axis variable label\n* `title::AbstractString=String(yvar)` : Y axis variable label\n* `alpha::Float64=0.11`                : Interval value, defaults to [0.045, 0.945]\n* `colors::Vector{Symbol}`             : Colors for regions, defaults to [:lightgrey, :grey]\n* `stepsize::Float64=0.01`             : Stepsize for boundary accuracy \n* `rescale_axis=true`                  : Display using un-standardized scale         \n\nThis method is primarily intended to display 2 regions, typically predicted values and  the quantile or hpdi region around the mean line. This is specified using the bounds keyword argument, e.g. bounds = [:predicted, :hpdi].\n\nFor the prediction interval, a 3rd parameter needs to be present in the Stan sample DataFrame (dfs) containing the σ value. This symbol needs to be added to linkvars, e.g.\n\nlinkvars = [:a, :bM, :sigma]\n\nFor other options, :quantile and :hpdi, two parameters suffice (typically the itercept and slope parameters).\n\n\n\n\n\n","category":"method"},{"location":"index.html#simulate","page":"Functions","title":"simulate","text":"","category":"section"},{"location":"index.html","page":"Functions","title":"Functions","text":"simulate(df, coefs, var_seq)\nsimulate(df, coefs, var_seq, coefs_ext)","category":"page"},{"location":"index.html#StatisticalRethinking.simulate-Tuple{Any,Any,Any}","page":"Functions","title":"StatisticalRethinking.simulate","text":"simulate\n\nUsed for counterfactual simulations.\n\nsimulate(df, coefs, var_seq)\n\n\nRequired arguments\n\n* `df`                                 : DataFrame with coefficient samples\n* `coefs`                              : Vector of coefficients\n* `var_seq`                            : Input values for simulated effect\n\nReturn values\n\n* `m_sim::NamedTuple`                  : Array with predictions\n\n\n\n\n\n","category":"method"},{"location":"index.html#StatisticalRethinking.simulate-NTuple{4,Any}","page":"Functions","title":"StatisticalRethinking.simulate","text":"plotcoef\n\nCounterfactual predictions after manipulating a variable.\n\nsimulate(df, coefs, var_seq, coefs_ext)\n\n\nRequired arguments\n\n* `df`                                 : DataFrame with coefficient samples\n* `coefs`                              : Vector of coefficients\n* `var_seq`                            : Input values for simulated effect\n* `ext_coefs`                          : Vector of simulated variable coefficients\n\nReturn values\n\n* `(m_sim, d_sim)`                     : Arrays with predictions\n\n\n\n\n\n","category":"method"},{"location":"index.html","page":"Functions","title":"Functions","text":"##convert_a3d","category":"page"},{"location":"index.html","page":"Functions","title":"Functions","text":"convert_a3d(a3d_array, cnames, ::Val{:dataframe})\nconvert_a3d(a3d_array, cnames, ::Val{:dataframes})","category":"page"},{"location":"index.html#StatisticalRethinking.convert_a3d-Tuple{Any,Any,Val{:dataframe}}","page":"Functions","title":"StatisticalRethinking.convert_a3d","text":"convert_a3d\n\nconvert_a3d(a3d_array, cnames, _)\n\n\nConvert the output file(s) created by stan_sample() to a single DataFrame.\n\n\n\n\n\n","category":"method"},{"location":"index.html#StatisticalRethinking.convert_a3d-Tuple{Any,Any,Val{:dataframes}}","page":"Functions","title":"StatisticalRethinking.convert_a3d","text":"convert_a3d\n\nconvert_a3d(a3d_array, cnames, _)\n\n\nConvert the output file(s) created by stan_sample() to a Vector{DataFrame).\n\n\n\n\n\n","category":"method"},{"location":"srgithub.html#Github-organization","page":"StatisticalRethinkingJulia","title":"Github organization","text":"","category":"section"},{"location":"srgithub.html","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia","text":"StatisticalRethinking.jl is part of the broader StatisticalRethinkingJulia Github organization.","category":"page"},{"location":"srgithub.html","page":"StatisticalRethinkingJulia","title":"StatisticalRethinkingJulia","text":"Implementations of the models using Stan, DynamicHMC and Turing can be found in StanModels, DynamicHMCModels and TuringModels.","category":"page"}]
}