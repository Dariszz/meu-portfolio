type SectionLabelProps = { number: string; children: React.ReactNode };
export function SectionLabel({ number, children }: SectionLabelProps) { return <p className="section-label"><span>{number}</span>{children}</p>; }
