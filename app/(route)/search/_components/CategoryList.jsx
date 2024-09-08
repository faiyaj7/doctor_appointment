"use client";
import { getCategories, getDoctors } from "@/app/actions/globalServerApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const path = usePathname();
  const [actualPath, setActualPath] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const realPath = path.split("/")[2];
    setActualPath(realPath);
    const fetchData = async () => {
      const response = await getCategories();
      setData(response);
    };
    fetchData();
  }, [actualPath, path]);

  return (
    <div className="h-screen flex flex-col mt-5 p-2">
      {" "}
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {data?.map((category) => (
              <CommandItem key={category.id}>
                <Link
                  href={`/search/${category.attributes.Name}`}
                  className={`${
                    actualPath === category.attributes.Name && "bg-blue-100"
                  } flex items-center justify-start gap-4 cursor-pointer w-full p-2`}
                >
                  <Image
                    src={category.attributes.Icon.data[0].attributes.url}
                    alt={category.attributes.Name}
                    width={25}
                    height={25}
                  />
                  <h2 className="font-medium text-sm text-blue-500">
                    {category.attributes.Name}
                  </h2>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
