import type { ComponentType, SVGProps } from "react";

import {
  ActivityIcon,
  BookIcon,
  CalendarIcon,
  ChecklistIcon,
  ClipboardIcon,
  CodeIcon,
  CogIcon,
  CompassIcon,
  EyeIcon,
  FlowIcon,
  GaugeIcon,
  KeyIcon,
  LayersIcon,
  LayoutIcon,
  MagnifierIcon,
  NetworkIcon,
  PaletteIcon,
  PlugIcon,
  RocketIcon,
  ShieldIcon,
  SparkIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/icons";
import type { IconName } from "@/types/services";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const ICON_MAP: Record<IconName, IconComponent> = {
  activity: ActivityIcon,
  book: BookIcon,
  calendar: CalendarIcon,
  checklist: ChecklistIcon,
  clipboard: ClipboardIcon,
  code: CodeIcon,
  cog: CogIcon,
  compass: CompassIcon,
  eye: EyeIcon,
  flow: FlowIcon,
  gauge: GaugeIcon,
  key: KeyIcon,
  layers: LayersIcon,
  layout: LayoutIcon,
  magnifier: MagnifierIcon,
  network: NetworkIcon,
  palette: PaletteIcon,
  plug: PlugIcon,
  rocket: RocketIcon,
  shield: ShieldIcon,
  spark: SparkIcon,
  target: TargetIcon,
  users: UsersIcon,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = ICON_MAP[name];
  return <Cmp className={className} />;
}
