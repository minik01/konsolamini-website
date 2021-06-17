export function A(props: { href: string, children: any }) {
    return <>
        {props.href ?
            <a href={props.href} rel="noreferrer" target="_blank">{props.children}</a> :
            props.children}
    </>
}
