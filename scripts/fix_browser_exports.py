from pathlib import Path
import re

identity_dir = Path("platform/identity")

updated = []

pattern = re.compile(
    r'^window\.(\w+)\s*=\s*(\w+);\s*$',
    re.MULTILINE
)

for file_path in identity_dir.glob("*.js"):

    content = file_path.read_text(
        encoding="utf-8"
    )

    match = pattern.search(content)

    if not match:
        continue

    window_name = match.group(1)
    variable_name = match.group(2)

    replacement = f'''if (typeof window !== "undefined") {{

    window.{window_name} =
        {variable_name};

}}

if (typeof module !== "undefined") {{

    module.exports =
        {variable_name};

}}'''

    content = pattern.sub(
        replacement,
        content
    )

    file_path.write_text(
        content,
        encoding="utf-8"
    )

    updated.append(file_path.name)

print()
print("Updated files:")
for name in updated:
    print(" -", name)

print()
print(f"Total updated: {len(updated)}")
