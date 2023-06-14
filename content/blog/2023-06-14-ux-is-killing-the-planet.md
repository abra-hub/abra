---
layout: blog
title: "UX is killing the planet! "
description: Great user experience is killing us (more or less)! My argument in
  this provocation is that the excessive focus on user experience (UX) by the
  tech industry and academic community has a negative impact on the
  sustainability of ICT devices. I will argue based on two examples, that we
  need new metrics or extend current UX metrics to also include third order
  effects and sustainability perspectives.
date: 2023-06-21T14:17:36.360Z
thumbnail: https://upload.wikimedia.org/wikipedia/commons/1/1d/Electronic_waste_at_Agbogbloshie%2C_Ghana.jpg
socialImage: https://upload.wikimedia.org/wikipedia/commons/1/1d/Electronic_waste_at_Agbogbloshie%2C_Ghana.jpg
authors:
  - Markus Löchtefeld
category: article
crosspost: true
---
**\*Disclaimer**: I do not want this provocative article to be understood as critique of the UX community (I would ascribe this label to myself as well), however, I would like to remind us, not to forget the problems that result from our own creations.*

The consequences of increased Green House Gas (GHG) emissions and the connected climate change have in recent years become much more apparent. While the Paris Agreement supposedly committed world leaders to ensure a maximum increase of 1.5°C of global warming, meeting this target seems increasingly less likely. The change needed to get close to this target will require drastic reductions across all sectors and ultimately reaching global net-zero GHG emissions by latest 2050. This will also mean that the Information and Communications Technology (ICT) sector will have to be decarbonized in some form or another. A recent study that examined peer-reviewed estimates on ICT's GHG emissions, and their analysis suggest that they realistically equate to 2.1% - 3.9% of global GHG emissions \[4]. Furthermore, the analysis also highlights that without major efforts these emissions will not reduce but are more likely to increase. 

Do renewable energy sources, not solve the problem? Computers need electricity and if that electricity is carbon neutral (which is not likely to happen anytime soon), does that not mean that most of the problems are solved? To a certain degree, yes, but ca. 30% from ICT's emissions, stem from embodied emissions, meaning the GHG emissions released as part of the manufacturing process, e.g., extraction of raw materials, the manufacturing process and transport \[4]. So, even if the other 70%, emissions that stem from the use phase (energy consumption during use and maintenance) would be covered by renewable energy sources, the ICT sector could still be responsible for around 1% of world-wide GHG emissions. 

ICT’s GHG impact is currently growing at a rate that would be intolerable for other sectors and it is only expected to continue to grow. Why do we accept this? Digital Exceptionalism \[5]! ICT solutions such as digitization and robotics, are often suggested to help other sectors reducing their GHG emissions \[6]. However, only few high-impact examples (e.g., online meetings vs. long-distance travel with face-to-face meetings) exist that demonstrate the potential and equally many negative examples (e.g., [Bitcoin having an energy consumption comparable to the Netherlands and on top of that a significant e-waste-problem](https://digiconomist.net/bitcoin-energy-consumption) ). Whether the overall reductions will outweigh ICT's impact on GHG emissions is very questionable, especially if we consider the resulting e-waste.

One element that plays a major role in all of that and that has been largely ignored is User Experience (UX). UX has been discussed and defined in many ways. The 2010 released ISO standard 9241-210:2010 "Ergonomics of Human-System Interaction—Part 210: Human-Centred Design for Interactive Systems" defines it as "A person’s perceptions and responses resulting from the use and/or anticipated use of a product, system or service" (in chapter 2 terms and definitions) \[7]. Very similar even though maybe a bit vaguer, the [Nielsen Norman Group](https://www.nngroup.com/articles/definition-user-experience/) defines it as: "User experience encompasses all aspects of the end-user's interaction with the company, its services, and its products" . Both these definitions imply that UX designers need to adopt a holistic perspective on the design of all elements (software as well as hardware) involved in the interaction, to create products that will be successful. In this provocation I will give examples that show how UX is responsible for sustainability issues of ICT that we often don’t consider. Specifically, our obsession with UX as a measure to quantify products could be indirectly one of the main contributors for an increase of ICT's GHG emissions. However, the goal of this provocation is not to criticize but rather, through two examples highlight potentials for future directions that hold potential for more environmentally sustainable ICT products.

#### **User Experience - the root of all evil?**

When it comes to digital services, we often use two ways to classify them when we talk about sustainability namely “sustainability in design” - referring to approaches that focus on mitigating effects stemming from the material design of a product - and “sustainability through design” - referring to approaches aim at creating more sustainable lifestyles empowered through technology \[10]. However, with respect to ICT products, such as smartphones, tablets, laptops, or other smart-products, this differentiation can be problematic. As discussed above, UX adopts a holistic perspective and the UX design and evaluations of these products are usually a result of the combination of hardware and software. The division mentioned before - while helpful to classify novel applications and ideas - can have detrimental effects on sustainability of ICT devices as it means that we divide between hardware and services. As we use UX as a holistic measuring stick for most products, we should use a similar holistic perspective on accessing the sustainability of the developed artefacts. 

While I agree with the fact that great UX is important for any product to succeed, there can arise problems from over-prioritizing it. Currently, UX is measuring only in the first- and second order effect created by the use of a product \[3]. First order effect means the impact and opportunities created by the existence of the product and second order refers to the ongoing use of the product. However, optimizing for short-term gains often can run counter to long-term success. UX usually neglects third order effects, meaning the aggregated impact created by large number of users using the product over a long time \[3]. There are good reasons for that. It is much harder to predict and at this point we have few- or no tools for assessing them. These can however have massive detrimental consequences for the environmental impact of ICT products. Here we can see a first working point, UX evaluation methods that include a sustainability lens as well.

One approach could be to integrate Life Cycle Assessments (LCA), which would help for example quantifying embodied GHG emissions and first- and second order effects quite well, but LCA would be less suited for third order effects. Even Life Cycle Cost (LCC)- or whole-life cost analysis is quite hard to predict in cases of exponential user growth. At this point very few practical guidelines exist. So, to this extend we need to work on more holistic evaluations metrics that allow to access UX and environmental sustainability with respect to third order effects. Let’s have a look at two practical examples that highlight the need for a sustainability perspective in UX.

#### **Hidden Data Traffic**

Hidden data traffic – meaning a system downloading data without the user explicitly telling it to do so - is one negative example in user interface (UI) design, which occurs in many scenarios. Most of these can be considered a direct result of increasing the UX of a specific UI. Probably the most common case is the endless scrolling feature on social media sites like Facebook, Instagram or TikTok, where, before the user scrolls to the bottom, more posts are pre-loaded so that no visible loading time occurs. This endless scrolling [dark pattern](https://www.deceptive.design/) is often considered to lead to mindless scrolling stealing the user’s time. However, I don't want to engage with the ethical dimension of this but rather focus on the environmental impact. One might argue that in most cases there is only little data overhead of a few MB, which is most likely the case, however, given that there are between 2-3 billion monthly active social media users, this can result in a large amount of wasted data. An example: If we assume that for every daily active Instagram user ([1.386 billion](https://blog.hootsuite.com/instagram-statistics) ) one image is loaded in excess (in the authors short test using the web client of Instagram, on average 3 images were loaded that were not visible and the image sizes varied between 31kb and 475kb with an average of 173kb over 50 images) this would result in 0.239 petabyte of excess data. At this point I abstain from calculating energy consumption or GHG emissions, as the numbers vary so widely in literature \[4]. However, I hope that this estimate of 0.239 petabyte just for Instagram, demonstrate that the problem should not be ignored. 

Here we can see a third-order effect, turning a tiny negative element into a massive problem. Similar issues have been highlighted in relation to streaming services \[12], where UX would promote high quality and low latency, but a sustainable approach would demand more conscious utilization of resources. A way to reduce such hidden data traffic could be to introduce design friction - elements that are less effortless and more taxing for the user to carry out. Before the proliferation of 3G, most mobile social media apps, did not automatically download more content in the background and the user had to press a button to get more content. Such simple frictions would save potentially a lot of data traffic and thereby a lot of energy. However, there are multiple problems at this point. First, we don't have a good understanding of the theoretical workings of design frictions, but it recently gained some more attention. Second, such frictions would be countering the business models of big social media companies. While the first issue can be overcome through more foundational research, the second probably won't. When simply using the websites of the social media companies, browser plugins might allow to add this friction and generate more awareness. Furthermore, there are many more cases (not only the endless scrolling) where data is pre-loaded for potential cases that don't happen, all in the name of UX.

Many cases of hidden data usage for the sake of UX exist that potentially could be solved by friction. While there are most likely cases with bigger potential gains, this example highlights a missing assessment of UX and potential unsustainable third order effects.

#### **Repair & Longevity**

The second example I want to discuss here is the effect that UX has on embodied emissions of the ICT sector. Our current linear way of producing, consuming, and discarding ICT products is not sustainable. To overcome this, several different pathways have been suggested in the past. One particular important element to reduce the disposal pace is repair. This has also been discussed as one of the key sub strategies for sustainable production systems in the circular economy (CE) \[8]. In research many examples have been explored how this can be overcome \[11]. Generally, users are replacing their devices to early compared to their optimal lifetime \[9] and most users do not repair their broken products, even when it is possible and economically beneficial \[2]. Prior research (stemming from industrial- and product design) shows that a user's decision whether to repair a product or not is depending on the one hand on whether the product is designed for repair and on the other hand it relies on the user’s knowledge and skills \[9, 11]. Especially the high level of integration in current ICT devices is quite problematic, as it obfuscates the inner layers and makes it hard to identify faults in the product \[1]. 

While the tight integration which e.g., decreases size and weight, and the usage of more energy demanding materials such as aluminum and glass, are beneficial for the hedonic qualities, aesthetics and feel of ICT products (thereby increasing the UX) they are detrimental to their repairability. For example, a phone with a glass back can "feel" sleeker and more desirable, however a glass back usually requires some kind of glue instead of screws to be hold in place and is much more fragile. However, solving these aspects should be left to industrial- and product design experts. 

There are however elements that the UX community can focus on and here I will postulate the hypothesis that if users have a good mental model of an ICT product, they will be able to make better repair decisions and prolong the products lifetime. Design plays a significant role for the decision making of users with respect to repair \[1]. However, if we look at ICT technology such as Smartphones and Laptops (here as the prime examples), we can see that these devices don't require the user to understand how they work internally, for them to be used. 20-30 years ago, this was very different, users had to e.g., install operating systems and wrangle with hardware drivers, thereby gaining a deeper understanding of the inner workings. This is like current users that build their own (gaming) PC's. Their level of knowledge of how an ICT device works is usually much higher, so they are much more likely to try to repair issues and replace components. Following this argument, we see that good UX - here reducing the friction and making the technology easily accessible for non-experts - is advancing the technologies unsustainability. Obviously, I will not argue that we should make the entry into using a computer harder again, but it would be worthwhile to understand how UI design and timed nudges during usage could create a good mental model that would allow users to make better repair choices. Similar to the previous example, to support repair activities devices might also require some more friction in the interface to make users reflect on the inner workings of the devices they are using. 

Devices like the [Fairphone](https://www.fairphone.com/) or the [Framework Laptop](https://frame.work/) are designed to be repairable and upgradeable, it is part of the brand and communicated in a way that it will part of the mental model the customer will get when they purchase the product. Framework even has a [DIY edition](https://frame.work/products/laptop-diy-12-gen-intel), where the user must assemble some of the parts before being able to use it. This means that the user also immediately gets an understanding of what is possible to repair or exchange. These are the kind of interactions that I envision could be worthwhile on a hardware level. On an Operating System level, Linux distributions (while having worked very hard to increase the UX and reduce friction) could be modified to allow users to get a better understanding of, and enable deeper interaction with, the inner workings of the computer for different experimental settings. 

The case of repair is another problem where the UX community can have a significant impact. While it is a much more complex problem with a variety of different layers that will require huge efforts to properly investigate and solve the issue, it is a very promising area, with potentially significant impact.

#### So?

My aim with this provocation is to highlight that before trying to use ICT and UX to solve the world’s problems, we as the UX community should focus on the effects of our own doing first. It might be the digital exceptionalism treatment of ICT \[5], that drives us to solve a lot of other problems before we focus on ICT itself. An important first move, should be to establish, that UX as the ultimate metric will harm sustainability of ICT devices, and that we need to take on more extensive and further reaching metrics. Designers must recognize that humans do not typically occupy a central role, but rather are part of a complex network of human and non-human actors that are socially, economically, and ecologically interdependent. And this needs to be also reflected in our tools to design and analyze interfaces.

**References**

*\[1] Arcos, B. P., Dangal, S., Bakker, C., Faludi, J., & Balkenende, R. (2021). Faults in consumer products are difficult to diagnose, and design is to blame: A user observation study. Journal of Cleaner Production, 319, 128741.*

*\[2] Brusselaers, J., Bracquene, E., Peeters, J., & Dams, Y. (2020). Economic consequences of consumer repair strategies for electrical household devices. Journal of Enterprise Information Management, 33(4), 747-767.*

*\[3] European Information Technology Observatory. 2002. The impact of ICT on sustainable development. Part 2 in Annual Report (2002).*

*\[4] Freitag, C., Berners-Lee, M., Widdicks, K., Knowles, B., Blair, G. S., & Friday, A. (2021). The real climate and transformative impact of ICT: A critique of estimates, trends, and regulations. Patterns, 2(9), 100340.*

*\[5] Knowles, B., Widdicks, K., Blair, G., Berners-Lee, M., & Friday, A. (2022). Our house is on fire: The climate emergency and computing's responsibility. Communications of the ACM, 65(6), 38-40.*

*\[6] Global e-Sustainability Initiative. (2015). GeSI SMARTer 2030: ICT Solutions for 21st Century Challenges \[Online] Available at: http://smarter2030. gesi. org/downloads. Full_report. pdf\[Accessed 10th October 2015].*

*\[7] ISO. (2008). ISO DIS 9241-210-Ergonomics of human system interaction-Part 210: Human-centered design for interactive systems.*

*\[8] MacArthur, E. (2013). Towards the circular economy. Journal of Industrial Ecology, 2(1), 23-44.*

*\[9] Magnier, L., & Mugge, R. (2022). Replaced too soon? An exploration of Western European consumers’ replacement of electronic products. Resources, Conservation and Recycling, 185, 106448.*

*\[10] Mankoff, J. C., Blevis, E., Borning, A., Friedman, B., Fussell, S. R., Hasbrouck, J., ... & Sengers, P. (2007, April). Environmental sustainability and interaction. In CHI'07 extended abstracts on Human factors in computing systems (pp. 2121-2124).*

*\[11] Özçelik, A., Löchtefeld, M., & Tollestrup, C. (2022). Long-lasting smart products: Overview of longevity concepts in sustainable ICT and design for sustainability. DRS2022: Bilbao, 25.*

*\[12] Widdicks, K., Hazas, M., Bates, O., & Friday, A. (2019, May). Streaming, multi-screens and YouTube: The new (unsustainable) ways of watching in the home. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1-13).*