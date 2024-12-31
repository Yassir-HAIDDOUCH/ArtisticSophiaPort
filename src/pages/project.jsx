import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Hero from "../layouts/hero";




function Project() {

    const { id } = useParams();

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

    const [filteredProject, setFilteredProject] = useState('');

    useEffect(() => {
        const project = projects.find(project => project.id == id);
        console.log(project);

        setFilteredProject(project);
    }, [id, projects]);


    

    return (
        <div>
            {filteredProject ? (
                <>
                    <Hero title={filteredProject.name}></Hero>
                </>
            ) : (
                <div>No results</div>
            )}
        </div>
    );
}

export default Project;