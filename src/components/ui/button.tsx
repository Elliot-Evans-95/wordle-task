const Button = ({ className, type, ...props }: any) =>
(
    <button
        className={className}
        type={type}
        {...props}
    />
)

export { Button }
