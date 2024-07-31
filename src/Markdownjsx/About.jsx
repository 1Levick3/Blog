import aboutme from "./aboutme.jpg";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <br />
            <p>
                <img src={aboutme} alt="About" style={{ width: '80%', borderRadius: '25px' }} />
            </p>
            <br />
            <p>
                Oh hey there! Fancy seeing you here. If you’re on this page, you probably know me already. But just in case, allow me to reintroduce myself. I’m Levick, your friendly neighborhood software developer from India. When I&#39;m not coding, you’ll find me tickling the ivories on my piano or conquering virtual worlds in video games. That’s the lowdown on me!
            </p>
            <p>
                Now, about this blog page—let me spill the beans. I was inspired by a GitHub whiz named Urara. They had this super cool GitHub Pages template, but Svelte and Markdown were just too much for my lazy bones. So, I whipped up this page in ReactJS, which, by the way, I’ve been learning for a whole week now. Oh, and the main page is in Russian because I’ve been learning the language for six months. No practice partners, though, so I’m just sprinkling Russian wherever I can!
            </p>
            <p>
                I know this page isn’t going to win any speed or efficiency awards, but hey, it’s a work in progress. If you spot anything that needs a tweak, head over to my <a href="https://github.com/1Levick3">GitHub</a> and raise a PR. I’d love to hear from you!
            </p>
        </div>
    );
}

export default About;
