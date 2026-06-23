from PIL import Image

img = Image.open('/home/f0id/malera/public/malera.png').convert('RGBA')
data = img.getdata()

new_data = []
for item in data:
    r, g, b, a = item
    # Treat near-black pixels as transparent
    if r < 30 and g < 30 and b < 30:
        new_data.append((0, 0, 0, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('/home/f0id/malera/public/malera-transparent.png')
print('Saved malera-transparent.png')
