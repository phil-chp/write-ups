from sys import argv
import base62

if __name__=="__main__":
    if len(argv)==1:
        print("use: %s" % os.path.basename(argv[0]))
        raise SystemExit

    with open(argv[1], "r") as f:
        dec = decode(f.readlines())
        print(dec)