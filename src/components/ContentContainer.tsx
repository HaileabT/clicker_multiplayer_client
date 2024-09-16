import { ContainerProp } from "@/shared/props/containerProps";

export default function ContentContainer(prop: ContainerProp) {
    return (<div className="bg-bg_primary h-full w-full shadow-[0.5rem_0.5rem_#262322] grid place-items-center">
        <prop.component {...prop.props} />
    </div>)
}