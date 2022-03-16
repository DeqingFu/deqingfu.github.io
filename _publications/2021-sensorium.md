---
title: "Harnessing the Conditioning Sensorium for Improved Image Translation"
collection: publications
permalink: /publication/2021-sensorium
#excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
date: 2021-10-11
venue: 'International Conference on Computer Vision (ICCV) 2021'
#paperurl: 'https://openaccess.thecvf.com/content/ICCV2021/papers/Nederhood_Harnessing_the_Conditioning_Sensorium_for_Improved_Image_Translation_ICCV_2021_paper.pdf'
#citation: 'Nederhood, Cooper, Nicholas I. Kolkin, Deqing Fu and Jason Salavon. “Harnessing the Conditioning Sensorium for Improved Image Translation.” ArXiv abs/2110.06443 (2021): n. pag.'
---


Multi-modal domain translation typically refers to synthesizing a novel image that inherits certain localized attributes from a ‘content’ image (e.g. layout, semantics, or geometry), and inherits everything else (e.g. texture, lighting, sometimes even semantics) from a ‘style’ image. The dominant approach to this task is attempting to learn disentangled ‘content’ and ‘style’ representations from scratch. However, this is not only challenging, but ill-posed, as what users wish to preserve during translation varies depending on their goals. Motivated by this inherent ambiguity, we define ‘content’ based on conditioning information extracted by off-the-shelf pre-trained models. We then train our style extractor and image decoder with an easy to optimize set of reconstruction objectives. The wide variety of high-quality pre-trained models available and simple training procedure makes our approach straightforward to apply across numerous domains and definitions of ‘content’. Additionally it offers intuitive control over which aspects of ’content’ are preserved across domains. We evaluate our method on traditional, well-aligned, datasets such as CelebA-HQ, and propose two novel datasets for evaluation on more complex scenes: ClassicTV and FFHQ-Wild. Our approach, Sensorium, enables higher quality domain translation for more complex scenes.