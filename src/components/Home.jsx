import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

import { locations } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const projects = locations.work.children ?? [];

const Home = () => {

    const {setActiveLocation} = useLocationStore();   
    const {openWindow} = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow('finder');
    }

    useGSAP(() => {
            Draggable.create(".folder");
    }, []);

  return (
    <section>
        <ul>
            {projects.map((project)=>(
                <li key={project.id} className={clsx("group folder",project.windowPosition)}>
                    <img src="/images/folder.png" alt={project.name}
                    onClick={()=>handleOpenProjectFinder(project)}/>
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home