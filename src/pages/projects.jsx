import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Hero from "../layouts/hero";



function projects() {

    const [projects, setProjects] = useState([
        { id: "3DModels", name: "3D Models" },
        { id: "PNGTubers", name: "PNG Tubers" },
        { id: "VTubers", name: "VTubers" },
        { id: "PFP", name: "PFP" },
        { id: "PixelArt", name: "Pixel Art" },
        { id: "AnimeArt", name: "Anime Art" },
        { id: "CharacterArt", name: "Character Art" },
        { id: "OCs", name: "OC's" },
        { id: "RobloxandMinecraftArt", name: "Roblox and Minecraft Art" },
        { id: "Logo", name: "Logo" },
        { id: "AnimatedLogo", name: "Animated Logo" },
        { id: "Banner", name: "Banner" },
        { id: "AnimatedBanner", name: "Animated Banner" },
        { id: "Animations", name: "Animations" },
        { id: "MangaandComicArt", name: "Manga and Comic Art" },
        { id: "StreamingPacks", name: "Streaming Packs" },
        { id: "Overlays", name: "Overlays" },
        { id: "Screens", name: "Screens" },
        { id: "Alerts", name: "Alerts" },
        { id: "Badges", name: "Badges" },
        { id: "Emotes", name: "Emotes" },
        { id: "Panels", name: "Panels" },
        { id: "Intro", name: "Intro" },
        { id: "Outro", name: "Outro" }
    ]);



    return (
        <>
            <div className="bg-bodyBg ">

                <Hero title={"Projects"}></Hero>

                <div className='container flex flex-wrap py-5 ' >
                    {projects.map((project, index) => (
                        <Link to={`/project/${project.id}`}>
                            <button class="px-8 z-30 py-4  m-3 border-2 border-white rounded-md text-white relative font-semibold hover:border-transparent after:-z-20 after:absolute after:h-1 after:w-1 after:bg-primary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl">
                                {project.name}
                            </button>
                        </Link>
                    ))};
                </div>

            </div>

        </>
    );
}

export default projects;