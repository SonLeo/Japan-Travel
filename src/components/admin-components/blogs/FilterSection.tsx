import { ChevronDownIcon, Cog6ToothIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function FilterSection () {
    return (
        <section>
            <div className="flex dark:text-white border border-stroke w-fit py-1 px-3 rounded hover:bg-stroke dark:hover:text-black">
                <FunnelIcon className="w-6 h-6 mr-2" /> Filter
            </div>
            <div className="flex dark:text-white border border-stroke w-fit py-1 px-3 rounded hover:bg-stroke dark:hover:text-black">
                <Cog6ToothIcon className="w-6 h-6 mr-2" /> Columns <ChevronDownIcon className="w-4 h-6 ml-2" />
            </div>
        </section>
    )
}